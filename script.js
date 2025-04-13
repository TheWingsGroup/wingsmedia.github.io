window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.team, .mission, .releases, .contact');
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (pos < windowHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});
