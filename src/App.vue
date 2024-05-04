<script setup lang="ts">
import { watch } from 'vue'
import { isDefined } from '@vueuse/core'
import { useRoute } from '@/composables/route'
import { useLocalStorage } from '@vueuse/core'

const currentLanguage = useLocalStorage('currentLanguage', 'tr')
const languageOptions = [
  { value: 'tr', title: 'Türkçe 🇹🇷' },
  { value: 'en', title: 'English 🇬🇧' }
]

const { currentView, pathMenuItems, setViewFromPathMenuItem, currentPathMenuItem } = useRoute()
watch(currentPathMenuItem, () => {
  if (isDefined(currentPathMenuItem.value)) {
    setViewFromPathMenuItem(currentPathMenuItem.value)
  }
})
</script>

<template>
  <v-app>
    <v-app-bar flat floating>
      <v-app-bar-title>
        <v-tabs v-model="currentPathMenuItem" color="green" show-arrows>
          <v-tab v-for="(value, key) of pathMenuItems" :key="key" :value="value">
            {{ $t(value) }}
          </v-tab>
        </v-tabs>
      </v-app-bar-title>

      <template #append>
        <v-select
          v-model="currentLanguage"
          class="d-flex align-center"
          :items="languageOptions"
          variant="underlined"
          density="compact"
          flat
        />
      </template>
    </v-app-bar>

    <v-main>
      <component :is="currentView" :key="currentLanguage" />
    </v-main>
  </v-app>
</template>
