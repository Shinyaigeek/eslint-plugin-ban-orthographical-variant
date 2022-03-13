import { BindingName } from "@typescript-eslint/types/dist/ast-spec";
import { getVariableNameFromArrayPattern } from "../getVariableNameFromArrayPattern/mod";

export const getVariableNameFromBindingName: (variable: BindingName) => string[] =
  function (variable) {
    if (variable.type === "Identifier") {
      return [variable.name];
    }

    if (variable.type === "ObjectPattern") {
      return ["TODO"];
    }

    if (variable.type === "ArrayPattern") {
      return getVariableNameFromArrayPattern(variable);
    }

    const never: never = variable;
    throw new Error("unreachable");
  };
