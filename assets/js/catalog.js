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
                <img src="../${item.imagen}" alt="${item.titulo}">
                <div class="card-info">
                    <h3>${item.titulo}</h3>
                    <p>${item.tipo} • ${item.anio}</p>
                    <p>⭐ ${item.calificacion}</p>
                    <button class="btn-details" data-id="${item.id}">Ver detalles</button>
                    <button class="btn-fav" data-id="${item.id}">❤️</button>
                </div>
            `;
            grid.appendChild(card);
        });
    } catch (error) {
        grid.innerHTML = '<p>Error al cargar el catálogo.</p>';
    }
}