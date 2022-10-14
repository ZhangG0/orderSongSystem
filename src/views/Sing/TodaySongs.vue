<template>
<div class="background_div flexCenter">
  <SingTitle
      :text="already?'今日歌单':'暂无今日演唱计划'"
      :sub-text="runningTime"></SingTitle>

  <div v-if="already">
    <sing-cell-group
        :group-title="todaySongsData.AM.length === 0?'上午暂无演唱计划':'AM'"
        text-center
    >
      <sing-cell
          v-for="item in todaySongsData.AM"
          :left-main="item.songName"
          :left-sub="item.ogSinger"
          :right-main="item.tdSinger"
      ></sing-cell>
    </sing-cell-group>

    <sing-cell-group
        :group-title="todaySongsData.PM.length === 0?'下午暂无演唱计划':'PM'"
        text-center
    >
      <sing-cell
          v-for="item in todaySongsData.PM"
          :left-main="item.songName"
          :left-sub="item.ogSinger"
          :right-main="item.tdSinger"
      ></sing-cell>
    </sing-cell-group>
  </div>

</div>

</template>

<script>
import SingCell from "@/components/Sing/SingCell.vue";
import SingCellGroup from "@/components/Sing/SingCellGroup.vue";
import dayjs from "dayjs";
import singRequest from "@/utils/singRequest.js";
import SingTitle from "@/components/Sing/SingTitle.vue";

export default {
  name: "TodaySongs",
  components: {SingCell, SingCellGroup, SingTitle},
  data() {
    return {
      runningTime: "",
      already: false,
      todaySongsData: {AM: [], PM: []}
    }
  },
  created() {
    this.runningTime = dayjs().format("YYYY-MM-DD")
    singRequest.get("/today/todayList").then(res => {
      if (res.status === 200) {
        this.todaySongsData = res.data
        if (res.data.AM.length + res.data.PM.length !== 0) {
          this.already = true;
        }

      } else {
        this.$message({
          type: 'error',
          duration: 1000,
          center: true,
          message: '系统异常,' + res.msg
        })
      }
    })
  },
}

</script>

<script setup>

</script>

<style lang="scss" scoped>

.background_div {
  opacity: 99%;
}

</style>
