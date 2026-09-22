export function filterCatalog(items, query = '') {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return items;

  return items.filter((item) => item.title.toLowerCase().includes(normalizedQuery));
}
