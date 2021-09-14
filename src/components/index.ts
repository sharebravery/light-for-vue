/*
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2021-09-05 18:19:03
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-09-06 00:00:49
 * @Weather: ~(～￣▽￣)～
 */
import Vue from "vue";

/**
 * @description: global component
 * @description: 自注册全局组件
 * @param {*}
 * @author: sharebravery
 * @weather: (o゜▽゜)o☆
 */
const Components = require.context("../components/common", true, /(\.vue)$/);
Components.keys().map(key => {
  // 文件名作为组件名
  const componentName = key.replace(/(.*\/)*([^.]+).*/gi, "$2");
  Vue.component(componentName, Components(key).default);
});

export default Components;
