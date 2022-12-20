<template>
	<div>
		<TodoInput :addF="addF"></TodoInput>
		<TodoList :list="list" :changeList="changeList" :delItem="delItem"></TodoList>
		<TodoTail :delAllItem="delAllItem" :list="list" :allItemCHe="allItemCHe"></TodoTail>
	</div>
</template>

<script>
	import TodoInput from './components/TodoInput.vue';
	import TodoList from './components/TodoList.vue';
	import TodoTail from './components/TodoTail.vue';

	export default {
		name: 'app',
		components: {
			TodoInput,
			TodoList,
			TodoTail
		},
		data() {
			return {
				list: []
			}
		},
		methods: {
			addF(value) {
				this.list.unshift(value)
			},
			changeList(id) {
				this.list.forEach((item) => {
					// 这里的this是cv  forEach属于vue方法  item.isChe = !item.isChe可以更新ui
					// console.log(this);
					if (item.id === id) {
						item.isChe = !item.isChe
					}
				})
			},
			delItem(id) {
				this.list = this.list.filter((item) => {
					return item.id !== id
				})
			},
			delAllItem() {
				this.list = []
			},
			allItemCHe(isC) {
				this.list.forEach((item) => {
					item.isChe = isC
				})
			}
		},
	}
</script>

<style>

</style>
