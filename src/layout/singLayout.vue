<template>

  <div>
    <SingHeader></SingHeader>
    <SingBackground></SingBackground>
    <router-view></router-view>
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
    }
}
</script>

<style scoped>

</style>