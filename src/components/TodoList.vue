<template>
	<ul v-show="list.length > 0">
		<TodoItem v-for="item in list" :key="item.id" :item="item" :changeList="changeList" :delItem="delItem" />
	</ul>
</template>

<script>
	import TodoItem from './TodoItem.vue';

	export default {
		name: "TodoList",
		components: {
			TodoItem
		},
		props: ["list", "changeList", "delItem"]
	}
</script>

<style scoped>
	* {
		padding: 0;
		margin: 0;
	}

	ul {
		background-color: gray;
		padding: 5px;
	}
</style>
