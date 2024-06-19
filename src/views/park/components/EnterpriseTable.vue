<template>
  <el-table
    :data="tableData"
    row-key="id"
    @expand-change="aa"
    :border="parentBorder"
    style="width: 100%"
  >
    <el-table-column type="expand">
      <template #default>
        <el-table :data="data" :border="childBorder">
          <el-table-column label="租聘楼宇" prop="buildingName" />
          <el-table-column label="租聘起止时间">
            <template #default="scope">
              {{ scope.row.startTime }}-{{ scope.row.endTime }}
            </template>
          </el-table-column>
          <el-table-column label="合同状态" prop="city">
            <template #default="scope">
              <el-tag type="primary" v-show="scope.row.status === 0">待生效</el-tag>
              <span v-show="scope.row.status === 1">生效中</span>
              <span v-show="scope.row.status === 2">已到期</span>
              <el-tag type="info" v-show="scope.row.status === 3">已退租</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="scope">
              <el-button
                link
                type="primary"
                size="small"
                :disabled="scope.row.status === 3 || scope.row.status === 0"
              >
                续租
              </el-button>
              <el-button
                link
                type="primary"
                size="small"
                :disabled="scope.row.status === 3"
              >
                退组
              </el-button>
              <el-button
                link
                type="primary"
                size="small"
                :disabled="scope.row.status != 3"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-table-column>
    <el-table-column label="序号" type="index" width="80px" />
    <el-table-column label="企业名称" prop="name" />
    <el-table-column label="联系人" prop="contact" />
    <el-table-column label="联系电话" prop="contactNumber" />
    <el-table-column label="操作">
      <template #default>
        <el-button link type="primary" size="small"> 添加合同 </el-button>
        <el-button link type="primary" size="small"> 查看 </el-button>
        <el-button link type="primary" size="small"> 编辑 </el-button>
        <el-button link type="primary" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { getEnterpriseList, getEnterpriserent } from "@/api/enterprise/index";
//添加模态框的数据源
// 请求数据
const dataType = ref({
  name: "",
  page: 1,
  pageSize: 10,
});
const parentBorder = ref(false);
const childBorder = ref(false);
const tableData = ref([]);
const getList = async () => {
  const res = await getEnterpriseList(dataType.value);
  console.log(res, "res=====>");
  tableData.value = res.data.rows;
};
getList();
const data = ref([]);
const aa = async (val) => {
  const res = await getEnterpriserent(val.id);
  data.value = res.data;
};
</script>
<style lang="scss" scoped>
:deep(.el-table) {
  --el-table-header-bg-color: rgba(242, 243, 245, 1);
  --el-table-header-text-color: rgba(29, 33, 41, 1);
}
</style>
