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

<style scoped lang="scss">
.page--home {
  position: relative;
}

.blockquote {
  color: var(--blockquote-color);
  font-family: CardoCustom, Times, 'Times New Roman', serif;
  font-size: pxToRem(20);
  left: 50%;
  letter-spacing: pxToRem(2);
  line-height: pxToRem(24);
  pointer-events: none;
  position: absolute;
  text-align: center;
  text-shadow: 1px 1px oklch(1 0 0 / 0.2);
  text-transform: uppercase;
  top: 42%;
  transform: translate(-50%, -50%);
  width: min(92vw, pxToRem(640));
}

.blockquote i {
  display: block;
  font-style: italic;
  font-synthesis: style;
  font-size: pxToRem(42);
  letter-spacing: 0;
  line-height: pxToRem(40);
  text-transform: lowercase;
}

@media screen and (min-width: 768px) {
  .blockquote {
    bottom: 67%;
    font-size: pxToRem(25);
    left: 47%;
    line-height: pxToRem(25);
    top: auto;
    transform: none;
    width: auto;
  }

  .blockquote:first-letter {
    margin-left: pxToRem(-200);
  }

  .blockquote i {
    font-size: pxToRem(50);
    line-height: pxToRem(46);
  }

  .blockquote i:first-letter {
    margin-left: pxToRem(-125);
  }
}

</style>
