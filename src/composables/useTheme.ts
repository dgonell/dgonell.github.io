import { ref, watch } from 'vue'
export type Theme = 'light' | 'dark' | 'system'
const theme = ref<Theme>((localStorage.getItem('theme') as Theme) || 'dark')

function applyTheme(value: Theme) {
  const dark =
    value === 'dark' || (value === 'system' && matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.toggle('dark', dark)
}
applyTheme(theme.value)
watch(theme, (value) => {
  localStorage.setItem('theme', value)
  applyTheme(value)
})
export function useTheme() {
  return {
    theme,
    setTheme: (value: Theme) => {
      theme.value = value
    },
  }
}
