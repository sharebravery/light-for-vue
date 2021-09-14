/*
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2021-08-25 10:37:57
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-09-05 18:22:00
 * @Weather: ~(～￣▽￣)～
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Plugins from "@/plugins";
import "@/components";

Vue.config.productionTip = false;

Vue.use(Plugins);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
