/*
 * @Description: 外部插件由plugins文件夹进行管理
 * @Author: sharebravery
 * @Date: 2021-09-04 09:41:42
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-09-06 22:06:50
 * @Weather: ~(～￣▽￣)～
 */
import Vue, { VueConstructor, PluginObject } from "vue";
import Antd from "ant-design-vue";
import "@/assets/style/index.less";

const Plugins: PluginObject<any> = {
  install(Vue: VueConstructor<Vue>) {
    Vue.use(Antd);
  }
};

export default Plugins;
