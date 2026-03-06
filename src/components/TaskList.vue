<template>
  <div>
    <button @click="addTask">Добавить задачу</button>
    <p v-for="task in tasks" :key="task.id">
      {{ task.title }} - {{ task.done ? 'Done' : 'In progress' }}
    </p>
  </div>
</template>

<script setup>
  import { useTasksStore } from '../store/tasksStore'

  const tasksStore = useTasksStore()
  const tasks = tasksStore.tasks

  // Add new task function
function addTask() {
  const newId = tasksStore.tasks.length + 1
  tasksStore.addTask({ id: newId, title: `Новая задача ${newId}`, done: false })
}
</script>

<style scoped>
p {
  text-align: center;
  color: teal;
}
button {
  display: block;
  margin: 0 auto 1em;
  padding: 0.5em 1em;
  cursor: pointer;
}
</style>