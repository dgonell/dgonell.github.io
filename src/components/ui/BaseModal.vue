<script setup lang="ts">
import { nextTick, onBeforeUnmount, watch, ref } from 'vue'
import { X } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
const props = defineProps<{ open: boolean; title: string }>()
const emit = defineEmits<{ close: [] }>()
const { t } = useI18n()
const panel = ref<HTMLElement | null>(null)
let previous: HTMLElement | null = null
function close() {
  emit('close')
}
function onKey(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
  if (event.key === 'Tab' && panel.value) {
    const nodes = [
      ...panel.value.querySelectorAll<HTMLElement>(
        'button,a[href],[tabindex]:not([tabindex="-1"])',
      ),
    ].filter((el) => !el.hasAttribute('disabled'))
    if (!nodes.length) return
    const first = nodes[0]!,
      last = nodes[nodes.length - 1]!
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }
}
watch(
  () => props.open,
  async (value) => {
    if (value) {
      previous = document.activeElement as HTMLElement
      document.body.style.overflow = 'hidden'
      addEventListener('keydown', onKey)
      await nextTick()
      panel.value?.querySelector<HTMLElement>('button')?.focus()
    } else {
      document.body.style.overflow = ''
      removeEventListener('keydown', onKey)
      previous?.focus()
    }
  },
)
onBeforeUnmount(() => {
  document.body.style.overflow = ''
  removeEventListener('keydown', onKey)
})
</script>
<template>
  <Teleport to="body"
    ><Transition name="modal"
      ><div v-if="open" class="modal-backdrop" @mousedown.self="close">
        <section
          ref="panel"
          class="modal-panel"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="`modal-${title.replace(/\s/g, '-')}`"
        >
          <header>
            <p :id="`modal-${title.replace(/\s/g, '-')}`">{{ title }}</p>
            <button type="button" :aria-label="t('modal.close')" @click="close">
              <X :size="20" />
            </button>
          </header>
          <div class="modal-body"><slot /></div>
        </section></div></Transition
  ></Teleport>
</template>
