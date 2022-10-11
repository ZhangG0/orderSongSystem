<template>
  <div class="container" :class="{round}">
    <div class="left itemDiv">
      <span>{{leftMain}}</span>
      <span v-if="leftSub" class="leftSub"><br/> - {{leftSub}}</span>
    </div>

    <div class="right itemDiv">
      {{rightMain}}
    </div>

  </div>
</template>

<script setup>
import '@/static/css/commonResponse.scss'

const props = defineProps({
  leftMain:String,
  leftSub:String,
  rightMain:String,
  round:{
    type:Boolean,
    default:false
  }
})
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  padding: 10px;
  min-height: 60px;
  border: 1px solid lightgray;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.99);
}
.round{
  border-radius: 18px;
}
.left{
  max-width: 70%;
  font-size: 17px;
  margin-left: 5px;
}
.right{
  align-self: center;
  max-width: 28%;
}
.leftSub{
  color: var(--el-text-color-secondary);
  font-size: 14px;
  font-family: cursive;
}
.itemDiv{
  align-self: center;
  display: inline-block;
  margin-right: 5px;
}
</style>
