//1.打入vue和vuex
import Vue from 'vue';
import Vuex from 'vuex';
//2.将Vuex安装为vue的插件
	//1.导入登录界面vuex模块
	import moduleLogin from '@/store/login.js'
Vue.use(Vuex);
//3.创建store的实例对象
const store = new Vuex.Store({
	//挂载store模块
	modules:{
		//挂载登录界面的vuex模块，模块内成员的访问路径被调整为m_login,例如登录界面模块中存储的账号userAccount的
		//访问路径为m_login/login
		m_login:moduleLogin
	}
})
//4.向外共享Store的实例对象
export default store;