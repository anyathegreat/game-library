<script setup>
import { computed } from "vue";

const { vBorder, vShadow } = defineProps({
  vBorder: {
    type: Boolean,
    default: true,
  },
  vShadow: {
    type: Boolean,
    default: false,
  },
});

const cardClasses = computed(() => {
  return {
    "v-card": true,
    "v-card-border": vBorder,
    "v-card-shadow": vShadow,
  };
});
</script>

<template>
  <div :class="cardClasses">
    <div class="v-card-content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.v-card {
  position: relative;
  color: var(--card-text-color);
  background-color: var(--card-bg-color);
  border-radius: 12px;
  overflow: hidden;
}
.v-card-content {
  width: 100%;
  height: 100%;
  padding: 12px;
  overflow-y: auto;
}
.v-card-border {
  border: 2px solid var(--card-border-color);
}
.v-card-shadow {
  box-shadow: 0 2px 8px 0 var(--card-shadow-color);
}
</style>
