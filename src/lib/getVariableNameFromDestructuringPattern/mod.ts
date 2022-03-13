import { DestructuringPattern } from "@typescript-eslint/types/dist/ast-spec";
import { getVariableNameFromAssignmentPattern } from "../getVariableNameFromAssignmentPattern/mod";
import { getVariableNameFromBindingName } from "../getVariableNameFromBindingName/mod";

export const getVariableNameFromDestructuringPattern: (
  pattern: DestructuringPattern
) => string[] = function (pattern) {
  if (
    pattern.type === "ArrayPattern" ||
    pattern.type === "ObjectPattern" ||
    pattern.type === "Identifier"
  ) {
    return getVariableNameFromBindingName(pattern);
  }

  if (pattern.type === "AssignmentPattern") {
    return getVariableNameFromAssignmentPattern(pattern);
  }
  if (pattern.type === "RestElement") {
    return getVariableNameFromDestructuringPattern(pattern.argument);
  }

  if (pattern.type === "MemberExpression") {
    //   https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-destructuring-assignment
    // TODO I do not know why member expression could be destrucuring pattern
    throw new Error("unreachable");
  }

  const never: never = pattern;
  throw new Error("unreachable");
};
