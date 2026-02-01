(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const flipCards = document.querySelectorAll('[data-flip-card]');
  flipCards.forEach((card) => {
    const toggle = () => card.classList.toggle('is-flipped');

    if (prefersReducedMotion) {
      card.classList.add('reduced-motion');
    }

    // Click/tap to flip for touch devices
    card.addEventListener('click', (event) => {
      const target = event.target;
      if (target.closest('a')) return;
      toggle();
    });

    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggle();
      }
    });
  });

  const skipLink = document.querySelector('.skip-to-content');
  if (skipLink) {
    skipLink.addEventListener('click', (event) => {
      const target = document.querySelector(skipLink.getAttribute('href'));
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus();
      }
    });
  }
})();