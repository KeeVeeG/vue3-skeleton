<script setup lang="ts">
import { ref } from 'vue'
import Skeleton from '@/components/Skeleton.vue'
const ready = ref(false)
</script>

<template>
  <button @click="ready = !ready">Switch</button>
  <Skeleton :ready="ready" width="200" height="1rem">
    <div>I am ready. 1234567890</div>
  </Skeleton>
</template>
