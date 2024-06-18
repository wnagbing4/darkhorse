<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="workbench_box">
    <div class="left_box">
      <parkAreaVue ></parkAreaVue>
    </div>
    <div class="right_box">
      <fast></fast>
    </div>
  </div>
  <div class="echarts_box">
    <div class="echarts">
      <echarts></echarts>
    </div>
    <div class="equipment">
      <equipment></equipment>
    </div>
  </div>
  <div class="table_box">
    <div class="tab_box">
      <Table></Table>
    </div>
   
  </div>
  </div>
</template>

<script lang="ts" setup>
// @ts-ignore
import parkAreaVue from "./components/parkArea.vue";
// @ts-ignore
import fast from "./components/fast.vue"
import echarts from "./components/echarts.vue"
import equipment from "./components/equipment.vue"
import Table from "./components/table.vue"
// @ts-ignore
import { getWorkbenchInfo } from "@/api/login/login";
// @ts-ignore
import { ApifoxModel } from "@/api/login/loginType";
// @ts-ignore
import { useAuthStore } from "@/stores/auth";
const store = useAuthStore();
const getWorkbenchInfoList = async () => {
  const res: ApifoxModel = await getWorkbenchInfo();
  console.log(res, "res====>>>");
  store.numData = res.data;
  console.log(store.numData);
};
getWorkbenchInfoList();
</script>

<style lang="scss">
@import url('./workbench.scss');
</style>
