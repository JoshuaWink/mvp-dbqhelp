describe('Services page', () => {
  beforeEach(() => cy.visit('/services.html'));

  it('has correct title', () => {
    cy.title().should('contain', 'Services');
  });

  it('renders page hero', () => {
    cy.get('.dbq-page-hero h1').should('contain', 'Our Services');
  });

  it('renders What is a DBQ section', () => {
    cy.get('#what-dbq-heading').should('contain', 'What is a DBQ');
    cy.get('.dbq-prose').contains('Disability Benefits Questionnaire');
  });

  it('renders 3 service offering cards', () => {
    cy.get('#services-detail-heading').should('contain', 'What We Offer');
    cy.get('.dbq-cards .dbq-card').should('have.length', 3);
    cy.get('.dbq-cards').contains('DBQ Evaluations');
    cy.get('.dbq-cards').contains('Nexus Letters');
    cy.get('.dbq-cards').contains('Veteran Support');
  });

  it('lists evaluated conditions (no TBI)', () => {
    cy.get('.dbq-cards').contains('PTSD increases');
    cy.get('.dbq-cards').contains('Depression');
    cy.get('.dbq-cards').contains('Orthopedic conditions');
    cy.get('.dbq-cards').contains('Neurological conditions');
    cy.get('body').invoke('text').should('not.match', /\bTBI\b/);
    cy.get('body').invoke('text').should('not.match', /[Tt]raumatic [Bb]rain/);
  });

  it('renders CTA section', () => {
    cy.get('.dbq-cta').contains('Ready to Start');
    cy.get('.dbq-cta a[href="tel:+19162020558"]').should('exist');
  });
});
