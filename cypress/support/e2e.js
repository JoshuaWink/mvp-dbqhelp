// Ignore the duplicate customElements.define error from cup-powered-by
// This happens because badge.js (remote) and cup.js (local) both define it.
// The remote badge.js has a guard; the local one inside obfuscated cup.js does not.
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('cup-powered-by') && err.message.includes('already been used')) {
    return false; // prevent Cypress from failing the test
  }
});
