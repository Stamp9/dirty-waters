import { addressSchema } from "@argent/shared"
import { z } from "zod"

const REGEX_HEXSTRING = /^0x[a-f0-9]+$/i

export const baseNetworkSchema = z.object({
  id: z.string().min(2).max(31),
})

export const networkStatusSchema = z.enum([
  "ok",
  "degraded",
  "error",
  "unknown",
])
export const networkSchema = baseNetworkSchema
  .extend({
    name: z.string().min(2).max(128),
    chainId: z
      .string()
      .min(2, "ChainId must be at least 2 characters")
      .max(31, "ChainId cannot be longer than 31 characters") // max 31 characters as required by starknet short strings
      .regex(/^[a-zA-Z0-9_]+$/, {
        message:
          "chain id must be hexadecimal string, uppercase alphanumeric or underscore, like 'SN_GOERLI'",
      }),
    sequencerUrl: z
      .string()
      .url("Sequencer url must be a valid URL")
      .optional(),
    rpcUrl: z.string().url("RPC url must be a valid URL").optional(),
    feeTokenAddress: addressSchema
      .or(z.literal(""))
      .transform((v) => (v === "" ? undefined : v))
      .optional(),

    accountImplementation: z.optional(
      z.string().regex(REGEX_HEXSTRING, {
        message: `Account class hash must match the following: /^0x[a-f0-9]+$/i`,
      }),
    ),
    accountClassHash: z.union([
      z.object({
        standard: z
          .string()
          .regex(REGEX_HEXSTRING, {
            message: `Account class hash must match the following: /^0x[a-f0-9]+$/i`,
          })
          .optional(),
        standardCairo0: z
          .string()
          .regex(REGEX_HEXSTRING, {
            message: `Account class hash must match the following: /^0x[a-f0-9]+$/i`,
          })
          .optional(),
        plugin: z
          .string()
          .regex(REGEX_HEXSTRING, {
            message: `Account class hash must match the following: /^0x[a-f0-9]+$/i`,
          })
          .optional(),
        multisig: z
          .string()
          .regex(REGEX_HEXSTRING, {
            message: `Account class hash must match the following: /^0x[a-f0-9]+$/i`,
          })
          .optional(),
        betterMulticall: z
          .string()
          .regex(REGEX_HEXSTRING, {
            message: `Account class hash must match the following: /^0x[a-f0-9]+$/i`,
          })
          .optional(),
        argent5MinuteEscapeTestingAccount: z
          .string()
          .regex(REGEX_HEXSTRING, {
            message: `Account class hash must match the following: /^0x[a-f0-9]+$/i`,
          })
          .optional(),
      }),
      z.undefined(),
    ]),
    explorerUrl: z.optional(z.string().url("explorer url must be a valid URL")),
    faucetUrl: z.optional(z.string().url("faucet url must be a valid URL")),
    l1ExplorerUrl: z.optional(
      z.string().url("l1 explorer url must be a valid URL"),
    ),
    blockExplorerUrl: z.optional(
      z.string().url("block explorer url must be a valid URL"),
    ),
    multicallAddress: z.optional(
      z
        .string()
        .regex(REGEX_HEXSTRING, "multicall address must be a valid URL"),
    ),
    readonly: z.optional(z.boolean()),
  })
  .refine(
    (network) => network.rpcUrl || network.sequencerUrl,
    "RPC Url or Sequencer Url must be present",
  )

export const networkWithStatusSchema = z.object({
  id: z.string(),
  status: networkStatusSchema,
})
