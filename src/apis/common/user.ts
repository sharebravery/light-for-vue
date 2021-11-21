/*
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2021-09-05 17:09:15
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-11-21 13:45:36
 * @Weather: ~(～￣▽￣)～
 */
import request from "@/utils/request";
import { AxiosPromise, AxiosResponse } from "axios";

export class User {
  static async getUserInfo<T>(data?: T): Promise<AxiosResponse> {
    return request({
      url: `/api/users/info`,
      method: "POST",
      data
    });
  }

  static async createUser<T>(data: T): Promise<AxiosResponse> {
    return request({
      method: "POST",
      url: `/api/users/createUser`,
      data,
      responseType: "json"
    });
  }

  static async getAllUsers<T>(params?: T): Promise<AxiosResponse> {
    return request({
      url: `/api/User/GetAllUsers`,
      method: "get"
    });
  }

  static async login<T>(data?: T): Promise<AxiosResponse> {
    return request({
      url: `/api/Account/SignIn`,
      method: "POST",
      data
    });
  }

  static async logout<T>(data?: T): Promise<AxiosResponse> {
    return request({
      url: `/api/users/logout`,
      method: "POST",
      data
    });
  }
}

export async function getUsers<T>(params?: T): Promise<AxiosPromise<T>> {
  return request({
    url: "/api/users",
    method: "get",
    params
  });
}

export const getUserByName = (username: string) =>
  request({
    url: `/users/${username}`,
    method: "get"
  });

export const updateUser = (username: string, data: any) =>
  request({
    url: `/users/${username}`,
    method: "put",
    data
  });

export const deleteUser = (username: string) =>
  request({
    url: `/users/${username}`,
    method: "delete"
  });

export const login = (data: any) =>
  request({
    url: "/users/login",
    method: "post",
    data
  });

export const logout = () =>
  request({
    url: "/users/logout",
    method: "post"
  });

export const register = (data: any) =>
  request({
    url: "/users/register",
    method: "post",
    data
  });
