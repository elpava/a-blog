import { hashPassword } from '../../../lib/auth';
import { connectDatabase } from '../../../lib/mongodb-utils';

async function handler(req, res) {
  if (req.method !== 'POST') return;
  let client, data;
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
    res.status(422).json({ message: 'User exist already!', data: null });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  try {
    data = await db
      .collection('users')
      .insertOne({ username: usernameTransformed, password: hashedPassword });
    data = { ...data, username: usernameTransformed, password };
  } catch (err) {
    res.status(500).json(err.message || 'Creating user failed.');
  }

  client.close();

  res.status(201).json({ message: 'Created user', data });
}

export default handler;
