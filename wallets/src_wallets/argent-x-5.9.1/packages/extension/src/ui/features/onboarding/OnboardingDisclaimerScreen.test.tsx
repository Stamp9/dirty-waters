import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { OnboardingDisclaimerScreen } from "./OnboardingDisclaimerScreen"

/**
 * @vitest-environment jsdom
 */

describe("OnboardingDisclaimerScreen", () => {
  it("onContinue does not work until boxes are checked", async () => {
    const onContinue = vi.fn()
    const onPrivacy = vi.fn()

    render(
      <OnboardingDisclaimerScreen
        onContinue={onContinue}
        onPrivacy={onPrivacy}
      />,
    )

    expect(screen.getByText(/^Continue/)).toBeDisabled()

    fireEvent.click(screen.getByText(/introduce changes/))
    fireEvent.click(screen.getByText(/experience performance/))

    expect(screen.getByText(/^Continue/)).not.toBeDisabled()
    fireEvent.click(screen.getByText(/^Continue/))

    expect(onContinue).toHaveBeenCalled()
  })

  it("calls onPrivacy when appropriate button is clicked", () => {
    const onContinue = vi.fn()
    const onPrivacy = vi.fn()

    render(
      <OnboardingDisclaimerScreen
        onContinue={onContinue}
        onPrivacy={onPrivacy}
      />,
    )

    fireEvent.click(screen.getByText(/^Privacy/))

    expect(onPrivacy).toHaveBeenCalled()
  })
})
