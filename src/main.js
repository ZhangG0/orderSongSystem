import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
//引入NutUI
import { Image, Button, Icon, Form, FormItem, Cell, CellGroup, Checkbox,CheckboxGroup } from '@nutui/nutui';
// import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
// 全局css导入
import '@/static/css/global.css'
// 动态修改title
import VueWechatTitle from 'vue-wechat-title'
// 导入所有的el-icon图标
import * as ElIconModules from '@element-plus/icons-vue'




const app = createApp(App)
//  统一注册el-icon图标
for(let iconName in ElIconModules){
    app.component(iconName,ElIconModules[iconName]);
}

app.use(store).use(router)
    .use(VueWechatTitle)
    .use(ElementPlus, {locale: zhCn,size:'small'})
    .mount('#app');
app.use(Form).use(Button).use(Icon).use(Image);
app.use(FormItem);
app.use(Cell);
app.use(CellGroup);
app.use(Checkbox).use(CheckboxGroup);