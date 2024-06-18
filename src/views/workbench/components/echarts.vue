<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="main" style="width: 100%; height: 350px"></div>
</template>
<script lang="ts" setup>
import * as echarts from "echarts";
import { onMounted, ref } from "vue";
import { useAuthStore } from "@/stores/auth";
const store = useAuthStore();
const echartsData = ref();
type EChartsOption = echarts.EChartsOption;
onMounted(() => {
  echartsData.value = store.numData.annualIncomeArray;
  console.log(echartsData.value, "aaaaaaaaaa");
  var chartDom = document.getElementById("main");
  var myChart = echarts.init(chartDom);
  var option: EChartsOption;

  var series = [
    {
      data: echartsData.value.ybuilding,
      type: "bar",
      stack: "a",
      name: "物业费",
      itemStyle:{
        color:'#5977fc'
      },
      barWidth: '40%'
    },
    {
      data: echartsData.value.yparking,
      type: "bar",
      stack: "a",
      name: "行车收入",
      itemStyle:{
        color:'#cde4ff'
      },
       barWidth: '40%'
    },
  ];
  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      
    },
    legend: {
      data: ["物业费", "行车收入"],
      left: "right",
    },
    xAxis: {
      type: "category",
      data: echartsData.value.xmonth,
    },
    yAxis: {
      type: "value",
    },
    series: series as any,
  };

  option && myChart.setOption(option);
});
</script>
<style lang="scss" scoped></style>
