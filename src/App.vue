<template>
	<div class="content">
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
				list: JSON.parse(localStorage.getItem("list")) || []
			}
		},
		watch: {
			list: {
				deep: true,
				handler(val) {
					localStorage.setItem("list", JSON.stringify(val))
				}
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
			},
			editContent(id, value) {
				this.list.forEach((item) => {
					if (item.id === id) {
						item.content = value
					}
				})
			}
		},
		mounted() {
			this.$bus.$on("editContent", this.editContent)
		},
		beforeDestroy() {
			this.$bus.$off("editContent")
		}
	}
</script>

<style scoped>
	.content {
		width: 40%;
		margin: 50px auto;
	}
</style>
