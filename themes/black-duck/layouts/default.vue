<template>
  <div class="slidev-layout default">
    <div class="corner-logo">
      <img :src="logoSrc" alt="Black Duck" class="h-12" />
    </div>
    <div class="slide-content">
      <slot />
    </div>
    <div class="slide-footer">
      {{ footerText }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const base = computed(() => import.meta.env.BASE_URL || '/')
const currentYear = new Date().getFullYear()
const { $slidev } = useSlideContext()

// Check dark mode by looking at document class (updated by Slidev)
const isDarkMode = computed(() => {
  if (typeof document !== 'undefined') {
    return document.documentElement.classList.contains('dark')
  }
  return false
})

const logoSrc = computed(() => {
  const logoFile = isDarkMode.value ? 'BlackDuckIcon-OnDark.svg' : 'BlackDuckIcon.svg'
  return `${base.value}theme/logos/${logoFile}`
})

const footerText = computed(() => {
  return $slidev?.configs?.slideFooter || `Black Duck © ${currentYear}`
})
</script>

<style scoped>
.default {
  padding: 2rem 5rem;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--bd-bg);
  color: var(--bd-text);
}

.corner-logo {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  opacity: 0.6;
  z-index: 10;
}

.slide-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.slide-footer {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
  color: var(--bd-text-secondary);
  opacity: 0.7;
  z-index: 5;
}

.slide-content :deep(h1) {
  font-size: 2.5rem !important;
  margin-bottom: 1rem !important;
  margin-top: 0 !important;
  padding-bottom: 0.5rem !important;
  border-bottom: 3px solid var(--bd-primary) !important;
  color: var(--bd-text) !important;
}

.slide-content :deep(h2) {
  font-size: 1.8rem !important;
  margin-top: 1.5rem !important;
  margin-bottom: 1rem !important;
  color: var(--bd-text) !important;
}

.slide-content :deep(h3) {
  font-size: 1.4rem !important;
  margin-top: 1rem !important;
  margin-bottom: 0.75rem !important;
  color: var(--bd-text) !important;
}
</style>
