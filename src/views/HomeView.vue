<script setup>
import BaseCounter from '@/components/BaseCounter.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <h1>Hello world?</h1>
  <BaseCounter />
  <RouterLink to="/todo">to do List</RouterLink>
</template>

<style scoped></style>
