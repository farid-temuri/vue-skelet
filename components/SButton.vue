<template>
	<buttton class="bg-slate-100 border-[1px] rounded-[4px] hover:bg-slate-400  text-slate-700 border-slate-700 transition" :class="{
		active: active,
		nigger: !active
	}">
		<slot></slot>
	</buttton>
</template>

<script lang='ts' setup>
const props = defineProps<{ active: boolean }>()

console.log(props);

</script>

<style scoped>
.active{
	background-color: red!important;
}
</style>