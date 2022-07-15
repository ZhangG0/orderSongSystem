<template>
<div class="background_div">
  
        <div :class="classObj">
          <div>
            <div class="Text">欢迎 <span style="font-weight:bolder;font-size:larger">歌手后台</span> 登录<br><small>Singers Home</small> 
            </div>
             <el-image class="img" :src="require('../../assets/img/board.png')" alt="告示木板" fit="contain" />
             
          </div>
          <el-form size="default" :model="form" :rules="rules" ref="form">
            
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

</div>
</template>

<script>
import {reactive} from "vue";
import singRequest from "@/utils/singRequest";

export default {
  name: "AdminAndSinger",
  data(){
    return{
      // class
      // isContainer:true, <div :class="{container:isContainer}"> 时生效
      classObj:{
        container:true,
      },
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
            pattern:/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,20}$/,
            message: '请输入6-20位包含英文字母、数字或者符号中两种',
            trigger: 'blur'
          },
        ],

      }),
    }
  },
  created() {
    this.form.phone = sessionStorage.getItem("phone") || "";
  },
  methods:{
    login(){
      this.$refs.form.validate((valid) =>{
        if(valid){
          singRequest.post("singer/login",this.form,{
            params:{
              phone:this.form.phone,
              password:this.form.password
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
              //初始化数字中间四位为 *
              userData.phone = userData.phone.replace(userData.phone.substring(3,7),"****");
              sessionStorage.setItem("user",JSON.stringify(userData));
              // sessionStorage.setItem("user",{role:1});
              this.$router.push("/singHome/SingerHome");
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

      })
    },
    toRegister(){
      this.$router.push('/singHome/ManagementSystemRegister');
    }
  }
}
</script>

<style scoped>
.background_div{
  width: 100%;
  text-align: center;
  overflow: hidden;
  z-index: 0;
}
.container{
  margin: 0 auto;
  width: 80vw;
  /* height: 80vh; */
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: flex-start;
  
}

.Text{
  position: relative;
  top: 15vh;
  color: white;
  font-family: cursive;
  font-weight: bold;
  font-size: larger;
  z-index: 1;
}

.img{
  transform: scaleX(1.8);
  height: 25vh;
}

.el-input,.el-button{
  width: 75vw;
  /* margin-top: 10%; */
  
}

@media screen and (min-width: 1000px){
  .el-input,.el-button{
  width: 50vw;
  
  
}
}

@media screen and (min-width: 1600px){
  .el-input,.el-button{
  width: 30vw;
  
  
}
}

</style>