<template>
  666
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="新密码" prop="newPwd">
      <el-input v-model="ruleForm.newPwd" clearable size="small" type="password"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="confirmPwd">
      <el-input v-model="ruleForm.confirmPwd" clearable size="small" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')" class="button">确定</el-button>
      <el-button @click="resetForm('ruleForm')" class="button">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.confirmPwd !== '') {
          this.$refs.ruleForm.validateField('confirmPwd');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.newPwd) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      changePwdDialog:false,//修改密码弹框
      ruleForm: {
        newPwd: '',
        confirmPwd:''
      },
      rules: {
        newPwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        confirmPwd:[
          { required: true, message: '请确认密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur', required: true }
        ],
      }
    }
  },
}
</script>

<style>
</style>