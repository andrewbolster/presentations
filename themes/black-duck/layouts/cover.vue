<template>
  <div class="slidev-layout cover brand">
    <div class="cover-content">
      <div class="cover-logo">
        <img :src="logoSrc" alt="Black Duck" class="h-32" />
      </div>
      <div class="cover-main">
        <slot />
      </div>
      <div class="cover-footer">
        <p class="tagline">True Scale Application Security</p>
        <p class="subheading">Uncompromised trust in software for the regulated, AI-powered world</p>
        <p class="copyright">Black Duck &copy; {{ currentYear }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useDark } from '@vueuse/core'

const isDark = useDark()
const base = computed(() => import.meta.env.BASE_URL || '/')
const currentYear = new Date().getFullYear()

const logoSrc = computed(() => {
  const logoFile = isDark.value ? 'BlackDuckLogo-OnDark.svg' : 'BlackDuckLogo.svg'
  return `${base.value}logos/${logoFile}`
})
</script>

<style scoped>
.cover.brand {
  background: linear-gradient(135deg, var(--bd-primary) 0%, #3d1a5a 100%);
}

.cover {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
}

.cover-content {
  width: 100%;
  max-width: 900px;
}

.cover-logo {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.cover-main {
  margin-bottom: 3rem;
}

.cover-main h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: white;
}

.cover-footer {
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  padding-top: 2rem;
}

.tagline {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: white;
}

.subheading {
  font-size: 1rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.8);
}

.copyright {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 1rem;
}

/* Light mode cover - use light background */
html:not(.dark) .cover.brand {
  background: linear-gradient(135deg, #f5f5f5 0%, white 100%);
}

html:not(.dark) .cover-main h1,
html:not(.dark) .tagline {
  color: var(--bd-text);
}

html:not(.dark) .subheading {
  color: var(--bd-text-secondary);
}

html:not(.dark) .copyright {
  color: var(--bd-text-secondary);
  opacity: 0.7;
}

html:not(.dark) .cover-footer {
  border-top: 2px solid var(--bd-border);
}
</style>
