<template>
<div class="background_div flexCenter">

  <div class="SingerListDiv" >
    <div class="ListHead">歌手列表</div>
    <el-descriptions

        v-for="singer in tableData"
        class="SingerList"
        :column="4">
      <el-descriptions-item class="SingerListFirst" width="33%" align="center">
        <br>
<!--        <el-image :src="require('../../assets/img/'+singer.singerImg+'')" fit="fill"></el-image>-->
      </el-descriptions-item>

      <el-descriptions-item width="33%" >
        <br>{{singer.singerName}}
<!--        <br>{{singer.information}}-->
      </el-descriptions-item>

<!--      <el-descriptions-item width="30%" label="歌手简介"> {{ singer.singerIntro }}</el-descriptions-item>-->


      <el-descriptions-item width="33%" align="center" >
<!--        <br>-->
        <span>
          演唱次数<br>{{ singer.mySing }}<br>
          入驻时间<br>{{ singer.registerTime }}
        </span>
      </el-descriptions-item>

    </el-descriptions>
    <div class="ListHead">↑ 返回顶部 ↑</div>



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
      tableData:[
        // {
        //   id:"1",
        //   singerImg:"board.png",
        //   singerName:"歌手",
        //   singerClass:"医学信息工程",
        //   singerIntro:"我热爱唱歌惹按十的撒离开就阿里山的加斯大家奥斯陆冬季埃里克森艰苦拉萨",
        //   singTime:"100",
        //   registerTime:"yyyy"
        // },
        // {
        //   id:"2",
        //   singerImg:"board.png",
        //   singerName:"歌手",
        //   singerClass:"医学信息工程",
        //   singerIntro:"我热爱唱歌",
        //   singTime:"100",
        //   registerTime:"yyyy"
        // },
        // {
        //   id:"3",
        //   singerImg:"board.png",
        //   singerName:"歌手",
        //   singerClass:"医学信息工程",
        //   singerIntro:"我热爱唱歌",
        //   singTime:"100",
        //   registerTime:"yyyy"
        // },
        // {
        //   id:"3",
        //   singerImg:"board.png",
        //   singerName:"歌手",
        //   singerClass:"医学信息工程",
        //   singerIntro:"我热爱唱歌",
        //   singTime:"100",
        //   registerTime:"yyyy"
        // },
        // {
        //   id:"3",
        //   singerImg:"board.png",
        //   singerName:"歌手",
        //   singerClass:"医学信息工程",
        //   singerIntro:"我热爱唱歌",
        //   singTime:"100",
        //   registerTime:"yyyy"
        // },
      ],
    }
  },
  created() {
      singRequest.get("/singer/find-all-singer").then(res =>{
        // console.log(res);
        this.tableData = res.data;
        for (let i = 0; i < this.tableData.length; i++) {
          let arr = this.tableData[i].registerTime.split(' ');
          this.tableData[i].registerTime = arr[0];
        }
      })
  },

}
</script>

<style scoped>

.SingerListDiv{
  font-size: 1vw;
  width: 85vw;
  margin: 5vh 7vw;
}

.SingerList{
  opacity: 96%;

}

.SingerListFirst{
  height: 20%;
}

.ListHead{
  text-align: center;
  font-size: medium;
  color: #03033b;
  font-family: cursive;
  font-weight: bold;
  background-color: #e6e6e6;

}
</style>