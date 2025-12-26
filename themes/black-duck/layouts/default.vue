<template>
  <div class="slidev-layout default">
    <div class="corner-logo">
      <Logo variant="icon" size="small" />
    </div>
    <div class="slide-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import Logo from '../components/Logo.vue'
</script>

<style scoped>
.default {
  padding: 4rem 5rem;
  position: relative;
}

.corner-logo {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  opacity: 0.6;
}

.slide-content {
  height: 100%;
  display: flex;
  flex-direction: column;
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
