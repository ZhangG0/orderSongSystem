<template>
  <el-container class="background_div_color">
    <el-header style="text-align: center;margin-top: 20px">
      <h1>开发者的话</h1>
    </el-header>
    <el-main>
      <p>
        同学你好，我是医信2019级的学长，你可以叫我江子麟，同时我是
        <strong>"校声乐队"</strong>的一名成员也是
        <strong>"势必医馆"</strong>的创始人。
      </p>
      <p>
        显而易见我对音乐有着极致的热枕。在校的这三年，很遗憾也是疫情的三年，对于热爱音乐以及舞蹈等表演的同学来说，在学校里失去了好多比赛和演出的机会连学校最大的活动“K歌炫舞大赛”(十佳歌手&舞林大会)也只在21年举办过一届，虽然本人当晚幸运夺冠，但是依旧也十分遗憾没有能连续几年的参加学校最大的活动包括我的社团，以及当时一起做音乐的小伙伴，也因为该死的疫情失去了很多宝贵的机会。
      </p>
      <p>
        在2022年初，通过声乐队内指导老师的牵线搭桥，声乐队获得了一个难得的机会，就是能够在食堂驻唱，同年九月食堂换了新的较为专业的设备，那么想必这个传统也能够延续。
      </p>
      <p>
        开发此系统的初衷是为了能够更加方便声乐队的学弟学妹们每天的歌曲收集等，也为了拉近声乐队与同学们的距离，人来疯是我们队的传统，我们也并不希望“高高在上”，只希望能够给同学们唱好听的歌曲，去唱同学们喜欢的歌曲。
      </p>
      <p>
        因为是个人开发维护，会因为产生服务器等经济成本以及个人时间成本等，我只能保证尽可能长期维护运营此项目，如果同学愿意有所<strong>"赞助"</strong>，我也相当乐意。如果有愿意一起维护系统的同学我也欢迎你的加入。如果同学在使用过程中遇到了BUG，个人开发在所难免请多多包涵并通过<strong>”Bug上报”</strong>模块联系上报给我，十分感谢大家的支持。
      </p>
      <p>感谢我同宿舍的龙哥(江子龙)【 我俩任何没问题,不为成中基带盐，艺名罢了:(
        】以及西华师范的Ysy同学对项目提供的代码协助</p>
      <p>
        <strong>最后，祝愿同学们能够热爱自己所热爱的一切人和事。</strong>
      </p>
    </el-main>
    <el-footer style="text-align: right">
      <div>
        <strong>RPZJ-江子麟</strong><br>
        于 2022 年 10 月 12 日 晚
      </div>

    </el-footer>
  </el-container>
</template>

<script setup>
const emit = defineEmits(['score-change'])
emit("score-change");
</script>

<style lang="scss" scoped>
p {
  text-indent: 2em;
}
</style>
