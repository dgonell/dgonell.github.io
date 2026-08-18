<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()
function toggle() {
  locale.value = locale.value === 'en' ? 'es' : 'en'
  localStorage.setItem('locale', locale.value)
  document.documentElement.lang = locale.value
}
</script>
<template>
  <button class="language-toggle" type="button" :aria-label="t('language.label')" @click="toggle">
    <strong>{{ locale === 'en' ? 'ES' : 'EN' }}</strong>
  </button>
</template>
