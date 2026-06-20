<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

type HeroImageAlign = 'top' | 'bottom'

interface HeroImageProps {
  currentPage?: string
  imgSrc: string
  imageAlign?: HeroImageAlign
}

const props = withDefaults(defineProps<HeroImageProps>(), {
  currentPage: 'home',
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
  <figure :class="{ visible: isVisible }">
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
  transition: opacity 0.25s ease-in;
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
}

@include desktop-up {
  figure {
    height: 100vh;
    inset: 0;
    pointer-events: none;
    position: fixed;
    width: 100%;
  }
}

</style>
