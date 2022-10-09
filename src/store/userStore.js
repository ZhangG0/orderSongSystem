import {defineStore} from "pinia";


export const useUserStore = defineStore("user", {
    state: () => {
        return {
            userData: {
                id: -1,
                phone: null,
                singerName: null,
                username: null,
                avatarName: null,
                avatarUrl: "",
                backImgName: null,
                backImgUrl: null,
                good: 0,
                information: null,
                introduction: "",
                lastTime: null,
                major: null,
                mySing: null,
                registerTime: null,
                role: null,
            },
            phoneNumber:""
        }
    },
    getters: {
        getPhone(){
            if (this.phoneNumber) {
                return this.phoneNumber.replace(this.phoneNumber.substring(3, 7), "****");
            } else {
                return undefined;
            }
        },
        getUserData(){
            return this.userData;
        }
    },
    actions: {
        initUser(Data){
            this.phoneNumber = Data.phone;
            this.userData = Data;
        }
    },
    // persist:true
    persist: {
        enabled: true,
        storage: sessionStorage,
        paths: ['userData'],
    },
})
