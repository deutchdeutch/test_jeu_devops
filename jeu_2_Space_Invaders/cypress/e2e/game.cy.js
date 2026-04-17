describe('Space Invaders - Tests fonctionnels', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('la page se charge et affiche le menu principal', () => {
    cy.get('#menu').should('be.visible');
    cy.get('h1').should('contain', 'Space Invaders');
  });

  it('le bouton Start existe et est cliquable', () => {
    cy.get('#start-button').should('exist').and('be.visible');
    cy.get('#start-button').click();
    cy.get('#menu').should('not.be.visible');
  });

  it('les deux canvas du jeu sont présents', () => {
    cy.get('#canvas').should('exist');
    cy.get('#background').should('exist');
  });
});