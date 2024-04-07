<script setup lang="ts">
interface Props {
  title: string
  explanation: string
  parameters: { name: string; defaultValue: string; explanation: string; isRequired: boolean }[]
  link: string
}

defineProps<Props>()
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ explanation }}</p>
    <h3>Parameters:</h3>
    <ul>
      <li v-for="(value, key) in parameters" :key="key">{{ key }}: {{ value }}</li>
    </ul>
    <a :href="link">API Endpoint</a>
  </div>
</template>
