<!--
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2021-09-12 09:13:35
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-09-13 21:38:16
 * @Weather: ~(～￣▽￣)～
-->
<template>
  <div>
    姓名：<a-input autocomplete="autocomplete" size="large" placeholder="admin" v-model="userForm.username">
      <a-icon slot="prefix" type="user" />
    </a-input>
    密码：
    <a-input size="large" placeholder="888888" autocomplete="autocomplete" type="password" v-model="userForm.password">
      <a-icon slot="prefix" type="lock" />
    </a-input>
    <a-button type="primary" @click="login">登录</a-button>{{ result }}
    <a-button type="primary" @click="getUsers">getUsers</a-button>{{ result }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as api from "@/api";
import * as models from "@/models";

class CUserForm {
  username: string = "";
  password: string = "";
}

@Component
export default class Login extends Vue {
  userForm: CUserForm = new CUserForm();
  result: any = null;

  async SignIn_PostAsync() {
    //   this.changeLogin({ Authorization:this.userForm.name });
    try {
      const res = await api.Users.SignIn_PostAsync(this.userForm);
      this.result = res;
      console.log("%c [ res ]", "font-size:13px; background:pink; color:#bf2c9f;", res);
    } catch (error) {
      console.log("%c [ error ]", "font-size:13px; background:pink; color:#bf2c9f;", error);
    }
  }

  async login() {
    //   this.changeLogin({ Authorization:this.userForm.name });
    try {
      const res = await api.Users.login(this.userForm);
      this.result = res;
      console.log("%c [ res ]", "font-size:13px; background:pink; color:#bf2c9f;", res);
    } catch (error) {
      console.log("%c [ error ]", "font-size:13px; background:pink; color:#bf2c9f;", error);
    }
  }

  async getUsers() {
    try {
      const res = await api.Users.getUsers();
      this.result = res;
      console.log("%c [ res ]", "font-size:13px; background:pink; color:#bf2c9f;", res);
    } catch (error) {
      console.log("%c [ error ]", "font-size:13px; background:pink; color:#bf2c9f;", error);
    }
  }
}
</script>

<style scope lang="less"></style>
