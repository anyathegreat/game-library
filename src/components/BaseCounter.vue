<script setup>
import { computed, ref } from 'vue'

const counter = ref(0)
const isDouble = ref(false)
const doubleCount = computed(() => counter.value * 2)
const numberList = computed(() => {
  if (counter.value === 0) {
    return ['Чисел нет']
  }

  let arr = []
  for (let i = 1; i <= Math.abs(counter.value); i++) {
    if (counter.value < 0) {
      arr.push(-i)
    } else {
      arr.push(i)
    }
  }

  return arr
})

function increment() {
  if (isDouble.value) {
    counter.value += 2
  } else {
    counter.value++
  }
}

function decrement() {
  if (isDouble.value) {
    counter.value -= 2
  } else {
    counter.value--
  }
}
</script>

<template>
  <h1>Current: {{ counter }}</h1>
  <h1>Double: {{ doubleCount }}</h1>
  <button type="button" @click="increment">+</button>
  <button type="button" @click="decrement">-</button>
  <input type="checkbox" id="checkbox" v-model="isDouble" />
  <label for="checkbox">Удваивать</label>
  <br />
  <div v-for="(item, index) in numberList" :key="index">{{ item }}</div>
</template>

<style scoped></style>
