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
        card.style.display = selected === 'all' || category === selected ? '' : 'none';
      });
    });
  });
}

function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');

  if (!slides.length || !prevBtn || !nextBtn) {
    return;
  }

  let current = 0;

  function render() {
    slides.forEach(function (slide, index) {
      slide.classList.toggle('active', index === current);
    });
  }

  prevBtn.addEventListener('click', function () {
    current = (current - 1 + slides.length) % slides.length;
    render();
  });

  nextBtn.addEventListener('click', function () {
    current = (current + 1) % slides.length;
    render();
  });

  setInterval(function () {
    current = (current + 1) % slides.length;
    render();
  }, 5500);

  render();
}

function initEventAccordion() {
  const toggles = document.querySelectorAll('.event-toggle');
  if (!toggles.length) {
    return;
  }

  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      const body = toggle.nextElementSibling;
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      if (body) {
        body.classList.toggle('hidden');
      }
    });
  });
}

function initContactFormStub() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('contactFeedback');

  if (!form || !feedback) {
    return;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('contactName');
    const email = document.getElementById('contactEmail');
    const subject = document.getElementById('contactSubject');
    const message = document.getElementById('contactMessage');

    if (!name.value.trim() || !email.value.trim() || !subject.value.trim() || !message.value.trim()) {
      feedback.textContent = 'Please complete all fields before submitting the form.';
      return;
    }

    feedback.textContent = 'Thank you. Your message has been captured on this demo interface. Please use official phone/email for urgent issues.';
    form.reset();
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
  initCarousel();
  initEventAccordion();
  initContactFormStub();
  initGalleryLightbox();
});
