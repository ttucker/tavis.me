<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface HeroImageProps {
  currentPage?: string
  imgSrc: string
}

withDefaults(defineProps<HeroImageProps>(), {
  currentPage: 'home',
})

const isMobile = ref(false)
const isVisible = ref(false)

onMounted(() => {
  isMobile.value = window.matchMedia('(max-width: 768px)').matches
  isVisible.value = true
})
</script>

<template>
  <figure class="hero" :class="{ visible: isVisible, mobile: isMobile }">
    <img :src="imgSrc" :alt="currentPage" />
  </figure>
</template>

<style scoped>
.hero {
  background: oklch(0 0 0);
  height: 150px;
  margin: 0;
  opacity: 0;
  position: relative;
  transition: opacity 0.375s ease-in;
  will-change: opacity;
}

.hero img {
  height: 100%;
  object-fit: cover;
  object-position: top;
  width: 100%;
}

.hero.visible {
  opacity: 0.75;
}

@media screen and (min-width: 768px) {
  .hero {
    height: 100%;
    position: fixed;
    width: 100%;
  }

  .hero img {
    object-position: center;
  }
}

@media (prefers-color-scheme: light) {
  :global(html:not([data-theme='dark']) .hero) {
    background: oklch(1 0 0);
  }

  :global(html:not([data-theme='dark']) .hero.visible) {
    opacity: 0.9;
  }
}

:global(html[data-theme='light'] .hero) {
  background: oklch(1 0 0);
}

:global(html[data-theme='light'] .hero.visible) {
  opacity: 0.9;
}
</style>
