/*******************************
 * Backend code - contacts.jsw *
 *******************************/

import { contacts } from 'wix-crm-backend';

export async function overwriteContactInfo(contactId, updatedContactInfo) {

  // Get the contact's last revision number
  const myContact = await contacts.getContact(contactId);
  const contactIdentifiers = {
    contactId: contactId,
    revision: myContact.revision
  };
  const options = {
    allowDuplicates: false,
    suppressAuth: false
  };

  return await contacts.updateContact(contactIdentifiers, updatedContactInfo, options);
}

/*************
 * Page code *
 *************/

 import { overwriteContactInfo } from 'backend/contacts';

 // ...

 const contactId = "0677ef55-cf20-4f68-989a-f31d3649eb72";

 const updatedContactInfo = {
   name: {
     first: "Annie",
     last: "New Name"
   }
 };

 overwriteContactInfo(contactId, updatedContactInfo)
  .then((updatedContact) => {
    return updatedContact;
  })
  .catch((error) => {
    console.error(error);
  });

/* Updated contact resolves to:
 * {
 *   "_id": "0677ef55-cf20-4f68-989a-f31d3649eb72",
 *   "_createdDate": "2021-03-31T20:24:48.393Z",
 *   "_updatedDate": "2021-03-31T20:29:14.519Z",
 *   "revision": 4,
 *   "info": {
 *     "name": {
 *       "first": "Annie",
 *       "last": "New Name"
 *     },
 *     "picture": {},
 *     "extendedFields": {
 *       "contacts.displayByFirstName": "Annie New Name",
 *       "contacts.displayByLastName": "New Name Annie"
 *     }
 *   },
 *   "lastActivity": {
 *     "activityDate": "2021-03-31T20:24:48.393Z",
 *     "activityType": "CONTACT_CREATED"
 *   },
 *   "source": {
 *     "appId": "manual",
 *     "sourceType": "ADMIN"
 *   }
 * }
 */