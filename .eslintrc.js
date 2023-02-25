module.exports = {
  parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   project: 'tsconfig.json',
  //   tsconfigRootDir: __dirname,
  //   sourceType: 'module',
  // },
  extends: [
    "airbnb-typescript/base"
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js", "dist"],
  plugins: [
    "only-warn",
    "import"
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "class-methods-use-this": "off",
    "padded-blocks": "off",
    "array-bracket-spacing": "off",
    "import/no-extraneous-dependencies": "off",
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/no-named-as-default-member": "off",
    "prefer-promise-reject-errors": "off",
    "@typescript-eslint/no-throw-literal": "off",
    "max-classes-per-file": "off",
    "import/order": "off",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/semi": ["error", "never"],
    "linebreak-style": "off",
    "object-curly-newline": "off",
    "function-paren-newline": "off",
    "arrow-parens": "off",
    "no-await-in-loop": "off",
    "no-restricted-syntax": "off",
    "arrow-body-style": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "@typescript-eslint/no-use-before-define": "off",
    "no-continue": "off",
    "@typescript-eslint/object-curly-spacing": "off",
    "no-param-reassign": "off",
    "consistent-return": "off",
    "max-len": ["error", {
      "code": 120,
      "ignoreUrls": true,
      "ignoreTrailingComments": true,
      "ignoreComments": true,
      "ignoreStrings": true,
      "ignorePattern": "^import\\s.+\\sfrom\\s.+;$",
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true
    }],
    '@typescript-eslint/naming-convention': [
      'error',
      // The `@typescript-eslint/naming-convention` rule allows `leadingUnderscore` and `trailingUnderscore` settings. However, the existing `no-underscore-dangle` rule already takes care of this.
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: 'parameter',
        format: null,
      },
      {
        selector: 'parameterProperty',
        format: null,
      },
      {
        selector: 'method',
        format: null,
      },
      {
        selector: 'function',
        format: ['UPPER_CASE', 'camelCase'],
      },
      // Allow UPPER_CASE for variables to cater for 23.10
      {
        selector: 'variable',
        format: null,
      },
      // Airbnb recommends PascalCase for classes (23.3), and although Airbnb does not make TypeScript recommendations, we are assuming this rule would similarly apply to anything "type like", including interfaces, type aliases, and enums.
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      // Allow only PascalCase naming convention for enum members, because Airbnb has no recommendation
      {
        selector: ['enum', 'enumMember'],
        format: ['PascalCase'],
      },
      // Allow any naming convention for properties, because:
      // (1) Airbnb does not specify any naming conventions for properties
      // (2) The `camelcase` rule specifically disables checking properties: https://github.com/airbnb/javascript/blob/06b3ab11d9a443ff46f052dd00375e271e5146e6/packages/eslint-config-airbnb-base/rules/style.js#L24
      {
        selector: 'property',
        format: null,
      },
    ],
    "@typescript-eslint/member-ordering": ["error", {
      default: {
        memberTypes: [
          "signature",

          "public-static-field",
          "protected-static-field",
          "private-static-field",

          "public-abstract-field",
          "public-decorated-field",
          "public-instance-field",

          "protected-abstract-field",
          "protected-decorated-field",
          "protected-instance-field",

          "private-abstract-field",
          "private-decorated-field",
          "private-instance-field",

          "public-constructor",
          "protected-constructor",
          "private-constructor",

          "public-static-method",
          "public-abstract-method",
          "public-decorated-method",
          "public-instance-method",

          "protected-static-method",
          "protected-instance-method",
          "protected-decorated-method",
          "protected-abstract-method",

          "private-static-method",
          "private-abstract-method",
          "private-decorated-method",
          "private-instance-method",
        ]
      }
    }],
  }
}
