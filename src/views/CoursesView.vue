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
            class="course-card glass-surface"
            data-aos="fade-up"
            :data-aos-delay="(idx % 3) * 100"
          >
            <div class="card-top">
              <span class="course-icon">{{ course.icon }}</span>
              <span class="course-badge" :class="course.badgeType">
                {{ course.badge }}
              </span>
            </div>

            <div class="card-meta">
              <span class="category-tag">{{ course.categoryName }}</span>
              <span class="duration-tag">⏱️ {{ course.duration }}</span>
            </div>

            <h2 class="course-title">
              <router-link :to="`/courses/${course.slug}`" class="title-link">
                {{ course.title }}
              </router-link>
            </h2>

            <p class="course-overview">{{ course.overview }}</p>

            <ul class="outcomes-preview">
              <li v-for="(item, idx) in course.outcomes.slice(0, 3)" :key="idx">
                <span class="check-icon">✓</span> {{ item }}
              </li>
            </ul>

            <div class="card-bottom">
              <div class="price-box">
                <span class="price-label">Oylik to‘lov</span>
                <span class="price-value">{{ course.price }}</span>
              </div>
              <div class="card-actions">
                <router-link :to="`/courses/${course.slug}`" class="btn btn-secondary btn-sm">
                  Tafsilotlar
                </router-link>
                <button
                  class="btn btn-primary btn-sm"
                  @click="emit('openEnroll', course.title)"
                >
                  Yozilish
                </button>
              </div>
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

.course-card {
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: var(--radius-lg);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.course-card:hover {
  transform: translateY(-6px);
  border-color: rgba(0, 201, 232, 0.35);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.course-icon {
  font-size: 2.2rem;
}

.course-badge {
  font-size: 0.72rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: var(--radius-full);
  text-transform: uppercase;
}

.course-badge.hot {
  background: rgba(239, 68, 68, 0.15);
  color: #f87171;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.course-badge.new {
  background: rgba(0, 201, 232, 0.15);
  color: var(--color-accent);
  border: 1px solid rgba(0, 201, 232, 0.3);
}

.course-badge.standard {
  background: rgba(101, 91, 255, 0.15);
  color: #a5b4fc;
  border: 1px solid rgba(101, 91, 255, 0.3);
}

.card-meta {
  display: flex;
  gap: 12px;
  font-size: 0.8rem;
  color: var(--color-text-dim);
  margin-bottom: 10px;
}

.category-tag {
  color: var(--color-accent);
  font-weight: 500;
}

.course-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 12px;
  line-height: 1.35;
}

.title-link {
  color: var(--color-text);
  text-decoration: none;
  transition: color 0.2s ease;
}

.title-link:hover {
  color: var(--color-accent);
}

.course-overview {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 18px;
  flex: 1;
}

.outcomes-preview {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 14px;
}

.outcomes-preview li {
  font-size: 0.82rem;
  color: var(--color-text-muted);
  margin-bottom: 6px;
  display: flex;
  align-items: flex-start;
  gap: 6px;
}

.check-icon {
  color: #10B981;
  font-weight: bold;
}

.card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  gap: 12px;
  flex-wrap: wrap;
}

.price-box {
  display: flex;
  flex-direction: column;
}

.price-label {
  font-size: 0.72rem;
  color: var(--color-text-dim);
}

.price-value {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-text);
}

.card-actions {
  display: flex;
  gap: 8px;
}

.btn-sm {
  padding: 7px 14px;
  font-size: 0.82rem;
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
