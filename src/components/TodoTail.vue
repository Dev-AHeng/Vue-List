<template>
	<div v-show="all != 0">
		<input type="checkbox" :checked="isC" @change="allChe">
		<label>
			<span>已选{{mEl}}/</span>
			<span>全部{{all}}</span>
		</label>
		<button @click="delAllI">清除所有</button>
	</div>
</template>

<script>
	export default {
		name: "TodoTail",
		props: ["delAllItem", "list", "allItemCHe"],
		computed: {
			mEl() {
				return this.list.reduce((pre, surrent) => {
					return pre + (surrent.isChe ? 1 : 0)
				}, 0)
			},
			all() {
				return this.list.length
			},
			isC() {
				return this.mEl == this.all && this.all > 0
			}
		},
		methods: {
			delAllI() {
				this.delAllItem()
			},
			allChe() {
				this.allItemCHe(!this.isC)
			}
		}
	}
</script>

<style scoped>
	div {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-direction: row;
		background-color: gray;
		padding: 5px;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	input {
		margin-right: 5px;
	}

	label {
		flex: 1 1 auto;
	}

	button {
		background-color: red;
		color: white;
		border: none;
		border-radius: 2px;
		padding: 3px;
		font-size: 11px;
		outline: none;
	}
</style>
