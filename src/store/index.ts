/*
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2021-08-25 10:37:57
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-09-12 10:20:15
 * @Weather: ~(～￣▽￣)～
 */
import Vue from "vue";
import Vuex from "vuex";
// import { IAppState } from './modules/app'
import { IUserState } from "./models/user";

Vue.use(Vuex);

export interface IRootState {
  // app: IAppState
  user: IUserState;
}

// // Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({});
