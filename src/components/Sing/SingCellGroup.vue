<template>
  <div class="sing-cell-group SingerListDiv">
    <div class="group-title" :class="{textCenter}">{{groupTitle}}</div>
    <slot >
<!--      原则上要SingCell-->
    </slot>
  </div>
</template>

<script setup>

const props = defineProps({
  groupTitle:String,
  textCenter:Boolean
})
</script>

<style lang="scss" scoped>
.textCenter{
  text-align: center;
}
.sing-cell-group{
  border: 1px solid lightgray;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.99);

  .group-title{
    padding: 5px;
    margin: 5px;
  }

  :slotted(.container){
    margin: 0;
    border: 0;
    border-bottom: lightgray 1px solid;
  }
  :slotted(.container:last-child){
    border: 0;
  }
}
</style>
