<template>

  <div class="background_div flexCenter">
    <div class="Text">请登录点歌系统</div>
      <el-form class="loginForm"
               size="default"
               :model="form"
               :rules="rules"
               ref="form">

        <el-form-item  prop="phone">
          <el-input placeholder="请输入手机号" prefix-icon="UserFilled" v-model="form.phone" clearable/>
        </el-form-item>

        <el-form-item prop="password">
          <el-input placeholder="请输入密码"  prefix-icon="Lock" v-model="form.password" show-password />
        </el-form-item>

        <el-form-item >
          <el-button  type="primary" @click="login">登  &nbsp;&nbsp; 录</el-button>
        </el-form-item>
        <el-form-item >
          <el-button  type="primary"  @click="toRegister">注  &nbsp;&nbsp; 册</el-button>
        </el-form-item>

      </el-form>
  </div>

</template>

<script>

import singRequest from "@/utils/singRequest";
import {reactive} from "vue";
import "@/static/css/commonResponse.css"

export default {
  name: "UserLogin",
  data(){

    return{
      form:{},
      rules:reactive({
        phone:[
          {
            required: true,
            message: '手机号不能为空',
            trigger: 'blur'
          },
          {
            min: 11,
            max: 11,
            message: '请输入十一位手机号',
            trigger: 'blur',
          },
          {
            pattern: /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/,
            message: '请输入正确手机号',
            trigger: 'blur'
          },
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          },
          {
            pattern:/^(?!\d+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,20}$/,
            message: '请输入6-20位包含英文字母、数字或者符号中两种',
            trigger: 'blur'
          },
        ],

      }),
    }
  },
  methods:{
    login(){
      this.$refs.form.validate((valid) =>{
        if (valid){
          singRequest.post("user/login",this.form,{
            params:{
              phone:this.form.phone,
              password:this.form.password
            }
          }).then(res =>{
            if (res.status === 200){
              let userData = res.data;
              //注册时间初始化
              let arr = userData.registerTime.split(' ');
              userData.registerTime = arr[0];
              //初始化数字中间四位为 *
              userData.phone = userData.phone.replace(userData.phone.substring(3,7),"****");
              //role初始化 用户为0
              userData.role = 0;
              //数据写入session
              sessionStorage.setItem("user",JSON.stringify(userData));
              // window.location.replace("/singHome")
              this.$router.push("/singHome")
              this.$emit('score-change')
            }else {
              this.$message({
                type:'error',
                message:'登陆失败'+res.msg,
                center:true,
                duration:1000
              })
            }
          })
        }
      })
    },
    toRegister(){
      this.$router.push("/singHome/Register");
    }
  }
}
</script>

<style scoped>
.background_div{
  background-color: #313134;
  height: 97.8vh;
}

.loginForm {
  margin: 5vh auto;
  width: 90vw;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: flex-start;
}

.Text {
  color: white;
  font-size: 2rem;
  text-align: center;
  font-family: cursive;
  margin-top: 10vh;
}

</style>