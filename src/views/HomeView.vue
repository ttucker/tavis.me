<template>
  <HeroImage img-src="/home.jpg" current-page="home" :full-height="true" />
  <blockquote>
    Hello and <i>welcome</i> to my website
  </blockquote>
</template>

<script setup lang="ts">
import HeroImage from '../components/HeroImage.vue'
</script>

<style scoped lang="scss">
blockquote {
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
  top: 33%;
  transform: translate(-50%, -50%);
  width: min(92vw, pxToRem(640));

  i {
    display: block;
    font-size: pxToRem(42);
    font-style: italic;
    font-synthesis: style;
    letter-spacing: 0;
    line-height: pxToRem(40);
    text-transform: lowercase;
  }

  @include desktop-up {
    bottom: 67%;
    font-size: pxToRem(25);
    left: 47%;
    line-height: pxToRem(25);
    top: auto;
    transform: none;
    width: auto;

    &:first-letter {
      margin-left: pxToRem(-200);
    }

    i {
      font-size: pxToRem(50);
      line-height: pxToRem(46);

      &:first-letter {
        margin-left: pxToRem(-125);
      }
    }
  }
}

</style>
