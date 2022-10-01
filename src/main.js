import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//引入dayjs
import dayjs from 'dayjs'
//引入pinia
import {createPinia} from "pinia";
//引入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
//引入NutUI
import { Image, Button, Icon, Form, FormItem, Picker, Cell, CellGroup, Checkbox,CheckboxGroup, Table ,BackTop, Avatar, Dialog,Popup,OverLay, Input, Toast } from '@nutui/nutui';
// import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
// 全局css导入
import '@/static/css/global.css'
// 动态修改title
import VueWechatTitle from 'vue-wechat-title'
// 导入所有的el-icon图标
import * as ElIconModules from '@element-plus/icons-vue'
//引入iconfont图标
import '@/assets/fonts/iconfont.css'




const app = createApp(App)
const pinia = createPinia()
//  统一注册el-icon图标
for(let iconName in ElIconModules){
    app.component(iconName,ElIconModules[iconName]);
}
//全局引用dayjs
app.config.globalProperties.$dayjs = dayjs;

app.use(router).use(pinia)
    .use(VueWechatTitle)
    .use(ElementPlus, {locale: zhCn,size:'small'})
    .mount('#app');

//  按需引入nutUI
app.use(Cell).use(CellGroup).use(Icon).use(Table).use(BackTop).use(Avatar).use(Dialog).use(Popup).use(OverLay);
app.use(Form).use(FormItem).use(Input).use(Toast).use(Picker);
app.use(Button).use(Image);
app.use(Checkbox).use(CheckboxGroup);
