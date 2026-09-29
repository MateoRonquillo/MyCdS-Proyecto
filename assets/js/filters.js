export function filterCatalog(items, options = {}) {
  if (typeof options === 'string') {
    options = { query: options };
  }

  const { query = '', type = '', genre = '', year = '', sortBy = 'default' } = options;

  let filteredItems = items.filter(item => {
    const title = item.titulo || item.title || '';
    const genres = item.generos || item.genres || (item.genero ? [item.genero] : []);
    const matchQuery = !query || title.toLowerCase().includes(query.trim().toLowerCase());
    const matchType = !type || (item.tipo || item.type) === type;
    const matchGenre = !genre || genres.includes(genre);
    const matchYear = !year || String(item.anio || item.year || '') === String(year);

    return matchQuery && matchType && matchGenre && matchYear;
  });

  if (sortBy !== 'default') {
    filteredItems.sort((a, b) => {
      const titleA = a.titulo || a.title || '';
      const titleB = b.titulo || b.title || '';
      if (sortBy === 'az') return titleA.localeCompare(titleB);
      if (sortBy === 'za') return titleB.localeCompare(titleA);
      if (sortBy === 'rating-desc') return (b.calificacion || 0) - (a.calificacion || 0);
      if (sortBy === 'year-desc') return (b.anio || b.year || 0) - (a.anio || a.year || 0);
      if (sortBy === 'year-asc') return (a.anio || a.year || 0) - (b.anio || b.year || 0);
      return 0;
    });
  }

  return filteredItems;
}