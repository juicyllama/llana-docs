<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const { header } = useAppConfig()
</script>

<template>
  <UHeader>
    <template #logo>
    	<img src="/assets/images/llana-35x35.png" />
    </template>

    <template v-if="header?.search" #center>
      <UContentSearchButton class="hidden lg:flex" />
    </template>

    <template #right>
      <UContentSearchButton v-if="header?.search" :label="null" class="lg:hidden" />

      <UColorModeButton v-if="header?.colorMode" />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', ...link }"
        />
      </template>
    </template>

    <template #panel>
      <UNavigationTree default-open :multiple="false" :links="mapContentNavigation(navigation)" class="bg-black h-lvh" />
    </template>
  </UHeader>
</template>
