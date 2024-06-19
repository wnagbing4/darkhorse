<template>
  <div class="boss">
    <div class="top" style="display: flex">
      <el-form-item label="楼宇名称:" style="max-width: 300px">
        <el-input v-model="userch.name" placeholder="请输入楼宇名称" />
      </el-form-item>
      <el-button type="primary" style="margin-left: 10px" @click="builist"
        >查询</el-button
      >
    </div>
    <el-divider style="padding: 0; margin: 0; margin-bottom: 15px" />
    <el-button type="primary" @click="addBilding">添加楼宇</el-button>

    <!-- <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed type="index" width="80px" label="序号" />
        <el-table-column prop="name" label="楼宇名称" />
        <el-table-column prop="floors" label="层数" />
        <el-table-column prop="area" label="在管面积(m²)" />
        <el-table-column prop="propertyFeePrice" label="物业费(元/m²)" />
        <el-table-column prop="status" label="状态">
          <template #default="scoped">
            <span v-if="scoped.row.status === 0">空置中</span>
            <span v-if="scoped.row.status === 1">租赁中</span>
          </template>
        </el-table-column>
  
        <el-table-column fixed="right" label="操作">
          <template #default>
            <el-button link type="primary" size="small"> 编辑 </el-button>
            <el-button link type="primary" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table> -->

    <div>
      <!-- <el-pagination
          style="float: right"
          :current-page="userch.page"
          :page-size="userch.pageSize"
          :page-sizes="[10, 20, 30, 40]"
          layout="total,prev, pager, next, jumper,sizes"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        /> -->
    </div>
  </div>
  <ICommonTable
    ref="commonTableRef"
    :data="state.data"
    :page="state.page"
    @size-change="sizeChangeHandle"
    @current-change="currentChangeHandle"
    @jumper-change="jumperChangeHandle"
    @selection-change="selectionChangeHandle"
    :key="state.commonTableKey"
  >
    <el-table-column fixed type="index" width="80px" label="序号" />
    <el-table-column prop="name" label="楼宇名称" />
    <el-table-column prop="floors" label="层数" />
    <el-table-column prop="area" label="在管面积(m²)" />
    <el-table-column prop="propertyFeePrice" label="物业费(元/m²)" />
    <el-table-column prop="status" label="状态">
      <template #default="scoped">
        <span v-if="scoped.row.status === 0">空置中</span>
        <span v-if="scoped.row.status === 1">租赁中</span>
      </template>
    </el-table-column>

    <el-table-column fixed="right" label="操作">
      <template #default>
        <el-button link type="primary" size="small"> 编辑 </el-button>
        <el-button link type="primary" size="small">删除</el-button>
      </template>
    </el-table-column>
  </ICommonTable>
  <!-- <BildingDialog ref="dialogRef"></BildingDialog> -->
  <!-- <el-dialog v-model="dialogFormVisible" title="添加楼宇" width="500">
      <el-form
        ref="ruleFormRef"
        style="max-width: 600px; height: 360px; padding: 30px"
        :model="ruleForm"
        :rules="rules"
        label-position="top"
      >
        <el-form-item label="楼宇名称" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入楼宇名称" />
        </el-form-item>
  
        <el-form-item label="楼宇层数" prop="floors">
          <el-input v-model="ruleForm.floors" placeholder="请输入楼宇层数" />
        </el-form-item>
  
        <el-form-item label="在管面积" prop="area">
          <el-input
            v-model="ruleForm.area"
            style="max-width: 600px"
            placeholder="请输入在管面积"
          >
            <template #append>平方米</template>
          </el-input>
        </el-form-item>
  
        <el-form-item label="物业费" prop="propertyFeePrice">
          <el-input
            v-model="ruleForm.propertyFeePrice"
            style="max-width: 600px"
            placeholder="请输入物业费"
          >
            <template #append>元/m²</template>
          </el-input>
        </el-form-item>
  
        <el-form-item style="float: right">
          <el-button type="primary" @click="submitForm(ruleFormRef)">确认</el-button>
  
          <el-button @click="dialogFormVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog> -->
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import { buildingApi, AddApi } from "@/api/test";
import type { FormInstance, FormRules } from "element-plus";
import BildingDialog from "./components/BildingDialog.vue";
import * as util from "@/utils/util";
//
// let title = ref<string>("添加楼宇");
//控制模态框显隐元素
// const dialogFormVisible = ref<boolean>(false);

// export type EmptyObject = {
//   /**
//    * 在管面积
//    */
//   area: number;
//   /**
//    * 层数
//    */
//   floors: number;
//   /**
//    * 楼宇名称
//    */
//   name: string;
//   /**
//    * 物业费单价
//    */
//   propertyFeePrice: number;
// };
//添加模态框的数据源
const state = reactive({
  commonTableKey: util.guid(),
  data: [
    {
      area: 99,
      floors: 20,
      id: 28,
      name: "99",
      propertyFeePrice: 999,
      status: 0,
    },
  ],
  page: {
    pageIndex: 1,
    pageSize: 10,
    totalPage: 0,
    totalRecord: 0,
  },
});
let userch = ref({
  name: "",
  page: "1",
  pageSize: "10",
});
//请求表格数据方法
const builist = () => {
  buildingApi(userch.value).then((res) => {
    console.log("111", res);
    total.value = res.data.total;
    //    state.data = res.data.rows;
  });
};
builist();
const jumperChangeHandle = (val: number) => {
  console.log(`jumper page: ${val}`);
};
const selectionChangeHandle = (val: any[]) => {
  console.log(`selection-change`, val);
};
//添加的非空校验
// const rules = reactive<FormRules<EmptyObject>>({
//   name: [{ required: true, message: "请输入楼宇名称", trigger: "blur" }],
//   floors: [{ required: true, message: "请输入层数", trigger: "blur" }],
//   area: [{ required: true, message: "请输入建筑面积", trigger: "blur" }],
//   propertyFeePrice: [{ required: true, message: "请输入物业费", trigger: "blur" }],
// });

//校验元素
// const ruleFormRef = ref();

// //添加的方法
// const submitForm = async (formEl: FormInstance | undefined) => {
//   if (!formEl) return;
//   await formEl.validate((valid: any, fields: any) => {
//     if (valid) {
//       AddApi(ruleForm.value).then((res) => {
//         console.log(res);
//       });
//       dialogFormVisible.value = false;
//       builist();
//       console.log("submit!");
//     } else {
//       console.log("error submit!", fields);
//     }
//   });
// };
const dialogRef = ref<InstanceType<typeof BildingDialog>>();
const addBilding = () => {
  dialogRef.value?.openDialog();
};
//分页器部件二
const sizeChangeHandle = (val: string) => {
  //   userch.value.pageSize = val;
  //   builist();
};
//分页器部件二
const currentChangeHandle = (val: string) => {
  //   userch.value.page = val;
  //   builist();
};

//分页器总数
const total = ref<number>();

//请求列表参数

const tableData = ref([]);
</script>
<style scoped>
.boss {
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
}
</style>
