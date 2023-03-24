export default {
	//为当前模块开启命名空间
	namespaced:true,
	//模块的state数据
	state: () => ({
		userMsg:JSON.parse(uni.getStorageSync('userMsg') || '{}'),
	}),
	//模块的mutations方法 用来修改state中的数据
	mutations:{
		setUserMsg(state,params){
			state.userMsg = params;
			this.commit('m_login/saveToStorage')
		},
		saveToStorage(state){
			uni.setStorageSync('userMsg',JSON.stringify(state.userMsg))
		}
	},
	//模块的getters属性 数据的包装器
	getters:{
		
	}
}