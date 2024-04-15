<script setup lang="ts">
import type { RequestParameter } from '@/types'

interface Props {
  title: string
  explanation: string
  parameters: RequestParameter[]
  link: string
}

defineProps<Props>()
</script>

<template>
  <div>
    <span class="text-h6">{{ title }}</span>
    <p class="text-subtitle-1">{{ explanation }}</p>
    <a :href="link">{{ link }}</a>
    <v-list title="Parameters">
      <v-list-item
        v-for="(value, key) in parameters"
        :key="key"
        :title="value.name"
        :subtitle="value.explanation"
      ></v-list-item>
    </v-list>
  </div>
</template>
