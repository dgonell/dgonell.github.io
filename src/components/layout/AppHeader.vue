<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import ThemeToggle from '@/components/common/ThemeToggle.vue'
import LanguageToggle from '@/components/common/LanguageToggle.vue'
const { t, locale } = useI18n()
const open = ref(false),
  scrolled = ref(false)

const update = () => (scrolled.value = scrollY > 20)
const handleResize = () => {
  if (window.innerWidth > 860) {
    open.value = false
  }
}

onMounted(() => {
  addEventListener('scroll', update, { passive: true })
  addEventListener('resize', handleResize, { passive: true })
})

onBeforeUnmount(() => {
  removeEventListener('scroll', update)
  removeEventListener('resize', handleResize)
})

function go() {
  open.value = false
}
</script>
<template>
  <header class="app-header" :class="{ 'is-scrolled': scrolled, 'menu-open': open }">
    <div class="nav-shell">
      <a class="wordmark" href="#top"><span>DG.</span><strong>Dariel Gonell</strong></a>
      <nav
        class="desktop-nav"
        :aria-label="locale === 'en' ? 'Main navigation' : 'Navegación principal'"
      >
        <a href="#about">{{ t('nav.about') }}</a
        ><a href="#skills">{{ t('nav.skills') }}</a
        ><a href="#experience">{{ t('nav.experience') }}</a
        ><a href="#work">{{ t('nav.work') }}</a
        ><a href="#contact">{{ t('nav.contact') }}</a>
      </nav>
      <div class="nav-actions">
        <LanguageToggle /><ThemeToggle /><a class="talk-link" href="#contact">{{ t('nav.talk') }}</a
        ><button
          class="menu-button"
          type="button"
          :aria-label="t(open ? 'nav.close' : 'nav.menu')"
          :aria-expanded="open"
          @click="open = !open"
        >
          <X v-if="open" /><Menu v-else />
        </button>
      </div>
    </div>
    <nav v-if="open" class="mobile-nav">
      <a href="#about" @click="go">{{ t('nav.about') }}</a
      ><a href="#skills" @click="go">{{ t('nav.skills') }}</a
      ><a href="#experience" @click="go">{{ t('nav.experience') }}</a
      ><a href="#work" @click="go">{{ t('nav.work') }}</a
      ><a href="#contact" @click="go">{{ t('nav.contact') }}</a
      ><LanguageToggle />
    </nav>
  </header>
</template>
