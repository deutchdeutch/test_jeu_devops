describe('Smoke Test', () => {
  it('doit charger la page sans erreur', () => {
    cy.visit('/')
    cy.get('canvas', { timeout: 10000 }).should('be.visible')
  })
})