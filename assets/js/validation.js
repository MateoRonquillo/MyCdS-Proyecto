export function isValidCatalogItem(item) {
  return Boolean(item && typeof item.title === 'string' && item.title.trim());
}
