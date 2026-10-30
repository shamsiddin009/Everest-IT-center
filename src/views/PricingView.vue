<script setup>
import Sticker from '../components/Sticker.vue';
const emit = defineEmits(['openEnroll']);

const pricingPlans = [
  {
    name: 'Boshlang‘ich IT & Savodxonlik',
    badge: 'Ommabop',
    badgeClass: 'standard',
    price: '250 000',
    period: 'so‘m / oy',
    desc: 'Kompyuter bilan ishlash asoslari, Office dasturlari va internet xavfsizligini mukammal o‘rganish uchun.',
    features: [
      'Haftada 3 kun, 1.5 soatdan darslar',
      'Shaxsiy kompyuter bilan ta’minlanish',
      'MS Office to‘liq amaliyoti',
      'Dars materiallari va video yozuvlar',
      'Kurs yakunida rasmiy sertifikat'
    ],
    highlight: false
  },
  {
    name: 'Professional Dasturlash (IT Pro)',
    badge: 'Eng ko‘p tanlangan',
    badgeClass: 'popular',
    price: '350 000',
    period: 'so‘m / oy',
    desc: 'Frontend (Vue 3, JS) yoki Python Backend bo‘yicha to‘liq kasb egallash va portfolio to‘plash paketi.',
    features: [
      'Haftada 3 kun, 2 soatdan jonli amaliy darslar',
      'Shaxsiy mentor bilan 1-ga-1 tahlillar',
      '3+ ta to‘liq amaliy portfolio loyihalari',
      'Coworking zonadan bepul foydalanish',
      'Rezyume va texnik intervyu simulyatsiyasi',
      'Xalqaro standartdagi bitiruv sertifikati'
    ],
    highlight: true
  },
  {
    name: 'IELTS Intensive & Akademik',
    badge: 'Natijaga yo‘naltirilgan',
    badgeClass: 'hot',
    price: '300 000',
    period: 'so‘m / oy',
    desc: 'Chet tili darajasini oshirish, IELTS 7.5+ olish va xalqaro universitetlarga tayyorgarlik ko‘rish.',
    features: [
      'Haftada 3 kun + Har shanba Mock Exam',
      'Cambridge va Oxford o‘quv qo‘llanmalari',
      'Har haftalik Speaking Club (Native Speaker)',
      'Writing Task 1 & 2 individual tekshiruvi',
      'Imtihon oldi psixologik tayyorgarlik'
    ],
    highlight: false
  }
];

const faqs = [
  {
    q: 'Birinchi sinov darsi uchun to‘lov olinadimi?',
    a: 'Yo‘q! Har qanday yo‘nalish bo‘yicha birinchi dars to‘liq bepul. Sizga dars yoqsa, keyin shartnoma rasmiylashtiriladi.'
  },
  {
    q: 'To‘lovlarni bo‘lib to‘lash yoki oylik to‘lash mumkinmi?',
    a: 'Ha, kurs to‘lovlari oyma-oy amalga oshiriladi. Hech qanday uzoq muddatli majburiy to‘lov majburiyati yuklanmaydi.'
  },
  {
    q: 'Oila a’zolari uchun chegirmalar bormi?',
    a: 'Bir oiladan ikki yoki undan ortiq farzand tahsil olsa, har bir o‘quvchiga 10% chegirma taqdim etiladi.'
  }
];
</script>

<template>
  <div class="pricing-page">
    <!-- Header -->
    <header class="pricing-header">
      <div class="container text-center">
        <span class="page-badge">Shaffof Tariflar</span>
        <h1 class="page-title">
          Kelajak sari sarmoya: <span class="text-gradient">qulay va hamyonbop</span> ta’lim
        </h1>
        <p class="page-subtitle">
          Barcha kurslarimiz amaliy natijaga qaratilgan. Yashirin to‘lovlarsiz, birinchi bepul sinov darsi bilan boshlang.
        </p>
      </div>
    </header>

    <!-- Pricing Cards Grid -->
    <section class="plans-section">
      <div class="container">
        <div class="plans-grid">
          <div
            v-for="(plan, idx) in pricingPlans"
            :key="idx"
            class="plan-card glass-surface"
            :class="{ 'plan-highlight': plan.highlight }"
          >
            <div class="plan-header">
              <span class="plan-badge" :class="plan.badgeClass">{{ plan.badge }}</span>
              <h2 class="plan-name">{{ plan.name }}</h2>
              <p class="plan-desc">{{ plan.desc }}</p>
            </div>

            <div class="plan-price-wrap">
              <span class="price-currency">UZS</span>
              <span class="price-val">{{ plan.price }}</span>
              <span class="price-period">{{ plan.period }}</span>
            </div>

            <span class="demo-tag">* Ko‘rsatilgan narxlar demo namuna shaklida</span>

            <ul class="plan-features">
              <li v-for="(feat, fIdx) in plan.features" :key="fIdx">
                <span class="feat-check">✓</span>
                <span>{{ feat }}</span>
              </li>
            </ul>

            <button
              class="btn btn-block"
              :class="plan.highlight ? 'btn-primary' : 'btn-secondary'"
              @click="emit('openEnroll', plan.name)"
            >
              Tanlash & Yozilish
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing FAQs -->
    <section class="pricing-faq-section">
      <div class="container">
        <div class="faq-card glass-surface">
          <h2 class="faq-title text-center">To‘lov bo‘yicha ko‘p beriladigan savollar</h2>
          <div class="faq-list">
            <div v-for="(faq, i) in faqs" :key="i" class="faq-item">
              <h3 class="faq-q">
                <Sticker name="question" size="xs" variant="badge" />
                <span>{{ faq.q }}</span>
              </h3>
              <p class="faq-a">{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.pricing-page {
  padding-bottom: 80px;
}

.pricing-header {
  padding: 120px 0 50px;
  background: radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 60%);
}

.page-badge {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(16, 185, 129, 0.12);
  color: var(--color-green-neon);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: var(--radius-full);
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
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

/* Plans Grid */
.plans-section {
  padding: 30px 0 60px;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  align-items: stretch;
}

.plan-card {
  padding: 36px 28px;
  border-radius: var(--radius-xl);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, border-color 0.3s ease;
  position: relative;
}

.plan-card:hover {
  transform: translateY(-6px);
}

.plan-highlight {
  border-color: rgba(0, 245, 155, 0.45);
  box-shadow: 0 16px 45px rgba(0, 245, 155, 0.15), 0 0 25px rgba(0, 245, 155, 0.1);
  background: linear-gradient(180deg, rgba(14, 38, 30, 0.9) 0%, rgba(8, 20, 14, 0.98) 100%);
}

.plan-header {
  margin-bottom: 24px;
}

.plan-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: 0.74rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.plan-badge.popular {
  background: rgba(0, 245, 155, 0.18);
  color: #00F59B;
  border: 1px solid rgba(0, 245, 155, 0.4);
}

.plan-badge.hot {
  background: rgba(245, 158, 11, 0.18);
  color: #FBBF24;
  border: 1px solid rgba(245, 158, 11, 0.4);
}

.plan-badge.standard {
  background: rgba(52, 211, 153, 0.18);
  color: #A7F3D0;
  border: 1px solid rgba(52, 211, 153, 0.35);
  border: 1px solid rgba(101, 91, 255, 0.3);
}

.plan-name {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.plan-desc {
  color: var(--color-text-muted);
  font-size: 0.88rem;
  line-height: 1.5;
}

.plan-price-wrap {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 4px;
}

.price-currency {
  font-size: 0.9rem;
  color: var(--color-text-dim);
}

.price-val {
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--color-accent);
}

.price-period {
  font-size: 0.85rem;
  color: var(--color-text-dim);
}

.demo-tag {
  display: block;
  font-size: 0.72rem;
  color: var(--color-text-dim);
  font-style: italic;
  margin-bottom: 24px;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 0 0 32px;
  flex: 1;
}

.plan-features li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin-bottom: 12px;
  line-height: 1.45;
}

.feat-check {
  color: #10B981;
  font-weight: bold;
}

.btn-block {
  width: 100%;
}

/* FAQ */
.pricing-faq-section {
  margin-top: 40px;
}

.faq-card {
  padding: 40px;
  border-radius: var(--radius-xl);
  max-width: 800px;
  margin: 0 auto;
}

.faq-title {
  font-size: 1.5rem;
  margin-bottom: 28px;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.faq-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding-bottom: 16px;
}

.faq-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.faq-q {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.faq-a {
  color: var(--color-text-muted);
  font-size: 0.92rem;
  line-height: 1.6;
}

/* ═══ RESPONSIVE MOBILE BREAKPOINTS ═══ */
@media (max-width: 768px) {
  .pricing-header {
    padding: 90px 0 32px;
  }

  .plans-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .plan-card {
    padding: 24px 20px;
  }

  .price-val {
    font-size: 1.8rem;
  }

  .faq-card {
    padding: 24px 18px;
  }

  .faq-title {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }

  .faq-q {
    font-size: 0.95rem;
  }

  .page-subtitle {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .pricing-header {
    padding: 80px 0 24px;
  }

  .plan-card {
    padding: 20px 16px;
  }

  .plan-name {
    font-size: 1.15rem;
  }

  .faq-card {
    padding: 20px 14px;
  }
}</style>
