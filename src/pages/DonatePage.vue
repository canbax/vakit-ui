<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { getCurrentInstance, ref } from 'vue'
const { copy } = useClipboard({ legacy: true })
const snackbar = ref(false)
const copiedText = ref('')
const instance = getCurrentInstance()
const dummyTranslateFunction = (key: string) => key
const $t = instance?.appContext.config.globalProperties.$t ?? dummyTranslateFunction

function copyText(text: string) {
  copy(text)
  copiedText.value = `"${text}"${$t('isCopied')}`
  snackbar.value = true
}

function openGitHubSponsors() {
  window.open('https://github.com/sponsors/canbax', '_blank')
}
</script>

<template>
  <div class="text-h1 text-center">
    <v-icon color="red" icon="mdi-hand-heart" size="x-large"></v-icon>
  </div>
  <v-alert class="ma-4" :text="$t('donatePageText')"> </v-alert>

  <v-container fluid>
    <v-row align="center" justify="center" class="d-flex">
      <v-card class="ma-2 pa-2" :title="$t('transferToBankAccount')" width="400" height="150">
        <v-card-text>
          <div>
            <span> Yusuf Sait Canbaz </span>
            <v-btn size="x-small" icon="mdi-content-copy" @click="copyText('Yusuf Sait Canbaz')">
            </v-btn>
          </div>
          <div>
            <span> Ziraat Bank TR53 0001 0090 1024 9249 7050 01 </span>
            <v-btn
              size="x-small"
              icon="mdi-content-copy"
              @click="copyText('TR53 0001 0090 1024 9249 7050 01')"
            >
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
      <v-card
        class="ma-2 pa-2"
        title="GitHub"
        :link="true"
        @click="openGitHubSponsors"
        width="400"
        height="150"
      >
        <v-card-text> {{ $t('githubSponsorExplanation') }} </v-card-text>
      </v-card>
    </v-row>
  </v-container>
  <v-snackbar v-model="snackbar">
    {{ copiedText }}

    <template v-slot:actions>
      <v-btn icon="mdi-close" @click="snackbar = false"> </v-btn>
    </template>
  </v-snackbar>
</template>

<style scoped></style>
