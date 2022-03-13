import Case from "case";

export const getWordsFromVariable: (variable: string) => string[] = function (
  variable
) {
  const dashCased = Case.header(variable);
  return dashCased.split("-");
};
