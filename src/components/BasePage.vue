<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <aside class="v-sidebar"></aside>
  <main class="v-page"><RouterView /></main>
</template>

<style scoped>
.v-page {
  flex: 10;
  height: 100%;
  background-color: black;
}
.v-sidebar {
  flex: 2;
  height: 100%;
  background-color: palevioletred;
}
</style>
