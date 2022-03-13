import { TSESLint } from "@typescript-eslint/utils";
import { getDictionary } from "../lib/getDictionary/mod";
import { getDictionaryPath } from "../lib/getDictionaryPath/mod";
import { getVariableNameFromAssignmentPattern } from "../lib/getVariableNameFromAssignmentPattern/mod";
import { getVariableNameFromBindingName } from "../lib/getVariableNameFromBindingName/mod";
import { getVariableNameFromRestElement } from "../lib/getVariableNameFromRestElement/mod";
import { lintWithVariable } from "../lib/lintWithVariables/mod";

type Options = [
  {
    dictionaryPath?: string;
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
      banOrthographicalVariant:
        "{{originWord}} is an orthographical variant of {{synomsysWord}}.",
    },
    schema: [],
  },

  create: ({ parserServices, report, getSourceCode, options }) => {
    return {
      VariableDeclarator(node) {
        const identifier = node.id;

        const variableNames = getVariableNameFromBindingName(identifier);

        const dictionaryPath = getDictionaryPath(options[0].dictionaryPath);
        const dictionary = getDictionary(dictionaryPath);
        for (const variableName of variableNames) {
          lintWithVariable(
            variableName,
            dictionary,
            (originWord, synomsysWord) =>
              report({
                node,
                messageId: "banOrthographicalVariant",
                data: {
                  originWord,
                  synomsysWord,
                },
              })
          );
        }
      },
      Property(node) {
        const propertyName = node.key;
        if (propertyName.type === "Identifier") {
          const variableName = propertyName.name;

          const dictionaryPath = getDictionaryPath(options[0].dictionaryPath);
          const dictionary = getDictionary(dictionaryPath);
          lintWithVariable(
            variableName,
            dictionary,
            (originWord, synomsysWord) =>
              report({
                node,
                messageId: "banOrthographicalVariant",
                data: {
                  originWord,
                  synomsysWord,
                },
              })
          );
          return;
        }
        if (propertyName.type === "Literal") {
          const variableName = propertyName.value?.toString();
          if (variableName) {
            const dictionaryPath = getDictionaryPath(options[0].dictionaryPath);
            const dictionary = getDictionary(dictionaryPath);
            lintWithVariable(
              variableName,
              dictionary,
              (originWord, synomsysWord) =>
                report({
                  node,
                  messageId: "banOrthographicalVariant",
                  data: {
                    originWord,
                    synomsysWord,
                  },
                })
            );
          }
          return;
        }

        // * if expression, this is computed props. computed props is out of range
      },
      ClassDeclaration(node) {
        if (node.id) {
          const className = node.id;

          const dictionaryPath = getDictionaryPath(options[0].dictionaryPath);
          const dictionary = getDictionary(dictionaryPath);
          lintWithVariable(
            className.name,
            dictionary,
            (originWord, synomsysWord) =>
              report({
                node,
                messageId: "banOrthographicalVariant",
                data: {
                  originWord,
                  synomsysWord,
                },
              })
          );
        }
      },
      PropertyDefinition(node) {
        const variable = node.key;
        if (variable.type === "Identifier") {
          const variableName = variable.name;

          const dictionaryPath = getDictionaryPath(options[0].dictionaryPath);
          const dictionary = getDictionary(dictionaryPath);
          lintWithVariable(
            variableName,
            dictionary,
            (originWord, synomsysWord) =>
              report({
                node,
                messageId: "banOrthographicalVariant",
                data: {
                  originWord,
                  synomsysWord,
                },
              })
          );

          return;
        }
        if (variable.type === "Literal") {
          const variableName = variable.value?.toString();
          if (variableName) {
            const dictionaryPath = getDictionaryPath(options[0].dictionaryPath);
            const dictionary = getDictionary(dictionaryPath);
            lintWithVariable(
              variableName,
              dictionary,
              (originWord, synomsysWord) =>
                report({
                  node,
                  messageId: "banOrthographicalVariant",
                  data: {
                    originWord,
                    synomsysWord,
                  },
                })
            );
            return;
          }
        }

        // * if expression, this is computed props. computed props is out of range
      },
      MethodDefinition(node) {
        const variable = node.key;
        if (variable.type === "Identifier") {
          const variableName = variable.name;
          const dictionaryPath = getDictionaryPath(options[0].dictionaryPath);
          const dictionary = getDictionary(dictionaryPath);
          lintWithVariable(
            variableName,
            dictionary,
            (originWord, synomsysWord) =>
              report({
                node,
                messageId: "banOrthographicalVariant",
                data: {
                  originWord,
                  synomsysWord,
                },
              })
          );
          return;
        }
        if (variable.type === "Literal") {
          const variableName = variable.value?.toString();
          if (variableName) {
            const dictionaryPath = getDictionaryPath(options[0].dictionaryPath);
            const dictionary = getDictionary(dictionaryPath);
            lintWithVariable(
              variableName,
              dictionary,
              (originWord, synomsysWord) =>
                report({
                  node,
                  messageId: "banOrthographicalVariant",
                  data: {
                    originWord,
                    synomsysWord,
                  },
                })
            );
            return;
          }
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
          const dictionaryPath = getDictionaryPath(options[0].dictionaryPath);
          const dictionary = getDictionary(dictionaryPath);
          for (const variable of variables) {
            lintWithVariable(variable, dictionary, (originWord, synomsysWord) =>
              report({
                node,
                messageId: "banOrthographicalVariant",
                data: {
                  originWord,
                  synomsysWord,
                },
              })
            );
          }
        }
      },
      FunctionDeclaration(node) {
        if (node.id) {
          const variableName = node.id.name;
          const dictionaryPath = getDictionaryPath(options[0].dictionaryPath);
          const dictionary = getDictionary(dictionaryPath);
          lintWithVariable(
            variableName,
            dictionary,
            (originWord, synomsysWord) =>
              report({
                node,
                messageId: "banOrthographicalVariant",
                data: {
                  originWord,
                  synomsysWord,
                },
              })
          );
        }
      },
      TSTypeAliasDeclaration(node) {
        const variableName = node.id.name;
        const dictionaryPath = getDictionaryPath(options[0].dictionaryPath);
        const dictionary = getDictionary(dictionaryPath);
        lintWithVariable(variableName, dictionary, (originWord, synomsysWord) =>
          report({
            node,
            messageId: "banOrthographicalVariant",
            data: {
              originWord,
              synomsysWord,
            },
          })
        );
      },
      TSInterfaceDeclaration(node) {
        const variableName = node.id.name;
        const dictionaryPath = getDictionaryPath(options[0].dictionaryPath);
        const dictionary = getDictionary(dictionaryPath);
        lintWithVariable(variableName, dictionary, (originWord, synomsysWord) =>
          report({
            node,
            messageId: "banOrthographicalVariant",
            data: {
              originWord,
              synomsysWord,
            },
          })
        );
      },
      TSEnumDeclaration(node) {
        const variableName = node.id.name;
        const dictionaryPath = getDictionaryPath(options[0].dictionaryPath);
        const dictionary = getDictionary(dictionaryPath);
        lintWithVariable(variableName, dictionary, (originWord, synomsysWord) =>
          report({
            node,
            messageId: "banOrthographicalVariant",
            data: {
              originWord,
              synomsysWord,
            },
          })
        );
      },
      TSEnumMember(node) {
        const propertyName = node.id;
        if (propertyName.type === "Identifier") {
          const variableName = propertyName.name;
          const dictionaryPath = getDictionaryPath(options[0].dictionaryPath);
          const dictionary = getDictionary(dictionaryPath);
          lintWithVariable(
            variableName,
            dictionary,
            (originWord, synomsysWord) =>
              report({
                node,
                messageId: "banOrthographicalVariant",
                data: {
                  originWord,
                  synomsysWord,
                },
              })
          );

          return;
        }
        if (propertyName.type === "Literal") {
          const variableName = propertyName.value?.toString();
          if (variableName) {
            const dictionaryPath = getDictionaryPath(options[0].dictionaryPath);
            const dictionary = getDictionary(dictionaryPath);
            lintWithVariable(
              variableName,
              dictionary,
              (originWord, synomsysWord) =>
                report({
                  node,
                  messageId: "banOrthographicalVariant",
                  data: {
                    originWord,
                    synomsysWord,
                  },
                })
            );
          }
          return;
        }

        // * if expression, this is computed props. computed props is out of range
      },
    };
  },
};
