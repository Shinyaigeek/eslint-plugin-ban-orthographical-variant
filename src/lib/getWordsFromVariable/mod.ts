export const getWordsFromVariable: (variable: string) => string[] = function (
  variable
) {
  let currentWord = "";
  let previousChar = "";
  return variable.split("").reduce((words, char) => {

    if (char === "_") {
        words.push(currentWord);
        currentWord = "";
        previousChar = "";
        return words;
    }

    if (isUppercase(previousChar)) {
      if (!isUppercase(char)) {
        words.push(currentWord);
        currentWord = "";
      } else {
        currentWord += char;
      }
      previousChar = char;
      return words;
    }

    if (isUppercase(char)) {
        if (currentWord) {
            words.push(currentWord);
        }
        currentWord = char;
        return words;
    }

    previousChar = char;
    currentWord += char;
    return words;
  }, [] as string[]);
};

const isUppercase: (char: string) => boolean = function (char) {
  return char === char.toUpperCase();
};
