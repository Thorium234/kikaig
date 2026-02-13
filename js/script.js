function initNavToggle() {
  const toggle = document.getElementById('navToggle');
  if (!toggle) {
    return;
  }

  toggle.addEventListener('click', function () {
    const isOpen = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

function setActiveNavLink() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-links a[href]');

  links.forEach(function (link) {
    if (link.getAttribute('href') === current) {
      link.setAttribute('aria-current', 'page');
    }
  });
}

function initNewsFilter() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-category]');

  if (!filterButtons.length || !cards.length) {
    return;
  }

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const selected = button.getAttribute('data-filter');

      filterButtons.forEach(function (btn) {
        btn.classList.remove('active');
      });
      button.classList.add('active');

      cards.forEach(function (card) {
        const category = card.getAttribute('data-category');
        const show = selected === 'all' || category === selected;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

function initGalleryLightbox() {
  const images = document.querySelectorAll('.gallery-item img');
  const lightbox = document.getElementById('lightbox');

  if (!images.length || !lightbox) {
    return;
  }

  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeButton = document.getElementById('lightboxClose');

  function closeLightbox() {
    lightbox.classList.remove('open');
  }

  images.forEach(function (img) {
    img.addEventListener('click', function () {
      const caption = img.getAttribute('data-caption') || img.getAttribute('alt') || '';
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
      lightboxCaption.textContent = caption;
      lightbox.classList.add('open');
    });
  });

  closeButton.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', function (event) {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initNavToggle();
  setActiveNavLink();
  initNewsFilter();
  initGalleryLightbox();
});
