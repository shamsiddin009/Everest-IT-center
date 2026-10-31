<script setup>
import Sticker from './Sticker.vue';
</script>

<template>
  <footer class="everest-footer">
    <div class="container">
      <!-- Telegram Bot Enrollment Hero Banner in Footer -->
      <div class="footer-telegram-cta" data-aos="zoom-in-up" data-aos-duration="750">
        <div class="tg-cta-glow"></div>
        <div class="tg-cta-left">
          <div class="tg-badge">
            <span class="tg-pulse-dot"></span>
            <span>24/7 Avtomatlashtirilgan Qabul Tizimi</span>
          </div>
          <h3 class="tg-cta-title">
            Darslarga <span class="text-white-glow">Telegram Bot</span> orqali 1 daqiqada yoziling!
          </h3>
          <p class="tg-cta-desc">
            Navbatsiz va kutmasdan o‘zingizga mos kurs, qulay vaqt va guruhni tanlang. Sinov darsi uchun ro‘yxatdan o‘ting va birinchi darsga bepul taklifnomani darhol botdan oling.
          </p>
          <div class="tg-features">
            <span class="tg-feat"><Sticker name="lightning" size="xs" /> Darhol tasdiqlash</span>
            <span class="tg-feat"><Sticker name="gift" size="xs" /> 1-dars 100% bepul</span>
            <span class="tg-feat"><Sticker name="docs" size="xs" /> Dars jadvali va narxlar</span>
          </div>
        </div>

        <div class="tg-cta-right">
          <a
            href="https://t.me/EverestAcademy_bot"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-telegram-pulse"
            aria-label="Telegram bot orqali darsga yozilish"
          >
            <div class="tg-icon-circle">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
            </div>
            <div class="btn-tg-text">
              <span class="btn-tg-label">Telegram Bot orqali Yozilish</span>
              <span class="btn-tg-handle">@EverestAcademy_bot</span>
            </div>
            <svg class="arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="20" height="20" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <span class="tg-note"><Sticker name="sparkles" size="xs" /> 1 soniyada Telegram ilovasida ochiladi</span>
        </div>
      </div>

      <!-- Main Footer Grid -->
      <div class="footer-top-grid">
        <!-- Brand Info -->
        <div class="footer-brand" data-aos="fade-up" data-aos-delay="50">
          <router-link to="/" class="footer-logo">
            <div class="logo-crest">
              <svg viewBox="0 0 32 32" fill="none" class="crest-svg" aria-hidden="true">
                <path d="M16 4L4 26H28L16 4Z" stroke="url(#footCrestGrad)" stroke-width="2" stroke-linejoin="round"/>
                <path d="M16 4V26" stroke="rgba(16, 185, 129, 0.4)" stroke-width="1.5"/>
                <circle cx="16" cy="4" r="2.5" fill="#34D399"/>
                <defs>
                  <linearGradient id="footCrestGrad" x1="4" y1="26" x2="28" y2="4" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#10B981"/>
                    <stop offset="1" stop-color="#34D399"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="brand-text">
              <span class="brand-name">EVEREST</span>
              <span class="brand-tag">IT CENTER</span>
            </div>
          </router-link>

          <p class="brand-motto">
            "Biz bilan kelajagingizni quring." — Axborot texnologiyalari, xalqaro tillar va aniq fanlar bo‘yicha sifatli va amaliy ta’lim maskani.
          </p>

          <div class="trust-badge-placeholder">
            <Sticker name="building" size="xs" variant="flat" />
            <span>Rasmiy ta’lim markazi</span>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="footer-col" data-aos="fade-up" data-aos-delay="150">
          <h4 class="col-heading">Sahifalar</h4>
          <ul class="col-links">
            <li><router-link to="/">Bosh sahifa</router-link></li>
            <li><router-link to="/courses">Barcha Kurslar</router-link></li>
            <li><router-link to="/about">Biz haqimizda</router-link></li>
            <li><router-link to="/teachers">O‘qituvchilar</router-link></li>
            <li><router-link to="/news">Yangiliklar va Voqealar</router-link></li>
            <li><router-link to="/contact">Bog‘lanish</router-link></li>
          </ul>
        </div>

        <!-- Course Directions -->
        <div class="footer-col" data-aos="fade-up" data-aos-delay="250">
          <h4 class="col-heading">Yo‘nalishlar</h4>
          <ul class="col-links">
            <li><router-link to="/courses/frontend-dasturlash">Frontend Web Dasturlash</router-link></li>
            <li><router-link to="/courses/python-backend">Python Backend & Telegram Bot</router-link></li>
            <li><router-link to="/courses/general-english">General English</router-link></li>
            <li><router-link to="/courses/ielts-intensive">IELTS Intensive 7.5+</router-link></li>
            <li><router-link to="/courses/akademik-matematika">Chuqurlashtirilgan Matematika</router-link></li>
            <li><router-link to="/courses/kompyuter-savodxonligi">Kompyuter Savodxonligi</router-link></li>
          </ul>
        </div>

        <!-- Verified Contact Details -->
        <div class="footer-col" data-aos="fade-up" data-aos-delay="350">
          <h4 class="col-heading">Aloqa Markazi</h4>
          <ul class="contact-info-list">
            <li>
              <Sticker name="pin" size="sm" class="contact-sticker" />
              <span>Toshkent shahar (namuna joylashuv manzili)</span>
            </li>
            <li>
              <Sticker name="phone" size="sm" class="contact-sticker" />
              <a href="tel:+998712000000">+998 (71) 200-00-00</a>
            </li>
            <li>
              <Sticker name="telegram" size="sm" class="contact-sticker" />
              <a href="https://t.me/EverestAcademy_bot" target="_blank" rel="noopener noreferrer" class="tg-inline-link">
                @EverestAcademy_bot (Telegram Bot)
              </a>
            </li>
            <li>
              <Sticker name="clock" size="sm" class="contact-sticker" />
              <span>Dushanba – Shanba: 09:00 – 20:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom-bar" data-aos="fade-up" data-aos-delay="100">
        <p>© 2026 Everest IT Center. Barcha huquqlar himoyalangan.</p>
        <p class="sub-disclaimer">Platformada ko‘rsatilgan statistika va profillar namunaviy tartibda namoyish etilgan.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.everest-footer {
  background: #050F0B;
  border-top: 1px solid var(--color-border-subtle);
  padding: 4.5rem 0 2rem;
  position: relative;
  z-index: 2;
}

/* Telegram Bot CTA Card in Footer */
.footer-telegram-cta {
  position: relative;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.16) 0%, rgba(10, 26, 20, 0.95) 100%);
  border: 1px solid rgba(16, 185, 129, 0.35);
  border-radius: var(--radius-xl);
  padding: 3rem 3.5rem;
  margin-bottom: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(16, 185, 129, 0.15);
  overflow: hidden;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.tg-cta-glow {
  position: absolute;
  top: -50%;
  right: -20%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%);
  pointer-events: none;
  filter: blur(40px);
}

.tg-cta-left {
  max-width: 620px;
  position: relative;
  z-index: 1;
}

.tg-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.35rem 0.95rem;
  border-radius: var(--radius-full);
  background: rgba(16, 185, 129, 0.18);
  border: 1px solid rgba(16, 185, 129, 0.4);
  color: #34D399;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.tg-pulse-dot {
  width: 8px;
  height: 8px;
  background-color: #00F59B;
  border-radius: 50%;
  box-shadow: 0 0 8px #00F59B;
  animation: pulse-ring 1.8s infinite;
}

.tg-cta-title {
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 2.8vw, 2.3rem);
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.25;
  margin-bottom: 0.8rem;
}

.text-white-glow {
  color: #FFFFFF;
  text-shadow: 0 0 20px rgba(16, 185, 129, 0.6);
  background: linear-gradient(135deg, #FFFFFF 0%, #6EE7B7 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tg-cta-desc {
  color: #D1FAE5;
  font-size: 0.95rem;
  line-height: 1.65;
  margin-bottom: 1.4rem;
  opacity: 0.9;
}

.tg-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tg-feat {
  font-size: 0.8rem;
  font-weight: 600;
  color: #FFFFFF;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.25);
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-sm);
}

.tg-cta-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.btn-telegram-pulse {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: #FFFFFF;
  padding: 1rem 1.8rem;
  border-radius: var(--radius-full);
  text-decoration: none;
  font-weight: 700;
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.5), 0 0 20px rgba(0, 245, 155, 0.3);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn-telegram-pulse:hover {
  transform: translateY(-3px) scale(1.02);
  background: linear-gradient(135deg, #34D399 0%, #10B981 100%);
  box-shadow: 0 16px 40px rgba(16, 185, 129, 0.7), 0 0 30px rgba(0, 245, 155, 0.5);
  color: #FFFFFF;
}

.tg-icon-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  flex-shrink: 0;
}

.btn-tg-text {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.btn-tg-label {
  font-size: 1rem;
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.2;
}

.btn-tg-handle {
  font-size: 0.75rem;
  color: #D1FAE5;
  font-weight: 500;
}

.arrow-svg {
  transition: transform 0.25s ease;
}

.btn-telegram-pulse:hover .arrow-svg {
  transform: translateX(4px);
}

.tg-note {
  font-size: 0.75rem;
  color: #A7B9AF;
}

.tg-inline-link {
  color: #34D399;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
}

.tg-inline-link:hover {
  color: #00F59B;
  text-decoration: underline;
}

/* Footer Grid */
.footer-top-grid {
  display: grid;
  grid-template-columns: 1.8fr 1fr 1.3fr 1.4fr;
  gap: 3.5rem;
  margin-bottom: 4rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  margin-bottom: 1.2rem;
}

.logo-crest {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.35);
}

.crest-svg {
  width: 22px;
  height: 22px;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #fff;
  line-height: 1;
}

.brand-tag {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--color-green-neon, #00F59B);
}

.brand-motto {
  color: var(--color-text-secondary);
  font-size: 0.88rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  max-width: 340px;
}

.trust-badge-placeholder {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  background: rgba(255, 255, 255, 0.03);
  padding: 0.4rem 0.8rem;
  border-radius: var(--radius-sm);
  display: inline-block;
  border: 1px solid var(--color-border-subtle);
}

.col-heading {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.05em;
  margin-bottom: 1.4rem;
}

.col-links, .contact-info-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.col-links a {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 0.88rem;
  transition: all 0.2s ease;
}

.col-links a:hover {
  color: var(--color-green-light, #34D399);
  padding-left: 6px;
}

.contact-info-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  color: var(--color-text-secondary);
  font-size: 0.88rem;
  line-height: 1.5;
}

.contact-info-list a {
  color: var(--color-text-secondary);
  text-decoration: none;
}

.contact-info-list a:hover {
  color: var(--color-green-light, #34D399);
}

.footer-bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 0.82rem;
  color: var(--color-text-muted);
}

.sub-disclaimer {
  font-size: 0.78rem;
  opacity: 0.75;
}

@keyframes pulse-ring {
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.8; }
}

@media (max-width: 992px) {
  .footer-telegram-cta {
    flex-direction: column;
    text-align: center;
    padding: 2.5rem 1.8rem;
    gap: 2rem;
  }
  .tg-cta-left {
    max-width: 100%;
  }
  .tg-features {
    justify-content: center;
  }
  .footer-top-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 600px) {
  .footer-telegram-cta {
    padding: 2rem 1.2rem;
  }
  .btn-telegram-pulse {
    width: 100%;
    justify-content: center;
  }
  .footer-top-grid {
    grid-template-columns: 1fr;
  }
  .footer-bottom-bar {
    flex-direction: column;
    gap: 0.8rem;
    text-align: center;
  }
}
</style>
