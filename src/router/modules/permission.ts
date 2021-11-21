/*
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2021-11-21 13:52:47
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-11-21 18:42:38
 */
import router from "../index";
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'

import { Modal, message, notification } from "ant-design-vue";

import { Route } from "vue-router";
import { UserModule } from "@/store/modules/account";
import { PermissionModule } from "@/store/modules/permission";
// import i18n from '@/lang' // Internationalization
// import settings from './settings'

// NProgress.configure({ showSpinner: false })

// 白名单
const whiteList = ["/login", "/auth-redirect"];

// const getPageTitle = (key: string) => {
//   const hasKey = i18n.te(`route.${key}`)
//   if (hasKey) {
//     const pageName = i18n.t(`route.${key}`)
//     return `${pageName} - ${settings.title}`
//   }
//   return `${settings.title}`
// }

router.beforeEach(async (to: Route, _: Route, next: any) => {
  console.log("%c [ beforeEach ]", "font-size:13px; background:pink; color:#bf2c9f;", "beforeEach执行");
  // Start progress bar
  // NProgress.start()

  // Determine whether the user has logged in
  if (UserModule.token) {
    console.log("%c [ UserModule.token ]", "font-size:13px; background:pink; color:#bf2c9f;", UserModule.token);
    if (to.path === "/login") {
      // If is logged in, redirect to the home page
      next({ path: "/home" });
      console.log("%c [ home ]", "font-size:13px; background:pink; color:#bf2c9f;", "home");
      // NProgress.done()
    } else {
      // Check whether the user has obtained his permission roles
      if (UserModule.roles.length === 0) {
        console.log("[ roles ]", UserModule.roles);
        try {
          // Note: roles must be a object array! such as: ['admin'] or ['developer', 'editor']
          const aa = await UserModule.GetUserInfo();
          console.log("%c [ aa ]", "font-size:13px; background:pink; color:#bf2c9f;", aa);
          const roles = UserModule.roles;
          // Generate accessible routes map based on role
          PermissionModule.GenerateRoutes(roles);
          // Dynamically add accessible routes
          PermissionModule.dynamicRoutes.forEach(route => {
            router.addRoute(route);
          });
          // Hack: ensure addRoutes is complete
          // Set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true });
        } catch (err) {
          // Remove token and redirect to login page
          UserModule.ResetToken();
          // Message.error(err || 'Has Error')
          next(`/login?redirect=${to.path}`);
          // NProgress.done()
        }
      } else {
        next();
      }
    }
  } else {
    // Has no token
    if (whiteList.indexOf(to.path) !== -1) {
      // In the free login whitelist, go directly
      next();
    } else {
      // Other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`);
      // NProgress.done()
    }
  }
});

router.afterEach((to: Route) => {
  // Finish progress bar
  // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
  // NProgress.done()
  // set page title
  // document.title = getPageTitle(to.meta.title)
});
