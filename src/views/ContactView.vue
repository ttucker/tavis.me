<template>
  <div class="page page--content">
    <HeroImage current-page="contact" img-src="/contact.jpg" />
    <main>
      <ContentArticle>
        <h3>Contact</h3>
        <h4>Please do get in touch.</h4>
        <p>
          I hope to have a handy contact form here for your convenience soon, but in the meantime try me via:
        </p>
        <ol>
          <li><a href="mailto:tavis.tucker@gmail.com?subject=Getting in touch...">Email</a></li>
          <li><a href="https://discord.com/users/1043695714024312872" target="_blank" rel="noreferrer">Discord</a></li>
          <li><a href="https://www.linkedin.com/in/tavistucker" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ol>
      </ContentArticle>
    </main>
  </div>
</template>

<script setup lang="ts">
import ContentArticle from '../components/ContentArticle.vue'
import HeroImage from '../components/HeroImage.vue'
</script>