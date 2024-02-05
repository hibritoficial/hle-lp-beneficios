/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#f9f9f9', // Cinza Muito Claro
          secondary: '#62137e', // Roxo 
          terciary: '#ff4f00', // Laranja
          quartiary: 'f2f2f2', // Cinza Claro
          quintenary: '#555555' // Cinza Escuro
        },
      },
    },
  },
})
