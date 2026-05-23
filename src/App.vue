<template>
  <div class="app-shell">
    <SiteHeader />
    <div class="route-stage">
      <RouterView v-slot="{ Component, route }">
        <Transition
          appear
          :name="isBackNavigation ? 'back' : 'forward'"
          :duration="{ enter: 800, leave: 650 }"
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
import { RouterView } from 'vue-router'

import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
import { isBackNavigation } from './router'

const handleAfterEnter = () => {
  isBackNavigation.value = false
}
</script>
