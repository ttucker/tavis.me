<template>
  <article>
    <slot />
  </article>
</template>

<style scoped lang="scss">
article {
  background-color: var(--article-bg);
  color: var(--article-text-color);
  padding: pxToRem(10) 0;
  width: 100%;
  will-change: transform;

  :deep(a) {
    color: var(--article-link-color);
    text-shadow: none;

    &:hover {
      color: var(--article-link-hover-color);
    }

    &:active {
      color: var(--article-link-active-color);
    }
  }

  :deep(h3),
  :deep(h4),
  :deep(ol),
  :deep(ul),
  :deep(dl),
  :deep(p),
  :deep(pre) {
    margin: 0 pxToRem(10) pxToRem(16);
  }

  :deep(h3),
  :deep(h4) {
    font-size: pxToRem(28);
    font-weight: 400;
    margin-bottom: pxToRem(10);
    text-transform: uppercase;
  }

  :deep(h4) {
    font-size: pxToRem(18);
    text-transform: none;
  }

  :deep(ol),
  :deep(ul) {
    padding-left: pxToRem(28);
  }

  :deep(ul) {
    list-style-type: square;
  }

  :deep(dl),
  :deep(dd ul) {
    margin-top: pxToRem(10);
  }

  :deep(dd ul) {
    margin-left: 0;
  }

  :deep(dt) {
    clear: right;
    float: right;
  }

  :deep(sup) {
    line-height: 0;
  }
}

@include desktop-up {
  article {
    font-size: 100%;
    line-height: 1.5;
    padding: pxToRem(20) 0;
    position: absolute;
    top: 11%;
    transform: translateY(0);

    :deep(h3),
    :deep(h4),
    :deep(ol),
    :deep(ul),
    :deep(dl),
    :deep(p),
    :deep(pre) {
      margin-left: 5%;
      margin-right: 3%;
    }
  }
}

</style>
