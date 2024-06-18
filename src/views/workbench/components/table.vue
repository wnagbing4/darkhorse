<template>
  <el-table :data="tableData" style="width: 990px">
    <el-table-column type="index" label="序号" width="80" />
    <el-table-column prop="enterpriseName" label="企业名称" width="180" />
    <el-table-column prop="buildingName" label="租聘楼宇" width="180" />
    <el-table-column prop="startTime" label="租聘时间" >
        <template #default="scope">
         {{ scope.row.startTime }} 至 {{ scope.row.endTime}}
      </template>
    </el-table-column>
    <el-table-column label="操作" width="180">
      <template #default="scope">
        <el-button type="primary" link> 续签 </el-button>
        <el-button type="primary" link> 退组 </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { getInfoList } from "@/api/login/login";
import {ref} from "vue"
const tableData =ref([])
const getList = async () => {
  const res = await getInfoList({
    page: 1,
    pageSize: 10,
  });
  tableData.value=res.data.rows
  console.log(res,'datdata');
};
getList()
</script>
