describe('Tasks page', () => {

  it('opens tasks page and shows tasks', () => {

    cy.visit('http://localhost:5173/tasks')
    cy.contains('Первая задача')
    cy.contains('Вторая задача')
  })

  it('adds a new task when clicking Add task', () => {
    cy.visit('http://localhost:5173/tasks')

    cy.get('#addTask').click()

    cy.contains('Новая')
  })

  it('marks a task as done', () => {
  cy.visit('http://localhost:5173/tasks')
  cy.get('input[type="checkbox"]').first().check()
  cy.get('input[type="checkbox"]').first().should('be.checked')
})

it('deletes a task', () => {
  cy.visit('http://localhost:5173/tasks')
  cy.get('.task-item').first().as('firstTask')
cy.get('@firstTask').find('button').click()
})

})