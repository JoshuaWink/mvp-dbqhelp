// cup-core/components/cup-theme-picker.js — <cup-theme-picker> component
// Real-time theme editor with color pickers, presets, and CSS export.
// Opens as a floating panel. Can be triggered programmatically or via attribute.
import { CupElement } from '../cup-element.js';

// ── Built-in presets ──────────────────────────────────────────────
const PRESETS = [
  {
    name: 'Default Dark',
    colors: {
      '--cup-color-surface': '#1a1a2e', '--cup-color-on-surface': '#e0e0e0',
      '--cup-color-surface-alt': '#16213e', '--cup-color-primary': '#4fc3f7',
      '--cup-color-on-primary': '#000000', '--cup-color-secondary': '#b0bec5',
      '--cup-color-error': '#ef5350', '--cup-color-success': '#66bb6a',
      '--cup-color-warning': '#ffa726', '--cup-color-info': '#29b6f6',
      '--cup-color-border': '#333333', '--cup-color-focus': '#4fc3f7',
    },
  },
  {
    name: 'Default Light',
    colors: {
      '--cup-color-surface': '#ffffff', '--cup-color-on-surface': '#1a1a1a',
      '--cup-color-surface-alt': '#f5f5f5', '--cup-color-primary': '#0277bd',
      '--cup-color-on-primary': '#ffffff', '--cup-color-secondary': '#546e7a',
      '--cup-color-error': '#c62828', '--cup-color-success': '#2e7d32',
      '--cup-color-warning': '#e65100', '--cup-color-info': '#01579b',
      '--cup-color-border': '#cccccc', '--cup-color-focus': '#0277bd',
    },
  },
  {
    name: 'Midnight Purple',
    colors: {
      '--cup-color-surface': '#0d0221', '--cup-color-on-surface': '#e8d5f5',
      '--cup-color-surface-alt': '#1a0533', '--cup-color-primary': '#b388ff',
      '--cup-color-on-primary': '#000000', '--cup-color-secondary': '#9575cd',
      '--cup-color-error': '#ff5252', '--cup-color-success': '#69f0ae',
      '--cup-color-warning': '#ffd740', '--cup-color-info': '#40c4ff',
      '--cup-color-border': '#2a1050', '--cup-color-focus': '#b388ff',
    },
  },
  {
    name: 'Forest',
    colors: {
      '--cup-color-surface': '#1b2d1b', '--cup-color-on-surface': '#d5e8d5',
      '--cup-color-surface-alt': '#243524', '--cup-color-primary': '#81c784',
      '--cup-color-on-primary': '#000000', '--cup-color-secondary': '#a5d6a7',
      '--cup-color-error': '#ef5350', '--cup-color-success': '#66bb6a',
      '--cup-color-warning': '#ffb74d', '--cup-color-info': '#4fc3f7',
      '--cup-color-border': '#2e5830', '--cup-color-focus': '#81c784',
    },
  },
  {
    name: 'Warm Sand',
    colors: {
      '--cup-color-surface': '#faf6f0', '--cup-color-on-surface': '#3e3028',
      '--cup-color-surface-alt': '#f0e8dc', '--cup-color-primary': '#d4792a',
      '--cup-color-on-primary': '#ffffff', '--cup-color-secondary': '#8b7355',
      '--cup-color-error': '#c62828', '--cup-color-success': '#558b2f',
      '--cup-color-warning': '#ef6c00', '--cup-color-info': '#0277bd',
      '--cup-color-border': '#d4c4a8', '--cup-color-focus': '#d4792a',
    },
  },
  {
    name: 'Ocean',
    colors: {
      '--cup-color-surface': '#0a1628', '--cup-color-on-surface': '#c8dce8',
      '--cup-color-surface-alt': '#0f2035', '--cup-color-primary': '#00bcd4',
      '--cup-color-on-primary': '#000000', '--cup-color-secondary': '#80cbc4',
      '--cup-color-error': '#ff5252', '--cup-color-success': '#69f0ae',
      '--cup-color-warning': '#ffd740', '--cup-color-info': '#40c4ff',
      '--cup-color-border': '#1a3550', '--cup-color-focus': '#00bcd4',
    },
  },
  {
    name: 'DBQ Veterans',
    colors: {
      '--cup-color-surface': '#ffffff', '--cup-color-on-surface': '#1a1a1a',
      '--cup-color-surface-alt': '#f0f7f4', '--cup-color-primary': '#2d6a4f',
      '--cup-color-on-primary': '#ffffff', '--cup-color-secondary': '#555555',
      '--cup-color-error': '#c62828', '--cup-color-success': '#2e7d32',
      '--cup-color-warning': '#e65100', '--cup-color-info': '#01579b',
      '--cup-color-border': '#d1d5db', '--cup-color-focus': '#40916c',
    },
  },
];

// ── Token definitions for the editor grid ─────────────────────────
const TOKENS = [
  { prop: '--cup-color-surface',     label: 'Surface' },
  { prop: '--cup-color-on-surface',  label: 'On Surface' },
  { prop: '--cup-color-surface-alt', label: 'Surface Alt' },
  { prop: '--cup-color-primary',     label: 'Primary' },
  { prop: '--cup-color-on-primary',  label: 'On Primary' },
  { prop: '--cup-color-secondary',   label: 'Secondary' },
  { prop: '--cup-color-error',       label: 'Error' },
  { prop: '--cup-color-success',     label: 'Success' },
  { prop: '--cup-color-warning',     label: 'Warning' },
  { prop: '--cup-color-info',        label: 'Info' },
  { prop: '--cup-color-border',      label: 'Border' },
  { prop: '--cup-color-focus',       label: 'Focus' },
];

function toHex(color) {
  if (!color) return '#000000';
  color = color.trim();
  if (color.startsWith('#')) {
    if (color.length === 4) {
      return '#' + color[1]+color[1] + color[2]+color[2] + color[3]+color[3];
    }
    return color;
  }
  const m = color.match(/\d+/g);
  if (m && m.length >= 3) {
    return '#' + m.slice(0, 3).map(n => parseInt(n).toString(16).padStart(2, '0')).join('');
  }
  return '#000000';
}

function esc(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

class CupThemePicker extends CupElement {
  static get observedAttributes() {
    return ['open'];
  }

  constructor() {
    super();
    this._panel = null;
    this._backdrop = null;
    this._presets = [...PRESETS];
    this._onKeyDown = this._onKeyDown.bind(this);
  }

  /** Register additional presets programmatically. */
  addPreset(name, colors) {
    this._presets.push({ name, colors });
    if (this._panel) this._rebuildPresets();
  }

  render() {
    // Only build the trigger — panel is built on first open
    if (!this.querySelector('.cup-theme-picker__trigger')) {
      this.innerHTML = '<span class="cup-theme-picker__trigger" role="button" tabindex="0" aria-label="Open theme editor" title="Open theme editor">&#9881;</span>';
      this.querySelector('.cup-theme-picker__trigger').addEventListener('click', () => this.toggle());
      this.querySelector('.cup-theme-picker__trigger').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.toggle(); }
      });
    }
  }

  toggle() {
    if (this.hasAttribute('open')) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    if (!this._panel) this._buildPanel();
    this._syncInputs();
    this.setAttribute('open', '');
    this._panel.style.display = 'flex';
    this._backdrop.style.display = 'block';
    document.addEventListener('keydown', this._onKeyDown);
    this._panel.querySelector('.cup-tp__close').focus();
  }

  close() {
    this.removeAttribute('open');
    if (this._panel) this._panel.style.display = 'none';
    if (this._backdrop) this._backdrop.style.display = 'none';
    document.removeEventListener('keydown', this._onKeyDown);
  }

  _onKeyDown(e) {
    if (e.key === 'Escape') this.close();
  }

  _buildPanel() {
    // Backdrop
    this._backdrop = document.createElement('div');
    this._backdrop.className = 'cup-tp__backdrop';
    this._backdrop.addEventListener('click', () => this.close());
    document.body.appendChild(this._backdrop);

    // Panel
    this._panel = document.createElement('div');
    this._panel.className = 'cup-tp';
    this._panel.setAttribute('role', 'dialog');
    this._panel.setAttribute('aria-label', 'Theme Editor');
    this._panel.style.display = 'none';

    // Header
    const header = document.createElement('div');
    header.className = 'cup-tp__header';
    header.innerHTML = `
      <span class="cup-tp__title">Theme Editor</span>
      <button class="cup-tp__close" aria-label="Close theme editor">&times;</button>
    `;
    header.querySelector('.cup-tp__close').addEventListener('click', () => this.close());
    this._panel.appendChild(header);

    // Presets section
    const presetsWrap = document.createElement('div');
    presetsWrap.className = 'cup-tp__section';
    presetsWrap.innerHTML = '<div class="cup-tp__section-title">Presets</div>';
    const presetGrid = document.createElement('div');
    presetGrid.className = 'cup-tp__presets';
    presetsWrap.appendChild(presetGrid);
    this._panel.appendChild(presetsWrap);
    this._presetGrid = presetGrid;
    this._rebuildPresets();

    // Color grid
    const colorsWrap = document.createElement('div');
    colorsWrap.className = 'cup-tp__section';
    colorsWrap.innerHTML = '<div class="cup-tp__section-title">Colors</div>';
    const colorGrid = document.createElement('div');
    colorGrid.className = 'cup-tp__colors';
    for (const t of TOKENS) {
      const row = document.createElement('label');
      row.className = 'cup-tp__color-row';
      row.innerHTML = `
        <input type="color" class="cup-tp__swatch" data-prop="${t.prop}" value="#000000">
        <span class="cup-tp__color-label">${t.label}</span>
      `;
      colorGrid.appendChild(row);
    }
    colorsWrap.appendChild(colorGrid);
    this._panel.appendChild(colorsWrap);

    // Live editing
    colorGrid.addEventListener('input', (e) => {
      const input = e.target;
      if (input.dataset.prop) {
        document.documentElement.style.setProperty(input.dataset.prop, input.value);
      }
    });
    this._colorGrid = colorGrid;

    // Actions
    const actions = document.createElement('div');
    actions.className = 'cup-tp__actions';
    actions.innerHTML = `
      <button class="cup-tp__btn cup-tp__btn--reset">Reset</button>
      <button class="cup-tp__btn cup-tp__btn--export">Export CSS</button>
      <button class="cup-tp__btn cup-tp__btn--share">Copy Link</button>
    `;
    actions.querySelector('.cup-tp__btn--reset').addEventListener('click', () => this._reset());
    actions.querySelector('.cup-tp__btn--export').addEventListener('click', () => this._exportCSS());
    actions.querySelector('.cup-tp__btn--share').addEventListener('click', () => this._shareLink());
    this._panel.appendChild(actions);

    document.body.appendChild(this._panel);
  }

  _rebuildPresets() {
    if (!this._presetGrid) return;
    this._presetGrid.innerHTML = '';
    for (const p of this._presets) {
      const card = document.createElement('button');
      card.className = 'cup-tp__preset';
      card.setAttribute('aria-label', `Apply ${p.name} theme`);
      card.dataset.preset = p.name;

      const swatches = [
        p.colors['--cup-color-surface'],
        p.colors['--cup-color-primary'],
        p.colors['--cup-color-on-surface'],
        p.colors['--cup-color-error'],
      ].map(c => `<span class="cup-tp__preset-dot" style="background:${c}"></span>`).join('');

      card.innerHTML = `<div class="cup-tp__preset-swatches">${swatches}</div><span class="cup-tp__preset-name">${esc(p.name)}</span>`;
      card.addEventListener('click', () => this._applyPreset(p));
      this._presetGrid.appendChild(card);
    }
  }

  _applyPreset(preset) {
    const root = document.documentElement;
    for (const [prop, val] of Object.entries(preset.colors)) {
      root.style.setProperty(prop, val);
    }
    this._syncInputs();

    // visual feedback
    this._presetGrid.querySelectorAll('.cup-tp__preset').forEach(c => c.classList.remove('cup-tp__preset--active'));
    const active = this._presetGrid.querySelector(`[data-preset="${preset.name}"]`);
    if (active) active.classList.add('cup-tp__preset--active');

    this.dispatchEvent(new CustomEvent('theme-change', { detail: { preset: preset.name, colors: preset.colors }, bubbles: true }));
  }

  _syncInputs() {
    if (!this._colorGrid) return;
    const cs = getComputedStyle(document.documentElement);
    this._colorGrid.querySelectorAll('[data-prop]').forEach(input => {
      input.value = toHex(cs.getPropertyValue(input.dataset.prop));
    });
  }

  _reset() {
    for (const t of TOKENS) {
      document.documentElement.style.removeProperty(t.prop);
    }
    this._syncInputs();
    this._presetGrid.querySelectorAll('.cup-tp__preset').forEach(c => c.classList.remove('cup-tp__preset--active'));
    this.dispatchEvent(new CustomEvent('theme-change', { detail: { preset: 'reset' }, bubbles: true }));
  }

  _exportCSS() {
    const cs = getComputedStyle(document.documentElement);
    let css = ':root {\n';
    for (const t of TOKENS) {
      css += `  ${t.prop}: ${cs.getPropertyValue(t.prop).trim()};\n`;
    }
    css += '}';
    navigator.clipboard.writeText(css).then(() => {
      const btn = this._panel.querySelector('.cup-tp__btn--export');
      const orig = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = orig; }, 1500);
    });
  }

  _shareLink() {
    const cs = getComputedStyle(document.documentElement);
    const params = new URLSearchParams();
    for (const t of TOKENS) {
      const val = cs.getPropertyValue(t.prop).trim();
      if (val) params.set(t.prop.replace('--cup-color-', ''), val.replace('#', ''));
    }
    const url = location.origin + location.pathname + '?theme=' + params.toString();
    navigator.clipboard.writeText(url).then(() => {
      const btn = this._panel.querySelector('.cup-tp__btn--share');
      const orig = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = orig; }, 1500);
    });
  }

  /** Apply theme from URL query params (call on page load). */
  static applyFromURL() {
    const params = new URLSearchParams(location.search);
    const themeParam = params.get('theme');
    if (!themeParam) return false;
    const tokens = new URLSearchParams(themeParam);
    for (const [key, val] of tokens) {
      document.documentElement.style.setProperty(`--cup-color-${key}`, `#${val}`);
    }
    return true;
  }
}

customElements.define('cup-theme-picker', CupThemePicker);
export { CupThemePicker, PRESETS, TOKENS };
