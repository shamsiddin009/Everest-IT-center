<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isExpanded = ref(false);
const wrapperRef = ref(null);

const toggleExpanded = (e) => {
  if (!isExpanded.value) {
    // First click / tap: expand labels smoothly
    e.preventDefault();
    isExpanded.value = true;
  }
  // Second click (when already expanded): allow navigating directly to t.me/Bekorchi_11
};

const handleDocumentClick = (e) => {
  if (wrapperRef.value && !wrapperRef.value.contains(e.target)) {
    isExpanded.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleDocumentClick);
});

onUnmounted(() => {
  document.removeEventListener('click', handleDocumentClick);
});
</script>

<template>
  <aside ref="wrapperRef" class="telegram-floating-wrapper" aria-label="Telegram orqali bog‘lanish">
    <!-- Main Floating Expandable Action Button -->
    <a
      href="https://t.me/Bekorchi_11"
      target="_blank"
      rel="noopener noreferrer"
      class="telegram-floating-btn"
      :class="{ 'is-expanded': isExpanded }"
      :title="isExpanded ? 'Telegramda ochish' : 'Bog\'lanish uchun bosing'"
      @click="toggleExpanded"
    >
      <div class="tg-pulse-ring"></div>
      <div class="tg-pulse-ring tg-pulse-ring--delay"></div>

      <div class="tg-btn-core">
        <div class="tg-icon-box">
          <svg viewBox="0 0 24 24" fill="currentColor" class="tg-plane-svg" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
          </svg>
        </div>

        <!-- Smooth Sliding Label Box -->
        <div class="tg-label-box">
          <div class="tg-label-sub">
            <span class="online-indicator"></span>
            <span>Tezkor aloqa</span>
          </div>
          <div class="tg-label-row">
            <span class="tg-label-main">Bog'lanish</span>
            <svg class="tg-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>
    </a>
  </aside>
</template>

<style scoped>
.telegram-floating-wrapper {
  position: fixed;
  bottom: 85px;
  right: 28px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  pointer-events: none;
}

.telegram-floating-wrapper * {
  pointer-events: auto;
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
  user-select: none;
}

.tg-btn-core {
  position: relative;
  display: flex;
  align-items: center;
  padding: 6px;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  border: 1.5px solid rgba(255, 255, 255, 0.4);
  border-radius: 999px;
  box-shadow:
    0 10px 25px rgba(0, 0, 0, 0.6),
    0 0 25px rgba(16, 185, 129, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 2;
  overflow: hidden;
}

.telegram-floating-btn:hover .tg-btn-core {
  background: linear-gradient(135deg, #34D399 0%, #10B981 100%);
  box-shadow:
    0 16px 35px rgba(0, 0, 0, 0.7),
    0 0 35px rgba(0, 245, 155, 0.7),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.tg-icon-box {
  width: 46px;
  height: 46px;
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

.telegram-floating-btn:hover .tg-icon-box,
.telegram-floating-btn.is-expanded .tg-icon-box {
  transform: rotate(-10deg) scale(1.06);
  color: #10B981;
}

.tg-plane-svg {
  width: 26px;
  height: 26px;
  margin-right: 1px;
}

/* Sliding Label Box: Hidden by default (compact icon circle) */
.tg-label-box {
  display: flex;
  flex-direction: column;
  max-width: 0;
  opacity: 0;
  transform: translateX(10px);
  padding-left: 0;
  padding-right: 0;
  white-space: nowrap;
  pointer-events: none;
  transition: max-width 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 0.25s ease,
              padding 0.35s ease,
              transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

/* When expanded or hovered on desktop */
.telegram-floating-btn.is-expanded .tg-label-box,
.telegram-floating-btn:hover .tg-label-box {
  max-width: 170px;
  opacity: 1;
  transform: translateX(0);
  padding-left: 10px;
  padding-right: 14px;
  pointer-events: auto;
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

.tg-label-row {
  display: flex;
  align-items: center;
  gap: 5px;
}

.tg-label-main {
  font-family: var(--font-heading);
  font-size: 0.94rem;
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.2;
}

.tg-arrow-icon {
  color: #D1FAE5;
  transition: transform 0.2s ease;
}

.telegram-floating-btn:hover .tg-arrow-icon {
  transform: translateX(3px);
  color: #FFFFFF;
}

/* Pulsing radar waves behind button */
.tg-pulse-ring {
  position: absolute;
  top: 50%;
  left: 29px;
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

@media (max-width: 600px) {
  .telegram-floating-wrapper {
    bottom: 80px;
    right: 16px;
  }
  .tg-icon-box {
    width: 44px;
    height: 44px;
  }
  .tg-plane-svg {
    width: 24px;
    height: 24px;
  }
  .tg-pulse-ring {
    left: 28px;
  }
}
</style>
