import { AssignmentPattern } from "@typescript-eslint/types/dist/ast-spec";
import { getVariableNameFromBindingName } from "../getVariableNameFromBindingName/mod";

export const getVariableNameFromAssignmentPattern: (
  variable: AssignmentPattern
) => string[] = function (variable) {
  const left = variable.left;
  return getVariableNameFromBindingName(left);
};
