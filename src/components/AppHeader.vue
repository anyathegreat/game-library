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
  padding: 8px;
  width: 100%;
  height: 80px;
  background-color: gray;
}

.v-header-navigation {
  display: flex;
  gap: 20px;
}

.v-header-logo-img {
  height: 100%;
}
</style>
