
<script setup>
import { ref, onUnmounted } from 'vue';
import Sticker from './Sticker.vue';

const props = defineProps({
  course: {
    type: Object,
    required: true
  }
});

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = '';
};

onUnmounted(() => {
  document.body.style.overflow = '';
});
</script>

<template>
  <div class="certificate-showcase-wrapper">
    <!-- Header info banner -->
    <div class="cert-intro-row">
      <div class="cert-intro-text">
        <span class="cert-badge">
          <Sticker name="certificate" size="xs" variant="flat" />
          <span>Rasmiy Ta’lim Hujjati</span>
        </span>
        <h3 class="cert-heading">
          Kursni Bitirgach Olinadigan Sertifikat Namunasi
        </h3>
        <p class="cert-subtext">
          Everest IT Center o‘quvchilariga kursni muvaffaqiyatli yakunlagach, xalqaro va mahalliy kompaniyalarga taqdim etish mumkin bo‘lgan, QR-kodli rasmiy bitiruv sertifikati topshiriladi.
        </p>
      </div>
    </div>

    <!-- Interactive Certificate Canvas / Card -->
    <div class="cert-display-card glass-surface" @click="openModal" role="button" tabindex="0" aria-label="Sertifikatni kattalashtirib ko‘rish">
      <div class="cert-zoom-hint">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" aria-hidden="true">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
        </svg>
        <span>Batafsil ko‘rish uchun bosing</span>
      </div>

      <!-- Luxury Certificate Document Mockup -->
      <div class="luxury-cert-doc">
        <!-- Security Outer Border with Corner Accents -->
        <div class="cert-border-outer">
          <div class="cert-corner corner-tl"></div>
          <div class="cert-corner corner-tr"></div>
          <div class="cert-corner corner-bl"></div>
          <div class="cert-corner corner-br"></div>

          <div class="cert-inner-content">
            <!-- Security Guilloche Pattern Background -->
            <div class="cert-bg-pattern" aria-hidden="true"></div>

            <!-- Top Header & Crest -->
            <div class="cert-header">
              <div class="cert-crest">
                <svg viewBox="0 0 32 32" fill="none" width="36" height="36" aria-hidden="true">
                  <path d="M16 4L4 26H28L16 4Z" stroke="#34D399" stroke-width="2" stroke-linejoin="round"/>
                  <path d="M16 4V26" stroke="rgba(52, 211, 153, 0.4)" stroke-width="1.5"/>
                  <path d="M11 15L21 15" stroke="rgba(52, 211, 153, 0.6)" stroke-width="1.5"/>
                  <circle cx="16" cy="4" r="2.5" fill="#10B981"/>
                </svg>
              </div>
              <div class="cert-brand-titles">
                <span class="cert-brand-name">EVEREST IT CENTER</span>
                <span class="cert-doc-type">CERTIFICATE OF EXCELLENCE</span>
              </div>
            </div>

            <!-- Statement of Achievement -->
            <p class="cert-statement">Ushbu sertifikat tasdiqlaydiki,</p>

            <!-- Student Name -->
            <div class="cert-recipient">
              <span class="recipient-name">{{ course.certificate?.studentSample || 'Azimov Sardorbek' }}</span>
              <div class="recipient-line"></div>
            </div>

            <!-- Course Title & Text -->
            <p class="cert-program-text">
              Everest IT Center'da quyidagi professional ta’lim yo‘nalishi dasturini to‘liq va muvaffaqiyatli o‘zlashtirdi:
            </p>

            <h4 class="cert-course-name">
              {{ course.certificate?.title || course.title }}
            </h4>

            <!-- Qualification & Grade -->
            <div class="cert-qual-badge">
              <span class="qual-label">Malaka darajasi:</span>
              <strong class="qual-val">{{ course.certificate?.qualification || course.level }}</strong>
              <span class="cert-sep">•</span>
              <strong class="grade-val">{{ course.certificate?.level || 'A+ (High Honors)' }}</strong>
            </div>

            <!-- Skills Acquired Chips -->
            <div v-if="course.certificate?.skills" class="cert-skills-strip">
              <span v-for="skill in course.certificate.skills" :key="skill" class="cert-skill-tag">
                {{ skill }}
              </span>
            </div>

            <!-- Footer: Signatures, Seal & QR Verification -->
            <div class="cert-footer">
              <!-- Left: Date & Serial -->
              <div class="cert-foot-meta">
                <div class="meta-row">
                  <span class="meta-label">Berilgan sana:</span>
                  <span class="meta-val">{{ course.certificate?.date || '2026-yil' }}</span>
                </div>
                <div class="meta-row">
                  <span class="meta-label">Sertifikat ID:</span>
                  <code class="meta-code">{{ course.certificate?.serial || 'EV-2026-IT-0842' }}</code>
                </div>
              </div>

              <!-- Center: Official Hologram Stamp -->
              <div class="cert-official-seal">
                <div class="seal-ring">
                  <div class="seal-inner">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                      <path d="M12 2l2.4 5.2 5.6.8-4 4 1 5.6-5-2.8-5 2.8 1-5.6-4-4 5.6-.8z"/>
                    </svg>
                    <span class="seal-text">EVEREST<br/>VERIFIED</span>
                  </div>
                </div>
              </div>

              <!-- Right: Verification QR & Signature -->
              <div class="cert-verification">
                <div class="cert-qr-box">
                  <!-- Vector QR Code Pattern -->
                  <svg viewBox="0 0 48 48" class="qr-svg" aria-label="Haqiqiylikni tekshirish QR-kodi">
                    <rect width="48" height="48" fill="#ffffff" rx="4"/>
                    <!-- QR positioning squares -->
                    <rect x="4" y="4" width="14" height="14" fill="#050F0B" rx="2"/>
                    <rect x="7" y="7" width="8" height="8" fill="#ffffff"/>
                    <rect x="9" y="9" width="4" height="4" fill="#10B981"/>

                    <rect x="30" y="4" width="14" height="14" fill="#050F0B" rx="2"/>
                    <rect x="33" y="7" width="8" height="8" fill="#ffffff"/>
                    <rect x="35" y="9" width="4" height="4" fill="#10B981"/>

                    <rect x="4" y="30" width="14" height="14" fill="#050F0B" rx="2"/>
                    <rect x="7" y="33" width="8" height="8" fill="#ffffff"/>
                    <rect x="9" y="35" width="4" height="4" fill="#10B981"/>

                    <!-- QR Data bits -->
                    <rect x="22" y="6" width="4" height="4" fill="#050F0B"/>
                    <rect x="22" y="14" width="4" height="4" fill="#050F0B"/>
                    <rect x="14" y="22" width="4" height="4" fill="#050F0B"/>
                    <rect x="22" y="22" width="4" height="4" fill="#10B981"/>
                    <rect x="30" y="22" width="4" height="4" fill="#050F0B"/>
                    <rect x="38" y="22" width="4" height="4" fill="#050F0B"/>
                    <rect x="22" y="30" width="4" height="4" fill="#050F0B"/>
                    <rect x="22" y="38" width="4" height="4" fill="#050F0B"/>
                    <rect x="30" y="30" width="4" height="4" fill="#050F0B"/>
                    <rect x="38" y="34" width="4" height="4" fill="#050F0B"/>
                    <rect x="34" y="38" width="4" height="4" fill="#10B981"/>
                  </svg>
                  <span class="qr-label">QR Online Tekshiruv</span>
                </div>

                <div class="cert-signature-box">
                  <div class="sig-script">Everest Academic Director</div>
                  <div class="sig-line"></div>
                  <span class="sig-title">Bosh Direktor & O‘qituvchi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 3 Key Features of Everest Certificates -->
    <div class="cert-features-grid">
      <div class="cert-feat-card glass-surface">
        <div class="feat-icon-box">
          <Sticker name="sparkles" size="md" />
        </div>
        <h4>Online QR-kod Tekshiruvi</h4>
        <p>
          Har bir bitiruvchining sertifikatida maxsus QR-kod mavjud. Istalgan ish beruvchi kodni skanerlab sertifikat haqiqiyligini tekshirishi mumkin.
        </p>
      </div>

      <div class="cert-feat-card glass-surface">
        <div class="feat-icon-box">
          <Sticker name="briefcase" size="md" />
        </div>
        <h4>Ishga Kirishda Rasmiy Imtiyoz</h4>
        <p>
          Everest IT Center sertifikatlari portfolio loyihalari bilan mustahkamlangan bo‘lib, rezyumega (CV) va LinkedIn profilga bevosita biriktiriladi.
        </p>
      </div>

      <div class="cert-feat-card glass-surface">
        <div class="feat-icon-box">
          <Sticker name="grad" size="md" />
        </div>
        <h4>Ikki Tilda (O‘zbek & Ingliz)</h4>
        <p>
          Xalqaro standartdagi format tufayli chet el kompaniyalari, frilans birjalari va grantlar tanlovlarida erkin qabul qilinadi.
        </p>
      </div>
    </div>

    <!-- Lightbox Modal for Full Screen Inspection -->
    <Teleport to="body">
      <div v-if="isModalOpen" class="cert-modal-backdrop" @click="closeModal" @keydown.esc="closeModal">
        <div class="cert-modal-dialog" @click.stop>
          <div class="cert-modal-top">
            <div class="modal-cert-title">
              <Sticker name="certificate" size="xs" variant="flat" />
              <span>Sertifikat Ko‘rinishi — {{ course.title }}</span>
            </div>
            <button class="cert-close-btn" @click="closeModal" aria-label="Yopish">
              ✕
            </button>
          </div>

          <div class="cert-modal-body">
            <!-- Scale up certificate for crystal clarity -->
            <div class="modal-cert-render">
              <div class="cert-border-outer cert-border-modal">
                <div class="cert-corner corner-tl"></div>
                <div class="cert-corner corner-tr"></div>
                <div class="cert-corner corner-bl"></div>
                <div class="cert-corner corner-br"></div>

                <div class="cert-inner-content">
                  <div class="cert-bg-pattern" aria-hidden="true"></div>

                  <div class="cert-header">
                    <div class="cert-crest">
                      <svg viewBox="0 0 32 32" fill="none" width="44" height="44" aria-hidden="true">
                        <path d="M16 4L4 26H28L16 4Z" stroke="#34D399" stroke-width="2" stroke-linejoin="round"/>
                        <path d="M16 4V26" stroke="rgba(52, 211, 153, 0.4)" stroke-width="1.5"/>
                        <path d="M11 15L21 15" stroke="rgba(52, 211, 153, 0.6)" stroke-width="1.5"/>
                        <circle cx="16" cy="4" r="2.5" fill="#10B981"/>
                      </svg>
                    </div>
                    <div class="cert-brand-titles">
                      <span class="cert-brand-name cert-brand-name--lg">EVEREST IT CENTER</span>
                      <span class="cert-doc-type cert-doc-type--lg">OFFICIAL CERTIFICATE OF ACHIEVEMENT</span>
                    </div>
                  </div>

                  <p class="cert-statement">Ushbu hujjat tasdiqlaydiki,</p>

                  <div class="cert-recipient cert-recipient--modal">
                    <span class="recipient-name recipient-name--modal">{{ course.certificate?.studentSample || 'Azimov Sardorbek' }}</span>
                    <div class="recipient-line"></div>
                  </div>

                  <p class="cert-program-text">
                    Everest IT Center'da quyidagi professional ta’lim dasturini muvaffaqiyatli yakunladi:
                  </p>

                  <h3 class="cert-course-name cert-course-name--modal">
                    {{ course.certificate?.title || course.title }}
                  </h3>

                  <div class="cert-qual-badge">
                    <span class="qual-label">Mutaxassislik darajasi:</span>
                    <strong class="qual-val">{{ course.certificate?.qualification || course.level }}</strong>
                    <span class="cert-sep">•</span>
                    <strong class="grade-val">{{ course.certificate?.level || 'A+ Grade (98%)' }}</strong>
                  </div>

                  <div v-if="course.certificate?.skills" class="cert-skills-strip">
                    <span v-for="skill in course.certificate.skills" :key="skill" class="cert-skill-tag cert-skill-tag--modal">
                      ✓ {{ skill }}
                    </span>
                  </div>

                  <div class="cert-footer cert-footer--modal">
                    <div class="cert-foot-meta">
                      <div class="meta-row">
                        <span class="meta-label">Berilgan sana:</span>
                        <span class="meta-val">{{ course.certificate?.date || '2026-yil' }}</span>
                      </div>
                      <div class="meta-row">
                        <span class="meta-label">Seriya ID:</span>
                        <code class="meta-code">{{ course.certificate?.serial || 'EV-2026-IT-0842' }}</code>
                      </div>
                      <div class="meta-row">
                        <span class="meta-label">Holati:</span>
                        <span class="meta-badge-valid">✓ Haqiqiy (Tasdiqlangan)</span>
                      </div>
                    </div>

                    <div class="cert-official-seal cert-official-seal--modal">
                      <div class="seal-ring">
                        <div class="seal-inner">
                          <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                            <path d="M12 2l2.4 5.2 5.6.8-4 4 1 5.6-5-2.8-5 2.8 1-5.6-4-4 5.6-.8z"/>
                          </svg>
                          <span class="seal-text">EVEREST<br/>VERIFIED</span>
                        </div>
                      </div>
                    </div>

                    <div class="cert-verification">
                      <div class="cert-qr-box">
                        <svg viewBox="0 0 48 48" class="qr-svg qr-svg--modal" aria-hidden="true">
                          <rect width="48" height="48" fill="#ffffff" rx="4"/>
                          <rect x="4" y="4" width="14" height="14" fill="#050F0B" rx="2"/>
                          <rect x="7" y="7" width="8" height="8" fill="#ffffff"/>
                          <rect x="9" y="9" width="4" height="4" fill="#10B981"/>
                          <rect x="30" y="4" width="14" height="14" fill="#050F0B" rx="2"/>
                          <rect x="33" y="7" width="8" height="8" fill="#ffffff"/>
                          <rect x="35" y="9" width="4" height="4" fill="#10B981"/>
                          <rect x="4" y="30" width="14" height="14" fill="#050F0B" rx="2"/>
                          <rect x="7" y="33" width="8" height="8" fill="#ffffff"/>
                          <rect x="9" y="35" width="4" height="4" fill="#10B981"/>
                          <rect x="22" y="6" width="4" height="4" fill="#050F0B"/>
                          <rect x="22" y="14" width="4" height="4" fill="#050F0B"/>
                          <rect x="14" y="22" width="4" height="4" fill="#050F0B"/>
                          <rect x="22" y="22" width="4" height="4" fill="#10B981"/>
                          <rect x="30" y="22" width="4" height="4" fill="#050F0B"/>
                          <rect x="38" y="22" width="4" height="4" fill="#050F0B"/>
                          <rect x="22" y="30" width="4" height="4" fill="#050F0B"/>
                          <rect x="22" y="38" width="4" height="4" fill="#050F0B"/>
                          <rect x="30" y="30" width="4" height="4" fill="#050F0B"/>
                          <rect x="38" y="34" width="4" height="4" fill="#050F0B"/>
                          <rect x="34" y="38" width="4" height="4" fill="#10B981"/>
                        </svg>
                        <span class="qr-label">QR Online Tekshiruv</span>
                      </div>

                      <div class="cert-signature-box">
                        <div class="sig-script sig-script--modal">Everest Academic Director</div>
                        <div class="sig-line"></div>
                        <span class="sig-title">Kengash Raisi & Metodist</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="cert-modal-foot">
            <span class="foot-note">
              * Har bir o‘quvchiga kurs yakunida tantanali ravishda diplom bilan birga topshiriladi.
            </span>
            <button class="btn btn-primary btn-sm" @click="closeModal">
              Tushunarli (Yopish)
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.certificate-showcase-wrapper {
  margin-top: 1rem;
}

.cert-intro-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.cert-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-green-neon, #00F59B);
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.3);
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-full);
  margin-bottom: 0.5rem;
}

.cert-heading {
  font-size: 1.35rem;
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.3;
  margin-bottom: 0.5rem;
}

.cert-subtext {
  font-size: 0.92rem;
  color: var(--color-white-muted, #D1FAE5);
  line-height: 1.6;
  max-width: 680px;
  opacity: 0.9;
}

/* Display Card Container */
.cert-display-card {
  position: relative;
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  background: rgba(10, 26, 20, 0.85);
  border: 1px solid rgba(16, 185, 129, 0.35);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
  cursor: pointer;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.cert-display-card:hover {
  transform: translateY(-4px);
  border-color: rgba(52, 211, 153, 0.6);
  box-shadow: 0 20px 48px rgba(0, 245, 155, 0.15);
}

.cert-zoom-hint {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(5, 15, 11, 0.85);
  border: 1px solid rgba(16, 185, 129, 0.4);
  color: #6EE7B7;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.35rem 0.75rem;
  border-radius: var(--radius-full);
  z-index: 5;
  backdrop-filter: blur(8px);
  pointer-events: none;
  transition: opacity 0.2s ease;
}

/* Luxury Certificate Document Layout */
.luxury-cert-doc {
  width: 100%;
}

.cert-border-outer {
  position: relative;
  background: #06140E;
  border: 2px solid #34D399;
  border-radius: 12px;
  padding: 2.2rem 2.5rem;
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.8);
}

.cert-border-modal {
  padding: 2.8rem 3rem;
  max-width: 820px;
  margin: 0 auto;
}

/* Security Corners */
.cert-corner {
  position: absolute;
  width: 18px;
  height: 18px;
  border: 2px solid #10B981;
}

.corner-tl { top: 6px; left: 6px; border-right: none; border-bottom: none; }
.corner-tr { top: 6px; right: 6px; border-left: none; border-bottom: none; }
.corner-bl { bottom: 6px; left: 6px; border-right: none; border-top: none; }
.corner-br { bottom: 6px; right: 6px; border-left: none; border-top: none; }

.cert-inner-content {
  position: relative;
  text-align: center;
}

.cert-bg-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(16, 185, 129, 0.08) 1px, transparent 1px);
  background-size: 16px 16px;
  pointer-events: none;
}

/* Header */
.cert-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
}

.cert-brand-titles {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.cert-brand-name {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: #FFFFFF;
}

.cert-brand-name--lg {
  font-size: 1.45rem;
}

.cert-doc-type {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  color: var(--color-green-neon, #00F59B);
}

.cert-doc-type--lg {
  font-size: 0.82rem;
}

.cert-statement {
  font-size: 0.85rem;
  color: #A7F3D0;
  font-style: italic;
  margin-bottom: 0.4rem;
}

.cert-recipient {
  margin: 0.4rem auto 1rem;
  display: inline-block;
  min-width: 280px;
}

.recipient-name {
  font-family: 'Space Grotesk', var(--font-sans);
  font-size: 1.6rem;
  font-weight: 800;
  color: #FFFFFF;
  letter-spacing: 0.05em;
  text-shadow: 0 0 16px rgba(16, 185, 129, 0.4);
}

.recipient-name--modal {
  font-size: 2.1rem;
}

.recipient-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #34D399, transparent);
  margin-top: 0.35rem;
}

.cert-program-text {
  font-size: 0.82rem;
  color: #D1FAE5;
  max-width: 520px;
  margin: 0 auto 0.6rem;
  line-height: 1.5;
}

.cert-course-name {
  font-size: 1.35rem;
  font-weight: 800;
  color: #FFFFFF;
  background: linear-gradient(135deg, #FFFFFF 20%, #34D399 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.8rem;
}

.cert-course-name--modal {
  font-size: 1.65rem;
}

.cert-qual-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.3);
  padding: 0.3rem 0.9rem;
  border-radius: var(--radius-full);
  margin-bottom: 1rem;
  color: #D1FAE5;
}

.qual-val {
  color: #FFFFFF;
}

.grade-val {
  color: var(--color-green-neon, #00F59B);
}

.cert-skills-strip {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.cert-skill-tag {
  font-size: 0.72rem;
  font-weight: 600;
  color: #6EE7B7;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.25);
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
}

.cert-skill-tag--modal {
  font-size: 0.8rem;
  padding: 0.3rem 0.75rem;
}

/* Footer Section */
.cert-footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.2rem;
  border-top: 1px dashed rgba(16, 185, 129, 0.3);
  text-align: left;
}

.cert-footer--modal {
  padding-top: 1.8rem;
}

.cert-foot-meta {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.meta-row {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.76rem;
}

.meta-label {
  color: #A7F3D0;
}

.meta-val {
  color: #FFFFFF;
  font-weight: 600;
}

.meta-code {
  font-family: monospace;
  color: var(--color-green-neon, #00F59B);
  background: rgba(0, 0, 0, 0.5);
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  font-size: 0.75rem;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.meta-badge-valid {
  color: #00F59B;
  font-weight: 700;
  font-size: 0.75rem;
}

/* Center Holographic Seal */
.cert-official-seal {
  display: flex;
  align-items: center;
  justify-content: center;
}

.seal-ring {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  border: 2px dashed #34D399;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.25), transparent);
  box-shadow: 0 0 16px rgba(16, 185, 129, 0.3);
}

.cert-official-seal--modal .seal-ring {
  width: 76px;
  height: 76px;
}

.seal-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #34D399;
}

.seal-text {
  font-size: 0.48rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  line-height: 1.1;
  margin-top: 2px;
}

/* Right Verification (QR + Signature) */
.cert-verification {
  display: flex;
  align-items: flex-end;
  gap: 1.2rem;
}

.cert-qr-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.qr-svg {
  width: 44px;
  height: 44px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

.qr-svg--modal {
  width: 54px;
  height: 54px;
}

.qr-label {
  font-size: 0.62rem;
  color: #6EE7B7;
  font-weight: 600;
}

.cert-signature-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 130px;
}

.sig-script {
  font-family: 'Brush Script MT', cursive, sans-serif;
  font-size: 1.1rem;
  color: #34D399;
  letter-spacing: 0.04em;
}

.sig-script--modal {
  font-size: 1.35rem;
}

.sig-line {
  width: 100%;
  height: 1px;
  background: rgba(16, 185, 129, 0.4);
  margin: 0.2rem 0;
}

.sig-title {
  font-size: 0.65rem;
  color: #A7F3D0;
}

/* 3 Key Feature Cards */
.cert-features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.cert-feat-card {
  padding: 1.3rem;
  border-radius: var(--radius-md);
  background: rgba(10, 26, 20, 0.7);
  border: 1px solid var(--color-border-subtle, rgba(16, 185, 129, 0.2));
}

.feat-icon-box {
  margin-bottom: 0.75rem;
}

.cert-feat-card h4 {
  font-size: 0.95rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 0.4rem;
}

.cert-feat-card p {
  font-size: 0.82rem;
  color: var(--color-white-muted, #D1FAE5);
  line-height: 1.55;
  opacity: 0.85;
}

/* Modal / Lightbox Styles */
.cert-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(2, 8, 6, 0.88);
  backdrop-filter: blur(12px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  animation: fadeIn 0.25s ease;
}

.cert-modal-dialog {
  background: #06140E;
  border: 1px solid rgba(16, 185, 129, 0.45);
  border-radius: var(--radius-xl);
  max-width: 900px;
  width: 100%;
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.75), 0 0 40px rgba(16, 185, 129, 0.2);
}

.cert-modal-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.6rem;
  border-bottom: 1px solid rgba(16, 185, 129, 0.2);
}

.modal-cert-title {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1rem;
  font-weight: 700;
  color: #FFFFFF;
}

.cert-close-btn {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #FFFFFF;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.cert-close-btn:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: rgba(239, 68, 68, 0.5);
  color: #F87171;
}

.cert-modal-body {
  padding: 1.6rem;
  overflow-y: auto;
}

.cert-modal-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.6rem;
  border-top: 1px solid rgba(16, 185, 129, 0.2);
  background: rgba(5, 15, 11, 0.5);
}

.foot-note {
  font-size: 0.78rem;
  color: #A7F3D0;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
}

@media (max-width: 900px) {
  .cert-features-grid {
    grid-template-columns: 1fr;
  }

  .cert-border-outer {
    padding: 1.6rem 1.2rem;
  }

  .cert-footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.2rem;
  }

  .cert-foot-meta {
    align-items: center;
  }

  .cert-verification {
    width: 100%;
    justify-content: space-around;
  }
}
</style>
