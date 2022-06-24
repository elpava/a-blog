import fs from 'fs';
import path from 'path';

function getFilePath(folder, file) {
  return path.join(process.cwd(), 'data', folder, file);
}

function setContactsData(file) {
  const filePath = getFilePath('forms', 'contacts.json');
  fs.writeFileSync(filePath, JSON.stringify(file));
}

export function getContactsData() {
  const filePath = getFilePath('forms', 'contacts.json');
  const fileData = fs.readFileSync(filePath);
  const forms = JSON.parse(fileData);

  return forms;
}

export function storeContactsData(data) {
  const contactsData = getContactsData();

  contactsData.push(data);

  setContactsData(contactsData);
}
