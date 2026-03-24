  <template>
    <div class="task-list">
      
      <div v-for="task in tasksStore.tasks" :key="task.id" class="task-item">
        
        <input
          type="checkbox"
          :checked="task.done"
          @change="toggleDone(task.id)"/>
        <span :class="{done:task.done}">{{ task.title }}</span>

  <!--    TODO: создать переключение языка ru/eng --> 
        <button @click="deleteTask(task.id)">Удалить</button>
      
      </div>
      <div class="task-input">
        <input
          v-model="newTaskText"
          type="text"
          placeholder="Введите задачу"
        />
        <button @click="addTask" id="addTask">Добавить задачу</button>
      </div>
    </div> 

  </template>

  <script setup>
    import { useTasksStore } from '../store/tasksStore'

    const tasksStore = useTasksStore()
    const tasks = tasksStore.tasks

    // Add new task function
  const addTask = () => {
    const newId = tasksStore.tasks.length + 1
    tasksStore.addTask({ id: newId, title: `Новая задача ${newId}`, done: false })
  }

  const toggleDone = (id) => {
    tasksStore.toggleDone(id)
  }

  const deleteTask = (id) => {
    tasksStore.deleteTask(id)
  }

  </script>

  <style scoped>
  .task-list {
    max-width: 400px;
    margin: 0 auto;
  }

  .task-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .task-item span.done {
    text-decoration: line-through;
    color: gray;
  }

  button#addTask{
    background-color: #3498db;
    color: white;
    margin-top: 40px;
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #2980b9;
  }

  .task-item button {
    background-color: #e74c3c;
    padding: 2px 6px;
  }

  .task-item button:hover {
    background-color: #c0392b;
  }
  .task-input {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  align-items: stretch;
}

.task-input input {
  flex: 1;
  padding: 6px 8px;
}
  </style>