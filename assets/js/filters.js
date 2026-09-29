export function filterCatalog(items, options = {}) {
  // Extraemos las opciones con valores por defecto
  const { query = '', type = '', genre = '', year = '', sortBy = 'default' } = options;

  // 1. Aplicar todos los filtros combinados
  let filteredItems = items.filter(item => {
    // Coincidencia de texto en el título
    const matchQuery = !query || item.titulo?.toLowerCase().includes(query.trim().toLowerCase());
    
    // Coincidencia de tipo (pelicula o serie)
    const matchType = !type || item.tipo === type;
    
    // Coincidencia de género (buscamos en el arreglo de géneros)
    const matchGenre = !genre || (item.generos && item.generos.includes(genre));
    
    // Coincidencia de año
    const matchYear = !year || item.anio?.toString() === year;

    // La película debe cumplir TODOS los filtros activos
    return matchQuery && matchType && matchGenre && matchYear;
  });

  // 2. Aplicar el ordenamiento a los resultados filtrados
  if (sortBy !== 'default') {
    filteredItems.sort((a, b) => {
      if (sortBy === 'az') return a.titulo.localeCompare(b.titulo);
      if (sortBy === 'za') return b.titulo.localeCompare(a.titulo);
      if (sortBy === 'rating-desc') return (b.calificacion || 0) - (a.calificacion || 0);
      if (sortBy === 'year-desc') return (b.anio || 0) - (a.anio || 0);
      if (sortBy === 'year-asc') return (a.anio || 0) - (b.anio || 0);
      return 0;
    });
  }

  return filteredItems;
}