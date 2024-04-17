<script setup lang="ts">
import APILink from '@/components/APILink.vue'
</script>

<template>
  <v-img class="mx-auto" height="200" src="../src/assets/logo.png">
    <template v-slot:placeholder>
      <div class="d-flex align-center justify-center fill-height">
        <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
      </div>
    </template>
  </v-img>
  <div class="text-center text-h3 pa-8">Namaz Vakti API</div>

  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="4">
        <v-card
          append-icon="mdi-open-in-new"
          class="mx-auto"
          href="https://github.com/canbax/namaz-vakti-api"
          prepend-icon="mdi-github"
          rel="noopener"
          :subtitle="'Ücretsiz ve limitsiz kullanım'"
          target="_blank"
          :title="'Ücretsiz'"
        />
      </v-col>

      <v-col cols="4">
        <v-card
          append-icon="mdi-open-in-new"
          class="mx-auto"
          href="https://github.com/canbax/namaz-vakti-api"
          prepend-icon="mdi-github"
          rel="noopener"
          :subtitle="$t('openSourceExplanation')"
          target="_blank"
          :title="'Reklamsız'"
        />
      </v-col>

      <v-col cols="4">
        <v-card
          append-icon="mdi-open-in-new"
          class="mx-auto"
          href="https://github.com/canbax/namaz-vakti-api"
          prepend-icon="mdi-github"
          rel="noopener"
          :subtitle="$t('openSourceExplanation')"
          target="_blank"
          :title="$t('openSource')"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
