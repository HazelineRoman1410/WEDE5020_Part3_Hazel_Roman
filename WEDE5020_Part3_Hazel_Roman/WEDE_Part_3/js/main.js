/* WEDE5020 Part 3 - interactive behaviour for the Mastercard Foundation website. */
'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // Keep the footer year current without requiring a manual annual edit.
  document.querySelectorAll('[data-current-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

  // Service/programme keyword filter. Content is hidden, not removed, so it remains in the DOM.
  const search = document.querySelector('#programmeSearch');
  if (search) {
    const main = search.closest('main') || document.querySelector('main');
    const candidates = main ? [...main.querySelectorAll('article, .service-card, .programme-card, section > div')] : [];
    const unique = [...new Set(candidates)].filter(el => !el.closest('.part3-search') && el.textContent.trim().length > 35);
    search.addEventListener('input', () => {
      const term = search.value.trim().toLocaleLowerCase(); let shown = 0;
      unique.forEach(el => { const match = !term || el.textContent.toLocaleLowerCase().includes(term); el.hidden = !match; if (match) shown++; });
      const status = document.querySelector('#searchStatus'); if (status) status.textContent = term ? `${shown} matching content section(s) shown.` : 'Showing all programme content.';
    });
  }

  // Reusable client-side validation for both required forms.
  function validateForm(form, feedback, mode) {
    if (!form) return;
    form.addEventListener('submit', event => {
      event.preventDefault();
      const errors = [];
      form.querySelectorAll('[data-error-for]').forEach(node => node.remove());
      const required = [...form.querySelectorAll('input[required], select[required], textarea[required]')];
      const checkedFields = [...new Set([...required, ...form.querySelectorAll('input[type="email"], input[type="tel"]')])];
      checkedFields.forEach(field => {
        const value = field.value.trim();
        let message = '';
        if (!value && field.required) message = 'This field is required.';
        else if (value && field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = 'Enter a valid email address.';
        else if (value && field.type === 'tel' && !/^[+()\d\s-]{7,20}$/.test(value)) message = 'Enter a valid phone number.';
        else if (field.minLength > 0 && value.length < field.minLength) message = `Enter at least ${field.minLength} characters.`;
        if (message) {
          errors.push(message);
          field.setAttribute('aria-invalid', 'true');
          const hint = document.createElement('span'); hint.className = 'field-error'; hint.dataset.errorFor = field.id || field.name || 'field'; hint.textContent = message;
          field.insertAdjacentElement('afterend', hint);
        } else field.removeAttribute('aria-invalid');
      });
      if (errors.length) {
        feedback.className = 'form-message error'; feedback.textContent = `Please correct ${errors.length} field error(s) before continuing.`;
        const first = form.querySelector('[aria-invalid="true"]'); if (first) first.focus(); return;
      }
      if (mode === 'enquiry') {
        const type = form.querySelector('select[name*="type"], select[name*="enquiry"], input[name*="type"]');
        const interest = type ? type.value.toLowerCase() : '';
        let response = 'Thank you. Your enquiry details have been validated.';
        if (interest.includes('volunteer')) response += ' Volunteer opportunities depend on programme needs and location.';
        else if (interest.includes('sponsor')) response += ' Sponsorship requests are reviewed according to programme priorities.';
        else response += ' Availability and eligibility are confirmed by the relevant programme team.';
        feedback.className = 'form-message success'; feedback.textContent = response;
        form.dataset.validated = 'true';
      } else {
        const data = new FormData(form);
        const subject = encodeURIComponent('Website enquiry: ' + (data.get('subject') || data.get('messageType') || 'General message'));
        const body = encodeURIComponent([...data.entries()].map(([key,value]) => `${key}: ${value}`).join('\n'));
        feedback.className = 'form-message success';
        feedback.textContent = 'Your details passed validation. Your email application will open with a prepared message; review it and press Send to deliver it.';
        window.location.href = `mailto:canadainfo@mastercardfdn.org?subject=${subject}&body=${body}`;
      }
    });
    form.querySelectorAll('input,select,textarea').forEach(field => field.addEventListener('input', () => { if (field.value.trim()) field.removeAttribute('aria-invalid'); }));
  }
  validateForm(document.querySelector('#enquiryForm, .enquiry-form'), document.querySelector('#enquiryFeedback') || document.createElement('p'), 'enquiry');
  validateForm(document.querySelector('#contactForm, .contact-form'), document.querySelector('#contactFeedback') || document.createElement('p'), 'contact');

  // Accessible image lightbox for gallery photographs.
  const dialog = document.querySelector('#imageLightbox');
  const lightboxImage = document.querySelector('#lightboxImage');
  const caption = document.querySelector('#lightboxCaption');
  if (dialog && lightboxImage) {
    document.querySelectorAll('main img').forEach(img => {
      img.classList.add('gallery-lightbox-trigger');
      img.tabIndex = 0; img.setAttribute('role', 'button');
      img.setAttribute('aria-label', `Open larger image: ${img.alt || 'gallery image'}`);
      const open = () => { lightboxImage.src = img.currentSrc || img.src; lightboxImage.alt = img.alt || 'Expanded gallery image'; caption.textContent = img.alt || ''; dialog.showModal(); };
      img.addEventListener('click', open); img.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    });
    dialog.querySelector('.lightbox-close')?.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  }

  // Add accessible accordion behaviour to any elements marked for it in future content.
  document.querySelectorAll('[data-accordion-trigger]').forEach(button => button.addEventListener('click', () => {
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded)); if (panel) panel.hidden = expanded;
  }));
});
