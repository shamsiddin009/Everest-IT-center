<script setup>
import Sticker from '../components/Sticker.vue';
const emit = defineEmits(['openEnroll']);

const values = [
  {
    icon: '🎯',
    title: 'Natijadorlik',
    desc: 'O‘quvchilarimizning amaliy bilim egallashi va real loyihalar yaratishi biz uchun asosiy o‘lchovdir.'
  },
  {
    icon: '💡',
    title: 'Innovatsiya va Texnologiya',
    desc: 'Eng so‘nggi dasturlash freymvorklari, interaktiv ta’lim usullari va zamonaviy uskunalar bilan ta’minlash.'
  },
  {
    icon: '🤝',
    title: 'Shaxsiy Mentorlik',
    desc: 'Har bir o‘quvchining o‘zlashtirish sur’atiga mos yondashuv va darsdan tashqari uzluksiz yordam.'
  },
  {
    icon: '🏔️',
    title: 'Yuksalish Madaniyati',
    desc: 'Everest nomi ramziy ma’noda har bir yoshni o‘z sohasining eng baland cho‘qqisiga intiltirishni anglatadi.'
  }
];

const stats = [
  { num: '4+', label: 'Asosiy Ta’lim Yo‘nalishlari' },
  { num: '15+', label: 'Amaliy Portfolio Loyihalari' },
  { num: '100%', label: 'Zamonaviy iMac & PC Jihozlari' },
  { num: '1-dars', label: 'Mutlaqo Bepul Sinov' }
];
</script>

<template>
  <div class="about-page">
    <!-- Header -->
    <header class="about-header">
      <div class="container text-center">
        <span class="page-badge">Bizning Missiyamiz</span>
        <h1 class="page-title">
          Kelajak avlodni <span class="text-gradient">cho‘qqilarga eltuvchi</span> ta’lim maskani
        </h1>
        <p class="page-subtitle">
          Everest IT Center — yoshlar, talabalar va o‘quvchilarni zamonaviy texnologiyalar, jahon tillari va fundamental fanlar orqali xalqaro miqyosdagi mutaxassis bo‘lib yetishishlariga ko‘maklashadi.
        </p>
      </div>
    </header>

    <!-- Stats Bar -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid glass-surface" data-aos="zoom-in" data-aos-duration="700">
          <div v-for="(stat, i) in stats" :key="i" class="stat-item">
            <span class="stat-number text-gradient">{{ stat.num }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="mission-section">
      <div class="container">
        <div class="mission-grid">
          <div class="mission-card glass-surface" data-aos="fade-right" data-aos-duration="750">
            <div class="card-crest-icon">
              <Sticker name="mountain" size="lg" />
            </div>
            <h2>Bizning Missiyamiz</h2>
            <p>
              Har bir o‘quvchining ichki salohiyatini kashf qilish, ularga nazariyadan ko‘ra ko‘proq amaliyot va mustaqil fikrlash ko‘nikmasini singdirish. Dasturlash, chet tillari va mantiqiy matematika yordamida yoshlarning hayotini sifatli o‘zgartirish.
            </p>
          </div>

          <div class="mission-card glass-surface" data-aos="fade-left" data-aos-duration="750">
            <div class="card-crest-icon">
              <Sticker name="rocket" size="lg" />
            </div>
            <h2>Bizning Qarashimiz (Vision)</h2>
            <p>
              O‘zbekistonda zamonaviy IT va intellektual ta’lim standartlarini yuqori bosqichga ko‘tarish hamda xalqaro nufuzli kompaniyalarda va oliygohlarda munosib o‘rin egallovchi ilg‘or kadrlarni tarbiyalash.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="values-section">
      <div class="container">
        <div class="section-title-wrap text-center" data-aos="fade-up">
          <span class="section-badge">Qadriyatlar</span>
          <h2 class="section-heading">Biz nimaga tayanamiz?</h2>
          <p class="section-sub">
            Bizning ta’lim falsafamiz o‘quvchilar va ustozlar o‘rtasidagi samimiy hamkorlikka qurilgan.
          </p>
        </div>

        <div class="values-grid">
          <div
            v-for="(val, idx) in values"
            :key="idx"
            class="value-card glass-surface"
            data-aos="fade-up"
            :data-aos-delay="idx * 90"
          >
            <Sticker :name="val.icon" size="lg" class="val-sticker" />
            <h3>{{ val.title }}</h3>
            <p>{{ val.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Atmosphere / Labs Highlight -->
    <section class="labs-section">
      <div class="container">
        <div class="labs-box glass-surface" data-aos="fade-up" data-aos-duration="800">
          <div class="labs-content">
            <span class="section-badge">Sharoitlar</span>
            <h2>Zamonaviy o‘quv laboratoriyalari va Coworking</h2>
            <p>
              Markazimiz har bir o‘quvchi o‘zini erkin his qilishi, qulay stullarda soatlab diqqatni jamlab kod yoza olishi va jamoaviy loyihalarni muhokama qilishi uchun maxsus Coworking hududlariga ega.
            </p>
            <ul class="labs-features">
              <li><Sticker name="lightning" size="xs" /> Kuchli dasturlash stansiyalari va iMac kompyuterlari</li>
              <li><Sticker name="wifi" size="xs" /> Yuqori tezlikdagi uzluksiz optik internet</li>
              <li><Sticker name="coffee" size="xs" /> Shinam dam olish va kofe burchagi</li>
              <li><Sticker name="books" size="xs" /> Dasturlash va ingliz tiliga oid kitoblar kutubxonasi</li>
            </ul>
            <button class="btn btn-primary" @click="emit('openEnroll', 'Markaz bilan tanishuv')">
              Markazga Tashrif Buyurish
            </button>
          </div>
          <div class="labs-visual">
            <div class="visual-badge">
              <span class="badge-title">Everest Muhiti</span>
              <span class="badge-desc">Rivojlanish uchun qulay ekotizim</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  padding-bottom: 80px;
}

.about-header {
  padding: 120px 0 50px;
  background: radial-gradient(circle at 50% 20%, rgba(0, 201, 232, 0.12) 0%, transparent 60%);
}

.page-badge {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(101, 91, 255, 0.12);
  color: #a5b4fc;
  border: 1px solid rgba(101, 91, 255, 0.25);
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
  max-width: 780px;
  margin: 0 auto;
  color: var(--color-text-muted);
  font-size: 1.05rem;
  line-height: 1.6;
}

/* Stats */
.stats-section {
  margin: -20px 0 60px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 30px 20px;
  border-radius: var(--radius-xl);
  gap: 24px;
  text-align: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.stat-number {
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1.1;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--color-text-dim);
}

/* Mission */
.mission-section {
  padding: 40px 0;
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.mission-card {
  padding: 36px 30px;
  border-radius: var(--radius-xl);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.card-crest-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.mission-card h2 {
  font-size: 1.5rem;
  margin-bottom: 14px;
  font-weight: 700;
}

.mission-card p {
  color: var(--color-text-muted);
  line-height: 1.65;
  font-size: 0.98rem;
}

/* Values */
.values-section {
  padding: 60px 0;
}

.section-title-wrap {
  max-width: 650px;
  margin: 0 auto 50px;
}

.section-badge {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(0, 201, 232, 0.1);
  color: var(--color-accent);
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.section-heading {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  font-weight: 800;
  margin-bottom: 12px;
  letter-spacing: -0.01em;
}

.section-sub {
  color: var(--color-text-muted);
  font-size: 0.95rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.value-card {
  padding: 28px 24px;
  border-radius: var(--radius-lg);
  transition: transform 0.25s ease;
}

.value-card:hover {
  transform: translateY(-4px);
}

.val-icon {
  font-size: 2rem;
  display: inline-block;
  margin-bottom: 14px;
}

.value-card h3 {
  font-size: 1.18rem;
  margin-bottom: 10px;
  font-weight: 700;
}

.value-card p {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.55;
}

/* Labs */
.labs-section {
  padding: 40px 0;
}

.labs-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid rgba(0, 201, 232, 0.2);
}

.labs-content {
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.labs-content h2 {
  font-size: 1.8rem;
  margin: 12px 0 16px;
  font-weight: 800;
  line-height: 1.3;
}

.labs-content p {
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 24px;
  font-size: 0.95rem;
}

.labs-features {
  list-style: none;
  padding: 0;
  margin: 0 0 32px;
}

.labs-features li {
  font-size: 0.92rem;
  color: var(--color-text);
  margin-bottom: 10px;
}

.labs-visual {
  background: linear-gradient(135deg, rgba(101, 91, 255, 0.2) 0%, rgba(0, 201, 232, 0.2) 100%),
              radial-gradient(circle at 50% 50%, #0d1730 0%, #080f1a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  border-left: 1px solid var(--color-border);
}

.visual-badge {
  text-align: center;
  padding: 30px;
  background: rgba(17, 31, 61, 0.7);
  backdrop-filter: blur(12px);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.badge-title {
  display: block;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-accent);
  margin-bottom: 6px;
}

.badge-desc {
  font-size: 0.88rem;
  color: var(--color-text-muted);
}

@media (max-width: 900px) {
  .labs-box {
    grid-template-columns: 1fr;
  }
  .labs-content {
    padding: 32px 24px;
  }
  .labs-visual {
    padding: 30px;
    border-left: none;
    border-top: 1px solid var(--color-border);
  }
}

@media (max-width: 768px) {
  .about-header {
    padding: 90px 0 32px;
  }

  .mission-card {
    padding: 24px 18px;
  }

  .mission-card h2 {
    font-size: 1.25rem;
  }

  .labs-content h2 {
    font-size: clamp(1.3rem, 3vw, 1.8rem);
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .stat-number {
    font-size: clamp(1.5rem, 4vw, 2.2rem);
  }

  .value-card {
    padding: 20px 16px;
  }
}

@media (max-width: 480px) {
  .about-header {
    padding: 80px 0 24px;
  }

  .mission-grid {
    grid-template-columns: 1fr;
  }

  .mission-card {
    padding: 20px 16px;
  }

  .labs-content {
    padding: 24px 16px;
  }

  .labs-visual {
    padding: 20px;
  }
}
</style>
