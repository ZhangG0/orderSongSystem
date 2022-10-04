<template>
<!--一种类似于表格的左右数据展示组件-->
  <div
      class="background_div SingerListDiv container">
    <div class="item" v-for="(item,index) in singerData">
      <div class="leftItem">
        <span style="font-size: large">《{{item.songName}}》<br/></span>
        <span>&nbsp;&nbsp;&nbsp;{{item.ogSinger}}</span>
      </div>

      <div class="rightItem">
      <slot name="right">
        <span>
          <span class="text" @click="this.$router.push('/singHome/OrderSong')">我要点歌</span>
          <span class="iconfont text" @click="this.$router.push('/singHome/OrderSong')" >&#xe70d;</span>
        </span>
          <br>
          <span v-if="item.singer">
          <span class="text" @click="showDialog(index)">驻唱歌手一览</span>
          <span class="iconfont text">&#xe636;</span>
        </span>
      </slot>
      </div>


    </div>

    <el-dialog
        v-model="dialogShow"
        v-bind="dialogIndex"
        title="可演唱歌手"
    >
      <span>{{ singerData[dialogIndex].singer }}</span>
    </el-dialog>

  </div>
</template>

<script>
import "@/static/css/commonResponse.scss"
export default {
  name: "SingList",
  props:{
    singerData:{
      songName:{
        type: String,
        default:""
      },
      ogSinger:{
        type: String,
        default:""
      },
      singer:{
        type: String,
        default:""
      },
    },
    page:{
      type:Number,
      default:0,
    }
  },
  data(){
    return{
      dialogShow:false,
      dialogIndex:0,

    }
  },
  beforeCreate() {
    // this.dialogShow = new Array(this.singerData.length).fill(false) ;

  },
  methods:{
    showDialog(index){
      this.dialogShow = true;
      this.dialogIndex = index;
    }
  }


}
</script>

<style lang="scss" scoped>
  .container{
    color: black;
    padding: 10px;
    margin: 10px;
    background: #fdfdfe;
    border-radius: 10px;
  }
  .item{
    width: 100%;
    padding: 10px;
    border-bottom: 1px dotted lightgray;
    .leftItem{
      text-align: left;
      display: inline-block;
      width: 50%;
    }
    .rightItem{
      text-align: right;
      display: inline-block;
      width: 50%;
    }

    .text{
      font-size: small;
    }

    .text:hover{
      color: #d4432f;
      cursor: pointer;
    }
  }

</style>
