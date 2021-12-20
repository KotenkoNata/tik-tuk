module.exports = {
  env: {
    es6: true,
  },
  extends: ["react-app", "airbnb", "prettier"],
  plugins: ["prettier"],
  rules: {
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
