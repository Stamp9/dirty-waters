import { memoize } from "lodash-es"

import {
  hideNotificationBadge,
  showNotificationBadge,
} from "../../shared/browser/badgeText"
import {
  MultisigPendingTransaction,
  multisigPendingTransactionsStore,
} from "../../shared/multisig/pendingTransactionsStore"
import { getMultisigAccountFromBaseWallet } from "../../shared/multisig/utils/baseMultisig"
import { Transaction } from "../../shared/transactions"
import {
  BaseWalletAccount,
  MultisigWalletAccount,
} from "../../shared/wallet.model"
import { accountsEqual } from "../../shared/utils/accountsEqual"
import { old_walletStore } from "../../shared/wallet/walletStore"
import { transactionsStore } from "./store"
import { TransactionExecutionStatus, TransactionFinalityStatus } from "starknet"

// selects transactions that are pending and match the provided account

export const pendingAccountTransactionsSelector = memoize(
  (account: BaseWalletAccount) => (transaction: Transaction) =>
    transaction.finalityStatus === TransactionFinalityStatus.RECEIVED &&
    transaction.executionStatus !== TransactionExecutionStatus.REJECTED && // Rejected transactions have finality status RECEIVED
    !transaction.meta?.isDeployAccount &&
    accountsEqual(account, transaction.account),
)

export const multisigPendingTransactionSelector = memoize(
  (multisig: MultisigWalletAccount) =>
    (transaction: MultisigPendingTransaction) => {
      return accountsEqual(multisig, transaction.account) && transaction.notify
    },
)

// show count of pending transactions for current account

export const updateBadgeText = async () => {
  const selectedWalletAccount = await old_walletStore.get("selected")

  if (!selectedWalletAccount) {
    hideNotificationBadge()
    return
  }

  const multisig = await getMultisigAccountFromBaseWallet(selectedWalletAccount)

  const transactionSelector = pendingAccountTransactionsSelector(
    selectedWalletAccount,
  )
  const pendingAccountTransactions = await transactionsStore.get(
    transactionSelector,
  )

  let multisigTransactionsLength = 0

  if (multisig) {
    const multisigTransactionSelector =
      multisigPendingTransactionSelector(multisig)

    multisigTransactionsLength = (
      await multisigPendingTransactionsStore.get(multisigTransactionSelector)
    ).length
  }

  const badgeSize =
    pendingAccountTransactions.length + multisigTransactionsLength

  if (badgeSize) {
    showNotificationBadge(badgeSize)
  } else {
    hideNotificationBadge()
  }
}

export const initBadgeText = () => {
  old_walletStore.subscribe("selected", () => {
    updateBadgeText()
  })

  transactionsStore.subscribe(() => {
    updateBadgeText()
  })

  multisigPendingTransactionsStore.subscribe(() => {
    updateBadgeText()
  })

  updateBadgeText()
}
