interface Dictionary {
  [word: string]: {
    synonyms: string[];
    regexp?: RegExp;
    description?: string;
  };
}

export const getDictionary: (dictionaryPath: string) => Dictionary = function (
  dictionaryPath
) {
  return require(dictionaryPath);
};
