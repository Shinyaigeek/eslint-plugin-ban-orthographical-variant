import { RestElement } from "@typescript-eslint/types/dist/ast-spec";
import { getVariableNameFromDestructuringPattern } from "../getVariableNameFromDestructuringPattern/mod";

export const getVariableNameFromRestElement: (
  element: RestElement
) => string[] = function (element) {
  return getVariableNameFromDestructuringPattern(element.argument);
};
