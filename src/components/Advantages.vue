<script setup>
const advantages = [
  {
    icon: '🎯',
    title: '80% Amaliyot va Real Loyihalar',
    desc: 'Quruq nazariyadan voz kechganmiz. Har bir dars amaliy topshiriq va keyslar asosida o\'tiladi.'
  },
  {
    icon: '👨‍🏫',
    title: 'Top Kompaniyalardan Mentorlar',
    desc: 'Sizga sohada 4+ yillik real ishlab chiqarish tajribasiga ega yetakchi mutaxassislar dars beradi.'
  },
  {
    icon: '💻',
    title: 'Zamonaviy iMac & Core i7 Texnika',
    desc: 'O\'zingiz bilan noutbuk olib yurishingiz shart emas. Har bir o\'quvchi shaxsiy quvvatli kompyuter bilan ta\'minlanadi.'
  },
  {
    icon: '🤝',
    title: 'Coworking & Shaxsiy Yordamchilar',
    desc: 'Darsdan tashqari vaqtlarda ham markazimizda qolib mustaqil ishlash va asistent o\'qituvchilardan yordam olish imkoni.'
  },
  {
    icon: '💼',
    title: 'Karyera Markazi & Rezyume Tayyorlash',
    desc: 'Bitiruvchilarga mukammal rezyume va portfolio tayyorlash, intervyulardan muvaffaqiyatli o\'tish o\'rgatiladi.'
  },
  {
    icon: '📜',
    title: 'Sertifikat & Nufuzli Tavsiyanoma',
    desc: 'Kursni tamomlagan iqtidorli o\'quvchilarga hamkor IT kompaniyalarga tavsiya xatlari beriladi.'
  }
]
</script>

<template>
  <section class="advantages-section" id="advantages">
    <div class="container">
      <div class="section-header">
        <span class="badge badge-primary">Nega Aynan EduPro?</span>
        <h2 class="section-title">Biz bilan ta'lim olishning 6 ta ustunligi</h2>
        <p class="section-desc">
          Biz har bir o'quvchining natijasi uchun mas'uliyat his qilamiz va eng qulay sharoitlarni yaratamiz.
        </p>
      </div>

      <div class="adv-grid">
        <div v-for="item in advantages" :key="item.title" class="adv-card glass-panel">
          <div class="adv-icon">{{ item.icon }}</div>
          <h3 class="adv-title">{{ item.title }}</h3>
          <p class="adv-desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.advantages-section {
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
  margin: 0 auto 4rem;
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

.adv-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.adv-card {
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 0.35s ease;
}

.adv-card:hover {
  transform: translateY(-6px);
  border-color: rgba(99, 102, 241, 0.4);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5), 0 0 20px rgba(99, 102, 241, 0.15);
}

.adv-icon {
  width: 58px;
  height: 58px;
  border-radius: var(--radius-md);
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.adv-title {
  font-family: var(--font-heading);
  font-size: 1.22rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.8rem;
  line-height: 1.35;
}

.adv-desc {
  font-size: 0.92rem;
  color: var(--text-muted);
  line-height: 1.65;
}

@media (max-width: 992px) {
  .adv-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .adv-grid {
    grid-template-columns: 1fr;
  }
}
</style>
