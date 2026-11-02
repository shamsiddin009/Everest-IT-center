<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const canvasRef = ref(null);
let animationFrameId = null;

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const handleResize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', handleResize, { passive: true });

  // Interactive mouse point for node attraction
  const mouse = { x: -1000, y: -1000, radius: 140 };

  const handleMouseMove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };
  const handleMouseLeave = () => {
    mouse.x = -1000;
    mouse.y = -1000;
  };
  window.addEventListener('mousemove', handleMouseMove, { passive: true });
  window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

  // Create Constellation Nodes
  const nodeCount = Math.min(Math.floor((width * height) / 14000), 75);
  const nodes = [];

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45 - 0.15, // slight upward float
      size: Math.random() * 2 + 1.2,
      baseAlpha: Math.random() * 0.45 + 0.35,
      pulseSpeed: Math.random() * 0.03 + 0.01,
      pulsePhase: Math.random() * Math.PI * 2,
    });
  }

  // Animation Loop
  let frame = 0;
  const render = () => {
    frame++;
    ctx.clearRect(0, 0, width, height);

    // Update & draw nodes
    for (let i = 0; i < nodes.length; i++) {
      const p = nodes[i];
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around bounds
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Mouse gentle interaction
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.hypot(dx, dy);
      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        p.x -= (dx / dist) * force * 1.5;
        p.y -= (dy / dist) * force * 1.5;
      }

      // Dynamic alpha pulse
      const alpha = p.baseAlpha + Math.sin(frame * p.pulseSpeed + p.pulsePhase) * 0.2;

      // Draw particle glow
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 245, 155, ${Math.max(0.1, alpha)})`;
      ctx.shadowColor = 'rgba(0, 245, 155, 0.7)';
      ctx.shadowBlur = 8;
      ctx.fill();

      // Connect near neighbors with faint tech cyber lines
      for (let j = i + 1; j < nodes.length; j++) {
        const p2 = nodes[j];
        const lineDist = Math.hypot(p.x - p2.x, p.y - p2.y);
        const maxDist = 125;
        if (lineDist < maxDist) {
          const lineAlpha = (1 - lineDist / maxDist) * 0.18;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(16, 185, 129, ${lineAlpha})`;
          ctx.lineWidth = 0.9;
          ctx.shadowBlur = 0;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(render);
  };

  render();

  onUnmounted(() => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseleave', handleMouseLeave);
  });
});
</script>

<template>
  <div class="cyber-grid-canvas-wrap" aria-hidden="true">
    <!-- Isometric Deep Perspective Grid -->
    <div class="cyber-perspective-grid"></div>

    <!-- Radiant Ambient Core Glow -->
    <div class="cyber-core-glow cyber-core-glow--top"></div>
    <div class="cyber-core-glow cyber-core-glow--bottom"></div>

    <!-- Interactive Neural Constellation & Particle Matrix -->
    <canvas ref="canvasRef" class="cyber-particles-canvas"></canvas>

    <!-- Scanline Subtle Cyber Overlay -->
    <div class="cyber-scanlines"></div>
  </div>
</template>

<style scoped>
.cyber-grid-canvas-wrap {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
  background-color: var(--color-bg-navy, #040907);
}

/* Perspective Cyber Grid */
.cyber-perspective-grid {
  position: absolute;
  inset: -10%;
  width: 120%;
  height: 120%;
  background-image:
    linear-gradient(to right, rgba(0, 245, 155, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(16, 185, 129, 0.04) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(ellipse at 50% 35%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 65%, transparent 85%);
  -webkit-mask-image: radial-gradient(ellipse at 50% 35%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 65%, transparent 85%);
  animation: gridDrift 40s linear infinite;
  transform: perspective(1000px) rotateX(10deg);
  transform-origin: top center;
}

@keyframes gridDrift {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
}

/* Radiant Ambient Tech Core Glows */
.cyber-core-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  mix-blend-mode: screen;
}

.cyber-core-glow--top {
  width: 700px;
  height: 380px;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(ellipse at center, rgba(0, 245, 155, 0.22) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 75%);
  animation: pulseTopGlow 8s ease-in-out infinite alternate;
}

.cyber-core-glow--bottom {
  width: 600px;
  height: 400px;
  bottom: -150px;
  right: -50px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.16) 0%, rgba(6, 182, 212, 0.06) 60%, transparent 80%);
}

@keyframes pulseTopGlow {
  0% {
    opacity: 0.6;
    transform: translateX(-50%) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) scale(1.08);
  }
}

/* Canvas Particles */
.cyber-particles-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
}

/* Subtle Matrix Scanlines */
.cyber-scanlines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    transparent 0px,
    transparent 3px,
    rgba(0, 0, 0, 0.15) 3px,
    rgba(0, 0, 0, 0.15) 4px
  );
  opacity: 0.35;
  pointer-events: none;
  z-index: 3;
}

@media (max-width: 768px) {
  .cyber-perspective-grid {
    background-size: 36px 36px;
    transform: none;
  }
  .cyber-core-glow--top {
    width: 400px;
    height: 250px;
  }
  .cyber-core-glow--bottom {
    display: none;
  }
}
</style>
