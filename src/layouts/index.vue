<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <SideBar></SideBar>
    </el-aside>
    <el-container style="background: #f4f6f8">
      <el-header style="height: 50px; border-bottom: 1px solid #eee;padding:0;">
        <Header />
      </el-header>
      <el-main>
        <router-view v-slot="{ Component }">
          <component :is="Component"></component>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
// @ts-ignore
import SideBar from "./sideBar.vue";
// @ts-ignore
import Header from './header.vue'
</script>

<style lang="scss" scoped></style>
