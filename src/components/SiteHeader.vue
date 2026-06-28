<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { MAIN_NAV_ITEMS } from '../constants/navigation'
import { useTheme } from '../composables/useTheme'

const route = useRoute()
const isMenuOpen = ref(true)
const { isDarkTheme, toggleTheme } = useTheme()

const themeToggleState = computed(() => {
  return isDarkTheme.value
    ? {
        className: 'theme-toggle--sun',
        label: 'Switch to light theme',
      }
    : {
        className: 'theme-toggle--moon',
        label: 'Switch to dark theme',
      }
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
    <div class="header-controls">
      <button
        :aria-label="themeToggleState.label"
        class="theme-toggle"
        :class="themeToggleState.className"
        type="button"
        @click="toggleTheme"
      >
        <span class="theme-toggle-icon" aria-hidden="true">
          <svg
            v-if="isDarkTheme"
            class="theme-toggle-glyph"
            viewBox="0 0 24 24"
            focusable="false"
          >
            <circle cx="12" cy="12" r="4" fill="currentColor" />
            <path
              d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
            />
          </svg>
          <svg
            v-else
            class="theme-toggle-glyph"
            viewBox="0 0 24 24"
            focusable="false"
          >
            <path
              d="M18.6 1.7C11.6 2 6.2 6.6 6.2 12s5.4 10 12.4 10.3c-4.5-2.2-7.5-6.3-7.5-10.3s3-8.1 7.5-10.3Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </button>
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
    </div>
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
  align-items: center;
  background-color: var(--header-bg);
  color: oklch(1 0 0);
  display: flex;
  flex-wrap: wrap;
  text-transform: uppercase;
  justify-content: space-between;
  z-index: 5;

  > a {
    align-items: center;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    padding: pxToRem(10);
    text-shadow: var(--header-link-shadow);

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

.header-controls {
  display: flex;
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
  align-items: center;
  appearance: none;
  backface-visibility: hidden;
  background: transparent;
  border: 0;
  color: var(--header-theme-toggle-color);
  cursor: pointer;
  display: inline-flex;
  height: pxToRem(40);
  justify-content: center;
  line-height: 1;
  padding: 0;
  transition: transform 0.5s ease;
  transform-origin: 50% 50%;
  width: pxToRem(40);
}

.theme-toggle-icon {
  align-items: center;
  display: inline-flex;
  height: pxToRem(24);
  justify-content: center;
  line-height: 0;
  width: pxToRem(24);
}

.theme-toggle-glyph {
  display: block;
  height: 100%;
  width: 100%;
}

.theme-toggle--moon {
  transform: rotate(-155deg);
}

.theme-toggle--sun {
  transform: rotate(45deg);
}

nav {
  background-color: var(--primary-nav-bg-mobile);
  border-top-color: var(--primary-nav-border-top);
  border-bottom-color: var(--primary-nav-border-bottom);
  border-style: solid;
  border-width: 1px 0;
  box-shadow: inset 0 0 55px 20px var(--primary-nav-shadow-mobile);
  display: none;
  flex-basis: 100%;
  font-size: pxToRem(13);
  letter-spacing: pxToRem(1);
  padding: pxToRem(8) 0 pxToRem(12);

  &.open {
    display: block;
  }
}

@include desktop-up {
  header {
    align-items: stretch;
    box-shadow: inset 0 0 80px 0 var(--primary-nav-shadow-desktop);
    flex-direction: column;
    flex-wrap: nowrap;
    height: 100vh;
    left: pxToRem(24);
    position: fixed;
    transition: left 0.25s ease-in;
    width: pxToRem(240);

    > a {
      display: block;
      height: auto;
      margin: pxToRem(32) 0 pxToRem(24);
      padding: pxToRem(4) 0;
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

  .header-controls {
    align-self: center;
    flex-direction: column;
    gap: 0;
    margin: auto 0 pxToRem(36);
    order: 3;
  }

  .menu-toggle {
    display: none;
  }

  .theme-toggle-icon {
    height: pxToRem(28);
    width: pxToRem(28);
  }

  nav {
    background-color: var(--primary-nav-bg-desktop);
    border-color: oklch(1 0 0 / 0.25);
    box-shadow: var(--primary-nav-shadow-desktop);
    display: block;
    flex-basis: auto;
    font-size: pxToRem(14);
    line-height: pxToRem(32);
    margin: 0 pxToRem(28);
    margin-top: 0;
    order: 2;
    padding: pxToRem(15) pxToRem(25);
    width: auto;
  }
}
</style>
