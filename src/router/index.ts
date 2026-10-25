import type { Component } from 'vue'
import { ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import { MAIN_NAV_ITEMS, type MainNavName } from '../constants/navigation'
import BioView from '../views/BioView.vue'
import ContactView from '../views/ContactView.vue'
import HomeView from '../views/HomeView.vue'
import MissionView from '../views/MissionView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ResumeView from '../views/ResumeView.vue'
import ServicesView from '../views/ServicesView.vue'

export const isBackNavigation = ref(false)

const navRouteComponents: Record<MainNavName, Component> = {
  bio: BioView,
  mission: MissionView,
  projects: ProjectsView,
  services: ServicesView,
  contact: ContactView,
  resume: ResumeView,
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Home | tavis.me | Tavis Tucker' },
    },
    ...MAIN_NAV_ITEMS.map((item) => ({
      path: item.to,
      name: item.name,
      component: navRouteComponents[item.name],
      meta: { title: item.title },
    })),
  ],
})

router.beforeEach((_to, from, next) => {
  const state = window.history.state as { forward?: string | null } | null
  isBackNavigation.value = Boolean(state?.forward && state.forward === from.fullPath)

  next()
})

router.afterEach((to: { meta: Record<string, unknown> }) => {
  const title = typeof to.meta.title === 'string' ? to.meta.title : 'tavis.me | Tavis Tucker'
  document.title = title
})

export default router
