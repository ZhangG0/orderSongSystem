<template>
  <header>

      <el-icon class="back" @click="back()"><ArrowLeftBold /></el-icon>




    <!--    已登录：跳转Home-->
    <!--    未登录：跳转用户登录-->
    <span @click="toSingHome">Music is My Life</span>





    <div v-show="userShow" class="user" @click="toPersonInfo">
<!--      {{ username }}-->
      <span>
        {{ username }}
     </span>
    </div>

  </header>



  <footer><span @click="toManagementSystem()">Mic is My Arms</span></footer>
</template>

<script>

import Header from "@/components/Header";
export default {
  name: "SingHeader",
  components: {Header},
  data(){
    return{
      username:"",
      userShow:true,
    }
  },
  created() {
    // sessionStorage.setItem("username","江子麟")
    if (!sessionStorage.getItem("user")){
      this.userShow=false;
    }else {
      this.username = JSON.parse(sessionStorage.getItem("user")).singerName;
      if (!this.username){
        this.username = JSON.parse(sessionStorage.getItem("user")).username;
      }
    }
  },
  methods:{
    toSingHome(){
      if (!sessionStorage.getItem("user")){
        this.$router.push('/singHome/Login')
      }else {
        this.$router.push('/singHome')
      }

    },
    toManagementSystem(){
      this.$router.push('/singHome/ManagementSystemLogin');
    },
    back(){
      this.$router.back();
    },
    toPersonInfo(){
      this.$router.push('/singHome/personInfo');
    }
  }
}
</script>

<style scoped>

header,footer{
  font-size: smaller;
  font-family: fantasy;
  line-height: 2.2vh;
  height: 2.5vh;
  width: 100%;
  color: white;
  background-color: #d5432f;
  text-align: center;
  z-index: 10;
  position: fixed;
}

footer{
  background-color: #c6b58d;
  left: 0;
  bottom: 0;
}

footer>span:hover,header>span:hover{
  color: #313134;
  cursor: pointer;
  /* font-weight: bold; */
}

.back{
  color: white;
  position: absolute;
  float: left;
  left: 0;
  height: 2.5vh;
  width: 4vh;
  background-color: #bb3221;
  border: #9b3123 solid 1px;
  cursor: pointer;
}

.user{
  font-family: cursive;
  font-size: 0.6rem;
  font-weight: bold;
  color: white;
  position: absolute;
  float: right;
  right: 0;
  height: 2.5vh;
  /*width: 8vw;*/
  padding:0 2vw;
  background-color: #bb3221;
  border: #9b3123 solid 1px;
  display: inline-block;
}



</style>