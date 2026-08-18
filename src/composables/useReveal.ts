import { onBeforeUnmount, onMounted, type Ref } from 'vue'

export function useReveal(target: Ref<HTMLElement | null>) {
  let observer: IntersectionObserver | undefined
  onMounted(() => {
    if (!target.value || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      target.value?.classList.add('is-visible')
      return
    }
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(target.value)
  })
  onBeforeUnmount(() => observer?.disconnect())
}
