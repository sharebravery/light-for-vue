/*
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2021-08-25 10:37:57
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-09-04 20:46:08
 * @Weather: ~(～￣▽￣)～
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Plugins from "@/plugins";

Vue.config.productionTip = false;

Vue.use(Plugins);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
