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

<style scoped lang="scss">
.footer {
  align-items: center;
  border-top: 1px solid var(--footer-border-color);
  display: flex;
  flex-direction: column;
  font-size: pxToRem(12);
  justify-content: space-between;
  line-height: pxToRem(22);
  z-index: 5;

  nav {
    letter-spacing: pxToRem(1);
    text-transform: uppercase;
    width: 100%;
  }

  ul {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    min-height: pxToRem(30);
  }

  li {
    display: inline-flex;
  }

  small {
    color: var(--footer-small-color);
    font-size: pxToRem(12);
    line-height: pxToRem(28);
    text-shadow: var(--footer-small-shadow);
  }
}

@include desktop-up {
  .footer {
    background-color: var(--footer-bg-desktop);
    border-top: none;
    bottom: 0;
    flex-direction: row;
    font-size: pxToRem(11);
    position: fixed;
    width: 100%;

    nav {
      order: 1;
      width: auto;
    }

    li {
      margin-right: pxToRem(30);
    }

    small {
      margin-left: pxToRem(30);
    }
  }
}

</style>
