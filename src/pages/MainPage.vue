<script setup lang="ts">
import { useRoute } from '@/composables/route'

const { currentPathMenuItem } = useRoute()

function openDocs() {
  currentPathMenuItem.value = 'docs'
}

function openDonate() {
  currentPathMenuItem.value = 'donate'
}

function openGithub() {
  window.open('https://github.com/canbax/namaz-vakti-api', '_blank')
}
</script>

<template>
  <div class="d-flex flex-column h100">
    <div class="bg-green">
      <v-img class="mx-auto" height="200" src="/assets/logo.png">
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
          </div>
        </template>
      </v-img>
      <div class="text-center text-h3 pa-8">Namaz Vakti API</div>
    </div>
    <v-container fluid>
      <v-row align="center" justify="center" class="d-flex">
        <v-card
          class="ma-2 pa-2"
          prepend-icon="mdi-currency-usd-off"
          :subtitle="$t('freeAndLimitlessUsage')"
          :title="$t('free')"
          width="300"
        >
          <v-card-actions>
            <v-btn
              @click="openDocs"
              class="px-4"
              variant="elevated"
              append-icon="mdi-play-circle"
              size="large"
              >{{ $t('docs') }}</v-btn
            >
          </v-card-actions>
        </v-card>
        <v-card
          class="ma-2 pa-2"
          prepend-icon="mdi-advertisements-off"
          :subtitle="$t('adFreeExplanation')"
          :title="$t('adFree')"
          width="300"
        >
          <v-card-actions>
            <v-btn
              @click="openDonate"
              class="px-4"
              variant="elevated"
              append-icon="mdi-hand-heart"
              size="large"
              >{{ $t('donate') }}</v-btn
            >
          </v-card-actions>
        </v-card>
        <v-card
          class="ma-2 pa-2"
          prepend-icon="mdi-github"
          :subtitle="$t('openSourceExplanation')"
          :title="$t('openSource')"
          width="300"
        >
          <v-card-actions>
            <v-btn
              @click="openGithub"
              variant="elevated"
              class="px-4"
              size="large"
              append-icon="mdi-open-in-new"
            >
              GitHub
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
    <div class="text-decoration-none footer mt-auto">
      This site or product includes IP2Location LITE data available from
      <a href="https://lite.ip2location.com">https://lite.ip2location.com</a>.
    </div>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  text-align: center;
  font-size: x-small;
}
.h100 {
  height: 100%;
}
</style>
