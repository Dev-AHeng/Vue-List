import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


/*
组件
数据子传父 父传子
数组增删改查
数据变化监听
点击事件  键盘事件
本地储存
编辑数据
设置编辑框焦点$nextTick
*/
new Vue({
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this
	}
}).$mount('#app')
