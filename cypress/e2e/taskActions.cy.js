describe('Tasks page actions', () => {

  beforeEach(() => {
    // открываем страницу с TaskList.vue перед каждым тестом
    cy.visit('http://localhost:5173/tasks')
  })

  it('adds a new task when clicking Add task', () => {
    // используем уникальный id кнопки добавления
    cy.get('#addTask').click()
cy.get('.task-item').last().should('contain.text', 'Новая задача')
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