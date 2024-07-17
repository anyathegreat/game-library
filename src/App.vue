<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { storeToRefs } from "pinia";
import { useUserSettingsStore } from "./store/userSettings";

const userSettingsStore = useUserSettingsStore();
const { theme, fontSize } = storeToRefs(userSettingsStore);

onMounted(() => {
  document.body.setAttribute("data-theme", theme.value);
  document.documentElement.classList.add("font-size-" + fontSize.value);
});
</script>

<template>
  <RouterView />
  <notifications position="top right" />
</template>

<style scoped></style>
