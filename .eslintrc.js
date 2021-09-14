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
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    indent: [2, 2, { SwitchCase: 1 }],
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
  // overrides: [
  //   {
  //     files: [
  //       '**/__tests__/*.{j,t}s?(x)',
  //       '**/tests/unit/**/*.spec.{j,t}s?(x)'
  //     ],
  //     env: {
  //       jest: true
  //     }
  //   }
  // ]
};
