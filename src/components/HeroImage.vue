<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

interface HeroImageProps {
  currentPage?: string
  fullHeight?: boolean
  imgSrc: string
  objectPosition?: string
}

const props = withDefaults(defineProps<HeroImageProps>(), {
  currentPage: 'home',
  fullHeight: false,
})

const isVisible = ref(false)
const resolvedObjectPosition = computed(() => {
  if (props.objectPosition) {
    return props.objectPosition
  }

  if (props.fullHeight) {
    return 'center'
  }

  return undefined
})

const imageStyle = computed(() => {
  if (!resolvedObjectPosition.value) {
    return undefined
  }

  return {
    objectPosition: resolvedObjectPosition.value,
  }
})

onMounted(() => {
  isVisible.value = true
})
</script>

<template>
  <figure class="hero" :class="{ visible: isVisible, 'hero--full-height': fullHeight }">
    <img :src="imgSrc" :alt="currentPage" :style="imageStyle" />
  </figure>
</template>

<style scoped lang="scss">
.hero {
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
    object-position: top;
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
  .hero {
    height: 100vh;
    inset: 0;
    position: fixed;
    width: 100%;

    img {
      object-position: center;
    }
  }
}

</style>
