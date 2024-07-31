<script setup>
import { computed, ref } from "vue";

const zoom = ref(false);
const emit = defineEmits(["close"]);

const { vFullscreen, vBackdrop } = defineProps({
  vFullscreen: {
    type: Boolean,
    default: false,
  },
  vBackdrop: {
    type: Boolean,
    default: false,
  },
});

const overlayClasses = computed(() => {
  return {
    "v-modal-overlay": true,
    "v-modal-overlay-fullscreen": vFullscreen,
  };
});

const modalClasses = computed(() => {
  return {
    "v-modal": true,
    zoom: zoom.value,
  };
});

function handleClose(event) {
  if (!vBackdrop) {
    emit("close");
  } else {
    if (event.target === event.currentTarget) {
      zoom.value = true;

      setTimeout(() => {
        zoom.value = false;
      }, 300);
    }
  }
}
</script>

<template>
  <div :class="overlayClasses" @click="handleClose">
    <div :class="modalClasses">
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

.zoom {
  animation: zoom 0.3s;
}

@keyframes zoom {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.01);
  }
  100% {
    transform: scale(1);
  }
}
</style>
