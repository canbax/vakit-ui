<script setup lang="ts">
interface Props {
  title: string
  link: string
  isOpenNewTab?: boolean
}

withDefaults(defineProps<Props>(), { isOpenNewTab: true })
</script>

<template>
  <v-btn :href="link" :target="isOpenNewTab ? '_blank' : ''" variant="text" color="primary">
    {{ title }}
  </v-btn>
</template>
