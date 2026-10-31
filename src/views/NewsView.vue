<script setup>
import { ref, computed } from 'vue';
import Sticker from '../components/Sticker.vue';
import { newsData, newsCategories } from '../data/news.js';

const emit = defineEmits(['openEnroll']);

const activeCategory = ref('all');
const activeNewsModal = ref(null);

const filteredNews = computed(() => {
  if (activeCategory.value === 'all') return newsData;
  return newsData.filter(item => item.category === activeCategory.value);
});

const openModal = (item) => {
  activeNewsModal.value = item;
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden';
  }
};

const closeModal = () => {
  activeNewsModal.value = null;
  if (typeof document !== 'undefined') {
    document.body.style.overflow = '';
  }
};
</script>

<template>
  <div class="news-page">
    <!-- Header -->
    <header class="news-header">
      <div class="container text-center">
        <span class="page-badge">Everest Hayoti</span>
        <h1 class="page-title">
          So‘nggi <span class="text-gradient">yangiliklar va voqealar</span> markazi
        </h1>
        <p class="page-subtitle">
          Everest IT Center hayotidagi eng so‘nggi yangiliklar, yutuqlar, tadbirlar va yangi guruhlarga qabul e’lonlari bilan tanishing.
        </p>
      </div>
    </header>

    <!-- Category Filter Tabs -->
    <section class="filter-section" data-aos="fade-up" data-aos-delay="100">
      <div class="container">
        <div class="news-tabs">
          <button
            v-for="cat in newsCategories"
            :key="cat.id"
            class="tab-pill-btn"
            :class="{ active: activeCategory === cat.id }"
            @click="activeCategory = cat.id"
          >
            {{ cat.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- News Grid -->
    <section class="news-grid-section">
      <div class="container">
        <div class="news-grid">
          <article
            v-for="(item, idx) in filteredNews"
            :key="item.id"
            class="news-card modern-pill-card"
            data-aos="fade-up"
            :data-aos-delay="(idx % 3) * 100"
          >
            <!-- Top Visual Image Banner -->
            <div class="news-card-visual">
              <img
                :src="item.image"
                :alt="item.title"
                class="news-banner-img"
                loading="lazy"
              />
              <div class="news-gradient-mask"></div>

              <!-- Top Badges -->
              <div class="news-badge-top">
                <span class="badge-tag" :class="`badge--${item.badgeType}`">
                  {{ item.badge }}
                </span>
                <span class="news-category-chip">
                  {{ item.category }}
                </span>
              </div>

              <!-- Date & Read time overlay -->
              <div class="news-meta-overlay">
                <span>📅 {{ item.date }}</span>
                <span>⏱️ {{ item.readTime }}</span>
              </div>
            </div>

            <!-- Card Content -->
            <div class="news-card-body">
              <h2 class="news-title" @click="openModal(item)">
                {{ item.title }}
              </h2>

              <p class="news-summary">
                {{ item.summary }}
              </p>

              <!-- Highlights Tags -->
              <div class="news-highlights">
                <span
                  v-for="(h, i) in item.highlights"
                  :key="i"
                  class="highlight-tag"
                >
                  ✓ {{ h }}
                </span>
              </div>

              <!-- Footer Read Action -->
              <div class="news-card-bottom">
                <button class="btn-read-more" @click="openModal(item)">
                  <span>Batafsil o‘qish</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Telegram Notification Subscribe Banner -->
    <section class="subscribe-banner-section" data-aos="fade-up">
      <div class="container">
        <div class="subscribe-card glass-surface">
          <div class="sub-text-col">
            <span class="sub-badge">Jonli bildirishnomalar</span>
            <h3>Yangiliklarni birinchilardan bo‘lib oling</h3>
            <p>
              Barcha qabullar, chegirmalar va yangi tadbirlar haqida Telegram botimiz orqali darhol xabardor bo‘ling.
            </p>
          </div>
          <div class="sub-action-col">
            <a
              href="https://t.me/EverestAcademy_bot"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-cyan btn-lg"
            >
              <span>Telegram Kanalimizga a’zo bo‘lish</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Full Article Modal -->
    <transition name="modal-fade">
      <div v-if="activeNewsModal" class="news-modal-overlay" @click.self="closeModal">
        <div class="news-modal-content glass-surface">
          <button class="close-modal-btn" @click="closeModal" aria-label="Yopish">
            &times;
          </button>

          <div class="modal-image-wrap">
            <img :src="activeNewsModal.image" :alt="activeNewsModal.title" class="modal-banner-img" />
            <div class="modal-gradient"></div>
            <div class="modal-meta-bar">
              <span class="badge-tag" :class="`badge--${activeNewsModal.badgeType}`">{{ activeNewsModal.badge }}</span>
              <span>📅 {{ activeNewsModal.date }}</span>
              <span>⏱️ {{ activeNewsModal.readTime }}</span>
            </div>
          </div>

          <div class="modal-body-content">
            <h2 class="modal-news-title">{{ activeNewsModal.title }}</h2>

            <div class="modal-paragraphs">
              <p v-for="(p, i) in activeNewsModal.content" :key="i">
                {{ p }}
              </p>
            </div>

            <div class="modal-highlights-box">
              <h4>Asosiy afzalliklar va imkoniyatlar:</h4>
              <ul>
                <li v-for="(h, i) in activeNewsModal.highlights" :key="i">
                  <span class="check-mark">✓</span> {{ h }}
                </li>
              </ul>
            </div>

            <div class="modal-footer-actions">
              <button
                class="btn btn-primary btn-block"
                @click="closeModal(); emit('openEnroll', activeNewsModal.title)"
              >
                <span>Ushbu yo‘nalish bo‘yicha darsga yozilish</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.news-page {
  padding-bottom: 80px;
}

.news-header {
  padding: 120px 0 50px;
  background: radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 60%);
}

.page-badge {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(16, 185, 129, 0.12);
  color: var(--color-green-neon);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: var(--radius-full);
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 18px;
}

.page-title {
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.page-subtitle {
  max-width: 760px;
  margin: 0 auto;
  color: var(--color-text-muted);
  font-size: 1.05rem;
  line-height: 1.6;
}

/* Tabs */
.filter-section {
  margin-bottom: 40px;
}

.news-tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.tab-pill-btn {
  padding: 8px 20px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  color: var(--color-text-muted);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
}

.tab-pill-btn:hover {
  background: var(--color-surface-hover);
  color: var(--color-text);
  border-color: rgba(0, 245, 155, 0.3);
}

.tab-pill-btn.active {
  background: var(--color-green-primary);
  border-color: var(--color-green-primary);
  color: #fff;
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.45);
}

/* News Grid */
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 32px;
}

/* Modern Card Style */
.news-card {
  background: #081610;
  border: 1px solid rgba(16, 185, 129, 0.22);
  border-radius: 28px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.65), 0 0 20px rgba(16, 185, 129, 0.08);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
              border-color 0.35s ease;
}

.news-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0, 245, 155, 0.5);
  box-shadow: 0 25px 55px -10px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 245, 155, 0.22);
}

.news-card-visual {
  position: relative;
  height: 200px;
  width: 100%;
  overflow: hidden;
  background: #050F0B;
}

.news-banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.news-card:hover .news-banner-img {
  transform: scale(1.08);
}

.news-gradient-mask {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(4, 9, 7, 0.2) 0%, rgba(8, 22, 16, 0.95) 100%);
}

.news-badge-top {
  position: absolute;
  top: 14px;
  left: 16px;
  right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}

.badge-tag {
  font-size: 0.72rem;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: var(--radius-full);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.badge--new {
  background: rgba(0, 245, 155, 0.2);
  color: #00F59B;
  border: 1px solid rgba(0, 245, 155, 0.5);
}

.badge--hot {
  background: rgba(239, 68, 68, 0.2);
  color: #F87171;
  border: 1px solid rgba(239, 68, 68, 0.5);
}

.badge--event {
  background: rgba(168, 85, 247, 0.2);
  color: #C084FC;
  border: 1px solid rgba(168, 85, 247, 0.5);
}

.news-category-chip {
  background: rgba(4, 9, 7, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 700;
  color: #FFFFFF;
}

.news-meta-overlay {
  position: absolute;
  bottom: 12px;
  left: 16px;
  right: 16px;
  display: flex;
  justify-content: space-between;
  font-size: 0.76rem;
  color: #CBD5E1;
  z-index: 2;
}

.news-card-body {
  padding: 22px 24px 24px;
  background: #06110D;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.news-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.35;
  color: #FFFFFF;
  margin-bottom: 12px;
  cursor: pointer;
  transition: color 0.2s ease;
}

.news-title:hover {
  color: var(--color-green-neon);
}

.news-summary {
  color: #94A3B8;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 18px;
  flex: 1;
}

.news-highlights {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 14px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: 20px;
}

.highlight-tag {
  font-size: 0.8rem;
  color: #A7F3D0;
  font-weight: 500;
}

.news-card-bottom {
  margin-top: auto;
}

.btn-read-more {
  width: 100%;
  padding: 12px 20px;
  background: rgba(16, 185, 129, 0.12);
  color: var(--color-green-neon);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: var(--radius-full);
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.25s ease;
}

.btn-read-more:hover {
  background: #10B981;
  color: #040907;
  border-color: #00F59B;
  box-shadow: 0 4px 18px rgba(16, 185, 129, 0.45);
  transform: translateY(-2px);
}

/* Subscribe Banner */
.subscribe-banner-section {
  margin-top: 60px;
}

.subscribe-card {
  padding: 40px;
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
  border: 1px solid rgba(0, 245, 155, 0.25);
  background: linear-gradient(135deg, rgba(14, 38, 30, 0.85) 0%, rgba(8, 20, 14, 0.98) 100%);
}

.sub-text-col {
  max-width: 580px;
}

.sub-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-green-neon);
  margin-bottom: 8px;
}

.sub-text-col h3 {
  font-size: 1.5rem;
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 8px;
}

.sub-text-col p {
  color: #94A3B8;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Modal */
.news-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(16px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.news-modal-content {
  background: #081610;
  border: 1px solid rgba(0, 245, 155, 0.35);
  border-radius: var(--radius-xl);
  max-width: 680px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.85), 0 0 40px rgba(0, 245, 155, 0.2);
}

.close-modal-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(4, 9, 7, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;
}

.close-modal-btn:hover {
  background: #EF4444;
  border-color: #EF4444;
}

.modal-image-wrap {
  position: relative;
  height: 240px;
  width: 100%;
  overflow: hidden;
}

.modal-banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 30%, #081610 100%);
}

.modal-meta-bar {
  position: absolute;
  bottom: 14px;
  left: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 0.82rem;
  color: #CBD5E1;
  z-index: 2;
}

.modal-body-content {
  padding: 24px 28px 32px;
}

.modal-news-title {
  font-size: 1.45rem;
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.35;
  margin-bottom: 20px;
}

.modal-paragraphs p {
  color: #CBD5E1;
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 14px;
}

.modal-highlights-box {
  padding: 16px 20px;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: var(--radius-md);
  margin: 24px 0;
}

.modal-highlights-box h4 {
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--color-green-neon);
  margin-bottom: 10px;
}

.modal-highlights-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.modal-highlights-box li {
  font-size: 0.88rem;
  color: #E2E8F0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.check-mark {
  color: #10B981;
  font-weight: bold;
}

.btn-block {
  width: 100%;
}

/* Modal Animations */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .news-header {
    padding: 90px 0 32px;
  }
  .news-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .subscribe-card {
    padding: 28px 20px;
    text-align: center;
    justify-content: center;
  }
  .sub-action-col {
    width: 100%;
  }
  .sub-action-col .btn {
    width: 100%;
  }
  .modal-body-content {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .news-header {
    padding: 80px 0 24px;
  }
  .news-card-visual {
    height: 170px;
  }
  .news-title {
    font-size: 1.15rem;
  }
  .modal-news-title {
    font-size: 1.25rem;
  }
}
</style>
