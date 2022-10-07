<template>
<!--  页面设计
      居中显示
      头像
      姓名
      粉丝 热度
      学院
      可唱曲目
      我的歌单
      我要演唱
      -->
  <div class="background_div">
    <nut-button @click="this.dialogVisible.addNewSong = !this.dialogVisible.addNewSong;">
      新增歌曲
      <nut-dialog
          title="新增歌曲"
          v-model:visible="dialogVisible.addNewSong"
          custom-class="inputDialog"
      >

        <!--      content部分-->
        <el-form :model="addNewSong" :rules="rules" ref="rulesForm">
          <el-form-item prop="songName">
            <span class="dialogELInputLabel">歌名</span>
            <el-input class="dialogELInput" placeholder="请输入歌名" v-model="addNewSong.songName" clearable></el-input>
          </el-form-item>
          <el-form-item s prop="ogSinger">
            <span class="dialogELInputLabel">歌手名</span>
            <el-input class="dialogELInput" placeholder="请输入歌手名" v-model="addNewSong.ogSinger" clearable></el-input>
          </el-form-item>
        </el-form>

        <!--      foot部分-->
        <template #footer>
          <el-button round style="width: 42%;padding: 5px"  @click="dialogVisible.addNewSong = !dialogVisible.addNewSong">取消</el-button>
          <el-button round style="width: 42%;padding: 5px;color: white" color="#d5432f"   @click="addNewSongFun">新增</el-button>
        </template>

      </nut-dialog>
    </nut-button>

    <nut-button @click="$router.push('/singHome/SingerHome/orderToSing')">
      预约演唱
    </nut-button>
    <nut-button @click="getSingerInviteCode">
      获取邀请码
      <nut-dialog
          v-model:visible="dialogVisible.getInviteCode"
          title="歌手邀请码"
          text-align="left"
      >

        <div style="line-height: 20px" >歌手邀请码为 : <strong>{{ singerInviteCode }}</strong></div>
        <div style="line-height: 20px">(注:同一时间内仅一个邀请码有效，用后即焚)</div>

        <template #footer>
          <el-button round style="width: 42%;padding: 5px"  @click="dialogVisible.getInviteCode = false">取消</el-button>
          <el-button round style="width: 42%;padding: 5px;color: white" color="#d5432f"   @click="copy(this.singerInviteCode)">复制</el-button>
        </template>
      </nut-dialog>
    </nut-button>

  </div>

</template>

<script>
import singRequest from "@/utils/singRequest";
import { reactive} from "vue";
import {copyText} from "@/utils/ZhangG0CommonUtils.js";

export default {
  name: "AdminAndSinger",
  data(){
    return{
      singerInviteCode:'',
      dialogVisible:{
        getInviteCode:false,
        addNewSong:false,
        orderSing:false,
        dialogPickerShow:false
      },
      addNewSong:{
        songName:"",
        ogSinger:"",
        singer:JSON.parse(sessionStorage.getItem("user")).singerName
      },
      rules:reactive({
        ogSinger:[
          {
            required:true,
            message:'请输入歌手',
            trigger:'blur'
          }
        ],
        songName:[
          {
            required:true,
            message:'请输入歌名',
            trigger:'blur'
          }
        ]
      })
    }
  },
  created() {
    //监测是否登录
    this.$emit('score-change');
    if (!sessionStorage.user && !localStorage.user){
      this.$router.push("/singHome/ManagementSystemLogin");
    }else if (!(JSON.parse(sessionStorage.getItem("user")).singerName)
           && !JSON.parse(localStorage.getItem("user")).singerName){
      //判断了user里是否有singerName键 若没有则为用户
      this.$router.push("/singHome");
    }

  },
  methods:{
    getSingerInviteCode: function () {
      singRequest.get('/admin_find').then(res => {
        if (res.status === 200) {
          this.singerInviteCode = res.data.inviteMyCode;
          this.$message({
            type: "success",
            center: true,
            message: "获取邀请码成功 ! ",
            duration:1000
          })
        } else {
          this.$message({
            type: "error",
            message: "服务器异常或无权限，请重新登陆。",
            center: true,
            duration:1000
          })
        }
      })
      this.dialogVisible.getInviteCode = !this.dialogVisible.getInviteCode;
    },

    addNewSongFun(){
      this.$refs.rulesForm.validate((valid) => {
        if (valid){
          singRequest.post("songCatalogue/addSong",this.addNewSong).then( res => {
            console.log(res);
            console.log(this.addNewSong);
            if (res.status === 200){
              this.$message({
                type:'success',
                message:'新增成功',
                center:true,
                duration:1000
              })
              this.addNewSong = {};
            }else {
              this.$message({
                type:'error',
                message:'新增失败'+res.msg,
                center:true,
                duration:1000
              })
            }
          })
        }
      })
    },
    copy(text){
      if (copyText(text)){
        this.$message.success({
          message: '复制成功',
          customClass: 'message',
          center: true,
          duration: 1000
        });
      }else{
        this.$message.warning({
          message:'并没有邀请码',
          center: true,
          duration:1500
        });

      }
    }

  }
}
</script>

<style scoped>
.background_div{
  text-align: center;
}
.dialogELInput{
  display: inline-block;
  max-width: 75%;
}
.dialogELInputLabel{
  min-width: 20%;
  text-align: center;
}

</style>
<style>

</style>
