import { ref } from 'vue'
import { defineStore } from 'pinia'
import { createUuid } from '@/helpers'

export const useTodoListStore = defineStore('todoList', () => {
  const list = ref([
    { title: 'Learn JS', status: false, id: createUuid() },
    { title: 'Drink a coffee', status: true, id: createUuid() }
  ])
  function changeStatus(id) {
    const item = list.value.find((item) => item.id === id)
    item.status = !item.status
  }
  function removeTodo(id) {
    const newList = list.value.filter((item) => item.id !== id)
    list.value = newList
  }
  function addTodo(title) {
    list.value.push({
      title,
      status: false,
      id: createUuid()
    })
  }

  return { list, changeStatus, removeTodo, addTodo }
})
