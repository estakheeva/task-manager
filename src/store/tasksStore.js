import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [   // начальные данные
      { id: 1, title: 'Первая задача', done: false },
      { id: 2, title: 'Вторая задача', done: true }
    ]
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task)
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id)
    },
    toggleDone(id) {
      const task = this.tasks.find(t => t.id === id)
      if (task) task.done = !task.done
    }
  }
})