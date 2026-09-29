
import { renderCatalog, loadCatalog } from './catalog.js';
import { loadTheme, initThemeToggle } from './theme.js';
import { initMobileNav } from './nav.js';
import { getFavorites } from './favorites.js';
import { loadDashboard } from './dashboard.js';

// Inicializamos todo cuando el documento HTML esté listo
document.addEventListener('DOMContentLoaded', () => {
  // 1. Renderizar las tarjetas del catálogo
  if (typeof renderCatalog === 'function') {
    renderCatalog();
  }

  // 2. Funcionalidades del equipo: Tema, Menú y Dashboard
  loadTheme();
  initThemeToggle();
  initMobileNav();
  
  if (typeof loadCatalog === 'function') {
    loadCatalog().then((catalog) => {
      if (catalog && typeof loadDashboard === 'function') {
        loadDashboard(catalog.items || [], getFavorites());
      }
    });
  }
});