import { TSESLint } from "@typescript-eslint/utils";
import { getVariableNameFromAssignmentPattern } from "../lib/getVariableNameFromAssignmentPattern/mod";
import { getVariableNameFromBindingName } from "../lib/getVariableNameFromBindingName/mod";
import { getVariableNameFromRestElement } from "../lib/getVariableNameFromRestElement/mod";
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
      PropertyDefinition(node) {
        const variable = node.key;
        if (variable.type === "Identifier") {
          const variableName = variable.name;
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
        if (variable.type === "Literal") {
          const variableName = variable.value?.toString();
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
      MethodDefinition(node) {
        const variable = node.key;
        if (variable.type === "Identifier") {
          const variableName = variable.name;
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
        if (variable.type === "Literal") {
          const variableName = variable.value?.toString();
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
      TSParameterProperty(node) {
        const parameter = node.parameter;
        const variables = (() => {
          if (
            parameter.type === "Identifier" ||
            parameter.type === "ArrayPattern" ||
            parameter.type === "ObjectPattern"
          ) {
            return getVariableNameFromBindingName(parameter);
          }
          if (parameter.type === "AssignmentPattern") {
            return getVariableNameFromAssignmentPattern(parameter);
          }
          if (parameter.type === "RestElement") {
            return getVariableNameFromRestElement(parameter);
          }
          const _never: never = parameter;
        })();
        if (variables) {
          const dictionaryPath = options[0].dictionaryPath;
          const dictionary = require(dictionaryPath);
          for (const variable of variables) {
            const words = getWordsFromVariable(variable);
            for (const word of words) {
              if (dictionary[word]) {
                console.log("HEY");
              }
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
