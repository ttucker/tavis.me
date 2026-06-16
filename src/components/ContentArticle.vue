<template>
  <article class="article">
    <slot />
  </article>
</template>

<style scoped lang="scss">
.article {
  background-color: var(--article-bg);
  color: var(--article-text-color);
  display: block;
  padding: pxToRem(10) 0;
  width: 100%;
  will-change: transform;
}

.article :deep(a),
.article :deep(a:hover),
.article :deep(a:active) {
  color: var(--article-link-color);
  text-shadow: none;
}

.article :deep(a:hover) {
  color: var(--article-link-hover-color);
}

.article :deep(a:active) {
  color: var(--article-link-active-color);
}

.article :deep(h3),
.article :deep(h4),
.article :deep(ol),
.article :deep(ul),
.article :deep(dl),
.article :deep(p),
.article :deep(pre) {
  margin: 0 pxToRem(10) pxToRem(16);
}

.article :deep(h3),
.article :deep(h4) {
  font-size: pxToRem(28);
  font-weight: 400;
  margin-bottom: pxToRem(10);
  text-transform: uppercase;
}

.article :deep(h4) {
  font-size: pxToRem(18);
  text-transform: none;
}

.article :deep(ol),
.article :deep(ul) {
  padding-left: pxToRem(28);
}

.article :deep(ul) {
  list-style-type: square;
}

.article :deep(dl),
.article :deep(dd ul) {
  margin-top: pxToRem(10);
}

.article :deep(dd ul) {
  margin-left: 0;
}

.article :deep(dt) {
  clear: right;
  float: right;
}

.article :deep(sup) {
  line-height: 0;
}

@media screen and (min-width: 768px) {
  .article {
    font-size: 100%;
    line-height: 1.5;
    padding: pxToRem(20) 0;
    position: absolute;
    top: 11%;
    transform: translateY(0);
  }

  .article :deep(h3),
  .article :deep(h4),
  .article :deep(ol),
  .article :deep(ul),
  .article :deep(dl),
  .article :deep(p),
  .article :deep(pre) {
    margin-left: 5%;
    margin-right: 3%;
  }
}

</style>
