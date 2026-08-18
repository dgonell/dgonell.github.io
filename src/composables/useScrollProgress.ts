import { onBeforeUnmount, onMounted, ref } from 'vue'
export function useScrollProgress() {
  const progress = ref(0)
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight
    progress.value = max > 0 ? scrollY / max : 0
  }
  onMounted(() => {
    addEventListener('scroll', update, { passive: true })
    update()
  })
  onBeforeUnmount(() => removeEventListener('scroll', update))
  return progress
}
