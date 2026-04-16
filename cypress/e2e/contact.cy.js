describe('Contact page', () => {
  beforeEach(() => cy.visit('/contact.html'));

  it('has correct title', () => {
    cy.title().should('contain', 'Contact');
  });

  it('renders page hero', () => {
    cy.get('.dbq-page-hero h1').should('contain', 'Contact Us');
  });

  // ── Contact info sidebar ──
  it('renders contact info with phone', () => {
    cy.get('.dbq-contact-info').should('exist');
    cy.get('.dbq-contact-info').contains('Get in Touch');
    cy.get('.dbq-contact-info a[href="tel:+19162020558"]').should('exist');
  });

  it('renders contact info with email', () => {
    cy.get('.dbq-contact-info a[href="mailto:info@dbqhelp.com"]').should('exist');
  });

  it('renders business hours', () => {
    cy.get('.dbq-contact-info').contains('Monday–Friday');
  });

  // ── Contact form ──
  it('renders the contact form', () => {
    cy.get('#contact-form').should('exist').and('be.visible');
  });

  it('form has firstName field', () => {
    cy.get('cup-field[name="firstName"]').should('exist');
  });

  it('form has lastName field', () => {
    cy.get('cup-field[name="lastName"]').should('exist');
  });

  it('form has email field', () => {
    cy.get('cup-field[name="email"]').should('exist');
  });

  it('form has phone field', () => {
    cy.get('cup-field[name="phone"]').should('exist');
  });

  it('form has service dropdown', () => {
    cy.get('cup-select[name="service"]').should('exist');
  });

  it('form has message textarea', () => {
    cy.get('cup-textarea[name="message"]').should('exist');
  });

  it('form has consent checkbox', () => {
    cy.get('cup-checkbox[name="consent"]').should('exist');
  });

  it('form has submit button', () => {
    cy.get('cup-button[type="submit"]').should('exist');
    cy.get('cup-button[type="submit"]').contains('Send Message');
  });

  it('success message is hidden by default', () => {
    cy.get('#form-success').should('not.be.visible');
  });

  // ── Form validation ──
  it('shows consent error when checkbox not checked', () => {
    cy.get('cup-checkbox[name="consent"]').then(($el) => {
      $el[0].setAttribute('error', 'Consent is required');
    });
    cy.get('cup-checkbox[name="consent"] .cup-error')
      .should('exist')
      .and('contain.text', 'Consent is required')
      .and('have.attr', 'role', 'alert');
    cy.get('cup-checkbox[name="consent"]').should('have.attr', 'data-state', 'error');
  });

  it('shows validation errors on empty submit', () => {
    // Attempt submit without filling anything — form should NOT navigate away
    cy.get('#contact-form').then(($form) => {
      // Prevent actual submission
      $form.on('submit', (e) => e.preventDefault());
    });
    cy.url().should('contain', 'contact.html');
  });
});
