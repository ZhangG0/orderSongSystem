<template>
  <div class="is-background">

    <mic class="MicBg"/>
    <div class="bgText">
      <span style="color:#ff1100;">M</span>
      <span style="color:#ff5101;">u</span>
      <span style="color:#ff8c00;">s</span>
      <span style="color:#ffc903;">i</span>
      <span style="color:#eaff01;">c&nbsp;</span>
      <span style="color:#66ff00;">i</span>
      <span style="color:#01ff12;">s&nbsp;</span>
      <span style="color:#00ff95;">M</span>
      <span style="color:#00ddff;">y&nbsp;</span>
      <span style="color:#0066ff;">L</span>
      <span style="color:#5d00ff;">i</span>
      <span style="color:#9e01ff;">f</span>
      <span style="color:#ff01f3;">e</span>

      <!-- Music is My Life -->
    </div>
    <headset class="MicBg"/>
  </div>
</template>

<script>
export default {
  name: "SingBackground",

}
</script>

<style scoped>
.MicBg {
  height: 48vh;
  color: white;
  width: 100%
}

.bgText {
  font-family: fantasy;
  /* background-color: #595959; */
  border: 2px solid white;
  border-left-color: transparent;
  border-right-color: transparent;
  padding: 2px;
}

.is-background {
  position: fixed;
  z-index: -100;
  text-align: center;
  width: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: #313134;
  /* overflow: scroll; */
  /* height: 100vh; */
}


</style>