import axios from "axios";
import router from "@/router";
import {useUserStore} from "@/store/userStore.js";
import {ElMessage} from "element-plus";
const userStore = useUserStore();

const singRequest = axios.create({
    // baseURL:'https://www.jzilong.com:9999/',
    baseURL:'http://localhost:9999/',
    // baseURL:'http://150.158.58.129:9999/',
    timeout:5000
})

singRequest.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    // 在浏览器的 Session Storage 中拿到 token 值
    config.headers.Authorization = window.localStorage.getItem("token");
    return config;
})

singRequest.interceptors.response.use(response => {
        let res = response.data;
        // 如果是返回的文件
        if (response.config.responseType === 'blob') {
            return res
        }
        // 兼容服务端返回的字符串数据
        if (typeof res === 'string') {
            res = res ? JSON.parse(res) : res
        }

        if (res.status === -99){
            sessionStorage.removeItem("user")
            userStore.$reset();
            router.replace('/singHome');
        }
        return res;
    },
    error => {
        if (error.message === "timeout of 5000ms exceeded") {
            error.message += "请求超时5秒"
            ElMessage({
                type: 'error',
                message: '请求超时',
                duration: 1000,
                center: true
            })
        }
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)


export default singRequest
