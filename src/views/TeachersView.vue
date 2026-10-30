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
            class="teacher-card glass-surface"
            data-aos="fade-up"
            :data-aos-delay="(idx % 3) * 100"
          >
            <!-- Card Header with Avatar & Department -->
            <div class="teacher-card-top">
              <div class="avatar-box">
                <span class="avatar-initials">{{ teacher.name.split(' ').map(n => n[0]).join('') }}</span>
              </div>
              <div class="teacher-head-info">
                <span class="dept-tag">{{ teacher.department }}</span>
                <span class="exp-tag">⭐ {{ teacher.experience }}</span>
              </div>
            </div>

            <!-- Name and Role -->
            <h2 class="teacher-name">{{ teacher.name }}</h2>
            <p class="teacher-role">{{ teacher.role }}</p>

            <!-- Bio -->
            <p class="teacher-bio">{{ teacher.bio }}</p>

            <!-- Skills -->
            <div class="skills-wrap">
              <span v-for="(skill, i) in teacher.skills" :key="i" class="skill-pill">
                {{ skill }}
              </span>
            </div>

            <!-- Footer Action -->
            <div class="card-bottom">
              <span class="status-note">{{ teacher.status }}</span>
              <button
                class="btn btn-secondary btn-sm"
                @click="emit('openEnroll', `${teacher.name} guruhiga yozilish`)"
              >
                Ustoz bilan darsga yozilish
              </button>
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

.teacher-card {
  display: flex;
  flex-direction: column;
  padding: 28px;
  border-radius: var(--radius-xl);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.teacher-card:hover {
  transform: translateY(-5px);
  border-color: rgba(0, 245, 155, 0.35);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 245, 155, 0.15);
}

.teacher-card-top {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
}

.avatar-box {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10B981 0%, #00F59B 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.2rem;
  color: #040907;
  box-shadow: 0 4px 16px rgba(0, 245, 155, 0.4);
  flex-shrink: 0;
}

.teacher-head-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.dept-tag {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-accent);
}

.exp-tag {
  font-size: 0.78rem;
  color: var(--color-text-dim);
}

.teacher-name {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.teacher-role {
  font-size: 0.88rem;
  color: #a5b4fc;
  font-weight: 500;
  margin-bottom: 14px;
}

.teacher-bio {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.55;
  margin-bottom: 18px;
  flex: 1;
}

.skills-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 22px;
}

.skill-pill {
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-sm);
  font-size: 0.76rem;
  color: var(--color-text-muted);
}

.card-bottom {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.status-note {
  font-size: 0.72rem;
  color: var(--color-text-dim);
  font-style: italic;
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
    gap: 20px;
  }

  .teacher-card {
    padding: 20px;
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

  .teacher-card {
    padding: 18px 16px;
  }

  .avatar-box {
    width: 50px;
    height: 50px;
    font-size: 1rem;
  }

  .principle-box {
    padding: 20px 14px;
  }
}</style>
