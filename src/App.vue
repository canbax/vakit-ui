<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from '@/composables/route'
import EndPoint from './components/EndPoint.vue'
import type { RequestParameter } from '@/types'
import APILink from '@/components/APILink.vue'

const currentLanguage = ref('tr')

const { currentView, pathMenuItems, setViewFromPathMenuItem } = useRoute()
const tab = ref<string>('')
watch(tab, () => {
  console.log('current tab: ', tab.value)
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
          <v-tab v-for="(value, key) of pathMenuItems" :key="key" :value="value">{{ value }}</v-tab>
        </v-tabs>
      </v-app-bar-title>

      <template #append>
        <v-radio-group v-model="currentLanguage" inline class="d-flex align-center">
          <v-radio value="tr">
            <template v-slot:label>
              <div>Türkçe 🇹🇷</div>
            </template>
          </v-radio>
          <v-radio value="en">
            <template v-slot:label>
              <div>English 🇬🇧</div>
            </template>
          </v-radio>
        </v-radio-group>
        <APILink
          title="GitHub"
          link="https://github.com/canbax/namaz-vakti-api"
          append-icon="mdi-open-in-new"
        />
      </template>
    </v-app-bar>

    <v-main>
      <component :is="currentView" />
    </v-main>
  </v-app>
</template>

<style scoped></style>
