<script setup lang="ts">
import type { RequestParameter } from '@/types'
import EndPoint from '@/components/EndPoint.vue'
import type { Props as EndPointProps } from '@/components/EndPoint.vue'
import { getCurrentInstance, ref } from 'vue'
import { useBrowserLocation } from '@vueuse/core'
const instance = getCurrentInstance()
const dummyTranslateFunction = (key: string) => key
const $t = instance?.appContext.config.globalProperties.$t ?? dummyTranslateFunction
const location = useBrowserLocation()

const latitudeParam: RequestParameter = {
  name: 'lat',
  explanation: $t('latitudeParam_explanation'),
  isRequired: true
}
const longitudeParam: RequestParameter = {
  name: 'lng',
  explanation: $t('longitudeParam_explanation'),
  isRequired: true
}
const dateParam: RequestParameter = {
  name: 'date',
  explanation: $t('dateParam_explanation'),
  isRequired: false,
  defaultValue: $t('dateParam_default')
}
const daysParam = {
  name: 'days',
  explanation: $t('daysParam_explanation'),
  isRequired: false,
  defaultValue: '1'
}
const timezoneOffsetParam = {
  name: 'timezoneOffset',
  explanation: $t('timezoneOffsetParam_explanation'),
  isRequired: false,
  defaultValue: '0'
}
const calculationMethodParam = {
  name: 'calculationMethod',
  explanation: $t('calculationMethodParam_explanation'),
  isRequired: false,
  defaultValue: 'Turkey'
}
const countryParam = {
  name: 'country',
  explanation: $t('countryParam_explanation'),
  isRequired: true
}
const regionParam = { name: 'region', explanation: $t('regionParam_explanation'), isRequired: true }
const cityParam = { name: 'city', explanation: $t('cityParam_explanation'), isRequired: true }
const timesFromCoordinatesParams: RequestParameter[] = [
  latitudeParam,
  longitudeParam,
  dateParam,
  daysParam,
  timezoneOffsetParam,
  calculationMethodParam
]

const timesFromPlaceParams: RequestParameter[] = [
  countryParam,
  regionParam,
  cityParam,
  dateParam,
  daysParam,
  timezoneOffsetParam,
  calculationMethodParam
]

const endPoints: EndPointProps[] = [
  {
    id: 'timesFromCoordinates',
    title: $t('timesFromCoordinates_title'),
    explanation: $t('timesFromCoordinates_explanation'),
    links: [
      '/api/timesFromCoordinates?lat=39.91987&lng=32.85427&timezoneOffset=180',
      '/api/timesFromCoordinates?lat=39.91987&lng=32.85427&date=2023-10-29&days=3&timezoneOffset=180&calculationMethod=Turkey'
    ],
    parameters: timesFromCoordinatesParams
  },
  {
    id: 'timesFromPlace',
    title: $t('timesFromPlace_title'),
    explanation: $t('timesFromPlace_explanation'),
    links: [
      '/api/timesFromPlace?country=Turkey&region=Ankara&city=Ankara&timezoneOffset=180',
      '/api/timesFromPlace?country=Turkey&region=Ankara&city=Ankara&date=2023-10-29&days=3&timezoneOffset=180&calculationMethod=Turkey'
    ],
    parameters: timesFromPlaceParams
  },
  {
    id: 'countries',
    title: $t('countries_title'),
    explanation: $t('countries_explanation'),
    links: ['/api/countries'],
    parameters: []
  },
  {
    id: 'regions',
    title: $t('regions_title'),
    explanation: $t('regions_explanation'),
    links: ['/api/regions?country=Turkey'],
    parameters: [countryParam]
  },
  {
    id: 'cities',
    title: $t('cities_title'),
    explanation: $t('cities_explanation'),
    links: ['/api/cities??country=Germany&region=Bayern'],
    parameters: [countryParam, regionParam]
  },
  {
    id: 'coordinates',
    title: $t('coordinates_title'),
    explanation: $t('coordinates_explanation'),
    links: ['/api/coordinates?country=Turkey&region=Ankara&city=Ankara'],
    parameters: [countryParam, regionParam, cityParam]
  },
  {
    id: 'place',
    title: $t('place_title'),
    explanation: $t('place_explanation'),
    links: ['/api/place?lat=39.91987&lng=32.85427'],
    parameters: [latitudeParam, longitudeParam]
  }
]

const tab = ref(location.value.hash ? location.value.hash.split('#') : endPoints[0].id)
</script>

<template>
  <v-card class="ma-2">
    <div class="d-flex flex-row">
      <v-tabs v-model="tab" color="green" direction="vertical">
        <v-tab
          v-for="endPoint of endPoints"
          :key="endPoint.id"
          :value="endPoint.id"
          :href="'#' + endPoint.id"
        >
          {{ endPoint.title }}
        </v-tab>
      </v-tabs>

      <v-tabs-window v-model="tab">
        <v-tabs-window-item
          v-for="endPoint of endPoints"
          :key="'wi' + endPoint.id"
          :value="endPoint.id"
        >
          <v-card flat>
            <EndPoint
              :key="endPoint.id"
              :id="endPoint.id"
              :title="endPoint.title"
              :explanation="endPoint.explanation"
              :links="endPoint.links"
              :parameters="endPoint.parameters"
            />
          </v-card>
        </v-tabs-window-item>
      </v-tabs-window>
    </div>
  </v-card>
</template>

<style scoped></style>
