<template>
  <div>
    {{test}}
    666666666666666666666666666
  </div>

</template>
<script>
import {mainStore} from '@/store/mainStore.js'
const pinia = mainStore();
export default {
  name: "test",
  data(){
    return{
      test:pinia.msg
    }
  }

}

</script>

<style>

</style>
