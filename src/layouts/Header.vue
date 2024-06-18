<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="header_box">
    <div class="left_box"></div>
    <div class="right_box">
      <el-button style="background: #f4f6f8;border:1px solid blue;color:blue">可视化大屏</el-button>
      <el-dropdown ref="dropdown1" trigger="contextmenu" style="margin-right: 30px">
        <span class="el-dropdown-link" style="color:black" @click='showClick'> {{ store.info?store.info.name:'' }} </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="layOyt">退出登录</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { DropdownInstance } from 'element-plus'
import {useAuthStore} from "@/stores/auth"
import { useRouter } from 'vue-router'
const router=useRouter()
const store=useAuthStore()
console.log(store.info);

const dropdown1 = ref<DropdownInstance>()
    function showClick() {
  if (!dropdown1.value) return
  dropdown1.value.handleOpen()
}
const layOyt=()=>{
     router.push('/login')
     store.resetUser()
     localStorage.removeItem('auth')
}
</script>
<style lang="scss" scoped>
.header_box {
  width: 100%;
  height: 100%;
  
  display: flex;
  .left_box {
    width: 85%;
    height: 100%;
   
  }
  .right_box {
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  
  }
}
</style>
