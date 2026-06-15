<script setup lang="ts">
const copyright = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <nav aria-label="External links">
      <ul>
        <li><a href="mailto:tavis.tucker@gmail.com?subject=Getting in touch...">Email</a></li>
        <li><a href="https://discord.com/users/1043695714024312872" target="_blank" rel="noreferrer">Discord</a></li>
        <li><a href="https://www.linkedin.com/in/tavistucker" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/ttucker/tavis.me" target="_blank" rel="noreferrer">Github</a></li>
      </ul>
    </nav>
    <small>© {{ copyright }} Tavis Tucker</small>
  </footer>
</template>

<style scoped>
.footer {
  align-items: center;
  border-top: 1px solid var(--footer-border-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 5;
}

.footer * {
  font-size: 12px;
  line-height: 22px;
}

.footer nav {
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 100%;
}

.footer ul {
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  min-height: 30px;
}

.footer li {
  display: inline-flex;
}

.footer small {
  color: var(--footer-small-color);
  font-size: 12px;
  line-height: 28px;
  text-shadow: var(--footer-small-shadow);
}

@media screen and (min-width: 768px) {
  .footer {
    background-color: var(--footer-bg-desktop);
    border-top: none;
    bottom: 0;
    flex-direction: row;
    position: fixed;
    width: 100%;
  }

  .footer * {
    font-size: 11px;
  }

  .footer nav {
    order: 1;
    width: auto;
  }

  .footer li {
    margin-right: 30px;
  }

  .footer small {
    margin-left: 30px;
  }
}

</style>
