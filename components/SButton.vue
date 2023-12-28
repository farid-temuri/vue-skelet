<template>
	<buttton class="bg-slate-100 border-[1px] rounded-[4px] hover:bg-slate-400  text-slate-700 border-slate-700 transition">
		<slot></slot>
	</buttton>
</template>

<script lang='ts' setup>
const props = defineProps({
	
} )
console.log(props);

</script>