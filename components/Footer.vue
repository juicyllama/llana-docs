<script setup lang="ts">
const { footer } = useAppConfig()

</script>

<template>
  <UFooter>
    <template #left>
      <a href="https://juicyllama.com" class="text-primary">JuicyLlama</a> v.{{footer?.PACKAGE_VERSION}} {{ footer?.credits }}
    </template>

    <template #right>
      <UColorModeButton v-if="footer?.colorMode" />

      <template v-if="footer?.links">
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', ...link }"
        />
      </template>
    </template>
  </UFooter>
</template>
