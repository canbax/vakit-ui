<script setup lang="ts">
import { useRoute } from '@/composables/route'

const { setViewFromPathMenuItem } = useRoute()

function openDocs() {
  setViewFromPathMenuItem('docs')
}

function openSupport() {
  setViewFromPathMenuItem('support')
}

function openGithub() {
  window.open('https://github.com/canbax/namaz-vakti-api', '_blank')
}
</script>

<template>
  <div class="bg-green">
    <v-img class="mx-auto" height="200" src="../src/assets/logo.png">
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
        :subtitle="'Ücretsiz ve limitsiz kullanım'"
        :title="'Ücretsiz'"
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
        :subtitle="$t('openSourceExplanation')"
        :title="'Reklamsız'"
      >
        <v-card-actions>
          <v-btn
            @click="openSupport"
            class="px-4"
            variant="elevated"
            append-icon="mdi-hand-heart"
            size="large"
            >{{ $t('support') }}</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card
        class="ma-2 pa-2"
        prepend-icon="mdi-github"
        :subtitle="$t('openSourceExplanation')"
        :title="$t('openSource')"
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
</template>

<style scoped></style>
