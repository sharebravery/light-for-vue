/*
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2021-09-05 18:10:15
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-09-13 21:14:14
 * @Weather: ~(～￣▽￣)～
 */
export interface ApiResponseData<T> {
  /**
   * 操作是否成功
   */
  success: boolean;

  /**
   * 状态码
   */
  code: number;

  /**
   * 提示信息
   */
  message: string;

  /**
   * 操作结果数据
   */
  data?: T;
}
