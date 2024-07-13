<script setup>
import { computed, defineEmits, defineProps } from 'vue'
import BaseSpinner from '@/components/BaseSpinner.vue'

const { vSize, vVariant, vType, vDisabled, vLoading } = defineProps({
  vSize: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  vVariant: {
    type: String,
    default: 'solid',
    validator: (value) => ['outline', 'solid', 'borderless', 'link', 'icon'].includes(value)
  },
  vType: {
    type: String,
    default: 'primary',
    validator: (value) =>
      ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes(value)
  },
  vDisabled: {
    type: Boolean,
    default: false
  },
  vLoading: {
    type: Boolean,
    default: false
  }
})
const buttonClasses = computed(() => {
  return {
    // Sizes
    'v-btn-size-sm': vSize === 'sm',
    'v-btn-size-md': vSize === 'md',
    'v-btn-size-lg': vSize === 'lg',
    'v-btn-size-xl': vSize === 'xl',

    // Variants
    'v-btn-variant-outline': vVariant === 'outline',
    'v-btn-variant-solid': vVariant === 'solid',
    'v-btn-variant-borderless': vVariant === 'borderless',
    'v-btn-variant-link': vVariant === 'link',
    'v-btn-variant-icon': vVariant === 'icon',

    // Types
    'v-btn-type-primary': vType === 'primary',
    'v-btn-type-secondary': vType === 'secondary',
    'v-btn-type-success': vType === 'success',
    'v-btn-type-danger': vType === 'danger',
    'v-btn-type-warning': vType === 'warning',
    'v-btn-type-info': vType === 'info',
    'v-btn-type-light': vType === 'light',
    'v-btn-type-dark': vType === 'dark',

    // Disabled
    'v-btn-disabled': vDisabled

    // Loading
  }
})
const isDisabled = computed(() => vDisabled || vLoading)
const emit = defineEmits(['click'])

function handleClick() {
  emit('click')
}
</script>

<template>
  <button class="v-btn" :class="buttonClasses" :disabled="isDisabled" @click="handleClick">
    <template v-if="vVariant === 'icon'"><slot /></template>
    <template v-else><BaseSpinner v-if="vLoading" vSize="inline" />&nbsp;<slot /></template>
  </button>
</template>

<!-- 
  --button-bg-color-primary: var(--primaryContainer);
  --button-text-color-primary: var(--onPrimaryContainer);
  --button-border-color-primary: var(--primary);
  --button-shadow-color-primary: var(--primary);

  --button-bg-color-secondary: var(--secondaryContainer);
  --button-text-color-secondary: var(--onSecondaryContainer);
  --button-border-color-secondary: var(--secondary);
  --button-shadow-color-secondary: var(--secondary);

  --button-bg-color-tertiary: var(--tertiaryContainer);
  --button-text-color-tertiary: var(--onTertiaryContainer);
  --button-border-color-tertiary: var(--tertiary);
  --button-shadow-color-tertiary: var(--tertiary);

  --button-bg-color-error: var(--errorContainer);
  --button-text-color-error: var(--onErrorContainer);
  --button-border-color-error: var(--error);
  --button-shadow-color-error: var(--error);

  --button-bg-color-disabled: var(--surfaceContainer);
  --button-text-color-disabled: var(--onSurfaceVariant);
  --button-border-color-disabled: var(--outlineVariant);
  --button-shadow-color-disabled: var(--outlineVariant);

  --button-bg-color-neutral: var(--inverseSurface);
  --button-text-color-neutral: var(--inverseOnSurface);
  --button-border-color-neutral: var(--inverseOnSurface);
  --button-shadow-color-neutral: var(--inverseOnSurface);
-->

<style scoped lang="scss">
.v-btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease;
  --primaryColor: #ffffff;
  --secondaryColor: #000000;
}

.v-btn-size-sm {
  font-size: 80%;
  padding: 0.225rem;
}
.v-btn-size-md {
  font-size: 90%;
  padding: 0.5rem;
}
.v-btn-size-lg {
  font-size: 110%;
  padding: 1rem;
}
.v-btn-size-xl {
  font-size: 120%;
  padding: 1.25rem;
}

.v-btn-type-primary {
  --primaryColor: var(--button-bg-color-primary);
  --secondaryColor: var(--button-text-color-primary);
}
.v-btn-type-secondary {
  --primaryColor: var(--button-bg-color-secondary);
  --secondaryColor: var(--button-text-color-secondary);
}
.v-btn-type-success {
  --primaryColor: #b2ffb2;
  --secondaryColor: #000000;
}
.v-btn-type-danger {
  --primaryColor: var(--button-bg-color-error);
  --secondaryColor: var(--button-text-color-error);
}
.v-btn-type-warning {
  --primaryColor: var(--button-bg-color-tertiary);
  --secondaryColor: var(--button-text-color-tertiary);
}
.v-btn-type-info {
  --primaryColor: #87cefa;
  --secondaryColor: #000000;
}
.v-btn-type-dark {
  --primaryColor: var(--button-bg-color-dark);
  --secondaryColor: var(--button-text-color-dark);
}
.v-btn-type-light {
  --primaryColor: var(--button-bg-color-light);
  --secondaryColor: var(--button-text-color-light);
}

.v-btn-variant-outline {
  background-color: transparent;
  border: 1px solid var(--primaryColor);
  color: var(--primaryColor);

  &:hover {
    background-color: var(--primaryColor);
    color: var(--secondaryColor);
  }
}
.v-btn-variant-solid {
  background-color: var(--primaryColor);
  border: 1px solid transparent;
  color: var(--secondaryColor);

  &:hover {
    background-color: color-mix(in srgb, var(--primaryColor) 80%, #000000);
  }
}
.v-btn-variant-borderless {
  background-color: transparent;
  border: 1px solid transparent;
  color: var(--primaryColor);

  &:hover {
    background-color: var(--secondaryColor);
  }
}
.v-btn-variant-link {
  padding: 0;
  background-color: transparent;
  border: 1px solid transparent;
  color: var(--primaryColor);

  &:hover {
    text-decoration: underline;
  }
}
.v-btn-variant-icon {
  padding: 2px;
  background-color: var(--primaryColor);
  border: 1px solid transparent;
  color: var(--secondaryColor);

  &:hover {
    background-color: color-mix(in srgb, var(--primaryColor) 80%, #000000);
  }
}

.v-btn-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
