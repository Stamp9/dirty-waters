import {
  SHIELD_EMAIL_VALIDATION_FAILURE_SCENARIO_1,
  SHIELD_EMAIL_VALIDATION_FAILURE_SCENARIO_2,
  SHIELD_EMAIL_VALIDATION_FAILURE_SCENARIO_3,
} from "@argent-x/extension/src/shared/shield/validation/validateAccount"
import { ShieldValidationErrorScreen } from "@argent-x/extension/src/ui/features/shield/ShieldValidationErrorScreen"

import { decorators } from "../../decorators/routerDecorators"

export default {
  component: ShieldValidationErrorScreen,
  decorators,
  parameters: {
    layout: "fullscreen",
  },
}

export const Scenario1 = {
  args: {
    error: SHIELD_EMAIL_VALIDATION_FAILURE_SCENARIO_1,
  },
}

export const Scenario2 = {
  args: {
    error: SHIELD_EMAIL_VALIDATION_FAILURE_SCENARIO_2,
  },
}

export const Scenario3 = {
  args: {
    error: SHIELD_EMAIL_VALIDATION_FAILURE_SCENARIO_3,
  },
}
