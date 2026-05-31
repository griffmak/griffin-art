(function () {
  'use strict';

  var modal = document.getElementById('painting-modal');
  var modalImage = document.getElementById('modal-image');
  var modalTitle = document.getElementById('modal-title');
  var modalDate = document.getElementById('modal-date');
  var modalBlurb = document.getElementById('modal-blurb');
  var modalClose = modal.querySelector('.modal-close');
  var lastFocusedElement = null;

  // ── Helpers ─────────────────────────────────────────────────

  function getImageSrc(painting) {
    if (painting.image.indexOf('http') === 0) return painting.image;
    return painting.image;
  }

  function lookupArtwork(arrayName, index) {
    if (arrayName === 'covers') return COMIC_COVERS[index];
    return PAINTINGS[index];
  }

  // ── Render ──────────────────────────────────────────────────

  function renderSection(gridId, data, arrayName) {
    var grid = document.getElementById(gridId);
    if (!grid) return;

    var fragment = document.createDocumentFragment();

    for (var i = 0; i < data.length; i++) {
      var piece = data[i];

      var item = document.createElement('article');
      item.className = 'gallery-item comic-panel';
      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
      item.setAttribute('aria-label', 'View details: ' + piece.title);
      item.setAttribute('data-array', arrayName);
      item.setAttribute('data-index', i);

      if (piece.inProgress) {
        var badge = document.createElement('div');
        badge.className = 'in-progress-badge';
        badge.textContent = 'In Progress';
        item.appendChild(badge);
      }

      var img = document.createElement('img');
      img.src = getImageSrc(piece);
      img.alt = piece.alt;
      img.loading = 'lazy';
      img.decoding = 'async';
      img.width = 400;
      img.height = 533;

      var titleOverlay = document.createElement('div');
      titleOverlay.className = 'gallery-item-title';
      titleOverlay.textContent = piece.title;

      item.appendChild(img);
      item.appendChild(titleOverlay);
      fragment.appendChild(item);
    }

    grid.appendChild(fragment);
  }

  // ── Modal ────────────────────────────────────────────────────

  function openModal(arrayName, index) {
    var piece = lookupArtwork(arrayName, index);
    if (!piece) return;

    lastFocusedElement = document.activeElement;

    modalImage.src = getImageSrc(piece);
    modalImage.alt = piece.alt;
    modalTitle.textContent = piece.title;
    modalDate.textContent = piece.date;
    modalBlurb.textContent = piece.blurb;

    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeModal() {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  // ── Focus Trap ───────────────────────────────────────────────

  function trapFocus(event) {
    if (modal.hasAttribute('hidden')) return;
    if (event.key !== 'Tab') return;

    var focusable = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    var first = focusable[0];
    var last = focusable[focusable.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === first) { event.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  }

  // ── Event Delegation ─────────────────────────────────────────

  function handleGalleryClick(e) {
    var item = e.target.closest('.gallery-item');
    if (!item) return;
    openModal(item.getAttribute('data-array'), parseInt(item.getAttribute('data-index'), 10));
  }

  function handleGalleryKey(e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var item = e.target.closest('.gallery-item');
    if (!item) return;
    e.preventDefault();
    openModal(item.getAttribute('data-array'), parseInt(item.getAttribute('data-index'), 10));
  }

  document.addEventListener('click', handleGalleryClick);
  document.addEventListener('keydown', handleGalleryKey);
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) closeModal();
  });
  document.addEventListener('keydown', trapFocus);

  // ── Initialize ───────────────────────────────────────────────

  renderSection('covers-grid', COMIC_COVERS, 'covers');
  renderSection('paintings-grid', PAINTINGS, 'paintings');

})();
