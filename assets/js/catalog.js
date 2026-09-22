export async function loadCatalog() {
  const response = await fetch('data/catalog.json');
  return response.json();
}
