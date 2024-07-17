<script setup>
import { storeToRefs } from "pinia";

import BaseButton from "@/components/BaseButton.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import { useUserSettingsStore } from "@/store/userSettings";
import { THEME_KEYS } from "@/variables";

const userSettingsStore = useUserSettingsStore();
const { theme } = storeToRefs(userSettingsStore);
const { changeTheme } = userSettingsStore;

function toggleTheme() {
  if (theme.value === THEME_KEYS.dark) {
    changeTheme(THEME_KEYS.light, false);
  } else {
    changeTheme(THEME_KEYS.dark, false);
  }
}
</script>

<template>
  <BaseButton vVariant="icon" vType="secondary" vSize="lg" @click="toggleTheme">
    <BaseIcon v-if="theme === THEME_KEYS.dark" vInline vIcon="moon" vSize="2em" />
    <BaseIcon v-else vInline vIcon="sun" vSize="2em" />
  </BaseButton>
  <!-- <BaseButton v-else vVariant="icon" vType="light" vSize="lg" @click="toggleTheme">
    <BaseIcon vIcon="sun" vSize="2em" vInline />
  </BaseButton> -->
</template>

<style scoped></style>
