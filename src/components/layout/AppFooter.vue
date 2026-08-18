<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { profile, socialLinks } from '@/data/profile'
const { t } = useI18n()
const year = new Date().getFullYear()
</script>
<template>
  <footer class="sp-footer">
    <div>
      <strong>DG.</strong>
      <p>{{ profile.name }}<br />{{ t('footer.role') }}</p>
    </div>
    <div class="footer-socials">
      <template v-for="social in socialLinks" :key="social.label"
        ><a
          v-if="social.value"
          :href="social.value"
          :aria-label="social.label"
          :target="social.value.startsWith('http') ? '_blank' : undefined"
          :rel="social.value.startsWith('http') ? 'noopener noreferrer' : undefined"
          >{{ social.label }}</a
        ></template
      >
    </div>
    <span>© {{ year }}</span>
  </footer>
</template>
