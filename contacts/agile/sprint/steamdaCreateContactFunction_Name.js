import { contacts } from 'wix-crm-backend'

export function steamdaCreateContactFunction(paramObject) {
  const contactInfo = paramObject.contactInfo;
  // const contactInfo = {
  //   name: {
  //     first: "Ari",
  //     last: "Thereyet"
  //   }
  // };

  const options = {}
  if(typeof paramObject.options === 'object'){
    options = paramObject.options;
  }else{
    options = {
      allowDuplicates: false,
      suppressAuth: false
    };
  }

  return contacts.createContact(contactInfo, options)
    .then((contact) => {
      return contact;
    })
    .catch((error) => {
      console.error(error);
    });
}

/* Promise resolves to:
 * {
 *   "_id": "3aea0d42-f0b4-4571-8be8-8d0d81bec887",
 *   "_createdDate": "2021-03-30T13:16:31.529Z",
 *   "_updatedDate": "2021-03-30T13:16:31.530Z",
 *   "revision": 0,
 *   "info": {
 *     "name": {
 *       "first": "Ari",
 *       "last": "Thereyet"
 *     },
 *     "picture": {},
 *     "extendedFields": {
 *       "contacts.displayByFirstName": "Ari Thereyet",
 *       "contacts.displayByLastName": "Thereyet Ari"
 *     }
 *   },
 *   "lastActivity": {
 *     "activityDate": "2021-03-30T13:16:31.529Z",
 *     "activityType": "CONTACT_CREATED"
 *   },
 *   "source": {
 *     "appId": "v4.createContact",
 *     "sourceType": "OTHER"
 *   }
 * }
 */