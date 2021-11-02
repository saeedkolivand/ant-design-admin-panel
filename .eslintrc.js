module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier", "unused-imports"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".ts", ".d.ts", ".tsx"],
      },
    },
  },
  rules: {
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
      },
    ],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx", ".js"],
      },
    ],
    "react/destructuring-assignment": "off",
    "react/jsx-no-bind": "off",
    "no-debugger": "off",
    "no-console": "off",
    "no-param-reassign": "off",
    "react/no-array-index-key": "off",
    "import/extensions": "off",
    camelcase: "off",
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
    "no-shadow": "off",
    "no-unused-vars": "off",
    "consistent-return": "off",
    "react/prop-types": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "no-plusplus": "off",
    "no-nested-ternary": "off",
    "react/static-property-placement": "off",
    "react/react-in-jsx-scope": "off",
    "no-use-before-define": "off",
    "no-underscore-dangle": "off",
    "react-hooks/exhaustive-deps": "off",
    "no-restricted-syntax": "off",
    "react/require-default-props": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^",
        args: "after-used",
        argsIgnorePattern: "^",
      },
    ],
  },
};
