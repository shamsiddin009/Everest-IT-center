<script setup>
const teachers = [
  {
    name: 'Sardorbek Rahimov',
    role: 'Lead Frontend Mentor',
    exp: '5+ yillik tajriba',
    bio: 'EPAM va xorijiy loyihalarda faoliyat yuritgan tajribali Vue & React mutaxassisi. 600+ shogirdlar ustozi.',
    avatar: '👨‍💻',
    skills: ['Vue 3', 'TypeScript', 'React', 'Next.js']
  },
  {
    name: 'Dilshod Normatov',
    role: 'Python & Data Science Guru',
    exp: '6 yillik tajriba',
    bio: 'FinTech kompaniyalarida Senior Backend developer bo\'lib ishlagan. Telegram botlar va AI modellar yaratuvchisi.',
    avatar: '🐍',
    skills: ['Python', 'Django', 'FastAPI', 'PostgreSQL']
  },
  {
    name: 'Madina Alimova',
    role: 'IELTS 8.5 Instructor',
    exp: '4 yillik tajriba',
    bio: 'O\'quvchilari IELTS 7.0 - 8.0 ballarni qo\'lga kiritgan, xalqaro CELTA sertifikatiga ega instruktor.',
    avatar: '👩‍🏫',
    skills: ['IELTS 8.5', 'CELTA', 'Speaking Expert', 'Academic Writing']
  },
  {
    name: 'Farrux Tojiboyev',
    role: 'Akademik Matematika Ustasi',
    exp: '8 yillik tajriba',
    bio: 'Respublika olimpiadalari g\'olibi, Prezident va Al-Xorazmiy maktablariga 200+ o\'quvchini muvaffaqiyatli kiritgan.',
    avatar: '📐',
    skills: ['Olimpiada', 'DTM Testlar', 'Mantiqiy masalalar', 'Algebra']
  }
]
</script>

<template>
  <section class="teachers-section" id="teachers">
    <div class="container">
      <div class="section-header">
        <span class="badge badge-primary">Bizning Jamoa</span>
        <h2 class="section-title">Amaliyotchi va kuchli mentorlar</h2>
        <p class="section-desc">
          Har bir o'qituvchimiz nafaqat bilim beradi, balki sizning kasbiy o'sishingizga yo'l ko'rsatadi.
        </p>
      </div>

      <div class="teachers-grid">
        <div v-for="teacher in teachers" :key="teacher.name" class="teacher-card glass-panel">
          <div class="teacher-avatar-wrap">
            <span class="teacher-avatar">{{ teacher.avatar }}</span>
            <span class="teacher-exp-badge">{{ teacher.exp }}</span>
          </div>

          <h3 class="teacher-name">{{ teacher.name }}</h3>
          <div class="teacher-role">{{ teacher.role }}</div>
          <p class="teacher-bio">{{ teacher.bio }}</p>

          <div class="teacher-skills">
            <span v-for="s in teacher.skills" :key="s" class="teacher-skill-tag">
              {{ s }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.teachers-section {
  padding: 6rem 0;
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

.teachers-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.8rem;
}

.teacher-card {
  padding: 2.2rem 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  transition: all 0.35s ease;
}

.teacher-card:hover {
  transform: translateY(-8px);
  border-color: rgba(99, 102, 241, 0.4);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6);
}

.teacher-avatar-wrap {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: rgba(99, 102, 241, 0.12);
  border: 2px solid rgba(99, 102, 241, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 1.4rem;
}

.teacher-avatar {
  font-size: 2.8rem;
}

.teacher-exp-badge {
  position: absolute;
  bottom: -6px;
  background: var(--primary);
  color: #fff;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-full);
  white-space: nowrap;
}

.teacher-name {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.4rem;
}

.teacher-role {
  font-size: 0.82rem;
  color: var(--primary-light);
  font-weight: 600;
  margin-bottom: 1rem;
}

.teacher-bio {
  font-size: 0.86rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1.4rem;
  flex: 1;
}

.teacher-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
}

.teacher-skill-tag {
  font-size: 0.72rem;
  padding: 0.25rem 0.6rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-glass);
  color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
}

@media (max-width: 1024px) {
  .teachers-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .teachers-grid {
    grid-template-columns: 1fr;
  }
}
</style>
