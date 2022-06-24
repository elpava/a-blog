import { insertDocument } from '../../lib/mongodb-utils';
import { storeContactsData } from '../../lib/store-utils';

async function handler(req, res) {
  if (req.method === 'POST') {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    if (!name || !email.includes('@') || !message) {
      res.status(422).json({ message: 'Invalid inputs.' });
      return;
    }

    const newFormData = {
      date: new Date().toISOString(),
      name,
      email,
      message,
    };

    insertDocument(newFormData);

    storeContactsData(newFormData);

    res.status(201).json({ message: 'Success.', data: newFormData });
  } else {
    res.status(400).json({ message: 'error happend!' });
  }
}

export default handler;
