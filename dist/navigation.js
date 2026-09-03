document.querySelectorAll('.top-nav').forEach((navigation) => {
  const toggle = navigation.querySelector('.nav-toggle');
  const links = navigation.querySelector('.nav-links');
  const backdrop = navigation.querySelector('.nav-backdrop');

  if (!toggle || !links || !backdrop) return;

  const menuLinks = Array.from(links.querySelectorAll('a'));
  const mobileNavigation = window.matchMedia('(max-width: 900px)');

  const closeMenu = (returnFocus = false) => {
    const wasOpen = navigation.classList.contains('nav-open');

    navigation.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('menu-open');

    if (returnFocus && wasOpen) {
      window.requestAnimationFrame(() => toggle.focus());
    }
  };

  const openMenu = () => {
    navigation.classList.add('nav-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation');
    document.body.classList.add('menu-open');

    window.requestAnimationFrame(() => {
      (menuLinks[0] || toggle).focus();
    });
  };

  toggle.hidden = false;
  backdrop.hidden = false;
  navigation.classList.add('nav-ready');

  toggle.addEventListener('click', () => {
    if (navigation.classList.contains('nav-open')) {
      closeMenu(true);
    } else {
      openMenu();
    }
  });

  navigation.addEventListener('keydown', (event) => {
    if (!navigation.classList.contains('nav-open')) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu(true);
      return;
    }

    if (event.key === 'Tab' && menuLinks.length) {
      const firstFocusable = toggle;
      const lastFocusable = menuLinks[menuLinks.length - 1];

      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }
  });

  backdrop.addEventListener('click', () => closeMenu(true));

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => closeMenu());
  });

  const handleBreakpointChange = (event) => {
    if (!event.matches) closeMenu();
  };

  if (typeof mobileNavigation.addEventListener === 'function') {
    mobileNavigation.addEventListener('change', handleBreakpointChange);
  } else {
    mobileNavigation.addListener(handleBreakpointChange);
  }
});
