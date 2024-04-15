<script setup lang="ts">
import type { RequestParameter } from '@/types'

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
  <div class="text-center">
    <h1>Docs</h1>
  </div>
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
      <a target="_blank" href="/api/regions?country=Germany"> /api/regions?country=Germany </a>
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
</template>

<style scoped></style>
