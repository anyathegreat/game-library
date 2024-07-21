<script setup>
import { computed } from "vue";

const { vBorder, vShadow, vOverflow } = defineProps({
  vBorder: {
    type: Boolean,
    default: true,
  },
  vShadow: {
    type: Boolean,
    default: false,
  },
  vOverflow: {
    type: String,
    default: "auto",
    validator: (value) => ["auto", "scroll", "hidden"].includes(value),
  },
});

const cardClasses = computed(() => {
  return {
    "v-card": true,
    "v-card-border": vBorder,
    "v-card-shadow": vShadow,
  };
});
const contentClasses = computed(() => {
  return {
    "v-card-content": true,
    "v-card-overflow-auto": vOverflow === "auto",
    "v-card-overflow-scroll": vOverflow === "scroll",
    "v-card-overflow-hidden": vOverflow === "hidden",
  };
});
</script>

<template>
  <div :class="cardClasses">
    <div :class="contentClasses">
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
  overflow-y: auto;
}
.v-card-border {
  border: 2px solid var(--card-border-color);
}
.v-card-shadow {
  box-shadow: 0 2px 8px 0 var(--card-shadow-color);
}

.v-card-overflow-auto {
  overflow-y: auto;
}
.v-card-overflow-scroll {
  overflow-y: scroll;
}
.v-card-overflow-hidden {
  overflow-y: hidden;
}
</style>
