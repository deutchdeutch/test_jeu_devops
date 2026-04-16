describe('Two Ships - Tests fonctionnels', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('la page se charge correctement', () => {
    cy.url().should('include', 'localhost');
  });

  it('le titre "Two Spaceships Passing In The Night" est bien présent', () => {
    cy.get('h1').should('contain', 'Two');
    cy.title().should('eq', 'js13k-2021');
  });

  it('le bouton existe et fonctionne', () => {
    cy.get('button.n').should('exist');
  });
});