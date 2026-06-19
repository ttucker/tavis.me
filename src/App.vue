<template>
  <SiteHeader />
    <RouterView v-slot="{ Component, route }">
      <SiteContent v-if="isMobileViewport" :key="route.fullPath">
        <component :is="Component" />
      </SiteContent>
      <Transition
        v-else
        :appear="true"
        :name="isBackNavigation ? 'back' : 'forward'"
        :duration="transitionDuration"
        @after-enter="handleAfterEnter"
      >
        <SiteContent :key="route.fullPath">
          <component :is="Component" />
        </SiteContent>
      </Transition>
    </RouterView>
  <SiteFooter />
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'

import SiteContent from './components/SiteContent.vue'
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

const transitionDuration = { enter: 800, leave: 500 }

const handleAfterEnter = () => {
  isBackNavigation.value = false
}
</script>
