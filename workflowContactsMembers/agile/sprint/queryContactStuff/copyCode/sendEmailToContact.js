import wixCrmBackend from 'wix-crm-backend';
import { contacts } from 'wix-crm-backend';

export async function sendEmailToContact() {

  let contactId;
  const emailToFind = 'zackary.sirko@example.com'
  const queryResults = await contacts.queryContacts()
    .eq("info.emails.email", emailToFind)
    .find();
  const contactsWithEmail = queryResults.items;

  if (contactsWithEmail.length === 1) {

    console.log('Found 1 contact');
    contactId = contactsWithEmail[0]._id;

  } else if (contactsWithEmail.length > 1) {

    console.log('Found more than 1 contact');
    // Handle when more than one contact is found

  } else {

    console.log('No contacts found');
    // Handle when no contacts are found

  }

  const triggeredEmailTemplate = "welcome_email";

  wixCrmBackend.emailContact(triggeredEmailTemplate, contactId)
    .then(() => {
      console.log('Email sent to contact');
    })
    .catch((error) => {
      console.error(error);
    });
}
