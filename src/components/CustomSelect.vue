<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import Sticker from './Sticker.vue';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  options: {
    type: Array,
    required: true,
    // Can be array of strings or array of { value, label, icon?, desc?, badge? }
  },
  placeholder: {
    type: String,
    default: 'Tanlang...'
  },
  id: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue', 'change']);

const isOpen = ref(false);
const dropdownRef = ref(null);
const listboxRef = ref(null);
const highlightedIndex = ref(-1);

// Normalize options to object format
const normalizedOptions = computed(() => {
  return props.options.map(opt => {
    if (typeof opt === 'object' && opt !== null) {
      return {
        value: opt.value ?? opt.label,
        label: opt.label ?? opt.value,
        icon: opt.icon || null,
        desc: opt.desc || null,
        badge: opt.badge || null
      };
    }
    return {
      value: opt,
      label: opt,
      icon: null,
      desc: null,
      badge: null
    };
  });
});

// Currently selected option
const selectedOption = computed(() => {
  return normalizedOptions.value.find(opt => opt.value === props.modelValue) || null;
});

const toggleDropdown = () => {
  if (props.disabled) return;
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    const idx = normalizedOptions.value.findIndex(opt => opt.value === props.modelValue);
    highlightedIndex.value = idx >= 0 ? idx : 0;
    nextTick(() => {
      scrollToHighlighted();
    });
  }
};

const closeDropdown = () => {
  isOpen.value = false;
  highlightedIndex.value = -1;
};

const selectOption = (opt) => {
  if (props.disabled) return;
  emit('update:modelValue', opt.value);
  emit('change', opt.value);
  closeDropdown();
};

const handleKeyDown = (e) => {
  if (props.disabled) return;

  if (!isOpen.value) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      toggleDropdown();
    }
    return;
  }

  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault();
      highlightedIndex.value = (highlightedIndex.value + 1) % normalizedOptions.value.length;
      scrollToHighlighted();
      break;
    case 'ArrowUp':
      e.preventDefault();
      highlightedIndex.value = (highlightedIndex.value - 1 + normalizedOptions.value.length) % normalizedOptions.value.length;
      scrollToHighlighted();
      break;
    case 'Enter':
    case ' ':
      e.preventDefault();
      if (highlightedIndex.value >= 0 && highlightedIndex.value < normalizedOptions.value.length) {
        selectOption(normalizedOptions.value[highlightedIndex.value]);
      }
      break;
    case 'Escape':
    case 'Tab':
      closeDropdown();
      break;
  }
};

const scrollToHighlighted = () => {
  if (!listboxRef.value) return;
  const items = listboxRef.value.querySelectorAll('.custom-select-option');
  if (items[highlightedIndex.value]) {
    items[highlightedIndex.value].scrollIntoView({ block: 'nearest' });
  }
};

const handleClickOutside = (e) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    closeDropdown();
  }
};

onMounted(() => {
  document.addEventListener('pointerdown', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('pointerdown', handleClickOutside);
});
</script>

<template>
  <div
    ref="dropdownRef"
    class="custom-select-container"
    :class="{ 'is-open': isOpen, 'is-disabled': disabled, 'has-error': error }"
    @keydown="handleKeyDown"
  >
    <!-- Trigger Button -->
    <button
      :id="id"
      type="button"
      class="custom-select-trigger"
      :aria-haspopup="'listbox'"
      :aria-expanded="isOpen"
      :disabled="disabled"
      @click="toggleDropdown"
    >
      <div class="trigger-content">
        <Sticker v-if="selectedOption?.icon" :name="selectedOption.icon" size="sm" class="option-icon-preview" />
        <span v-if="selectedOption" class="selected-text">
          {{ selectedOption.label }}
        </span>
        <span v-else class="placeholder-text">
          {{ placeholder }}
        </span>
      </div>

      <div class="trigger-arrow" :class="{ 'rotate': isOpen }">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 8 10 12 14 8"></polyline>
        </svg>
      </div>
    </button>

    <!-- Dropdown Menu -->
    <transition name="select-dropdown">
      <div
        v-if="isOpen"
        ref="listboxRef"
        class="custom-select-menu"
        role="listbox"
        :aria-labelledby="id"
        tabindex="-1"
      >
        <div
          v-for="(opt, idx) in normalizedOptions"
          :key="opt.value"
          role="option"
          :aria-selected="opt.value === modelValue"
          class="custom-select-option"
          :class="{
            'is-selected': opt.value === modelValue,
            'is-highlighted': idx === highlightedIndex
          }"
          @click="selectOption(opt)"
          @mouseenter="highlightedIndex = idx"
        >
          <div class="option-content">
            <Sticker v-if="opt.icon" :name="opt.icon" size="sm" class="option-icon" />
            <div class="option-text-group">
              <span class="option-label">{{ opt.label }}</span>
              <span v-if="opt.desc" class="option-desc">{{ opt.desc }}</span>
            </div>
            <span v-if="opt.badge" class="option-badge">{{ opt.badge }}</span>
          </div>

          <div v-if="opt.value === modelValue" class="option-check">
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="4 10 8 14 16 6"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.custom-select-container {
  position: relative;
  width: 100%;
  user-select: none;
}

.custom-select-container.is-open {
  z-index: 100;
}

/* Trigger */
.custom-select-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.85rem 1.1rem;
  background: rgba(13, 23, 48, 0.75);
  border: 1px solid var(--color-border-subtle, #253454);
  border-radius: var(--radius-md, 14px);
  color: #fff;
  font-family: var(--font-sans, inherit);
  font-size: 0.92rem;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  outline: none;
  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.custom-select-trigger:hover:not(:disabled) {
  border-color: rgba(16, 185, 129, 0.6);
  background: rgba(14, 38, 30, 0.85);
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.15);
}

.custom-select-container.is-open .custom-select-trigger,
.custom-select-trigger:focus-visible {
  border-color: var(--color-green-primary, #10B981);
  background: rgba(14, 38, 30, 0.98);
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.25), 0 6px 20px rgba(0, 0, 0, 0.4);
}

.custom-select-container.has-error .custom-select-trigger {
  border-color: var(--color-rose, #F43F5E);
  box-shadow: 0 0 0 3px rgba(244, 63, 94, 0.2);
}

.custom-select-container.is-disabled .custom-select-trigger {
  opacity: 0.5;
  cursor: not-allowed;
  filter: grayscale(0.5);
}

.trigger-content {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.option-icon-preview {
  font-size: 1.15rem;
  line-height: 1;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.selected-text {
  color: #fff;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.placeholder-text {
  color: var(--color-text-dim, #637A71);
}

.trigger-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-green-primary, #10B981);
  flex-shrink: 0;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s;
}

.trigger-arrow svg {
  width: 17px;
  height: 17px;
}

.trigger-arrow.rotate {
  transform: rotate(180deg);
  color: var(--color-green-light, #34D399);
}

/* Dropdown Menu Popup */
.custom-select-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  min-width: 260px;
  max-height: 280px;
  overflow-y: auto;
  overflow-x: hidden;
  background: rgba(8, 22, 17, 0.98);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(16, 185, 129, 0.35);
  border-radius: var(--radius-md, 14px);
  box-shadow:
    0 20px 45px rgba(0, 0, 0, 0.8),
    0 0 25px rgba(16, 185, 129, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  padding: 6px;
  z-index: 1050;
  outline: none;
  scrollbar-width: thin;
  scrollbar-color: rgba(16, 185, 129, 0.4) transparent;
}

.custom-select-menu::-webkit-scrollbar {
  width: 5px;
}

.custom-select-menu::-webkit-scrollbar-track {
  background: transparent;
}

.custom-select-menu::-webkit-scrollbar-thumb {
  background: rgba(16, 185, 129, 0.35);
  border-radius: 10px;
}

.custom-select-menu::-webkit-scrollbar-thumb:hover {
  background: rgba(16, 185, 129, 0.6);
}

/* Option */
.custom-select-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem 0.95rem;
  border-radius: 10px;
  cursor: pointer;
  color: var(--color-text-secondary, #D1FAE5);
  font-size: 0.9rem;
  transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  margin-bottom: 3px;
}

.custom-select-option:last-child {
  margin-bottom: 0;
}

.custom-select-option:hover,
.custom-select-option.is-highlighted {
  background: rgba(16, 185, 129, 0.16);
  color: #fff;
  transform: translateX(3px);
}

.custom-select-option.is-selected {
  background: linear-gradient(90deg, rgba(16, 185, 129, 0.32) 0%, rgba(52, 211, 153, 0.18) 100%);
  color: #fff;
  font-weight: 600;
  border: 1px solid rgba(16, 185, 129, 0.4);
  box-shadow: inset 0 0 12px rgba(16, 185, 129, 0.15);
}

.custom-select-option.is-selected .option-label {
  color: #fff;
  text-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
}

.option-content {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  flex: 1;
  min-width: 0;
}

.option-icon {
  font-size: 1.15rem;
  line-height: 1;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.option-text-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.option-label {
  line-height: 1.35;
  white-space: normal;
  word-break: break-word;
}

.option-desc {
  font-size: 0.75rem;
  color: var(--color-text-dim, #627191);
}

.option-badge {
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 999px;
  background: rgba(101, 91, 255, 0.25);
  color: var(--color-cyan-light, #5CE1F5);
  border: 1px solid rgba(101, 91, 255, 0.4);
  flex-shrink: 0;
}

.option-check {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-green-neon, #00F59B);
  flex-shrink: 0;
  filter: drop-shadow(0 0 6px rgba(0, 245, 155, 0.6));
}

.option-check svg {
  width: 17px;
  height: 17px;
}

/* Animations */
.select-dropdown-enter-active,
.select-dropdown-leave-active {
  transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.select-dropdown-enter-from,
.select-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.98);
}
</style>
