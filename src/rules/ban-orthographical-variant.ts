import { TSESLint } from "@typescript-eslint/utils";
import { getVariableNameFromBindingName } from "../lib/getVariableNameFromBindingName/mod";
import { getWordsFromVariable } from "../lib/getWordsFromVariable/mod";

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
      Property(node) {
        const propertyName = node.key;
        if (propertyName.type === "Identifier") {
          const variableName = propertyName.name;
          const dictionaryPath = options[0].dictionaryPath;
          const dictionary = require(dictionaryPath);
          const words = getWordsFromVariable(variableName);
          for (const word of words) {
            if (dictionary[word]) {
              console.log("HEY");
            }
          }
          return;
        }
        if (propertyName.type === "Literal") {
          const variableName = propertyName.value?.toString();
          const dictionaryPath = options[0].dictionaryPath;
          const dictionary = require(dictionaryPath);
          const words = getWordsFromVariable(variableName || "");
          for (const word of words) {
            if (dictionary[word]) {
              console.log("HEY");
            }
          }
          return;
        }

        // * if expression, this is computed props. computed props is out of range
      },
      ClassDeclaration(node) {
        if (node.id) {
          const className = node.id;
          const dictionaryPath = options[0].dictionaryPath;
          const dictionary = require(dictionaryPath);
          const words = getWordsFromVariable(className.name);
          for (const word of words) {
            if (dictionary[word]) {
              console.log("HEY");
            }
          }
        }
      },
      FunctionDeclaration(node) {
        if (node.id) {
          const variableName = node.id.name;
          const dictionaryPath = options[0].dictionaryPath;
          const dictionary = require(dictionaryPath);
          const words = getWordsFromVariable(variableName);
          for (const word of words) {
            if (dictionary[word]) {
              console.log("HEY");
            }
          }
        }
      },
      TSTypeAliasDeclaration(node) {
        const variableName = node.id.name;
        const dictionaryPath = options[0].dictionaryPath;
        const dictionary = require(dictionaryPath);
        const words = getWordsFromVariable(variableName);
        for (const word of words) {
          if (dictionary[word]) {
            console.log("HEY");
          }
        }
      },
      TSInterfaceDeclaration(node) {
        const variableName = node.id.name;
        const dictionaryPath = options[0].dictionaryPath;
        const dictionary = require(dictionaryPath);
        const words = getWordsFromVariable(variableName);
        for (const word of words) {
          if (dictionary[word]) {
            console.log("HEY");
          }
        }
      },
      TSEnumDeclaration(node) {
        const variableName = node.id.name;
        const dictionaryPath = options[0].dictionaryPath;
        const dictionary = require(dictionaryPath);
        const words = getWordsFromVariable(variableName);
        for (const word of words) {
          if (dictionary[word]) {
            console.log("HEY");
          }
        }
      },
      TSEnumMember(node) {
        const propertyName = node.id;
        if (propertyName.type === "Identifier") {
          const variableName = propertyName.name;
          const dictionaryPath = options[0].dictionaryPath;
          const dictionary = require(dictionaryPath);
          const words = getWordsFromVariable(variableName);
          for (const word of words) {
            if (dictionary[word]) {
              console.log("HEY");
            }
          }
          return;
        }
        if (propertyName.type === "Literal") {
          const variableName = propertyName.value?.toString();
          const dictionaryPath = options[0].dictionaryPath;
          const dictionary = require(dictionaryPath);
          const words = getWordsFromVariable(variableName || "");
          for (const word of words) {
            if (dictionary[word]) {
              console.log("HEY");
            }
          }
          return;
        }

        // * if expression, this is computed props. computed props is out of range
      },
    };
  },
};
