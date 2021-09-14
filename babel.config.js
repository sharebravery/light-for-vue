/*
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2021-08-25 10:37:57
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-09-06 22:14:31
 * @Weather: ~(～￣▽￣)～
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  env: {
    development: {
      plugins: ["dynamic-import-node"]
    }
  }
};
