<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Mountain3D from '../components/Mountain3D.vue';
import Sticker from '../components/Sticker.vue';
import { coursesData } from '../data/courses.js';

const emit = defineEmits(['openEnroll']);

// Hero Interactive Slider Slides
const heroSlides = [
  {
    image: '/images/classroom.jpg',
    tag: 'Everest Learning Lab',
    badgeTop: 'iMac Pro Suite',
    cardTitle: 'Zamonaviy Dastur',
    cardDesc: 'Bozor talablariga mos amaliy ta\'lim',
    tags: [
      { name: 'Frontend', sticker: 'code' },
      { name: 'Python', sticker: 'python' },
      { name: 'IELTS', sticker: 'english' },
      { name: 'Math', sticker: 'math' }
    ]
  },
  {
    image: '/images/coding.jpg',
    tag: 'Coding & Development',
    badgeTop: 'Real Portfolio',
    cardTitle: 'IT & Dasturlash',
    cardDesc: 'Web va backend tizimlar yaratish amaliyoti',
    tags: [
      { name: 'Vue 3', sticker: 'code' },
      { name: 'FastAPI', sticker: 'python' },
      { name: 'PostgreSQL', sticker: 'code' },
      { name: 'Git', sticker: 'code' }
    ]
  },
  {
    image: '/images/english.jpg',
    tag: 'Language & Speaking Club',
    badgeTop: 'IELTS 7.5+',
    cardTitle: 'General & Academic English',
    cardDesc: 'Ravon so\'zlashuv va xalqaro sertifikatlar',
    tags: [
      { name: 'Speaking Club', sticker: 'english' },
      { name: 'Mock Exam', sticker: 'english' },
      { name: 'Grammar', sticker: 'english' }
    ]
  },
  {
    image: '/images/pc.jpg',
    tag: 'Digital Literacy Hub',
    badgeTop: 'IT Start',
    cardTitle: 'Kompyuter Savodxonligi',
    cardDesc: 'Ofis dasturlari va xavfsiz Internet',
    tags: [
      { name: 'MS Office', sticker: 'code' },
      { name: 'Google Cloud', sticker: 'code' },
      { name: 'Blind Typing', sticker: 'code' }
    ]
  }
];

const currentSlide = ref(0);
let slideTimer = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + heroSlides.length) % heroSlides.length;
};

const goToSlide = (idx) => {
  currentSlide.value = idx;
};

const startSlideTimer = () => {
  stopSlideTimer();
  slideTimer = setInterval(nextSlide, 4500);
};

const stopSlideTimer = () => {
  if (slideTimer) {
    clearInterval(slideTimer);
    slideTimer = null;
  }
};

// Typewriter Headline Animation
const phrases = [
  'kelajagingizni quring.',
  'cho‘qqilarni zabt eting.',
  'IT sohasini egallang.',
  'katta marralarga erishing.'
];

const currentTypedText = ref('');
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeTimeout = null;

const typeEffect = () => {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    currentTypedText.value = currentPhrase.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      typeTimeout = setTimeout(typeEffect, 2500);
      return;
    }
    typeTimeout = setTimeout(typeEffect, 90);
  } else {
    currentTypedText.value = currentPhrase.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeTimeout = setTimeout(typeEffect, 400);
      return;
    }
    typeTimeout = setTimeout(typeEffect, 45);
  }
};

onMounted(() => {
  typeEffect();
  startSlideTimer();
});

onUnmounted(() => {
  if (typeTimeout) clearTimeout(typeTimeout);
  stopSlideTimer();
});

const whyEverest = [
  {
    icon: '⚡',
    title: 'Amaliy Loyihalarga Asoslangan',
    desc: 'Nazariy quruq yodlash yo‘q. Har bir dars real portfolio loyihasi va kod yozish bilan birga o‘tiladi.'
  },
  {
    icon: '🏔️',
    title: 'Yuqori Cho‘qqilarga Mo‘ljallangan Dastur',
    desc: 'O‘quv rejalarimiz jahon standartlari va bozor talablariga mos ravishda doimiy yangilanib boradi.'
  },
  {
    icon: '🖥️',
    title: 'Eng So‘nggi Uskunalar va iMac Lab',
    desc: 'Zamonaviy quvvatli kompyuterlar, tezyurar optik internet va shaxsiy ish stansiyalari.'
  },
  {
    icon: '🤝',
    title: 'Mentorlik va Karyera Ko‘magi',
    desc: 'Soha mutaxassislaridan to‘g‘ridan-to‘g‘ri maslahatlar, rezyume tahlili va intervyu simulyatsiyasi.'
  }
];

const enrollmentSteps = [
  { step: '01', title: 'Ariza qoldirish', desc: 'Sayt orqali o‘zingizga qulay vaqt va kursni tanlab ro‘yxatdan o‘ting.' },
  { step: '02', title: 'Darajani aniqlash', desc: 'Bepul test va mentor bilan qisqa suhbat orqali eng mos guruh aniqlanadi.' },
  { step: '03', title: 'Birinchi bepul dars', desc: 'Haqiqiy dars muhiti va ustozning o‘qitish uslubi bilan shaxsan tanishing.' },
  { step: '04', title: 'Katta cho‘qqi sari yo‘l', desc: 'Guruhga qo‘shiling, portfolio yig‘ing va sertifikatga ega bo‘ling.' }
];

const faqs = [
  {
    q: 'Darslar qachon va qaysi vaqtlarda bo‘ladi?',
    a: 'Darslar haftasiga 3 kun 1.5–2 soatdan tashkil etiladi. Ertalabki (09:00), tushki (14:00) va kechki (18:30) qulay vaqtlar mavjud.'
  },
  {
    q: 'Kompyuterim bo‘lmasa ham o‘rgana olamanmi?',
    a: 'Albatta. Everest IT Center to‘liq zamonaviy iMac va kuchli kompyuterlar bilan jihozlangan. Darsdan tashqari ham Coworking zalida amaliyot qilishingiz mumkin.'
  },
  {
    q: 'Birinchi sinov darsi rostdan ham bepulmi?',
    a: 'Ha, birinchi dars mutlaqo bepul va majburiyatsizdir. Siz markaz sharoiti bilan tanishib, keyin shartnoma qilasiz.'
  }
];
</script>

<template>
  <div class="home-page">
    <!-- 3D Hero Section -->
    <section class="hero-section">
      <!-- 3D Mountain Interactive Canvas -->
      <Mountain3D />

      <div class="container hero-content-grid">
        <div class="hero-text-block">
          <div class="section-badge">
            <span>Yangi Qabul · 2026</span>
          </div>

          <h1 class="hero-headline">
            <span class="hero-title-prefix">Biz bilan</span>
            <span class="hero-typed-slot">
              <span class="gradient-text">{{ currentTypedText }}</span><span class="typewriter-cursor" aria-hidden="true">|</span>
            </span>
          </h1>

          <p class="hero-lead">
            Everest IT Center — IT & Dasturlash, zamonaviy Ingliz tili, chuqurlashtirilgan Matematika va Kompyuter savodxonligi bo‘yicha professional ta’lim ekotizimi.
          </p>

          <div class="hero-action-buttons">
            <router-link to="/courses" class="btn btn-cyan btn-lg">
              <span>Kurslarni Ko‘rish</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </router-link>
          </div>

          <!-- Verified Trust Indicators -->
          <div class="trust-indicators-strip" data-aos="fade-up" data-aos-delay="200">
            <div class="trust-item">
              <span class="trust-num">4</span>
              <span class="trust-label">Asosiy Yo‘nalish</span>
            </div>
            <div class="trust-sep"></div>
            <div class="trust-item">
              <span class="trust-num">100%</span>
              <span class="trust-label">Amaliy Mashg‘ulot</span>
            </div>
            <div class="trust-sep"></div>
            <div class="trust-item">
              <span class="trust-num">1-Dars</span>
              <span class="trust-label">Bepul Sinov</span>
            </div>
          </div>
        </div>

        <!-- Hero Interactive Graphic Showcase Slider -->
        <div class="hero-visual-block" @mouseenter="stopSlideTimer" @mouseleave="startSlideTimer">
          <div class="monolith-preview-card glass-surface">
            <!-- Header bar -->
            <div class="preview-header">
              <div class="header-indicator">
                <span class="pulse-cyan"></span>
                <span>{{ heroSlides[currentSlide].tag }}</span>
              </div>
              <span class="pill-preview">{{ heroSlides[currentSlide].badgeTop }}</span>
            </div>

            <!-- Media Slider Window -->
            <div class="preview-media">
              <transition name="fade-hero" mode="out-in">
                <div :key="currentSlide" class="slide-media-wrap">
                  <img
                    :src="heroSlides[currentSlide].image"
                    :alt="heroSlides[currentSlide].cardTitle"
                    class="preview-img"
                    width="600"
                    height="400"
                    loading="eager"
                  />
                  <div class="preview-overlay"></div>
                  
                  <!-- Floating Badge Inside -->
                  <div class="floating-stat-box">
                    <Sticker name="grad" size="md" class="stat-sticker" />
                    <div>
                      <strong>{{ heroSlides[currentSlide].cardTitle }}</strong>
                      <small>{{ heroSlides[currentSlide].cardDesc }}</small>
                    </div>
                  </div>
                </div>
              </transition>

              <!-- Left / Right Controls -->
              <button class="hero-arrow arrow-left" @click="prevSlide" aria-label="Oldingi rasm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button class="hero-arrow arrow-right" @click="nextSlide" aria-label="Keyingi rasm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <!-- Footer bar with dynamic chips & dots -->
            <div class="preview-footer">
              <div class="course-mini-chips">
                <span
                  v-for="tag in heroSlides[currentSlide].tags"
                  :key="tag.name"
                  class="chip"
                >
                  <Sticker :name="tag.sticker" size="xs" /> {{ tag.name }}
                </span>
              </div>

              <!-- Slider Navigation Dots -->
              <div class="hero-dots">
                <button
                  v-for="(_, idx) in heroSlides"
                  :key="idx"
                  class="h-dot"
                  :class="{ 'h-dot--active': currentSlide === idx }"
                  @click="goToSlide(idx)"
                  :aria-label="`Slayd ${idx + 1}`"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4 Core Featured Directions -->
    <section class="section-courses-featured">
      <div class="container">
        <div class="section-center-head" data-aos="fade-up">
          <span class="section-badge">IT Center Yo‘nalishlari</span>
          <h2 class="section-title">O‘zingizga Mos Mutaxassislikni Tanlang</h2>
          <p class="section-desc">
            Har bir kurs nazariya va intensiv amaliyot uyg‘unligida olib boriladi.
          </p>
        </div>

        <div class="course-cards-grid">
          <div
            v-for="(c, idx) in coursesData"
            :key="c.slug"
            class="course-card-item glass-surface"
            data-aos="fade-up"
            :data-aos-delay="idx * 120"
          >
            <div class="card-img-banner">
              <img
                :src="c.image"
                :alt="c.title"
                class="banner-photo"
                width="400"
                height="220"
                loading="lazy"
              />
              <div class="banner-gradient"></div>
              <span class="card-badge" :class="`badge--${c.badgeType}`">{{ c.badge }}</span>
              <span class="card-cat-tag">{{ c.categoryName }}</span>
            </div>

            <div class="card-content-wrap">
              <h3 class="course-card-title">{{ c.title }}</h3>

              <!-- Dedicated, beautifully styled Price Panel -->
              <div class="card-pricing-panel">
                <div class="price-header-row">
                  <span class="price-label-text">Oylik to‘lov:</span>
                  <strong class="price-val-text">{{ c.price }}</strong>
                </div>
              </div>

              <!-- Symmetrical Action buttons -->
              <div class="card-btn-grid">
                <router-link :to="`/courses/${c.slug}`" class="btn btn-outline btn-card-action">
                  Tafsilotlar
                </router-link>
                <button class="btn btn-cyan btn-card-action" @click="$emit('openEnroll', c.title)">
                  Yozilish
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="center-cta-wrap">
          <router-link to="/courses" class="btn btn-primary btn-lg">
            <span>Barcha Kurslar Katalogi</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Why Choose Everest -->
    <section class="section-why">
      <div class="container">
        <div class="section-center-head" data-aos="fade-up">
          <span class="section-badge">Afzalliklarimiz</span>
          <h2 class="section-title">Nima Uchun Aynan Everest IT Center?</h2>
          <p class="section-desc">
            Biz o‘quvchilarimizga faqat ma’lumot berish bilan cheklanmaymiz, ularning natijasiga mas’ulmiz.
          </p>
        </div>

        <div class="why-grid">
          <div
            v-for="(item, idx) in whyEverest"
            :key="item.title"
            class="why-card glass-surface"
            data-aos="fade-up"
            :data-aos-delay="idx * 100"
          >
            <div class="why-icon">
              <Sticker :name="item.icon" size="lg" />
            </div>
            <h3 class="why-title">{{ item.title }}</h3>
            <p class="why-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How Enrollment Works -->
    <section class="section-steps">
      <div class="container">
        <div class="section-center-head" data-aos="fade-up">
          <span class="section-badge">Jarayon</span>
          <h2 class="section-title">Ta’limni Qanday Boshlaysiz?</h2>
          <p class="section-desc">Cho‘qqi sari to‘rt oddiy qadam.</p>
        </div>

        <div class="steps-grid">
          <div
            v-for="(s, idx) in enrollmentSteps"
            :key="s.step"
            class="step-box glass-surface"
            data-aos="fade-up"
            :data-aos-delay="idx * 120"
          >
            <span class="step-num">{{ s.step }}</span>
            <h3 class="step-title">{{ s.title }}</h3>
            <p class="step-desc">{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Accordion -->
    <section class="section-faq">
      <div class="container">
        <div class="section-center-head" data-aos="fade-up">
          <span class="section-badge">Savollar</span>
          <h2 class="section-title">Tez-tez Beriladigan Savollar</h2>
        </div>

        <div class="faq-list">
          <div
            v-for="(faq, idx) in faqs"
            :key="faq.q"
            class="faq-item glass-surface"
            data-aos="fade-up"
            :data-aos-delay="idx * 80"
          >
            <h3 class="faq-q">{{ faq.q }}</h3>
            <p class="faq-a">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final Call to Action -->
    <section class="section-final-cta">
      <div class="container">
        <div class="cta-banner glass-surface" data-aos="zoom-in-up" data-aos-duration="800">
          <div class="cta-content">
            <span class="section-badge">Boshlashga Tayyormisiz?</span>
            <h2 class="cta-heading">Birinchi Sinov Darsiga Bugun Yoziling</h2>
            <p class="cta-sub">
              Mutaxassislarimiz bilan suhbatlashing, markazimizni ko‘ring va kelajagingiz sari birinchi ishonchli qadamni qo‘ying.
            </p>
            <button class="btn btn-cyan btn-lg" @click="$emit('openEnroll')">
              <span>Bepul Ro‘yxatdan O‘tish</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  position: relative;
  overflow-x: clip;
}

/* 3D Hero */
.hero-section {
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  padding: 130px 0 80px;
  overflow: hidden;
}

.hero-content-grid {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 3.5rem;
  align-items: center;
}

.hero-headline {
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 3.8vw, 3.4rem);
  font-weight: 800;
  line-height: 1.2;
  color: #fff;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
}

.hero-title-prefix {
  display: block;
  color: #ffffff;
}

.hero-typed-slot {
  display: block;
  min-height: 1.25em;
  white-space: nowrap;
}

.typewriter-cursor {
  display: inline-block;
  color: var(--color-green-neon, #00F59B);
  font-weight: 300;
  margin-left: 4px;
  animation: blinkCursor 0.9s infinite;
}

@keyframes blinkCursor {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hero-lead {
  font-size: 1.12rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: 2.4rem;
  max-width: 580px;
}

.hero-action-buttons {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 3.5rem;
  flex-wrap: wrap;
}

.btn-lg {
  padding: 1rem 2.4rem;
  font-size: 1rem;
}

.trust-indicators-strip {
  display: flex;
  align-items: center;
  gap: 1.8rem;
  padding-top: 1.8rem;
  border-top: 1px solid var(--color-border-glass);
}

.trust-item {
  display: flex;
  flex-direction: column;
}

.trust-num {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-cyan-light);
  line-height: 1;
}

.trust-label {
  font-size: 0.78rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 0.2rem;
}

.trust-sep {
  width: 1px;
  height: 32px;
  background: var(--color-border-subtle);
}

/* Visual Card Showcase */
.monolith-preview-card {
  padding: 1rem;
  border-radius: var(--radius-xl);
}

.preview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.6rem 1rem;
}

.header-indicator {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: #fff;
}

.pulse-cyan {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-cyan);
  box-shadow: 0 0 10px var(--color-cyan);
}

.pill-preview {
  font-size: 0.72rem;
  color: var(--color-cyan);
  background: rgba(0, 201, 232, 0.1);
  border: 1px solid rgba(0, 201, 232, 0.25);
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-full);
}

.preview-media {
  position: relative;
  height: 280px;
  border-radius: var(--radius-md);
  overflow: hidden;
}

.slide-media-wrap {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.preview-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(4, 9, 7, 0.85) 100%);
}

.floating-stat-box {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  background: rgba(4, 9, 7, 0.88);
  backdrop-filter: blur(14px);
  padding: 0.75rem 1.1rem;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  gap: 0.8rem;
  z-index: 2;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.5);
}

.stat-icon { font-size: 1.5rem; }
.floating-stat-box strong { display: block; font-size: 0.92rem; color: #fff; }
.floating-stat-box small { font-size: 0.76rem; color: var(--color-green-light); }

/* Left / Right Buttons */
.hero-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(4, 9, 7, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
  transition: all 0.25s ease;
  opacity: 0;
}

.preview-media:hover .hero-arrow {
  opacity: 1;
}

.arrow-left { left: 0.6rem; }
.arrow-right { right: 0.6rem; }

.hero-arrow:hover {
  background: var(--color-green-primary);
  border-color: var(--color-green-neon);
  transform: translateY(-50%) scale(1.1);
}

/* Transitions */
.fade-hero-enter-active,
.fade-hero-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-hero-enter-from {
  opacity: 0;
  transform: scale(1.02);
}

.fade-hero-leave-to {
  opacity: 0;
  transform: scale(0.98);
}

.preview-footer {
  padding: 1rem 0.5rem 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  flex-wrap: wrap;
}

.course-mini-chips {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.chip {
  font-size: 0.78rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-full);
  color: var(--color-text-secondary);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.2s ease;
}

.chip:hover {
  border-color: var(--color-green-neon);
  color: #fff;
}

.hero-dots {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.h-dot {
  width: 7px;
  height: 7px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.25);
  border: none;
  cursor: pointer;
  transition: all 0.3s var(--ease-smooth);
}

.h-dot--active {
  width: 20px;
  background: var(--color-green-neon);
  box-shadow: 0 0 8px rgba(0, 245, 155, 0.5);
}

/* Sections */
.section-courses-featured,
.section-why,
.section-steps,
.section-faq,
.section-final-cta {
  padding: 6.5rem 0;
}

.section-why {
  background: var(--color-surface-deep);
}

.section-center-head {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 3.8rem;
}

.course-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 2.2rem;
}

.course-card-item {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card-img-banner {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.banner-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s var(--ease-smooth);
}

.course-card-item:hover .banner-photo {
  transform: scale(1.08);
}

.banner-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(8, 15, 26, 0.1) 0%, rgba(13, 23, 48, 0.95) 100%);
}

.card-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-full);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  background: rgba(8, 15, 26, 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
}

.badge--hot { color: #FFA4B2; border-color: rgba(244, 63, 94, 0.4); }
.badge--new { color: var(--color-cyan-light); border-color: rgba(0, 201, 232, 0.4); }

.card-cat-tag {
  position: absolute;
  bottom: 0.8rem;
  right: 1rem;
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  background: rgba(0, 0, 0, 0.6);
  padding: 0.25rem 0.7rem;
  border-radius: var(--radius-full);
}

.card-content-wrap {
  padding: 1.6rem 1.6rem 1.8rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.course-card-title {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 800;
  color: #fff;
  line-height: 1.35;
  margin-bottom: 1.2rem;
  min-height: 3.2rem;
  display: flex;
  align-items: center;
}

.card-pricing-panel {
  padding: 0.85rem 1.1rem;
  background: rgba(5, 15, 11, 0.65);
  border: 1px solid rgba(16, 185, 129, 0.22);
  border-radius: var(--radius-md);
  margin-bottom: 1.25rem;
}

.price-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.price-label-text {
  font-size: 0.8rem;
  color: #A7F3D0;
  font-weight: 500;
}

.price-val-text {
  font-family: 'Space Grotesk', var(--font-heading);
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--color-green-neon, #00F59B);
  letter-spacing: -0.01em;
}

.card-btn-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.65rem;
  margin-top: auto;
}

.btn-card-action {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.65rem 0.8rem;
  font-size: 0.85rem;
  font-weight: 700;
  border-radius: var(--radius-sm);
}

.center-cta-wrap {
  text-align: center;
  margin-top: 3.5rem;
}

/* Why Grid */
.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.why-card {
  padding: 2.2rem;
}

.why-icon {
  font-size: 2rem;
  margin-bottom: 1.2rem;
}

.why-title {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.6rem;
}

.why-desc {
  font-size: 0.92rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* Steps Grid */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.8rem;
}

.step-box {
  padding: 2rem 1.6rem;
  position: relative;
}

.step-num {
  font-family: var(--font-heading);
  font-size: 2.4rem;
  font-weight: 800;
  color: var(--color-indigo);
  opacity: 0.5;
  display: block;
  line-height: 1;
  margin-bottom: 0.8rem;
}

.step-title {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  color: #fff;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.step-desc {
  font-size: 0.88rem;
  color: var(--color-text-secondary);
  line-height: 1.55;
}

/* FAQ */
.faq-list {
  max-width: 820px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.faq-item {
  padding: 1.8rem;
}

.faq-q {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.6rem;
}

.faq-a {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.65;
}

/* Final CTA */
.cta-banner {
  padding: 4.5rem 3rem;
  text-align: center;
  border-radius: var(--radius-xl);
  border-color: rgba(0, 201, 232, 0.4);
}

.cta-content {
  max-width: 680px;
  margin: 0 auto;
}

.cta-heading {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3.8vw, 3rem);
  font-weight: 800;
  color: #fff;
  margin-bottom: 1.2rem;
}

.cta-sub {
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

@media (max-width: 1024px) {
  .hero-content-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-text-block {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .hero-lead {
    margin: 0 auto 2.4rem;
  }
  .hero-action-buttons {
    justify-content: center;
  }
  .trust-indicators-strip {
    justify-content: center;
  }
  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 100px 0 50px;
  }

  .course-cards-grid {
    grid-template-columns: 1fr;
  }

  .steps-grid {
    grid-template-columns: 1fr;
  }

  .trust-indicators-strip {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .trust-num {
    font-size: 1.2rem;
  }

  .cta-banner {
    padding: 2.5rem 1.2rem;
  }

  .why-card {
    padding: 1.6rem;
  }

  .step-box {
    padding: 1.5rem 1.2rem;
  }

  .faq-item {
    padding: 1.3rem;
  }

  .card-btn-grid {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .preview-media {
    height: 220px;
  }

  .monolith-preview-card {
    padding: 0.75rem;
  }

  .preview-footer {
    padding: 0.75rem 0.25rem 0.3rem;
  }
}

@media (max-width: 640px) {
  .hero-typed-slot {
    white-space: normal;
    min-height: 2.45em;
  }

  .hero-headline {
    font-size: clamp(1.9rem, 6vw, 2.6rem);
  }

  .hero-action-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .trust-indicators-strip {
    gap: 0.8rem;
  }

  .trust-sep {
    display: none;
  }

  .cta-sub {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 88px 0 40px;
  }

  .hero-pill {
    font-size: 0.75rem;
  }

  .why-grid {
    grid-template-columns: 1fr;
  }

  .why-card {
    padding: 1.3rem;
  }

  .cta-banner {
    padding: 2rem 1rem;
  }
}
</style>
