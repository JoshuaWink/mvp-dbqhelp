(function () {
  'use strict';

  /* ── Mobile menu toggle ── */
  var menuBtn = document.getElementById('menu-toggle');
  var nav = document.getElementById('main-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var isOpen = nav.hasAttribute('data-open');
      if (isOpen) {
        nav.removeAttribute('data-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      } else {
        nav.setAttribute('data-open', '');
        menuBtn.setAttribute('aria-expanded', 'true');
      }
    });
  }

  /* ── Contact form ── */
  var form = document.getElementById('contact-form');
  var successBox = document.getElementById('form-success');
  if (!form || !successBox) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();

    var data = {
      firstName: fieldVal('firstName'),
      lastName:  fieldVal('lastName'),
      email:     fieldVal('email'),
      phone:     fieldVal('phone'),
      service:   selectVal('service'),
      message:   textareaVal('message'),
      consent:   checkboxVal('consent')
    };

    var errs = [];
    if (!data.firstName) errs.push({ n: 'firstName', m: 'First name is required' });
    if (!data.lastName)  errs.push({ n: 'lastName',  m: 'Last name is required' });
    if (!data.email)     errs.push({ n: 'email',     m: 'Email is required' });
    else if (!data.email.includes('@')) errs.push({ n: 'email', m: 'Please enter a valid email' });
    if (!data.service)   errs.push({ n: 'service',   m: 'Please select a service' });
    if (!data.consent)   errs.push({ n: 'consent',   m: 'Consent is required' });

    if (errs.length) {
      errs.forEach(function (err) { setError(err.n, err.m); });
      return;
    }

    /* ── Submit to FormSubmit ── */
    var fd = new FormData();
    fd.append('_subject', 'New Contact Form Submission — DBQ Help');
    fd.append('_cc', 'kay@dbqhelp.com');
    fd.append('_template', 'table');
    fd.append('_captcha', 'false');
    fd.append('First Name', data.firstName);
    fd.append('Last Name', data.lastName);
    fd.append('Email', data.email);
    fd.append('Phone', data.phone || 'Not provided');
    fd.append('Service Needed', data.service);
    fd.append('Message', data.message || 'No message');

    var submitBtn = form.querySelector('cup-button[type="submit"]');
    if (submitBtn) submitBtn.setAttribute('disabled', '');

    fetch('https://formsubmit.co/ajax/info@dbqhelp.com', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: fd
    })
    .then(function (r) { return r.json(); })
    .then(function (res) {
      if (res.success) {
        form.style.display = 'none';
        successBox.style.display = 'block';
      } else {
        alert('Something went wrong. Please call us at 916-202-0558.');
        if (submitBtn) submitBtn.removeAttribute('disabled');
      }
    })
    .catch(function () {
      alert('Could not send message. Please call us at 916-202-0558.');
      if (submitBtn) submitBtn.removeAttribute('disabled');
    });
  });

  function fieldVal(name) {
    var el = form.querySelector('cup-field[name="' + name + '"]');
    if (!el) return '';
    var input = el.querySelector('input');
    return input ? input.value.trim() : '';
  }
  function selectVal(name) {
    var el = form.querySelector('cup-select[name="' + name + '"]');
    if (!el) return '';
    var sel = el.querySelector('select');
    return sel ? sel.value : '';
  }
  function textareaVal(name) {
    var el = form.querySelector('cup-textarea[name="' + name + '"]');
    if (!el) return '';
    var ta = el.querySelector('textarea');
    return ta ? ta.value.trim() : '';
  }
  function checkboxVal(name) {
    var el = form.querySelector('cup-checkbox[name="' + name + '"]');
    if (!el) return false;
    var cb = el.querySelector('input[type="checkbox"]');
    return cb ? cb.checked : false;
  }
  function setError(name, msg) {
    var el = form.querySelector('cup-field[name="' + name + '"], cup-select[name="' + name + '"], cup-textarea[name="' + name + '"], cup-checkbox[name="' + name + '"]');
    if (el) el.setAttribute('error', msg);
  }
  function clearErrors() {
    form.querySelectorAll('cup-field[error],cup-select[error],cup-textarea[error],cup-checkbox[error]')
      .forEach(function (el) { el.removeAttribute('error'); });
  }
})();
