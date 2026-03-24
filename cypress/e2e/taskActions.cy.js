describe('Tasks page actions', () => {

  beforeEach(() => {
    // открываем страницу с TaskList.vue перед каждым тестом
    cy.visit('http://localhost:5173/tasks')
  })

  it('adds a new task when typing in input and clicking Add task', () => {
  const taskTitle = 'Моя новая задача'

  // вводим текст в поле input
  cy.get('input[placeholder="Введите задачу"]').type(taskTitle)

  // кликаем кнопку добавить
  cy.get('#addTask').click()

  // проверяем, что задача появилась в списке
  cy.contains(taskTitle).should('exist')
})

  it('marks a task as done when checkbox is clicked', () => {
    cy.get('.task-item').first().as('firstTask')

    // кликаем чекбокс
    cy.get('@firstTask').find('input[type="checkbox"]').click()

    // проверяем, что текст получил класс done
    cy.get('@firstTask').find('span').should('have.class', 'done')
  })

  it('deletes a task when Delete button is clicked', () => {
    cy.get('.task-item').first().as('firstTask')

    // сохраняем текст задачи
    cy.get('@firstTask').find('span').invoke('text').then((title) => {
      // кликаем кнопку Delete
      cy.get('@firstTask').find('button').click()

      // проверяем, что задача исчезла из DOM
      cy.contains(title).should('not.exist')
    })
  })
})