<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseIcon from '@/components/BaseIcon.vue'

const currentTheme = ref(localStorage.getItem('theme') || 'light')

function toggleTheme() {
  if (currentTheme.value === 'dark') {
    currentTheme.value = 'light'
    document.body.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  } else {
    currentTheme.value = 'dark'
    document.body.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  }
}
</script>

<template>
  <BaseButton v-if="currentTheme === 'dark'" vVariant="icon" vType="dark" vSize="sm" @click="toggleTheme">
    <BaseIcon vInline vIcon="moon" vSize="2em" />
  </BaseButton>
  <BaseButton v-else vVariant="icon" vType="light" vSize="sm" @click="toggleTheme">
    <BaseIcon vIcon="sun" vSize="2em" vInline />
  </BaseButton>
</template>

<style scoped></style>
