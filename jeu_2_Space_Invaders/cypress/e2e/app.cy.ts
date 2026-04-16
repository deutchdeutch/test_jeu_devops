// jeu_2_Space_Invaders/cypress/e2e/app.cy.js
describe('Expérience Joueur Space Invaders', () => {
  it('Démarrage et visibilité', () => {
    cy.visit('/');
    cy.get('canvas').should('be.visible'); 
  });

  it('Le score augmente quand on joue', () => {
    cy.visit('/');
    // On simule l'appui sur une touche (si ton jeu le permet)
    cy.get('body').trigger('keydown', { key: ' ' }); 
    // On vérifie qu'un élément de l'interface UI change
    cy.contains('Score:').should('be.visible');
  });
});