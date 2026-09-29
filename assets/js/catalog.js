// ==========================================
// 1. LÓGICA DEL CATÁLOGO Y TARJETAS
// ==========================================
export async function renderCatalog() {
    const grid = document.getElementById('catalog-grid');
    if (!grid) return;

    try {
        const response = await fetch('data/catalog.json');
        if (!response.ok) throw new Error('Error de red');
        
        const data = await response.json();
        grid.innerHTML = ''; 

        data.items.forEach(item => {
            const card = document.createElement('article');
            card.className = 'card';
            card.innerHTML = `
                <img src="${item.imagen || item.image || ''}" alt="${item.titulo || item.title || 'Imagen'}">
                <div class="card-info">
                    <h3>${item.titulo || item.title}</h3>
                    <p>${item.tipo || 'Película'} • ${item.anio || 'N/A'}</p>
                    <p>⭐ ${item.calificacion || 'N/A'}</p>
                    <button class="btn-details" data-id="${item.id}">Ver detalles</button>
                    <button class="btn-fav" data-id="${item.id}">❤️</button>
                </div>
            `;
            
            // Conectamos el botón de la tarjeta con el modal
            const btnDetails = card.querySelector('.btn-details');
            btnDetails.addEventListener('click', () => {
                openDetailsModal(item);
            });

            grid.appendChild(card);
        });
    } catch (error) {
        grid.innerHTML = '<p>Error al cargar el catálogo.</p>';
    }
}

// Por si otros módulos (como los filtros) usan esta función en develop, la conservamos
export async function loadCatalog() {
  const response = await fetch('data/catalog.json');
  return response.json();
}


// ==========================================
// 2. LÓGICA DE LA VENTANA MODAL 
// ==========================================
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
  
  // Inyectar los datos en el HTML del modal (soporta 'titulo' o 'title')
  modalTitle.textContent = movieData.titulo || movieData.title || 'Sin título';
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
if (modal) {
  modal.addEventListener('click', (event) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height
      && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
    if (!isInDialog) {
      modal.close();
    }
  });
}