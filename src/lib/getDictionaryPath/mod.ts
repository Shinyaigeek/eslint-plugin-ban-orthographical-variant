import path from "path";

export const getDictionaryPath: (p?: string) => string = function (p) {
  return p ?? path.resolve("dictionary.json");
};
