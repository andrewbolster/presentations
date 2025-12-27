import { defineAppSetup } from '@slidev/types'
import Logo from './components/Logo.vue'

export default defineAppSetup(({ app }) => {
  // Register Logo component globally
  app.component('Logo', Logo)
})
