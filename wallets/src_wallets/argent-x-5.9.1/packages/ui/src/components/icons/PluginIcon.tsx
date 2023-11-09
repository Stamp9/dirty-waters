import { chakra } from "@chakra-ui/react"
import type { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.137 3.42a1.5 1.5 0 0 0-1.88 1.34l-.001.008c-.021.257.027.515.137.748a1.125 1.125 0 0 1-1.015 1.609H6.375v3.628a1.125 1.125 0 0 1-1.61 1.016 1.502 1.502 0 0 0-2.12 1.622A1.5 1.5 0 0 0 4.01 14.62h.007c.257.02.515-.027.748-.137a1.125 1.125 0 0 1 1.609 1.015v3.628h12.75v-2.248a3.75 3.75 0 1 1 0-7.501V7.125h-4.003a1.125 1.125 0 0 1-1.016-1.61 1.502 1.502 0 0 0-.97-2.094ZM12.08 1.182a3.75 3.75 0 0 1 4.421 3.694H19.5a1.875 1.875 0 0 1 1.875 1.875v4.003a1.125 1.125 0 0 1-1.61 1.015 1.463 1.463 0 0 0-.747-.137h-.007a1.5 1.5 0 1 0 .755 2.85 1.125 1.125 0 0 1 1.609 1.016V19.5a1.875 1.875 0 0 1-1.875 1.875H6A1.875 1.875 0 0 1 4.125 19.5v-2.626a3.75 3.75 0 1 1 0-7.501V6.75A1.875 1.875 0 0 1 6 4.875h3.001a3.75 3.75 0 0 1 3.08-3.694Z"
      clipRule="evenodd"
    />
  </svg>
)
export default chakra(SvgComponent)
