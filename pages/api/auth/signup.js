import { hashPassword } from '../../../lib/auth';
import { connectDatabase } from '../../../lib/mongodb-utils';

async function handler(req, res) {
  if (req.method !== 'POST') return;
  let client, result;
  const { username, password } = req.body;
  const usernameTransformed = username.toLowerCase();

  try {
    client = await connectDatabase();
  } catch (err) {
    res.status(500).json(err.message || 'Connecting to database failed.');
  }

  const db = client.db('blog');

  const existingUser = await db
    .collection('users')
    .findOne({ username: usernameTransformed });

  if (existingUser) {
    res.status(422).json({ message: 'User exist already!', result: null });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  try {
    result = await db
      .collection('users')
      .insertOne({ username: usernameTransformed, password: hashedPassword });
    result = { ...result, username: usernameTransformed, password };
  } catch (err) {
    res.status(500).json(err.message || 'Creating user failed.');
  }

  client.close();

  res.status(201).json({ message: 'Created user', result });
}

export default handler;
