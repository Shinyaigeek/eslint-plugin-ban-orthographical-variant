import { getWordsFromVariable } from "./mod";

describe("getWordsFromVariable", () => {
  test("handle PascalCase", () => {
    expect(getWordsFromVariable("PascalCase")).toEqual(["Pascal", "Case"]);
  });

  test("handle camelCase", () => {
    expect(getWordsFromVariable("camelCase")).toEqual(["Camel", "Case"]);
  });

  test("handle snake_case", () => {
    expect(getWordsFromVariable("snake_case")).toEqual(["Snake", "Case"]);
  });

  test("handle SNAKE_CASE", () => {
    expect(getWordsFromVariable("SNAKE_CASE")).toEqual(["Snake", "Case"]);
  });

  test("handle uppercase word in camelCase", () => {
    expect(getWordsFromVariable("camelCaseWITHUppercase")).toEqual([
      "Camel",
      "Case",
      "WITH",
      "Uppercase",
    ]);
  })
});
