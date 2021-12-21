module.exports = {
  env: {
    es6: true,
  },
  extends: ["react-app", "airbnb", "prettier"],
  plugins: ["prettier", "import"],
  settings: {
    "import/extensions": [".js", ".jsx"],
    "import/ignore": ["node_modules"],
  },
  rules: {
    "import/no-unresolved": [2, { commonjs: true, amd: true }],
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,
    "arrow-body-style": ["off"],
    "no-restricted-exports": [
      "off",
      {
        restrictedNamedExports: ["default"],
      },
    ],
    semi: ["error"],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "jsx-a11y/media-has-caption": ["warn"],
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "prettier/prettier": ["error"],
  },
};
