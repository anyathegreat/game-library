<script setup></script>

<template>
  <nav class="v-nav">
    <RouterLink class="v-nav-item" to="/">Home</RouterLink>
    <RouterLink class="v-nav-item" to="/game-details">Game Details</RouterLink>
    <RouterLink class="v-nav-item" to="/games-catalog">Catalog</RouterLink>
    <RouterLink class="v-nav-item" to="/cats-gallery">Cats Gallery</RouterLink>
    <RouterLink class="v-nav-item" to="/dogs-gallery">Dogs Gallery</RouterLink>
    <RouterLink class="v-nav-item" to="/user-settings">Settings</RouterLink>
  </nav>
</template>

<style scoped>
.v-nav {
  display: flex;
  gap: 12px;
  align-items: center;
}

.v-nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  height: 40px;
  min-width: 80px;
  padding: 4px;
  border: 2px solid var(--header-text-color);
  text-decoration: none;
  color: var(--header-text-color);
}
</style>
