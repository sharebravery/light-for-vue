/*
 * @Author: sharebravery
 * @Date: 2021-08-25 10:37:57
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-09-04 12:48:28
 * @Weather: ~(～￣▽￣)～
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
  },
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
      indent: [2, 2, { SwitchCase: 1 }], // 2 space for tab for prettier
      "space-before-function-paren": ["error", "never"], // no space in function name for prettier
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/member-delimiter-style": [
        "error",
        {
          multiline: {
            delimiter: "none"
          },
          singleline: {
            delimiter: "comma"
          }
        }
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-var-requires": "off",
      "space-before-function-paren": ["error", "never"],
      "vue/array-bracket-spacing": "error",
      "vue/arrow-spacing": "error",
      "vue/block-spacing": "error",
      "vue/brace-style": "error",
      "vue/camelcase": "error",
      "vue/comma-dangle": "error",
      "vue/component-name-in-template-casing": ["error", "kebab-case"],
      "vue/eqeqeq": "error",
      "vue/key-spacing": "error",
      "vue/match-component-file-name": "error",
      "vue/object-curly-spacing": "error"
    }
};
