<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { ArrowDownRight, ArrowUpRight, Braces, Globe2, Waypoints, Workflow } from 'lucide-vue-next'
import BaseModal from '@/components/ui/BaseModal.vue'
import RevealBlock from '@/components/common/RevealBlock.vue'
import { profile, socialLinks } from '@/data/profile'
import { skillGroups } from '@/data/skills'
import { projects } from '@/data/projects'
import type { Project } from '@/types'
const { t, tm } = useI18n()
type Service = { title: string; copy: string }
type Group = { title: string; items: string[] }
type Education = { school: string; degree: string; year: string }
type Career = {
  id: string
  period: string
  company: string
  area: string
  summary: string
  details: string
  responsibilities: string[]
}
const services = computed(() => tm('services.items') as Service[])
const groups = computed(() => tm('skills.groups') as Group[])
const education = computed(() => tm('education.items') as Education[])
const career = computed(() => tm('career.items') as Career[])
const serviceIcons = [Braces, Globe2, Waypoints, Workflow]
const modal = ref<'skills' | 'experience' | 'education' | 'project' | null>(null)
const selected = ref<Project | null>(null)
const selectedCareer = ref<Career | null>(null)
const selectedContent = computed(() =>
  selected.value
    ? {
        ...selected.value,
        category: t(`work.items.${selected.value.id}.category`),
        description: t(`work.items.${selected.value.id}.description`),
        problem: t(`work.items.${selected.value.id}.problem`),
        solution: t(`work.items.${selected.value.id}.solution`),
        features: tm(`work.items.${selected.value.id}.features`) as string[],
      }
    : null,
)
function openProject(project: Project) {
  selected.value = project
  modal.value = 'project'
}
function openExperience(item: Career) {
  selectedCareer.value = item
  modal.value = 'experience'
}
function close() {
  modal.value = null
}
const emailLink = computed(() => (profile.email ? `mailto:${profile.email}` : ''))
</script>
<template>
  <main id="main-content">
    <section id="top" class="sp-hero">
      <div class="sp-hero__copy">
        <div class="hero-kicker">
          <span class="hero-avatar">DG</span>
          <p>{{ t('hero.hello') }} <strong>Dariel Gonell</strong><small>{{ t('hero.location') }}</small></p>
        </div>
        <h1>{{ t('hero.titleStart') }} <em>{{ t('hero.titleAccent') }}</em></h1>
        <h2>{{ t('hero.headline') }}</h2>
        <p>{{ t('hero.description') }}</p>
        <div class="sp-actions">
          <a class="sp-button primary" href="#work"
            >{{ t('hero.work') }} <ArrowDownRight :size="17" /></a
          ><a class="sp-button" href="#contact">{{ t('hero.talk') }} <ArrowUpRight :size="17" /></a>
        </div>
        <div class="sp-social">
          <template v-for="social in socialLinks.slice(0, 2)" :key="social.label"
            ><a
              v-if="social.value"
              :href="social.value"
              target="_blank"
              rel="noopener noreferrer"
              >{{ social.label }} ↗</a
            ><span v-else>{{ social.label }}</span></template
          >
        </div>
        <div class="hero-proof" :aria-label="t('hero.proofLabel')">
          <div><strong>3+</strong><span>{{ t('hero.years') }}</span></div>
          <div><strong>4</strong><span>{{ t('hero.products') }}</span></div>
          <div><strong>Full-stack</strong><span>{{ t('hero.scope') }}</span></div>
        </div>
      </div>
      <div class="sp-visual" :aria-label="t('hero.visual')">
        <div class="visual-window">
          <header><i></i><i></i><i></i><span>profile / dariel-gonell</span></header>
          <div class="profile-card">
            <div class="profile-monogram">DG</div>
            <p>{{ t('hero.cardLabel') }}</p>
            <h3>{{ t('hero.cardTitle') }}</h3>
            <ul>
              <li><span>01</span>{{ t('hero.cardOne') }}</li>
              <li><span>02</span>{{ t('hero.cardTwo') }}</li>
              <li><span>03</span>{{ t('hero.cardThree') }}</li>
            </ul>
          </div>
          <div class="visual-node node-vue">Vue</div>
          <div class="visual-node node-python">Python</div>
          <div class="visual-node node-sql">SQL</div>
          <div class="visual-node node-git">Git</div>
        </div>
        <span class="availability"><i></i>{{ t('hero.available') }}</span>
      </div>
    </section>

    <RevealBlock
      ><section id="about" class="sp-section sp-about">
        <div>
          <p class="section-label">01 / {{ t('about.label') }}</p>
          <h2>{{ t('about.title') }}</h2>
        </div>
        <div class="about-text">
          <p>{{ t('about.p1') }}</p>
          <p>{{ t('about.p2') }}</p>
          <p>{{ t('about.p3') }}</p>
          <blockquote>{{ t('about.quote') }}</blockquote>
        </div>
        <div class="photo-space">
          <img v-if="profile.photo" :src="profile.photo" :alt="profile.name" /><span v-else
            >DG.</span
          >
        </div>
      </section></RevealBlock
    >

    <RevealBlock
      ><section class="sp-section">
        <div class="sp-heading">
          <p class="section-label">02 / {{ t('services.label') }}</p>
          <h2>{{ t('services.title') }}</h2>
        </div>
        <div class="service-list">
          <article v-for="(service, index) in services" :key="service.title">
            <span>0{{ index + 1 }}</span
            ><component :is="serviceIcons[index]" :size="22" />
            <div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.copy }}</p>
            </div>
            <ArrowUpRight class="row-arrow" :size="18" />
          </article>
        </div></section
    ></RevealBlock>

    <RevealBlock
      ><section id="skills" class="sp-section">
        <div class="sp-heading split">
          <div>
            <p class="section-label">03 / {{ t('skills.label') }}</p>
            <h2>{{ t('skills.title') }}</h2>
          </div>
          <p>{{ t('skills.intro') }}</p>
        </div>
        <div class="skill-groups">
          <article v-for="group in groups" :key="group.title">
            <h3>{{ group.title }}</h3>
            <ul>
              <li v-for="item in group.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
        <button class="text-action" type="button" @click="modal = 'skills'">
          {{ t('skills.view') }} <ArrowUpRight :size="16" />
        </button></section
    ></RevealBlock>

    <RevealBlock
      ><section id="experience" class="sp-section">
        <div class="sp-heading">
          <p class="section-label">04 / {{ t('experience.label') }}</p>
          <h2>{{ t('career.title') }}</h2>
        </div>
        <article v-for="item in career" :key="item.id" class="experience-row">
          <span>{{ item.period }}</span>
          <div>
            <h3>{{ item.company }}</h3>
            <small>{{ item.area }}</small>
            <p>{{ item.summary }}</p>
          </div>
          <button type="button" @click="openExperience(item)">
            {{ t('career.view') }} <ArrowUpRight :size="16" />
          </button>
        </article></section
    ></RevealBlock>

    <RevealBlock
      ><section class="sp-section education">
        <div class="sp-heading">
          <p class="section-label">05 / {{ t('education.label') }}</p>
          <h2>{{ t('education.title') }}</h2>
        </div>
        <div class="education-list">
          <article v-for="item in education" :key="item.degree">
            <strong>{{ item.school }}</strong>
            <div>
              <h3>{{ item.degree }}</h3>
              <span>{{ item.year }}</span>
            </div>
          </article>
        </div>
        <button class="text-action" type="button" @click="modal = 'education'">
          {{ t('education.more') }} <ArrowUpRight :size="16" />
        </button></section
    ></RevealBlock>

    <RevealBlock
      ><section id="work" class="sp-section">
        <div class="sp-heading split">
          <div>
            <p class="section-label">06 / {{ t('work.label') }}</p>
            <h2>{{ t('work.title') }}</h2>
          </div>
          <p>{{ t('work.intro') }}</p>
        </div>
        <div class="editorial-work">
          <button
            v-for="(project, index) in projects.slice(0, 4)"
            :key="project.id"
            type="button"
            @click="openProject(project)"
          >
            <span>0{{ index + 1 }}</span>
            <figure class="project-preview">
              <img
                v-if="project.gallery[0]"
                :src="project.gallery[0]"
                :alt="t('work.preview', { project: project.title })"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div>
              <small>{{ t(`work.items.${project.id}.category`) }}</small>
              <h3>{{ project.title }}</h3>
              <p>{{ t(`work.items.${project.id}.description`) }}</p>
              <ul>
                <li v-for="tech in project.technologies.slice(0, 4)" :key="tech">{{ tech }}</li>
              </ul>
            </div>
            <span class="project-action">{{ t('work.details') }} <ArrowUpRight :size="17" /></span>
          </button>
        </div></section
    ></RevealBlock>

    <section id="contact" class="sp-contact">
      <p class="section-label">07 / {{ t('contact.label') }}</p>
      <h2>{{ t('contact.title') }}</h2>
      <p>{{ t('contact.copy') }}</p>
      <a v-if="emailLink" :href="emailLink" class="sp-button primary"
        >{{ t('contact.action') }} <ArrowUpRight /></a
      ><span v-else class="contact-pending">{{ t('contact.pending') }}</span>
      <div class="contact-links">
        <template v-for="social in socialLinks" :key="social.label"
          ><a
            v-if="social.value"
            :href="social.value"
            :target="social.value.startsWith('http') ? '_blank' : undefined"
            :rel="social.value.startsWith('http') ? 'noopener noreferrer' : undefined"
            >{{ social.label }} ↗</a
          ><span v-else>{{ social.label }}</span></template
        >
      </div>
    </section>

    <BaseModal :open="modal === 'skills'" :title="t('skills.modalTitle')" @close="close"
      ><p class="modal-intro">{{ t('skills.modalIntro') }}</p>
      <div class="modal-skills">
        <section v-for="group in skillGroups" :key="group.id">
          <h3>{{ group.label }}</h3>
          <div>
            <span v-for="skill in group.skills" :key="skill">{{ skill }}</span>
          </div>
        </section>
      </div></BaseModal
    >
    <BaseModal
      :open="modal === 'experience'"
      :title="selectedCareer?.company || t('career.modalTitle')"
      @close="close"
      ><template v-if="selectedCareer"
        ><p class="project-modal-category">
          {{ selectedCareer.area }} · {{ selectedCareer.period }}
        </p>
        <p class="modal-lead">{{ selectedCareer.details }}</p>
        <h3>{{ t('career.responsibilities') }}</h3>
        <ul class="modal-list">
          <li v-for="item in selectedCareer.responsibilities" :key="item">
            {{ item }}
          </li>
        </ul></template
      ></BaseModal
    >
    <BaseModal :open="modal === 'education'" :title="t('education.modalTitle')" @close="close"
      ><ul class="modal-list">
        <li v-for="item in tm('education.additional') as string[]" :key="item">{{ item }}</li>
      </ul></BaseModal
    >
    <BaseModal
      :open="modal === 'project' && !!selectedContent"
      :title="selectedContent?.title || ''"
      @close="close"
      ><template v-if="selectedContent"
        ><figure v-if="selectedContent.gallery[0]" class="project-modal-preview">
          <img
            :src="selectedContent.gallery[0]"
            :alt="t('work.preview', { project: selectedContent.title })"
          />
        </figure>
        <p class="project-modal-category">{{ selectedContent.category }}</p>
        <p class="modal-lead">{{ selectedContent.description }}</p>
        <div class="project-modal-grid">
          <section>
            <h3>{{ t('work.problem') }}</h3>
            <p>{{ selectedContent.problem }}</p>
          </section>
          <section>
            <h3>{{ t('work.solution') }}</h3>
            <p>{{ selectedContent.solution }}</p>
          </section>
        </div>
        <h3>{{ t('work.features') }}</h3>
        <ul class="modal-list">
          <li v-for="feature in selectedContent.features" :key="feature">{{ feature }}</li>
        </ul>
        <h3>{{ t('work.stack') }}</h3>
        <div class="modal-tags">
          <span v-for="tech in selectedContent.technologies" :key="tech">{{ tech }}</span>
        </div></template
      ></BaseModal
    >
  </main>
</template>
