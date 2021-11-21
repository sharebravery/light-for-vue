<!--
 * @Author: sharebravery
 * @Date: 2021-09-04 08:11:58
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-11-21 13:35:46
 * @Weather: ~(～￣▽￣)～
-->
<template>
  <div class="home"><NavBar /><Introduce /></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/layout/components/NavBar.vue";
// import components from "@/components";

@Component({ components: { NavBar } })
export default class Home extends Vue {}
</script>

<style scope lang="less"></style>
