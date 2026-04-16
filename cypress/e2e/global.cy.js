// Shared selectors and assertions for every page
const PAGES = ['/', '/about.html', '/services.html', '/faq.html', '/contact.html'];

describe('Global — all pages', () => {
  PAGES.forEach((page) => {
    describe(page, () => {
      beforeEach(() => cy.visit(page));

      it('has a <title>', () => {
        cy.title().should('not.be.empty');
      });

      it('renders header with logo', () => {
        cy.get('.dbq-header').should('exist');
        cy.get('.dbq-header__logo img[src="logo.png"]').should('exist');
      });

      it('renders main nav with all 5 links', () => {
        cy.get('.dbq-header__nav a').should('have.length', 5);
        ['Home', 'About Us', 'Services', 'FAQ', 'Contact'].forEach((label) => {
          cy.get('.dbq-header__nav').contains(label);
        });
      });

      it('renders phone number in header', () => {
        cy.get('.dbq-header__phone').should('exist');
        cy.get('.dbq-header__phone').should('have.attr', 'href', 'tel:+19162020558');
      });

      it('renders footer with both taglines', () => {
        cy.get('.dbq-footer').should('exist');
        cy.get('.dbq-footer').contains('Veteran disability evaluations by former VA professionals');
        cy.get('.dbq-footer').contains('Empowering veterans to secure the disability benefits');
      });

      it('footer copyright is current year', () => {
        cy.get('.dbq-footer__bottom').contains('© 2026 DBQ Help');
      });

      it('has no broken same-origin links', () => {
        cy.get('a[href]').each(($a) => {
          const href = $a.attr('href');
          if (href && !href.startsWith('http') && !href.startsWith('tel:') && !href.startsWith('mailto:') && !href.startsWith('#')) {
            cy.request({ url: href, failOnStatusCode: false }).its('status').should('eq', 200);
          }
        });
      });

      it('has no entity-separation violations', () => {
        cy.get('body').invoke('text').then((text) => {
          expect(text).not.to.contain('Greene Psychology');
          expect(text).not.to.contain('California Psychological');
        });
      });

      it('renders powered-by badge', () => {
        cy.get('cup-powered-by').should('exist');
      });
    });
  });
});
