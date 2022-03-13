export const getWordsFromVariable: (variable: string) => string[] = function (
  variable
) {
  let currentWord = "";
  let previousChar = "";
  return variable
    .split("")
    .reduce((words, char, idx, arr) => {
      if (char === "_") {
        words.push(currentWord);
        currentWord = "";
        previousChar = "";
        if (idx === arr.length - 1) {
          words.push(currentWord);
        }
        return words;
      }

      if (isUppercase(previousChar)) {
        currentWord += char;
        previousChar = char;
        if (idx === arr.length - 1) {
          words.push(currentWord);
        }
        return words;
      }

      if (isUppercase(char)) {
        if (currentWord) {
          words.push(currentWord);
        }
        currentWord = char;
        previousChar = char;
        return words;
      }

      previousChar = char;
      currentWord += char;
      if (idx === arr.length - 1) {
        words.push(currentWord);
      }
      return words;
    }, [] as string[])
    .map((word) => word.toLowerCase());
};

const isUppercase: (char: string) => boolean = function (char) {
  return char === char.toUpperCase();
};
