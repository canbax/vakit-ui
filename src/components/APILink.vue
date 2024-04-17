<script setup lang="ts">
interface Props {
  title: string
  link: string
  appendIcon?: string
  isOpenNewTab?: boolean
}

withDefaults(defineProps<Props>(), { isOpenNewTab: true })
</script>

<template>
  <v-btn
    :href="link"
    :target="isOpenNewTab ? '_blank' : ''"
    size="large"
    :append-icon="appendIcon"
    class="text-none"
  >
    {{ title }}
  </v-btn>
</template>
