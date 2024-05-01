<script setup lang="ts">
import type { RequestParameter } from '@/types'

export interface Props {
  title: string
  explanation: string
  parameters: RequestParameter[]
  link: string
  id: string
}

defineProps<Props>()
</script>

<template>
  <div :id="id" class="pa-2">
    <span class="text-h4">{{ title }}</span>
    <p class="text-subtitle-1">{{ explanation }}</p>
    <span>
      {{ $t('example') }} <a :href="link">{{ link }}</a>
    </span>
    <div class="text-h5 py-2">{{ $t('parameters') }}</div>
    <div v-for="(value, key) in parameters" :key="key">
      <span>{{ value.name }}</span>
      <span class="text-red" v-if="value.isRequired">*</span>
      <code v-else> ({{ $t('default') }}: {{ value.defaultValue }})</code>
      <div class="text-medium-emphasis pa-2">{{ value.explanation }}</div>
    </div>
  </div>
</template>
