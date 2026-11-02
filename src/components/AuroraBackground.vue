<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const mouseX = ref(50);
const mouseY = ref(30);

const handleMouseMove = (e) => {
  // Smooth normalized percentage
  const x = Math.round((e.clientX / window.innerWidth) * 100);
  const y = Math.round((e.clientY / window.innerHeight) * 100);
  mouseX.value = x;
  mouseY.value = y;
};

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<template>
  <div class="aurora-canvas-wrap" aria-hidden="true">
    <!-- Interactive Spotlight layer tracking cursor -->
    <div
      class="aurora-spotlight"
      :style="{
        background: `radial-gradient(650px circle at ${mouseX}% ${mouseY}%, rgba(0, 245, 155, 0.08), transparent 50%)`
      }"
    ></div>

    <!-- Multi-Layer Floating Aurora Orbs -->
    <div class="aurora-orb aurora-orb--1"></div>
    <div class="aurora-orb aurora-orb--2"></div>
    <div class="aurora-orb aurora-orb--3"></div>
    <div class="aurora-orb aurora-orb--4"></div>

    <!-- Fine Tech Mesh Pattern -->
    <div class="aurora-grid-overlay"></div>

    <!-- Film Grain / Noise Texture for luxury depth -->
    <div class="aurora-noise"></div>
  </div>
</template>

<style scoped>
.aurora-canvas-wrap {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

/* Dynamic Spotlight */
.aurora-spotlight {
  position: absolute;
  inset: 0;
  pointer-events: none;
  transition: background 0.15s ease-out;
  z-index: 2;
}

/* Organic Floating Aurora Orbs */
.aurora-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.55;
  mix-blend-mode: screen;
  will-change: transform;
  pointer-events: none;
}

/* Orb 1: Emerald Light (Top Left) */
.aurora-orb--1 {
  width: 520px;
  height: 520px;
  top: -10%;
  left: 5%;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.45) 0%, rgba(5, 150, 105, 0.15) 50%, transparent 70%);
  animation: floatOrb1 22s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
}

/* Orb 2: Electric Cyan / Jade (Top Right) */
.aurora-orb--2 {
  width: 600px;
  height: 600px;
  top: 15%;
  right: -10%;
  background: radial-gradient(circle, rgba(0, 245, 155, 0.35) 0%, rgba(6, 182, 212, 0.18) 45%, transparent 70%);
  animation: floatOrb2 26s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
}

/* Orb 3: Deep Teal / Ocean (Center / Bottom Left) */
.aurora-orb--3 {
  width: 580px;
  height: 580px;
  bottom: 5%;
  left: -8%;
  background: radial-gradient(circle, rgba(13, 148, 136, 0.35) 0%, rgba(16, 185, 129, 0.12) 50%, transparent 70%);
  animation: floatOrb3 28s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
}

/* Orb 4: Soft Accent Glow (Bottom Center) */
.aurora-orb--4 {
  width: 480px;
  height: 480px;
  bottom: -15%;
  right: 25%;
  background: radial-gradient(circle, rgba(0, 245, 155, 0.25) 0%, rgba(5, 150, 105, 0.1) 60%, transparent 75%);
  animation: floatOrb4 24s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
}

/* Grid Overlay with Radial Vignette */
.aurora-grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at 50% 40%, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 80%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse at 50% 40%, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 80%, transparent 100%);
  z-index: 1;
}

/* Micro Noise Texture */
.aurora-noise {
  position: absolute;
  inset: 0;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  z-index: 3;
}

/* Keyframes with ultra-smooth organic motion */
@keyframes floatOrb1 {
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(60px, 80px) scale(1.12);
  }
  100% {
    transform: translate(-40px, 50px) scale(0.95);
  }
}

@keyframes floatOrb2 {
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-80px, 90px) scale(1.08);
  }
  100% {
    transform: translate(-30px, -60px) scale(0.92);
  }
}

@keyframes floatOrb3 {
  0% {
    transform: translate(0, 0) scale(0.95);
  }
  50% {
    transform: translate(90px, -70px) scale(1.1);
  }
  100% {
    transform: translate(40px, 30px) scale(1);
  }
}

@keyframes floatOrb4 {
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-50px, -60px) scale(1.15);
  }
  100% {
    transform: translate(70px, -40px) scale(0.9);
  }
}

@media (max-width: 768px) {
  .aurora-orb {
    filter: blur(80px);
    opacity: 0.45;
  }
  .aurora-orb--1 { width: 340px; height: 340px; }
  .aurora-orb--2 { width: 360px; height: 360px; }
  .aurora-orb--3 { width: 320px; height: 320px; }
  .aurora-orb--4 { display: none; }
}
</style>
