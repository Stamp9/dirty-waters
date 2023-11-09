import {
  getChecksumAddress,
  num,
  validateAndParseAddress,
  validateChecksumAddress,
} from "starknet"
import { z } from "zod"

import { Hex } from "../../utils/hex"

export type TxHash = Hex
export type Address = Hex

export const validChecksumAddressSchema = z.string().refine((value) => {
  // if contains capital letters, make sure to check checksum
  if (value.toLowerCase() === value) {
    return true
  }
  try {
    return validateChecksumAddress(value) && isChecksumAddress(value)
  } catch {
    // ignore validation error
  }
  return false
}, "Invalid address (checksum error)")

export const validateAddressRangeSchema = z.string().refine((value) => {
  // check the address is actually within range (part of validateAndParseAddress check)
  try {
    return validateAndParseAddress(value)
  } catch {
    // ignore validation error
  }
  return false
}, "Invalid address (validation error)")

export const addressSchemaBase = z
  .string()
  .regex(/^0x[0-9a-fA-F]+$/, "Invalid address")

export const addressSchemaLooseLength = addressSchemaBase
  .min(50, "Addresses must at least be 50 characters long")
  .max(66, "Addresses must at most be 66 characters long")

export const addressSchemaStrictLength = addressSchemaBase.length(
  66,
  "Address must be 66 characters long",
)

export const addressSchema = addressSchemaLooseLength
  .pipe(validChecksumAddressSchema)
  .transform<Address>((value) => {
    // remove 0x prefix
    const withoutPrefix = value.startsWith("0x") ? value.slice(2) : value
    // pad left until length is 64
    const padded = withoutPrefix.padStart(64, "0")
    // add 0x prefix
    return `0x${padded}`
  })

export const addressSchemaArgentBackend = addressSchemaBase.transform(
  (value) => {
    // 0 padded, 0x prefixed, lowercase hex with a length of 66
    const withoutPrefix = value.replace(/^0x/, "")
    const paddedLowercase = withoutPrefix.toLowerCase().padStart(64, "0")
    return `0x${paddedLowercase}` as Address
  },
)

export const isAddress = (string: string): string is Address =>
  addressSchema.safeParse(string).success

export const isValidAddress = isAddress

export const normalizeAddress = (address: string) => getChecksumAddress(address)

export const formatTruncatedAddress = (address: string) => {
  const normalized = normalizeAddress(address)
  const hex = normalized.slice(0, 2)
  const start = normalized.slice(2, 6)
  const end = normalized.slice(-4)
  return `${hex}${start}…${end}`
}

export const formatFullAddress = (address: string) => {
  const normalized = normalizeAddress(address)
  const hex = normalized.slice(0, 2)
  const rest = normalized.slice(2)
  const parts = rest.match(/.{1,4}/g) || []
  return `${hex} ${parts.join(" ")}`
}

const isChecksumAddress = (address: string) => {
  if (/^0x[0-9a-f]{63,64}$/.test(address)) {
    return false
  }
  return true
}

export const isEqualAddress = (a: string, b?: string) => {
  try {
    if (!b) {
      return false
    }
    return num.hexToDecimalString(a) === num.hexToDecimalString(b)
  } catch {
    // ignore parsing error
  }
  return false
}
