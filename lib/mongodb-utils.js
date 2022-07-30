import { MongoClient, ObjectId } from 'mongodb';

export function idsToObjectIds(ids = []) {
  return ids.map(id => ObjectId(id));
}

export async function connectDatabase() {
  const localConnectionString = `mongodb://localhost:27017/`;
  const cloudConnectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@cluster0.qjqyicd.mongodb.net/?retryWrites=true&w=majority`;

  return await MongoClient.connect(
    process.env.USE_CLOUD_DATABASE === 'true'
      ? cloudConnectionString
      : localConnectionString
  );
}

// INSERT
export async function insertDocument(client, document) {
  const database =
    process.env.USE_CLOUD_DATABASE === 'true'
      ? process.env.mongodb_database
      : null;

  const db = client.db(database || 'blog');

  return await db.collection('forms').insertOne(document);
}

// QUERY
/**
 * @param {object} client The Mongodb client
 * @param {string} collection The collection name
 * @param {array} documents The documents array
 */
export async function getAllDocuments(client, collection, documents) {
  const db = client.db('blog');

  return await db.collection(collection).find(documents).toArray();
}

// UPDATE

// DELETE
/**
 * @param {object} client The Mongodb client
 * @param {string} collection The collection name
 * @param {array} documents The documents array
 */
export async function deleteDocuments(client, collection, documents) {
  const db = client.db('blog');

  return await db
    .collection(collection)
    .deleteMany({ _id: { $in: documents } });
}
