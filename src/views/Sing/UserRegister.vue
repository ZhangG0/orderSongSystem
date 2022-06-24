<template>
  <div class="background_div">
    <div class="Text">歌手注册</div>
    <el-form class="registerForm" size="default" :model="form" :rules="rules" ref="form">

      <el-form-item  prop="phone">
        <el-input placeholder="请输入手机号" prefix-icon="Phone" v-model="form.phone" minlength="11" maxlength="11" clearable autofocus/>
      </el-form-item>

      <el-form-item prop="userName">
        <el-input placeholder="请输入用户名" prefix-icon="UserFilled" v-model="form.userName" maxlength="20" clearable/>
      </el-form-item>

      <el-form-item prop="password">
        <el-input placeholder="请输入密码" prefix-icon="Lock" v-model="form.password" minlength="6" maxlength="20" show-password/>
      </el-form-item>

      <el-form-item prop="confirm">
        <el-input placeholder="请确认密码" prefix-icon="Lock" v-model="form.confirm" show-password/>
      </el-form-item>

      <el-form-item>
        <el-button size="large" type="primary" @click="Register">注 &nbsp;&nbsp; 册</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import singRequest from "@/utils/singRequest";

export default {
  name: "UserRegister",
  data(){
    return{
      form:{},
      rules:[
        {

        }
      ]
    }
  },
  methods:{
    Register() {
      if (this.form.password !== this.form.confirm){
        this.$message({
          type:"error",
          message:"两次密码不一致，请再次确认密码",
          center: true,
          duration:1000
        })
        return
      }

      this.$refs.form.validate((valid) => {
            if (valid){
              //请求后台数据
              singRequest.post("",this.form).then(res =>{
                if (res.status === 200){
                  this.$message({
                    type:"success",
                    message:"注册成功",
                    center: true,
                    duration:1000
                  })
                  sessionStorage.setItem("phone",this.form.phone)
                  console.log(sessionStorage.getItem("phone"))
                  this.$router.push("/singHome/Login")
                }else {
                  this.$message({
                    type:"error",
                    message:"注册失败,"+res.msg,
                    center: true,
                    duration:1000
                  })
                }
              })
            }
          }
      )
    }
  }
}
</script>

<style scoped>

</style>