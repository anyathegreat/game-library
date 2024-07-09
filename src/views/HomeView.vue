<script setup>
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <h1>Hello world?</h1>
  <div class="card">
    <BaseButton vSize="md" vVariant="solid" vType="dark">Нажми меня</BaseButton>
  </div>
</template>

<style scoped>
.card {
  width: 500px;
  height: 500px;
  background-color: white;
}
</style>
