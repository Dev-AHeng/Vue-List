<template>
	<div>
		<input type="text" placeholder="按回车添加" v-model="val" @keydown.enter="addItem" />
	</div>
</template>

<script>
	export default {
		name: "TodoInput",
		props: ["addF"],
		data() {
			return {
				val: ""
			}
		},
		methods: {
			addItem(event) {
				if (!this.val.trim().length > 0) {
					return
				}
				var item = {
					id: Math.random() * Date.now(),
					content: this.val,
					isChe: false
				}
				this.addF(item)
			}
		}
	}
</script>

<style scoped>
	div {
		display: flex;
		background-color: gray;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	input {
		flex: 1 1 auto;
		border: 1px solid red;
		border-radius: 5px;
		background-color: transparent;
		padding: 4px;
		margin: 2px 0;
		outline: none;
	}
</style>
