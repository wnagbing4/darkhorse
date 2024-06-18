<template>
  <div class="all_box">
    <div class="title">园区数据</div>
    <div class="bottom_box">
      <div class="first">
        <span style="color: #90a1c4">年度累计收费（元）</span>
        <h4>{{ store.numData.annualIncome }}</h4>
      </div>
      <div class="second">
        <span>年度累计收费（元）</span>
        <h4>{{ store.numData.chargePoleTotal }}</h4>
      </div>
      <div class="third">
        <span>年度累计收费（元）</span>
        <h4>{{ store.numData.enterpriseTotal }}</h4>
      </div>
      <div class="four">
        <span>年度累计收费（元）</span>
        <h4>{{ store.numData.monthCardTotal }}</h4>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";
const store = useAuthStore();
</script>
<style lang="scss" scoped>
.all_box {
  width: 120%;
  // height: 100%;
  background: #fff;
  .title {
    width: 100%;
    margin-left: 10px;
  }
  .bottom_box {
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-left: 10px;
    box-sizing: border-box;
    .first {
      width: 25%;
      height: 100%;
    }
    .second {
      width: 25%;
      height: 100%;
    }
    .third {
      width: 25%;
      height: 100%;
    }
    .four {
      width: 25%;
      height: 100%;
    }
  }
}
</style>
