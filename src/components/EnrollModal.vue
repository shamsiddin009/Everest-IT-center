<script setup>
import { ref, watch } from 'vue';
import CustomSelect from './CustomSelect.vue';

const props = defineProps({
  isOpen: Boolean,
  prefilledCourse: String
});

const emit = defineEmits(['close']);

const courseOptions = [
  { value: 'Frontend Web Dasturlash', label: 'Frontend Web Dasturlash', icon: '💻', badge: 'Vue / JS' },
  { value: 'Python Backend & Telegram Bot', label: 'Python Backend & Telegram Bot', icon: '🐍', badge: 'FastAPI' },
  { value: 'General English', label: 'General English', icon: '🇬🇧', badge: 'A1 - B2' },
  { value: 'IELTS Intensive 7.5+', label: 'IELTS Intensive 7.5+', icon: '🎯', badge: 'Band 7.5+' },
  { value: 'Chuqurlashtirilgan Matematika', label: 'Chuqurlashtirilgan Matematika', icon: '📐', badge: 'Olimpiada' },
  { value: 'Kompyuter Savodxonligi', label: 'Kompyuter Savodxonligi', icon: '🖥️', badge: 'IT Start' }
];

const timeOptions = [
  { value: 'Ertalabki (09:00 - 11:00)', label: 'Ertalab (09:00 - 11:00)', icon: '🌅' },
  { value: 'Tushki (14:00 - 16:00)', label: 'Tushki (14:00 - 16:00)', icon: '☀️' },
  { value: 'Kechki (18:30 - 20:30)', label: 'Kechki (18:30 - 20:30)', icon: '🌙' }
];

const form = ref({
  name: '',
  phone: '',
  course: 'Frontend Web Dasturlash',
  preferredTime: 'Ertalabki (09:00 - 11:00)',
  consent: false
});

const isSubmitted = ref(false);
const errorMsg = ref('');

watch(() => props.prefilledCourse, (newVal) => {
  if (newVal) form.value.course = newVal;
});

const handleSubmit = () => {
  errorMsg.value = '';
  if (!form.value.name.trim()) {
    errorMsg.value = 'Iltimos, ismingizni kiriting.';
    return;
  }
  if (!form.value.phone.trim() || form.value.phone.length < 9) {
    errorMsg.value = 'Iltimos, to‘g‘ri telefon raqam kiriting.';
    return;
  }
  if (!form.value.consent) {
    errorMsg.value = 'Iltimos, ma’lumotlarni qayta ishlashga rozilik bildiring.';
    return;
  }

  // Demonstration mode confirmation
  isSubmitted.value = true;
  setTimeout(() => {
    isSubmitted.value = false;
    emit('close');
    form.value.name = '';
    form.value.phone = '';
    form.value.consent = false;
  }, 3500);
};
</script>

<template>
  <div v-if="isOpen" class="enroll-overlay" @click.self="$emit('close')">
    <div class="enroll-modal glass-surface" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <button class="close-btn" @click="$emit('close')" aria-label="Modalni yopish">
        &times;
      </button>

      <div v-if="!isSubmitted" class="modal-form-wrap">
        <div class="modal-header">
          <span class="section-badge">Bepul Sinov Darsi</span>
          <h3 id="modalTitle" class="modal-heading">Everest IT Center’da Boshlang</h3>
          <p class="modal-sub">
            Ma’lumotlaringizni qoldiring. Administratorlarimiz siz bilan tez orada bog‘lanib, qulay dars vaqtini tasdiqlaydi.
          </p>
        </div>

        <div v-if="errorMsg" class="error-banner" role="alert">
          {{ errorMsg }}
        </div>

        <form class="enroll-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="studentName">Ism va Familiyangiz *</label>
            <input
              id="studentName"
              v-model="form.name"
              type="text"
              placeholder="Masalan: Sardor Aliyev"
              required
            />
          </div>

          <div class="form-group">
            <label for="studentPhone">Telefon raqamingiz *</label>
            <input
              id="studentPhone"
              v-model="form.phone"
              type="tel"
              placeholder="+998 (90) 123-45-67"
              required
            />
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="courseSelect">Tanlangan Kurs</label>
              <CustomSelect
                id="courseSelect"
                v-model="form.course"
                :options="courseOptions"
                placeholder="Kursni tanlang"
              />
            </div>

            <div class="form-group">
              <label for="timeSelect">Qulay Vaqt</label>
              <CustomSelect
                id="timeSelect"
                v-model="form.preferredTime"
                :options="timeOptions"
                placeholder="Vaqtni tanlang"
              />
            </div>
          </div>

          <div class="consent-group">
            <input id="consentCheck" v-model="form.consent" type="checkbox" required />
            <label for="consentCheck">
              Shaxsiy ma’lumotlarni bog‘lanish maqsadida qayta ishlashga roziman.
            </label>
          </div>

          <button type="submit" class="btn btn-cyan btn-full">
            <span>Arizani Yuborish</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </form>

        <p class="demo-notice">
          * Demo rejimi: Ma’lumotlar serverga jo‘natilmasdan ko‘rgazmali qabul qilinadi.
        </p>
      </div>

      <!-- Confirmation state -->
      <div v-else class="modal-success-wrap">
        <div class="success-icon-badge">✓</div>
        <h3 class="success-title">Arizangiz Qabul Qilindi!</h3>
        <p class="success-desc">
          Everest IT Center o‘quv bo‘limi arizangizni ko‘rib chiqdi. Tez orada siz bilan ko‘rsatilgan telefon orqali aloqaga chiqamiz.
        </p>
        <span class="auto-close-tag">Ushbu darcha 3 soniyada avtomatik yopiladi...</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.enroll-overlay {
  position: fixed;
  inset: 0;
  background: rgba(5, 10, 18, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.enroll-modal {
  width: 100%;
  max-width: 540px;
  padding: 3rem 2.5rem;
  border-radius: var(--radius-xl);
  position: relative;
  background: var(--color-surface-elevated);
  border: 1px solid rgba(16, 185, 129, 0.4);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(16, 185, 129, 0.2);
}

.close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: var(--color-text-muted);
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  transition: color 0.2s ease;
}

.close-btn:hover {
  color: #fff;
}

.modal-header {
  text-align: center;
  margin-bottom: 2rem;
}

.modal-heading {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  color: #fff;
  font-weight: 800;
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
}

.modal-sub {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.error-banner {
  background: rgba(244, 63, 94, 0.15);
  border: 1px solid var(--color-rose);
  color: #FFA4B2;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  margin-bottom: 1.2rem;
}

.enroll-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.85rem 1.1rem;
  background: rgba(8, 15, 26, 0.6);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-md);
  color: #fff;
  font-family: var(--font-sans);
  font-size: 0.92rem;
  outline: none;
  transition: all 0.25s ease;
}

.form-group select option {
  background-color: #0D1730;
  color: #fff;
  padding: 12px;
}

.modal-select {
  cursor: pointer;
  background-color: rgba(13, 23, 48, 0.85) !important;
}

.form-group input:focus,
.form-group select:focus {
  border-color: var(--color-cyan);
  box-shadow: 0 0 0 3px rgba(0, 201, 232, 0.2);
}

.consent-group {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  margin-top: 0.2rem;
}

.consent-group label {
  font-size: 0.78rem;
  color: var(--color-text-secondary);
  line-height: 1.4;
  cursor: pointer;
}

.btn-full {
  width: 100%;
  margin-top: 0.6rem;
  padding: 1rem;
}

.demo-notice {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.modal-success-wrap {
  text-align: center;
  padding: 2rem 0;
}

.success-icon-badge {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-emerald) 0%, #059669 100%);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 1.4rem;
  box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4);
}

.success-title {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: #fff;
  font-weight: 800;
  margin-bottom: 0.6rem;
}

.success-desc {
  font-size: 0.92rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1.4rem;
}

.auto-close-tag {
  font-size: 0.78rem;
  color: var(--color-cyan);
}

@media (max-width: 600px) {
  .form-row {
    grid-template-columns: 1fr;
  }
  .enroll-modal {
    padding: 2.2rem 1.6rem;
  }
}
</style>
