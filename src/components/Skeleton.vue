<script setup lang="ts">
import { computed } from 'vue'
const { ready, width, height } = defineProps<{
  ready: boolean
  width?: string | number
  height?: string | number
}>()
const style = computed(() => {
  let v = ''
  if (height) {
    if (typeof height === 'number' || /^\d*$/.test(height))
      v += `height:${height}px;`
    else v += `height:${height};`
  }
  if (width) {
    if (typeof width === 'number' || /^\d*$/.test(width))
      v += `width:${width}px;`
    else v += `width:${width};`
  }
  return v
})
</script>

<template>
  <slot v-if="ready" />
  <div v-else class="skeleton-wrapper" :style="style">
    <div class="skeleton">
      <div></div>
    </div>
  </div>
</template>

<style>
.skeleton-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.skeleton {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #f5f5f6;
  border-radius: 0.8rem;
  overflow: hidden;
}
.skeleton div {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  min-width: 600px;
  animation: gradient 2s linear infinite;
  background: linear-gradient(to right, #f5f5f6 8%, #dfdee2 18%, #f5f5f6 33%);
}
@keyframes gradient {
  0% {
    transform: translate(-100%);
  }
  100% {
    transform: translate(100%);
  }
}
</style>
