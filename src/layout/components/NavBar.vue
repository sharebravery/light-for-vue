<!--
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2021-11-21 11:14:33
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-11-21 14:44:58
-->
<template>
  <div>
    <slot>
      <a-button type="primary" @click="logout"> 登出 </a-button>
    </slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UserModule } from "@/store/modules/account";

@Component
export default class NavBar extends Vue {
  async logout() {
    await UserModule.LogOut();
    this.$router.push(`/login?redirect=${this.$route.fullPath}`).catch(err => {
      console.warn(err);
    });
  }
}
</script>

<style scope lang="less"></style>
