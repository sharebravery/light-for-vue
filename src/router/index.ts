/*
 * @Author: sharebravery
 * @Date: 2021-08-25 10:37:57
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-09-12 10:54:16
 * @Weather: ~(～￣▽￣)～
 */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "*",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/home/index.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
