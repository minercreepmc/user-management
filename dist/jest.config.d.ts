declare const _default: {
    setupFilesAfterEnv: string[];
    testEnvironment: string;
    preset: string;
    transform: {
        '^.+\\.m?[tj]s?$': (string | {
            useESM: boolean;
        })[];
    };
    moduleNameMapper: {
        [key: string]: string | string[];
    };
    testRegex: string;
    coverageDirectory: string;
    collectCoverageFrom: string[];
    reporters: (string | (string | {
        pageTitle: string;
    })[])[];
};
export default _default;
