<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

type HeroImageAlign = 'top' | 'bottom'

interface HeroImageProps {
  currentPage?: string
  fullHeight?: boolean
  imgSrc: string
  imageAlign?: HeroImageAlign
}

const props = withDefaults(defineProps<HeroImageProps>(), {
  currentPage: 'home',
  fullHeight: false,
})

const isVisible = ref(false)
const imageStyle = computed(() => {
  if (!props.imageAlign) {
    return undefined
  }

  return {
    objectPosition: props.imageAlign,
  }
})

onMounted(() => {
  isVisible.value = true
})
</script>

<template>
  <figure :class="{ visible: isVisible, 'hero--full-height': fullHeight }">
    <img :src="imgSrc" :alt="currentPage" :style="imageStyle" />
  </figure>
</template>

<style scoped lang="scss">
figure {
  background: var(--hero-fallback-bg);
  height: pxToRem(200);
  margin: 0;
  opacity: 0;
  position: relative;
  transition: opacity 0.375s ease-in;
  will-change: opacity;

  img {
    display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  &.visible {
    opacity: var(--hero-visible-opacity);
  }

  &.hero--full-height {
    height: 100vh;
    overflow: hidden;
  }
}

@include desktop-up {
  figure {
    height: 100vh;
    inset: 0;
    position: fixed;
    width: 100%;
  }
}

</style>
