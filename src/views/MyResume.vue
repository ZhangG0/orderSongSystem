<template>
  <body>
  <header>
    <el-card class="header">
      上次更新时间<br/>
      2022-8-30
    </el-card>
  </header>
  <div id="parentDiv" class="resumeDiv opacity">
    <div class="infoDiv">
      <!--        基础信息-->
      <div class="basicsInfo">
        <img class="img" :src="require('../assets/img/handsomeBoy.jpg')" alt="张济麟的照片">
        <div class="personalInfo">
          <div class="name">张济麟</div>
          <table>
            <tr>
              <td>电话:15701959668</td>
              <td>邮箱:zhanggzero@qq.com</td>
            </tr>
            <tr>
              <td>现居城市:成都 宁波</td>
            </tr>
          </table>
        </div>
      </div>
      <!--        专业技能-->
      <div class="otherInfoDiv professionalSkills">
        <div class="headDiv">专业技能</div>
        <div class="blueLine"></div>
        <div class="detailInfoDiv">
          <div> 熟悉 HTML CSS JavaScript </div>
          <div> 熟悉Vue ElementPlus NutUI Echart JQuery</div>
          <div> 了解Nginx Java SpringBoot mybatis</div>
          <div> 能够使用git进行团队协作并且掌握基本数据结构和算法</div>
        </div>
      </div>
      <!--        教育经历-->
      <div class="otherInfoDiv educationExp">
        <div class="headDiv">教育经历</div>
        <div class="blueLine"></div>
        <div class="detailInfoDiv">
          <div class="detailInfoDivFirst">
            成都中医药大学 医学信息工程(软件方向) 本科
            <span class="time">2019.9-至今</span>
          </div>

          <div>主修课程:HTML5程序设计(100分),JavaScript语言程序设计(99.4分),Web服务器端程序设计(99.4分),Android程序设计,计算机组成原理,数据库及应用,数据结构等。
          </div>
        </div>
      </div>
      <!--        项目经历-->
      <div class="otherInfoDiv projectExp">
        <div class="headDiv">项目经历</div>
        <div class="blueLine"></div>
        <div class="detailInfoDiv">

          <div class="detailInfoDivFirst">
            ￭<a class="mytamll" >前端监控系统</a>
            <span class="time">2022.7-2022.8</span>
          </div>
          <div>
            所用技术:Vue2 Elementui Echarts Axios SpringBoot 等<br/>
            项目描述：监控前端项目的JS、接口、白屏、资源、http等异常以及拿到性能数据和pv、uv等用户行为数据，来为前端提供一个稳定运行的环境，并以决策者展示图表大屏的方式来展示能够及时发现前端错误以及增强对用的了解来改进产品的监控系统。<br/>
            个人职责：<br/>
            负责整体项目设计、功能构想。<br/>
            负责项目人员及计划统筹，项目整体推进。<br/>
            负责JS异常以及白屏异常的埋点收集以及展示的代码开发。<br/>
            进行数据清洗代码优化并负责部分JAVA后端代码开发。
          </div>

          <div class="detailInfoDivFirst">
            ￭<a class="mytamll" @click="this.$router.push('/singHome')" >i点歌---校声乐队点歌系统</a>
            <span class="time">2022.6-至今</span>
          </div>
          <div>
            所用技术:Vue3 ElementPlus NutUI Axios SpringBoot mybatis 等<br/>
            项目描述：该项目均由个人完成。用前后端分离技术搭建了运载着校声乐队驻场点歌所需的基本功能，主要应用场景为移动端，但是依旧适配于PC端的使用，有着登录注册，今日歌单、歌手、曲库大全等展示，用户分权，随用随销的邀请码保证安全，并且还有歌手后台，能够使歌手以及管理员做的管理操作，并且部署nginx服务器，上线使用并持续更新维护。
          </div>

          <div class="detailInfoDivFirst">
            ￭<a class="mytamll"  @click="this.$router.push('/login')">势必医馆社团系统（全栈）</a>
            <span class="time">2021.12-2022.3</span>
          </div>
          <div>所用技术:HTML CSS Vue3 Vue router ElementPlus axios SpringBoot</div>
          <div>项目描述：用Vue3和SpringBoot前后端分离技术搭建了运载着社团各项基本功能的网站</div>
          <div > &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;运用了 Vue和ElementPlus进行了网站页面的构建结合SpringBoot完成了，登录注册，人员模糊搜索，增加删减更改，社团活动发布提醒，不同角色权限赋予，在引入session来解决登录时可能会出现的一些安全问题。</div>

          <div class="detailInfoDivFirst">
            ￭<a class="mytamll" >电子商务购物网站</a>
            <span class="time">2021.10-2021.12</span>
          </div>
          <div>所用技术:HTML CSS JavaScript JQuery BootStrap</div>
          <div>项目描述:该项目构建了现代网上购物网站的前端搭建，具体如下：</div>
          <div >  利用HTML与CSS完成了网站的页面设计和多种不同形式的布局实现，<br>   利用原生JS和JQuery实现了轮播、金额排序搜索、格式化金额等购物网站所需要的前端交互功能
          </div>
        </div>
      </div>

      <!--        实习经历-->
      <div class="otherInfoDiv practicalAndOrganizationalExp">
        <div class="headDiv">实习经历</div>
        <div class="blueLine"></div>
        <div class="detailInfoDiv">
          <!--  校园音探-->
          <div class="detailInfoDivFirst">
            用友集团   开发实习生
            <span class="time">2022.06-至今</span>
          </div>
          职责：负责客户化开发，在标准产品的基础上按照客户的需求进行定制化开发，负责全栈开发。
        </div>
      </div>

      <!--        其他技能及荣誉-->
      <div class="otherInfoDiv otherSkillAndHonor">
        <div class="headDiv">证书及荣誉</div>
        <div class="blueLine"></div>
        <div class="detailInfoDiv">
          <!--                <div>其他技能:</div>-->
          <!--                <div>词曲创作及熟练运用Cubase等进行人声录制和音乐后期混音母带制作</div>-->
          <!--                <div>荣誉:</div>-->
          <div>￭<span class="honorImg"  @click="showImg('lqb.jpg')">第十二届蓝桥杯程序设计大赛四川省一等奖</span> </div>
          <div>￭2020-2022:<span class=""   >参加创新创业训练项目，国家级、省级各一项</span></div>
          <div>￭<span class="honorImg"  @click="showImg('gyhlwkfgcs.jpg')" >工信部-工业互联网平台开发工程师初级(能力三等)</span></div>
          <div>￭
            <span class="honorImg" @click="showImg('ACMcdio.png')" > CDIO优秀学生 </span>|
            <span class="honorImg" @click="showImg('wtjs.jpg')" > 校文体竞赛奖</span>
          </div>
          <!--                <div>￭<span class="honorImg"  onclick="showImg('tyyyr.jpg')">Asia FM亚洲音乐台特邀音乐人 </span>|-->
          <!--                    <span class="honorImg"  onclick="showImg('kgzw.JPG')"> 校K歌炫舞大赛(十佳歌手)第一名</span>-->
          <!--                </div>-->
          <!--                <div>￭<span class="honorImg" onclick="showImg('2035.JPG')">中国共青团&网易云音乐“我和2035有个约定”征歌大赛全国前三</span></div>-->
          <div>￭<span class="honorImg" ><a href="https://music.163.com/#/song?id=1900999262">受成都市共青团邀请制作“爱成都迎大运”志愿者协会主题歌曲《Run!成都》制作</a></span></div>
        </div>
      </div>

      <!--        自我评价-->

      <div class="whatsMe">
        <div class="headDiv">自我评价</div>
        <div class="blueLine"></div>
        <div class="detailInfoDiv">
          <div>￭<span>我认为不是我选择了前端而是前端选择了我</span></div>
          <div>￭<span>我一直觉得前端是个很浪漫的职业，它处于人与计算机的十字路口，左边是产品与设计，有助于培养人文思想。右边是逻辑与代码，有助于培养理性思想。纯粹的人文思想很难将想法转化为现实，纯粹的技术又很难把握人的情感与真实需求。而前端可以感知人的需求，又有一定的能力可以将这种需求转化为产品。</span></div>
<!--          <div>￭<span>对前端工作充满热情，享受其代码构建并在页面上呈现的过程，对新功能实现敢于提出自己的思考和解决方案和见解</span></div>-->
<!--          <div>￭<span>有较强的适应能力和抗压能力，可以快速适应加班出差等工作</span></div>-->
<!--          <div>￭<span>有不错的人际交往能力和交流表达能力，能够快速了解业务需求及快速融入团队</span></div>-->

        </div>
      </div>

      <div class="otherInfoDiv practicalAndOrganizationalExp">
        <div class="headDiv">实践及组织经历</div>
        <div class="blueLine"></div>
        <div class="detailInfoDiv">
          <!--  校园音探-->
          <div class="detailInfoDivFirst">
            杭州网易云音乐科技有限公司   校园音探
            <span class="time">2020.05-2020.12</span>
          </div>

          参与网易云校园拓展，2020“少年音乐大战”校园歌手大赛，潜力歌曲挖掘推广及相关工作。
        </div>
        <!--  势必医馆-->
        <!--            <div class="detailInfoDiv">-->
        <!--                <div class="detailInfoDivFirst">-->
        <!--                    势必医馆嘻哈协会  创始人-->
        <!--                    <span class="time">2020.09-至今</span>-->
        <!--                </div>-->

        <!--                作为第一负责人负责社团对外大小事务及各类活动，组织并参与社团2020-2021我校Cypher歌曲制作，在各大平台播放量共超30W且作为重点推文被我校招生办在公众号推送。-->
        <!--            </div>-->
        <!--      声乐队-->
        <!--            <div class="detailInfoDiv">-->
        <!--                <div class="detailInfoDivFirst">-->
        <!--                    校声乐队  核心成员-->
        <!--                    <span class="time">2019.09-2022.1</span>-->
        <!--                </div>-->
        <!--                在学校及学院参与各种大型演出，受全校师生广泛好评，并且作为技术人员在声乐队负责各种音频处理工作。-->
        <!--            </div>-->
      </div>

    </div>

  </div>

  <!--图片展示框-->
  <div id="imgShowBlock" class="imgShowBlock">
    <span id="close" class="close" @click="closeImg"> X </span>
    <img id="honorImg" :src="imgUrl" alt="图片暂无或者这图挂啦！">
  </div>
  </body>
</template>



<script>
import '@/static/css/frontendResume.css'
import {closeImg,showImg} from "@/static/js/frontendResume";


export default {
  name: "MyResume",
  data(){
    return{
      imgUrl:'',
    }
  },
  methods:{
    showImg:function (imgName) {
      // require()字符串拼接的方式动态改变图片 放弃了js原有改变src的方法
      this.imgUrl=require('../assets/img/'+imgName+'')
      showImg(imgName);

    },
    closeImg:function (){
      closeImg();
    }
  },
  created(){
	   alert('温馨提示:移动端查看本页面互动功能可能有兼容性问题请谨慎点击。');
  }

}
</script>

<style scoped>


</style>
