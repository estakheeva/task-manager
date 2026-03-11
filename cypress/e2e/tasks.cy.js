describe('Tasks page', () => {

  it('opens tasks page and shows tasks', () => {

    cy.visit('http://localhost:5173/tasks')
    cy.contains('Первая задача')
    cy.contains('Вторая задача')
  })

  it('adds a new task when clicking Add task', () => {
    cy.visit('http://localhost:5173/tasks')

    cy.get('button').click()

    cy.contains('Новая')
  })

})