<template>
  <SiteHeader />
  <div class="route-stage">
    <RouterView v-slot="{ Component, route }">
      <Transition
        :appear="!isMobileViewport"
        :name="isBackNavigation ? 'back' : 'forward'"
        :duration="transitionDuration"
        @after-enter="handleAfterEnter"
      >
        <component :is="Component" :key="route.fullPath" class="route-page" />
      </Transition>
    </RouterView>
  </div>
  <SiteFooter />
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'

import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
import { HERO_IMAGE_SRCS } from './constants/navigation'
import { isBackNavigation } from './router'

const isMobileViewport = ref(false)
let viewportQuery: MediaQueryList | null = null

const syncViewportMode = () => {
  isMobileViewport.value = viewportQuery?.matches ?? false
}

const preloadHeroImages = () => {
  for (const src of HERO_IMAGE_SRCS) {
    const image = new Image()
    image.decoding = 'async'
    image.src = src
  }
}

onMounted(() => {
  preloadHeroImages()
  viewportQuery = window.matchMedia('(max-width: 767px)')
  syncViewportMode()
  viewportQuery.addEventListener('change', syncViewportMode)
})

onBeforeUnmount(() => {
  viewportQuery?.removeEventListener('change', syncViewportMode)
})

const transitionDuration = computed(() => {
  if (isMobileViewport.value) {
    return { enter: 0, leave: 0 }
  }

  return { enter: 800, leave: 500 }
})

const handleAfterEnter = () => {
  isBackNavigation.value = false
}
</script>
