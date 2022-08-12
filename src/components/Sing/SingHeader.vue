<template>
  <header>

      <el-icon class="back" @click="back()"><ArrowLeftBold /></el-icon>
<!--    watch监听-->





    <!--    已登录：跳转Home-->
    <!--    未登录：跳转用户登录 Music is My Life-->
    <span @click="toSingHome">
      <span v-if="titleShow" class="myTitle">{{ title }}</span>
      <span v-else>Music is My Life</span>
    </span>





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
export default {
  name: "SingHeader",
  data(){
    return{
      username:"",
      userShow:true,
      titleShow:true,
      whiteTitle:["校声乐队点歌系统","今日歌单","曲库大全","歌手管理后台登录","i点歌---校声乐队点歌系统"],
      title:this.$route.meta.title,
    }
  },
  created() {
    // sessionStorage.setItem("username","江子麟")

    //判断是否登录，登录的是歌手还是用户
    if (!sessionStorage.getItem("user")){
      this.userShow=false;
    }else {
      this.username = JSON.parse(sessionStorage.getItem("user")).singerName;
      if (!this.username){
        this.username = JSON.parse(sessionStorage.getItem("user")).username;
      }
    }
    //判断是否需要显示title
    this.titleShow = !this.whiteTitle.includes(this.title);
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
      if (!sessionStorage.getItem("user") || !JSON.parse(sessionStorage.getItem("user")).singerName){
          this.$router.push('/singHome/ManagementSystemLogin');
        }else {
        this.$router.push('/singHome/singerHome');
      }


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

footer>span:hover,header>span>span:hover{
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

.myTitle{
  font-family: cursive;
  font-size: 0.6rem;
  font-weight: bold;
  height: 2.5vh;
  color: white;
  text-align: center;
  padding:0 2vw;
  display: inline-block;
  width: 35vw;
  position: absolute;
  /*float: left;*/
  left: 32.5vw;
  background-color: #bb3221;
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
  cursor: pointer;
}

header>.user:hover{
  background-color: #9b3123;
}



</style>
