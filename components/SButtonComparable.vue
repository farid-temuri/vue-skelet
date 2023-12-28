<template>
	<buttton class="bg-slate-100 border-[1px] rounded-[4px] hover:bg-slate-400  text-slate-700 border-slate-700 transition data-[chosen=true]:bg-red-950" :data-chosen="active" :data-nigger="!active">
		<slot></slot>
	</buttton>
</template>

<script lang='ts' setup>
const props = defineProps<{ active: boolean }>()

console.log(props);

</script>
