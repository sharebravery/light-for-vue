/*
 * @Author: sharebravery
 * @Date: 2021-08-25 10:37:57
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-09-04 13:19:28
 * @Weather: ~(～￣▽￣)～
 */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "*",
    redirect: "/"
  },
    // webpackChunkName：懒加载后的文件名
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */"@/views/home/index.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
