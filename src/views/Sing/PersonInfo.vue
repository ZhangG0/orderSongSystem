<template>
<!--  头像
      用户名
      名字
      学院
      演唱次数（歌手）
      注册时间
      【btn】我的密码
      【btn】退出登录
      -->

  <div class="background_div flexCenter">
    <nut-cell-group style="margin-top: 1.5vh">
      <nut-cell title="头像" center v-if="[1].includes(user.role)">
        <template v-slot:link>
<!--          <nut-image-->
<!--              :src="user.avatarUrl"-->
<!--              width="50"-->
<!--              height="50">-->
<!--          </nut-image>-->
          <nut-avatar
              size="large"
              :url="user.avatarUrl"
              shape="square"
              color="rgb(245, 106, 0)"
              bg-color="rgb(253, 227, 207)"
              alt="暂无图片"
          >{{user.username}}</nut-avatar>
        </template>
      </nut-cell>
      <nut-cell
          center
          is-link
          title="手机号"
          sub-title="(暂不支持修改)"
          :desc="user.phone"></nut-cell>
      <nut-cell is-link title="姓名"  :desc="user.username"></nut-cell>
      <nut-cell is-link title="学院" :desc="user.major"></nut-cell>
      <nut-cell
          center
          is-link
          title="个人简介"
          desc-text-align="left"
          :desc="user.introduction"
          v-if="[1].includes(user.role)"></nut-cell>
      <nut-cell title="热度" :desc="user.good" v-if="[1].includes(user.role)" ></nut-cell>
      <nut-cell title="演唱次数" :desc="user.mySing" v-if="[1].includes(user.role)" ></nut-cell>
      <nut-cell title="注册时间" :desc="user.registerTime" ></nut-cell>

    </nut-cell-group>

    <nut-button disabled>修改密码(暂不支持)</nut-button>
    <nut-button style="margin-top: 0.5vh" type="danger"  @click="test">退出登录</nut-button>

  </div>

</template>

<script>
import "@/static/css/commonResponse.scss"

export default {
  name: "PersonInfo",
  data(){
    return{
      //0为用户 1为歌手
      role:0,
      user:{},
    }
  },
  created() {
    //刷新父组件的兄弟组件（header）
    this.$emit('score-change');
    this.user = JSON.parse(sessionStorage.getItem("user"));
    //判断是否登录
    if (!this.user){
      this.$router.push('/singHome/Login')
    }else {
      //判断是User还是Singer
      this.username = JSON.parse(sessionStorage.getItem("user")).singerName;
      if (!this.username){
        this.username = JSON.parse(sessionStorage.getItem("user")).username;
        this.role = 0;
      }else {
        this.role = 1;
      }
    }
  },
  methods: {
    test(){
      sessionStorage.removeItem("user");
      this.$router.push("/singHome");
    }
  },

}
</script>

<style scoped>
  .background_div{
    height: 100vh;
    background-color: #313134;
  }

</style>
