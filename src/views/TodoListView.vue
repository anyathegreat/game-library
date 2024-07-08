<script setup>
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { computed, ref } from 'vue'
import { useTodoListStore } from '@/stores/todoList'
import TodoList from '@/components/TodoList.vue'

const showUncompleted = ref(false)
const title = ref('')
const firstColor = ref('1px solid #00ff00')
const secondColor = ref('1px solid #0000ff')

const store = useTodoListStore()
const { list } = storeToRefs(store)
const { addTodo } = store

const filteredList = computed(() => list.value.filter((item) => !item.status))
</script>

<template>
  <h1>To do</h1>
  <div>
    <input type="checkbox" id="checkbox" v-model="showUncompleted" />
    <label for="checkbox">Только незавершенные</label>
  </div>
  <div><input type="text" v-model="title" /><button @click.prevent="addTodo(title)">Add</button></div>
  <TodoList v-if="showUncompleted" :borderColor="secondColor" :list="filteredList" />
  <TodoList v-else :borderColor="firstColor" :list="list" />
  <RouterLink to="/">Go to Home</RouterLink>
</template>

<style scoped></style>
