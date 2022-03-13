import { Dictionary } from "../getDictionary/mod";
import { getWordsFromVariable } from "../getWordsFromVariable/mod";

export const lintWithVariable: (
  variable: string,
  dictionary: Dictionary,
  report: (originWord: string, synomsysWord: string) => void
) => void = function (variable, dictionary, report) {
  const words = getWordsFromVariable(variable);
  for (const word of words) {
    for (const [originWord, dict] of Object.entries(dictionary)) {
      for (const syn of dict.synonyms) {
        if (typeof syn === "string") {
          if (syn === word) {
            report(originWord, word);
          }
        } else {
          if (syn.test(word)) {
            report(originWord, word);
          }
        }
      }
    }
  }
};
