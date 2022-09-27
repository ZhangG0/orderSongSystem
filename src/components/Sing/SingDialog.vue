<!--SingDialog 封装了nutDialog以及elForm,elInput-->
<template>
  <div>
    <nut-dialog
        :title="title"
        v-model:visible="visible"
        :custom-class="`${isInputDialog} ?'inputDialog':''`"
    >

      <!--      content部分-->
      <slot name="content">

        <div
            v-if="isInputDialog"
        >
          <el-form :model="formData" :rules="rules" :ref="formRef">
            <el-form-item prop="firstLineLabel">
              <span class="dialogELInputLabel">{{ firstLineLabel }}</span>
              <el-input class="dialogELInput" :placeholder="fstPlaceholder" v-model="formData.firstLine" clearable></el-input>
            </el-form-item>
            <el-form-item s prop="secondLineLabel">
              <span class="dialogELInputLabel">{{ secondLineLabel }}</span>
              <el-input class="dialogELInput" :placeholder="scdPlaceholder" v-model="formData.secondLine" clearable></el-input>
            </el-form-item>
          </el-form>
        </div>

        <div v-else>
          <div style="line-height: 20px" >{{text}}</div>
        </div>

      </slot>

      <!--      foot部分-->
      <template #footer>
        <slot name="footer">
          <el-button
              round
              style="width: 42%;padding: 5px"
              @click="$emit('close')"
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
      required:true
    },
    /**
     * 1. 会对具有输入框的dialog做视觉优化(增加class)
     * 2. content部分变为两个输入框
     */
    isInputDialog:{
      type:Boolean,
      default:false
    },
    //content表单
    formData:{
      type:Object,
      default:{
        firstLine:"",
        secondLine:""
      }
    },
    formRules:{
      type:Object,
      default:{}
    },
    formRef:String,

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
  const temp = ref(props.formRules);
  const rules = reactive({temp});
</script>

<style scoped>

</style>
