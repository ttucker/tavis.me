<template>
  <div class="carousel" @keydown.left.prevent="prev" @keydown.right.prevent="next" tabindex="0">
    <div class="chev-overlay" aria-hidden="true">
      <button class="chev left" @click="prev" aria-label="Previous slide">
        <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg>
      </button>

      <button class="chev right" @click="next" aria-label="Next slide">
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
  --carousel-chev-size: 40px;
  --carousel-chev-sticky-top: calc(50vh - 20px);
  --carousel-fade-enter-duration: 2000ms;
  --carousel-fade-leave-duration: 500ms;

  outline: none;
  position: relative;
}

.viewport {
  overflow: visible;
}

.viewport-stage {
  position: relative;
}

.viewport-stage,
.active-slide {
  min-height: 100%;
}

.chev-overlay {
  height: 0;
  inset-inline: 0;
  pointer-events: none;
  position: sticky;
  top: var(--carousel-chev-sticky-top);
  z-index: 1;
}

.fade-enter-active,
.fade-leave-active {
  backface-visibility: hidden;
  transition-property: opacity;
  will-change: opacity;
}

.fade-enter-active {
  transition-duration: var(--carousel-fade-enter-duration);
  transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 1;
}

.fade-leave-active {
  inset: 0;
  pointer-events: none;
  position: absolute;
  transition-duration: var(--carousel-fade-leave-duration);
  transition-timing-function: ease-out;
  width: 100%;
  z-index: 0;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.active-slide {
  transform: translateZ(0);
  width: 100%;
}

.chev {
  align-items: center;
  background: var(--carousel-chev-bg);
  border: 1px solid var(--carousel-chev-border);
  border-radius: 999px;
  color: var(--carousel-chev-color);
  cursor: pointer;
  display: flex;
  height: var(--carousel-chev-size);
  justify-content: center;
  position: absolute;
  pointer-events: auto;
  top: 0;
  width: var(--carousel-chev-size);
  z-index: 1;
  transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background: var(--carousel-chev-bg-hover);
    border-color: var(--carousel-chev-border-hover);
    color: var(--carousel-chev-color-hover);
  }
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

</style>
