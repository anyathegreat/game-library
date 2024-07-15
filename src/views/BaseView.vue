<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import BasePage from "@/components/BasePage.vue";
</script>

<template>
  <div class="v-container">
    <AppHeader />
    <div class="v-content">
      <BasePage />
    </div>
    <AppFooter />
  </div>
</template>

<style scoped>
.v-content {
  flex-grow: 1;
  width: 100%;
  max-width: 1080px;
  /* height: calc(100% - 160px); */
  /* min-height: calc(100% - 160px); */
}
.v-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: max-content;
  min-height: 100dvh;
}
</style>
