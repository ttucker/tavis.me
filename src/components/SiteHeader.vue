<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

import { MAIN_NAV_ITEMS } from '../constants/navigation'

const route = useRoute()
</script>

<template>
  <header class="header">
    <RouterLink to="/">
      <h1>tavis.me</h1>
      <h2>The Curriculum Vitae</h2>
    </RouterLink>
    <nav aria-label="Primary">
      <ul>
        <li v-for="item in MAIN_NAV_ITEMS" :key="item.to">
          <RouterLink :to="item.to" :class="{ current: route.path === item.to }">{{ item.label }}</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: oklch(0 0 0 / 0.5);
  color: oklch(1 0 0);
  text-transform: uppercase;
  z-index: 5;
}

.header > a {
  left: 10px;
  padding: 4px 0;
  position: absolute;
  text-shadow: 1px 1px oklch(0 0 0 / 0.1);
  top: 0;
}

.header > a * {
  color: oklch(0 0 0 / 0.7);
  margin: 0;
  text-align: center;
}

.header h1 {
  font-family: CardoCustom, Times, 'Times New Roman', serif;
  font-size: 30px;
  letter-spacing: 3px;
  line-height: 26px;
}

.header h2 {
  font-size: 12px;
  letter-spacing: 1.9px;
}

.header nav {
  background-color: oklch(0.58 0 0 / 0.25);
  border-top-color: oklch(1 0 0 / 0.1);
  border-bottom-color: oklch(1 0 0 / 0.25);
  border-style: solid;
  border-width: 1px 0;
  box-shadow: inset 0 0 55px 20px oklch(0 0 0 / 0.6);
  font-size: 13px;
  letter-spacing: 1px;
  padding: 12px 0;
}

.header li {
  display: inline-block;
  width: 50%;
}

.header li a {
  display: block;
  padding: 16px 0 16px 20px;
}

@media (prefers-color-scheme: light) {
  .header {
    background-color: oklch(1 0 0 / 0.3);
  }

  .header nav {
    border-color: oklch(0 0 0 / 0.6);
    box-shadow: inset 0 0 55px 20px oklch(0.53 0 0 / 0.4);
  }
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

  .header > a {
    display: block;
    margin: 32px 0 24px;
    position: static;
    text-shadow: 1px 1px oklch(0 0 0 / 0.2);
  }

  .header > a * {
    color: oklch(1 0 0 / 0.7);
  }

  .header h2 {
    font-size: 11px;
    letter-spacing: 2.25px;
  }

  .header nav {
    background-color: oklch(0 0 0 / 0.2);
    border-color: oklch(1 0 0 / 0.25);
    box-shadow: inset 0 0 40px 10px oklch(0 0 0 / 0.3);
    font-size: 14px;
    line-height: 32px;
    margin: 0 28px;
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
    .header nav {
      background-color: oklch(1 0 0 / 0.2);
      box-shadow: inset 0 0 80px 0 oklch(0 0 0 / 0.3);
    }

    .header > a * {
      color: oklch(0 0 0 / 0.7);
    }
  }
}
</style>
