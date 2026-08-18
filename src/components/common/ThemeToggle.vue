<script setup lang="ts">
import { Moon, Sun, Monitor } from 'lucide-vue-next'
import { useTheme, type Theme } from '@/composables/useTheme'
import { useI18n } from 'vue-i18n'
const { theme, setTheme } = useTheme()
const { t } = useI18n()
const options: { value: Theme; label: string; icon: typeof Sun }[] = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor },
]
function cycle() {
  const index = options.findIndex((option) => option.value === theme.value)
  setTheme(options[(index + 1) % options.length]!.value)
}
</script>
<template>
  <button class="theme-toggle" type="button" :aria-label="t('theme.label')" @click="cycle">
    <component :is="options.find((o) => o.value === theme)?.icon" :size="17" /><span
      class="sr-only"
      >{{ t('theme.label') }}</span
    >
  </button>
</template>
