<template>
  <main>
    <slot />
  </main>
</template>

<style lang="scss">
main {
  position: relative;
  width: 100%;
}

@include desktop-up {
  html,
  body,
  #app {
    background-color: var(--app-bg-desktop);
    height: 100%;
    overflow: hidden;
  }
  main {
    height: 100vh;
    overflow-y: auto;
    scrollbar-gutter: stable;
  }
  @include motion('forward', 105%, -115%, -220vh, -220vh);
  @include motion('back', -105%, 115%, -220vh, 220vh);
}

@include desktop-up-reduced-motion {
  @include motion-reduced('forward');
  @include motion-reduced('back');
}
</style>