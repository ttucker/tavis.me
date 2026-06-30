<template>
  <div class="carousel" @keydown.left.prevent="prev" @keydown.right.prevent="next" tabindex="0">
  <div class="chev-overlay">
    <button class="chev left" type="button" @click="prev" aria-label="Previous slide">
      <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg>
    </button>

    <button class="chev right" type="button" @click="next" aria-label="Next slide">
      <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" /></svg>
    </button>
    </div>

    <div class="viewport">
      <div class="viewport-stage">
        <Transition name="fade">
          <div v-if="activeSlide" :key="index" class="active-slide">
            <VNodeRenderer :vnode="activeSlide" />
          </div>
        </Transition>
      </div>
    </div>

    <div class="dots" v-if="slides.length > 1">
      <button
        v-for="(_, i) in slides"
        :key="i"
        type="button"
        :class="{ active: i === index }"
        :aria-label="`Go to slide ${i + 1}`"
        @click="go(i)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Comment, cloneVNode, computed, ref, useSlots, watchEffect, type VNode } from 'vue'

const VNodeRenderer = ({ vnode }: { vnode: VNode }) => cloneVNode(vnode)

const slots = useSlots()
const index = ref(0)
const slides = computed(() => (slots.default?.() ?? []).filter((node) => node.type !== Comment))
const activeSlide = computed(() => slides.value[index.value] ?? null)

watchEffect(() => {
  if (!slides.value.length) {
    index.value = 0
    return
  }

  if (index.value >= slides.value.length) {
    index.value = slides.value.length - 1
  }
})

function prev() {
  if (!slides.value.length) return
  index.value = (index.value - 1 + slides.value.length) % slides.value.length
}

function next() {
  if (!slides.value.length) return
  index.value = (index.value + 1) % slides.value.length
}

function go(nextIndex: number) {
  if (!slides.value.length) return
  index.value = nextIndex
}
</script>

<style scoped lang="scss">
.carousel {
  --carousel-chev-size: 40px;
  --carousel-fade-enter-duration: 2s;
  --carousel-fade-leave-duration: 0.5s;
  position: relative;

  .viewport {
    overflow: visible;
  }

  .viewport-stage {
    min-height: 100%;
    position: relative;
  }

  .active-slide {
    min-height: 100%;
    width: 100%;
  }

  .fade-enter-active {
    transition-duration: var(--carousel-fade-enter-duration);
    transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  }

  .fade-leave-active {
    inset: 0;
    pointer-events: none;
    position: absolute;
    transition-duration: var(--carousel-fade-leave-duration);
    transition-timing-function: ease-out;
    width: 100%;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }

  .chev-overlay {
    height: 0;
    inset-inline: 0;
    pointer-events: none;
    position: sticky;
    top: 45vh;
    z-index: 1;
  }

  .chev {
    align-items: center;
    background: var(--carousel-chev-bg);
    border: 1px solid var(--carousel-chev-border);
    border-radius: pxToRem(999);
    color: var(--carousel-chev-color);
    cursor: pointer;
    display: flex;
    height: var(--carousel-chev-size);
    justify-content: center;
    position: absolute;
    pointer-events: auto;
    top: 0;
    transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    width: var(--carousel-chev-size);

    &:hover {
      background: var(--carousel-chev-bg-hover);
      border-color: var(--carousel-chev-border-hover);
      color: var(--carousel-chev-color-hover);
    }

    &.left {
      left: pxToRem(-15);
    }

    &.right {
      right: pxToRem(-15);
    }

    svg {
      display: block;
    }
  }

  .dots {
    display: flex;
    gap: pxToRem(6);
    justify-content: center;
    margin-block: pxToRem(10) pxToRem(20);

    button {
      background: var(--carousel-dot-bg);
      border: 1px solid var(--carousel-dot-border);
      border-radius: 50%;
      cursor: pointer;
      height: pxToRem(10);
      padding: 0;
      transition: background-color 0.25s ease, border-color 0.25s ease;
      width: pxToRem(10);

      &.active {
        background: var(--carousel-dot-bg-active);
      }
    }
  }
}

</style>
