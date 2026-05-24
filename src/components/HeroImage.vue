<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface HeroImageProps {
  currentPage?: string
  fullHeight?: boolean
  imgSrc: string
}

withDefaults(defineProps<HeroImageProps>(), {
  currentPage: 'home',
  fullHeight: false,
})

const isMobile = ref(false)
const isVisible = ref(false)

onMounted(() => {
  isMobile.value = window.matchMedia('(max-width: 768px)').matches
  isVisible.value = true
})
</script>

<template>
  <figure class="hero" :class="{ visible: isVisible, mobile: isMobile, 'hero--full-height': fullHeight }">
    <img :src="imgSrc" :alt="currentPage" />
  </figure>
</template>

<style scoped>
.hero {
  background: var(--hero-fallback-bg);
  height: 200px;
  margin: 0;
  opacity: 0;
  position: relative;
  transition: opacity 0.375s ease-in;
  will-change: opacity;
}

.hero img {
  display: block;
  height: 100%;
  object-fit: cover;
  object-position: top;
  width: 100%;
}

.hero.visible {
  opacity: 0.75;
}

.hero.hero--full-height {
  height: 100vh;
  overflow: hidden;
}

.hero.hero--full-height img {
  object-fit: cover;
  object-position: center;
}

@media screen and (min-width: 768px) {
  .hero {
    height: 100vh;
    inset: 0;
    position: fixed;
    width: 100%;
  }

  .hero img {
    object-position: center;
  }
}

@media (prefers-color-scheme: light) {
  :global(html:not([data-theme='dark']) .hero.visible) {
    opacity: 0.9;
  }
}

:global(html[data-theme='light'] .hero.visible) {
  opacity: 0.9;
}
</style>
