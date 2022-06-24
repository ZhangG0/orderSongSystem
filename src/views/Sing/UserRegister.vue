<template>
  <div class="background_div">
    <div class="Text">歌手注册</div>
    <el-form class="registerForm" size="default" :model="form" :rules="rules" ref="form">

      <el-form-item  prop="phone">
        <el-input placeholder="请输入手机号" prefix-icon="Phone" v-model="form.phone" minlength="11" maxlength="11" clearable autofocus/>
      </el-form-item>

      <el-form-item prop="singerName">
        <el-input placeholder="请输入歌手名" prefix-icon="UserFilled" v-model="form.singerName" maxlength="20" clearable/>
      </el-form-item>

      <el-form-item prop="password">
        <el-input placeholder="请输入密码" prefix-icon="Lock" v-model="form.password" minlength="6" maxlength="20" show-password/>
      </el-form-item>

      <el-form-item prop="confirm">
        <el-input placeholder="请确认密码" prefix-icon="Lock" v-model="form.confirm" show-password/>
      </el-form-item>

      <el-form-item prop="singerInviteCode">
        <el-input placeholder="请输入歌手邀请码" v-model="form.singerInviteCode" prefix-icon="Mic" clearable/>
      </el-form-item>

      <el-form-item>
        <el-button size="large" type="primary" @click="Register">注 &nbsp;&nbsp; 册</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  name: "UserRegister"
}
</script>

<style scoped>

</style>