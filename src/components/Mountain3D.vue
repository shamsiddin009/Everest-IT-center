<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const canvasRef = ref(null);
let animationFrameId = null;

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = canvas.parentElement.clientWidth;
  let height = canvas.height = canvas.parentElement.clientHeight;

  const handleResize = () => {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.clientWidth;
    height = canvas.height = canvas.parentElement.clientHeight;
    initNodes();
  };

  window.addEventListener('resize', handleResize);

  // Mouse interaction
  let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
  const onMouseMove = (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.targetX = e.clientX - rect.left;
    mouse.targetY = e.clientY - rect.top;
  };
  window.addEventListener('mousemove', onMouseMove);

  // Mountain nodes generator
  let nodes = [];
  const initNodes = () => {
    nodes = [];
    const peakX = width * 0.5;
    const peakY = height * 0.22;

    // Peak tip
    nodes.push({ x: peakX, y: peakY, baseZ: 1.2, isPeak: true });

    // Ridge points
    const rows = 6;
    for (let r = 1; r <= rows; r++) {
      const rowY = peakY + (height * 0.72 - peakY) * (r / rows);
      const spread = (width * 0.42) * (r / rows);
      const pointsInRow = r * 2 + 1;
      
      for (let p = 0; p < pointsInRow; p++) {
        const offset = -spread + (spread * 2) * (p / (pointsInRow - 1 || 1));
        const jitter = (Math.random() - 0.5) * 20;
        nodes.push({
          x: peakX + offset + jitter,
          y: rowY + (Math.random() - 0.5) * 15,
          baseZ: 1 - (r / rows) * 0.5,
          isPeak: false
        });
      }
    }
  };

  initNodes();

  // Check user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Floating ambient particles
  const particles = Array.from({ length: 35 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 2 + 0.8,
    speedY: Math.random() * 0.6 + 0.2,
    opacity: Math.random() * 0.5 + 0.2
  }));

  // Render loop
  const render = () => {
    ctx.clearRect(0, 0, width, height);

    if (!prefersReducedMotion) {
      // Smooth mouse damping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;
    }

    const tiltX = prefersReducedMotion ? 0 : (mouse.x - width / 2) * 0.04;
    const tiltY = prefersReducedMotion ? 0 : (mouse.y - height / 2) * 0.04;

    // Draw ambient floating stardust
    ctx.fillStyle = '#34D399';
    particles.forEach(p => {
      if (!prefersReducedMotion) {
        p.y -= p.speedY;
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
      }
      ctx.globalAlpha = p.opacity;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw interconnected 3D low-poly wireframe mountain
    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      const ax = a.x + tiltX * a.baseZ;
      const ay = a.y + tiltY * a.baseZ;

      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const bx = b.x + tiltX * b.baseZ;
        const by = b.y + tiltY * b.baseZ;

        const dist = Math.hypot(ax - bx, ay - by);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.strokeStyle = `rgba(16, 185, 129, ${0.45 * (1 - dist / 110)})`;
          ctx.stroke();
        }
      }

      // Draw node glow points
      ctx.globalAlpha = a.isPeak ? 1 : 0.6;
      ctx.beginPath();
      ctx.arc(ax, ay, a.isPeak ? 4.5 : 2, 0, Math.PI * 2);
      ctx.fillStyle = a.isPeak ? '#00F59B' : '#FFFFFF';
      ctx.shadowBlur = a.isPeak ? 16 : 6;
      ctx.shadowColor = '#10B981';
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    if (!prefersReducedMotion && isVisible) {
      animationFrameId = requestAnimationFrame(render);
    } else {
      animationFrameId = null;
    }
  };

  let isVisible = true;
  const observer = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;
    if (isVisible && !animationFrameId && !prefersReducedMotion) {
      animationFrameId = requestAnimationFrame(render);
    }
  }, { threshold: 0.05 });

  observer.observe(canvas);
  render();

  onUnmounted(() => {
    observer.disconnect();
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('mousemove', onMouseMove);
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
  });
});
</script>

<template>
  <div class="mountain-canvas-container">
    <canvas ref="canvasRef" class="mountain-canvas" aria-hidden="true"></canvas>
    <div class="canvas-vignette"></div>
  </div>
</template>

<style scoped>
.mountain-canvas-container {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.mountain-canvas {
  width: 100%;
  height: 100%;
  display: block;
}

.canvas-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 40%, transparent 20%, rgba(8, 15, 26, 0.8) 75%, var(--color-bg-navy) 100%);
}
</style>
