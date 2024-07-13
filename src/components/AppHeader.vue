<script setup>
import AppNavigation from '@/components/AppNavigation.vue'
import ThemeChangeButton from '@/components/ThemeChangeButton.vue'
</script>

<template>
  <header class="v-header">
    <div class="v-header-navigation">
      <div class="v-header-logo-container">
        <img src="https://placehold.co/80" alt="" class="v-header-logo-img" />
      </div>
      <AppNavigation />
    </div>
    <div class="v-header-buttons">
      <ThemeChangeButton />
    </div>
  </header>
</template>

<style scoped>
.v-header {
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 3px 9px 0 var(--header-shadow-color);
  padding: 8px;
  width: 100%;
  height: 80px;
  background-color: var(--header-bg-color);
}

.v-header-navigation {
  display: flex;
  gap: 20px;
}

.v-header-logo-img {
  height: 100%;
}
</style>
