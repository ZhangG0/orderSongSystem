<template>

  <div>
    <SingHeader v-if="update" ref="signIn"></SingHeader>
    <SingBackground></SingBackground>
<!--    score-change自定义事件 内部组件使用this.$emit('score-change')调用-->
    <router-view @score-change="reload"></router-view>
  </div>

</template>

<script>
import SingBackground from "@/components/Sing/SingBackground"
import SingHeader from "@/components/Sing/SingHeader";

export default {
  name: "singLayout",
  components: {
    SingHeader, 
    SingBackground
    },
  data() {
    return {
      update: true
    }
  },
  methods: {
    reload() {
      // 移除组件
      this.update = false
      // 在组件移除后，重新渲染组件
      // this.$nextTick可实现在DOM 状态更新后，执行传入的方法。
      this.$nextTick(() => {
        this.update = true
      })
    }
  }
}
</script>

<style scoped>

</style>