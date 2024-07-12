<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

onMounted(() => {
  document.body.setAttribute('data-theme', localStorage.getItem('theme') || 'light')
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
