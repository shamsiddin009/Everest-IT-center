<script setup>
import { ref } from 'vue'

const activeFilter = ref('all')

const categories = [
  { id: 'all', name: 'Barchasi' },
  { id: 'classes', name: 'Sinfxonalar' },
  { id: 'process', name: 'Dars jarayonlari' },
  { id: 'atmosphere', name: 'Muhit va Coworking' }
]

const galleryItems = [
  {
    image: '/images/classroom.jpg',
    category: 'classes',
    title: 'Apple iMac IT Laboratoriyasi',
    desc: 'Har bir o\'quvchi uchun shaxsiy iMac va tezyurar internet'
  },
  {
    image: '/images/coding.jpg',
    category: 'process',
    title: 'Dasturlash Amaliyot Darsi',
    desc: 'Haqiqiy loyihalar, kod yozish va mentor nazorati'
  },
  {
    image: '/images/english.jpg',
    category: 'atmosphere',
    title: 'Ingliz Tili Speaking Club',
    desc: 'Native speakerlar bilan jonli va erkin muloqot zallari'
  },
  {
    image: '/images/math.jpg',
    category: 'classes',
    title: 'Matematika & Olimpiada Markazi',
    desc: 'Interaktiv aqlli doskalar va chuqurlashtirilgan mashg\'ulotlar'
  },
  {
    image: '/images/pc.jpg',
    category: 'process',
    title: 'Bolalar uchun IT Start Darsi',
    desc: 'Qiziqarli grafik planshetlar va dastlabki raqamli ko\'nikmalar'
  }
]
</script>

<template>
  <section class="gallery-section" id="gallery">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <span class="badge badge-primary">Fotogalereya</span>
        <h2 class="section-title">IT Center Muhiti bilan Tanishing</h2>
        <p class="section-desc">
          Biz o'quvchilarimiz nafaqat bilim olishi, balki qulay va ilhomlanadigan muhitda o'sishi uchun barcha sharoitlarni yaratdik.
        </p>
      </div>

      <!-- Gallery Grid -->
      <div class="gallery-grid">
        <div
          v-for="(item, idx) in galleryItems"
          :key="item.title"
          class="gallery-card glass-panel"
          :class="{ 'card-featured': idx === 0 }"
          data-aos="zoom-in-up"
          :data-aos-delay="idx * 100"
        >
          <img :src="item.image" :alt="item.title" class="gallery-img" />
          <div class="gallery-overlay">
            <span class="gallery-tag">EduPro Muhiti</span>
            <h3 class="gallery-title">{{ item.title }}</h3>
            <p class="gallery-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  padding: 6rem 0;
  background: var(--bg-primary);
  position: relative;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3.5rem;
}

.section-title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3.8vw, 3rem);
  color: #fff;
  font-weight: 800;
  margin: 1rem 0 0.8rem;
  letter-spacing: -0.02em;
}

.section-desc {
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.7;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.8rem;
}

.gallery-card {
  position: relative;
  height: 280px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  padding: 0;
  cursor: pointer;
}

.card-featured {
  grid-column: span 2;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.gallery-card:hover .gallery-img {
  transform: scale(1.08);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(10, 13, 20, 0.1) 0%, rgba(10, 13, 20, 0.92) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.8rem;
  transition: all 0.3s ease;
}

.gallery-tag {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--primary-light);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.4rem;
}

.gallery-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  color: #fff;
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.gallery-desc {
  font-size: 0.86rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.5;
}

@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  .card-featured {
    grid-column: span 1;
  }
}
</style>
