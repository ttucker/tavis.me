<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { MAIN_NAV_ITEMS } from '../constants/navigation'
import { useTheme } from '../composables/useTheme'

const route = useRoute()
const isMenuOpen = ref(false)
const { isDarkTheme, toggleTheme } = useTheme()

const themeToggleLabel = computed(() => {
  return isDarkTheme.value ? 'Switch to light theme' : 'Switch to dark theme'
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="header" :class="{ 'is-menu-open': isMenuOpen }">
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
    <button :aria-label="themeToggleLabel" class="theme-toggle" type="button" @click="toggleTheme">
      <span class="theme-icon sun" :class="{ active: isDarkTheme }" aria-hidden="true">☀</span>
      <span class="theme-icon moon" :class="{ active: !isDarkTheme }" aria-hidden="true">☽</span>
    </button>
    <nav id="primary-navigation" aria-label="Primary" class="primary-nav" :class="{ open: isMenuOpen }">
      <ul>
        <li v-for="item in MAIN_NAV_ITEMS" :key="item.to">
          <RouterLink :to="item.to" :class="{ current: route.path === item.to }">{{ item.label }}</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  background-color: oklch(0 0 0 / 0.5);
  color: oklch(1 0 0);
  min-height: 62px;
  text-transform: uppercase;
  z-index: 5;
}

.header > a {
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  height: 62px;
  justify-content: center;
  left: 10px;
  padding: 0;
  position: absolute;
  text-shadow: 1px 1px oklch(0 0 0 / 0.1);
  top: 0;
}

.header > a * {
  color: oklch(0.8452 0 0);
  margin: 0;
  text-align: center;
}

.header h1 {
  font-family: CardoCustom, Times, 'Times New Roman', serif;
  font-size: 28px;
  letter-spacing: 3px;
  line-height: 24px;
}

.header h2 {
  font-size: 11px;
  letter-spacing: 1.9px;
}

.menu-toggle {
  align-items: center;
  appearance: none;
  background: transparent;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  min-height: 40px;
  min-width: 40px;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 11px;
}

.menu-toggle span {
  background-color: oklch(0.8452 0 0);
  border-radius: 1px;
  display: block;
  height: 2px;
  transition: transform 0.2s ease, opacity 0.2s ease;
  width: 22px;
}

.is-menu-open .menu-toggle span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.is-menu-open .menu-toggle span:nth-child(2) {
  opacity: 0;
}

.is-menu-open .menu-toggle span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.theme-toggle {
  align-items: center;
  appearance: none;
  background: transparent;
  border: 0;
  color: oklch(0.8452 0 0);
  cursor: pointer;
  display: inline-flex;
  height: 40px;
  justify-content: center;
  padding: 0;
  position: absolute;
  right: 52px;
  top: 11px;
  width: 40px;
}

.theme-icon {
  font-size: 20px;
  left: 50%;
  line-height: 1;
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) rotate(90deg) scale(0.85);
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.theme-icon.active {
  opacity: 1;
  transform: translate(-50%, -50%) rotate(0deg) scale(1);
}

.primary-nav {
  background-color: oklch(0.58 0 0 / 0.25);
  border-top-color: oklch(1 0 0 / 0.1);
  border-bottom-color: oklch(1 0 0 / 0.25);
  border-style: solid;
  border-width: 1px 0;
  box-shadow: inset 0 0 55px 20px oklch(0 0 0 / 0.6);
  font-size: 13px;
  letter-spacing: 1px;
  display: none;
  margin-top: 62px;
  padding: 8px 0 12px;
}

.primary-nav.open {
  display: block;
}

.header li {
  display: inline-block;
  width: 50%;
}

.header li a {
  display: block;
  padding: 14px 10px;
}

@media (prefers-color-scheme: light) {
  :global(html:not([data-theme='dark']) .header) {
    background-color: oklch(1 0 0 / 0.3);
  }

  :global(html:not([data-theme='dark']) .header > a) {
    text-shadow: 1px 1px oklch(1 0 0 / 0.55);
  }

  :global(html:not([data-theme='dark']) .header > a *) {
    color: oklch(0 0 0 / 0.7);
  }

  :global(html:not([data-theme='dark']) .menu-toggle span) {
    background-color: oklch(0 0 0 / 0.7);
  }

  :global(html:not([data-theme='dark']) .theme-toggle) {
    color: oklch(0 0 0 / 0.7);
  }

  :global(html:not([data-theme='dark']) .primary-nav) {
    border-color: oklch(0 0 0 / 0.6);
    box-shadow: inset 0 0 55px 20px oklch(0.53 0 0 / 0.4);
  }
}

:global(html[data-theme='light'] .header) {
  background-color: oklch(1 0 0 / 0.3);
}

:global(html[data-theme='light'] .header > a) {
  text-shadow: 1px 1px oklch(1 0 0 / 0.55);
}

:global(html[data-theme='light'] .header > a *) {
  color: oklch(0 0 0 / 0.7);
}

:global(html[data-theme='light'] .menu-toggle span) {
  background-color: oklch(0 0 0 / 0.7);
}

:global(html[data-theme='light'] .theme-toggle) {
  color: oklch(0 0 0 / 0.7);
}

:global(html[data-theme='light'] .primary-nav) {
  border-color: oklch(0 0 0 / 0.6);
  box-shadow: inset 0 0 55px 20px oklch(0.53 0 0 / 0.4);
}

@media screen and (min-width: 768px) {
  .header {
    box-shadow: inset 0 0 90px 30px oklch(0 0 0 / 0.25);
    height: 100vh;
    left: 24px;
    position: fixed;
    transition: left 0.225s ease-in;
    width: 240px;
  }

  .menu-toggle {
    display: none;
  }

  .theme-toggle {
    bottom: 36px;
    color: oklch(1 0 0 / 0.7);
    left: 50%;
    right: auto;
    top: auto;
    transform: translateX(-50%);
  }

  .header > a {
    align-items: initial;
    display: block;
    height: auto;
    justify-content: initial;
    margin: 32px 0 24px;
    min-height: 0;
    padding: 4px 0;
    position: static;
    text-shadow: 1px 1px oklch(0 0 0 / 0.2);
  }

  .header h1 {
    font-size: 30px;
    line-height: 26px;
  }

  .header > a * {
    color: oklch(1 0 0 / 0.7);
  }

  .header h2 {
    font-size: 11px;
    letter-spacing: 2.25px;
  }

  .primary-nav {
    display: block;
    background-color: oklch(0 0 0 / 0.2);
    border-color: oklch(1 0 0 / 0.25);
    box-shadow: inset 0 0 40px 10px oklch(0 0 0 / 0.3);
    font-size: 14px;
    line-height: 32px;
    margin: 0 28px;
    margin-top: 0;
    padding: 15px 25px;
  }

  .header li {
    display: block;
    width: auto;
  }

  .header li a {
    padding: 0 15px;
  }

  @media (prefers-color-scheme: light) {
    :global(html:not([data-theme='dark']) .primary-nav) {
      background-color: oklch(1 0 0 / 0.2);
      box-shadow: inset 0 0 80px 0 oklch(0 0 0 / 0.3);
    }

    :global(html:not([data-theme='dark']) .header > a *) {
      color: oklch(0 0 0 / 0.7);
    }

    :global(html:not([data-theme='dark']) .theme-toggle) {
      color: oklch(0 0 0 / 0.7);
    }
  }
}

@media screen and (min-width: 768px) {
  :global(html[data-theme='light'] .primary-nav) {
    background-color: oklch(1 0 0 / 0.2);
    box-shadow: inset 0 0 80px 0 oklch(0 0 0 / 0.3);
  }

  :global(html[data-theme='light'] .header > a *) {
    color: oklch(0 0 0 / 0.7);
  }

  :global(html[data-theme='light'] .theme-toggle) {
    color: oklch(0 0 0 / 0.7);
  }
}
</style>
