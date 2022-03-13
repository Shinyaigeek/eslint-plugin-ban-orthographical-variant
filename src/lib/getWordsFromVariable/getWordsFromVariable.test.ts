import { getWordsFromVariable } from "./mod";

describe("getWordsFromVariable", () => {
  test("handle PascalCase", () => {
    expect(getWordsFromVariable("PascalCase")).toEqual(["pascal", "case"]);
  });

  test("handle camelCase", () => {
    expect(getWordsFromVariable("camelCase")).toEqual(["camel", "case"]);
  });
});
