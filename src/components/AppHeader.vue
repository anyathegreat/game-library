<script setup>
import AppNavigation from "@/components/AppNavigation.vue";
import ThemeChangeButton from "@/components/ThemeChangeButton.vue";
</script>

<template>
  <header class="v-header">
    <div class="v-header-content">
      <div class="v-header-navigation">
        <div class="v-header-logo-container">
          <img src="https://placehold.co/80" alt="" class="v-header-logo-img" />
        </div>
        <AppNavigation />
      </div>
      <div class="v-header-buttons">
        <ThemeChangeButton />
      </div>
    </div>
  </header>
</template>

<style scoped>
.v-header {
  position: sticky;
  top: 0;
  z-index: 100;

  display: flex;
  justify-content: center;

  box-shadow: 0 3px 9px 0 var(--header-shadow-color);

  width: 100%;
  height: 80px;
  background-color: var(--header-bg-color);
}

.v-header-content {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1080px;
}

.v-header-logo-container {
  padding: 8px 0;
  height: 100%;
}

.v-header-navigation {
  display: flex;
  gap: 20px;
  height: 100%;
}

.v-header-logo-img {
  height: 100%;
}
</style>
