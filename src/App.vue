<script setup>
import { ref, provide, onMounted, onUnmounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import TelegramFloatingButton from './components/TelegramFloatingButton.vue';

const isScrolled = ref(false);

let ticking = false;
const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrolled = window.scrollY > 40;
      if (isScrolled.value !== scrolled) {
        isScrolled.value = scrolled;
      }
      ticking = false;
    });
    ticking = true;
  }
};

// Directly open Telegram Bot for all enrollments
const openEnrollModal = (courseName = '') => {
  window.open('https://t.me/EverestAcademy_bot', '_blank');
};

// Provide global enrollment trigger to any nested route/view
provide('openEnroll', openEnrollModal);

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="everest-app">
    <!-- Skip to main content for accessibility -->
    <a href="#main-content" class="skip-link">Asosiy kontentga o‘tish</a>

    <!-- Global Navigation -->
    <Navbar
      :scrolled="isScrolled"
      @open-enroll="openEnrollModal('')"
    />

    <!-- Routed Views with Transition -->
    <main id="main-content" class="app-main">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" @open-enroll="openEnrollModal" />
        </transition>
      </router-view>
    </main>

    <!-- Global Footer -->
    <Footer />

    <!-- Persistent Floating Telegram Bot Trigger -->
    <TelegramFloatingButton />
  </div>
</template>

<style scoped>
.everest-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg);
  color: var(--color-text);
  overflow-x: clip;
}

.skip-link {
  position: absolute;
  top: -100px;
  left: 20px;
  background: var(--color-primary);
  color: #ffffff;
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  z-index: 9999;
  font-weight: 600;
  transition: top 0.2s ease;
}

.skip-link:focus {
  top: 16px;
}

.app-main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Page fade transition */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
