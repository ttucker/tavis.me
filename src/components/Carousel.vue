<template>
  <div class="carousel" @keydown.left.prevent="prev" @keydown.right.prevent="next" tabindex="0">
    <button class="chev left" @click="prev" aria-label="Previous slide">
      <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg>
    </button>

    <div class="viewport">
      <div class="viewport-stack">
        <div v-for="(slide, i) in slides" :key="`sizer-${i}`" class="sizer-slide" aria-hidden="true">
          <VNodeRenderer :vnode="slide" />
        </div>

        <div class="viewport-stage">
          <Transition name="fade" mode="out-in">
            <div v-if="activeSlide" :key="index" class="active-slide">
              <VNodeRenderer :vnode="activeSlide" />
            </div>
          </Transition>
        </div>
      </div>
    </div>

    <button class="chev right" @click="next" aria-label="Next slide">
      <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" /></svg>
    </button>

    <div class="dots" v-if="slidesCount > 1">
      <button
        v-for="(_, i) in slides"
        :key="i"
        :class="{ active: i === index }"
        :aria-label="`Go to slide ${i + 1}`"
        @click="go(i)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Comment, cloneVNode, computed, defineComponent, ref, useSlots, watchEffect, type PropType, type VNode } from 'vue'

const VNodeRenderer = defineComponent({
  name: 'VNodeRenderer',
  props: {
    vnode: {
      type: Object as PropType<VNode>,
      required: true,
    },
  },
  setup(props) {
    return () => cloneVNode(props.vnode)
  },
})

const slots = useSlots()
const index = ref(0)
const slides = computed(() => (slots.default?.() ?? []).filter((node) => node.type !== Comment))
const slidesCount = computed(() => slides.value.length)
const activeSlide = computed(() => slides.value[index.value] ?? null)

watchEffect(() => {
  if (!slidesCount.value) {
    index.value = 0
    return
  }

  if (index.value >= slidesCount.value) {
    index.value = slidesCount.value - 1
  }
})

function prev() {
  if (!slidesCount.value) return
  index.value = (index.value - 1 + slidesCount.value) % slidesCount.value
}

function next() {
  if (!slidesCount.value) return
  index.value = (index.value + 1) % slidesCount.value
}

function go(nextIndex: number) {
  if (!slidesCount.value) return
  index.value = nextIndex
}
</script>

<style scoped lang="scss">
.carousel {
  outline: none;
  position: relative;
}

.viewport {
  overflow: visible;
}

.viewport-stack {
  display: grid;
}

.viewport-stack > * {
  grid-area: 1 / 1;
}

.sizer-slide {
  pointer-events: none;
  visibility: hidden;
}

.viewport-stage,
.active-slide {
  min-height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 320ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-leave-active {
  pointer-events: none;
}

.chev {
  align-items: center;
  background: oklch(0.24 0 0 / 0.92);
  border: 1px solid oklch(1 0 0 / 0.14);
  border-radius: 999px;
  color: oklch(0.98 0 0);
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  z-index: 1;
}

.chev.left {
  left: 0;
}

.chev.right {
  right: 0;
}

.chev svg {
  display: block;
}

.dots {
  display: flex;
  gap: 6px;
  justify-content: center;
  margin-block: 0.5rem;
}

.dots button {
  background: oklch(0 0 0 / 0.15);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  height: 10px;
  padding: 0;
  width: 10px;
}

.dots button.active {
  background: oklch(0 0 0 / 0.6);
}

@media (prefers-color-scheme: light) {
  :global(html:not([data-theme='dark']) .chev) {
    background: oklch(1 0 0 / 0.9);
    border-color: oklch(0 0 0 / 0.08);
    color: oklch(0.2 0 0);
  }
}

:global(html[data-theme='light'] .chev) {
  background: oklch(0.9 0 0 / 0.9);
  border-color: oklch(0 0 0 / 0.08);
  color: oklch(0.2 0 0);
}
</style>
