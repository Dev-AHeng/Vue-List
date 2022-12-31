<template>
	<li>
		<label>
			<!-- label标签里的焦点一致  点击label里的任何标签都会勾选checkbox
			 要是不想统一焦点就给label设置for="checkbox的id"-->
			<input type="checkbox" :checked="item.isChe" @change="ceh(item.id)">
			<span v-show="!item.isEdit">{{item.content}}</span>
			<input v-show="item.isEdit" @blur="myBlur(item.id, $event)" @keyup.enter="myBlur(item.id, $event)"
				type="text" :value="item.content" ref="inp">
		</label>
		<button v-show="!item.isEdit" class="show editBtn" @click="editI(item)">编辑</button>
		<button class="show delBtn" @click="delI(item.id)">删除</button>
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
			editI(ite) {
				// 判断item里有没有isEdit这个属性
				if (ite.hasOwnProperty("isEdit")) {
					ite.isEdit = true
				} else {
					// 添加一个属性
					this.$set(ite, "isEdit", true)
				}

// 
				this.$nextTick(function() {
					this.$refs.inp.focus()
				})
			},
			delI(id) {
				if (confirm("是否删除!")) {
					this.delItem(id)
				}
			},
			myBlur(id, event) {
				if (!event.target.value.trim()) {
					alert("不能为空")
					return
				} else {
					this.$bus.$emit("editContent", id, event.target.value)
					this.item.isEdit = false
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

	.editBtn {
		background-color: green;
		color: white;
		border: none;
		border-radius: 2px;
		padding: 2px 15px;
		font-size: 11px;
		margin-right: 5px;
		outline: none;
		display: none;
	}

	li:hover .show {
		display: block;
	}
</style>
