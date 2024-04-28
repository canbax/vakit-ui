<script setup lang="ts">
import type { RequestParameter } from '@/types'
import EndPoint from '@/components/EndPoint.vue'

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
  <v-card :title="$t('usage')">
    <v-card-item>
      <EndPoint
        title="Koordinatlardan vakit verileri"
        explanation="GPS coordinatlarından vakti hesaplar"
        link="/api/timesFromCoordinates?lat=39.91987&lng=32.85427&date=2023-10-29&days=3&timezoneOffset=180&calculationMethod=Turkey"
        :parameters="timesFromCoordinatesParams"
      />
      <EndPoint
        title="Mahalden vakit verileri:"
        explanation="Mahal isminden vakti hesaplar"
        link="/api/timesFromPlace?country=Turkey&region=Ankara&city=Ankara&date=2023-10-29&days=3&timezoneOffset=180&calculationMethod=Turkey"
        :parameters="timesFromCoordinatesParams"
      />

      <EndPoint
        title="Ülkelerin listesi:"
        explanation="Mahal isminden vakti hesaplar"
        link="/api/countries"
        :parameters="timesFromCoordinatesParams"
      />

      <EndPoint
        title="Şehirlerin/Eyaletlerin listesi:"
        explanation="Mahal isminden vakti hesaplar"
        link="/api/regions?country=Germany"
        :parameters="timesFromCoordinatesParams"
      />

      <EndPoint
        title="İlçelerin/Bölgelerin listesi:"
        explanation="Mahal isminden vakti hesaplar"
        link="/api/cities?country=Germany&region=Bayern"
        :parameters="timesFromCoordinatesParams"
      />

      <EndPoint
        title="Koordinatını bul:"
        explanation="Mahal isminden vakti hesaplar"
        link="/api/coordinates?country=Turkey&region=Ankara&city=Ankara"
        :parameters="timesFromCoordinatesParams"
      />

      <EndPoint
        title="Koordinatlardan yer bul: "
        explanation="Mahal isminden vakti hesaplar"
        link="/api/place?lat=39.91987&lng=32.85427"
        :parameters="timesFromCoordinatesParams"
      />
    </v-card-item>
  </v-card>
</template>

<style scoped></style>
