<template>

  <div class="background_div_color flexCenter">
    <nut-image
    src="https://cdn.img.jzilong.com/%E9%9F%B3%E4%B9%90%E8%83%B6%E5%8D%B7%E6%9C%BA.png"/>

    <nut-cell style="width: 99vw;" title="当前版本" desc="BETA测试版"></nut-cell>
    <nut-cell-group style="width: 99vw;">
<!--      dialog-->
      <nut-cell title="Bug反馈"  ></nut-cell>
<!--      new page-->
      <nut-cell title="我要赞助"  ></nut-cell>
    </nut-cell-group>
<!--dialog-->
    <nut-cell-group style="width: 99vw;">
      <nut-cell title="关于产品"  ></nut-cell>
      <nut-cell title="开发者的话"  ></nut-cell>
    </nut-cell-group>

    <div class="developer">
      <span>Developed By 江子麟</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data(){
    return{

    }
  },
  created() {
    this.$emit('score-change')
  }
}
</script>

<style scoped>

.nut-image{
  margin: 1vh 0 6vh 0;
  -webkit-box-reflect: below -62px -webkit-linear-gradient(bottom, rgba(255,255,255,0.2) 0%, transparent 35%, transparent 100%);
  /*-webkit-box-reflect: below 10px -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(250, 250, 250, 0.2)),);*/
}

.developer{
  font-size: small;
  color: #8c939d;
  position: relative;
  text-align: center;
  margin: 10px 0;
}
</style>
