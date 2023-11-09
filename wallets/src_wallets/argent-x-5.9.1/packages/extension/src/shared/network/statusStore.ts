import { ChromeRepository } from "../storage/__new/chrome"
import type { IRepository } from "../storage/__new/interface"
import { defaultNetworksStatuses } from "./defaults"
import type { BaseNetwork, NetworkWithStatus } from "./type"
import browser from "webextension-polyfill"

export type INetworkWithStatusRepo = IRepository<NetworkWithStatus>

export const networksEqual = (a: BaseNetwork, b: BaseNetwork) => a.id === b.id

export const networkStatusRepo = new ChromeRepository<NetworkWithStatus>(
  browser,
  {
    areaName: "local",
    namespace: "allNetworksWithStatus",
    compare: networksEqual,
    defaults: defaultNetworksStatuses,
  },
)
