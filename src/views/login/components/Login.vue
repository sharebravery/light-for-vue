<!--
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2021-09-12 09:13:35
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-11-21 13:55:43
 * @Weather: ~(～￣▽￣)～
-->
<template>
  <div>
    <a-form-model :model="userForm" :rules="rules" ref="formEl" :label-col="{ span: 5 }" :wrapper-col="{ span: 18 }">
      <a-form-model-item label="姓名：" prop="tableName">
        <a-input autocomplete="autocomplete" size="large" placeholder="please input value" v-model="userForm.username">
          <a-icon slot="prefix" type="user" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item label="密码：" prop="password">
        <a-input
          size="large"
          placeholder="please input value"
          autocomplete="autocomplete"
          type="password"
          v-model="userForm.password"
        >
          <a-icon slot="prefix" type="lock" />
        </a-input>
      </a-form-model-item>
    </a-form-model>

    <a-button type="primary" @click="login">登录</a-button><br />
    <a-button type="primary" @click="getUserModule">UserModule</a-button><br />
    <!-- <a-button type="primary" @click="getAllUsers">getAllUsers</a-button> -->
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue, Watch } from "vue-property-decorator";
// import * as api from "@/api";
import * as models from "@/models";
import { UserModule } from "@/store/modules/account";
import { FormModel } from "ant-design-vue";
import { Route } from "vue-router";

@Component
export default class Login extends Vue {
  @Ref()
  readonly formEl!: FormModel;
  userForm: models.Account = new models.Account();

  get route(): Route {
    return this.$route;
  }

  rules = {
    username: [{ required: true, message: "请输入账号！", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码！", trigger: "blur" }]
  };

  getUserModule() {
    console.log("%c [ UserModule ]", "font-size:13px; background:pink; color:#bf2c9f;", UserModule);
  }

  async login() {
    this.formEl.validate(async valid => {
      if (valid) {
        try {
          const result = await UserModule.Login(this.userForm);
          console.log("%c [ result ]", "font-size:13px; background:pink; color:#bf2c9f;", result);
          if (result && result.succeeded) {
            const to =
              this.route.query.redirect &&
              this.route.query.redirect !== "/404" &&
              this.route.query.redirect !== "/logoutReload"
                ? this.route.query.redirect
                : "/home";

            this.$router.push({ path: to as any });
            this.$message.success("登录成功");
            return;
          } else {
            this.$message.error("账号或密码错误。");
          }
        } catch (error) {
          this.$message.error("登录失败");
          console.log("%c [ error ]", "font-size:13px; background:pink; color:#bf2c9f;", error);
        }
      }
    });
  }
}
</script>

<style scope lang="less"></style>
