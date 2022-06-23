<template>
  <div style="width: 100%;min-height: 100vh;background-color: #313134;overflow: hidden">
    <div style="width: 320px; margin: 150px auto">
      <el-button type="primary" icon="Star" class="button" @click="toMyResume">简历</el-button>
      <el-button type="primary" icon="House" class="button" @click="toSBYGLogin" >势必医馆</el-button>
      <el-button type="primary" icon="Mic" class="button" @click="toSing"  >校声乐队点歌系统</el-button>
      <!-- <el-button type="primary" icon="Calendar" class="button" @click="toMyDateTest" disabled>测试课程--日期测试</el-button> -->
    </div>
	
	
	<footer style="text-align: center;" >
    <span>{{runningTime}}</span><br>
		<span>&copy;&nbsp;2022&nbsp;江子麟&nbsp;|&nbsp;</span>
		<span style="cursor: pointer;" @click="toBeian">蜀ICP备2022010654号</span>
	</footer>
  </div>
</template>

<script>
export default {
  name: "Home",
  
  data(){

	  return{
      runningTime:"",
	  };
  },
  created() {
    let timer = () =>{
      let startTime = new Date("2022-03-15T12:50:26");
      let nowTime = new Date();
      let time = nowTime-startTime;
      let day = Math.trunc(time/86400000);
      let hour = Math.trunc((time%86400000)/3600000);
      let min =Math.trunc(((time%86400000)%3600000)/60000);
      let s = Math.trunc((((time%86400000)%3600000)%60000)/1000);
      this.runningTime = "网站已成功运行:"+day+"天"+hour+"时"+min+"分"+s+"秒";
    }
    setInterval(timer,1000);

  },
  computed:{

  },
  methods:{
    toMyResume(){
      this.$router.push("/myResume");
    },
    toSBYGLogin(){
      this.$router.push("/login");
    },
    toSing(){
		this.$router.push("/singHome")
    },
    // toMyDateTest(){
    //   this.$router.push("/myDateTest")
    // },
	toBeian(){
		window.open("https://beian.miit.gov.cn/",'_blank')
	}
  }
}
</script>

<style scoped>
  .button{
    width: 100%;
    height: 35px;
    padding: 5px;
    margin-top: 15px;
    margin-left: 0;
  }
  .button a{
    text-decoration: none;
    color: white;
  }

  
  footer{
	  position: absolute;
	  text-align: center;
	  width: 100%;
	  color: white;
	  bottom: 0;
    left: 0;
	  text-decoration: none;
	  font-family: Arial, Helvetica, sans-serif;
	  font-size: 5%;
	  margin-bottom: 0.5%;
  }
</style>