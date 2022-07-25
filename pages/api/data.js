import {
  connectDatabase,
  getAllDocuments,
  deleteDocuments,
} from '../../lib/mongodb-utils';

import { idsToObjectIds } from '../../lib/utils';

async function handler(req, res) {
  let result, client;
  const selectedDb = { 'contact-forms': 'forms' };

  //* **** GET *****//
  if (req.method === 'GET') {
    try {
      client = await connectDatabase();
    } catch (err) {
      res.status(500).json({ message: 'Connecting to the database failed.' });
    }

    try {
      result = await getAllDocuments(client, {});
    } catch (err) {
      res.status(404).json({ message: 'Queried data not found.' });
      client.close();
    }

    client.close();

    res.status(200).json({ message: 'Data query was successful.', result });
  }

  //* **** POST *****//
  if (req.method === 'POST') {
    const { action, collection } = req.query;
    const ids = req.body;

    try {
      client = await connectDatabase();
    } catch (err) {
      res.status(500).json({ message: 'Connecting to the database failed.' });
    }

    if (action === 'delete') {
      const objectIds = idsToObjectIds(ids);

      try {
        result = await deleteDocuments(
          client,
          selectedDb[collection],
          objectIds
        );
      } catch (err) {
        res.status(404).json({ message: 'Delete items failed.' });
        client.close();
      }
    }

    client.close();

    res.status(200).json({ message: 'Delete items was successful.', result });
  }
}

export default handler;
