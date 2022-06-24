import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  return await MongoClient.connect(`mongodb://localhost:27017/blog`);
}

export async function insertDocument(document) {
  const client = await connectDatabase();

  const db = client.db();

  const result = await db.collection('forms').insertOne(document);

  client.close();

  return result;
}
