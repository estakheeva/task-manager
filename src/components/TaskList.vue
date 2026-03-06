<template>
  <div>
    <p v-for="task in tasks" :key="task.id">
      {{ task.title }} - {{ task.done ? 'Done' : 'In progress' }}
    </p>
  </div>
</template>

<script setup>
  import { useTasksStore } from '../store/tasksStore'

  const tasksStore = useTasksStore()
  const tasks = tasksStore.tasks
</script>

<style scoped>
p {
  text-align: center;
  color: teal;
}
</style>