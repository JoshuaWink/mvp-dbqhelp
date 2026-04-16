describe('About page', () => {
  beforeEach(() => cy.visit('/about.html'));

  it('has correct title', () => {
    cy.title().should('contain', 'About');
  });

  it('renders page hero', () => {
    cy.get('.dbq-page-hero h1').should('contain', 'About DBQ Help');
  });

  it('renders mission section with medical evaluations text', () => {
    cy.get('#mission-heading').should('contain', 'Our Mission');
    cy.get('.dbq-prose').contains('medical evaluations');
    // Must NOT say "mental health evaluations"
    cy.get('.dbq-prose').invoke('text').should('not.contain', 'mental health evaluations');
  });

  it('renders mission section image with skeleton placeholder', () => {
    cy.get('.dbq-section-img-wrap').first().should('exist');
    cy.get('.dbq-section-img-wrap').first().find('cup-skeleton').should('exist');
    cy.get('.dbq-section-img-wrap').first().find('img[src="img/consultation.jpg"]').should('exist');
  });

  it('renders team section', () => {
    cy.get('#team-heading').should('contain', 'Our Team');
    cy.get('.dbq-bio').contains('Built by VA Professionals');
    cy.get('.dbq-bio').contains('Former VA Raters');
    cy.get('.dbq-bio').contains('Licensed Medical Examiners');
    cy.get('.dbq-bio').contains('M21-1 Procedure Manual');
  });

  it('renders Why Veterans Choose Us section', () => {
    cy.get('#why-heading').should('contain', 'Why Veterans Choose Us');
    cy.get('.dbq-cards .dbq-card').should('have.length', 3);
    cy.get('.dbq-cards').contains('Former VA Professionals');
    cy.get('.dbq-cards').contains('Veteran-Centered');
    cy.get('.dbq-cards').contains('Nationwide Service');
  });

  it('renders vet-support image with skeleton placeholder', () => {
    cy.get('.dbq-section-img-wrap').last().find('cup-skeleton').should('exist');
    cy.get('.dbq-section-img-wrap').last().find('img[src="img/veteran-support.jpg"]').should('exist');
  });

  it('renders CTA section', () => {
    cy.get('.dbq-cta').contains('Let Us Help You');
    cy.get('.dbq-cta a[href="tel:+19162020558"]').should('exist');
    cy.get('.dbq-cta a[href="contact.html"]').should('exist');
  });
});
