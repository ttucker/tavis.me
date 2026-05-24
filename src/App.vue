<template>
  <div class="app-shell">
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
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'

import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
import { HERO_IMAGE_SRCS } from './constants/navigation'
import { isBackNavigation } from './router'

const isMobileViewport = ref(false)

const preloadHeroImages = () => {
  for (const src of HERO_IMAGE_SRCS) {
    const image = new Image()
    image.decoding = 'async'
    image.src = src
  }
}

onMounted(() => {
  isMobileViewport.value = window.matchMedia('(max-width: 767px)').matches
  preloadHeroImages()
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
