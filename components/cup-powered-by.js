// cup-core/components/cup-powered-by.js — <cup-powered-by> nano component
import { CupElement } from '../cup-element.js';

class CupPoweredBy extends CupElement {
  static get observedAttributes() {
    return ['org', 'href'];
  }

  render() {
    const org = this.attr('org') || 'Orchestrate';
    const href = this.attr('href') || 'https://orchestrate-solutions.github.io';

    this.innerHTML = `<span class="cup-powered-by">An <a href="${href}" target="_blank" rel="noopener" title="Orchestrate Solutions" class="cup-powered-by__link">${org}</a> <span class="cup-powered-by__sol" role="button" tabindex="0" title="Open theme editor">Solution</span></span>`;

    const sol = this.querySelector('.cup-powered-by__sol');
    sol.addEventListener('click', (e) => {
      e.preventDefault();
      this._openPicker();
    });
    sol.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this._openPicker(); }
    });
  }

  _openPicker() {
    let picker = document.querySelector('cup-theme-picker');
    if (!picker) {
      picker = document.createElement('cup-theme-picker');
      document.body.appendChild(picker);
    }
    picker.open();
  }
}

customElements.define('cup-powered-by', CupPoweredBy);
export { CupPoweredBy };
