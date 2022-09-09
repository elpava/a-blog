import { connectDatabase, insertDocument } from '../../lib/mongodb-utils';
import { storeContactsData } from '../../lib/store-utils';

async function handler(req, res) {
  if (req.method === 'POST') {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    let client;

    // TODO use Yup
    if (
      !name ||
      name.trim() === '' ||
      !email.includes('@') ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newFormData = {
      date: new Date().toISOString(),
      name,
      email,
      message,
    };

    try {
      client = await connectDatabase();
    } catch (err) {
      res.status(500).json({ message: 'Connecting to the database failed.' });
      return;
    }

    try {
      await insertDocument(client, 'forms', newFormData);
      res
        .status(201)
        .json({ message: 'Successfully stored message.', data: newFormData });
    } catch (err) {
      res.status(500).json({ message: 'Storing message failed.' });
      client.close();
      return;
    }

    client.close();

    storeContactsData(newFormData);
  }
}

export default handler;
