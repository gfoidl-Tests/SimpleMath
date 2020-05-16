// Unfortunately this won't work here. Maybe due to the references or whatever.
// I didn't hunt the bug.
//const { pathsToModuleNameMapper } = require("ts-jest/utils");
//const { compilerOptions }         = require("./tsconfig");
//-----------------------------------------------------------------------------
module.exports = {
    rootDir    : "../",
    name       : "unit",
    displayName: "unit tests",
    preset     : "ts-jest",
    testMatch  : [
        "**/tests/**/*.ts"
    ],
    moduleNameMapper: {
        "^@source/(.*)$": "<rootDir>/source/$1"
    },
    globals: {
        "ts-jest": {
            tsConfig: "<rootDir>/tests/tsconfig.json"   // https://kulshekhar.github.io/ts-jest/user/config/tsConfig#path-to-a-tsconfig-file
        }
    }
};
