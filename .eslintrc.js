/*
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2021-08-25 10:37:57
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-11-20 22:35:38
 * @Weather: ~(～￣▽￣)～
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/prettier",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unused-vars": "off", //关闭定义未使用警告
    "@typescript-eslint/no-inferrable-types": "off", // 关闭类型推断
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "eol-last": 0,
    "no-async-promise-executor": "off",
    "no-useless-escape": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": "off",
    "prefer-const": "off",
    indent: [2, 2, { SwitchCase: 1 }],
    // "space-before-function-paren": ["error", "never"],
    // "vue/array-bracket-spacing": "error",
    // "vue/arrow-spacing": "error",
    // "vue/block-spacing": "error",
    // "vue/brace-style": "error",
    // "vue/camelcase": "error",
    "vue/comma-dangle": "error",
    "vue/component-name-in-template-casing": ["error", "kebab-case"],
    "vue/eqeqeq": "error",
    // "vue/key-spacing": "error",
    "vue/match-component-file-name": "error"
    // "vue/object-curly-spacing": "error",
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true
      }
    }
  ]
};
