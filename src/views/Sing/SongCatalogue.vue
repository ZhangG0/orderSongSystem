<template>
  <div class="background_div flexCenter">
    <div>
      <header class=" border-box flexCenter SingerListDiv header">
        <span>曲库大全</span>
      </header>
    </div>

    <SingList
        v-if="already"
        :singer-data="singerData"
    ></SingList>
  </div>
</template>

<script>
import '@/static/css/commonResponse.css';
import SingList from "@/components/Sing/SingList";
import singRequest from "@/utils/singRequest";

export default {
  name: "SongCatalogue",
  components: {SingList},
  data() {
    return {
      already:false,
      singerData: [],
    }
  },
  beforeCreate() {
    this.$emit('score-change');
    singRequest.get('/songCatalogue/getSongCatalogue').then(res => {
      this.singerData = res.data
      this.already = true
    }).catch(err => {
      this.$message.error("数据拉取异常");
      console.log(err)
    })
  },

}
</script>

<style lang="scss" scoped>
.background_div {
  opacity: 99%;
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
