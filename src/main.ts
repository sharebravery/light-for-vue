/*
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2021-08-25 10:37:57
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-11-21 18:31:50
 * @Weather: ~(～￣▽￣)～
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Plugins from "@/plugins";
import "@/components";

import "@/router/modules/permission";

Vue.config.productionTip = false;

Vue.use(Plugins);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
