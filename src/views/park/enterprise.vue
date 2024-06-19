<template>
   <el-card>
    <div class="search">
    <span>企业名称:</span>
    <el-input
      v-model="name"
      style="width: 240px;margin-left:20px"
      placeholder="Pick a date"
    />
    <el-button type="primary">查询</el-button>
  </div>
  <div class="addAdress">
     <el-button type="primary">添加企业</el-button>
  </div>
  <div style="margin-top:20px">
    <EnterpriseTable></EnterpriseTable>
  </div>
   </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import EnterpriseTable from "./components/EnterpriseTable.vue"
const name=ref('')
</script>

<style lang="scss" scoped>
.el-card{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: none;
    .search{
         width: 100%;
         height: 50px;
         border-bottom: 1px solid #efefef;
         .el-button{
             background: #4770ff;
             color:#fff;
             margin-left:20px;
         }
    }
    .addAdress{
         width: 100%;
         height: 40px;
         display: flex;
         align-items: center;
         .el-button{
             background: #4770ff;
             color:#fff;
             margin-top:20px;
         }
    }
}
</style>    
