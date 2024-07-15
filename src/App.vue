<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { storeToRefs } from "pinia";
import { useUserSettingsStore } from "./store/userSettings";

const userSettingsStore = useUserSettingsStore();
const { theme } = storeToRefs(userSettingsStore);

onMounted(() => {
  document.body.setAttribute("data-theme", theme.value);
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
