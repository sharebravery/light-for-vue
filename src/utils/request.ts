/*
 * @Author: sharebravery
 * @Date: 2021-08-25 10:37:57
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-09-13 20:18:01
 * @Weather: ~(～￣▽￣)～
 */
import axios, { AxiosRequestConfig } from "axios";
import { Modal, message, notification } from "ant-design-vue";

// import { UserModule } from '@/store/modules/user'

// 配置新建一个 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 10000,
  // headers: { "Content-Type": "application/json" }
});

// 添加请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 1.发送网络请求时, 在界面的中间位置显示Loading的组件

    // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面

    // 3.params/data序列化的操作

    // Authorization
    // Add X-Access-Token header to every request, you can add other custom headers here
    // if (UserModule.token) {
    //   config.headers['X-Access-Token'] = UserModule.token
    // }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
// service.interceptors.response.use(
//   response => {
//     // 对响应数据做点什么
//     const res = response.data;
//     if (res.code && res.code !== 0) {
//       // `token` 过期或者账号已在别处登录
//       if (res.code === 401 || res.code === 4001) {
//         // Session.clear(); // 清除浏览器全部临时缓存
//         window.location.href = "/"; // 去登录页
//         // ElMessageBox.alert('你已被登出，请重新登录', '提示', {})
//         // .then(() => {})
//         // .catch(() => {});
//       }
//       // return Promise.reject(service.interceptors.response);
//     } else {
//       return response.data;
//     }
//   },
//   error => {
//     // 对响应错误做点什么
//     if (error && error.response) {
//       switch (error.response.status) {
//         case 400:
//           console.log("请求错误");
//           break;
//         case 401:
//           console.log("未授权访问");
//           Modal.info({
//             content: "您的登录凭证已经过期，请重新登录",
//             title: "重新登录",
//             okText: "重新登录"
//           });
//           break;
//         default:
//           console.log(`服务器操作错误：`, error.response.data);
//           notification.error({
//             message: "服务调用失败",
//             description: `错误代码：${error.response.code}，异常消息：${error.response.message}`
//           });
//           throw new Error(error.response.message);
//       }
//     }
//     // }
//     // Vue.prototype.$toast.show(error, "error"); // 统一报错方式
//     // return error;
//   }
// );

service.interceptors.response.use(
  response => {
    // Some example codes here:
    // code == 20000: success
    // code == 50001: invalid access token
    // code == 50002: already login in other place
    // code == 50003: access token expired
    // code == 50004: invalid user (user not exist)
    // code == 50005: username or password is incorrect
    // You can change this part for your own usage.
    const res = response.data;
    if (res.code !== 200) {
      Modal.confirm({ content: `错误:response=${res.message}`, title: "错误" });
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        Modal.info({
          content: "您的登录凭证已经过期，请重新登录",
          title: "重新登录",
          okText: "重新登录"
        });
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return response.data;
    }
  },
  error => {
    console.log(`服务器操作错误：`, error.data);
    notification.error({
      message: "服务调用失败",
      description: `错误代码：${error.code}，异常消息：${error.message}`
    });
    return Promise.reject(error);
  }
);

export default service;
