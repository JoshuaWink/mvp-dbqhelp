describe('FAQ page', () => {
  beforeEach(() => cy.visit('/faq.html'));

  it('has correct title', () => {
    cy.title().should('contain', 'FAQ');
  });

  it('renders page hero', () => {
    cy.get('.dbq-page-hero h1').should('contain', 'Frequently Asked Questions');
  });

  it('renders at least 6 FAQ items', () => {
    cy.get('.dbq-faq-item').should('have.length.gte', 6);
  });

  it('FAQ items are expandable', () => {
    cy.get('.dbq-faq-item').first().as('first');
    cy.get('@first').find('summary').click();
    cy.get('@first').find('p').should('be.visible');
  });

  it('covers key topics', () => {
    const topics = [
      'What is a DBQ',
      'Who can complete a DBQ',
      'What is a nexus letter',
      'How long does',
      'Do I need a referral',
      'What conditions',
    ];
    topics.forEach((topic) => {
      cy.get('.dbq-faq-list').contains(topic);
    });
  });

  it('conditions list has no TBI', () => {
    cy.get('body').invoke('text').should('not.match', /\bTBI\b/);
    cy.get('body').invoke('text').should('not.match', /[Tt]raumatic [Bb]rain/);
  });

  it('conditions list includes correct items', () => {
    cy.get('.dbq-faq-list').contains('PTSD increases');
    cy.get('.dbq-faq-list').contains('orthopedic conditions');
    cy.get('.dbq-faq-list').contains('neurological conditions');
  });

  it('renders CTA section', () => {
    cy.get('.dbq-cta').contains('Still Have Questions');
    cy.get('.dbq-cta a[href="tel:+19162020558"]').should('exist');
  });
});
