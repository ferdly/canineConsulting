import { contacts } from 'wix-crm-backend'
// ø <----------- <getCurrentContactLables Front-End>  ----------->
export async function doCreateContact() {
  let wixContactInfo = JSON.parse($w('#codePrepContact').value);
  let paramObjectThis = {};
  paramObjectThis.contactInfo = wixContactInfo.contactInfo;
console.log("[~LINE 864]paramObjectThis.contactInfo: ")
console.log(paramObjectThis)
console.log(paramObjectThis.contactInfo)
let wixContact = await steamdaCreateContactFunction(paramObjectThis);
console.log('[~LINE 867]wixContact: ');
console.log(wixContact);
$w('#contactCurrent').value = JSON.stringify(wixContact,undefined,4);
}
// ø <----------- </getCurrentContactLables Front-End> ----------->

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