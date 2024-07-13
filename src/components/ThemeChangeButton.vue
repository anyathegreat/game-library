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
  <BaseButton vVariant="icon" vType="secondary" vSize="lg" @click="toggleTheme">
    <BaseIcon v-if="currentTheme === 'dark'" vInline vIcon="moon" vSize="2em" />
    <BaseIcon v-else vIcon="sun" vSize="2em" vInline />
  </BaseButton>
  <!-- <BaseButton v-else vVariant="icon" vType="light" vSize="lg" @click="toggleTheme">
    <BaseIcon vIcon="sun" vSize="2em" vInline />
  </BaseButton> -->
</template>

<style scoped></style>
