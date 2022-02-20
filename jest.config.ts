import type { Config } from "@jest/types";
import { pathsToModuleNameMapper } from "ts-jest/utils";
import { compilerOptions } from "./tsconfig.json";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/node_modules/",
    "<rootDir>/public/",
    "<rootDir>/cypress/",
  ],
  setupFiles: ["<rootDir>/jest/setup.ts"],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "<rootDir>/jest/setup-env.ts",
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>",
  }),
};

export default config;
