<script setup lang="ts">
import { onMounted, ref } from 'vue'

type HeroImageAlign = 'top' | 'bottom'

interface HeroImageProps {
  imgSrc: string
  imageAlign?: HeroImageAlign
}

const props = defineProps<HeroImageProps>()

const isVisible = ref(false)

onMounted(() => {
  isVisible.value = true
})
</script>

<template>
  <figure :class="{ visible: isVisible }">
    <img
      :src="imgSrc"
      alt=""
      aria-hidden="true"
      :style="props.imageAlign ? { objectPosition: props.imageAlign } : undefined"
    />
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
