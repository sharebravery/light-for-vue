/*
 * @Author: sharebravery
 * @Date: 2021-08-25 10:37:57
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-11-21 14:44:31
 * @Weather: ~(～￣▽￣)～
 */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);

/**
 * @description: 静态路由
 * @param {*}
 * @return {*}
 * @author: sharebravery
 */
export const constantRoutes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "@/views/login/index.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/home/index.vue"),
    meta: {
      title: "pagePermission",
      roles: ["admin"] // or you can only set roles in sub nav
    }
  }
];

/**
 * @description: 异步路由
 * @param {*}
 * @return {*}
 * @author: sharebravery
 */
export const asyncRoutes: RouteConfig[] = [
  // {
  //   path: "/home",
  //   name: "Home",
  //   component: () => import(/* webpackChunkName: "home" */ "@/views/home/index.vue"),
  //   meta: {
  //     title: "pagePermission",
  //     roles: ["admin"] // or you can only set roles in sub nav
  //   }
  // }
];

const createRouter = () =>
  new VueRouter({
    mode: "history",
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
    base: process.env.BASE_URL,
    routes: constantRoutes
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  (router as any).matcher = (newRouter as any).matcher; // reset router
}

export default router;
