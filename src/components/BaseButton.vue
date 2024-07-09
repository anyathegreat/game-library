<script setup>
import { computed } from 'vue'

const { vSize, vVariant, vType } = defineProps({
  vSize: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  vVariant: {
    type: String,
    default: 'solid',
    validator: (value) => ['outline', 'solid', 'borderless', 'link'].includes(value)
  },
  vType: {
    type: String,
    default: 'primary',
    validator: (value) =>
      ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes(value)
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
    // Types
    'v-btn-type-primary': vType === 'primary',
    'v-btn-type-secondary': vType === 'secondary',
    'v-btn-type-success': vType === 'success',
    'v-btn-type-danger': vType === 'danger',
    'v-btn-type-warning': vType === 'warning',
    'v-btn-type-info': vType === 'info',
    'v-btn-type-light': vType === 'light',
    'v-btn-type-dark': vType === 'dark'
    // TODO:Loading,Disabled,click
  }
})
</script>

<template>
  <button class="v-btn" :class="buttonClasses"><slot /></button>
</template>

<style scoped lang="scss">
.v-btn {
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
  --primaryColor: #add8e6;
  --secondaryColor: #000000;
}
.v-btn-type-secondary {
  --primaryColor: #ffc67d;
  --secondaryColor: #000000;
}
.v-btn-type-success {
  --primaryColor: #b2fffc;
  --secondaryColor: #000000;
}
.v-btn-type-danger {
  --primaryColor: #ffa07a;
  --secondaryColor: #000000;
}
.v-btn-type-warning {
  --primaryColor: #ffffe0;
  --secondaryColor: #000000;
}
.v-btn-type-info {
  --primaryColor: #87cefa;
  --secondaryColor: #000000;
}
.v-btn-type-light {
  --primaryColor: #e5e5ea;
  --secondaryColor: #000000;
}
.v-btn-type-dark {
  --primaryColor: #4d4d4d;
  --secondaryColor: #afafaf;
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
</style>
