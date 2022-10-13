<!--SingDialog 封装了nutDialog以及elForm,elInput-->
<template>
  <div>
    <nut-dialog
        :title="title"
        v-model:visible="visible"
    >

      <!--      content部分-->
      <slot>
        {{ text }}
      </slot>

      <!--      foot部分-->
      <template #footer>
        <slot name="footer">
          <el-button
              round
              style="width: 42%;padding: 5px"
              @click="visible = false"
              v-if="!noCancelBtn"
          >取消</el-button>
          <el-button round style="width: 42%;padding: 5px;color: white" color="#d5432f" @click="!noCancelBtn?clickFunc():$emit('close')">{{ okText }}</el-button>
        </slot>
      </template>


    </nut-dialog>
  </div>
</template>

<script>
export default {
  name: 'SingDialog',
  inheritAttrs: false, //禁止透传
}
</script>

<script setup>

import {reactive, ref} from "vue";

  const props = defineProps({
    title:{
      type:String,
      default:"通知"
    },
    visible:{
      type:Boolean,
      default:false,
    },
    //content文字
    text:String,
    //footer
    noCancelBtn:Boolean,
    okText:{
      type:String,
      default:"确定"
    },
    clickFunc:{
      type:Function,
      default:() => {
        console.log("IN DEFAULT ClickFunc")
      }
    }
  })
</script>

<style scoped>

</style>
