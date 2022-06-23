<template>
  <div class="background_div">
    <el-button type="primary" size="large" round style="margin-top: 30vh" @click="getSingerInviteCode">获取邀请码</el-button>
    <el-dialog
        v-model="dialogVisible"
        title="歌手邀请码"
        width="80vw"
        center
        top="30vh"
    >
      <span>歌手邀请码为 : {{ singerInviteCode }}<br>(注:同一时间内仅一个邀请码有效，用后即焚)</span>
      <template #footer>
        <span>
          <el-button @click="dialogVisible = false">确定</el-button>
          <el-button type="primary" @click="copy(this.singerInviteCode)">复制</el-button>
        </span>
      </template>
    </el-dialog>
  </div>

</template>

<script>
import singRequest from "@/utils/singRequest";

export default {
  name: "AdminAndSinger",
  data(){
    return{
      singerInviteCode:'',
      dialogVisible:false,

    }
  },
  created() {
    // sessionStorage.setItem("user",{"username":"666"});
    //监测是否登录
    //BUG预警 用户表单注入后可能会有BUG
    if (!sessionStorage.user && !localStorage.user){
      this.$router.push("/singHome/ManagementSystemLogin");
      console.log("in singerName!!!!")
    }else if (!(JSON.parse(sessionStorage.getItem("user")).singerName)
           && !JSON.parse(localStorage.getItem("user")).singerName){
      this.$router.push("/singHome/ManagementSystemLogin");
      console.log("in singerName")
    }

  },
  methods:{
    getSingerInviteCode: function () {
      this.dialogVisible = true;

      singRequest.get('/admin_find').then(res => {
        // console.log(res);
        if (res.status === 200) {
          // console.log(res.data.data.inviteMyCode);
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
            message: "获取邀请码失败,请联系开发人员。",
            center: true,
            duration:1000
          })
        }
      })
    },
    copy(text){
      if (text === ""){
        this.$message.warning({
          message:'并没有邀请码',
          center: true,
          duration:1500
        })
      }else {
        // navigator.clipboard.writeText(text).then(() => {
        //   this.$message.success({
        //     message:'复制成功',
        //     customClass:'message',
        //     center: true,
        //     duration:1000
        //   });
        // });

        if (navigator.clipboard && window.isSecureContext) {
          // navigator clipboard 向剪贴板写文本
          navigator.clipboard.writeText(text).then(() => {
            this.$message.success({
              message:'复制成功',
              customClass:'message',
              center: true,
              duration:1000
            });
          });
        } else {
          // 创建text area
          let textArea = document.createElement('textarea');
          textArea.value = text;
          // 使text area不在viewport，同时设置不可见
          textArea.style.position = 'absolute';
          textArea.style.opacity = '0';
          textArea.style.left = '-999999px';
          textArea.style.top = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          // 执行复制命令并移除文本框
          document.execCommand('copy');
          this.$message.success({
            message:'复制成功',
            customClass:'message',
            center: true,
            duration:1000
          });
          textArea.remove();
        }
      }



    }
  }
}
</script>

<style scoped>
.background_div{
  text-align: center;
}

</style>

<style>

</style>