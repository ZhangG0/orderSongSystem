<template>
  <SingLayout>
    <div class="flexCenter">
      {{test}}
      666666666666666666666666666
      <button @click="login">TEST BUTTON</button>
      <button @click="testFun">TEST BUTTON2</button>
      <div>
        用户信息：<br/>
        name:{{users.userData.username}}<br/>
        phone:{{users.userData.phone}}<br/>
        <!--      id:{{userData.id}}<br/>-->
        <!--      role:{{userData.role}}-->
      </div>

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
const pinia = mainStore();
const users = useUserStore();
const { test } = storeToRefs(users);
const form = {};
const testFun = ()=>{
  users.$patch({test:"im changed!!!!"});
  console.log(users.getPhone);
}

const login = ()=>{
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
