<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <main id="main-content" class="not-found">
    <span>404</span>
    <h1>{{ t('notFound.title') }}</h1>
    <RouterLink to="/">{{ t('notFound.home') }} →</RouterLink>
  </main>
</template>
