<template>

  <div class="background_div_color flexCenter">
    <el-form
        v-loading.fullscreen.lock="loading.isLoading"
        class="form flexCenter"
        :model="formData"
        :rules="rules"
        ref="form"
        style="text-align: center"

    >
      <el-form-item prop="songs">
        <el-select
            v-model="formData.songs"
            multiple
            placeholder="选择歌曲"
            size="large"
        >
          <el-option
              v-for="(item, index) in songOptions"
              :label="item.songName"
              :value="index"
          >
            <span style="float: left">{{ item.songName }}</span>
            <span
                style="
                float: left;
                margin-left: 8px;
                color: var(--el-text-color-secondary);
                font-size: 12px;
              "
            >{{ item.ogSinger }}</span>

          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item prop="date">
        <el-select
            v-model="formData.date"
            placeholder="选择日期"
            size="large"
        >
          <el-option
              v-for="item in timeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          >
            <span style="float: left">{{ item.value }}</span>
            <span
                style="
          float: left;
          margin-left: 8px;
          color:#b2afaf;
        "
            >{{ item.label }}</span>

          </el-option>
        </el-select>


      </el-form-item>

      <el-form-item prop="time" >
        <el-radio-group v-model="formData.time" >
          <el-radio
              label="AM"
              size="large"
              class="formRadio"
              border>中午</el-radio>
          <el-radio
              label="PM"
              size="large"
              class="formRadio"
              border>下午</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button
          size="large"
          round
          color="#d5432f"
          style="color: white"
          @click="submitForm()"
        >预约演唱</el-button>

      </el-form-item>

      <el-form-item>
        <el-button
            size="large"
            round
            @click="$router.back()"
        >暂不预约</el-button>

      </el-form-item>


    </el-form>

  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import {initTime} from "@/utils/ZhangG0CommonUtils.js";
import '@/static/css/commonResponse.scss'
import {useUserStore} from "@/store/userStore.js";
import singRequest from "@/utils/singRequest.js";
import {ElMessage, ElMessageBox} from "element-plus";


const userInfoStore = useUserStore();
const formData = reactive({
  songs: [],
  date: "",
  time: "AM"
});
const form = ref(null);
const rules = reactive({
  songs: [
    {
      type: 'array',
      required: true,
      message: '请选择要演唱预约的歌曲',
      trigger: 'change',
    },
  ],
  date: [
    {
      required: true,
      message: '请选择预约日期',
      trigger: 'change'
    }
  ],
  time: [
    {
      required: true,
      message: '请选择预约场次',
      trigger: 'change'
    }
  ]
})
const songOptions = [
  {
    songName: "说散就散",
    ogSinger: "袁娅维"
  },
  {
    songName: "说散就散2",
    ogSinger: "袁娅维"
  },
  {
    songName: "测试歌曲",
    ogSinger: "测试歌手"
  },
  {
    songName: "说散就散3",
    ogSinger: "袁娅维"
  },
  {
    songName: "说散就散3",
    ogSinger: "袁娅维2"
  },
  {
    songName: "说散就散5",
    ogSinger: "袁娅维"
  }
]
const loading = reactive({
  isLoading:false,
  text:"正在预约中"

})
/**
 * 初始化时间与星期一二三四五六日
 * 初始化可选的歌曲
 * @return {[]}
 */
function timeFun() {
  const res = [];
  const {date,day} = initTime();
  let loopTime = Math.min(date.length,day.length)

  for (let i = 0;i < loopTime ;i++){
    res[i] = {value:date[i],label:day[i]};
  }
  formData.date = res[0].value
  return res;
}
const timeOptions = timeFun();

/**
 * 提交预约按钮，多个的话将分为多次提交
 */

const submitForm = () =>{
  form.value.validate((valid)=>{
    if (valid){
      loading.isLoading = true;
      const SongsLen = formData.songs.length;
      const requestData = {
        todaySongs:{
          phone: userInfoStore.userData.phone,
          songName: undefined,
          ogSinger: undefined,
          tdSinger: userInfoStore.userData.singerName,
          singDate: formData.date,
          singTime: formData.time
        },
        toInsert: false

      }
      for (let i = 0;i<SongsLen;i++){
        const index = formData.songs[i];
        requestData.todaySongs.songName = songOptions[index].songName;
        requestData.todaySongs.ogSinger = songOptions[index].ogSinger;
        // setTimeout(()=>{
        //   console.log(requestData)
        // },5000)
        // console.log(requestData)

        singRequest.post('/today/insert',requestData).then(res => {
          if (res.status === 200){
            ElMessage({
              type:"success",
              message:"歌曲插入成功",
              grouping:true,
              center: true,
              duration:1000
            })
          }else
            if (res.status === -98){
            console.log(res)
            ElMessageBox.confirm(
                `该歌手信息如下:演唱歌手-${res.data[0].tdSinger} | 歌名-${res.data[0].songName+" "+res.data[0].ogSinger}(更多歌手请查询今日歌单)
                请确认你还要继续演唱么？`,
                `${res.msg}`,
                {
                  confirmButtonText: '确认预约',
                  cancelButtonText: '暂不预约',
                  type: 'warning',
                  center:true,
                }
            ).then(() => {
                  const InsertAgain = {
                    todaySongs:{
                      phone: userInfoStore.userData.phone,
                      songName: res.data[0].songName,
                      ogSinger: res.data[0].ogSinger,
                      tdSinger: userInfoStore.userData.singerName,
                      singDate: formData.date,
                      singTime: formData.time
                    },
                    toInsert: true
                  }
                  singRequest.post('/today/insert',InsertAgain).then(()=>{
                    console.log(InsertAgain);
                    ElMessage({
                      type: 'success',
                      message: '已预约',
                      center:true,
                      duration:1000
                    })
                  })
                })
                .catch(() => {
                  ElMessage({
                    type: 'info',
                    message: '取消预约',
                    center:true,
                    duration:1000
                  })
                })
          }else
            if (res.status === -100){
            ElMessage({
              type:"error",
              message:"插入异常,"+res.msg,
              center: true,
              grouping:true,
              duration:1000
            })
          }

          loading.isLoading = false;
        })

      }

    }
  })
}




</script>

<style lang="scss" scoped>
.form {
  margin: 10px;
}

.formRadio{
  background-color: white;
}
</style>
