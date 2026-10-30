<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import Sticker from '../components/Sticker.vue';
import CertificateShowcase from '../components/CertificateShowcase.vue';
import { coursesData } from '../data/courses.js';

const route = useRoute();
const emit = defineEmits(['openEnroll']);

const activeAccordion = ref(0);

const course = computed(() => {
  const slug = route.params.slug;
  return coursesData.find(c => c.slug === slug);
});

const toggleAccordion = (idx) => {
  activeAccordion.value = activeAccordion.value === idx ? -1 : idx;
};
</script>

<template>
  <div v-if="!course" class="course-not-found container text-center">
    <div class="empty-detail glass-surface">
      <span class="empty-icon">⚠️</span>
      <h1>Kurs topilmadi</h1>
      <p>Kechirasiz, siz qidirayotgan kurs mavjud emas yoki nomi o‘zgargan.</p>
      <router-link to="/courses" class="btn btn-primary">
        Barcha Kurslar Ro‘yxatiga Qaytish
      </router-link>
    </div>
  </div>

  <div v-else class="course-detail-page">
    <!-- Breadcrumb & Hero Banner -->
    <header class="detail-hero">
      <div class="container">
        <!-- Breadcrumb -->
        <nav class="breadcrumb-nav" aria-label="Yo‘l ko‘rsatkich">
          <router-link to="/">Bosh sahifa</router-link>
          <span class="sep">/</span>
          <router-link to="/courses">Kurslar</router-link>
          <span class="sep">/</span>
          <span class="current">{{ course.title }}</span>
        </nav>

        <div class="detail-header-grid">
          <div class="header-main">
            <div class="badge-row">
              <span class="cat-badge">{{ course.categoryName }}</span>
              <span class="status-badge" :class="course.badgeType">{{ course.badge }}</span>
            </div>

            <h1 class="course-main-title">
              {{ course.title }}
            </h1>

            <p class="course-main-desc">
              {{ course.overview }}
            </p>

            <!-- Quick Specs Row -->
            <div class="specs-grid">
              <div class="spec-item">
                <span class="spec-label">Davomiyligi</span>
                <span class="spec-value"><Sticker name="clock" size="xs" /> {{ course.duration }}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Dars jadvali</span>
                <span class="spec-value"><Sticker name="calendar" size="xs" /> {{ course.schedule }}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Daraja</span>
                <span class="spec-value"><Sticker name="target" size="xs" /> {{ course.level }}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Format</span>
                <span class="spec-value"><Sticker name="building" size="xs" /> Amaliy & Oflayn / Onlayn</span>
              </div>
            </div>
          </div>

          <!-- Sticky Enrollment Card -->
          <aside class="enroll-card-col">
            <div class="enroll-card glass-surface">
              <div class="enroll-card-icon">
                <Sticker :name="course.icon" size="xl" />
              </div>
              <div class="enroll-price-box">
                <span class="enroll-price-label">Oylik to‘lov</span>
                <span class="enroll-price-num">{{ course.price }}</span>
              </div>

              <ul class="enroll-card-perks">
                <li><Sticker name="sparkles" size="xs" /> Bepul sinov darsi</li>
                <li><Sticker name="code" size="xs" /> Zamonaviy jihozlangan kompyuter zali</li>
                <li><Sticker name="docs" size="xs" /> Har bir mavzu bo‘yicha kod & materiallar</li>
                <li><Sticker name="certificate" size="xs" /> Rasmiy sertifikat va portfolio</li>
                <li><Sticker name="coffee" size="xs" /> Bepul kofe va Coworking zonasi</li>
              </ul>

              <button
                class="btn btn-primary btn-block"
                @click="emit('openEnroll', course.title)"
              >
                Guruhga Yozilish
              </button>

              <p class="enroll-disclaimer">
                * Birinchi sinov darsi mutlaqo bepul va majburiyatsizdir!
              </p>
            </div>
          </aside>
        </div>
      </div>
    </header>

    <!-- Main Content Breakdown -->
    <main class="detail-body-section">
      <div class="container body-container">
        <!-- Left: Curriculum and Outcomes -->
        <div class="body-main">
          <!-- Learning Outcomes -->
          <section class="section-block">
            <h2 class="block-title">Kurs yakunida nimalarni o‘rganasiz?</h2>
            <div class="outcomes-grid">
              <div
                v-for="(outcome, i) in course.outcomes"
                :key="i"
                class="outcome-card glass-surface"
              >
                <div class="outcome-num">0{{ i + 1 }}</div>
                <p class="outcome-text">{{ outcome }}</p>
              </div>
            </div>
          </section>

          <!-- Curriculum Modules Accordion -->
          <section class="section-block" data-aos="fade-up">
            <h2 class="block-title">O‘quv dasturi rejasi (Modullar)</h2>
            <div class="curriculum-accordion">
              <div
                v-for="(mod, idx) in course.modules"
                :key="idx"
                class="module-card glass-surface"
                :class="{ open: activeAccordion === idx }"
              >
                <button
                  class="module-trigger"
                  @click="toggleAccordion(idx)"
                  :aria-expanded="activeAccordion === idx"
                >
                  <span class="mod-title">{{ mod.title }}</span>
                  <span class="toggle-symbol">{{ activeAccordion === idx ? '−' : '+' }}</span>
                </button>
                <div v-show="activeAccordion === idx" class="module-body">
                  <p>{{ mod.desc }}</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Official Certificate Showcase -->
          <section class="section-block certificate-section" data-aos="fade-up">
            <h2 class="block-title">Kursni Bitirgach Beriladigan Rasmiy Sertifikat</h2>
            <CertificateShowcase :course="course" />
          </section>

          <!-- Prerequisites & Audience -->
          <section class="section-block">
            <h2 class="block-title">Kurs kimlar uchun va talablar</h2>
            <div class="prereq-card glass-surface">
              <div class="prereq-row">
                <Sticker name="target" size="sm" class="prereq-sticker" />
                <div>
                  <strong>Kimlar uchun:</strong>
                  <p>Maktab o‘quvchilari, talabalar va yangi daromadli kasbni noldan puxta egallashni maqsad qilganlar uchun.</p>
                </div>
              </div>
              <div class="prereq-row">
                <Sticker name="gear" size="sm" class="prereq-sticker" />
                <div>
                  <strong>Boshlang‘ich talablar:</strong>
                  <p>{{ course.prerequisites }}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.course-not-found {
  padding: 160px 0 100px;
}

.empty-detail {
  max-width: 600px;
  margin: 0 auto;
  padding: 50px 30px;
  border-radius: var(--radius-xl);
}

.empty-detail .empty-icon {
  font-size: 3.5rem;
  margin-bottom: 16px;
  display: block;
}

.empty-detail h1 {
  font-size: 2rem;
  margin-bottom: 12px;
}

.empty-detail p {
  color: var(--color-text-muted);
  margin-bottom: 24px;
}

.course-detail-page {
  padding-bottom: 80px;
}

.detail-hero {
  padding: 120px 0 60px;
  background: radial-gradient(circle at 70% 30%, rgba(101, 91, 255, 0.12) 0%, transparent 60%);
  border-bottom: 1px solid var(--color-border);
}

.breadcrumb-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--color-text-dim);
  margin-bottom: 24px;
}

.breadcrumb-nav a {
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb-nav a:hover {
  color: var(--color-accent);
}

.breadcrumb-nav .current {
  color: var(--color-text);
  font-weight: 500;
}

.detail-header-grid {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 48px;
  align-items: flex-start;
}

.badge-row {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
}

.cat-badge {
  padding: 6px 14px;
  background: rgba(0, 201, 232, 0.12);
  color: var(--color-accent);
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 600;
}

.status-badge {
  padding: 6px 14px;
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 600;
}

.status-badge.hot {
  background: rgba(239, 68, 68, 0.15);
  color: #f87171;
}

.status-badge.new {
  background: rgba(101, 91, 255, 0.15);
  color: #a5b4fc;
}

.status-badge.standard {
  background: rgba(255, 255, 255, 0.08);
  color: var(--color-text-muted);
}

.course-main-title {
  font-size: clamp(2.2rem, 3.8vw, 3.2rem);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 18px;
  letter-spacing: -0.02em;
}

.course-main-desc {
  font-size: 1.1rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 720px;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.spec-item {
  padding: 16px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
}

.spec-label {
  font-size: 0.75rem;
  color: var(--color-text-dim);
  margin-bottom: 4px;
}

.spec-value {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text);
}

/* Sticky card */
.enroll-card {
  padding: 32px 24px;
  border-radius: var(--radius-xl);
  border: 1px solid rgba(0, 201, 232, 0.3);
  text-align: center;
  position: sticky;
  top: 100px;
}

.enroll-card-icon {
  font-size: 3rem;
  margin-bottom: 12px;
}

.enroll-price-box {
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-border);
}

.enroll-price-label {
  display: block;
  font-size: 0.8rem;
  color: var(--color-text-dim);
  margin-bottom: 4px;
}

.enroll-price-num {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--color-accent);
}

.enroll-card-perks {
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  text-align: left;
}

.enroll-card-perks li {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  margin-bottom: 10px;
}

.btn-block {
  width: 100%;
}

.enroll-disclaimer {
  font-size: 0.74rem;
  color: var(--color-text-dim);
  margin-top: 14px;
  line-height: 1.4;
}

/* Detail Body */
.detail-body-section {
  padding: 60px 0 90px;
}

.body-container {
  max-width: 1080px;
  margin: 0 auto;
  width: 100%;
}

.body-main {
  width: 100%;
}

.section-block {
  margin-bottom: 56px;
}

.block-title {
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 24px;
  letter-spacing: -0.01em;
  color: #FFFFFF;
}

.outcomes-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

@media (min-width: 768px) {
  .outcome-card:last-child:nth-child(odd) {
    grid-column: 1 / -1;
  }
}

@media (max-width: 767px) {
  .outcomes-grid {
    grid-template-columns: 1fr;
  }
}

.outcome-card {
  display: flex;
  gap: 16px;
  padding: 22px 24px;
  border-radius: var(--radius-md);
  background: var(--color-surface-card);
  border: 1px solid var(--color-border-glass);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.outcome-card:hover {
  transform: translateY(-2px);
  border-color: rgba(52, 211, 153, 0.45);
}

.outcome-num {
  font-family: 'Space Grotesk', var(--font-sans);
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--color-green-neon, #00F59B);
  line-height: 1;
}

.outcome-text {
  font-size: 0.95rem;
  color: #FFFFFF;
  line-height: 1.55;
  font-weight: 500;
}

/* Accordion */
.curriculum-accordion {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
}

.module-card {
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--color-surface-card);
  border: 1px solid var(--color-border-glass);
  transition: all 0.25s ease;
}

.module-card:hover {
  border-color: rgba(52, 211, 153, 0.4);
}

.module-card.open {
  border-color: var(--color-green-neon, #00F59B);
  box-shadow: 0 8px 24px rgba(0, 245, 155, 0.12);
}

.module-trigger {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px;
  background: transparent;
  border: none;
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
}

.toggle-symbol {
  font-size: 1.3rem;
  color: var(--color-accent);
}

.module-body {
  padding: 0 20px 18px;
  color: var(--color-text-muted);
  font-size: 0.92rem;
  line-height: 1.6;
}

/* Prereq */
.prereq-card {
  padding: 24px;
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.prereq-row {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.prereq-icon {
  font-size: 1.4rem;
}

.prereq-row strong {
  display: block;
  font-size: 0.95rem;
  margin-bottom: 4px;
}

.prereq-row p {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.5;
}

@media (max-width: 900px) {
  .detail-header-grid {
    grid-template-columns: 1fr;
  }
  .enroll-card {
    position: static;
  }
}

@media (max-width: 600px) {
  .specs-grid {
    grid-template-columns: 1fr;
  }
}
</style>
