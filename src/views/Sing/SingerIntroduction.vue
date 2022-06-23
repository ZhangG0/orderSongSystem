<template>
<div class="background_div flexCenter">

  <div class="SingerListDiv" >
    <span class="toTop" @click="toTop">⇪</span>
    <div class="ListHead">歌手列表</div>
    <el-descriptions

        v-for="singer in tableData"
        class="SingerList"
        :column="4">
      <el-descriptions-item class="SingerListFirst" width="33%" align="center">
        <br>
        <el-image :src="singer.avatarUrl" fit="contain" style="height: 10vh"></el-image>
      </el-descriptions-item>


      <el-descriptions-item width="33%" align="center" >
        <br>{{singer.singerName}}
        <br>{{singer.information}}
      </el-descriptions-item>

<!--      <el-descriptions-item width="30%" label="歌手简介"> {{ singer.singerIntro }}</el-descriptions-item>-->


      <el-descriptions-item width="33%" align="center" >
        <br>
        <span>
          演唱次数<br>{{ singer.mySing }}<br>
          入驻时间<br>{{ singer.registerTime }}
        </span>
      </el-descriptions-item>

    </el-descriptions>
    <div class="ListFont" @click="toTop">↑ 返回顶部 ↑</div>



  </div>
</div>

</template>
<!--实现思路
  将数组展示后点击，点击后获得其唯一的id或者歌手名字，进入同一页面，用歌手的各种东西进行渲染
-->
<script>

import singRequest from "@/utils/singRequest";

export default {
  name: "SingerIntroduction",
  data(){
    return{
      tableData:[],
    }
  },
  beforeCreate() {
    singRequest.get("/singer/find-all-singer").then(res =>{
      // console.log(res);
      this.tableData = res.data;
      for (let i = 0; i < this.tableData.length; i++) {
        let arr = this.tableData[i].registerTime.split(' ');
        this.tableData[i].registerTime = arr[0];
      }
    })
  },
  created() {
      // singRequest.get("/singer/find-all-singer").then(res =>{
      //   // console.log(res);
      //   this.tableData = res.data;
      //   for (let i = 0; i < this.tableData.length; i++) {
      //     let arr = this.tableData[i].registerTime.split(' ');
      //     this.tableData[i].registerTime = arr[0];
      //   }
      // })
  },
  methods:{
    toTop(){
      // 回到顶部，速度从快到慢
      let timer = setInterval(function () {
        let osTop =
            document.documentElement.scrollTop || document.body.scrollTop;
        let speed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
            osTop + speed;
        // this.isTop = true;
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 20);
    }
  }

}
</script>

<style scoped>

.SingerListDiv{
  font-size: 1vw;
  width: 85vw;
  margin-top: 3vh;
  margin-bottom: 5vh;
}

.SingerList{
  opacity: 96%;

}

.SingerListFirst{
  height: 20%;
}

.ListHead,.ListFont{
  text-align: center;
  font-size: medium;
  color: #03033b;
  font-family: cursive;
  font-weight: bold;
  background-color: #e6e6e6;

}
.ListFont{
  cursor: pointer;
}

.toTop{
  font-weight: bolder;
  cursor: pointer;
  border: #ffffff 2px solid;
  opacity: 0.9;
  position: fixed;
  bottom: 6vh;
  right: 1vw;
  height: 3vh;
  width: 3vh;
  text-align: center;
  border-radius: 80%;
}

.toTop:hover , .ListFont:hover{
  color: #c6b58d;
  border-color: #c6b58d;
}

@media screen and (min-width: 1000px) {
  .SingerListDiv{
    width: 70vw;
  }
}

@media screen and (min-width: 1600px) {
  .SingerListDiv{
    width: 50vw;
  }
}
</style>