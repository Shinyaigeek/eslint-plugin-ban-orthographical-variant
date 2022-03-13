import { getWordsFromVariable } from "./mod";

describe("getWordsFromVariable", () => {
  test("handle PascalCase", () => {
    expect(getWordsFromVariable("PascalCase")).toEqual(["Pascal", "Case"]);
  });
});
