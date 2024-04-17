<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from '@/composables/route'
import { useLocalStorage } from '@vueuse/core'

const currentLanguage = useLocalStorage('currentLanguage', 'tr')
const languageOptions = [
  { value: 'tr', title: 'Türkçe 🇹🇷' },
  { value: 'en', title: 'English 🇬🇧' }
]

const { currentView, pathMenuItems, setViewFromPathMenuItem } = useRoute()
const tab = ref<string>('')
watch(tab, () => {
  if (tab.value == 'main') {
    history.pushState({}, '', '/')
  } else {
    history.pushState({}, '', '/' + tab.value)
  }

  setViewFromPathMenuItem(tab.value)
})
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>
        <v-tabs v-model="tab">
          <v-tab v-for="(value, key) of pathMenuItems" :key="key" :value="value">
            {{ $t(value) }}
          </v-tab>
        </v-tabs>
      </v-app-bar-title>

      <template #append>
        <!-- <APILink
          title="GitHub"
          link="https://github.com/canbax/namaz-vakti-api"
          append-icon="mdi-open-in-new"
        /> -->
        <v-select
          v-model="currentLanguage"
          class="d-flex align-center"
          :items="languageOptions"
          variant="outlined"
          density="compact"
        />
      </template>
    </v-app-bar>

    <v-main>
      <component :is="currentView" :key="currentLanguage" />
    </v-main>
    <v-footer :app="true">
      <div class="text-decoration-none font-x-small">
        This site or product includes IP2Location LITE data available from
        <a href="https://lite.ip2location.com">https://lite.ip2location.com</a>.
      </div>
    </v-footer>
  </v-app>
</template>

<style scoped>
.font-x-small {
  font-size: x-small;
}
</style>
