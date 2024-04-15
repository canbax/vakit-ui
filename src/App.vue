<script setup lang="ts">
import { ref } from 'vue'
import EndPoint from './components/EndPoint.vue'
import type { RequestParameter } from '@/types'

const currentLanguage = ref('tr')
const timesFromCoordinatesParams: RequestParameter[] = [
  { name: 'lat', explanation: 'Latitude', isRequired: true },
  { name: 'lng', explanation: 'Longitude', isRequired: true },
  { name: 'date', explanation: 'Date', isRequired: false, defaultValue: 'Today' },
  {
    name: 'days',
    explanation: 'Number of days for calculation',
    isRequired: false,
    defaultValue: '100'
  },
  {
    name: 'timezoneOffset',
    explanation: 'timezone offset in minutes',
    isRequired: false,
    defaultValue: '0'
  },
  {
    name: 'calculationMethod',
    explanation: 'Method of calculation',
    isRequired: false,
    defaultValue: 'Turkey'
  }
]
</script>

<template>
  <v-app>
    <v-card title="Namaz Vakti API (1.1.0)" :subtitle="$t('shortSummary')">
      <template #prepend>
        <v-img :width="50" aspect-ratio="1/1" src="/src/assets/logo.png"></v-img>
      </template>

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
        <a target="_blank" href="https://github.com/canbax/namaz-vakti-api">
          <v-icon icon="mdi-github"> </v-icon>
          {{ $t('openSource') }}
        </a>
      </template>
      <v-card-item>
        {{ $t('freeAdFree') }}
        <a target="_blank" href="https://github.com/canbax/namaz-vakti"> namaz-vakti </a>
        {{ $t('builtForApp') }}
        <a
          target="_blank"
          href="https://www.postman.com/canbax/workspace/namaz-vakti-api/api/bf039fea-6768-490b-b11d-11bb031bdd8a"
        >
          {{ $t('postmanApiDefinition') }}
        </a>

        <v-card :title="$t('usage')">
          <v-card-item>
            <EndPoint
              title="Koordinatlardan vakit verileri"
              explanation="GPS coordinatlarından vakti hesaplar"
              link="/api/timesFromCoordinates?lat=39.91987&lng=32.85427&date=2023-10-29&days=3&timezoneOffset=180&calculationMethod=Turkey"
              :parameters="timesFromCoordinatesParams"
            />
            <a target="_blank" href="">
              /api/timesFromCoordinates?lat=39.91987&lng=32.85427&date=2023-10-29&days=3&timezoneOffset=180&calculationMethod=Turkey
            </a>
            <br />
            <span>Mahalden vakit verileri: </span>
            <a
              target="_blank"
              href="/api/timesFromPlace?country=Turkey&region=Ankara&city=Ankara&date=2023-10-29&days=3&timezoneOffset=180&calculationMethod=Turkey"
            >
              /api/timesFromPlace?country=Turkey&amp;region=Ankara&city=Ankara&date=2023-10-29&days=3&timezoneOffset=180&calculationMethod=Turkey
            </a>
            <br />
            <span>Ülkelerin listesi: </span>
            <a target="_blank" href="/api/countries"> /api/countries </a>
            <br />
            <span>Şehirlerin/Eyaletlerin listesi: </span>
            <a target="_blank" href="/api/regions?country=Germany">
              /api/regions?country=Germany
            </a>
            <br />
            <span>İlçelerin/Bölgelerin listesi: </span>
            <a target="_blank" href="/api/cities?country=Germany&region=Bayern">
              <span>/api/cities?country=Germany&amp;region=Bayern</span>
            </a>
            <br />
            <span>Koordinatını bul: </span>
            <a target="_blank" href="/api/coordinates?country=Turkey&region=Ankara&city=Ankara">
              <span>/api/coordinates?country=Turkey&amp;region=Ankara&city=Ankara</span>
            </a>
            <br />
            <span>Koordinatlardan yer bul: </span>
            <a target="_blank" href="/api/place?lat=39.91987&lng=32.85427">
              <span>/api/place?lat=39.91987&lng=32.85427</span>
            </a>
            <br />
            <span>IP adresi: </span>
            <a target="_blank" href="/api/ip"> /api/ip </a>
          </v-card-item>
        </v-card>

        <br />
        <h2>Bağış</h2>
        Namaz Vakti API ile ücretsiz, reklamsız ancak yüksek kalitede bir hizmet sunmaya
        çalışıyoruz. Sunucu masrafları, zaman, emek harcıyoruz. Yapacağınız 1 liralık bir bağış bile
        aşk, şevk ve motivasyon doğurarak bu hizmetlerimizin devamlılığına ve daha iyi olmasına
        katkı sağlayacaktır.

        <br /><br />
        Yusuf Sait Canbaz
        <br />
        Ziraat Bankası TR53 0001 0090 1024 9249 7050 01
      </v-card-item>
    </v-card>
    <v-footer>
      This site or product includes IP2Location LITE data available from
      <a href="https://lite.ip2location.com">https://lite.ip2location.com</a>
    </v-footer>
  </v-app>
</template>

<style scoped></style>
