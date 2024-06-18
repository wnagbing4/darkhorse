<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="equipment_box">
        <div class="title_box">设备告警派单</div>
        <div class='img_box'>
            <img src="@/assets/images/5.png" alt="">
        </div>
        <div class="btn_box">
            <el-button type="primary">更多&emsp;<span>></span></el-button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.equipment_box{
    width: 100%;
    .title_box{
        width:100%;
        margin-top: 20px;
    }
    .img_box{
        width: 600px;
        height: 200px;
        // background: blue;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 200px;
            height: 200px;
            border-radius: 100%;
        }
    }
    .btn_box{
        width: 600px;
        margin-top: 30px;
        .el-button{
            width: 100%;
            border-radius: 30px;
            background: #4770ff;
            span{
                font-size: 20px;
            }
        }
    }
}
</style>