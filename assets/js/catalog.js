export async function loadCatalog() {
  const response = await fetch('data/catalog.json');
  return response.json();
}
// Referencias a la ventana modal y sus elementos
const modal = document.getElementById('details-modal');
const btnCloseModal = document.getElementById('close-modal');

const modalTitle = document.getElementById('modal-title');
const modalDirector = document.getElementById('modal-director');
const modalElenco = document.getElementById('modal-elenco');
const modalSinopsis = document.getElementById('modal-sinopsis');

/**
 * Función exportada para abrir el modal desde cualquier tarjeta.
 * @param {Object} movieData - Los datos de la película extraídos del JSON
 */
export function openDetailsModal(movieData) {
  if (!modal) return;
  
  // Inyectar los datos en el HTML del modal
  modalTitle.textContent = movieData.title || 'Sin título';
  modalDirector.textContent = movieData.director || 'No especificado';
  modalElenco.textContent = movieData.elenco || 'No especificado';
  modalSinopsis.textContent = movieData.sinopsis || 'Sin sinopsis disponible.';
  
  // Método nativo de HTML5 para mostrar el dialog
  modal.showModal();
}

// Evento para cerrar el modal al presionar la "X"
if (btnCloseModal) {
  btnCloseModal.addEventListener('click', () => {
    modal.close();
  });
}

// Cerrar el modal si el usuario hace clic fuera de la caja blanca
modal.addEventListener('click', (event) => {
  const rect = modal.getBoundingClientRect();
  const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height
    && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
  if (!isInDialog) {
    modal.close();
  }
});
