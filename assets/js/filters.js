export function filterCatalog(items, query = '') {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return items;
  }

  return items.filter((item) =>
    item.titulo?.toLowerCase().includes(normalizedQuery)
  );
}
