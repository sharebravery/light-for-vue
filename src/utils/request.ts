/*
 * @Author: sharebravery
 * @Date: 2021-08-25 10:37:57
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-09-04 09:28:17
 * @Weather: ~(～￣▽￣)～
 */
import Vue from "vue";
import axios, { AxiosRequestConfig } from "axios";
// import { UserModule } from '@/store/modules/user'

// 配置新建一个 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 10000
  // headers: { 'Content-Type': 'application/json' },
});

// 添加请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 1.发送网络请求时, 在界面的中间位置显示Loading的组件

    // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面

    // 3.params/data序列化的操作

    // const token = localStorage.getItem("token");
    // const uid = localStorage.getItem("uid");

    // if (token && uid) {
    //   config.headers.common["token"] = token;
    //   config.headers.common["uid"] = uid;
    // }
    // Add X-Access-Token header to every request, you can add other custom headers here
    // if (UserModule.token) {
    //   config.headers['X-Access-Token'] = UserModule.token
    // }

    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    const res = response.data;
    if (res.code && res.code !== 0) {
      // `token` 过期或者账号已在别处登录
      if (res.code === 401 || res.code === 4001) {
        // Session.clear(); // 清除浏览器全部临时缓存
        window.location.href = "/"; // 去登录页
        // ElMessageBox.alert('你已被登出，请重新登录', '提示', {})
        // .then(() => {})
        // .catch(() => {});
      }
      // return Promise.reject(service.interceptors.response);
    } else {
      return response.data;
    }
  },
  error => {
    // 对响应错误做点什么
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          console.log("请求错误");
          break;
        case 401:
          console.log("未授权访问");
          break;
        default:
          console.log("其他错误信息");
      }
    }
    Vue.prototype.$toast.show(error, "error"); // 统一报错方式
    return error;
  }
);

export default service;
