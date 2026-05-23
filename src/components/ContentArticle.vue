<template>
  <article class="article">
    <slot />
  </article>
</template>

<style scoped>
.article {
  background-color: oklch(0.32 0 0 / 0.7);
  color: oklch(0.8452 0 0);
  display: block;
  padding: 10px 0;
  width: 100%;
  will-change: top;
}

.article :deep(a),
.article :deep(a:hover),
.article :deep(a:active) {
  color: oklch(0.67 0.24 25);
  text-shadow: none;
}

.article :deep(a:hover) {
  color: oklch(0.75 0.17 25);
}

.article :deep(a:active) {
  color: oklch(0.81 0.13 25);
}

.article :deep(h3),
.article :deep(h4),
.article :deep(ol),
.article :deep(ul),
.article :deep(dl),
.article :deep(p),
.article :deep(pre) {
  margin: 0 10px 16px;
}

.article :deep(h3),
.article :deep(h4) {
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.article :deep(h4) {
  font-size: 18px;
  text-transform: none;
}

.article :deep(ol),
.article :deep(ul) {
  padding-left: 28px;
}

.article :deep(ul) {
  list-style-type: square;
}

.article :deep(dl),
.article :deep(dd ul) {
  margin-top: 10px;
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
    padding: 20px 0 30px;
    position: absolute;
    top: 11%;
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

@media (prefers-color-scheme: light) {
  :global(html:not([data-theme='dark']) .article) {
    background-color: oklch(0.94 0 0 / 0.7);
    color: oklch(0.3904 0 0);
  }

  :global(html:not([data-theme='dark']) .article a),
  :global(html:not([data-theme='dark']) .article a:hover),
  :global(html:not([data-theme='dark']) .article a:active) {
    color: oklch(0.43 0.18 29);
  }

  :global(html:not([data-theme='dark']) .article a:hover) {
    color: oklch(0.59 0.24 29);
  }

  :global(html:not([data-theme='dark']) .article a:active) {
    color: oklch(0.69 0.22 27);
  }
}

:global(html[data-theme='light'] .article) {
  background-color: oklch(0.94 0 0 / 0.7);
  color: oklch(0.3904 0 0);
}

:global(html[data-theme='light'] .article a),
:global(html[data-theme='light'] .article a:hover),
:global(html[data-theme='light'] .article a:active) {
  color: oklch(0.43 0.18 29);
}

:global(html[data-theme='light'] .article a:hover) {
  color: oklch(0.59 0.24 29);
}

:global(html[data-theme='light'] .article a:active) {
  color: oklch(0.69 0.22 27);
}
</style>
