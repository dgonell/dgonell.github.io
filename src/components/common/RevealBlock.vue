<script setup lang="ts">
import { ref } from 'vue'
import { useReveal } from '@/composables/useReveal'
const element = ref<HTMLElement | null>(null)
useReveal(element)
</script>
<template>
  <div ref="element" class="reveal"><slot /></div>
</template>
