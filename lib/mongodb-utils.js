import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  const localConnectionString = `mongodb://localhost:27017/blog`;
  const cloudConnectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@cluster0.qjqyicd.mongodb.net/?retryWrites=true&w=majority`;

  return await MongoClient.connect(
    process.env.USE_CLOUD_DATABASE === true
      ? cloudConnectionString
      : localConnectionString
  );
}

export async function insertDocument(client, document) {
  const database =
    process.env.USE_CLOUD_DATABASE === true
      ? process.env.mongodb_database
      : null;

  const db = client.db(database || 'blog');

  return await db.collection('forms').insertOne(document);
}
