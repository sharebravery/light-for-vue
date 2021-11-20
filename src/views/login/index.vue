<!--
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2021-09-12 09:13:35
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-11-20 19:13:00
 * @Weather: ~(～￣▽￣)～
-->
<template>
  <div>
    姓名：<a-input
      autocomplete="autocomplete"
      size="large"
      placeholder="please input value"
      v-model="userForm.username"
    >
      <a-icon slot="prefix" type="user" />
    </a-input>
    密码：
    <a-input
      size="large"
      placeholder="please input value"
      autocomplete="autocomplete"
      type="password"
      v-model="userForm.password"
    >
      <a-icon slot="prefix" type="lock" />
    </a-input>
    <a-button type="primary" @click="login">登录</a-button><br />
    <div style="margin: 50px">{{ result.message }}</div>
    <a-button type="primary" @click="getAllUsers">getAllUsers</a-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as api from "@/api";
import * as models from "@/models";
import { UserModule } from "@/store/modules/account";

@Component
export default class Login extends Vue {
  userForm: models.Account = new models.Account();
  result: any = { message: "" };

  async createUser() {
    // await api.Users.CreateUser()
  }

  async login() {
    //   this.changeLogin({ Authorization:this.userForm.name });
    try {
      // const res = await api.Users.login(this.userForm);
      const res = await UserModule.Login(this.userForm);
      // this.result = res;
      this.$message.success("登录成功");
      console.log("%c [ res ]", "font-size:13px; background:pink; color:#bf2c9f;", res);
    } catch (error) {
      this.$message.error("登录失败");
      console.log("%c [ error ]", "font-size:13px; background:pink; color:#bf2c9f;", error);
    }
  }

  async getAllUsers() {
    try {
      const res = await api.Users.getAllUsers();
      this.result = res;
      console.log("%c [ res ]", "font-size:13px; background:pink; color:#bf2c9f;", res);
    } catch (error) {
      console.log("%c [ error ]", "font-size:13px; background:pink; color:#bf2c9f;", error);
    }
  }
}
</script>

<style scope lang="less"></style>
