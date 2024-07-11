<script setup>
import AppNavigation from '@/components/AppNavigation.vue'
</script>

<template>
  <header class="v-header"><AppNavigation /></header>
</template>

<style scoped>
.v-header {
  position: sticky;
  width: 100%;
  height: 80px;
  background-color: gray;
}
</style>
