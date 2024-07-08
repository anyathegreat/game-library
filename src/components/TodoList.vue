<script setup>
import { defineProps } from 'vue'
import { useTodoListStore } from '@/stores/todoList'

const { borderColor, list } = defineProps({
  borderColor: {
    type: String
  },
  list: {
    type: Array
  }
})
const store = useTodoListStore()
const { changeStatus, removeTodo } = store
</script>

<template>
  <div class="list">
    <div :class="{ completed: item.status }" v-for="item in list" :key="item.id" @click="changeStatus(item.id)">
      {{ item.title }}
      <button @click.prevent.stop="removeTodo(item.id)">X</button>
    </div>
  </div>
</template>

<style scoped>
.list {
  border: v-bind(borderColor);
}
.completed {
  text-decoration: line-through;
}
</style>
