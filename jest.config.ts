/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/*.steps.ts", "**/*.spec.ts"],
};
/*
// jest.config.ts
import type {Config} from '@jest/types';

// Синхронно загружаемый конфиг
const config: Config.InitialOptions = {
  verbose: true,
};
export default config;

// Или с помощью асинхронной функции
export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
  };
};
*/