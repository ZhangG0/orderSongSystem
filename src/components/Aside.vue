<template>
<div>

    <el-menu
        style="width: 200px;min-height: calc(100vh - 50px)"
        :default-active="path"
        router
        class="el-menu-vertical-demo"

    >
      <el-sub-menu index="1">
        <template #title>
<!--          <el-icon><location /></el-icon>-->
          <span>Homie名录</span>
        </template>
          <el-menu-item index="/user"  >成员信息</el-menu-item>
      </el-sub-menu>

      <el-menu-item index="/book">活动通知</el-menu-item>

    </el-menu>

</div>
</template>


<script>
// import {Location,Menu as IconMenu,} from '@element-plus/icons-vue';

import request from "@/utils/request";

export default {
  name: "Aside",
  components:{
    // Location,
    // IconMenu
  },

  data(){
    return{
      user:{},
      path:this.$route.path,
    }
  },
  created() {
    let userStr = sessionStorage.getItem("user") || "{}"
    this.user = JSON.parse(userStr)

    // 请求服务器端 确认当前用户的合法信息
    request.get("/user/" + this.user.id).then(res =>{
      if (res.code === '0'){
        this.user = res.data
      }
    })
  },
}
</script>

<style scoped>

</style>