import {
  connectDatabase,
  getAllDocuments,
  getChunkOfAllPosts,
  deleteDocuments,
  idsToObjectIds,
} from '../../lib/mongodb-utils';

async function handler(req, res) {
  let result, client;
  const selectedDb = { 'contact-forms': 'forms', articles: 'posts' };

  //* **** GET *****//
  if (req.method === 'GET') {
    const { action, doc, fields } = req.query;

    if (action === 'query') {
      try {
        client = await connectDatabase();
      } catch (err) {
        res.status(500).json({ message: 'Connecting to the database failed.' });
      }

      if (fields) {
        const requiredFields = {};

        const fieldsQueryArray = fields.split(',');
        fieldsQueryArray.forEach(field => (requiredFields[field] = 1));

        try {
          result = await getChunkOfAllPosts(client, {}, requiredFields);
        } catch (err) {
          res.status(404).json({ message: 'Queried data not found.' });
          client.close();
        }
      } else {
        try {
          result = await getAllDocuments(client, selectedDb[doc], {});
        } catch (err) {
          res.status(404).json({ message: 'Queried data not found.' });
          client.close();
        }
      }

      client.close();

      res.status(200).json({ message: 'Data query was successful.', result });
    }
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
