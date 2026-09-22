const THEME_KEY = 'cinescope-theme';

export function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
}

export function loadTheme() {
  setTheme(localStorage.getItem(THEME_KEY) || 'light');
}
