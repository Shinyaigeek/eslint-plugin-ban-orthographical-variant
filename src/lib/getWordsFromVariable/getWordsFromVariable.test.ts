import { getWordsFromVariable } from "./mod";

describe("getWordsFromVariable", () => {
  test("handle PascalCase", () => {
    expect(getWordsFromVariable("PascalCase")).toEqual(["pascal", "case"]);
  });

  test("handle camelCase", () => {
    expect(getWordsFromVariable("camelCase")).toEqual(["camel", "case"]);
  });

  test("handle snake_case", () => {
    expect(getWordsFromVariable("snake_case")).toEqual(["snake", "case"]);
  });

  test("handle SNAKE_CASE", () => {
    expect(getWordsFromVariable("SNAKE_CASE")).toEqual(["snake", "case"]);
  });
});
