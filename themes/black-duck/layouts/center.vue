<template>
  <div class="slidev-layout center">
    <div class="center-content">
      <slot />
    </div>
    <div class="slide-footer">
      Black Duck &copy; {{ currentYear }}
    </div>
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 4rem;
  position: relative;
  height: 100%;
}

.center-content {
  max-width: 800px;
}

.slide-footer {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
  color: var(--bd-text);
  opacity: 0.5;
}
</style>
