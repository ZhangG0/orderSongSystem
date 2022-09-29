<template>

  <div>
    <SingHeader v-if="update" ref="signIn"></SingHeader>
<!--    score-change自定义事件 内部组件使用this.$emit('score-change')调用-->
    <router-view
        @score-change="reload"
    ></router-view>
  </div>

</template>

<script>
import SingHeader from "@/components/Sing/SingHeader";

export default {
  name: "singNoBgLayout",
  components: {
    SingHeader,
    },
  data() {
    return {
      update: true,
      noBG: true
    }
  },
  methods: {
    reload(){
      // 移除组件
      this.update = false
      // 在组件移除后，重新渲染组件
      // this.$nextTick可实现在DOM 状态更新后，执行传入的方法。
      this.$nextTick(() => {
        this.update = true
      })
    },
  }
}
</script>

<style scoped>

</style>
