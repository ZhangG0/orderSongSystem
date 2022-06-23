
<template>
<head style="height: 50px; line-height: 50px; border-bottom: 1px solid #ccc;display: flex">
  <el-image style="width: 100px; height: 100%; text-align: center; margin-left: 30px;" :src="url" fit="contain" />
  <div style="width: 200px;font-weight: bold;font-size: 20px;color: #409dfe;">势必医馆</div>

  <div style="flex: 1"></div>
  <div style="width: 100px">
    <el-dropdown>
    <span class="el-dropdown-link">
     <br> <div style="display: inline-block;cursor: pointer">{{ user.nickName }}</div>
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="$router.push('/person')">个人信息</el-dropdown-item>
          <el-dropdown-item @click="$router.push('/login')">退出登录</el-dropdown-item>
         </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>

</head>
</template>



<script>
import { ArrowDown } from '@element-plus/icons-vue';

const handleClick = () => {
  // eslint-disable-next-line no-alert
  alert('button click')
}

export default {
  name: "Header",
  props:['user'],
data() {
  return {
    user:{},
    url:require("../assets/img/sbygLogo.png")

  }
},
created() {
  let userStr = sessionStorage.getItem("user") || "{}"
  this.user = JSON.parse(userStr)

}
}
</script>


