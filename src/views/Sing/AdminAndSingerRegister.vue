<template>
  <div class="background_div flexCenter">
    <div class="Text">歌手注册</div>
    <el-form class="registerForm" size="default" :model="form" :rules="rules" ref="form">

      <el-form-item  prop="phone">
        <el-input placeholder="请输入手机号" prefix-icon="Phone" v-model="form.phone" minlength="11" maxlength="11" clearable autofocus/>
      </el-form-item>

      <el-form-item prop="singerName">
        <el-input placeholder="请输入歌手名" prefix-icon="UserFilled" v-model="form.singerName" maxlength="20" clearable/>
      </el-form-item>

      <el-form-item prop="password">
        <el-input placeholder="请输入密码" prefix-icon="Lock" v-model="form.password" minlength="6" maxlength="20" show-password/>
      </el-form-item>

      <el-form-item prop="confirm">
        <el-input placeholder="请确认密码" prefix-icon="Lock" v-model="form.confirm" show-password/>
      </el-form-item>

      <el-form-item prop="singerInviteCode">
        <el-input placeholder="请输入歌手邀请码" v-model="form.singerInviteCode" prefix-icon="Mic" clearable/>
      </el-form-item>

      <el-form-item>
        <el-button size="large" type="primary" @click="Register">注 &nbsp;&nbsp; 册</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import {reactive} from "vue";
import singRequest from "@/utils/singRequest";

export default {
  name: "AdminAndSingerRegister",
  data() {
    let validatePass = (rule, value, callback) => {
      if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      form: {},

      rules: reactive({
        phone: [
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
        singerName: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur',
          },
          {
            min: 1,
            max: 20,
            pattern:/^[^ ]+$/,
            message: '不能包含空格！',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 20,
            pattern:/^[^ ]+$/,
            message: '不能包含空格！',
            trigger: 'blur',
          },
          {
            pattern:/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,20}$/,
            message: '请输入6-20位包含英文字母、数字或者符号中两种',
            trigger: 'blur'
          },

        ],
        confirm: [
          {
            required: true,
            message: '请确认密码',
            trigger: 'blur',
          },
          {
            message: '两次密码不一致',
            trigger: 'blur',
            validator:validatePass
          }
        ],
        singerInviteCode: [
          {
            required: true,
            message: '歌手邀请码是必填字段，若无邀请码请联系队长',
            trigger: 'blur'
          },
          {
            min:6,
            max:6,
            pattern:/^[A-Za-z0-9]+$/,
            message: '错误的邀请码',
            trigger: 'blur'
          }
        ],
      })

    }
  },
  methods: {
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
              singRequest.post("singer/register",this.form).then(res =>{
                console.log(res);
                if (res.status === 200){
                  this.$message({
                    type:"success",
                    message:"歌手注册成功",
                    center: true,
                    duration:1000
                  })
                  sessionStorage.setItem("phone",this.form.phone)
                  console.log(sessionStorage.getItem("phone"))
                  this.$router.push("/singHome/ManagementSystemLogin")
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
.background_div {
  background-color: #313134;
  width: 100vw;
  height: 45vh;

}

.Text {
  color: white;
  font-size: 2rem;
  text-align: center;
  font-family: cursive;
  margin-top: 10vh;
}

.registerForm {
  margin: 5vh auto;
  width: 80vw;

}

.el-input, .el-button {
  width: 75vw;
  /* margin-top: 10%; */

}

@media screen and (min-width: 1000px) {
  .el-input, .el-button {
    width: 50vw;


  }
}

@media screen and (min-width: 1600px) {
  .el-input, .el-button {
    width: 30vw;


  }
}
</style>