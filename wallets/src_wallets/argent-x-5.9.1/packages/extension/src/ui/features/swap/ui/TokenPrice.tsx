import { P4, TokenButton } from "@argent/ui"
import {
  Currency,
  ETHER,
  ETH_LOGO_URL,
  SupportedNetworks,
  WrappedTokenInfo,
  wrappedCurrency,
} from "@argent/x-swap"
import { FC } from "react"

import { prettifyCurrencyValue } from "../../../../shared/token/price"
import { getTokenIconUrl } from "../../accountTokens/TokenIcon"
import {
  useTokenAmountToCurrencyValue,
  useTokenPriceDetails,
} from "../../accountTokens/tokenPriceHooks"
import { useCurrentNetwork } from "../../networks/hooks/useCurrentNetwork"
import { bigDecimal } from "@argent/shared"

interface TokenPriceProps {
  currency: Currency
  onClick: () => void
  showCurrencyValue?: boolean
}

const TokenPrice: FC<TokenPriceProps> = ({ currency, onClick }) => {
  const network = useCurrentNetwork()

  const token = wrappedCurrency(currency, network.id as SupportedNetworks)

  const currencyValue = useTokenAmountToCurrencyValue(
    token,
    bigDecimal.parseUnits("1", token?.decimals ?? 18),
  )

  const priceDetails = useTokenPriceDetails(token)

  if (!token) {
    return <></>
  }

  const tokenImage =
    token instanceof WrappedTokenInfo
      ? token.image
      : currency === ETHER
      ? ETH_LOGO_URL
      : undefined

  const displayCurrencyValue = prettifyCurrencyValue(currencyValue)

  const displayPriceDetails =
    parseFloat(priceDetails?.ccyDayChange || "0") * 100

  return (
    <TokenButton
      onClick={onClick}
      name={token.name || ""}
      image={tokenImage || ""}
      getTokenIconUrl={getTokenIconUrl}
      symbol={token.symbol || ""}
      showTokenSymbol
      valueLabelPrimary={displayCurrencyValue}
      valueLabelSecondary={
        priceDetails ? (
          <P4 color={displayPriceDetails > 0 ? "green" : "red"}>
            {displayPriceDetails.toFixed(2)}%
          </P4>
        ) : null
      }
      w="100%"
    />
  )
}

export { TokenPrice }
