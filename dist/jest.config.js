"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_jest_1 = require("ts-jest");
const tsconfig_json_1 = require("./tsconfig.json");
exports.default = {
    setupFilesAfterEnv: ['jest-extended/all'],
    testEnvironment: 'node',
    preset: 'ts-jest/presets/default-esm',
    transform: {
        '^.+\\.m?[tj]s?$': ['ts-jest', { useESM: true }],
    },
    moduleNameMapper: (0, ts_jest_1.pathsToModuleNameMapper)(tsconfig_json_1.compilerOptions.paths, {
        prefix: '<rootDir>',
    }),
    testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(m)?ts$',
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
        'src/**/*.ts',
        'src/**/*.mts',
        '!src/**/*.d.ts',
        '!src/**/*.d.mts',
    ],
    reporters: [
        'default',
        [
            './node_modules/jest-html-reporter',
            {
                pageTitle: 'Test Report',
            },
        ],
    ],
};
//# sourceMappingURL=jest.config.js.map