import { memoize } from "lodash-es"
import { useMemo } from "react"

import { transactionsStore } from "../../../background/transactions/store"
import { useArrayStorage } from "../../../shared/storage/hooks"
import {
  ExtendedTransactionStatus,
  Transaction,
} from "../../../shared/transactions"

function transformStatus(status: ExtendedTransactionStatus): Status {
  return ["ACCEPTED_ON_L1", "ACCEPTED_ON_L2", "PENDING"].includes(status)
    ? "SUCCESS"
    : ["REJECTED", "REVERTED"].includes(status)
    ? "ERROR"
    : status === "CANCELLED"
    ? "CANCELLED"
    : "PENDING"
}

type Status = "UNKNOWN" | "PENDING" | "SUCCESS" | "ERROR" | "CANCELLED"

const transactionSelector = memoize(
  (hash?: string, networkId?: string) => (transaction: Transaction) =>
    transaction.hash === hash && transaction.account.networkId === networkId,
  (hash, networkId) => `${hash}-${networkId}`,
)

export const useTransactionStatus = (
  transactionHash?: string,
  networkId?: string,
): Status => {
  const [transaction] = useArrayStorage(
    transactionsStore,
    transactionSelector(transactionHash, networkId),
  )

  return useMemo(() => {
    if (!transaction?.finalityStatus) {
      return "UNKNOWN"
    }
    return transformStatus(transaction.finalityStatus)
  }, [transaction])
}
