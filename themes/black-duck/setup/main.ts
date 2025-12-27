import { defineAppSetup } from '@slidev/types'
import Logo from '../components/Logo.vue'

export default defineAppSetup(({ app, router }) => {
  // Register Logo component globally
  app.component('Logo', Logo)
})
