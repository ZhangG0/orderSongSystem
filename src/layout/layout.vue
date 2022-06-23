<template>
  <div>
    <!--    header 头部 HTML5 新标签-->
    <nav>
      <header><Header></Header></header>
    </nav>
    <!--body 主体部分-->
    <body style="display: flex">
    <!--  aside 侧边栏 HTML5 新标签-->
    <aside>
      <Aside></Aside>
    </aside>
    <router-view style="flex: 1"/>
    </body>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Aside from "@/components/Aside";

export default {
  name:"Layout",
  components:{
    Aside,
    Header
  }
}
</script>