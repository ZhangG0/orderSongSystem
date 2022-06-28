<template>
  <div class="background_div flexCenter">
    <div class="Text">欢迎注册点歌系统</div>
    <el-form class="registerForm" size="default" :model="form" :rules="rules" ref="form">

      <el-form-item  prop="phone">
        <el-input placeholder="请输入手机号" prefix-icon="Phone" v-model="form.phone" minlength="11" maxlength="11" clearable autofocus/>
      </el-form-item>

      <el-form-item prop="username">
        <el-input placeholder="请输入用户名" prefix-icon="UserFilled" v-model="form.username" maxlength="20" clearable/>
      </el-form-item>

      <el-form-item prop="password">
        <el-input placeholder="请输入密码" prefix-icon="Lock" v-model="form.password" minlength="6" maxlength="20" show-password/>
      </el-form-item>

      <el-form-item prop="confirm">
        <el-input placeholder="请确认密码" prefix-icon="Lock" v-model="form.confirm" show-password/>
      </el-form-item>

      <el-form-item prop="major">
        <el-cascader  placeholder="选择学院专业" :options="options" v-model="form.major" :show-all-levels="false" filterable />
      </el-form-item>

      <el-form-item>
        <el-button size="large" type="primary" @click="Register">注 &nbsp;&nbsp; 册</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import singRequest from "@/utils/singRequest";
import {reactive} from "vue";

export default {
  name: "UserRegister",
  data(){
    let validatePass = (rule, value, callback) => {
      if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return{
      form:{},
      rules:reactive({
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
        username: [
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
      }),
      options:[
        {
          value:'智能医学学院',
          label:'智能医学学院',
          children:[
            // {
            //   value:'医学信息工程',
            //   label:'医学信息工程',
            // }
          ]
        },
        {
          value:'基础医学院',
          label:'基础医学院',
          children:[

          ]
        },
        {
          value:'临床医学院',
          label:'临床医学院',
          children:[]
        },
        {
          value:'药学院',
          label:'药学院',
          children:[]
        },
        {
          value:'针灸推拿学院',
          label:'针灸推拿学院',
          children:[]
        },
        {
          value:'眼科学院',
          label:'眼科学院',
          children:[]
        },
        {
          value:'HPRC',
          label:'养生康复学院',
          children:[]
        },
        {
          value:'民族医药学院',
          label:'民族医药学院',
          children:[]
        },
        {
          value:'医学与生命科学学院',
          label:'医学与生命科学学院',
          children:[]
        },
        {
          value:'公共卫生学院',
          label:'公共卫生学院',
          children:[]
        },
        {
          value:'医学技术学院',
          label:'医学技术学院',
          children:[]
        },
        {
          value:'护理学院',
          label:'护理学院',
          children:[]
        },
        {
          value:'管理学院',
          label:'管理学院',
          children:[]
        },
        {
          value:'马克思主义学院',
          label:'马克思主义学院',
          children:[]
        },
        {
          value:'体育健康学院',
          label:'体育健康学院',
          children:[]
        },
        {
          value:'外语学院',
          label:'外语学院',
          children:[]
        },
        {
          value:'国学院',
          label:'国学院',
          children:[]
        },
        {
          value:'国际教育学院',
          label:'国际教育学院',
          children:[]
        },
        {
          value:'其他',
          label:'其他',
          children:[]
        },

      ],
    }
  },
  methods:{
    Register() {
      //将级联选择器中选出的array变成string给后端
      this.form.major=this.form.major[0]

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
              singRequest.post("user/register",this.form).then(res =>{

                console.log(res)
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

.background_div{
  background-color: #313134;
  height: 97.8vh;
}

.registerForm {
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

<style>
.el-input, .el-button, .el-cascader {
  width: 75vw;
  /* margin-top: 10%; */

}

@media screen and (min-width: 1000px) {
  .el-input, .el-button,.el-cascader {
    width: 50vw;


  }
}

@media screen and (min-width: 1600px) {
  .el-input, .el-button, .el-cascader {
    width: 30vw;


  }
}
</style>