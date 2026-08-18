<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { useScrollProgress } from '@/composables/useScrollProgress'
import { useI18n } from 'vue-i18n'
const progress = useScrollProgress()
const { locale } = useI18n()
import { watchEffect } from 'vue'
watchEffect(() => {
  document.documentElement.lang = locale.value
  document.title =
    locale.value === 'en'
      ? 'Dariel Gonell — Software Developer'
      : 'Dariel Gonell — Desarrollador de Software'
  const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (meta)
    meta.content =
      locale.value === 'en'
        ? 'Software Developer building practical business systems, web applications, and digital solutions.'
        : 'Desarrollador de Software creando sistemas empresariales, aplicaciones web y soluciones digitales prácticas.'
})
</script>
<template>
  <a class="skip-link" href="#main-content">{{
    locale === 'en' ? 'Skip to content' : 'Saltar al contenido'
  }}</a>
  <div class="progress" :style="{ transform: `scaleX(${progress})` }"></div>
  <AppHeader /><RouterView v-slot="{ Component }"
    ><Transition name="page" mode="out-in"><component :is="Component" /></Transition></RouterView
  ><AppFooter />
</template>
