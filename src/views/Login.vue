
<template>

  <div style="width: 100%;height: 100vh;background-color: #313134;overflow: hidden">
    <div style="width: 400px; margin: 150px auto">
      <div style="color: white;font-size: 30px;text-align: center;">
        <el-image style="width: 200px; height: 200px; text-align: center; margin-top: -120px" :src="require('../assets/img/sbygLogo.png')" alt="势必医馆" fit="contain" />
      </div>
      <div style="color: white;font-size: 30px;text-align: center;padding: 10px 0 30px 0">欢迎 &nbsp;<strong>势必医馆</strong> &nbsp;登录</div>

      <el-form :model="form" size="default"  :rules="rules" ref="form">

        <el-form-item prop="username">
          <el-input placeholder="请输入用户名"  prefix-icon="UserFilled" v-model="form.username" />
        </el-form-item>

        <el-form-item prop="password">
          <el-input placeholder="请输入密码"  prefix-icon="Lock" v-model="form.password" show-password />
        </el-form-item>

        <el-form-item >
          <el-button style="width: 100%;color: white;font-weight: bold;font-size: 15px" type="primary" @click="login">登  &nbsp;&nbsp; 录</el-button>
        </el-form-item>
        <el-form-item >
          <el-button style="width: 100%;color: white;font-weight: bold;font-size: 14px; background-color: #409EFF " type="primary"  @click="toRegister">注  &nbsp;&nbsp; 册</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script >


import request from "@/utils/request";
import {reactive} from "vue";


export default {
  name: "Login",
  data() {
    return {
      form:{},
      rules : reactive({
        username: [
          {
            required: true,
            message: '用户名不能为空！',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: '密码不能为空！',
            trigger: 'blur',
          },
        ],
      }),

    }
  },

  components:{

  },

  created() {
    sessionStorage.removeItem("user")
  },

  methods:{
    login(){
            this.$refs.form.validate((valid) => {
            if (valid){
              // 请求后台数据
              request.post("/user/login",this.form).then(res =>{
                if (res.code === '0'){
                  this.$message({
                    type:"success",
                    message:"登录成功",
                  })
                  sessionStorage.setItem("user",JSON.stringify(res.data))
                  this.$router.push("/user")  // 页面跳转

                }else {
                  this.$message({
                    type:"error",
                    message:"登录失败 "+res.msg
                  })
                }
              })
            }
             })

    },
    toRegister() {
      this.$router.push('/register')
    },

  }

}
</script>