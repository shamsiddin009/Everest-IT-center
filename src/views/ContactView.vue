<script setup>
import { ref } from 'vue';
import CustomSelect from '../components/CustomSelect.vue';
import Sticker from '../components/Sticker.vue';

const topicOptions = [
  { value: 'Frontend Web Dasturlash', label: 'Frontend Web Dasturlash', icon: '💻', badge: 'Vue / JS' },
  { value: 'Python Backend', label: 'Python Backend & Telegram Bot', icon: '🐍', badge: 'FastAPI' },
  { value: 'General English', label: 'General English', icon: '🇬🇧', badge: 'A1 - B2' },
  { value: 'IELTS Intensive', label: 'IELTS Intensive 7.5+', icon: '🎯', badge: 'Band 7.5+' },
  { value: 'Akademik Matematika', label: 'Chuqurlashtirilgan Matematika', icon: '📐', badge: 'Olimpiada' },
  { value: 'Kompyuter Savodxonligi', label: 'Kompyuter Savodxonligi', icon: '🖥️', badge: 'IT Start' },
  { value: 'Umumiy ma’lumot olish', label: 'Umumiy ma’lumot olish', icon: 'ℹ️' }
];

const form = ref({
  name: '',
  phone: '',
  topic: 'Umumiy ma’lumot olish',
  message: ''
});

const isSent = ref(false);
const errorMsg = ref('');

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

  isSent.value = true;
  setTimeout(() => {
    isSent.value = false;
    form.value.name = '';
    form.value.phone = '';
    form.value.message = '';
  }, 4000);
};
</script>

<template>
  <div class="contact-page">
    <!-- Header -->
    <header class="contact-header">
      <div class="container text-center">
        <span class="page-badge">Aloqa Markazi</span>
        <h1 class="page-title">
          Biz bilan <span class="text-gradient">bog‘laning</span> va tashrif buyuring
        </h1>
        <p class="page-subtitle">
          Savollaringiz bormi yoki qaysi kurs to‘g‘ri kelishini bilmoqchimisiz? Biz sizga yo‘nalish tanlashda yordam berishga doim tayyormiz.
        </p>
      </div>
    </header>

    <!-- Main Grid: Info + Form -->
    <section class="contact-grid-section">
      <div class="container">
        <div class="contact-layout-grid">
          <!-- Info Column -->
          <div class="contact-info-col" data-aos="fade-right" data-aos-duration="800">
            <div class="info-card glass-surface">
              <h2 class="col-title">Bog‘lanish ma’lumotlari</h2>
              <p class="col-desc">
                Everest IT Center sizni qiziqtirgan barcha savollarga xursandchilik bilan javob beradi.
              </p>

              <div class="info-items">
                <div class="info-item">
                  <Sticker name="pin" size="lg" class="info-sticker" />
                  <div class="info-text">
                    <strong>Manzil</strong>
                    <p>Toshkent shahri, Yunusobod tumani, Amir Temur ko‘chasi, 107-B (namuna joylashuv)</p>
                  </div>
                </div>

                <div class="info-item">
                  <Sticker name="phone" size="lg" class="info-sticker" />
                  <div class="info-text">
                    <strong>Telefon</strong>
                    <p><a href="tel:+998712000000" class="tel-link">+998 (71) 200-00-00 (namuna)</a></p>
                  </div>
                </div>

                <div class="info-item">
                  <Sticker name="chat" size="lg" class="info-sticker" />
                  <div class="info-text">
                    <strong>Telegram & Ijtimoiy tarmoqlar</strong>
                    <p><a href="https://t.me/EverestAcademy_bot" target="_blank" rel="noopener noreferrer" class="tel-link">@EverestAcademy_bot</a></p>
                  </div>
                </div>

                <div class="info-item">
                  <Sticker name="clock" size="lg" class="info-sticker" />
                  <div class="info-text">
                    <strong>Ish vaqti</strong>
                    <p>Dushanba – Shanba: 08:30 dan 20:30 gacha</p>
                    <p class="sub-schedule">Yakshanba: Ochiq eshiklar kuni & Mock testlar</p>
                  </div>
                </div>
              </div>

              <!-- Landmark Notice -->
              <div class="landmark-notice">
                <Sticker name="metro" size="xs" variant="flat" />
                <span>Mo‘ljal: Bodomzor metro bekati yonida</span>
              </div>
            </div>
          </div>

          <!-- Form Column -->
          <div class="contact-form-col" data-aos="fade-left" data-aos-duration="800">
            <div class="form-card glass-surface">
              <h2 class="col-title">Xabar yoki Savol Qoldiring</h2>
              <p class="col-desc">
                Quyidagi formani to‘ldiring va mutaxassisimiz 15 daqiqa ichida siz bilan bog‘lanadi.
              </p>

              <div v-if="isSent" class="success-alert">
                <Sticker name="party" size="xl" class="alert-sticker" />
                <h3>Xabaringiz qabul qilindi!</h3>
                <p>Tez orada ta’lim koordinatori siz bilan bog‘lanadi. E’tiboringiz uchun tashakkur!</p>
              </div>

              <form v-else @submit.prevent="handleSubmit" class="contact-form">
                <div v-if="errorMsg" class="form-error">
                  {{ errorMsg }}
                </div>

                <div class="form-group">
                  <label for="contactName">Ismingiz va Familiyangiz *</label>
                  <input
                    id="contactName"
                    v-model="form.name"
                    type="text"
                    placeholder="Masalan: Azizbek Karimov"
                    class="form-input"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="contactPhone">Telefon raqamingiz *</label>
                  <input
                    id="contactPhone"
                    v-model="form.phone"
                    type="tel"
                    placeholder="+998 90 123 45 67"
                    class="form-input"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="contactTopic">Qiziqtirgan yo‘nalish</label>
                  <CustomSelect
                    id="contactTopic"
                    v-model="form.topic"
                    :options="topicOptions"
                    placeholder="Yo‘nalishni tanlang"
                  />
                </div>

                <div class="form-group">
                  <label for="contactMsg">Qo‘shimcha savol yoki istagingiz</label>
                  <textarea
                    id="contactMsg"
                    v-model="form.message"
                    rows="4"
                    placeholder="Savolingizni yozing..."
                    class="form-input form-textarea"
                  ></textarea>
                </div>

                <button type="submit" class="btn btn-primary btn-block">
                  Xabarni Yuborish
                </button>

                <p class="form-note">
                  * Ma’lumotlaringiz maxfiy saqlanadi va faqat bog‘lanish uchun ishlatiladi.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-page {
  padding-bottom: 80px;
}

.contact-header {
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

/* Grid */
.contact-grid-section {
  padding: 20px 0 60px;
}

.contact-layout-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 36px;
  align-items: flex-start;
}

.info-card, .form-card {
  padding: 36px 32px;
  border-radius: var(--radius-xl);
}

.col-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.col-desc {
  color: var(--color-text-muted);
  font-size: 0.92rem;
  line-height: 1.5;
  margin-bottom: 28px;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-bottom: 30px;
}

.info-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.info-icon {
  font-size: 1.5rem;
  padding: 10px;
  background: rgba(0, 201, 232, 0.1);
  border-radius: var(--radius-md);
  border: 1px solid rgba(0, 201, 232, 0.2);
}

.info-text strong {
  display: block;
  font-size: 0.95rem;
  margin-bottom: 4px;
}

.info-text p {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.45;
  margin: 0;
}

.tel-link {
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 600;
}

.sub-schedule {
  color: var(--color-text-dim) !important;
  font-size: 0.82rem !important;
  margin-top: 4px !important;
}

.landmark-notice {
  padding: 14px 18px;
  background: rgba(101, 91, 255, 0.12);
  border: 1px solid rgba(101, 91, 255, 0.25);
  border-radius: var(--radius-md);
  font-size: 0.88rem;
  color: #a5b4fc;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

/* Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text-muted);
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  background: rgba(8, 15, 26, 0.7);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text);
  font-size: 0.92rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-input:focus {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(0, 201, 232, 0.15);
}

.form-textarea {
  resize: vertical;
}

.btn-block {
  width: 100%;
  margin-top: 8px;
}

.form-note {
  font-size: 0.75rem;
  color: var(--color-text-dim);
  text-align: center;
  margin-top: 10px;
}

.form-error {
  padding: 10px 14px;
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #f87171;
  border-radius: var(--radius-md);
  font-size: 0.85rem;
}

.success-alert {
  text-align: center;
  padding: 40px 20px;
}

.alert-icon {
  font-size: 3rem;
  margin-bottom: 12px;
  display: inline-block;
}

.success-alert h3 {
  font-size: 1.4rem;
  margin-bottom: 8px;
}

.success-alert p {
  color: var(--color-text-muted);
  font-size: 0.95rem;
}

@media (max-width: 860px) {
  .contact-layout-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .contact-header {
    padding: 90px 0 32px;
  }

  .info-card, .form-card {
    padding: 24px 18px;
  }

  .col-title {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .contact-header {
    padding: 80px 0 24px;
  }

  .info-card, .form-card {
    padding: 20px 14px;
  }

  .info-item {
    gap: 12px;
  }

  .landmark-notice {
    font-size: 0.82rem;
    padding: 12px 14px;
  }
}
</style>
