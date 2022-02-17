export const compare = (a, b) => {
  if (a.name.official < b.name.official) {
    return -1
  }
  if (a.name.official > b.name.official) {
    return 1
  }
  return 0
}
