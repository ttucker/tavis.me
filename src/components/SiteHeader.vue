<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { MAIN_NAV_ITEMS } from '../constants/navigation'
import { useTheme } from '../composables/useTheme'

const route = useRoute()
const isMenuOpen = ref(true)
const { isDarkTheme, toggleTheme } = useTheme()

const themeToggleLabel = computed(() => {
  return isDarkTheme.value ? 'Switch to light theme' : 'Switch to dark theme'
})

const themeToggleIcon = computed(() => {
  return isDarkTheme.value ? '☀' : '☽'
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header :class="{ 'is-menu-open': isMenuOpen }">
    <RouterLink to="/">
      <h1>tavis.me</h1>
      <h2>The Curriculum Vitae</h2>
    </RouterLink>
    <button
      aria-controls="primary-navigation"
      :aria-expanded="isMenuOpen"
      aria-label="Toggle navigation menu"
      class="menu-toggle"
      type="button"
      @click="toggleMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <button
      :aria-label="themeToggleLabel"
      class="theme-toggle"
      :class="isDarkTheme ? 'theme-toggle--sun' : 'theme-toggle--moon'"
      type="button"
      @click="toggleTheme"
    >{{ themeToggleIcon }}</button>
    <nav id="primary-navigation" aria-label="Primary" :class="{ open: isMenuOpen }">
      <ul>
        <li v-for="item in MAIN_NAV_ITEMS" :key="item.to">
          <RouterLink :to="item.to" :class="{ current: route.path === item.to }">{{ item.label }}</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: var(--header-bg);
  color: oklch(1 0 0);
  min-height: pxToRem(62);
  text-transform: uppercase;
  z-index: 5;

  > a {
    align-items: center;
    display: inline-flex;
    flex-direction: column;
    height: pxToRem(62);
    justify-content: center;
    left: pxToRem(10);
    padding: 0;
    position: absolute;
    text-shadow: var(--header-link-shadow);
    top: 0;

    * {
      color: var(--header-link-color-mobile);
      margin: 0;
      text-align: center;
    }
  }

  h1 {
    font-family: CardoCustom, Times, 'Times New Roman', serif;
    font-size: pxToRem(28);
    font-weight: 400;
    letter-spacing: pxToRem(3);
    line-height: pxToRem(24);
  }

  h2 {
    font-size: pxToRem(11);
    font-weight: 400;
    letter-spacing: pxToRem(1.9);
  }

  li {
    display: inline-block;
    width: 50%;

    a {
      display: block;
      padding: pxToRem(14) pxToRem(10);
    }
  }
}

.menu-toggle {
  align-items: center;
  appearance: none;
  background: transparent;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  gap: pxToRem(5);
  justify-content: center;
  min-height: pxToRem(40);
  min-width: pxToRem(40);
  padding: 0;
  position: absolute;
  right: pxToRem(10);
  top: pxToRem(11);

  span {
    background-color: var(--header-menu-toggle-color);
    border-radius: pxToRem(1);
    display: block;
    height: pxToRem(2);
    transition: transform 0.3s ease, opacity 0.3s ease;
    width: pxToRem(22);
  }
}

.is-menu-open {
  .menu-toggle span {
    &:nth-child(1) {
      transform: translateY(pxToRem(7)) rotate(45deg);
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      transform: translateY(pxToRem(-7)) rotate(-45deg);
    }
  }
}

.theme-toggle {
  --theme-toggle-x: 0;
  align-items: center;
  appearance: none;
  background: transparent;
  border: 0;
  color: var(--header-theme-toggle-color-mobile);
  cursor: pointer;
  display: inline-flex;
  height: pxToRem(40);
  justify-content: center;
  line-height: 1;
  padding: 0;
  position: absolute;
  right: pxToRem(52);
  font-size: pxToRem(28);
  top: pxToRem(11);
  transition: transform 0.5s ease;
  width: pxToRem(40);
}

.theme-toggle--moon {
  transform: translateX(var(--theme-toggle-x)) rotate(45deg);
}

.theme-toggle--sun {
  transform: translateX(var(--theme-toggle-x)) rotate(270deg);
}

nav {
  background-color: var(--primary-nav-bg-mobile);
  border-top-color: var(--primary-nav-border-top);
  border-bottom-color: var(--primary-nav-border-bottom);
  border-style: solid;
  border-width: 1px 0;
  box-shadow: var(--primary-nav-shadow-mobile);
  display: none;
  font-size: pxToRem(13);
  letter-spacing: pxToRem(1);
  margin-top: pxToRem(62);
  padding: pxToRem(8) 0 pxToRem(12);

  &.open {
    display: block;
  }
}

@include desktop-up {
  header {
    box-shadow: inset 0 0 90px 30px oklch(0 0 0 / 0.25);
    height: 100vh;
    left: pxToRem(24);
    position: fixed;
    transition: left 0.225s ease-in;
    width: pxToRem(240);

    > a {
      align-items: initial;
      display: block;
      height: auto;
      justify-content: initial;
      margin: pxToRem(32) 0 pxToRem(24);
      min-height: 0;
      padding: pxToRem(4) 0;
      position: static;
      text-shadow: 1px 1px oklch(0 0 0 / 0.2);

      * {
        color: var(--header-link-color-desktop);
      }
    }

    h1 {
      font-size: pxToRem(30);
      line-height: pxToRem(26);
    }

    h2 {
      font-size: pxToRem(11);
      letter-spacing: pxToRem(2.25);
    }

    li {
      display: block;
      width: auto;

      a {
        padding: 0 pxToRem(15);
      }
    }
  }

  .menu-toggle {
    display: none;
  }

  .theme-toggle {
    --theme-toggle-x: -50%;
    bottom: pxToRem(36);
    color: var(--header-theme-toggle-color-desktop);
    font-size: pxToRem(36);
    left: 50%;
    right: auto;
    top: auto;
  }

  nav {
    background-color: var(--primary-nav-bg-desktop);
    border-color: oklch(1 0 0 / 0.25);
    box-shadow: var(--primary-nav-shadow-desktop);
    display: block;
    font-size: pxToRem(14);
    line-height: pxToRem(32);
    margin: 0 pxToRem(28);
    margin-top: 0;
    padding: pxToRem(15) pxToRem(25);
  }
}
</style>
