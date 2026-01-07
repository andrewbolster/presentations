<template>
  <div class="slidev-layout two-cols">
    <div class="grid-container">
      <div class="left-col">
        <slot />
      </div>
      <div class="right-col">
        <slot name="right" />
      </div>
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

<style scoped>
.two-cols {
  padding: 2rem 5rem;
  position: relative;
  height: 100%;
  background: var(--bd-bg);
  color: var(--bd-text);
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  height: calc(100% - 3rem);
}

.left-col :deep(h1),
.right-col :deep(h1) {
  font-size: 2rem !important;
  margin-bottom: 0.75rem !important;
  margin-top: 0 !important;
  padding-bottom: 0.375rem !important;
  border-bottom: 3px solid var(--bd-primary) !important;
  color: var(--bd-text) !important;
}

.left-col :deep(h2),
.right-col :deep(h2) {
  font-size: 1.5rem !important;
  margin-top: 1rem !important;
  margin-bottom: 0.75rem !important;
  color: var(--bd-text) !important;
}

.left-col :deep(ul),
.right-col :deep(ul) {
  list-style: none !important;
  padding-left: 0 !important;
}

.left-col :deep(li),
.right-col :deep(li) {
  margin-bottom: 0.75rem !important;
  padding-left: 1.5rem !important;
  position: relative !important;
  line-height: 1.6 !important;
  list-style: none !important;
}

.left-col :deep(li::before),
.right-col :deep(li::before) {
  content: '' !important;
  position: absolute !important;
  left: 0 !important;
  top: 0.6em !important;
  width: 0.5rem !important;
  height: 0.5rem !important;
  background: var(--bd-primary) !important;
  border-radius: 50% !important;
  display: block !important;
}

.slide-footer {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
  color: var(--bd-text-secondary);
  opacity: 0.7;
}
</style>
