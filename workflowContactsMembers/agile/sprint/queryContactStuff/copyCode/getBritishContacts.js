import { contacts } from 'wix-crm-backend';

export function getBritishContacts() {
  return contacts.queryContacts()
    .eq("info.addresses.country", "GB")
    .find()
    .then((queryResults) => {
      return queryResults;
    })
    .catch((error) => {
      console.error(error);
    });
}

/* Promise resolves to:
 * {
 *   "_items": [
 *     {
 *       "_id": "f1a481a0-ec7d-48e4-b578-80535bac3e58",
 *       "_createdDate": "2021-04-08T14:15:46.428Z",
 *       "_updatedDate": "2021-04-08T14:17:01.628Z",
 *       "revision": 4,
 *       "primaryInfo": {
 *         "email": "tom.watts@example.com",
 *         "phone": "0769-469-693"
 *       },
 *       "info": {
 *         "name": {
 *           "first": "Tom",
 *           "last": "Watts"
 *         },
 *         "picture": {
 *           "image": "https://wixmp-8be454c954980f083caba37c.wixmp.com/sites/7b940519-404c-4972-9f03-9a430b68d52c/f1a481a0-ec7d-48e4-b578-80535bac3e58/avatar.jpeg?token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOmY1ODg2NzI1MzJlMzQxZmFhZDQwZjFiMDc3MTZhMjU3IiwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXSwib2JqIjpbW3sicGF0aCI6Ii9zaXRlcy83Yjk0MDUxOS00MDRjLTQ5NzItOWYwMy05YTQzMGI2OGQ1MmMvZjFhNDgxYTAtZWM3ZC00OGU0LWI1NzgtODA1MzViYWMzZTU4L2F2YXRhci5qcGVnIn1dXSwiaXNzIjoidXJuOmFwcDpmNTg4NjcyNTMyZTM0MWZhYWQ0MGYxYjA3NzE2YTI1NyIsImV4cCI6MTYxNzg5MzMzNSwiaWF0IjoxNjE3ODkyNzI1LCJqdGkiOiI0RTRBRUE4QUVERjQifQ.CfwbY89-lgK_sS9UPh_aXXMc9hO2KFQ2-pcWVnx0ark",
 *           "imageProvider": "WIX_MEDIA"
 *         },
 *         "emails": [
 *           {
 *             "_id": "09ea3abc-02e0-44c2-a139-f68ce70b9dcc",
 *             "tag": "MAIN",
 *             "email": "tom.watts@example.com",
 *             "primary": true
 *           }
 *         ],
 *         "phones": [
 *           {
 *             "_id": "8c8d0f51-41fa-48a1-a68e-739d75fb64e0",
 *             "tag": "MOBILE",
 *             "phone": "0769-469-693",
 *             "primary": true
 *           }
 *         ],
 *         "addresses": [
 *           {
 *             "address": {
 *               "formatted": "1105 Albert Road\nCoventry, England\nTZ7 3JQ\nUnited Kingdom",
 *               "city": "Coventry",
 *               "subdivision": "GB-ENG",
 *               "country": "GB",
 *               "postalCode": "TZ7 3JQ",
 *               "addressLine1": "1105 Albert Road"
 *             },
 *             "_id": "be7eb0fd-78b7-4e3e-ac5e-483925dc9221",
 *             "tag": "HOME"
 *           }
 *         ],
 *         "extendedFields": {
 *           "emailSubscriptions.deliverabilityStatus": "NOT_SET",
 *           "emailSubscriptions.subscriptionStatus": "UNSUBSCRIBED",
 *           "contacts.displayByFirstName": "Tom Watts",
 *           "contacts.displayByLastName": "Watts Tom"
 *         }
 *       },
 *       "lastActivity": {
 *         "activityDate": "2021-04-08T14:17:01.211Z",
 *         "activityType": "INBOX_MESSAGE_TO_CUSTOMER"
 *       },
 *       "source": {
 *         "sourceType": "ADMIN"
 *       }
 *     },
 *     {
 *       "_id": "bb9d8ff5-aa46-483c-ad22-077927b28092",
 *       "_createdDate": "2021-04-08T13:58:32.258Z",
 *       "_updatedDate": "2021-04-08T14:03:56.405Z",
 *       "revision": 2,
 *       "primaryInfo": {
 *         "email": "victoria.patterson@example.com",
 *         "phone": "013873 00176"
 *       },
 *       "info": {
 *         "name": {
 *           "first": "Victoria",
 *           "last": "Patterson"
 *         },
 *         "picture": {
 *           "image": "https://wixmp-8be454c954980f083caba37c.wixmp.com/sites/7b940519-404c-4972-9f03-9a430b68d52c/bb9d8ff5-aa46-483c-ad22-077927b28092/avatar.jpeg?token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOmY1ODg2NzI1MzJlMzQxZmFhZDQwZjFiMDc3MTZhMjU3IiwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXSwib2JqIjpbW3sicGF0aCI6Ii9zaXRlcy83Yjk0MDUxOS00MDRjLTQ5NzItOWYwMy05YTQzMGI2OGQ1MmMvYmI5ZDhmZjUtYWE0Ni00ODNjLWFkMjItMDc3OTI3YjI4MDkyL2F2YXRhci5qcGVnIn1dXSwiaXNzIjoidXJuOmFwcDpmNTg4NjcyNTMyZTM0MWZhYWQ0MGYxYjA3NzE2YTI1NyIsImV4cCI6MTYxNzg5MzMzNSwiaWF0IjoxNjE3ODkyNzI1LCJqdGkiOiJBQzc2RUY5M0VGOEUifQ.1lubxVCVRwqrAS0xiu1SzGZZrDcMUwLoHPXJ6adbquY",
 *           "imageProvider": "WIX_MEDIA"
 *         },
 *         "emails": [
 *           {
 *             "_id": "af757e47-df85-4815-8c99-f1e11033fcc6",
 *             "tag": "UNTAGGED",
 *             "email": "victoria.patterson@example.com",
 *             "primary": true
 *           }
 *         ],
 *         "phones": [
 *           {
 *             "_id": "a590ae95-8f06-4d71-afcd-1f6f4b5de1b9",
 *             "tag": "HOME",
 *             "phone": "013873 00176",
 *             "primary": true
 *           },
 *           {
 *             "_id": "d6370be9-386d-4362-add0-b464b818a942",
 *             "tag": "MOBILE",
 *             "phone": "0753-893-447",
 *             "primary": false
 *           }
 *         ],
 *         "addresses": [
 *           {
 *             "address": {
 *               "formatted": "4109 London Road\nArmagh, Northern Ireland\nM0N 4GU\nUnited Kingdom",
 *               "city": "Armagh",
 *               "subdivision": "GB-NIR",
 *               "country": "GB",
 *               "postalCode": "M0N 4GU",
 *               "addressLine1": "4109 London Road"
 *             },
 *             "_id": "9e5afe34-6919-432b-bd01-91ee6ead9121",
 *             "tag": "UNTAGGED"
 *           }
 *         ],
 *         "labelKeys": [
 *           "custom.incoming-leads"
 *         ],
 *         "extendedFields": {
 *           "contacts.displayByLastName": "Patterson Victoria",
 *           "emailSubscriptions.deliverabilityStatus": "NOT_SET",
 *           "emailSubscriptions.subscriptionStatus": "NOT_SET",
 *           "emailSubscriptions.effectiveEmail": "victoria.patterson@example.com",
 *           "contacts.displayByFirstName": "Victoria Patterson"
 *         }
 *       },
 *       "lastActivity": {
 *         "activityDate": "2021-04-08T13:58:32.256Z",
 *         "activityType": "CONTACT_CREATED"
 *       },
 *       "source": {
 *         "sourceType": "ADMIN"
 *       }
 *     }
 *   ],
 *   "_originQuery": {
 *     "filterTree": {
 *       "$and": [
 *         {
 *           "info.addresses.country": "GB"
 *         }
 *       ]
 *     },
 *     "invalidArguments": [],
 *     "transformationPaths": {
 *       "createdDate": "createdDate",
 *       "id": "id",
 *       "info.birthdate": "info.birthdate",
 *       "info.company": "info.company",
 *       "info.emails": "info.emails.items",
 *       "info.extendedFields": "info.extendedFields.items",
 *       "info.jobTitle": "info.jobTitle",
 *       "info.labelKeys": "info.labelKeys.items",
 *       "info.locale": "info.locale",
 *       "info.name": "info.name",
 *       "info.phones": "info.phones.items",
 *       "info.picture.imageProvider": "info.picture.imageProvider",
 *       "lastActivity": "lastActivity",
 *       "primaryInfo": "primaryInfo",
 *       "revision": "revision",
 *       "source.appId": "source.appId",
 *       "source.sourceType": "source.sourceType",
 *       "updatedDate": "updatedDate"
 *     },
 *     "sort": [],
 *     "paging": {},
 *     "pagingMethod": "OFFSET"
 *   },
 *   "_limit": 50,
 *   "_totalCount": 2
 * }
 */