export function createUuid() {
  return (Date.now() * Math.floor(Math.random() * 100)).toString('16')
}
