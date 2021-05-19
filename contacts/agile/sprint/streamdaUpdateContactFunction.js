import { contacts } from 'wix-crm-backend';

export function steamdaUpdateContactFunction(paramObject) {
  const contactIdentifiers = paramObject.contactIdentifiers;
//   const contactIdentifiers = {
//     contactId: "0677ef55-cf20-4f68-989a-f31d3649eb72",
//     revision: 6
//   };
  const contactInfo = .paramObject.contactInfo;
//   const contactInfo = {
//     name: {
//       first: "Annie",
//       last: "New Name"
//     },
//     extendedFields: {
//       "custom.event-we-met-at": "Cloud Computing MegaCon"
//     }
//   };
  const options = {
    allowDuplicates: false,
    suppressAuth: false
  };

  return contacts.updateContact(contactIdentifiers, contactInfo, options)
    .then((updatedContact) => {
      return updatedContact;
    })
    .catch((error) => {
      console.error(error);
    });
}

/* Promise resolves to:
  * {
 *   "_id": "0677ef55-cf20-4f68-989a-f31d3649eb72",
 *   "_createdDate": "2021-03-31T20:24:48.393Z",
 *   "_updatedDate": "2021-04-07T20:37:48.588Z",
 *   "revision": 7,
 *   "info": {
 *     "name": {
 *       "first": "Annie",
 *       "last": "New Name"
 *     },
 *     "picture": {},
 *     "extendedFields": {
 *       "custom.event-we-met-at": "Cloud Computing MegaCon",
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