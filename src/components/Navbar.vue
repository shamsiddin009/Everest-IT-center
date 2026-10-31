<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

defineProps({
  scrolled: Boolean
});

const emit = defineEmits(['openEnroll']);
const router = useRouter();
const mobileOpen = ref(false);

const navItems = [
  { name: 'Bosh sahifa', path: '/' },
  { name: 'Kurslar', path: '/courses' },
  { name: 'Biz haqimizda', path: '/about' },
  { name: 'Ustozlar', path: '/teachers' },
  { name: 'Yangiliklar', path: '/news' },
  { name: 'Aloqa', path: '/contact' }
];

const navigateTo = (path) => {
  mobileOpen.value = false;
  router.push(path);
};
</script>

<template>
  <header class="everest-nav" :class="{ 'everest-nav--scrolled': scrolled }">
    <div class="container nav-wrapper">
      <!-- Brand Logo with Mountain Geometry -->
      <router-link to="/" class="nav-brand" aria-label="Everest IT Center Bosh sahifa">
        <div class="brand-crest">
          <svg viewBox="0 0 32 32" fill="none" class="crest-svg" aria-hidden="true">
            <!-- Mountain Peak with Nodes -->
            <path d="M16 4L4 26H28L16 4Z" stroke="url(#crestGrad)" stroke-width="2" stroke-linejoin="round"/>
            <path d="M16 4V26" stroke="rgba(16, 185, 129, 0.4)" stroke-width="1.5"/>
            <path d="M11 15L21 15" stroke="rgba(52, 211, 153, 0.6)" stroke-width="1.5"/>
            <circle cx="16" cy="4" r="2.5" fill="#34D399"/>
            <defs>
              <linearGradient id="crestGrad" x1="4" y1="26" x2="28" y2="4" gradientUnits="userSpaceOnUse">
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

      <!-- Desktop Route Navigation -->
      <nav class="nav-links-desktop" aria-label="Asosiy menyu">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-item-link"
          active-class="nav-item-link--active"
        >
          {{ item.name }}
        </router-link>
      </nav>

      <!-- Nav CTA -->
      <div class="nav-actions">
        <a href="tel:+998712000000" class="nav-phone" aria-label="Bog'lanish uchun telefon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
          </svg>
          <span>(71) 200-00-00</span>
        </a>

        <!-- Mobile Burger Button -->
        <button
          class="burger-btn"
          @click="mobileOpen = !mobileOpen"
          :aria-expanded="mobileOpen"
          aria-label="Mobil menyuni ochish yoki yopish"
        >
          <span :class="{ 'top-open': mobileOpen }"></span>
          <span :class="{ 'mid-open': mobileOpen }"></span>
          <span :class="{ 'bot-open': mobileOpen }"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Overlay -->
    <div v-if="mobileOpen" class="mobile-drawer" @click.self="mobileOpen = false">
      <div class="drawer-content glass-surface">
        <ul class="mobile-nav-list">
          <li v-for="item in navItems" :key="item.path">
            <a
              href="javascript:void(0)"
              class="mobile-nav-link"
              @click="navigateTo(item.path)"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
        <!-- Phone number in mobile drawer -->
        <a href="tel:+998712000000" class="mobile-phone-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
          </svg>
          <span>(71) 200-00-00</span>
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.everest-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 84px;
  z-index: 100;
  display: flex;
  align-items: center;
  background: rgba(4, 9, 7, 0.75);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.35s var(--ease-smooth);
}

.everest-nav--scrolled {
  height: 70px;
  background: rgba(4, 9, 7, 0.94);
  border-bottom-color: rgba(0, 245, 155, 0.25);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 245, 155, 0.08);
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  text-decoration: none;
}

.brand-crest {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.3);
  box-shadow: 0 0 16px rgba(16, 185, 129, 0.2);
  transition: all 0.3s ease;
}

.nav-brand:hover .brand-crest {
  transform: translateY(-2px) scale(1.05);
  border-color: var(--color-green-neon);
  box-shadow: 0 0 24px rgba(0, 245, 155, 0.45);
  box-shadow: 0 0 20px var(--color-cyan-glow);
}

.crest-svg {
  width: 24px;
  height: 24px;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-family: var(--font-heading);
  font-size: 1.22rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #fff;
  line-height: 1;
}

.brand-tag {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--color-cyan);
}

.nav-links-desktop {
  display: flex;
  align-items: center;
  gap: 2.2rem;
}

.nav-item-link {
  color: var(--color-text-secondary);
  font-size: 0.92rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.25s ease;
  position: relative;
  padding: 0.4rem 0;
}

.nav-item-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-indigo) 0%, var(--color-cyan) 100%);
  border-radius: 2px;
  transition: width 0.3s var(--ease-smooth);
}

.nav-item-link:hover,
.nav-item-link--active {
  color: #fff;
}

.nav-item-link:hover::after,
.nav-item-link--active::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1.4rem;
}

.nav-phone {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 600;
  transition: color 0.25s ease;
}

.nav-phone:hover {
  color: var(--color-cyan-light);
}

.btn-nav-cta {
  padding: 0.65rem 1.4rem;
  font-size: 0.85rem;
}

.burger-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.burger-btn span {
  display: block;
  width: 100%;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.top-open { transform: translateY(9px) rotate(45deg); }
.mid-open { opacity: 0; }
.bot-open { transform: translateY(-9px) rotate(-45deg); }

.mobile-drawer {
  position: fixed;
  inset: 84px 0 0 0;
  background: rgba(8, 15, 26, 0.92);
  backdrop-filter: blur(25px);
  z-index: 99;
  padding: 2rem 1.5rem;
}

.drawer-content {
  padding: 2rem;
  border-radius: var(--radius-xl);
}

.mobile-nav-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

.mobile-nav-link {
  color: #fff;
  font-size: 1.15rem;
  font-weight: 700;
  text-decoration: none;
  display: block;
  padding: 0.25rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  transition: color 0.2s ease;
}

.mobile-nav-link:hover {
  color: var(--color-green-neon);
}

.mobile-phone-link {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-top: 1.8rem;
  padding: 0.85rem 1.2rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.25);
  border-radius: var(--radius-full);
  color: var(--color-green-light);
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  justify-content: center;
  transition: all 0.25s ease;
}

.mobile-phone-link:hover {
  background: rgba(16, 185, 129, 0.2);
  color: #fff;
}

.btn-full { width: 100%; }
.mt-4 { margin-top: 1.5rem; }

@media (max-width: 1024px) {
  .nav-links-desktop, .nav-phone {
    display: none;
  }
  .burger-btn {
    display: flex;
  }
}

@media (max-width: 480px) {
  .btn-nav-cta {
    display: none;
  }
}
</style>
