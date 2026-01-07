import type { App } from 'vue'
import Logo from '../components/Logo.vue'

export default (ctx: { app: App }) => {
  // Register Logo component globally
  ctx.app.component('Logo', Logo)
}
