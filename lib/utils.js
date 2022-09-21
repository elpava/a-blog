export function capitalizeWords(words = '') {
  return words
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function unslugString(string = '') {
  return string.replaceAll('-', ' ');
}
