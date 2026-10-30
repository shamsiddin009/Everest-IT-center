<script setup>
import { ref, watch } from 'vue'
import CustomSelect from './CustomSelect.vue'

const props = defineProps({
  isOpen: Boolean,
  prefilledCourse: String
})

const emit = defineEmits(['close'])

const courseOptions = [
  { value: 'Frontend Web Dasturlash', label: 'Frontend Web Dasturlash (Vue / JS)', icon: '💻', badge: 'Frontend' },
  { value: 'Python Backend & AI asoslari', label: 'Python Backend & Telegram Bot', icon: '🐍', badge: 'Backend' },
  { value: 'Kompyuter Savodxonligi (IT Start)', label: 'Kompyuter Savodxonligi (Office)', icon: '🖥️', badge: 'IT Start' },
  { value: 'General English (Barcha darajalar)', label: 'General English (Boshlang‘ichdan)', icon: '🇬🇧', badge: 'English' },
  { value: 'IELTS Intensive 7.5+', label: 'IELTS Intensive 7.5+', icon: '🎯', badge: 'Band 7.5+' },
  { value: 'Chuqurlashtirilgan Maktab Matematikasi', label: 'Chuqurlashtirilgan Matematika', icon: '📐', badge: 'Matematika' }
]

const timeOptions = [
  { value: 'Ertalabki (09:00 - 11:00)', label: 'Ertalabki (09:00 - 11:00)', icon: '🌅' },
  { value: 'Tushki (14:00 - 16:00)', label: 'Tushki (14:00 - 16:00)', icon: '☀️' },
  { value: 'Kechki (18:30 - 20:30)', label: 'Kechki (18:30 - 20:30)', icon: '🌙' }
]

const form = ref({
  name: '',
  phone: '',
  course: 'Frontend Web Dasturlash',
  timePreference: 'Ertalabki (09:00 - 11:00)'
})

const isSubmitted = ref(false)

watch(() => props.prefilledCourse, (newVal) => {
  if (newVal) form.value.course = newVal
})

const handleSubmit = () => {
  isSubmitted.value = true
  setTimeout(() => {
    isSubmitted.value = false
    emit('close')
    form.value.name = ''
    form.value.phone = ''
  }, 3000)
}
</script>

<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-card glass-panel">
      <!-- Close button -->
      <button class="close-btn" @click="$emit('close')" aria-label="Close modal">
        &times;
      </button>

      <div v-if="!isSubmitted" class="modal-content">
        <div class="modal-header">
          <span class="badge badge-primary">Bepul Konsultatsiya</span>
          <h3 class="modal-title">Birinchi Sinov Darsiga Yoziling</h3>
          <p class="modal-desc">
            Ma'lumotlaringizni qoldiring, administratorimiz 15 daqiqa ichida siz bilan bog'lanadi.
          </p>
        </div>

        <form class="modal-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="m-name">Ism va Familiyangiz</label>
            <input
              id="m-name"
              v-model="form.name"
              type="text"
              placeholder="e.g. Jasur Aliyev"
              required
            />
          </div>

          <div class="form-group">
            <label for="m-phone">Telefon raqamingiz</label>
            <input
              id="m-phone"
              v-model="form.phone"
              type="tel"
              placeholder="+998 90 123 45 67"
              required
            />
          </div>

          <div class="form-group">
            <label for="m-course">Qiziqqan yo'nalishingiz</label>
            <CustomSelect
              id="m-course"
              v-model="form.course"
              :options="courseOptions"
              placeholder="Yo‘nalishni tanlang"
            />
          </div>

          <div class="form-group">
            <label for="m-time">Qulay dars vaqti</label>
            <CustomSelect
              id="m-time"
              v-model="form.timePreference"
              :options="timeOptions"
              placeholder="Vaqtni tanlang"
            />
          </div>

          <button type="submit" class="btn btn-primary btn-submit">
            <span>Ro'yxatdan o'tish</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </form>
      </div>

      <!-- Success State -->
      <div v-else class="success-box">
        <div class="success-icon">✓</div>
        <h3>Arizangiz qabul qilindi!</h3>
        <p>Tez orada menejerimiz sizga qo'ng'iroq qilib, dars vaqtini tasdiqlaydi.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(8, 10, 16, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  animation: fadeIn 0.3s ease;
}

.modal-card {
  width: 100%;
  max-width: 520px;
  padding: 3rem 2.5rem;
  position: relative;
  border-radius: var(--radius-xl);
  background: #0E261E;
  border: 1px solid rgba(16, 185, 129, 0.4);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(16, 185, 129, 0.25);
  animation: scaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: var(--text-muted);
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

.modal-title {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  margin-top: 0.8rem;
  margin-bottom: 0.5rem;
}

.modal-desc {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.modal-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.form-group label {
  font-size: 0.82rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
}

.form-group input, .form-group select {
  width: 100%;
  padding: 0.85rem 1.1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-md);
  color: #fff;
  font-family: var(--font-sans);
  font-size: 0.92rem;
  outline: none;
  transition: all 0.25s ease;
}

.form-group select {
  cursor: pointer;
}

.form-group select option {
  background: #111522;
  color: #fff;
}

.form-group input:focus, .form-group select:focus {
  border-color: var(--primary);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
}

.btn-submit {
  width: 100%;
  padding: 1.05rem;
  margin-top: 0.8rem;
  font-size: 1rem;
}

/* Success Box */
.success-box {
  text-align: center;
  padding: 2rem 0;
}

.success-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  margin: 0 auto 1.5rem;
  box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4);
}

.success-box h3 {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 0.6rem;
}

.success-box p {
  color: var(--text-muted);
  font-size: 0.95rem;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleUp {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>
