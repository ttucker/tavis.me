<template>
  <div class="page page--content">
    <HeroImage current-page="services" img-src="/services.jpg" />
    <main>
      <ContentArticle>
        <h3>Services</h3>
        <h4>Here's how I can help you.</h4>
        <p>
          Whether you're an interactive media agency looking for a full-time developer or a small business owner that
          needs an online presence, we should talk. Though my primary area of
          <RouterLink to="/projects">experience</RouterLink> and interest lies in translating static designs into
          dynamic user interfaces, I could:
        </p>
        <ul>
          <li>Create a responsive web-based single page application</li>
          <li>Redesign and/or build a new website with a CMS backend</li>
          <li>Provide recommendations to improve user experience</li>
          <li>Help architect a website development project</li>
          <li>Add search engine optimization or analytics solutions</li>
          <li>Implement a blogging platform to give you a voice</li>
          <li>Bring your new and interesting idea to life</li>
        </ul>
        <p>
          Need help? <RouterLink to="/contact">Get in touch</RouterLink> and let's start a conversation!
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