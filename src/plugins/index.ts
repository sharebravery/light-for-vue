/*
 * @Description: 外部插件由plugins文件夹进行管理
 * @Author: sharebravery
 * @Date: 2021-09-04 09:41:42
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-09-04 20:58:27
 * @Weather: ~(～￣▽￣)～
 */
import Vue from "vue";
import { VueConstructor, PluginObject } from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const Plugins: PluginObject<any> = {
  install(Vue: VueConstructor<Vue>) {
    Vue.use(Antd);
  }
};

/**
 * @description: global component
 * @description: 当需要开启自注册全局组件，打开以下注释
 * @param {*}
 * @author: sharebravery
 * @weather: (o゜▽゜)o☆
 */
const Components = require.context("../components/common", true, /(\.vue)$/);
Components.keys().map(key => {
  // 文件名作为组件名
  let componentName = key.replace(/(.*\/)*([^.]+).*/gi, "$2");
  Vue.component(componentName, Components(key).default);
});
export default Plugins;
