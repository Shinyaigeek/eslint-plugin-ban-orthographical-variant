import { TSESLint } from "@typescript-eslint/utils";
import {
  banOrthographicalVariant,
  Options,
} from "../rules/ban-orthographical-variant";
import path from "path";

const tester = new TSESLint.RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
});

const mockedOptions = [
  {
    dictionaryPath: path.join(__dirname, "../../mock/dictionary.json"),
  },
] as const;

describe("ban-orthographical-variant", () => {
  tester.run<"banOrthographicalVariant", Options>(
    "banOrthographicalVariant",
    banOrthographicalVariant,
    {
      valid: [
        {
          name: "variable declaration with identifier",
          code: `
        const audioPath = "hoge.mp3"
        `,
          options: mockedOptions,
        },
        {
          name: "variable declaration with destructuring",
          code: `
        const { audioPath } = { audioPath: "hoge.mp3" }
        `,
          options: mockedOptions,
        },
        {
          name: "variable declaration with destructuring and default value",
          code: `
        const { audioPath = "hoge.mp3" } = { audioPath: "hoge.mp3" }
        `,
          options: mockedOptions,
        },
        {
          name: "variable declaration with destructuring and rename",
          code: `
        const { audioPath: audioPath2 } = { audioPath: "hoge.mp3" }
        `,
          options: mockedOptions,
        },
        {
          name: "function declaration",
          code: `
        function hoge(audioPath) {
          return audioPath
        }
        `,
          options: mockedOptions,
        },
        {
          name: "object property",
          code: `
        const hoge = {
          audioPath: "hoge.mp3"
        }
        `,
          options: mockedOptions,
        },
      ],
      invalid: [
        {
          name: "variable declaration with identifier",
          code: `
        const musicPath = "hoge.mp3"
        `,
          options: mockedOptions,
          errors: [
            {
              messageId: "banOrthographicalVariant",
              data: {
                originWord: "Audio",
                synomsysWord: "Music",
              },
            },
          ],
        },
        {
          name: "object property with identifier",
          code: `
        const audio = {
          musicPath: "hoge.mp3"
        }
        `,
          options: mockedOptions,
          errors: [
            {
              messageId: "banOrthographicalVariant",
              data: {
                originWord: "Audio",
                synomsysWord: "Music",
              },
            },
          ],
        },
        {
          name: "function declaration",
          code: `
        function music() {
          return 1
        }
        `,
          options: mockedOptions,
          errors: [
            {
              messageId: "banOrthographicalVariant",
              data: {
                originWord: "Audio",
                synomsysWord: "Music",
              },
            },
          ],
        },
      ],
    }
  );
});
