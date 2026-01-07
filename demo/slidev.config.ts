import { defineConfig } from '@slidev/cli'

export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        external: ['@vueuse/core']
      }
    }
  }
})
