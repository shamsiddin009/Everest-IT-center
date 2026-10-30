<script setup>
import { ref, computed } from 'vue';
import { teachersData } from '../data/teachers.js';

const emit = defineEmits(['openEnroll']);

const activeDept = ref('all');

const departments = [
  { id: 'all', name: 'Barcha Ustozlar' },
  { id: 'IT & Dasturlash', name: 'IT & Dasturlash' },
  { id: 'Ingliz Tili', name: 'Ingliz Tili' },
  { id: 'Matematika', name: 'Matematika' }
];

const filteredTeachers = computed(() => {
  if (activeDept.value === 'all') return teachersData;
  return teachersData.filter(t => t.department === activeDept.value);
});
</script>

<template>
  <div class="teachers-page">
    <!-- Header -->
    <header class="teachers-header">
      <div class="container text-center">
        <span class="page-badge">Tajribali Murabbiylar</span>
        <h1 class="page-title">
          O‘z sohasining <span class="text-gradient">yetakchi mutaxassislaridan</span> ta’lim oling
        </h1>
        <p class="page-subtitle">
          Everest IT Center o‘qituvchilari xalqaro sertifikatlar, yillar davomida to‘plangan amaliy tajriba va o‘nlab muvaffaqiyatli shogirdlar natijasiga ega.
        </p>
      </div>
    </header>

    <!-- Department Filter Tabs -->
    <section class="filter-section" data-aos="fade-up" data-aos-delay="100">
      <div class="container">
        <div class="dept-tabs">
          <button
            v-for="dept in departments"
            :key="dept.id"
            class="dept-btn"
            :class="{ active: activeDept === dept.id }"
            @click="activeDept = dept.id"
          >
            {{ dept.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Faculty Grid -->
    <section class="teachers-grid-section">
      <div class="container">
        <div class="teachers-grid">
          <article
            v-for="(teacher, idx) in filteredTeachers"
            :key="teacher.id"
            class="teacher-card navora-style-card"
            data-aos="fade-up"
            :data-aos-delay="(idx % 3) * 100"
          >
            <!-- Banner Header with Real Avatar Character & Social Icons (Exact Navora Match) -->
            <div class="card-banner-cover" :style="{ background: teacher.bannerGradient }">
              <div class="banner-grid-pattern"></div>
              
              <!-- Floating Center Portrait (3D Character style like in image) -->
              <div class="banner-character-stage">
                <img
                  :src="teacher.avatarImg"
                  :alt="teacher.name"
                  class="character-portrait-img"
                  loading="lazy"
                />
              </div>

              <!-- Social Links Top-Right or Bottom-Right -->
              <div class="banner-social-icons">
                <span class="social-mini-circle" title="Telegram">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                </span>
                <span class="social-mini-circle" title="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </span>
                <span class="social-mini-circle" title="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </span>
              </div>
            </div>

            <!-- Content Body -->
            <div class="card-inner-body">
              <div class="profile-header-row">
                <div class="avatar-crest-badge">
                  <span>{{ teacher.name.charAt(0) }}</span>
                </div>
                <div class="teacher-identity">
                  <div class="name-verify-row">
                    <h2 class="teacher-name">{{ teacher.name }}</h2>
                    <span class="verify-badge" title="Tasdiqlangan mentor">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </span>
                  </div>
                  <span class="teacher-handle">{{ teacher.handle }}</span>
                </div>

                <button
                  class="btn-follow-action"
                  @click="emit('openEnroll', `${teacher.name} guruhiga yozilish`)"
                >
                  Yozilish
                </button>
              </div>

              <!-- Role & Dept Tags -->
              <div class="role-badge-row">
                <span class="role-tag">{{ teacher.role }}</span>
                <span class="dept-tag">{{ teacher.department }}</span>
              </div>

              <!-- Bio Description -->
              <p class="teacher-bio">{{ teacher.bio }}</p>

              <!-- Skills wrap -->
              <div class="skills-wrap">
                <span v-for="(skill, i) in teacher.skills" :key="i" class="skill-pill">
                  {{ skill }}
                </span>
              </div>

              <!-- Metrics Strip (Like 100 Following · 50.2k Followers) -->
              <div class="profile-metrics-strip">
                <div class="metric-item">
                  <strong>⭐ {{ teacher.rating }}</strong>
                  <span>Reyting</span>
                </div>
                <div class="metric-divider"></div>
                <div class="metric-item">
                  <strong>{{ teacher.studentsCount }}</strong>
                  <span>Shogirdlar</span>
                </div>
                <div class="metric-divider"></div>
                <div class="metric-item">
                  <strong>{{ teacher.experience }}</strong>
                  <span>Tajriba</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Mentorship Principle Banner -->
    <section class="mentor-principle-section">
      <div class="container">
        <div class="principle-box glass-surface">
          <h3>Everest Murabbiylik Madaniyati</h3>
          <p>
            Biz faqat dars vaqtida emas, darsdan so‘ng ham savollaringizga javob beramiz. Har bir o‘quvchi o‘z loyihasini himoya qilgunga qadar shaxsiy mentor nazoratida bo‘ladi.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.teachers-page {
  padding-bottom: 80px;
}

.teachers-header {
  padding: 120px 0 50px;
  background: radial-gradient(circle at 50% 20%, rgba(101, 91, 255, 0.12) 0%, transparent 60%);
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

.dept-tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.dept-btn {
  padding: 8px 20px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  color: var(--color-text-muted);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.dept-btn:hover {
  background: var(--color-surface-hover);
  color: var(--color-text);
}

.dept-btn.active {
  background: var(--color-green-primary);
  border-color: var(--color-green-primary);
  color: #fff;
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.45);
}

/* Grid */
.teachers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
}

/* ═══ Navora Inspired Teacher Profile Card ═══ */
.navora-style-card {
  background: #081610;
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 28px;
  overflow: hidden;
  padding: 0;
  box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.6), 0 0 20px rgba(16, 185, 129, 0.08);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
              border-color 0.35s ease;
  position: relative;
}

.navora-style-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0, 245, 155, 0.45);
  box-shadow: 0 24px 50px -10px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 245, 155, 0.22);
}

/* Banner Cover */
.card-banner-cover {
  position: relative;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.banner-grid-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 28px 28px;
  opacity: 0.7;
}

/* 3D Character Stage (Like in Navora image) */
.banner-character-stage {
  position: relative;
  z-index: 2;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.35);
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 245, 155, 0.25);
  background: #081610;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
}

.navora-style-card:hover .banner-character-stage {
  transform: scale(1.08) translateY(-4px);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.65), 0 0 35px rgba(0, 245, 155, 0.45);
}

.character-portrait-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.navora-style-card:hover .character-portrait-img {
  transform: scale(1.08);
}

.banner-social-icons {
  position: absolute;
  bottom: 14px;
  right: 18px;
  display: flex;
  gap: 8px;
  z-index: 3;
}

.social-mini-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(4, 9, 7, 0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  cursor: pointer;
  transition: all 0.25s ease;
}

.social-mini-circle:hover {
  transform: translateY(-2px) scale(1.12);
  background: #10B981;
  border-color: #00F59B;
  color: #040907;
  box-shadow: 0 4px 12px rgba(0, 245, 155, 0.4);
}

/* Inner Body */
.card-inner-body {
  padding: 24px 24px 20px;
  background: #06110D;
}

.profile-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.avatar-crest-badge {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #10B981;
  color: #040907;
  font-weight: 800;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #06110D;
  box-shadow: 0 0 16px rgba(16, 185, 129, 0.4);
  flex-shrink: 0;
}

.teacher-identity {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.name-verify-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.teacher-name {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 800;
  color: #FFFFFF;
  margin: 0;
  line-height: 1.25;
}

.verify-badge {
  color: #38BDF8;
  display: inline-flex;
}

.teacher-handle {
  font-size: 0.8rem;
  color: #A7F3D0;
  font-weight: 500;
}

/* Follow / Enroll Button */
.btn-follow-action {
  padding: 8px 18px;
  background: #10B981;
  color: #040907;
  border: none;
  border-radius: var(--radius-full);
  font-size: 0.86rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.4);
  transition: all 0.25s ease;
  white-space: nowrap;
}

.btn-follow-action:hover {
  background: #00F59B;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 245, 155, 0.55);
}

.btn-follow-action:active {
  transform: translateY(0);
}

.role-badge-row {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.role-tag {
  font-size: 0.78rem;
  font-weight: 700;
  color: #00F59B;
  background: rgba(0, 245, 155, 0.1);
  padding: 3px 10px;
  border-radius: var(--radius-full);
  border: 1px solid rgba(0, 245, 155, 0.25);
}

.dept-tag {
  font-size: 0.78rem;
  font-weight: 600;
  color: #94A3B8;
  background: rgba(255, 255, 255, 0.05);
  padding: 3px 10px;
  border-radius: var(--radius-full);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.teacher-bio {
  color: #CBD5E1;
  font-size: 0.88rem;
  line-height: 1.55;
  margin-bottom: 14px;
}

.skills-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}

.skill-pill {
  padding: 3px 9px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-sm);
  font-size: 0.74rem;
  color: #A7B9AF;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

/* Metrics Strip (100 Following · 50.2k Followers style) */
.profile-metrics-strip {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 12px 14px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.metric-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.metric-item strong {
  font-size: 0.88rem;
  font-weight: 800;
  color: #FFFFFF;
}

.metric-item span {
  font-size: 0.7rem;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.metric-divider {
  width: 1px;
  height: 24px;
  background: rgba(255, 255, 255, 0.08);
}

.btn-sm {
  width: 100%;
  padding: 8px 16px;
  font-size: 0.85rem;
}

/* Banner */
.mentor-principle-section {
  margin-top: 60px;
}

.principle-box {
  padding: 36px 40px;
  border-radius: var(--radius-xl);
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid rgba(101, 91, 255, 0.25);
}

.principle-box h3 {
  font-size: 1.4rem;
  margin-bottom: 10px;
}

.principle-box p {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

/* ═══ RESPONSIVE MOBILE BREAKPOINTS ═══ */
@media (max-width: 768px) {
  .teachers-header {
    padding: 90px 0 32px;
  }

  .teachers-grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .card-inner-body {
    padding: 20px 18px 16px;
  }

  .filter-section {
    margin-bottom: 28px;
  }

  .dept-tabs {
    gap: 8px;
  }

  .dept-btn {
    padding: 7px 14px;
    font-size: 0.82rem;
  }

  .principle-box {
    padding: 24px 18px;
  }

  .principle-box h3 {
    font-size: 1.2rem;
  }

  .page-subtitle {
    font-size: 0.95rem;
  }

  .mentor-principle-section {
    margin-top: 40px;
  }
}

@media (max-width: 480px) {
  .teachers-header {
    padding: 80px 0 24px;
  }

  .card-banner-cover {
    height: 155px;
  }

  .banner-character-stage {
    width: 90px;
    height: 90px;
  }

  .avatar-crest-badge {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }

  .teacher-name {
    font-size: 1.05rem;
  }

  .btn-follow-action {
    padding: 6px 14px;
    font-size: 0.78rem;
  }

  .profile-metrics-strip {
    padding: 10px;
  }

  .metric-item strong {
    font-size: 0.8rem;
  }

  .metric-item span {
    font-size: 0.65rem;
  }

  .principle-box {
    padding: 20px 14px;
  }
}</style>
