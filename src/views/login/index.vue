<!--
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2021-09-12 09:13:35
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-11-20 21:28:22
-->
<template>
  <div>
    <Login />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Login from "./components/Login.vue";

@Component({ components: { Login } })
export default class LoginIndex extends Vue {}
</script>

<style scope lang="less"></style>
