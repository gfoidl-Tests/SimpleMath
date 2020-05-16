module.exports = {
    projects: [
        // wildcards are supported like
        // "<rootDir>/*"
        // but I want for the demo here to be expressive
        "<rootDir>/tests"
    ],
    coverageReporters: ["text", "cobertura", "html"]    // https://github.com/istanbuljs/istanbuljs/tree/master/packages/istanbul-reports/lib
};
