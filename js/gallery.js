(function () {
  'use strict';

  var galleryGrid = document.getElementById('gallery-grid');
  var modal = document.getElementById('painting-modal');
  var modalImage = document.getElementById('modal-image');
  var modalTitle = document.getElementById('modal-title');
  var modalDate = document.getElementById('modal-date');
  var modalBlurb = document.getElementById('modal-blurb');
  var modalClose = modal.querySelector('.modal-close');
  var lastFocusedElement = null;

  // ── Render Gallery ──────────────────────────────────────────

  function getImageSrc(painting) {
    // Support both local filenames and full URLs
    if (painting.image.indexOf('http') === 0) {
      return painting.image;
    }
    return 'images/paintings/' + painting.image;
  }

  function renderGallery() {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < PAINTINGS.length; i++) {
      var painting = PAINTINGS[i];

      var item = document.createElement('article');
      item.className = 'gallery-item comic-panel';
      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
      item.setAttribute('aria-label', 'View details: ' + painting.title);
      item.setAttribute('data-index', i);

      var img = document.createElement('img');
      img.src = getImageSrc(painting);
      img.alt = painting.alt;
      img.loading = 'lazy';
      img.decoding = 'async';
      img.width = 400;
      img.height = 533;

      var titleOverlay = document.createElement('div');
      titleOverlay.className = 'gallery-item-title';
      titleOverlay.textContent = painting.title;

      item.appendChild(img);
      item.appendChild(titleOverlay);
      fragment.appendChild(item);
    }

    galleryGrid.appendChild(fragment);
  }

  // ── Modal Logic ─────────────────────────────────────────────

  function openModal(index) {
    var painting = PAINTINGS[index];
    if (!painting) return;

    lastFocusedElement = document.activeElement;

    modalImage.src = getImageSrc(painting);
    modalImage.alt = painting.alt;
    modalTitle.textContent = painting.title;
    modalDate.textContent = painting.date;
    modalBlurb.textContent = painting.blurb;

    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeModal() {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  // ── Focus Trap ──────────────────────────────────────────────

  function trapFocus(event) {
    if (modal.hasAttribute('hidden')) return;
    if (event.key !== 'Tab') return;

    var focusable = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    var firstFocusable = focusable[0];
    var lastFocusable = focusable[focusable.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }
  }

  // ── Event Listeners ─────────────────────────────────────────

  // Gallery item click (event delegation)
  galleryGrid.addEventListener('click', function (e) {
    var item = e.target.closest('.gallery-item');
    if (item) {
      openModal(parseInt(item.getAttribute('data-index'), 10));
    }
  });

  // Keyboard activation on gallery items
  galleryGrid.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      var item = e.target.closest('.gallery-item');
      if (item) {
        e.preventDefault();
        openModal(parseInt(item.getAttribute('data-index'), 10));
      }
    }
  });

  // Close modal
  modalClose.addEventListener('click', closeModal);

  // Close on overlay click
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Escape key closes modal
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
      closeModal();
    }
  });

  // Focus trap
  document.addEventListener('keydown', trapFocus);

  // ── Initialize ──────────────────────────────────────────────
  renderGallery();

})();
