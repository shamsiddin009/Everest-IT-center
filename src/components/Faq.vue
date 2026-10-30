<script setup>
import { ref } from 'vue'

const activeFaq = ref(0)

const faqs = [
  {
    q: 'Darslar qaysi vaqtlarda va qanday tartibda o\'tkaziladi?',
    a: 'Darslar haftasiga 3 kun, 1.5 - 2 soatdan tashkil etiladi. O\'quvchilar uchun qulay bo\'lishi maqsadida ertalabki (09:00 - 11:00), tushki (14:00 - 16:00) va kechki (18:30 - 20:30) guruhlarimiz mavjud.'
  },
  {
    q: 'Kompyuterim bo\'lmasa ham IT yoki Kompyuter savodxonligini o\'rganishim mumkinmi?',
    a: 'Albatta! O\'quv markazimiz har bir o\'quvchi uchun eng so\'nggi modeldagi zamonaviy kompyuterlar bilan jihozlangan. Darsdan tashqari paytda ham markazimizdagi Coworking hududida amaliyot qilishingiz mumkin.'
  },
  {
    q: 'Ingliz tili kursiga yozilishdan oldin darajam qanday aniqlanadi?',
    a: 'Markazimizga kelganingizda yoki online tarzda bepul Placement Test (darajani aniqlash testi) va o\'qituvchi bilan qisqa suhbat orqali darajangiz (Beginner, Elementary, Pre-Intermediate va h.k.) aniqlanib, mos guruhga yo\'naltiriladi.'
  },
  {
    q: 'Birinchi sinov darsi bepulmi?',
    a: 'Ha, birinchi sinov darsi mutlaqo bepul! Siz dars muhiti, mentorning o\'qitish metodikasi va markaz sharoitlari bilan bevosita tanishib, so\'ngra shartnoma tuzishingiz mumkin.'
  },
  {
    q: 'Kursni tugatgach qanday sertifikat beriladi?',
    a: 'Kurs oxirida bitiruv imtihoni va yakuniy loyiha topshiriladi. Muvaffaqiyatli topshirgan talabalarga QR-kodli xalqaro namunadagi rasmiy EduPro sertifikati va portfolio taqdim etiladi.'
  }
]

const toggleFaq = (idx) => {
  activeFaq.value = activeFaq.value === idx ? null : idx
}
</script>

<template>
  <section class="faq-section" id="faq">
    <div class="container">
      <div class="section-header">
        <span class="badge badge-primary">Ko'p Beriladigan Savollar</span>
        <h2 class="section-title">Savollaringiz bormi?</h2>
        <p class="section-desc">
          Bizga o'quvchilar va ota-onalar tomonidan eng ko'p beriladigan muhim savollarga javoblar.
        </p>
      </div>

      <div class="faq-container">
        <div
          v-for="(item, idx) in faqs"
          :key="item.q"
          class="faq-card glass-panel"
          :class="{ 'faq-card--open': activeFaq === idx }"
          @click="toggleFaq(idx)"
        >
          <div class="faq-question">
            <span class="q-title">{{ item.q }}</span>
            <div class="q-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </div>
          </div>
          <div v-show="activeFaq === idx" class="faq-answer">
            <p>{{ item.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
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

.faq-container {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.faq-card {
  padding: 1.6rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-card:hover {
  border-color: rgba(99, 102, 241, 0.4);
}

.faq-card--open {
  border-color: var(--primary);
  background: rgba(22, 30, 48, 0.85);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.15);
}

.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.q-title {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
}

.q-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-light);
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.q-icon svg {
  width: 16px;
  height: 16px;
}

.faq-card--open .q-icon {
  transform: rotate(180deg);
  background: var(--primary);
  color: #fff;
}

.faq-answer {
  padding-top: 1.2rem;
  margin-top: 1.2rem;
  border-top: 1px solid var(--border-glass);
}

.faq-answer p {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.7;
}
</style>
