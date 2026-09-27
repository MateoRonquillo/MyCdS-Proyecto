export function initMobileNav() {
  const toggleButton = document.querySelector('[data-nav-toggle]');
  const menu = document.querySelector('[data-nav-menu]');

  if (!toggleButton || !menu) return;

  toggleButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggleButton.setAttribute('aria-expanded', 'false');
    });
  });
}