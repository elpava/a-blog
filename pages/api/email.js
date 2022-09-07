import { connectDatabase, insertDocument } from '../../lib/mongodb-utils';
import * as yup from 'yup';

async function handle(req, res) {
  const { email } = req.body;
  const checkInput = { isValid: null, validate: null };
  let client;

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('The email is not valid!')
      .required('is required'),
  });

  try {
    checkInput.isValid = await schema.isValid({ email });
  } catch (err) {}

  try {
    checkInput.validate = await schema.validate({ email });
  } catch (err) {
    checkInput.validate = err;
  }

  if (!checkInput.isValid) {
    res
      .status(422)
      .json({ message: checkInput.validate.errors[0] || 'Invalid input.' });
    return;
  }

  const document = { email };

  try {
    client = await connectDatabase();
  } catch (err) {
    res.status(500).json({ message: 'Connecting to the database failed.' });
  }

  try {
    await insertDocument(client, 'subscriptions', document);
    res.status(201).json({ message: 'Successfully added email.' });
  } catch (err) {
    res.status(500).json({ message: 'Adding email failed.' });
    client.close();
    return;
  }

  client.close();
}

export default handle;
