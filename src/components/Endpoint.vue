<script setup lang="ts">
import type { RequestParameter } from '@/types'

export interface Props {
  title: string
  explanation: string
  parameters: RequestParameter[]
  links: string[]
  id: string
}

defineProps<Props>()
</script>

<template>
  <div :id="id" class="pa-2">
    <span class="text-h4">{{ title }}</span>
    <p class="text-subtitle-1">{{ explanation }}</p>
    <span>
      {{ $t('example') }}
    </span>
    <p v-for="(link, key) in links" :key="key">
      <v-chip size="small" color="green" variant="flat" class="ma-1"> GET </v-chip>
      <a :href="link" target="_blank" class="text-decoration-none">{{ link }}</a>
    </p>
    <div v-if="parameters.length > 0" class="text-h5 py-2">{{ $t('parameters') }}</div>
    <div v-for="(value, key) in parameters" :key="key">
      <span>{{ value.name }}</span>
      <span class="text-red" v-if="value.isRequired">*</span>
      <code v-else> ({{ $t('default') }}: {{ value.defaultValue }})</code>
      <div class="text-medium-emphasis pa-2">{{ value.explanation }}</div>
    </div>
  </div>
</template>

<style scoped>
.font-small {
  font-size: smaller;
}
</style>
