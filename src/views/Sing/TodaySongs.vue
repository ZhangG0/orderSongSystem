<template>
<div class="background_div flexCenter">
  <div>
    <header class=" border-box flexCenter SingerListDiv header">
      <span>今日歌单</span>
    </header>
  </div>

  <sing-cell-group
      group-title="AM"
      text-center
  >
    <sing-cell
        left-main="说好的幸福呢"
        left-sub="周杰伦"
        right-main="江子麟"
    ></sing-cell>

    <Sing-cell
        left-main="说好的幸福呢"
        left-sub="周杰伦"
        right-main="江子麟"
    ></Sing-cell>

    <Sing-cell
        left-main="说好的幸福呢"
        left-sub="周杰伦"
        right-main="江子麟"
    ></Sing-cell>
  </sing-cell-group>

  <sing-cell-group
      group-title="PM"
      text-center
  >
    <sing-cell
        left-main="说好的幸福呢"
        left-sub="周杰伦"
        right-main="江子麟"
    ></sing-cell>

    <Sing-cell
        left-main="说好的幸福呢"
        left-sub="周杰伦"
        right-main="江子麟"
    ></Sing-cell>

    <Sing-cell
        left-main="说好的幸福呢"
        left-sub="周杰伦"
        right-main="江子麟"
    ></Sing-cell>
  </sing-cell-group>
<!--  <header class="flexItem">-->
<!--    <span>今 日 歌 单</span><br>-->
<!--    <span v-text="runningTime"></span>-->

<!--  </header>-->
<!--  <nut-table-->
<!--      class="flexItem"-->
<!--      :columns="columns"-->
<!--      :data="data"-->
<!--      striped>-->
<!--    <template #nodata>-->
<!--      <div class="no-data"> 今日暂无驻唱~~~</div>-->
<!--    </template>-->
<!--  </nut-table>-->
<!--  <footer class="flexItem flexCenter">-->
<!--    <div>我要听我爱的歌！</div>-->
<!--  </footer>-->

</div>

</template>

<script>
import SingCell from "@/components/Sing/SingCell.vue";
import SingCellGroup from "@/components/Sing/SingCellGroup.vue";

  export default {
    name:"TodaySongs",
    components: {SingCell, SingCellGroup},
    data(){
      return{
        runningTime:"",
        columns:[
          {
            title:"歌名",
            key:"SongName",
            sorter:true,
            align:"center"
          },
          {
            title:"原唱歌手",
            key:"OGSinger",
            align:"center"
          },
          {
            title:"演唱歌手",
            key:"TDSinger",
            align:"center"
          }
        ],
        data:[
          {
            SongName:"还是爱你的啊啊",
            OGSinger:"纠结伦",
            TDSinger:"江子麟"
          },
        ],
      }
    },
    created() {
        let time = new Date();
        this.runningTime = time.getFullYear() + "-" + (time.getMonth()+1) + "-" + time.getDate();
    },
    methods:{

    }
  }

</script>

<style lang="scss" scoped>

  .background_div{
    color: #000001;
  }
  header{
    margin-top: 1.6vh;
    padding: 1vh;
    text-align: center;
    height: 8.5vh;
  }
  header>span:first-child{
    font-family: cursive;
    font-size: x-large;
    font-weight: bolder;
  }
  .flexItem{
    font-size: medium;
    width: 94vw;
    background-color: #e6e6e6;
    opacity: 96%;
    border: 2px solid #313134;
    box-shadow: 3px 3px 10px black;
    padding-bottom: 10px;
  }
  @media screen and (min-width: 900px){
    .flexItem{
      width: 70vw;


    }
  }

  @media screen and (min-width: 1500px){
    .flexItem{
      width: 60vw;


    }
  }
  footer{
    font-family: cursive;
    font-weight: bolder;
    padding: 1vh;
    align-items: center;
    justify-content: center;
    height: 3.5vh;
    margin-bottom: 4vh;
  }

  .header {
    justify-content: center;
    color: #000001;
    background-color: white;
    border-radius: 20px;

    span {
      font-size: larger;
      font-weight: bolder;
      font-family: cursive;
    }
  }

  .border-box {
    margin: 1vh 0 0 0;
    height: 70px;
    border: 3px solid transparent;
    border-radius: 20px;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(to right, #ffffff, #ffffff), linear-gradient(900deg, #d4432f, #c5b48c);
  }

</style>
