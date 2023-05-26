import { defineStore } from 'pinia';
 
export const userStore = defineStore('userStoreTemp', {
	state(){
		return { 
			user: {},
			token: '',
			navId:'',
			tabBarIndex:0,
			NavIdArr:[],
		};
	},
	unistorage: true, // 开启后对 state 的数据读写都将持久化
	actions: {
		setNavId(id){
			this.navId = id;
		},
		setTabIndex(index){
			this.tabBarIndex = index;
		},
		setUserInfo(user){
			this.user = user;
		},
		updateUserName(userName){ //更新用户昵称
			this.user.userName = userName;
		},
		updateUserAvator(avator){ //更新用户头像
			this.user.portrait = avator;
		},
		setNavIdArr(arr){
			this.NavIdArr = arr;
		},
		setUserToken(token){
			this.token = token;
		}
	},
});