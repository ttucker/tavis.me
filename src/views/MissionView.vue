<template>
  <div class="page page--content">
    <HeroImage current-page="mission" img-src="/mission.jpg" />
    <main>
      <ContentArticle>
        <h3>Mission</h3>
        <h4>Make a difference.</h4>
        <p>
          More than anything, I want to help make the world a better place with the work I do and the way I live, be a
          vessel of change for the greater good. Or something like that.
        </p>
        <h4>Seek new challenges.</h4>
        <p>
          Each day, I want to use less carbon and more of my abilities, to work with like-minded people that are
          passionate about the work they do, whatever it might be.
        </p>
        <h4>Help others succeed.</h4>
        <p>
          I'm ready to work hard for you and bring a wealth of <RouterLink to="/services">knowledge</RouterLink> and
          <RouterLink to="/projects">skills</RouterLink> to the table, so if you have an opportunity that might be of
          interest, please <RouterLink to="/contact">get in touch</RouterLink>.
        </p>
      </ContentArticle>
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

import ContentArticle from '../components/ContentArticle.vue'
import HeroImage from '../components/HeroImage.vue'
</script>
