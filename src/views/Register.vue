
<template>
  <div style="width: 100%;height: 100vh;background-color: #313134;overflow: hidden">
    <div style="width: 400px; margin: 150px auto">
      <div style="color: white;font-size: 30px;text-align: center;padding: 10px 0 30px 0">请注册</div>

      <el-form :model="form" size="default"  :rules="rules" ref="form">
        <el-form-item prop="username">
          <el-input placeholder="请输入用户名(登录账号)" prefix-icon="UserFilled" v-model="form.username" clearable />
        </el-form-item>

        <el-form-item prop="nickname">
          <el-input placeholder="请输入昵称" prefix-icon="User" v-model="form.nickName"   />
        </el-form-item>

        <el-form-item prop="password">
          <el-input placeholder="请输入密码" type="password"  prefix-icon="Lock" v-model="form.password"  show-password />
        </el-form-item>

        <el-form-item prop="confirm">
          <el-input placeholder="请再次确认密码"  prefix-icon="Lock" v-model="form.confirm"  show-password />
        </el-form-item>

        <el-form-item >
          <el-button style="width: 100%;color: white;font-weight: bold;font-size: 15px" type="primary" @click="register">注&nbsp;&nbsp;册</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
import request from "@/utils/request";
import {reactive} from "vue";

export default {
  name: "Register",
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
        nickname:[
          {
            required: true,
            message: '用户名昵称不能为空！',
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
        confirm: [
          {
            required: true,
            message: '请确认密码！',
            trigger: 'blur',
          },
        ],
      })

    }
  },
  components:{

  },
  methods:{
    register(){
      // 密码校验
      if (this.form.password !== this.form.confirm){
        this.$message({
          type:"error",
          message:"两次密码不一致",
        })
        return
      }

      this.$refs.form.validate((valid) => {
        if (valid){
          // 请求后台数据
          request.post("/user/register",this.form).then(res =>{
            if (res.code === '0'){
              this.$message({
                type:"success",
                message:"注册成功",
              })
              this.$router.push("/login")  // 页面跳转到登录界面

            }else {
              this.$message({
                type:"error",
                message:"注册失败"+res.msg
              })
            }
          })
        }})
    }
  },

}
</script>