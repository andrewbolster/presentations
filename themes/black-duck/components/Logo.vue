<template>
  <img
    :src="logoSrc"
    alt="Black Duck"
    :class="logoClass"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  variant?: 'full' | 'icon'
  size?: 'small' | 'medium' | 'large'
  dark?: boolean
}>()

const logoSrc = computed(() => {
  const isDark = props.dark
  const isIcon = props.variant === 'icon'

  if (isIcon) {
    return isDark ? '/logos/BlackDuckIcon-OnDark.svg' : '/logos/BlackDuckIcon.svg'
  }

  return isDark ? '/logos/BlackDuckLogo-OnDark.svg' : '/logos/BlackDuckLogo.svg'
})

const logoClass = computed(() => {
  const sizes = {
    small: 'h-12',
    medium: 'h-20',
    large: 'h-32'
  }
  return sizes[props.size || 'medium']
})
</script>

<style scoped>
img {
  height: auto;
  width: auto;
  max-width: 100%;
}

.h-12 {
  height: 3rem;
}

.h-20 {
  height: 5rem;
}

.h-32 {
  height: 8rem;
}
</style>
