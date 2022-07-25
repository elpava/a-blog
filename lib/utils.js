import { ObjectId } from 'mongodb';

export function capitalizeWords(words = '') {
  return words
    .replace('-', ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function idsToObjectIds(ids = []) {
  return ids.map(id => ObjectId(id));
}
