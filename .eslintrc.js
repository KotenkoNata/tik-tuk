module.exports = {
  env: {
    es6: true,
  },
  extends: ["react-app", "airbnb", "prettier"],
  plugins: ["prettier"],
  rules: {
    "arrow-body-style": ["off"],
    semi: ["error"],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "prettier/prettier": ["error"],
  },
};
