document.querySelectorAll('.top-nav').forEach((navigation) => {
  const toggle = navigation.querySelector('.nav-toggle');
  const links = navigation.querySelector('.nav-links');

  if (!toggle || !links) return;

  const closeMenu = (returnFocus = false) => {
    navigation.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');

    if (returnFocus) toggle.focus();
  };

  toggle.hidden = false;
  navigation.classList.add('nav-ready');

  toggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  navigation.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigation.classList.contains('nav-open')) {
      closeMenu(true);
    }
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => closeMenu());
  });
});
