// cup-core/components/cup-checkbox.js — <cup-checkbox> micro component
import { CupElement } from '../cup-element.js';

class CupCheckbox extends CupElement {
  static get observedAttributes() {
    return ['label', 'checked', 'disabled', 'name', 'value'];
  }

  render() {
    const id = this.cupId;
    const label = this.attr('label') || '';
    const checked = this.bool('checked');
    const disabled = this.bool('disabled');
    const name = this.attr('name');
    const value = this.attr('value');

    const attrs = [
      `type="checkbox"`,
      `id="${id}-input"`,
      checked ? 'checked' : '',
      disabled ? 'disabled' : '',
      name ? `name="${name}"` : '',
      value != null ? `value="${value}"` : '',
    ].filter(Boolean).join(' ');

    this.innerHTML = `<label class="cup-checkbox"><input ${attrs}><span>${label}</span></label>`;
  }
}

customElements.define('cup-checkbox', CupCheckbox);
export { CupCheckbox };
