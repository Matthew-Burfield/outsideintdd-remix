import type {Config} from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/", "<rootDir>/public/", "<rootDir>/cypress/"], 
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};

export default config;
