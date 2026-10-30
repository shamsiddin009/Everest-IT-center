<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Sticker from './Sticker.vue'
defineEmits(['openModal'])

const stats = [
  { value: '3,200+', label: 'Muvaffaqiyatli bitiruvchi' },
  { value: '92%', label: 'Ishga joylashish darajasi' },
  { value: '15+', label: 'Top IT & Til mentorlari' },
  { value: '4.9 ★', label: 'Talabalar reytingi' }
]

const features = [
  { icon: '💻', text: 'Shaxsiy Apple iMac va zamonaviy kompyuterlar' },
  { icon: '🤝', text: '1-ga-1 individual yondashuv va yordam' },
  { icon: '📜', text: 'Xalqaro sertifikat va tayyor portfolio' },
  { icon: '💼', text: 'Karyera markazi va amaliyotga yo\'naltirish' }
]

const slides = [
  {
    image: '/images/classroom.jpg',
    tag: 'Everest Learning Lab',
    badgeTop: 'iMac Pro Suite',
    cardTitle: 'Zamonaviy Dastur',
    cardDesc: 'Bozor talablariga mos amaliy ta\'lim',
    tags: ['Frontend', 'Python', 'IELTS', 'Math']
  },
  {
    image: '/images/coding.jpg',
    tag: 'Coding & Development',
    badgeTop: 'Real Portfolio',
    cardTitle: 'IT & Dasturlash',
    cardDesc: 'Web va mobil loyihalar ustida jonli amaliyot',
    tags: ['Vue.js', 'FastAPI', 'PostgreSQL', 'Git']
  },
  {
    image: '/images/english.jpg',
    tag: 'Speaking & Language Club',
    badgeTop: 'IELTS 7.5+',
    cardTitle: 'General & Academic English',
    cardDesc: 'Speaking, Grammar va xalqaro imtihon tayyorgarligi',
    tags: ['Speaking Club', 'Native Speakers', 'Mock Test', 'Vocabulary']
  },
  {
    image: '/images/pc.jpg',
    tag: 'Digital Literacy Hub',
    badgeTop: 'IT Start',
    cardTitle: 'Kompyuter Savodxonligi',
    cardDesc: 'Office dasturlari, tezkor yozish va xavfsiz Internet',
    tags: ['MS Office', 'Google Cloud', 'Blind Typing', 'Windows 11']
  }
]

const currentSlide = ref(0)
let timer = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const goToSlide = (idx) => {
  currentSlide.value = idx
}

const startAutoPlay = () => {
  stopAutoPlay()
  timer = setInterval(nextSlide, 4500)
}

const stopAutoPlay = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<template>
  <section class="hero-section">
    <!-- Ambient Glow Orbs -->
    <div class="ambient-orb ambient-orb--purple"></div>
    <div class="ambient-orb ambient-orb--cyan"></div>

    <div class="container hero-container">
      <div class="hero-content">
        <!-- Top pill badge -->
        <div class="hero-pill">
          <span class="pill-dot"></span>
          <span class="pill-text">Yangi guruhlarga qabul ochiq · 2026 Mavsum</span>
        </div>

        <h1 class="hero-title">
          Kelajak kasblari va fanlarini
          <span class="gradient-text">professional darajada</span>
          o'rganing
        </h1>

        <p class="hero-subtitle">
          IT &amp; Dasturlash, Kompyuter savodxonligi, Zamonaviy Ingliz tili (IELTS / General) hamda Chuqurlashtirilgan Matematika. Noldan nufuzli natijagacha birga boramiz!
        </p>

        <!-- CTA Buttons -->
        <div class="hero-actions">
          <button class="btn btn-primary btn-lg" @click="$emit('openModal')">
            <span>Bepul sinov darsiga yozilish</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <a href="#courses" class="btn btn-secondary btn-lg">
            <span>Kurslar katalogi</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M19 9l-7 7-7-7"/></svg>
          </a>
        </div>

        <!-- Mini Feature Bullets -->
        <div class="hero-features">
          <div v-for="feat in features" :key="feat.text" class="feature-item">
            <Sticker :name="feat.icon" size="sm" class="feat-sticker" />
            <span class="feat-text">{{ feat.text }}</span>
          </div>
        </div>
      </div>

      <!-- Right Visual: Interactive Luxury Slider Showcase -->
      <div class="hero-visual" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
        <div class="hero-image-card glass-panel">
          <!-- Card Header Bar -->
          <div class="slider-header-bar">
            <div class="header-left">
              <span class="live-status-dot"></span>
              <span class="header-lab-name">{{ slides[currentSlide].tag }}</span>
            </div>
            <div class="header-right-badge">
              <span>{{ slides[currentSlide].badgeTop }}</span>
            </div>
          </div>

          <!-- Main Image Frame with Crossfade Transitions -->
          <div class="image-wrapper">
            <transition name="fade-slide" mode="out-in">
              <div :key="currentSlide" class="slide-content-frame">
                <img
                  :src="slides[currentSlide].image"
                  :alt="slides[currentSlide].cardTitle"
                  class="main-classroom-img"
                />
                <div class="image-overlay"></div>

                <!-- Floating Glass Info Card inside slide -->
                <div class="floating-slide-card glass-surface">
                  <div class="card-badge-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div class="card-badge-info">
                    <strong>{{ slides[currentSlide].cardTitle }}</strong>
                    <span>{{ slides[currentSlide].cardDesc }}</span>
                  </div>
                </div>
              </div>
            </transition>

            <!-- Navigation Arrow Buttons -->
            <button class="slider-arrow arrow-prev" @click="prevSlide" aria-label="Oldingi rasm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button class="slider-arrow arrow-next" @click="nextSlide" aria-label="Keyingi rasm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <!-- Bottom Footer Bar with Tag Pills & Dots Indicator -->
          <div class="slider-footer-bar">
            <div class="slide-tags">
              <span v-for="tag in slides[currentSlide].tags" :key="tag" class="slider-tag-pill">
                {{ tag }}
              </span>
            </div>

            <!-- Dots Indicator -->
            <div class="slider-dots">
              <button
                v-for="(_, idx) in slides"
                :key="idx"
                class="slider-dot"
                :class="{ 'slider-dot--active': currentSlide === idx }"
                @click="goToSlide(idx)"
                :aria-label="`Slayd ${idx + 1}`"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Counter Bar -->
    <div class="container">
      <div class="hero-stats-ribbon glass-panel">
        <div v-for="stat in stats" :key="stat.label" class="stat-box">
          <div class="stat-number">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  padding: 130px 0 60px;
  overflow: hidden;
  background: radial-gradient(circle at 15% 30%, rgba(99, 102, 241, 0.14) 0%, transparent 45%),
              radial-gradient(circle at 85% 70%, rgba(6, 182, 212, 0.1) 0%, transparent 50%);
}

.ambient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
}

.ambient-orb--purple {
  width: 500px;
  height: 500px;
  top: 10%;
  left: -8%;
  background: rgba(99, 102, 241, 0.22);
  animation: floatSlow 8s ease-in-out infinite;
}

.ambient-orb--cyan {
  width: 450px;
  height: 450px;
  bottom: 10%;
  right: -8%;
  background: rgba(6, 182, 212, 0.18);
  animation: floatSlow 10s ease-in-out infinite reverse;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
}

.hero-container {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 3.5rem;
  align-items: center;
  margin-bottom: 4.5rem;
}

.hero-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.45rem 1.1rem;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: var(--radius-full);
  margin-bottom: 1.5rem;
}

.pill-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10B981;
  box-shadow: 0 0 10px #10B981;
}

.pill-text {
  font-size: 0.82rem;
  color: var(--primary-light);
  font-weight: 600;
  letter-spacing: 0.04em;
}

.hero-title {
  font-family: var(--font-heading);
  font-size: clamp(2.4rem, 4.5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.15;
  color: #fff;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.gradient-text {
  background: linear-gradient(135deg, #FFFFFF 15%, #34D399 65%, #10B981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 2.2rem;
  max-width: 580px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 2.8rem;
  flex-wrap: wrap;
}

.btn-lg {
  padding: 1rem 2.2rem;
  font-size: 1rem;
}

.hero-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-glass);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.feat-icon {
  font-size: 1.2rem;
}

.feat-text {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
}

/* Real Image Hero Showcase Card / Luxury Slider */
.hero-image-card {
  padding: 1.2rem;
  border-radius: var(--radius-xl);
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.75), 0 0 35px rgba(16, 185, 129, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(14, 38, 30, 0.65);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: transform 0.4s var(--ease-smooth), box-shadow 0.4s var(--ease-smooth);
}

.hero-image-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.85), 0 0 45px rgba(0, 245, 155, 0.3);
}

/* Slider Header Bar */
.slider-header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.9rem;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.live-status-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #00F59B;
  box-shadow: 0 0 12px #00F59B;
  display: inline-block;
  animation: pulseDot 2s infinite ease-in-out;
}

@keyframes pulseDot {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.7; }
}

.header-lab-name {
  font-size: 0.88rem;
  font-weight: 700;
  color: #FFFFFF;
  letter-spacing: -0.01em;
}

.header-right-badge {
  background: rgba(0, 245, 155, 0.12);
  border: 1px solid rgba(0, 245, 155, 0.28);
  border-radius: var(--radius-full);
  padding: 0.25rem 0.85rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: #00F59B;
  letter-spacing: 0.04em;
}

/* Frame */
.image-wrapper {
  position: relative;
  width: 100%;
  height: 380px;
  border-radius: calc(var(--radius-xl) - 6px);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.slide-content-frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.main-classroom-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(4, 9, 7, 0.15) 0%, rgba(4, 9, 7, 0.82) 100%);
  pointer-events: none;
}

/* Floating Slide Info Card */
.floating-slide-card {
  position: absolute;
  bottom: 1.2rem;
  left: 1.2rem;
  right: 1.2rem;
  background: rgba(4, 9, 7, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: var(--radius-md);
  padding: 0.85rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 2;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.6);
}

.card-badge-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(0, 245, 155, 0.15);
  color: #00F59B;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid rgba(0, 245, 155, 0.3);
}

.card-badge-info strong {
  display: block;
  font-size: 0.95rem;
  font-weight: 700;
  color: #FFFFFF;
}

.card-badge-info span {
  font-size: 0.78rem;
  color: #CBD5E1;
}

/* Arrow Navigation */
.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(4, 9, 7, 0.75);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
  transition: all 0.25s ease;
  opacity: 0;
}

.image-wrapper:hover .slider-arrow {
  opacity: 1;
}

.arrow-prev {
  left: 0.75rem;
}

.arrow-next {
  right: 0.75rem;
}

.slider-arrow:hover {
  background: var(--color-green-primary);
  border-color: var(--color-green-neon);
  transform: translateY(-50%) scale(1.1);
}

/* Transitions */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.45s ease, transform 0.45s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: scale(1.03);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: scale(0.97);
}

/* Footer Bar with Tags & Dots */
.slider-footer-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.slide-tags {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.slider-tag-pill {
  font-size: 0.74rem;
  font-weight: 600;
  color: #CBD5E1;
  background: rgba(255, 255, 255, 0.06);
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-full);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.25s ease;
}

.slider-tag-pill:hover {
  color: #00F59B;
  border-color: rgba(0, 245, 155, 0.3);
  background: rgba(0, 245, 155, 0.08);
}

.slider-dots {
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.slider-dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.25);
  border: none;
  cursor: pointer;
  transition: all 0.3s var(--ease-smooth);
}

.slider-dot--active {
  width: 24px;
  background: var(--color-green-neon);
  box-shadow: 0 0 10px rgba(0, 245, 155, 0.5);
}

/* Stats Ribbon */
.hero-stats-ribbon {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 2.2rem;
  text-align: center;
}

.stat-box {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border-right: 1px solid var(--border-glass);
}

.stat-box:last-child {
  border-right: none;
}

.stat-number {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 800;
  color: #fff;
  background: linear-gradient(135deg, #fff 40%, var(--primary-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
}

.stat-label {
  font-size: 0.88rem;
  color: var(--text-muted);
  font-weight: 500;
}

@media (max-width: 992px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .image-wrapper {
    height: 320px;
  }
  .hero-stats-ribbon {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .stat-box {
    border-right: none;
  }
  .hero-section {
    padding: 100px 0 50px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 90px 0 40px;
  }

  .image-wrapper {
    height: 280px;
  }

  .slider-footer-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .slide-tags {
    gap: 0.4rem;
  }

  .slider-tag-pill {
    font-size: 0.7rem;
    padding: 0.25rem 0.6rem;
  }

  .hero-image-card {
    padding: 0.75rem;
  }

  .slider-header-bar {
    margin-bottom: 0.65rem;
  }

  .hero-stats-ribbon {
    padding: 1.5rem;
  }
}

@media (max-width: 640px) {
  .hero-features {
    grid-template-columns: 1fr;
  }
  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }
  .hero-stats-ribbon {
    grid-template-columns: 1fr;
    padding: 1.2rem;
    gap: 1.2rem;
  }
  .image-wrapper {
    height: 240px;
  }
  .floating-slide-card {
    padding: 0.65rem 0.9rem;
  }
  .card-badge-icon {
    width: 34px;
    height: 34px;
  }
  .card-badge-info strong {
    font-size: 0.85rem;
  }
  .card-badge-info span {
    font-size: 0.72rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 84px 0 32px;
  }
  .hero-title {
    font-size: clamp(1.85rem, 6vw, 2.6rem);
  }
  .hero-subtitle {
    font-size: 0.95rem;
  }
  .image-wrapper {
    height: 210px;
  }
  .slider-footer-bar {
    margin-top: 0.65rem;
  }
  .slide-tags {
    display: none;
  }
}
</style>
