<template>
<!--  https://cdn.img.jzilong.com/%E9%9F%B3%E4%B9%90%E8%83%B6%E5%8D%B7%E6%9C%BA.png-->
  <div class="background_div_color flexCenter">
    <nut-image
        :src="require('../../assets/img/AboutLogo.png')"/>


    <router-view>


      <nut-cell style="width: 99vw;" title="当前版本" desc="BETA测试版"></nut-cell>
      <nut-cell-group style="width: 99vw;">
        <!--      Bug反馈页面-->
        <nut-cell @click="dialogVisible.reportBug = true">
          Bug反馈
          <nut-dialog
              v-model:visible="dialogVisible.reportBug"
              title="BUG反馈"
              text-align="left"
          >
            <div>暂未开发该功能如有BUG上报请直接联系我<br/>QQ：1073266994
              <el-button round style="float: right">
                <a target="_blank"
                   href="mqqwpa://im/chat?chat_type=wpa&uin=1073266994&version=1&src_type=web&web_src=http:://wpa.b.qq.com">直接与我QQ联系</a>
              </el-button>
            </div>


            <template #footer>
              <el-button round style="width: 42%;padding: 5px" @click="dialogVisible.reportBug = false">取消上报
              </el-button>
              <el-button round style="width: 42%;padding: 5px;color: white" color="#d5432f"
                         @click="() => {copyText('1073266994');dialogVisible.reportBug = false;}">复制QQ
              </el-button>
            </template>
          </nut-dialog>
        </nut-cell>

        <!--      我要赞助页面-->
        <nut-cell @click="dialogVisible.sponsor = true">我要赞助
          <SingDialog
              title="感谢您的赞助"
              no-cancel-btn
              :visible="dialogVisible.sponsor"
              @close="() => {this.dialogVisible.sponsor = false;this.$message.success('感谢您的赞助')}"
          >
            <div>
              <span
                  style="text-align: left">开发团队均为爱发电，无任何报酬来维护开发此系统。如果您有意赞助我们我们将万分感激</span><br>
              <span>(长按图片保存微信二维码)</span><br>
              <img style="height: 100px;width: 100px; border: 1px solid lightgray"
                   :src="require('../../assets/img/wxcode.jpg')" alt="赞助收款码">
            </div>
          </SingDialog>
        </nut-cell>

      </nut-cell-group>

      <nut-cell-group style="width: 99vw;">
        <!--关于产品页面-->
        <nut-cell @click="dialogVisible.about = true">
          关于产品
          <SingDialog
              title="关于产品"
              no-cancel-btn
              :visible="dialogVisible.about"
              @close="dialogVisible.about = false"
          >
            <article style="text-align: left">该产品供成都中医药大学<strong>校声乐队</strong>驻唱点歌等活动使用，<br/>
              由医学信息工程2019级学生制作。<br/>
              主要开发人员: 江子麟, 江子龙, Ysy。<br/>
              代码已开源至Github等开源平台。
            </article>
          </SingDialog>
        </nut-cell>

        <nut-cell title="开发者的话" @click="$router.push('/singHome/About/MyWords')"></nut-cell>
      </nut-cell-group>

      <div class="developer">
        <span>Developed By 江子麟</span>
      </div>
    </router-view>
  </div>

</template>

<script>
export default {
  name: "About",
  created() {
    this.$emit('score-change')
  }
}
</script>

<script setup>
import {copyText} from "@/utils/ZhangG0CommonUtils.js";
import {reactive} from "vue";
import SingDialog from "@/components/Sing/SingDialog.vue";

const dialogVisible = reactive({
  reportBug: false,
  sponsor: false,
  about: false
})
</script>

<style lang="scss" scoped>

a {
  float: right;

  &:link {
    color: black;
    text-decoration: none;
  }
}

.nut-image {
  margin: 1vh 0 6vh 0;
  -webkit-box-reflect: below -62px -webkit-linear-gradient(bottom, rgba(255, 255, 255, 0.2) 0%, transparent 35%, transparent 100%);
  /*-webkit-box-reflect: below 10px -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(250, 250, 250, 0.2)),);*/
}

.developer {
  font-size: small;
  color: #8c939d;
  position: relative;
  text-align: center;
  margin: 10px 0;
}
</style>
