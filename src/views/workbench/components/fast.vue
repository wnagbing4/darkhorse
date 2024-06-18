<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="fast_box">
    <div class="title">快捷入口</div>
    <div class="image_box">
      <div>
        <img src="@/assets/images/1.png" alt="" />
        <p>添加企业</p>
      </div>
      <div>
        <img src="@/assets/images/2.png" alt="" />
        <p>员工管理</p>
      </div>
      <div>
        <img src="@/assets/images/3.png" alt="" />
        <p>添加账号</p>
      </div>
      <div>
        <img src="@/assets/images/4.png" alt="" />
        <p>数据大屏</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.fast_box {
  width: 70%;
//   height: 100%;
  background: #fff;
  margin-left: 200px;
  .title {
    width: 100%;
    height: 10%;
    margin-left: 20px;
  }
  .image_box{
    width: 100%;
    height:90% ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
        width: 20%;
        height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img{
        width: 60px;
        height: 60px;
      }
    }
  }
}
</style>
