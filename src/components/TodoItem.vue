<template>
	<li>
		<label>
			<input type="checkbox" :checked="item.isChe" @change="ceh(item.id)">
			<span>{{item.content}}</span>
		</label>
		<button class="delBtn" @click="delI(item.id)">删除</button>
	</li>
</template>

<script>
	export default {
		name: "TodoItem",
		props: ["item", "changeList", "delItem"],
		methods: {
			ceh(id) {
				this.changeList(id)
			},
			delI(id) {
				if (confirm("是否删除!")) {
					this.delItem(id)
				}
			}
		}
	}
</script>

<style scoped>
	* {
		padding: 0;
		margin: 0;
	}

	li {
		list-style: none;
		padding: 5px;
		margin: 2px 0;
		border-radius: 5px;
		border: 1px solid gray;
		background-color: #F2F2F2;
		display: flex;
		align-items: center;
	}

	li:hover {
		background-color: skyblue;
	}

	label {
		width: 100%;
		display: flex;
		align-items: center;
		flex: 1;
	}

	input {
		margin-right: 5px;
	}

	.delBtn {
		background-color: red;
		color: white;
		border: none;
		border-radius: 2px;
		padding: 2px 15px;
		font-size: 11px;
		outline: none;
		display: none;
	}

	li:hover .delBtn {
		display: block;
	}
</style>
