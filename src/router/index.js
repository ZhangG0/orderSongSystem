// import { createRouter, createWebHistory , createWebHashHistory
//   // 开发暂用 hash
//   createWebHashHistory } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Layout from '../layout/layout.vue'
import singLayout from '../layout/singLayout.vue'
import singNoBgLayout from "@/layout/singNoBgLayout.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/Home")
  },
  {
    path: '/user',
    name: 'Layout',
    component: Layout,
    // redirect:"/user",
    meta:{
      // 浏览器顶部条title
      title:'势必医馆'
    },
    children:[
      {
        path:'/user',
        name:'User',
        component:() => import("../views/User")
      },
      {
        path:'/book',
        name:'Book',
        component:() => import("../views/Book")
      },
      {
        path:'/person',
        name:'Person',
        component:() => import("../views/Person"),
        meta:{
          title:'个人信息'
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("../views/Login"),
    meta:{
      title:'势必医馆登录'
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import("../views/Register"),
    meta:{
      title:'势必医馆注册'
    },
  },

  {
    path: '/myResume',
    name: 'MyResume',
    component: () => import("../views/MyResume"),
    meta:{
      title:'个人简历'
    },
  },

  {
    path: '/myDateTest',
    name: 'MyDateTest',
    component: () => import("../views/MyDateTest"),
    meta:{
      title:'测试课程--日期测试'
    },
  },

  {
    path: '/test',
    name: 'test',
    component: () => import("../views/Sing/test"),
    meta:{
      title:'test'
    },
  },



// 声乐队点歌系统(有Icon背景)

  {
    path: '/singHome',
    name: 'singLayout',
    component:singLayout,
    // redirect:"/singHome",

    // meta:{
    //   title:'校声乐队点歌系统'
    // },
    children:[
      {
        path:'',
        name:'singHome',
        component: () => import("../views/Sing/SingHome"),
        meta:{
          title:'i点歌---校声乐队点歌系统'
        },
      },
      {
        path:'/singHome/TodaySongs',
        name:'TodaySongs',
        component:() => import("@/views/Sing/TodaySongs"),
        meta:{
          title:'今日歌单'
        }
      },
      {
        path:'/singHome/OrderSong',
        name:'orderSong',
        component:() => import("@/views/Sing/orderSong"),
        meta:{
          title:'我要点歌'
        }
      },
      {
        path:'/singHome/SongCatalogue',
        name:'SongCatalogue',
        component:() => import("@/views/Sing/SongCatalogue"),
        meta:{
          title:'曲库大全'
        }
      },
      {
        path:'/singHome/SingerIntro',
        name:'SingerIntroduction',
        component:() => import("@/views/Sing/SingerIntroduction"),
        meta:{
          title:'歌手简介'
        }
      },
      {
        path:'/singHome/SingerHome',
        name:'SingerHome',
        component:() => import("@/views/Sing/SingerHome"),
        meta:{
          title:'歌手之家',
          Authentication:true
        },
      },
      {
        path:'/singHome/ManagementSystemLogin',
        name:'ManagementSystemLogin',
        component:() => import("@/views/Sing/AdminAndSingerLogin"),
        meta:{
          title:'歌手管理后台登录',
        }
      },
      {
        path:'/singHome/ManagementSystemRegister',
        name:'ManagementSystemRegister',
        component:() => import("@/views/Sing/AdminAndSingerRegister"),
        meta:{
          title:'歌手注册'
        }
      },
      {
        path: '/singHome/Login',
        name:'UserLogin',
        component:() => import("@/views/Sing/UserLogin"),
        meta: {
          title: '点歌系统登录'
        }
      },
      {
        path: '/singHome/Register',
        name:'UserRegister',
        component:() => import("@/views/Sing/UserRegister"),
        meta: {
          title: '点歌系统注册'
        }
      },
      {
        path:'/singHome/personInfo',
        name:'PersonInfo',
        component:() => import("@/views/Sing/PersonInfo"),
        meta:{
          title:'个人信息',
        }
      },


    ]
  },

// 声乐队点歌系统(无Icon背景)

  {
    name:'singNoBgLayout',
    component:singNoBgLayout,
    children: [
      {
        path:'/singHome/About',
        name:'About',
        component:() => import("@/views/Sing/About"),
        meta:{
          title:'关于我们',
        }
      },
      {
        path:'/singHome/SingerHome/orderToSing',
        name:'orderToSing',
        component:() => import("@/views/Sing/childrenPage/SingerOrderSongs.vue"),
        meta:{
          title:'预约演唱',
          Authentication:true
        },
      },
    ]
  }
]

const route = []

const router = createRouter({
  // history模式
  history: createWebHistory(process.env.BASE_URL),

  // // Hash模式 开发暂用
  // history: createWebHashHistory(process.env.BASE_URL),
  routes,route

})

router.beforeEach((to, from, next) => {
  //路由守卫，访问权限配置
  if (to.meta.Authentication){ //若进入的是受保护的网页则验明身份
    if (localStorage.getItem("token") && sessionStorage.getItem("user")){
      next()
    }else {
      alert("无访问权限,请登录");
      next('/singHome')
    }
  }else {
    next()
  }
})

export default router
