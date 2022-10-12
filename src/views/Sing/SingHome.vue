
<template>

	<div class="div_body">

<!--		<header>-->
<!--			-->
<!--			&lt;!&ndash; <mic class="Mic" /> &ndash;&gt;-->
<!--			Music is My Life-->
<!--			&lt;!&ndash; <headset class="Mic" /> &ndash;&gt;-->
<!--			-->
<!--		</header>-->

<!--    组件化思想-->
		<!-- <SingHeader></SingHeader> -->

		<!-- <div class="is-background">
				<mic class="MicBg" />
				<div class="bgText">
				<span style="color:#ff1100;">M</span>
				<span style="color:#ff5101;">u</span>
				<span style="color:#ff8c00;">s</span>
				<span style="color:#ffc903;">i</span>
				<span style="color:#eaff01;">c&nbsp;</span>
				<span style="color:#66ff00;">i</span>
				<span style="color:#01ff12;">s&nbsp;</span>
				<span style="color:#00ff95;">M</span>
				<span style="color:#00ddff;">y&nbsp;</span>
				<span style="color:#0066ff;">L</span>
				<span style="color:#5d00ff;">i</span>
				<span style="color:#9e01ff;">f</span>
				<span style="color:#ff01f3;">e</span>


				</div>
				<headset class="MicBg" />
		</div> -->

		<div class="container">
		  <div >
				<el-button icon="Tickets" color="#fe5339" round @click="toTodaySongs" >今日歌单</el-button>
		  </div>


			<div>
				<el-button icon="Mic" color="#fe5339" round @click="this.$messageBox.alert('攻城狮正在加急开发中！')">我要点歌</el-button>
			</div>
<!--      this.$router.push('/singHome/OrderSong')-->
			<div>
				<el-button color="#ff7416" round @click="this.$messageBox.alert('攻城狮正在加急开发中！')">本周歌手</el-button>
			</div>
			<div  >
				<el-button color="#ff7416" round @click="toSingerIntroduction">歌手简介</el-button>
			</div>
			<div>
				<el-button color="#f99e2b" round @click="toSongCatalogue">曲库大全</el-button>
			</div>
			<div>
				<el-button color="#f99e2b" round @click="this.$messageBox.alert('攻城狮正在加急开发中！')">愿望清单</el-button>
			</div>
			<div>
				<el-button color="#d5c397" round @click="this.$messageBox.alert('攻城狮正在加急开发中！')">留言板</el-button>
			</div>
			<div>
				<el-button color="#d5c397" round @click="toAbout">关于我们</el-button>
			</div>



		</div>

<!--		<footer>Mic is My Arms</footer>-->
	</div>

</template>

<script>
import '@/static/css/commonResponse.scss'
export default {
  name: "Register",
  data() {
    return {
      form:{},

    }
  },
  created() {
    this.$emit('score-change');
  },
  methods:{
	  toTodaySongs(){
		this.$router.push('/singHome/TodaySongs');
	},
    toSongCatalogue(){
      this.$router.push('/singHome/SongCatalogue');
    },
    toSingerIntroduction(){
    this.$router.push('/singHome/SingerIntro');
  },
    toAbout(){
      this.$router.push('/singHome/About');
    }
  },


}
</script>

<style scoped>
	.div_body{
		width: 100%;
		/* 固定高度防止滑动 */
    /*height: 100vh;*/
		overflow: hidden;
		z-index: -100;
	}
	*{
		color: white;
		font-family: fantasy;
	}
/* 	.MicBg{
		height: 48vh;

	}
	.bgText{

		border:2px solid white ;
		border-left-color: transparent;
		border-right-color: transparent;
		padding: 2px;
	}

	.is-background{
		position: fixed;
		z-index: -1;
		text-align: center;
		width: 100%;
		left: 0;
		right: 0;
		margin: 0 auto;
		background-color: #313134;
    	overflow: hidden;

	} */

	.container{
		width: 90vw;
		height: 60vh;
		 display: flex;
		 flex-flow: row wrap;
		 justify-content: center;
		 align-items: center;
		 /* vertical-align: middle; */
		 /* border: 0.05vh solid white; */
		 margin: 20vh auto 0 auto;

	}
	.container>div{
		border: 0.0625rem solid transparent;
		background-color: transparent;
		margin: 1%;
		height: 12%;
		width: 42%;
		text-align: center;

	}


	.container>div>.el-button{
		width: 100%;
		height: 100%;
		color: white;
		font-weight: bold;
		font-size: small;

	}
</style>
