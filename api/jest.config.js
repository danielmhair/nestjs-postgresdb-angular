module.exports = {
    "preset": "ts-jest",
    "globals": {
        "ts-jest": {
            "tsconfig": "<rootDir>/tsconfig.json",
            "isolatedModules": true
        }
    },
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "coverageDirectory": "./coverage/",
    "rootDir": ".",
    "collectCoverage": false,
    
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "/src/.*\\.(test|spec).(ts|tsx|js)$",
    "collectCoverageFrom": [
        "src/**/*.{js,jsx,tsx,ts}",
        "!**/node_modules/**",
        "!**/vendor/**"
    ],
    "coverageReporters": [
        "json",
        "lcov"
    ]
}