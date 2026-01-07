<template>
  <div class="slidev-layout center">
    <div class="center-content">
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

const currentYear = new Date().getFullYear()
const { $slidev } = useSlideContext()

const footerText = computed(() => {
  return $slidev?.configs?.slideFooter || `Black Duck © ${currentYear}`
})
</script>

<style>
.slidev-layout.center {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 4rem;
  position: relative;
  height: 100%;
  background: var(--bd-bg);
  color: var(--bd-text);
}

.slidev-layout.center .center-content {
  max-width: 800px;
  width: 100%;
}

.slidev-layout.center h1 {
  font-size: 3rem !important;
  margin-bottom: 1.5rem !important;
  color: var(--bd-text) !important;
  font-weight: 700 !important;
}

.slidev-layout.center h2 {
  font-size: 2rem !important;
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
  color: var(--bd-text) !important;
  font-weight: 600 !important;
}

.slidev-layout.center h3 {
  font-size: 1.5rem !important;
  margin-top: 0.75rem !important;
  margin-bottom: 0.75rem !important;
  color: var(--bd-text-secondary) !important;
}

.slidev-layout.center .slide-footer {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
  color: var(--bd-text-secondary);
  opacity: 0.7;
}

/* Accent variant for center layout */
.slidev-layout.center.accent {
  background: var(--bd-primary) !important;
  color: var(--bd-bg-light) !important;
}

.slidev-layout.center.accent h1,
.slidev-layout.center.accent h2,
.slidev-layout.center.accent h3 {
  color: var(--bd-bg-light) !important;
}

.slidev-layout.center.accent .slide-footer {
  color: var(--bd-bg-light) !important;
}
</style>
