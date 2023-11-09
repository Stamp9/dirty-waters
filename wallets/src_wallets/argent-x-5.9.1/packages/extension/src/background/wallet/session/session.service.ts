import Emittery from "emittery"
import { ethers } from "ethers"
import { ProgressCallback } from "ethers/lib/utils"
import { noop, throttle } from "lodash-es"

import { SessionError } from "../../../shared/errors/session"
import { IScheduleService } from "../../../shared/schedule/interface"
import { ObjectStorage } from "../../../shared/storage"
import { IObjectStore } from "../../../shared/storage/__new/interface"
import { adaptObjectStorage } from "../../../shared/storage/__new/object"
import {
  WalletBackupService,
  WalletStorageProps,
} from "../backup/backup.service"
import { WalletRecoverySharedService } from "../recovery/shared.service"
import { Events, Locked } from "./interface"

type TaskId = "sessionTimeout"

/**
 * @deprecated use `sessionRepo` instead
 */
export const sessionStore = new ObjectStorage<WalletSession | null>(null, {
  namespace: "core:wallet:session",
  areaName: "session",
})

export const sessionRepo = adaptObjectStorage(sessionStore)

export interface WalletSession {
  secret: string
  password: string
}

export class WalletSessionService {
  private _locked = true

  constructor(
    readonly emitter: Emittery<Events>,
    readonly store: IObjectStore<WalletStorageProps>,
    readonly sessionStore: IObjectStore<WalletSession | null>,
    private readonly backupService: WalletBackupService,
    private readonly recoverySharedService: WalletRecoverySharedService,
    private readonly scheduleService: IScheduleService<TaskId>,
    private SESSION_DURATION: number,
    private SCRYPT_N: number,
  ) {
    void (async () => {
      /** initialise locked state */
      const open = await this.isSessionOpen()
      this.locked = !open
    })()
  }

  public async isSessionOpen(): Promise<boolean> {
    return (await this.sessionStore.get()) !== null
  }

  public async startSession(
    password: string,
    progressCallback?: ProgressCallback,
  ): Promise<boolean> {
    // session has already started
    const session = await this.sessionStore.get()
    if (session) {
      return true
    }

    const throttledProgressCallback = throttle(progressCallback ?? noop, 50, {
      leading: true,
      trailing: true,
    })

    // wallet is not initialized: let's initialise it
    if (!(await this.backupService.isInitialized())) {
      await this.generateNewLocalSecret(password, throttledProgressCallback)
      return true
    }

    const backup = (await this.store.get()).backup

    if (!backup) {
      throw new SessionError({ code: "NO_BACKUP_FOUND" })
    }

    try {
      const wallet = await ethers.Wallet.fromEncryptedJson(
        backup,
        password,
        throttledProgressCallback,
      )

      await this.setSession(wallet.privateKey, password)

      // if we have not yet discovered accounts, do it now. This only applies to wallets which got restored from a backup file, as we could not restore all accounts from onchain yet as the backup was locked until now.
      const discoveredOnce = (await this.store.get()).discoveredOnce
      if (!discoveredOnce) {
        await this.recoverySharedService.discoverAccounts()
      }

      return true
    } catch {
      this.locked = true
      return false
    }
  }

  private async generateNewLocalSecret(
    password: string,
    progressCallback?: ProgressCallback,
  ) {
    if (await this.backupService.isInitialized()) {
      return
    }

    const ethersWallet = ethers.Wallet.createRandom()
    const encryptedBackup = await ethersWallet.encrypt(
      password,
      { scrypt: { N: this.SCRYPT_N } },
      progressCallback,
    )

    await this.store.set({ discoveredOnce: true })
    await this.store.set({ backup: encryptedBackup })
    return this.setSession(ethersWallet.privateKey, password)
  }

  public async checkPassword(password: string): Promise<boolean> {
    const session = await this.sessionStore.get()
    return session?.password === password
  }

  public async lock() {
    await this.sessionStore.set(null)
    this.locked = true
  }

  async setSession(secret: string, password: string) {
    await this.sessionStore.set({ secret, password })

    void this.scheduleService.registerImplementation({
      id: "sessionTimeout",
      callback: this.lock.bind(this),
    })

    void this.scheduleService.in(this.SESSION_DURATION * 6e3, {
      id: "sessionTimeout",
    })

    this.locked = false
  }

  get locked() {
    return this._locked
  }

  private set locked(locked: boolean) {
    if (this._locked === locked) {
      return
    }
    this._locked = locked
    void this.emitter.emit(Locked, this.locked)
  }
}
