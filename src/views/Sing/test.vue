<template>
  <SingLayout>

    <div class="flexCenter">
      <el-divider>SingTitle组件Demo</el-divider>
      <SingTitle
          text="标题"
          sub-text="小标题"
          sub-color-gray
      ></SingTitle>


      <el-divider>SingDialog组件Demo</el-divider>
      <SingCell
          left-main="点击打开Dialog"
          @click="dialogVisible = true"
      >
      </SingCell>
      <SingDialog
          title="感谢您的赞助"
          no-cancel-btn
          :visible="dialogVisible"
          @close="() => {this.dialogVisible = false;this.$message.success('感谢您的赞助')}"
      >
        <div>
          <span
              style="text-align: left">开发团队均为爱发电，无任何报酬来维护开发此系统。如果您有意赞助我们我们将万分感激</span><br>
          <span>(长按图片保存微信二维码)</span><br>
          <img style="height: 100px;width: 100px; border: 1px solid lightgray"
               :src="require('../../assets/img/wxcode.jpg')" alt="赞助收款码">
        </div>
      </SingDialog>

      <el-divider>SingCell&SingCellGroup组件demo</el-divider>
      <sing-cell-group
          group-title="AM"
          text-center
      >
        <Sing-cell
            left-main="说好的幸福呢"
            left-sub="周杰伦"
            right-main="江子麟"
        ></Sing-cell>

        <Sing-cell
            left-main="说好的幸福呢"
            left-sub="周杰伦"
            right-main="江子麟"
        ></Sing-cell>

        <Sing-cell
            left-main="说好的幸福呢"
            left-sub="周杰伦"
            right-main="江子麟"
        ></Sing-cell>
      </sing-cell-group>

      <el-divider>PiniaDemo</el-divider>
      {{ test }}
      <button @click="login">TEST BUTTON</button>
      <button @click="testFun">TEST BUTTON2</button>
      <div>
        用户信息：<br/>
        name:{{ users.userData.username }}<br/>
        phone:{{ users.userData.phone }}<br/>
        <!--      id:{{userData.id}}<br/>-->
        <!--      role:{{userData.role}}-->
      </div>

    </div>
  </SingLayout>


</template>
<script setup>
import {mainStore} from '@/store/mainStore.js'
import {useUserStore} from "@/store/userStore.js";
import singRequest from "@/utils/singRequest.js";
import {storeToRefs} from "pinia";
import SingCell from "@/components/Sing/SingCell.vue";
import SingCellGroup from "@/components/Sing/SingCellGroup.vue";
import SingLayout from "@/layout/singLayout.vue";
import SingDialog from "@/components/Sing/SingDialog.vue";
import {ref} from "vue";
import SingTitle from "@/components/Sing/SingTitle.vue";

//SingDialog部分
let dialogVisible = ref(false);

//Pinia部分
const pinia = mainStore();
const users = useUserStore();
const {test} = storeToRefs(users);
const form = {};
const testFun = () => {
  users.$patch({test: "im changed!!!!"});
  console.log(users.getPhone);
}

const login = () => {
  singRequest.post("singer/login",form,{
    params:{
      phone:"15701959668",
      password:"a199972a"
    }
  }).then(res =>{
    if (res.status === 200){
      console.log(res.data);
      let userData = res.data;
      //歌手初始化（为了和用户保持一致，当后端技术库表重构后可以删除）
      //注册时间初始化
      let arr = userData.registerTime.split(' ');
      userData.registerTime = arr[0];
      //singerName => username 初始化
      userData.username = userData.singerName;
      //information => major 学院初始化
      userData.major = userData.information;
      //role初始化 歌手为1
      userData.role = 1;
      users.initUser(userData);
      //password实为token
      localStorage.setItem("token",userData.password);
      // sessionStorage.setItem("user",{role:1});
      console.log("---------------登陆成功----------------------------")
    }else {
      this.$message({
        type:'error',
        message:'登陆失败,'+res.msg,
        center: true,
        duration:1000
      })
    }
  })
}


</script>

<style>

</style>
