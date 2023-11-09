import { BaseError, BaseErrorPayload } from "./baseError"

export enum ACCOUNT_ERROR_MESSAGES {
  NOT_FOUND = "Account not found",
  NOT_SELECTED = "No account selected",
  NOT_MULTISIG = "Selected account is not a multisig account",
  MULTISIG_NOT_FOUND = "This multisig account does not exist",
  MULTISIG_BASE_NOT_FOUND = "Multisig base wallet account not found",
  CALCULATED_ADDRESS_NO_MATCH = "Calculated address does not match account address",
  ACCOUNT_ALREADY_DEPLOYED = "Account already deployed",
  CANNOT_DEPLOY_OLD_ACCOUNTS = "Cannot deploy old accounts",
  CANNOT_ESTIMATE_DEPLOY_OLD_ACCOUNTS = "Cannot estimate fee to deploy old accounts",
  CANNOT_ESTIMATE_FEE_OLD_ACCOUNTS_DEPLOYMENT = "Cannot estimate fee for old account deployment",
  UPGRADE_NOT_SUPPORTED = "Old Account upgrades are no longer supporte",
  DEPLOYED_ACCOUNT_CAIRO_VERSION_NOT_FOUND = "Unable to determine cairo version of DEPLOYED account",
  UNDEPLOYED_ACCOUNT_CAIRO_VERSION_NOT_FOUND = "Unable to determine cairo version of UNDEPLOYED account",
}

export type AccountValidationErrorMessage = keyof typeof ACCOUNT_ERROR_MESSAGES

export class AccountError extends BaseError<AccountValidationErrorMessage> {
  constructor(payload: BaseErrorPayload<AccountValidationErrorMessage>) {
    super(payload, ACCOUNT_ERROR_MESSAGES)
    this.name = "AccountError"
  }
}
