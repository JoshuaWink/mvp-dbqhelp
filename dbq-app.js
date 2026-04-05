/* dbq-app.js — DBQHelp application logic
 * Mobile nav toggle + contact form handling.
 * No dependencies — vanilla JS. */

(function () {
  'use strict';

  // ── Mobile Nav Toggle ──
  var toggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.hasAttribute('data-open');
      if (open) {
        nav.removeAttribute('data-open');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        nav.setAttribute('data-open', '');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
  }

  // ── Contact Form Handling ──
  var form = document.getElementById('contact-form');
  var success = document.getElementById('form-success');

  if (form && success) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Gather values from cup-core components
      var fields = {
        firstName: getFieldValue('firstName'),
        lastName: getFieldValue('lastName'),
        email: getFieldValue('email'),
        phone: getFieldValue('phone'),
        service: getSelectValue('service'),
        message: getTextareaValue('message'),
        consent: getCheckboxValue('consent')
      };

      // Basic validation
      var errors = [];
      if (!fields.firstName) errors.push({ name: 'firstName', msg: 'First name is required' });
      if (!fields.lastName) errors.push({ name: 'lastName', msg: 'Last name is required' });
      if (!fields.email) errors.push({ name: 'email', msg: 'Email address is required' });
      else if (!fields.email.includes('@')) errors.push({ name: 'email', msg: 'Please enter a valid email' });
      if (!fields.service) errors.push({ name: 'service', msg: 'Please select a service' });
      if (!fields.consent) errors.push({ name: 'consent', msg: 'Please acknowledge this disclaimer' });

      // Clear previous errors
      clearErrors();

      if (errors.length > 0) {
        errors.forEach(function (err) {
          setFieldError(err.name, err.msg);
        });
        return;
      }

      // Simulate submission (no backend — prototype)
      form.style.display = 'none';
      success.style.display = 'block';
    });
  }

  function getFieldValue(name) {
    var el = form.querySelector('cup-field[name="' + name + '"]');
    if (!el) return '';
    var input = el.querySelector('input');
    return input ? input.value.trim() : '';
  }

  function getSelectValue(name) {
    var el = form.querySelector('cup-select[name="' + name + '"]');
    if (!el) return '';
    var select = el.querySelector('select');
    return select ? select.value : '';
  }

  function getTextareaValue(name) {
    var el = form.querySelector('cup-textarea[name="' + name + '"]');
    if (!el) return '';
    var textarea = el.querySelector('textarea');
    return textarea ? textarea.value.trim() : '';
  }

  function getCheckboxValue(name) {
    var el = form.querySelector('cup-checkbox[name="' + name + '"]');
    if (!el) return false;
    var input = el.querySelector('input[type="checkbox"]');
    return input ? input.checked : false;
  }

  function setFieldError(name, msg) {
    var el = form.querySelector('[name="' + name + '"]');
    if (el && el.setAttribute) {
      el.setAttribute('error', msg);
    }
  }

  function clearErrors() {
    var fields = form.querySelectorAll('cup-field, cup-select, cup-textarea, cup-checkbox');
    fields.forEach(function (f) {
      f.removeAttribute('error');
    });
  }
})();
