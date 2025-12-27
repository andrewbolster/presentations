<template>
  <div class="slidev-layout default">
    <div class="corner-logo">
      <img :src="`${base}logos/BlackDuckIcon.svg`" alt="Black Duck" class="h-12" />
    </div>
    <div class="slide-content">
      <slot />
    </div>
    <div class="slide-footer">
      Black Duck &copy; 2025
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const base = computed(() => import.meta.env.BASE_URL || '/')
</script>

<style scoped>
.default {
  padding: 4rem 5rem;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  color: var(--bd-text);
  opacity: 0.5;
  z-index: 5;
}

.slide-content h1 {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid var(--bd-primary);
}

.slide-content h2 {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}
</style>
