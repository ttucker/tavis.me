<template>
  <div class="page page--home">
    <HeroImage img-src="/home.jpg" current-page="home" />
    <blockquote class="blockquote">
      Hello and <i>welcome</i> to my website
    </blockquote>
  </div>
</template>

<script setup lang="ts">
import HeroImage from '../components/HeroImage.vue'
</script>

<style scoped>
.blockquote {
  display: none;
}

@media screen and (min-width: 768px) {
  .blockquote {
    color: oklch(0.1913 0 0);
    display: block;
    font-family: CardoCustom, Times, 'Times New Roman', serif;
    font-size: 25px;
    left: 47%;
    letter-spacing: 2px;
    line-height: 25px;
    position: fixed;
    text-align: center;
    text-shadow: 1px 1px oklch(1 0 0 / 0.2);
    text-transform: uppercase;
    transform: translateY(0);
    will-change: transform;
    bottom: 67%;
  }

  .blockquote:first-letter {
    margin-left: -200px;
  }

  .blockquote i {
    display: block;
    font-style: italic;
    font-synthesis: style;
    font-size: 50px;
    letter-spacing: 0;
    line-height: 46px;
    text-transform: lowercase;
  }

  .blockquote i:first-letter {
    margin-left: -125px;
  }

  @media (prefers-color-scheme: light) {
    .blockquote {
      color: oklch(0 0 0 / 0.7);
    }
  }
}
</style>
