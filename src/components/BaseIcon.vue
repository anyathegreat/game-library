<script setup>
import { computed } from "vue";
import SunIcon from "@/components/icons/SunIcon.vue";
import MoonIcon from "@/components/icons/MoonIcon.vue";

const { vColor, vSize, vWidth, vHeight, vInline, vIcon } = defineProps({
  vSize: {
    type: String,
    default: "32px",
  },
  vColor: {
    type: String,
    default: "inherit",
    validator: (value) => {
      if (value === "inherit") return true;
      if (value.length !== 7) return false;
      if (value.at(0) !== "#") return false;
      if (
        value
          .slice(1)
          .split("")
          .some((currentChar) => !"0123456789abcdefABCDEF".includes(currentChar))
      )
        return false;
      return true;
    },
  },
  vWidth: {
    type: String,
  },
  vHeight: {
    type: String,
  },
  vInline: {
    type: Boolean,
    default: false,
  },
  vIcon: {
    type: String,
    validator: (value) => ["sun", "moon"].includes(value),
  },
});

const iconClasses = computed(() => {
  return {
    "v-icon-container": true,
    "v-icon-inline": vInline,
  };
});
</script>

<template>
  <div :class="iconClasses">
    <SunIcon v-if="vIcon === 'sun'" />
    <MoonIcon v-else />
  </div>
</template>

<style scoped lang="scss">
.v-icon-container {
  width: v-bind('vWidth || vSize || "32px"');
  height: v-bind('vHeight || vSize || "32px"');

  box-sizing: border-box;

  & svg {
    color: v-bind('vColor || "inherit"');
    width: inherit;
    height: inherit;
  }

  &.v-icon-inline {
    display: inline;
  }
}
</style>
