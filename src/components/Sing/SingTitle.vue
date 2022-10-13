<template>

  <div class=" border-box flexCenter SingerListDiv header">
    <span v-text="text"></span>
    <span v-text="subText" :class="{subColorGray}"/>
  </div>

</template>

<script>
export default {
  name: "SingTitle"
}
</script>

<script setup>
const props = defineProps({
  text: String,
  subText: String,
  subColorGray: Boolean
})
</script>

<style lang="scss" scoped>
.header {
  justify-content: center;
  color: #000001;
  background-color: white;
  border-radius: 20px;

  span {
    font-size: larger;
    font-weight: bolder;
    font-family: cursive;

    &:last-child {
      font-size: x-small;
      font-family: "Microsoft YaHei", serif;
      font-weight: normal;
    }
  }
}

.border-box {
  margin: 1vh;
  height: 70px;
  border: 3px solid transparent;
  border-radius: 20px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(to right, #ffffff, #ffffff), linear-gradient(900deg, #d4432f, #c5b48c);
}

.subColorGray {
  color: #909399FF;
}
</style>
