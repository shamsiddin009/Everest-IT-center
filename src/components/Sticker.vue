<script setup>
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: [String, Number],
    default: 'md' // 'xs', 'sm', 'md', 'lg', 'xl' or number
  },
  variant: {
    type: String,
    default: 'badge' // 'badge', 'flat', 'glow'
  }
});

// Map unicode emojis to sticker IDs
const emojiMap = {
  '💻': 'code',
  '🐍': 'python',
  '🇬🇧': 'english',
  '🎯': 'target',
  '📐': 'math',
  '🖥️': 'pc',
  '⚡': 'lightning',
  '🏔️': 'mountain',
  '🤝': 'handshake',
  '📜': 'certificate',
  '💼': 'briefcase',
  '🎓': 'grad',
  '📅': 'calendar',
  '⏰': 'clock',
  '📍': 'pin',
  '📞': 'phone',
  '✉️': 'email',
  '💬': 'chat',
  '✈️': 'telegram',
  '🏛️': 'building',
  '🎁': 'gift',
  '📑': 'docs',
  '✨': 'sparkles',
  '☕': 'coffee',
  '🚀': 'rocket',
  '💡': 'lightbulb',
  '📚': 'books',
  '📶': 'wifi',
  '🌅': 'morning',
  '☀️': 'sun',
  '🌙': 'moon',
  '👋': 'wave',
  '⚙️': 'gear',
  '📂': 'folder',
  '🏫': 'school',
  '🚇': 'metro',
  '🎉': 'party',
  '❓': 'question',
  '⚠️': 'warning',
  '🔍': 'search',
  'ℹ️': 'info',
  '★': 'star'
};

const normalizedId = computed(() => {
  return emojiMap[props.name] || props.name;
});

const sizeClass = computed(() => {
  if (typeof props.size === 'number') return '';
  return `sticker--${props.size}`;
});

const customStyle = computed(() => {
  if (typeof props.size === 'number') {
    return {
      width: `${props.size}px`,
      height: `${props.size}px`
    };
  }
  return {};
});
</script>

<template>
  <span
    class="ui-sticker"
    :class="[sizeClass, `sticker-${normalizedId}`, `sticker-variant--${variant}`]"
    :style="customStyle"
    role="img"
    :aria-label="normalizedId"
  >
    <!-- Code / Frontend -->
    <svg v-if="normalizedId === 'code'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
      <line x1="14" y1="4" x2="10" y2="20"></line>
    </svg>

    <!-- Python / Backend -->
    <svg v-else-if="normalizedId === 'python'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2C8.5 2 7 3.5 7 5.5V8h5v2H5.5C3.5 10 2 11.5 2 15s1.5 5 4 5h2v-2.5c0-2 1.5-3.5 3.5-3.5h5c1.5 0 2.5-1 2.5-2.5V8c0-3.5-2.5-6-7-6z"/>
      <circle cx="9.5" cy="5.5" r="1" fill="currentColor"/>
      <path d="M12 22c3.5 0 5-1.5 5-3.5V16h-5v-2h6.5c2 0 3.5-1.5 3.5-5s-1.5-5-4-5h-2v2.5c0 2-1.5 3.5-3.5 3.5h-5C6 10 5 11 5 12.5V16c0 3.5 2.5 6 7 6z"/>
      <circle cx="14.5" cy="18.5" r="1" fill="currentColor"/>
    </svg>

    <!-- English / Global -->
    <svg v-else-if="normalizedId === 'english'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>

    <!-- Target / IELTS -->
    <svg v-else-if="normalizedId === 'target'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
    </svg>

    <!-- Math / Geometry -->
    <svg v-else-if="normalizedId === 'math'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 21h18L12 3z"/>
      <line x1="12" y1="15" x2="12" y2="17"/>
      <line x1="15" y1="18" x2="17" y2="18"/>
    </svg>

    <!-- PC / Monitor -->
    <svg v-else-if="normalizedId === 'pc'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>

    <!-- Lightning / Speed -->
    <svg v-else-if="normalizedId === 'lightning'" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>

    <!-- Mountain -->
    <svg v-else-if="normalizedId === 'mountain'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 3l4 8 5-5 5 15H2L8 3z"/>
    </svg>

    <!-- Handshake / Support -->
    <svg v-else-if="normalizedId === 'handshake'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11 15l-3-3 4-4 3 3"/>
      <path d="M18 10l-4 4"/>
      <path d="M17 14l3 3-2 2-3-3"/>
      <path d="M7 10L4 7l2-2 3 3"/>
      <path d="M9 13l-4 4 2 2 3-3"/>
    </svg>

    <!-- Certificate / Scroll -->
    <svg v-else-if="normalizedId === 'certificate'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2"></rect>
      <line x1="7" y1="8" x2="17" y2="8"></line>
      <line x1="7" y1="12" x2="13" y2="12"></line>
      <circle cx="16" cy="15" r="2" fill="currentColor"></circle>
    </svg>

    <!-- Briefcase / Career -->
    <svg v-else-if="normalizedId === 'briefcase'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>

    <!-- Graduate / Education -->
    <svg v-else-if="normalizedId === 'grad'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>

    <!-- Star -->
    <svg v-else-if="normalizedId === 'star'" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>

    <!-- Calendar -->
    <svg v-else-if="normalizedId === 'calendar'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>

    <!-- Clock / Time -->
    <svg v-else-if="normalizedId === 'clock'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>

    <!-- Location Pin -->
    <svg v-else-if="normalizedId === 'pin'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3" fill="currentColor"></circle>
    </svg>

    <!-- Phone -->
    <svg v-else-if="normalizedId === 'phone'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>

    <!-- Email -->
    <svg v-else-if="normalizedId === 'email'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>

    <!-- Chat / Message -->
    <svg v-else-if="normalizedId === 'chat'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>

    <!-- Telegram -->
    <svg v-else-if="normalizedId === 'telegram'" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
    </svg>

    <!-- Building / Official -->
    <svg v-else-if="normalizedId === 'building'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="2" y1="20" x2="22" y2="20"></line>
      <polyline points="4 20 4 7 12 3 20 7 20 20"></polyline>
      <line x1="9" y1="20" x2="9" y2="12"></line>
      <line x1="15" y1="20" x2="15" y2="12"></line>
    </svg>

    <!-- Gift -->
    <svg v-else-if="normalizedId === 'gift'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 12 20 22 4 22 4 12"></polyline>
      <rect x="2" y="7" width="20" height="5"></rect>
      <line x1="12" y1="22" x2="12" y2="7"></line>
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
    </svg>

    <!-- Docs -->
    <svg v-else-if="normalizedId === 'docs'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
    </svg>

    <!-- Sparkles -->
    <svg v-else-if="normalizedId === 'sparkles'" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 5.6L20 10l-5.6 2.4L12 18l-2.4-5.6L4 10l5.6-2.4L12 2z"/>
      <path d="M19 16l1.2 2.8L23 20l-2.8 1.2L19 24l-1.2-2.8L15 20l2.8-1.2L19 16z"/>
    </svg>

    <!-- Rocket -->
    <svg v-else-if="normalizedId === 'rocket'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
    </svg>

    <!-- Lightbulb -->
    <svg v-else-if="normalizedId === 'lightbulb'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 18h6"></path>
      <path d="M10 22h4"></path>
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5h6.18z"></path>
    </svg>

    <!-- Books -->
    <svg v-else-if="normalizedId === 'books'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>

    <!-- Coffee -->
    <svg v-else-if="normalizedId === 'coffee'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
      <line x1="6" y1="1" x2="6" y2="4"></line>
      <line x1="10" y1="1" x2="10" y2="4"></line>
      <line x1="14" y1="1" x2="14" y2="4"></line>
    </svg>

    <!-- Wifi -->
    <svg v-else-if="normalizedId === 'wifi'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
      <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
      <line x1="12" y1="20" x2="12.01" y2="20"></line>
    </svg>

    <!-- Morning Sun -->
    <svg v-else-if="normalizedId === 'morning'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      <circle cx="12" cy="12" r="4" fill="currentColor"/>
    </svg>

    <!-- Sun -->
    <svg v-else-if="normalizedId === 'sun'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5" fill="currentColor"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>

    <!-- Moon -->
    <svg v-else-if="normalizedId === 'moon'" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>

    <!-- Wave Hand -->
    <svg v-else-if="normalizedId === 'wave'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v3"/>
      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6"/>
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/>
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
    </svg>

    <!-- Check -->
    <svg v-else-if="normalizedId === 'check'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>

    <!-- Info -->
    <svg v-else-if="normalizedId === 'info'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>

    <!-- Question -->
    <svg v-else-if="normalizedId === 'question'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>

    <!-- Warning -->
    <svg v-else-if="normalizedId === 'warning'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>

    <!-- Search -->
    <svg v-else-if="normalizedId === 'search'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>

    <!-- Default Fallback Sticker Icon -->
    <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  </span>
</template>

<style scoped>
.ui-sticker {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  vertical-align: middle;
  border-radius: 10px;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
  line-height: 1;
}

.ui-sticker svg {
  width: 60%;
  height: 60%;
  display: block;
}

/* Sizes */
.sticker--xs {
  width: 18px;
  height: 18px;
  border-radius: 6px;
}
.sticker--xs svg {
  width: 70%;
  height: 70%;
}

.sticker--sm {
  width: 24px;
  height: 24px;
  border-radius: 7px;
}

.sticker--md {
  width: 32px;
  height: 32px;
  border-radius: 10px;
}

.sticker--lg {
  width: 44px;
  height: 44px;
  border-radius: 14px;
}

.sticker--xl {
  width: 58px;
  height: 58px;
  border-radius: 18px;
}

/* Badge Variant Styles with 3D Glossy Aesthetics */
.sticker-variant--badge {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.1) 100%);
  border: 1px solid rgba(16, 185, 129, 0.35);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2);
  color: #34D399;
}

.sticker-variant--badge:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 8px 18px rgba(16, 185, 129, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

/* Individual Sticker Theming */
.sticker-code, .sticker-python {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(5, 150, 105, 0.15) 100%);
  border-color: rgba(16, 185, 129, 0.45);
  color: #00F59B;
}

.sticker-english {
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.2) 0%, rgba(14, 165, 233, 0.1) 100%);
  border-color: rgba(56, 189, 248, 0.4);
  color: #38BDF8;
}

.sticker-target {
  background: linear-gradient(135deg, rgba(244, 63, 94, 0.2) 0%, rgba(225, 29, 72, 0.1) 100%);
  border-color: rgba(244, 63, 94, 0.4);
  color: #FB7185;
}

.sticker-math {
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(147, 51, 234, 0.1) 100%);
  border-color: rgba(168, 85, 247, 0.4);
  color: #C084FC;
}

.sticker-pc {
  background: linear-gradient(135deg, rgba(20, 184, 166, 0.2) 0%, rgba(13, 148, 136, 0.1) 100%);
  border-color: rgba(20, 184, 166, 0.4);
  color: #2DD4BF;
}

.sticker-star {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(217, 119, 6, 0.1) 100%);
  border-color: rgba(245, 158, 11, 0.45);
  color: #FBBF24;
}

.sticker-lightning {
  background: linear-gradient(135deg, rgba(234, 179, 8, 0.25) 0%, rgba(202, 138, 4, 0.15) 100%);
  border-color: rgba(234, 179, 8, 0.45);
  color: #FACC15;
}

.sticker-telegram {
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  border-color: rgba(255, 255, 255, 0.3);
  color: #FFFFFF;
}

.sticker-gift {
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(219, 39, 119, 0.1) 100%);
  border-color: rgba(236, 72, 153, 0.4);
  color: #F472B6;
}

.sticker-sparkles {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(0, 245, 155, 0.1) 100%);
  border-color: rgba(16, 185, 129, 0.4);
  color: #00F59B;
}

.sticker-variant--flat {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}
.sticker-variant--flat svg {
  width: 100%;
  height: 100%;
}
</style>
