import axios from "axios";
import router from "@/router";


const singRequest = axios.create({
    baseURL:'https://www.jzilong.com:8383/',
    // baseURL:'http://150.158.58.129:8383',
    timeout:5000
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
        return res;
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)


export default singRequest