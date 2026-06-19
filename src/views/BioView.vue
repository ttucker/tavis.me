<template>
  <div class="page page--content">
    <HeroImage current-page="bio" img-src="/bio.jpg" />
    <main>
      <ContentArticle>
        <h3>Bio</h3>
        <h4>My name is Tavis Tucker, and tavis.me is my portfolio site.</h4>
        <p>
          I attended Western Maryland College (now
          <a href="https://www.mcdaniel.edu" target="_blank" rel="noreferrer">McDaniel College</a>) where I
          graduated <i>cum laude</i> with a Math major and Secondary Education minor, but also studied programming,
          physics and the required liberal arts subjects too. After college, I taught Math to 7<sup>th</sup> and
          8<sup>th</sup> grade students for two years before deciding to return to school, study web development and
          start down a new career path.
        </p>
        <p>
          In 2003, I got started as Junior Web Developer with travel industry startup E-site Marketing which was
          acquired and is now called
          <a href="http://www.sabrehospitality.com/" target="_blank" rel="noreferrer">Sabre Hospitality Solutions</a>.
          I grew from Senior Developer into the role of Web Development Manager and was responsible for a team of up to
          17 developers, about half of which were home-based. My colleagues and I earned over 100 Internet awards,
          amassing 50 <a href="http://www.webaward.org/" target="_blank" rel="noreferrer">WebAwards</a> in two years,
          11 Gold <a href="http://www.w3award.com/" target="_blank" rel="noreferrer">W<sup>3</sup> Awards</a> and 11
          (hospitality industry-specific)
          <a href="http://www.adrianawards.com/" target="_blank" rel="noreferrer">Adrian Awards</a> in 2012 alone.
        </p>
        <p>
          After 10 years at SHS and seven as a manager, I wanted a role change back to individual contributor once
          again, so my wife, our furry children and I headed to Seattle in the beautiful Pacific Northwest, where I
          served as Front End Developer for <a href="http://www.apptio.com" target="_blank" rel="noreferrer">Apptio</a>.
          I participated in the entire lifecycle of the company's
          <a href="http://www.apptio.com/applications/it-planning" target="_blank" rel="noreferrer">first SaaS application</a>
          as a member of the Product Design team using Zurb's Foundation library, JavaScript, HTML, and SCSS to
          prototype and rapidly iterate on design concepts, but once the user experience was solidified I transitioned
          to the engineering organization to integrate it in the product as it was being built. My time at Apptio gave
          me invaluable experience collaborating with an Agile/Scrum team building software as well as better UX and
          interaction design skills, but I soon found myself wanting a fully remote role without the Seattle area
          traffic.
        </p>
        <p>
          That brought me to <a href="https://www.tenable.com" target="_blank" rel="noreferrer">Tenable</a> in 2015,
          where I was able to bootstrap multiple new products including Dashboards, Reporting, PCI ASV and MSSP
          offerings for
          <a href="https://www.tenable.com/products/tenable-io" target="_blank" rel="noreferrer">Tenable.io</a>. Most
          recently, I helped deliver a complete redesign for the next major version release of
          <a href="https://www.tenable.com/products/tenable-sc" target="_blank" rel="noreferrer">Tenable.sc</a> by
          implementing design system tokens throughout all UI components and styling them to meet Figma specifications.
          At Tenable, while I was building features and creating components within the company's design system, most of
          my coding utilized React, Redux, Styled Components and CSS/SCSS, but I also became familiar with Lit web
          components, Nx, Webpack, Jenkins CI/CD and e2e testing with Sauce Labs and Webdriver.io as well. I'm very
          grateful for the amazing people I worked with and the opportunities I had to grow my skillset and
          responsibilities, but now, I'm <RouterLink to="/mission">ready to move on</RouterLink>.
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