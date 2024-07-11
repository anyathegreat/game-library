<script setup>
import { computed } from 'vue'

const { vSize, vColor } = defineProps({
  vSize: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl', 'inline'].includes(value)
  },
  vColor: {
    type: String,
    default: 'dark',
    validator: (value) => ['dark', 'light'].includes(value)
  }
})

const spinnerClasses = computed(() => {
  return {
    // Spinner
    'v-spinner': true,
    // Sizes
    'v-spinner-size-sm': vSize === 'sm',
    'v-spinner-size-md': vSize === 'md',
    'v-spinner-size-lg': vSize === 'lg',
    'v-spinner-size-xl': vSize === 'xl',
    'v-spinner-size-inline': vSize === 'inline',
    // Color
    'v-spinner-color-dark': vColor === 'dark',
    'v-spinner-color-light': vColor === 'light'
  }
})
</script>

<template>
  <svg :class="spinnerClasses" viewBox="0 0 50 50">
    <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="4" />
  </svg>
</template>

<style scoped lang="scss">
.v-spinner {
  animation: rotate 2s linear infinite;

  & .path {
    stroke: var(--spinnerColor);
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
}
.v-spinner-size-sm {
  width: 14px;
  height: 14px;
}
.v-spinner-size-md {
  width: 26px;
  height: 26px;
}
.v-spinner-size-lg {
  width: 38px;
  height: 38px;
}
.v-spinner-size-xl {
  width: 50px;
  height: 50px;
}
.v-spinner-size-inline {
  width: 1.2em;
  height: 1.2em;
}

.v-spinner-color-dark {
  --spinnerColor: #262626;
}
.v-spinner-color-light {
  --spinnerColor: #d9d9d9;
}
</style>
