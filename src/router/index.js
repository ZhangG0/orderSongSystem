// import { createRouter, createWebHistory , createWebHashHistory
//   // 开发暂用 hash
//   createWebHashHistory } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Layout from '../layout/layout.vue'
import singLayout from '../layout/singLayout.vue'

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
  


// 声乐队点歌系统


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
          title:'校声乐队点歌系统'
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
        path:'/singHome/SingerIntro',
        name:'SingerIntroduction',
        component:() => import("@/views/Sing/SingerIntroduction"),
        meta:{
          title:'歌手简介'
        }
      },
      {
        path:'/singHome/About',
        name:'About',
        component:() => import("@/views/Sing/About"),
        meta:{
          title:'关于我们'
        }
      },
      {
        path:'/singHome/SingerHome',
        name:'SingerHome',
        // redirect:"/singHome/ManagementSystemLogin",
        component:() => import("@/views/Sing/SingerHome"),
        meta:{
          title:'歌手之家'
        }
      },
      {
        path:'/singHome/ManagementSystemLogin',
        name:'ManagementSystemLogin',
        component:() => import("@/views/Sing/AdminAndSingerLogin"),
        meta:{
          title:'歌手管理后台登录'
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
          title:'个人信息'
        }
      },


    ]
  },


]

const router = createRouter({
  // history模式
  history: createWebHistory(process.env.BASE_URL),

  // // Hash模式 开发暂用
  // history: createWebHashHistory(process.env.BASE_URL),
  routes,

})

export default router
