<template>
  <div class="page page--home">
    <HeroImage img-src="/home.jpg" current-page="home" :full-height="true" />
    <blockquote class="blockquote">
      Hello and <i>welcome</i> to my website
    </blockquote>
  </div>
</template>

<script setup lang="ts">
import HeroImage from '../components/HeroImage.vue'
</script>

<style scoped>
.page--home {
  min-height: 100vh;
  position: relative;
}

.blockquote {
  color: oklch(0.1913 0 0);
  font-family: CardoCustom, Times, 'Times New Roman', serif;
  font-size: 20px;
  left: 50%;
  letter-spacing: 2px;
  line-height: 24px;
  pointer-events: none;
  position: absolute;
  text-align: center;
  text-shadow: 1px 1px oklch(1 0 0 / 0.2);
  text-transform: uppercase;
  top: 42%;
  transform: translate(-50%, -50%);
  width: min(92vw, 640px);
}

.blockquote i {
  display: block;
  font-style: italic;
  font-synthesis: style;
  font-size: 42px;
  letter-spacing: 0;
  line-height: 40px;
  text-transform: lowercase;
}

@media screen and (min-width: 768px) {
  .blockquote {
    bottom: 67%;
    font-size: 25px;
    left: 47%;
    line-height: 25px;
    top: auto;
    transform: none;
    width: auto;
  }

  .blockquote:first-letter {
    margin-left: -200px;
  }

  .blockquote i {
    font-size: 50px;
    line-height: 46px;
  }

  .blockquote i:first-letter {
    margin-left: -125px;
  }
}

@media (prefers-color-scheme: light) {
  :global(html:not([data-theme='dark']) .blockquote) {
    color: oklch(0 0 0 / 0.7);
  }
}

:global(html[data-theme='light'] .blockquote) {
  color: oklch(0 0 0 / 0.7);
}
</style>
