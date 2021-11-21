/*
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2021-11-20 23:10:30
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-11-21 18:40:46
 */

import request from "@/utils/request";
import * as models from "@/models";
import { AxiosPromise, AxiosResponse } from "axios";

export class Account {
  /**
   * @description: 登录
   * @param {models} data
   * @return {*}
   * @author: sharebravery
   */
  static async SignIn_PostAsync(data: models.Account): Promise<AxiosResponse> {
    return request({
      method: "POST",
      url: `/api/Account/SignIn`,
      data,
      responseType: "json"
    });
  }

  static async Me_GetAsync(): Promise<any> {
    return request({
      method: "GET",
      url: `/api/Account/Me`,
      responseType: "json"
    });
  }
}
