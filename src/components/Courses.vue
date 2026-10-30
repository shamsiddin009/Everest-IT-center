<script setup>
import { ref, computed } from 'vue'
import Sticker from './Sticker.vue'

const emit = defineEmits(['selectCourse'])

const activeCategory = ref('all')

const categories = [
  { id: 'all', name: 'Barcha kurslar', icon: '✨' },
  { id: 'it', name: 'IT & Dasturlash', icon: '💻' },
  { id: 'pc', name: 'Kompyuter Savodxonligi', icon: '🖥️' },
  { id: 'english', name: 'Ingliz Tili', icon: '🇬🇧' },
  { id: 'math', name: 'Matematika', icon: '📐' }
]

const courses = [
  {
    id: 'frontend',
    category: 'it',
    title: 'Frontend Web Dasturlash',
    badge: 'TOP Kurs',
    badgeType: 'hot',
    image: '/images/coding.jpg',
    desc: 'HTML, CSS, JavaScript, Vue.js, Git va zamonaviy veb-saytlar hamda interfeyslar yaratish. Haqiqiy loyihalar asosida ta\'lim.',
    duration: '6 oy',
    intensity: 'Haftada 3 kun, 2 soat',
    skills: ['HTML5 & CSS3', 'JavaScript ES6+', 'Vue 3 & Vite', 'Rest API & Git'],
    price: '350 000 so\'m/oy',
    level: 'Boshlang\'ichdan Pro darajagacha'
  },
  {
    id: 'python',
    category: 'it',
    title: 'Python Backend & AI asoslari',
    badge: 'Talabgir',
    badgeType: 'new',
    image: '/images/coding.jpg',
    desc: 'Python tili, algoritmlar, ma\'lumotlar bazasi (PostgreSQL), Django/FastAPI freymvorklari va Telegram botlar yaratish.',
    duration: '6 oy',
    intensity: 'Haftada 3 kun, 2 soat',
    skills: ['Python Core', 'Django / FastAPI', 'PostgreSQL', 'Telegram Bot API'],
    price: '350 000 so\'m/oy',
    level: 'Noldan boshlovchilar uchun'
  },
  {
    id: 'pc-literacy',
    category: 'pc',
    title: 'Kompyuter Savodxonligi (IT Start)',
    badge: 'Boshlang\'ich',
    badgeType: 'standard',
    image: '/images/pc.jpg',
    desc: 'Windows tizimini mukammal o\'rganish, Word, Excel, PowerPoint, Google Docs/Sheets va xavfsiz Internetdan professional foydalanish.',
    duration: '2 oy',
    intensity: 'Haftada 3 kun, 1.5 soat',
    skills: ['MS Word & Excel', 'PowerPoint taqdimot', 'Tez yozish (Blind typing)', 'Bulutli texnologiyalar'],
    price: '250 000 so\'m/oy',
    level: '0 dan boshlovchilar & bolalar'
  },
  {
    id: 'general-english',
    category: 'english',
    title: 'General English (Barcha darajalar)',
    badge: 'Tezkor natija',
    badgeType: 'standard',
    image: '/images/english.jpg',
    desc: 'Grammatika, so\'z boyligi, ravon gapirish (Speaking) va tinglab tushunish (Listening) ko\'nikmalarini interaktiv muhitda rivojlantirish.',
    duration: 'Bosqichma-bosqich (har biri 3 oy)',
    intensity: 'Haftada 3 kun, 1.5 soat',
    skills: ['Speaking Club', 'Grammar in Use', 'Vocabulary Boost', 'Interaktiv o\'yinlar'],
    price: '250 000 so\'m/oy',
    level: 'Beginner dan Advanced gacha'
  },
  {
    id: 'ielts',
    category: 'english',
    title: 'IELTS Intensive 7.5+',
    badge: 'Grand Natijalar',
    badgeType: 'hot',
    image: '/images/english.jpg',
    desc: 'IELTS imtihoniga professional strategiyalar, Listening, Reading, Writing va Speaking bo\'yicha 8.0+ sertifikatli instruktorlar darsi.',
    duration: '3-4 oy',
    intensity: 'Haftada 3 kun + Mock Exam',
    skills: ['Essay Writing Task 1 & 2', 'Academic Reading', '1-on-1 Speaking Mock', 'Haftalik Test sinovlari'],
    price: '300 000 so\'m/oy',
    level: 'Intermediate darajadagilar uchun'
  },
  {
    id: 'math-school',
    category: 'math',
    title: 'Chuqurlashtirilgan Maktab Matematikasi',
    badge: 'Prezident Maktabiga',
    badgeType: 'new',
    image: '/images/math.jpg',
    desc: 'Mantiqiy masalalar, olimpiada masalalari, DTM testlariga tayyorgarlik va nostandart fikrlashni shakllantirish.',
    duration: '9 oy (O\'quv yili)',
    intensity: 'Haftada 3 kun, 2 soat',
    skills: ['Mantiqiy masalalar', 'Olimpiada masalalari', 'DTM & Attestatsiya', 'Mental arifmetika'],
    price: '250 000 so\'m/oy',
    level: '5 - 11 sinf o\'quvchilari'
  }
]

const filteredCourses = computed(() => {
  if (activeCategory.value === 'all') return courses
  return courses.filter(c => c.category === activeCategory.value)
})
</script>

<template>
  <section class="courses-section" id="courses">
    <div class="container">
      <div class="section-header">
        <span class="badge badge-primary">Bizning Yo'nalishlar</span>
        <h2 class="section-title">O'zingizga mos zamonaviy kursni tanlang</h2>
        <p class="section-desc">
          Har bir yo'nalish bo'yicha amaliy tajriba, qulay xonalar va eng kuchli o'quv dasturi bilan ta'lim oling.
        </p>
      </div>

      <!-- Category Filter Tabs -->
      <div class="category-tabs">
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="cat-btn"
          :class="{ 'cat-btn--active': activeCategory === cat.id }"
          @click="activeCategory = cat.id"
        >
          <Sticker :name="cat.icon" size="xs" variant="flat" class="cat-sticker" />
          <span class="cat-name">{{ cat.name }}</span>
        </button>
      </div>

      <!-- Courses Grid with Real Visual Photos -->
      <div class="courses-grid">
        <div
          v-for="course in filteredCourses"
          :key="course.id"
          class="course-card glass-panel"
        >
          <!-- Course Card Image Banner -->
          <div class="card-image-wrap">
            <img :src="course.image" :alt="course.title" class="card-img" />
            <div class="card-img-overlay"></div>
            
            <span
              class="course-badge"
              :class="{
                'badge-hot': course.badgeType === 'hot',
                'badge-new': course.badgeType === 'new'
              }"
            >
              {{ course.badge }}
            </span>
            <span class="course-level-tag">{{ course.level }}</span>
          </div>

          <div class="card-body">
            <h3 class="course-title">{{ course.title }}</h3>
            <p class="course-desc">{{ course.desc }}</p>

            <div class="course-meta">
              <div class="meta-item">
                <span class="meta-icon"><Sticker name="clock" size="xs" /></span>
                <span><strong>Davomiyligi:</strong> {{ course.duration }}</span>
              </div>
              <div class="meta-item">
                <span class="meta-icon"><Sticker name="calendar" size="xs" /></span>
                <span><strong>Darslar:</strong> {{ course.intensity }}</span>
              </div>
            </div>

            <!-- Skills tags -->
            <div class="skills-box">
              <span v-for="skill in course.skills" :key="skill" class="skill-tag">
                <Sticker name="check" size="xs" variant="flat" /> {{ skill }}
              </span>
            </div>

            <!-- Card Footer with Price and Action -->
            <div class="card-footer">
              <div class="price-box">
                <span class="price-label">Oylik to'lov</span>
                <span class="price-val">{{ course.price }}</span>
              </div>
              <button class="btn btn-primary btn-sm" @click="$emit('selectCourse', course.title)">
                Yozilish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.courses-section {
  padding: 6rem 0;
  position: relative;
  background: var(--bg-secondary);
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

.category-tabs {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 3.5rem;
  flex-wrap: wrap;
}

.cat-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.6rem;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-glass);
  color: var(--text-muted);
  font-family: var(--font-sans);
  font-size: 0.92rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
}

.cat-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  border-color: rgba(16, 185, 129, 0.4);
}

.cat-btn--active {
  background: var(--color-green-primary, #10B981);
  color: #fff;
  border-color: var(--color-green-primary, #10B981);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 2.2rem;
}

.course-card {
  padding: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-xl);
}

.course-card:hover {
  transform: translateY(-8px);
  border-color: rgba(16, 185, 129, 0.5);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.65), 0 0 30px rgba(16, 185, 129, 0.25);
}

/* Card Image Banner */
.card-image-wrap {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.course-card:hover .card-img {
  transform: scale(1.08);
}

.card-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(4, 9, 7, 0.1) 0%, rgba(8, 20, 14, 0.95) 100%);
}

.course-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-full);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: rgba(4, 9, 7, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  z-index: 2;
}

.badge-hot {
  background: rgba(0, 245, 155, 0.2);
  color: #00F59B;
  border-color: rgba(0, 245, 155, 0.5);
  box-shadow: 0 0 12px rgba(0, 245, 155, 0.3);
}

.badge-new {
  background: rgba(52, 211, 153, 0.2);
  color: #6EE7B7;
  border-color: rgba(52, 211, 153, 0.5);
}

.course-level-tag {
  position: absolute;
  bottom: 0.8rem;
  right: 1rem;
  font-size: 0.75rem;
  color: #E2E8F0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  padding: 0.25rem 0.7rem;
  border-radius: var(--radius-full);
  z-index: 2;
}

.card-body {
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.course-title {
  font-family: var(--font-heading);
  font-size: 1.35rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.7rem;
  line-height: 1.3;
}

.course-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1.4rem;
}

.course-meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.9rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--radius-sm);
  margin-bottom: 1.4rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.85);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.skills-box {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.8rem;
  flex: 1;
}

.skill-tag {
  font-size: 0.75rem;
  padding: 0.3rem 0.65rem;
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.2);
  color: var(--primary-light);
  border-radius: 6px;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.4rem;
  border-top: 1px solid var(--border-glass);
}

.price-box {
  display: flex;
  flex-direction: column;
}

.price-label {
  font-size: 0.72rem;
  color: var(--text-sub);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.price-val {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 700;
  color: #fff;
}

.btn-sm {
  padding: 0.65rem 1.5rem;
  font-size: 0.88rem;
}

@media (max-width: 768px) {
  .courses-grid {
    grid-template-columns: 1fr;
  }
}
</style>
