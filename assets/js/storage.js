export function getStoredValue(key, fallback) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : fallback;
}

export function setStoredValue(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
