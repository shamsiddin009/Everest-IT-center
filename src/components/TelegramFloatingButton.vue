<script setup>
import { ref, onMounted } from 'vue';
import Sticker from './Sticker.vue';

const showGreeting = ref(false);
const isDismissed = ref(false);

const dismissGreeting = (e) => {
  e.stopPropagation();
  e.preventDefault();
  isDismissed.value = true;
  showGreeting.value = false;
};

onMounted(() => {
  // Show greeting prompt gently after 2.5 seconds
  setTimeout(() => {
    if (!isDismissed.value) {
      showGreeting.value = true;
    }
  }, 2500);
});
</script>

<template>
  <aside class="telegram-floating-wrapper" aria-label="Telegram Bot bilan bog‘lanish">
    <!-- Interactive Greeting Tooltip -->
    <transition name="pop-fade">
      <div v-if="showGreeting && !isDismissed" class="tg-greeting-bubble">
        <button class="tg-close-bubble" @click="dismissGreeting" aria-label="Xabarni yopish">
          &times;
        </button>
        <div class="tg-bubble-header">
          <span class="tg-bubble-badge">Everest Bot</span>
          <span class="tg-bubble-status">Online 24/7</span>
        </div>
        <p class="tg-bubble-msg">
          <Sticker name="wave" size="xs" variant="flat" /> Salom! Darslarga navbatsiz <strong>Telegram Bot</strong> orqali yoziling va 1-darsni bepul oling!
        </p>
        <a
          href="https://t.me/EverestAcademy_bot"
          target="_blank"
          rel="noopener noreferrer"
          class="tg-bubble-btn"
        >
          <span>Botni ochish</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </transition>

    <!-- Main Floating Action Button -->
    <a
      href="https://t.me/EverestAcademy_bot"
      target="_blank"
      rel="noopener noreferrer"
      class="telegram-floating-btn"
      title="Telegram bot orqali darsga yozilish"
    >
      <div class="tg-pulse-ring"></div>
      <div class="tg-pulse-ring tg-pulse-ring--delay"></div>

      <div class="tg-btn-core">
        <div class="tg-icon-box">
          <svg viewBox="0 0 24 24" fill="currentColor" class="tg-plane-svg" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
          </svg>
        </div>

        <div class="tg-label-box">
          <div class="tg-label-sub">
            <span class="online-indicator"></span>
            <span>Tezkor qabul</span>
          </div>
          <span class="tg-label-main">Telegram Bot</span>
        </div>
      </div>
    </a>
  </aside>
</template>

<style scoped>
.telegram-floating-wrapper {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  pointer-events: none;
}

.telegram-floating-wrapper * {
  pointer-events: auto;
}

/* Greeting Bubble */
.tg-greeting-bubble {
  position: relative;
  width: 270px;
  background: rgba(10, 26, 20, 0.96);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(16, 185, 129, 0.4);
  border-radius: 18px;
  padding: 1.1rem 1.2rem;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.75), 0 0 25px rgba(16, 185, 129, 0.2);
  margin-bottom: 4px;
}

.tg-close-bubble {
  position: absolute;
  top: 8px;
  right: 10px;
  background: none;
  border: none;
  color: var(--color-text-dim, #637A71);
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
  transition: color 0.2s;
}

.tg-close-bubble:hover {
  color: #fff;
}

.tg-bubble-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.tg-bubble-badge {
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  background: rgba(16, 185, 129, 0.25);
  color: #34D399;
  padding: 2px 7px;
  border-radius: 999px;
  border: 1px solid rgba(16, 185, 129, 0.4);
}

.tg-bubble-status {
  font-size: 0.72rem;
  color: #6EE7B7;
  font-weight: 600;
}

.tg-bubble-msg {
  font-size: 0.84rem;
  color: #D1FAE5;
  line-height: 1.45;
  margin-bottom: 10px;
}

.tg-bubble-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: #FFFFFF;
  text-decoration: none;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 999px;
  transition: all 0.2s;
}

.tg-bubble-btn:hover {
  background: linear-gradient(135deg, #34D399 0%, #10B981 100%);
  transform: translateX(2px);
}

/* Floating Action Button */
.telegram-floating-btn {
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  border-radius: 999px;
}

.tg-btn-core {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 18px 8px 8px;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  border: 1.5px solid rgba(255, 255, 255, 0.4);
  border-radius: 999px;
  box-shadow:
    0 10px 25px rgba(0, 0, 0, 0.6),
    0 0 25px rgba(16, 185, 129, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 2;
}

.telegram-floating-btn:hover .tg-btn-core {
  transform: translateY(-3px) scale(1.03);
  background: linear-gradient(135deg, #34D399 0%, #10B981 100%);
  box-shadow:
    0 16px 35px rgba(0, 0, 0, 0.7),
    0 0 35px rgba(0, 245, 155, 0.7),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.tg-icon-box {
  width: 44px;
  height: 44px;
  background: #FFFFFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #059669;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease;
}

.telegram-floating-btn:hover .tg-icon-box {
  transform: rotate(-8deg) scale(1.08);
  color: #10B981;
}

.tg-plane-svg {
  width: 25px;
  height: 25px;
  margin-right: 1px;
}

.tg-label-box {
  display: flex;
  flex-direction: column;
}

.tg-label-sub {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #D1FAE5;
  letter-spacing: 0.05em;
}

.online-indicator {
  width: 6px;
  height: 6px;
  background: #00F59B;
  border-radius: 50%;
  box-shadow: 0 0 6px #00F59B;
  animation: blink 1.5s infinite;
}

.tg-label-main {
  font-family: var(--font-heading);
  font-size: 0.94rem;
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.2;
}

/* Pulsing radar waves behind button */
.tg-pulse-ring {
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translate(-50%, -50%);
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.5);
  pointer-events: none;
  animation: radar-wave 2.4s infinite cubic-bezier(0.25, 1, 0.5, 1);
  z-index: 1;
}

.tg-pulse-ring--delay {
  animation-delay: 1.2s;
}

@keyframes radar-wave {
  0% {
    width: 44px;
    height: 44px;
    opacity: 0.8;
  }
  100% {
    width: 95px;
    height: 95px;
    opacity: 0;
  }
}

@keyframes blink {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.8); }
}

/* Transitions */
.pop-fade-enter-active,
.pop-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.pop-fade-enter-from,
.pop-fade-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.92);
}

@media (max-width: 600px) {
  .telegram-floating-wrapper {
    bottom: 20px;
    right: 18px;
  }
  .tg-greeting-bubble {
    width: calc(100vw - 40px);
    max-width: 290px;
  }
  .tg-label-box {
    display: none;
  }
  .tg-btn-core {
    padding: 6px;
  }
  .tg-icon-box {
    width: 48px;
    height: 48px;
  }
  .tg-pulse-ring {
    left: 50%;
  }
}
</style>
