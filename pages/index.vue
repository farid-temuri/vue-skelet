<template>
  <div class="flex items-center flex-col">
    <div class="text-2xl py-4">
      List of all components
    </div>
    <NuxtLink
      v-for="component in componentsList"
      :key="component.routeName"
      as="button"
      :to="{name:component.routeName}"
      class="  border-2 rounded-md bg-slate-300 border-gray-800 px-2"
    >
      {{ component.placeholder }}
    </NuxtLink>
    <div class="text-2xl py-4">
      Design System
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RoutesNamesList } from '@typed-router/__routes'

const componentsList: {routeName: RoutesNamesList, placeholder: string}[] = [
]

</script>
