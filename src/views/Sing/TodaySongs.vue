<template>
<div class="background_div flexCenter">
  <header class="flexItem">
    <span>今 日 歌 单</span><br>
    <span v-text="runningTime"></span>

  </header>
  <nut-table
      class="flexItem"
      :columns="columns"
      :data="data"
      striped>
    <template #nodata>
      <div class="no-data"> 今日暂无驻唱~~~ </div>
    </template>
  </nut-table>
  <footer class="flexItem flexCenter">
    <div>我要听我爱的歌！</div>
  </footer>

</div>

</template>

<script>
  export default {
    name:"TodaySongs",
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
          {
            SongName:"b说好的幸福呢",
            OGSinger:"纠结伦",
            TDSinger:"h江子麟"
          },
          {
            SongName:"e说好的幸福呢",
            OGSinger:"纠结伦",
            TDSinger:"g江子麟"
          },
          {
            SongName:"d说好的幸福呢",
            OGSinger:"纠结伦",
            TDSinger:"z江子麟"
          },
          {
            SongName:"f说好的幸福呢",
            OGSinger:"纠结伦",
            TDSinger:"x江子麟"
          },
          {
            SongName:"说好的幸福呢",
            OGSinger:"纠结伦",
            TDSinger:"w江子麟"
          },
          {
            SongName:"还是爱你的啊啊",
            OGSinger:"纠结伦",
            TDSinger:"江子麟"
          },
          {
            SongName:"b说好的幸福呢",
            OGSinger:"纠结伦",
            TDSinger:"h江子麟"
          },
          {
            SongName:"e说好的幸福呢",
            OGSinger:"纠结伦",
            TDSinger:"g江子麟"
          },
          {
            SongName:"d说好的幸福呢",
            OGSinger:"纠结伦",
            TDSinger:"z江子麟"
          },
          {
            SongName:"f说好的幸福呢",
            OGSinger:"纠结伦",
            TDSinger:"x江子麟"
          },
          {
            SongName:"说好的幸福呢",
            OGSinger:"纠结伦",
            TDSinger:"w江子麟"
          },
          {
            SongName:"还是爱你的啊啊",
            OGSinger:"纠结伦",
            TDSinger:"江子麟"
          },
          {
            SongName:"b说好的幸福呢",
            OGSinger:"纠结伦",
            TDSinger:"h江子麟"
          },
          {
            SongName:"e说好的幸福呢",
            OGSinger:"纠结伦",
            TDSinger:"g江子麟"
          },
          {
            SongName:"d说好的幸福呢",
            OGSinger:"纠结伦",
            TDSinger:"z江子麟"
          },
          {
            SongName:"f说好的幸福呢",
            OGSinger:"纠结伦",
            TDSinger:"x江子麟"
          },
          {
            SongName:"说好的幸福呢",
            OGSinger:"纠结伦",
            TDSinger:"w江子麟"
          },
          {
            SongName:"还是爱你的啊啊",
            OGSinger:"纠结伦",
            TDSinger:"江子麟"
          },
          {
            SongName:"b说好的幸福呢",
            OGSinger:"纠结伦",
            TDSinger:"h江子麟"
          },
          {
            SongName:"e说好的幸福呢",
            OGSinger:"纠结伦",
            TDSinger:"g江子麟"
          },
          {
            SongName:"d说好的幸福呢",
            OGSinger:"纠结伦",
            TDSinger:"z江子麟"
          },
          {
            SongName:"f说好的幸福呢",
            OGSinger:"纠结伦",
            TDSinger:"x江子麟"
          },
          {
            SongName:"说好的幸福呢",
            OGSinger:"纠结伦",
            TDSinger:"w江子麟"
          },
        ],
      }
    },
    created() {
      const today = () =>{
        const time = new Date();
        this.runningTime = time.getFullYear() + "-" + time.getMonth() + "-" + time.getDay();
      }
      setTimeout(today,1);
    },
    methods:{

    }
  }

</script>

<style scoped>
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

</style>