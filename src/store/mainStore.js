import {defineStore} from "pinia";

// 创建store,命名规则： useXxxxStore
// 参数1：store的唯一表示
// 参数2：对象，可以提供state actions getters

export const mainStore = defineStore('main',{
    state: () => {
        return {
            msg:"hello pinia!",
        }
    },
    getters: {
        getMSG(){
            return this.msg+"changed";
        }
    },
    actions: {
        getMSGFun(){
            return this.msg+"changed!!!!!!!!!!!!!!!!!!!!!!1";
        }
    },
})


export default mainStore();
