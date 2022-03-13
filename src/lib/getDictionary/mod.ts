export interface Dictionary {
  [word: string]: {
    synonyms: (string | RegExp)[];
    description?: string;
  };
}

export const getDictionary: (dictionaryPath: string) => Dictionary = function (
  dictionaryPath
) {
  return require(dictionaryPath);
};
