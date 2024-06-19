<!--
 * @Author: 3396515303@qq.com 12267007+wangbing56@user.noreply.gitee.com
 * @Date: 2024-06-18 20:27:10
 * @LastEditors: 3396515303@qq.com 12267007+wangbing56@user.noreply.gitee.com
 * @LastEditTime: 2024-06-19 08:56:38
 * @FilePath: \Dark_horse\src\views\park\components\BildingDialog.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-dialog v-model="dialogFormVisible" title="添加楼宇" width="500">
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
  </el-dialog>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { buildingApi, AddApi } from "@/api/test";
const dialogFormVisible = ref(false);

export type EmptyObject = {
  /**
   * 在管面积
   */
  area: number;
  /**
   * 层数
   */
  floors: number;
  /**
   * 楼宇名称
   */
  name: string;
  /**
   * 物业费单价
   */
  propertyFeePrice: number;
};
//添加模态框的数据源
let ruleForm = ref({
  area: 0,
  floors: 0,
  name: "",
  propertyFeePrice: 0,
});
const rules = reactive<FormRules<EmptyObject>>({
  name: [{ required: true, message: "请输入楼宇名称", trigger: "blur" }],
  floors: [{ required: true, message: "请输入层数", trigger: "blur" }],
  area: [{ required: true, message: "请输入建筑面积", trigger: "blur" }],
  propertyFeePrice: [{ required: true, message: "请输入物业费", trigger: "blur" }],
});
const ruleFormRef = ref();

const openDialog=()=>{
    dialogFormVisible.value = true;
}
const closeDialog=()=>{
    dialogFormVisible.value = false;
}
defineExpose({
  openDialog,
  closeDialog
})
    
//添加的方法
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid: any, fields: any) => {
    if (valid) {
      AddApi(ruleForm.value).then((res) => {
        console.log(res);
      });
      dialogFormVisible.value = false;
    //   builist();
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>
