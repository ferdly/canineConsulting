import { contacts } from 'wix-crm-backend';

export function myAppendOrCreateContactFunction() {
  const contactInfo = {
    name: {
      first: "Ari",
      last: "Thereyet"
    }
  };

  return contacts.appendOrCreateContact(contactInfo)
    .then((resolvedContact) => {
      return resolvedContact;
    })
    .catch((error) => {
      console.error(error);
    });
}

/* Promise resolves to:
 * {
 *   "contactId": "a52852d7-e0d6-484b-93fe-bffdb670f08f",
 *   "identityType": "CONTACT"
 * }
 */
