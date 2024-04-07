import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from '@/plugins/i18n'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

const app = createApp(App)
app.use(i18n)
app.use(createVuetify())
app.mount('#app')
