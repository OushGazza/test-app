import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import './assets/main.css'

const app = createApp(App)

const vuetify = createVuetify({
	components,
	directives,
theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#f5f7fa',
          surface: '#ffffff',
          primary: '#1976D2',
          secondary: '#424242',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#121212',
          surface: '#1e1e1e',
          primary: '#90CAF9',
          secondary: '#E0E0E0',
        },
      },
    },
  },
})


app.use(router)
app.use(vuetify)
app.mount('#app')
