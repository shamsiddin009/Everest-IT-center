<script setup>
import { ref, computed } from 'vue';
import Sticker from '../components/Sticker.vue';
import { coursesData, courseCategories } from '../data/courses.js';

const emit = defineEmits(['openEnroll']);

const activeCategory = ref('all');
const searchQuery = ref('');

const filteredCourses = computed(() => {
  return coursesData.filter(course => {
    const matchesCategory = activeCategory.value === 'all' || course.category === activeCategory.value;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          course.categoryName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          course.overview.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesCategory && matchesSearch;
  });
});
</script>

<template>
  <div class="courses-page">
    <!-- Header Banner -->
    <header class="courses-header">
      <div class="container header-container">
        <span class="page-badge">Ta’lim Dasturlari</span>
        <h1 class="page-title">
          Kelajak kasblarini <span class="text-gradient">professional darajada</span> o‘rganing
        </h1>
        <p class="page-subtitle">
          Everest IT Center o‘quv dasturlari amaliy tajriba, mentorlik nazorati va xalqaro metodikalar asosida ishlab chiqilgan.
        </p>
      </div>
    </header>

    <!-- Filters & Search Toolbar -->
    <section class="toolbar-section" data-aos="fade-up" data-aos-delay="100">
      <div class="container toolbar-wrap">
        <!-- Category Tabs -->
        <div class="category-tabs" role="tablist" aria-label="Kurs kategoriyalari">
          <button
            v-for="cat in courseCategories"
            :key="cat.id"
            class="tab-btn"
            :class="{ active: activeCategory === cat.id }"
            @click="activeCategory = cat.id"
            role="tab"
            :aria-selected="activeCategory === cat.id"
          >
            <Sticker :name="cat.icon" size="xs" variant="flat" class="tab-sticker" />
            <span>{{ cat.name }}</span>
          </button>
        </div>

        <!-- Search Bar -->
        <div class="search-box">
          <svg class="search-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M9 17A8 8 0 109 1a8 8 0 000 16zM19 19l-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Kurslarni qidirish..."
            class="search-input"
            aria-label="Kurs nomini kiriting"
          />
        </div>
      </div>
    </section>

    <!-- Courses Grid -->
    <section class="courses-grid-section">
      <div class="container">
        <div v-if="filteredCourses.length > 0" class="courses-grid">
          <article
            v-for="(course, idx) in filteredCourses"
            :key="course.slug"
            class="course-card modern-pill-card"
            data-aos="fade-up"
            :data-aos-delay="(idx % 3) * 100"
          >
            <!-- Top Visual Banner with Image & Glass Badges -->
            <div class="card-visual-top">
              <img
                :src="course.image"
                :alt="course.title"
                class="card-banner-bg"
                loading="lazy"
              />
              <div class="visual-gradient-mask"></div>

              <!-- Overlapping Floating Avatar Circle (like in 2nd image) -->
              <div class="floating-avatar-circle">
                <span class="avatar-icon-char">{{ course.icon }}</span>
              </div>

              <!-- Top-right Glass Category Chip -->
              <div class="top-glass-chip">
                <span class="chip-star">✨</span>
                <span>{{ course.categoryName }}</span>
              </div>
            </div>

            <!-- Card Content Body -->
            <div class="card-modern-body">
              <div class="title-bookmark-row">
                <div class="title-col">
                  <h2 class="course-title">
                    <router-link :to="`/courses/${course.slug}`" class="title-link">
                      {{ course.title }}
                    </router-link>
                  </h2>
                  <span class="course-level-sub">{{ course.level }}</span>
                </div>
                <button
                  class="bookmark-icon-btn"
                  @click="emit('openEnroll', course.title)"
                  title="Kursni saqlash yoki yozilish"
                  aria-label="Saqlash"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                  </svg>
                </button>
              </div>

              <p class="course-overview">{{ course.overview }}</p>

              <!-- 3-Pill Stats Row (★ 5.0 Rating · 🚩 Price · ⏱️ Duration) -->
              <div class="stats-three-strip">
                <div class="strip-item">
                  <div class="strip-header">
                    <span class="strip-icon gold">★</span>
                    <strong>5.0</strong>
                  </div>
                  <span class="strip-label">Reyting</span>
                </div>

                <div class="strip-item">
                  <div class="strip-header">
                    <span class="strip-icon cyan">💳</span>
                    <strong>{{ course.price.replace(' so‘m/oy', '') }}</strong>
                  </div>
                  <span class="strip-label">Oylik to‘lov</span>
                </div>

                <div class="strip-item">
                  <div class="strip-header">
                    <span class="strip-icon purple">⏱️</span>
                    <strong>{{ course.duration }}</strong>
                  </div>
                  <span class="strip-label">Davomiyligi</span>
                </div>
              </div>

              <!-- Full-Width "Get In Touch / Yozilish" CTA Button -->
              <button
                class="btn-modern-action"
                @click="emit('openEnroll', course.title)"
              >
                <span>Kursga Yozilish</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </article>
        </div>

        <!-- Empty State -->
        <div v-else class="empty-state glass-surface">
          <Sticker name="search" size="lg" class="empty-sticker" />
          <h3>Hech qanday kurs topilmadi</h3>
          <p>Iltimos, boshqa qidiruv so‘zidan yoki kategoriyadan foydalanib ko‘ring.</p>
          <button class="btn btn-secondary" @click="searchQuery = ''; activeCategory = 'all'">
            Barcha kurslarni ko‘rish
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.courses-page {
  padding-bottom: 80px;
}

.courses-header {
  padding: 120px 0 50px;
  background: radial-gradient(circle at 50% 20%, rgba(101, 91, 255, 0.15) 0%, transparent 60%);
  text-align: center;
}

.header-container {
  max-width: 800px;
}

.page-badge {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(0, 201, 232, 0.1);
  color: var(--color-accent);
  border: 1px solid rgba(0, 201, 232, 0.25);
  border-radius: var(--radius-full);
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 18px;
}

.page-title {
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.page-subtitle {
  color: var(--color-text-muted);
  font-size: 1.05rem;
  line-height: 1.6;
}

/* Toolbar */
.toolbar-section {
  position: sticky;
  top: 76px;
  z-index: 50;
  padding: 16px 0;
  background: rgba(8, 15, 26, 0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 40px;
}

.toolbar-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.category-tabs {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding: 4px 2px 8px;
  scrollbar-width: none;
  touch-action: pan-x;
  width: 100%;
}

.category-tabs::-webkit-scrollbar {
  display: none;
}

.tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: var(--radius-full);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  font-size: 0.88rem;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  flex-shrink: 0;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: all 0.2s ease;
}

.tab-btn * {
  pointer-events: none;
}

.tab-btn:hover {
  background: var(--color-surface-hover);
  color: var(--color-text);
  border-color: rgba(255, 255, 255, 0.15);
}

.tab-btn.active {
  background: var(--color-green-primary, #10B981);
  color: #ffffff;
  border-color: var(--color-green-primary, #10B981);
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4);
}

.search-box {
  position: relative;
  min-width: 260px;
}

.search-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: var(--color-text-dim);
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 10px 16px 10px 40px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  color: var(--color-text);
  font-size: 0.88rem;
  outline: none;
  transition: all 0.2s ease;
}

.search-input:focus {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(0, 201, 232, 0.15);
}

/* Grid */
.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 28px;
}

/* ═══ Modern Pill Card Style (Inspired by 2nd Image) ═══ */
.modern-pill-card {
  background: #081610;
  border: 1px solid rgba(16, 185, 129, 0.22);
  border-radius: 28px;
  overflow: hidden;
  padding: 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.65), 0 0 20px rgba(16, 185, 129, 0.08);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
              border-color 0.35s ease;
  position: relative;
}

.modern-pill-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0, 245, 155, 0.5);
  box-shadow: 0 25px 55px -10px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 245, 155, 0.22);
}

/* Card Visual Top */
.card-visual-top {
  position: relative;
  height: 160px;
  width: 100%;
  overflow: hidden;
  background: #050F0B;
}

.card-banner-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.modern-pill-card:hover .card-banner-bg {
  transform: scale(1.08);
}

.visual-gradient-mask {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(4, 9, 7, 0.15) 0%, rgba(8, 22, 16, 0.95) 100%);
  pointer-events: none;
}

/* Overlapping Floating Avatar Circle */
.floating-avatar-circle {
  position: absolute;
  bottom: 12px;
  left: 20px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #10B981;
  border: 3.5px solid #06110D;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.5), 0 0 16px rgba(16, 185, 129, 0.4);
  z-index: 2;
  transition: transform 0.3s ease;
}

.modern-pill-card:hover .floating-avatar-circle {
  transform: scale(1.08);
}

.avatar-icon-char {
  font-size: 1.6rem;
}

/* Top-right Glass Chip */
.top-glass-chip {
  position: absolute;
  top: 14px;
  right: 16px;
  background: rgba(4, 9, 7, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-full);
  padding: 4px 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.76rem;
  font-weight: 700;
  color: #FFFFFF;
  z-index: 2;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
}

.chip-star {
  font-size: 0.85rem;
}

/* Card Body */
.card-modern-body {
  padding: 20px 22px 22px;
  background: #06110D;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.title-bookmark-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
}

.title-col {
  flex: 1;
}

.course-title {
  font-family: var(--font-heading);
  font-size: 1.22rem;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 4px;
}

.title-link {
  color: #FFFFFF;
  text-decoration: none;
  transition: color 0.2s ease;
}

.title-link:hover {
  color: var(--color-green-neon);
}

.course-level-sub {
  font-size: 0.78rem;
  color: #94A3B8;
  font-weight: 500;
}

.bookmark-icon-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #CBD5E1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.25s ease;
}

.bookmark-icon-btn:hover {
  background: rgba(16, 185, 129, 0.2);
  color: #00F59B;
  border-color: rgba(0, 245, 155, 0.4);
  transform: scale(1.1);
}

.course-overview {
  color: #CBD5E1;
  font-size: 0.88rem;
  line-height: 1.55;
  margin-bottom: 18px;
  flex: 1;
}

/* 3-Pill Stats Row (Rating · Price · Duration) */
.stats-three-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-md);
  margin-bottom: 18px;
}

.strip-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2px;
}

.strip-header {
  display: flex;
  align-items: center;
  gap: 4px;
}

.strip-header strong {
  font-size: 0.82rem;
  font-weight: 800;
  color: #FFFFFF;
}

.strip-icon {
  font-size: 0.85rem;
}

.strip-icon.gold { color: #FBBF24; }
.strip-icon.cyan { color: #38BDF8; }
.strip-icon.purple { color: #A78BFA; }

.strip-label {
  font-size: 0.68rem;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-weight: 600;
}

/* Full-Width "Get In Touch / Yozilish" CTA Button */
.btn-modern-action {
  width: 100%;
  padding: 12px 20px;
  background: #10B981;
  color: #040907;
  border: none;
  border-radius: var(--radius-full);
  font-size: 0.94rem;
  font-weight: 800;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 4px 18px rgba(16, 185, 129, 0.45);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-modern-action:hover {
  background: #00F59B;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 245, 155, 0.65);
}

.btn-modern-action:active {
  transform: translateY(0);
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  border-radius: var(--radius-lg);
  max-width: 500px;
  margin: 0 auto;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 16px;
  display: inline-block;
}

.empty-state h3 {
  font-size: 1.3rem;
  margin-bottom: 8px;
}

.empty-state p {
  color: var(--color-text-muted);
  margin-bottom: 20px;
}

/* Consult banner */
.consult-banner-section {
  margin-top: 60px;
}

.consult-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 36px 40px;
  border-radius: var(--radius-xl);
  border: 1px solid rgba(0, 201, 232, 0.2);
  gap: 24px;
  flex-wrap: wrap;
  background: linear-gradient(135deg, rgba(17, 31, 61, 0.8) 0%, rgba(13, 23, 48, 0.9) 100%);
}

.consult-text {
  max-width: 600px;
}

.consult-text h3 {
  font-size: 1.4rem;
  margin-bottom: 8px;
}

.consult-text p {
  color: var(--color-text-muted);
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .courses-header {
    padding: 90px 0 28px;
  }
  .toolbar-section {
    top: 70px;
    padding: 12px 0;
    margin-bottom: 24px;
  }
  .toolbar-wrap {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  .category-tabs {
    padding: 4px 0 8px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .tab-btn {
    padding: 8px 14px;
    font-size: 0.84rem;
  }
  .search-box {
    width: 100%;
    min-width: unset;
  }
  .consult-box {
    padding: 24px 18px;
    text-align: center;
    justify-content: center;
  }
  .consult-text h3 {
    font-size: 1.2rem;
  }
  .courses-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .course-card {
    border-radius: var(--radius-lg);
  }
}

@media (max-width: 480px) {
  .courses-header {
    padding: 80px 0 20px;
  }
  .card-actions {
    flex-direction: column;
    gap: 6px;
  }
  .btn-sm {
    width: 100%;
    justify-content: center;
  }
  .consult-box {
    padding: 20px 14px;
  }
}
</style>
