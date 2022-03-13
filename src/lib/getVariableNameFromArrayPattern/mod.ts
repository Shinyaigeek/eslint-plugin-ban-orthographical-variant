import { ArrayPattern } from "@typescript-eslint/types/dist/ast-spec";
import { getVariableNameFromDestructuringPattern } from "../getVariableNameFromDestructuringPattern/mod";

export const getVariableNameFromArrayPattern: (
  variable: ArrayPattern
) => string[] = function (variable) {
  return variable.elements
    .map((element) => {
      if (element) {
        return getVariableNameFromDestructuringPattern(element);
      }
      return "";
    })
    .filter((variable) => variable !== "")
    .flat();
};
