describe('Home page', () => {
  beforeEach(() => cy.visit('/'));

  it('has correct title', () => {
    cy.title().should('contain', 'DBQ Help');
  });

  it('renders hero section with heading', () => {
    cy.get('.dbq-hero').should('exist');
    cy.get('#hero-heading').should('contain', 'Expert DBQ Evaluations');
  });

  it('hero has CTA buttons', () => {
    cy.get('.dbq-hero__actions a').should('have.length.gte', 2);
    cy.get('.dbq-hero__actions').contains('Call Now');
    cy.get('.dbq-hero__actions').contains('Schedule an Evaluation');
  });

  it('renders trust indicators', () => {
    cy.get('.dbq-trust__item').should('have.length', 4);
    cy.get('.dbq-trust').contains('Licensed Medical Examiners');
    cy.get('.dbq-trust').contains('Veteran-Focused Care');
    cy.get('.dbq-trust').contains('Serving Veterans Nationwide');
  });

  it('renders service cards', () => {
    cy.get('#services-heading').should('exist');
    cy.get('.dbq-cards .dbq-card').should('have.length.gte', 3);
    cy.get('.dbq-cards').contains('DBQ Evaluations');
    cy.get('.dbq-cards').contains('Nexus Letters');
    cy.get('.dbq-cards').contains('Veteran Guidance');
  });

  it('renders 3 steps section', () => {
    cy.get('#process-heading').should('contain', '3 Simple Steps');
    cy.get('.dbq-step').should('have.length', 3);
  });

  it('renders team section with VA professionals messaging', () => {
    cy.get('#team-heading').should('exist');
    cy.get('.dbq-bio').contains('Built by VA Professionals');
    cy.get('.dbq-bio').contains('Former VA Raters');
    cy.get('.dbq-bio').contains('M21-1 Procedure Manual');
  });

  it('renders CTA section', () => {
    cy.get('.dbq-cta').should('exist');
    cy.get('.dbq-cta').contains('Ready to Get Started');
  });
});
