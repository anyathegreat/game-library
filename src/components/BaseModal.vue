<script setup>
import { computed } from "vue";

const { vFullscreen } = defineProps({
  vFullscreen: {
    type: Boolean,
    default: false,
  },
});

const modalClasses = computed(() => {
  return {
    "v-modal-overlay": true,
    "v-modal-overlay-fullscreen": vFullscreen,
  };
});
</script>

<template>
  <div :class="modalClasses">
    <div class="v-modal">
      <slot name="header"></slot>
      <slot name="content"></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.v-modal-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.v-modal-overlay-fullscreen {
  position: fixed;
  z-index: 4000;
  width: 100dvw;
  height: 100dvh;
}
.v-modal {
  width: 300px;
  overflow: hidden;
  background-color: var(--surface);
  border-radius: 8px;
}
</style>
