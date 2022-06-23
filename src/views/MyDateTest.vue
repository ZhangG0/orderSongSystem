<template>
  <div style="width: 100%;height: 100vh;background-color: #313134;overflow: hidden">
    <div style=" width: 400px; margin: 150px auto; ">
      <div class="tag" style="text-align: center">智能日期计算器</div>
      <div>
<!--        blur失去焦点触发事件  focus获得焦点触发事件-->
      <el-input autofocus @blur="noShow" @focus="noShow" class="input" placeholder="请输入日期:yyyy-mm-dd"  prefix-icon="Calendar" v-model="input1"  size="large" style="width: 275px" clearable/>
        <el-button type="primary" size="large" @click="cal">智能运算</el-button>
        <div class="errorTip" v-show="show"  >*输入格式有误请重新输入或无输入</div>

        <div class="nextDay"  >经过精确核算下一天的日期是 : {{output}}</div>
      </div>

      <div class="ml-2">
        <span style="margin-right: 5px" class="left">智能开关</span>
        <el-switch
            v-model="value1"
            inline-prompt
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="Y"
            inactive-text="N"
            @click="YNSwitch"
            class="left"
        />
      </div>


    </div>
  </div>

</template>

<script>
import { ElMessageBox } from 'element-plus'

export default {
  name: "MyDateTest",
  data(){
    return{
      input1:"",
      value1:true,
      output:"",
      show:false,
      focus:true
    }
  },
  methods:{
    YNSwitch(){
      if (this.value1===false) {
        this.$message({
          type: "error",
          message: "禁止关闭！关闭将导致计算器变成小笨蛋！！"
        });
      }
      console.log(this.value1);
    },
    cal(){
      if (this.value1===false){
        ElMessageBox.alert('我只是个小笨蛋干嘛让我算这种东西，算不出算不出！算不出我还呜呜呜', '小笨蛋的提示', {
          confirmButtonText: '好的小笨蛋',
        });
        this.output = "下一天是阿巴阿巴阿巴......笨蛋节！"

      }else{

        let time = new Date(this.input1);
        if (time == "Invalid Date"){
          // alert("in if")
          this.show = !this.show;


        }else {

          time.setTime(time.getTime()+24*60*60*1000);
          let nowDay = time.getDate(); //获取当前天
          let nowMonth = time.getMonth() + 1;//获取当前月份1月为0，所以加1
          let nowYear = time.getFullYear();  //获取当前年份getYear获取的是距离1900年的年数
          if (nowDay < 10) { nowDay = "0" + nowDay }
          if (nowMonth < 10) { nowMonth = "0" + nowMonth }
          let myTime = nowYear + "-" + nowMonth + "-" + nowDay;
          this.output = myTime;
        }


      }

    },
    noShow(){
      if (this.show == true){
        this.show = !this.show;
      }
    }
  }
}
</script>

<style scoped>
  div{
    color: white;
  }
  .tag{
    margin: 20px auto;
    font-family: Arial;
    font-size: 20px;
  }
  .input{
    margin: 10px 10px 0 10px;
  }
  .ml-2{
    /*float: left;*/
    margin: 10px;
    padding-top: 10px;
    border-top: 1px white solid;
  }
  .left{
    float: left;
  }
  .nextDay{
    margin: 10px;
  }
  .errorTip{
    margin-left: 10px;
    color: red;
    font-size: 5px;
  }
</style>