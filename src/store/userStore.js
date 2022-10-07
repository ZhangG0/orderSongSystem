import {defineStore} from "pinia";


export const useUserStore = defineStore("user", {
    state: () => {
        return {
            userData:{
                id: -1,
                phone: "",
                singerName: null,
                username: null,
                avatarName: null,
                avatarUrl: "",
                backImgName: null,
                backImgUrl: null,
                good: 0,
                information:null,
                introduction:"",
                lastTime:null,
                major:null,
                mySing:null,
                registerTime:null,
                role:null,
            },
            test:"change?",

    }
    },
    getters:{
      getPhone(){
          if (this.userData.phone){
              return this.userData.phone.replace(this.userData.phone.substring(3, 7), "****");
          }else {
              return undefined;
          }
      }
    },
    actions:{
        initUser(Data){
            this.userData = Data;
        }
    },
    persist: {
        enabled:true,
        storage: sessionStorage,
        paths: ['userData'],
    },
})
