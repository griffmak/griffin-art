(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');

  // Mobile hamburger toggle
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('nav-links--open');
    });
  }

  // Mark current page link as active
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  var links = document.querySelectorAll('.nav-link');
  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute('href') === currentPath) {
      links[i].classList.add('active');
    }
  }
})();
