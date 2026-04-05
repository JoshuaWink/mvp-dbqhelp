// cup-core/components/cup-powered-by.js — <cup-powered-by> nano component
import { CupElement } from '../cup-element.js';

class CupPoweredBy extends CupElement {
  static get observedAttributes() {
    return ['org', 'href'];
  }

  render() {
    const org = this.attr('org') || 'Orchestrate';
    const href = this.attr('href') || 'https://orchestrate-solutions.github.io';

    this.innerHTML = `<span class="cup-powered-by">An <a href="${href}" target="_blank" rel="noopener" title="Orchestrate Solutions" class="cup-powered-by__link">${org}</a> Solution</span>`;
  }
}

customElements.define('cup-powered-by', CupPoweredBy);
export { CupPoweredBy };
