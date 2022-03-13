import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    roots: ["<rootDir>/src"],
    testMatch: ["**/?(*.)+(spec|test).+(ts|tsx|js)"],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
  };
};
