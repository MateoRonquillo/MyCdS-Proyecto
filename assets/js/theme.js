const THEME_KEY = 'cinescope-theme';

export function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
  updateThemeButton(theme);
}

export function loadTheme() {
  const storedTheme = localStorage.getItem(THEME_KEY);
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(storedTheme || (systemPrefersDark ? 'dark' : 'light'));
}

export function toggleTheme() {
  const currentTheme = document.documentElement.dataset.theme;
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

function updateThemeButton(theme) {
  const button = document.querySelector('[data-theme-toggle]');
  if (!button) return;

  const isDark = theme === 'dark';
  button.setAttribute('aria-pressed', String(isDark));
  button.setAttribute(
    'aria-label',
    isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'
  );
}
export function initThemeToggle() {
  const button = document.querySelector('[data-theme-toggle]');
  if (!button) return;

  button.addEventListener('click', toggleTheme);
}