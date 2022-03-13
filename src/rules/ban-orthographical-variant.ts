import { TSESLint } from "@typescript-eslint/utils";
import { getVariableNameFromBindingName } from "../lib/getVariableNameFromBindingName/mod";

type Options = [
  {
    dictionaryPath: string;
  }
];

export const banOrthographicalVariant: TSESLint.RuleModule<
  "banOrthographicalVariant",
  Options
> = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Ban orthographical variant in code",
      recommended: "warn",
      url: "https://github.com/Shinyaigeek/ban-orthographical-variant/blob/main/docs/rules/ban-orthographical-variant.md",
    },
    messages: {
      banOrthographicalVariant: "There is an orthographical variant in code.",
    },
    schema: [],
  },

  create: ({ parserServices, report, getSourceCode, options }) => {
    return {
      VariableDeclarator(node) {
        const identifier = node.id;

        const variableNames = getVariableNameFromBindingName(identifier);

        for (const variableName of variableNames) {
          const dictionaryPath = options[0].dictionaryPath;
          const dictionary = require(dictionaryPath);
          if (dictionary[variableName]) {
            console.log("HEY");
          }
        }
      },
    };
  },
};
