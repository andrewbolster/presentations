<template>
  <div class="slidev-layout end brand">
    <div class="end-content">
      <div class="end-logo">
        <img :src="logoSrc" alt="Black Duck" class="h-32" />
      </div>
      <div class="end-main">
        <slot />
      </div>
      <div class="end-footer">
        <p class="tagline">True Scale Application Security</p>
        <p class="copyright">Black Duck &copy; {{ currentYear }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const base = computed(() => import.meta.env.BASE_URL || '/')
const currentYear = new Date().getFullYear()

// Check dark mode by looking at document class (updated by Slidev)
const isDarkMode = computed(() => {
  if (typeof document !== 'undefined') {
    return document.documentElement.classList.contains('dark')
  }
  return false
})

const logoSrc = computed(() => {
  const logoFile = isDarkMode.value ? 'BlackDuckLogo-OnDark.svg' : 'BlackDuckLogo.svg'
  return `${base.value}theme/logos/${logoFile}`
})
</script>

<style scoped>
.end.brand {
  background: linear-gradient(135deg, var(--bd-primary) 0%, #3d1a5a 100%);
}

.end {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  height: 100%;
}

.end-content {
  width: 100%;
  max-width: 900px;
}

.end-logo {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.end-main {
  margin-bottom: 3rem;
}

.end-main h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
}

.end-footer {
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  padding-top: 2rem;
}

.tagline {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: white;
}

.copyright {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 1rem;
}

/* Light mode end slide */
html:not(.dark) .end.brand {
  background: linear-gradient(135deg, #f5f5f5 0%, white 100%);
}

html:not(.dark) .end-main h1,
html:not(.dark) .tagline {
  color: var(--bd-text);
}

html:not(.dark) .copyright {
  color: var(--bd-text-secondary);
  opacity: 0.7;
}

html:not(.dark) .end-footer {
  border-top: 2px solid var(--bd-border);
}
</style>
