export function getObjectFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || {};
}

export function getArrayFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}
