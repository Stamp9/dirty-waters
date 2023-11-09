import { ApiTransactionReviewTargettedDapp } from "@argent/shared"
import { Center, Flex, Image, useDisclosure } from "@chakra-ui/react"
import { FC } from "react"

import { VerifiedIcon } from "../icons"
import { P4 } from "../Typography"
import { VerifiedDappModal } from "./VerifiedDappModal"

function upperFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export interface IVerifiedDappBanner {
  dapp: ApiTransactionReviewTargettedDapp
}

export const VerifiedDappBanner: FC<IVerifiedDappBanner> = ({ dapp }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex
        w="full"
        backgroundColor="secondaryDark"
        boxShadow="menu"
        borderRadius="xl"
        justifyContent="center"
        alignItems="center"
        gap="2"
        py="2.5"
        _hover={{ cursor: "pointer" }}
        onClick={onOpen}
      >
        <Center>
          <Image src={dapp.iconUrl} w="5" h="5" borderRadius="base" mx="-1" />
          <VerifiedIcon width="4.5" height="4.5" color="white" />
        </Center>
        <P4 color="white" fontWeight="bold">
          Verified {upperFirst(dapp.name)} transaction
        </P4>
      </Flex>

      <VerifiedDappModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
