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
            <!-- Banner Header with Decorative Grid & Social Icons -->
            <div class="card-banner-cover" :style="{ background: teacher.bannerGradient }">
              <div class="banner-grid-pattern"></div>
              <div class="banner-avatar-wrap">
                <span class="banner-avatar-icon">{{ teacher.avatar }}</span>
              </div>
              <div class="banner-social-icons">
                <span class="social-mini-circle" title="Telegram">✈️</span>
                <span class="social-mini-circle" title="LinkedIn">💼</span>
                <span class="social-mini-circle" title="GitHub">💻</span>
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
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.banner-grid-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px);
  background-size: 32px 32px;
  opacity: 0.6;
}

.banner-avatar-wrap {
  position: relative;
  z-index: 2;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(8px);
  border: 3px solid rgba(255, 255, 255, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
  transition: transform 0.3s ease;
}

.navora-style-card:hover .banner-avatar-wrap {
  transform: scale(1.08);
}

.banner-avatar-icon {
  font-size: 2.8rem;
}

.banner-social-icons {
  position: absolute;
  bottom: 12px;
  right: 16px;
  display: flex;
  gap: 8px;
  z-index: 2;
}

.social-mini-circle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(4, 9, 7, 0.55);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
}

.social-mini-circle:hover {
  transform: scale(1.15);
  background: #10B981;
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
    height: 135px;
  }

  .banner-avatar-wrap {
    width: 75px;
    height: 75px;
  }

  .banner-avatar-icon {
    font-size: 2.3rem;
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
