<template>
  <div class="slidev-layout cover brand">
    <div class="cover-content">
      <div class="cover-logo">
        <img src="/presentations/demo/logos/BlackDuckLogo-OnDark.svg" alt="Black Duck" class="h-32" />
      </div>
      <div class="cover-main">
        <slot />
      </div>
      <div class="cover-footer">
        <p class="tagline">True Scale Application Security</p>
        <p class="subheading">Uncompromised trust in software for the regulated, AI-powered world</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Inline logo for now to simplify debugging
</script>

<style scoped>
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
  color: var(--bd-bg-light);
}

.cover-footer {
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  padding-top: 2rem;
}

.tagline {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--bd-bg-light);
}

.subheading {
  font-size: 1rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.8);
}
</style>
