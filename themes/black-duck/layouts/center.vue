<template>
  <div class="slidev-layout center">
    <div class="center-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

.center-content {
  max-width: 800px;
}
</style>
