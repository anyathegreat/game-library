<script setup>
import BaseButton from '@/components/BaseButton.vue'
import { ref } from 'vue'

const isSended = ref(false)

function send() {
  isSended.value = true

  setTimeout(() => {
    isSended.value = false
  }, 5000)
}
</script>

<template>
  <h1>Hello world?</h1>
  <div class="card">
    <BaseButton vSize="sm" vVariant="solid" vType="primary" @click="send" :vLoading="isSended">Нажми меня</BaseButton>
  </div>
</template>

<style scoped>
.card {
  width: 500px;
  height: 500px;
  background-color: white;
}
</style>
