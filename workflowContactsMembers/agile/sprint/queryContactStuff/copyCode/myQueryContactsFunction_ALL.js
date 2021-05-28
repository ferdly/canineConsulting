import { contacts } from 'wix-crm-backend';

export function myQueryContactsFunction() {
  return contacts.queryContacts()
    .find()
    .then((queryResults) => {
      const items = queryResults.items;
      const firstItem = items[0];
      const pageSize = queryResults.pageSize;
      const hasNext = queryResults.hasNext();
      const hasPrev = queryResults.hasPrev();
      const length = queryResults.length;
      const query = queryResults.query;

      return items;
    })
    .catch((error) => {
      console.error(error);
    });
}

/* Returns items:
 * [
 *   {
 *     "_id": "f1a481a0-ec7d-48e4-b578-80535bac3e58",
 *     "_createdDate": "2021-04-08T14:15:46.428Z",
 *     "_updatedDate": "2021-04-08T14:17:01.628Z",
 *     "revision": 4,
 *     "primaryInfo": {
 *       "email": "tom.watts@example.com",
 *       "phone": "0769-469-693"
 *     },
 *     "info": {
 *       "name": {
 *         "first": "Tom",
 *         "last": "Watts"
 *       },
 *       "picture": {
 *         "image": "https://wixmp-8be454c954980f083caba37c.wixmp.com/sites/7b940519-404c-4972-9f03-9a430b68d52c/f1a481a0-ec7d-48e4-b578-80535bac3e58/avatar.jpeg?token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOmY1ODg2NzI1MzJlMzQxZmFhZDQwZjFiMDc3MTZhMjU3IiwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXSwib2JqIjpbW3sicGF0aCI6Ii9zaXRlcy83Yjk0MDUxOS00MDRjLTQ5NzItOWYwMy05YTQzMGI2OGQ1MmMvZjFhNDgxYTAtZWM3ZC00OGU0LWI1NzgtODA1MzViYWMzZTU4L2F2YXRhci5qcGVnIn1dXSwiaXNzIjoidXJuOmFwcDpmNTg4NjcyNTMyZTM0MWZhYWQ0MGYxYjA3NzE2YTI1NyIsImV4cCI6MTYxNzg5MjE0NCwiaWF0IjoxNjE3ODkxNTM0LCJqdGkiOiIyQzg3NkZFMDNDNDUifQ.iJxQyNnvpHMLhDiZ-l5hFLr6vMnT10r2Ly6X25U-v-0",
 *         "imageProvider": "WIX_MEDIA"
 *       },
 *       "addresses": [
 *         {
 *           "address": {
 *             "formatted": "1105 Albert Road\nCoventry, England\nTZ7 3JQ\nUnited Kingdom",
 *             "city": "Coventry",
 *             "subdivision": "GB-ENG",
 *             "country": "GB",
 *             "postalCode": "TZ7 3JQ",
 *             "addressLine1": "1105 Albert Road"
 *           },
 *           "_id": "be7eb0fd-78b7-4e3e-ac5e-483925dc9221",
 *           "tag": "HOME"
 *         }
 *       ],
 *       "emails": [
 *         {
 *           "_id": "09ea3abc-02e0-44c2-a139-f68ce70b9dcc",
 *           "tag": "MAIN",
 *           "email": "tom.watts@example.com",
 *           "primary": true
 *         }
 *       ],
 *       "phones": [
 *         {
 *           "_id": "8c8d0f51-41fa-48a1-a68e-739d75fb64e0",
 *           "tag": "MOBILE",
 *           "phone": "0769-469-693",
 *           "primary": true
 *         }
 *       ],
 *       "extendedFields": {
 *         "emailSubscriptions.deliverabilityStatus": "NOT_SET",
 *         "emailSubscriptions.subscriptionStatus": "UNSUBSCRIBED",
 *         "contacts.displayByFirstName": "Tom Watts",
 *         "contacts.displayByLastName": "Watts Tom"
 *       }
 *     },
 *     "lastActivity": {
 *       "activityDate": "2021-04-08T14:17:01.211Z",
 *       "activityType": "INBOX_MESSAGE_TO_CUSTOMER"
 *     },
 *     "source": {
 *       "sourceType": "ADMIN"
 *     }
 *   },
 *   {
 *     "_id": "bb9d8ff5-aa46-483c-ad22-077927b28092",
 *     "_createdDate": "2021-04-08T13:58:32.258Z",
 *     "_updatedDate": "2021-04-08T14:03:56.405Z",
 *     "revision": 2,
 *     "primaryInfo": {
 *       "email": "victoria.patterson@example.com",
 *       "phone": "013873 00176"
 *     },
 *     "info": {
 *       "name": {
 *         "first": "Victoria",
 *         "last": "Patterson"
 *       },
 *       "picture": {
 *         "image": "https://wixmp-8be454c954980f083caba37c.wixmp.com/sites/7b940519-404c-4972-9f03-9a430b68d52c/bb9d8ff5-aa46-483c-ad22-077927b28092/avatar.jpeg?token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOmY1ODg2NzI1MzJlMzQxZmFhZDQwZjFiMDc3MTZhMjU3IiwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXSwib2JqIjpbW3sicGF0aCI6Ii9zaXRlcy83Yjk0MDUxOS00MDRjLTQ5NzItOWYwMy05YTQzMGI2OGQ1MmMvYmI5ZDhmZjUtYWE0Ni00ODNjLWFkMjItMDc3OTI3YjI4MDkyL2F2YXRhci5qcGVnIn1dXSwiaXNzIjoidXJuOmFwcDpmNTg4NjcyNTMyZTM0MWZhYWQ0MGYxYjA3NzE2YTI1NyIsImV4cCI6MTYxNzg5MjE0NCwiaWF0IjoxNjE3ODkxNTM0LCJqdGkiOiIyNTIwNTZEQkExNTEifQ._4JAr9X_g6yPHj_N4JG3OKk33ZbveMMyPbx2D5U2Z4E",
 *         "imageProvider": "WIX_MEDIA"
 *       },
 *       "addresses": [
 *         {
 *           "address": {
 *             "formatted": "4109 London Road\nArmagh, Northern Ireland\nM0N 4GU\nUnited Kingdom",
 *             "city": "Armagh",
 *             "subdivision": "GB-NIR",
 *             "country": "GB",
 *             "postalCode": "M0N 4GU",
 *             "addressLine1": "4109 London Road"
 *           },
 *           "_id": "9e5afe34-6919-432b-bd01-91ee6ead9121",
 *           "tag": "UNTAGGED"
 *         }
 *       ],
 *       "emails": [
 *         {
 *           "_id": "af757e47-df85-4815-8c99-f1e11033fcc6",
 *           "tag": "UNTAGGED",
 *           "email": "victoria.patterson@example.com",
 *           "primary": true
 *         }
 *       ],
 *       "phones": [
 *         {
 *           "_id": "a590ae95-8f06-4d71-afcd-1f6f4b5de1b9",
 *           "tag": "HOME",
 *           "phone": "013873 00176",
 *           "primary": true
 *         },
 *         {
 *           "_id": "d6370be9-386d-4362-add0-b464b818a942",
 *           "tag": "MOBILE",
 *           "phone": "0753-893-447",
 *           "primary": false
 *         }
 *       ],
 *       "labelKeys": [
 *         "custom.incoming-leads"
 *       ],
 *       "extendedFields": {
 *         "contacts.displayByLastName": "Patterson Victoria",
 *         "emailSubscriptions.deliverabilityStatus": "NOT_SET",
 *         "emailSubscriptions.subscriptionStatus": "NOT_SET",
 *         "emailSubscriptions.effectiveEmail": "victoria.patterson@example.com",
 *         "contacts.displayByFirstName": "Victoria Patterson"
 *       }
 *     },
 *     "lastActivity": {
 *       "activityDate": "2021-04-08T13:58:32.256Z",
 *       "activityType": "CONTACT_CREATED"
 *     },
 *     "source": {
 *       "sourceType": "ADMIN"
 *     }
 *   },
 *   {
 *     "_id": "a52852d7-e0d6-484b-93fe-bffdb670f08f",
 *     "_createdDate": "2021-03-30T20:18:06.874Z",
 *     "_updatedDate": "2021-03-31T20:24:12.312Z",
 *     "revision": 5,
 *     "info": {
 *       "name": {
 *         "first": "Ari",
 *         "last": "Thereyet"
 *       },
 *       "extendedFields": {
 *         "contacts.displayByLastName": "Thereyet Ari",
 *         "emailSubscriptions.deliverabilityStatus": "NOT_SET",
 *         "emailSubscriptions.subscriptionStatus": "NOT_SET",
 *         "emailSubscriptions.effectiveEmail": "ari.thereyet.appended.email@example.com",
 *         "contacts.displayByFirstName": "Ari Thereyet"
 *       },
 *       "picture": {},
 *       "emails": [
 *         {
 *           "_id": "e6f2733e-32b8-4d99-95ce-7d2e63a39108",
 *           "tag": "HOME",
 *           "email": "ari.thereyet@example.com",
 *           "primary": true
 *         },
 *         {
 *           "_id": "703f6faf-7d88-42ce-8e28-54f8d5f6e5e4",
 *           "tag": "UNTAGGED",
 *           "email": "ari.thereyet.appended.email@example.com",
 *           "primary": false
 *         }
 *       ],
 *       "phones": [
 *         {
 *           "_id": "970380bb-57e0-4b3a-8f40-ccc93be1ab58",
 *           "tag": "MOBILE",
 *           "phone": "601-081-124",
 *           "primary": true
 *         }
 *       ],
 *       "labelKeys": [
 *         "custom.stale-lead"
 *       ]
 *     },
 *     "lastActivity": {
 *       "activityDate": "2021-03-30T20:18:06.872Z",
 *       "activityType": "CONTACT_CREATED"
 *     },
 *     "primaryInfo": {
 *       "email": "ari.thereyet@example.com",
 *       "phone": "601-081-124"
 *     },
 *     "source": {
 *       "sourceType": "WIX_APP"
 *     }
 *   },
 *   {
 *     "_id": "bc0ae72b-3285-485b-b0ad-c32c769a4daf",
 *     "_createdDate": "2021-03-30T13:12:39.650Z",
 *     "_updatedDate": "2021-04-07T21:03:39.481Z",
 *     "revision": 2,
 *     "primaryInfo": {
 *       "email": "gene.lopez.at.home@example.com",
 *       "phone": "(722)-138-3099"
 *     },
 *     "info": {
 *       "name": {
 *         "first": "Gene",
 *         "last": "Lopez"
 *       },
 *       "birthdate": "1981-11-02",
 *       "jobTitle": "Senior Staff Attorney",
 *       "company": "Borer and Sons, Attorneys at Law",
 *       "locale": "en-us",
 *       "picture": {
 *         "image": "https://randomuser.me/api/portraits/men/0.jpg",
 *         "imageProvider": "EXTERNAL"
 *       },
 *       "emails": [
 *         {
 *           "_id": "5bdcce4a-37c2-46ed-b49c-d562c6e3c4ce",
 *           "tag": "HOME",
 *           "email": "gene.lopez.at.home@example.com",
 *           "primary": true
 *         },
 *         {
 *           "_id": "78e5f398-e148-448d-b490-7c0b7d2ab336",
 *           "tag": "WORK",
 *           "email": "gene.lopez@example.com",
 *           "primary": false
 *         }
 *       ],
 *       "phones": [
 *         {
 *           "_id": "820e4640-ffe0-4980-a097-62a715e73135",
 *           "tag": "MOBILE",
 *           "countryCode": "US",
 *           "phone": "(722)-138-3099",
 *           "primary": true
 *         },
 *         {
 *           "_id": "8506549e-e4f8-42f6-b6fc-9db155b582ef",
 *           "tag": "HOME",
 *           "countryCode": "US",
 *           "phone": "(704)-454-1233",
 *           "e164Phone": "+17044541233",
 *           "primary": false
 *         }
 *       ],
 *       "addresses": [
 *         {
 *           "address": {
 *             "formatted": "9834 Bollinger Rd\nEl Cajon, WY 97766\nUS",
 *             "location": {
 *               "latitude": 84.1048,
 *               "longitude": -116.8836
 *             },
 *             "city": "El Cajon",
 *             "subdivision": "US-WY",
 *             "country": "US",
 *             "postalCode": "97766",
 *             "streetAddress": {
 *               "name": "Bollinger Rd",
 *               "number": "9834",
 *               "apt": ""
 *             }
 *           },
 *           "_id": "8532051f-91f2-42d9-9a97-9f2c39e64f7a",
 *           "tag": "HOME"
 *         }
 *       ],
 *       "extendedFields": {
 *         "contacts.displayByLastName": "Lopez Gene",
 *         "emailSubscriptions.deliverabilityStatus": "NOT_SET",
 *         "emailSubscriptions.subscriptionStatus": "NOT_SET",
 *         "custom.event-we-met-at": "LegalBigData",
 *         "emailSubscriptions.effectiveEmail": "gene.lopez.at.home@example.com",
 *         "contacts.displayByFirstName": "Gene Lopez"
 *       },
 *       "labelKeys": [
 *         "contacts.contacted-me",
 *         "custom.new-lead"
 *       ]
 *     },
 *     "lastActivity": {
 *       "activityDate": "2021-03-30T13:12:39.649Z",
 *       "activityType": "CONTACT_CREATED"
 *     },
 *     "source": {
 *       "sourceType": "OTHER"
 *     }
 *   },
 *   {
 *     "_id": "41b1c8e7-5ddd-4186-ad85-269985d6b296",
 *     "_createdDate": "2021-03-29T21:16:54.801Z",
 *     "_updatedDate": "2021-03-30T20:14:16.256Z",
 *     "revision": 3,
 *     "primaryInfo": {
 *       "email": "renata.kirsten@example.com",
 *       "phone": "0177-3234750"
 *     },
 *     "info": {
 *       "name": {
 *         "first": "Renata",
 *         "last": "Kirsten"
 *       },
 *       "picture": {},
 *       "emails": [
 *         {
 *           "_id": "500569e4-144d-4f25-83a1-4a59956b698d",
 *           "tag": "UNTAGGED",
 *           "email": "renata.kirsten@example.com",
 *           "primary": true
 *         }
 *       ],
 *       "phones": [
 *         {
 *           "_id": "3ea63681-598a-45bc-88fb-97fefdfd5a74",
 *           "tag": "UNTAGGED",
 *           "phone": "0177-3234750",
 *           "primary": true
 *         }
 *       ],
 *       "addresses": [
 *         {
 *           "address": {
 *             "formatted": "6677 Schlossstraße\n48435 Wittenberg\nGermany",
 *             "city": "Wittenberg",
 *             "subdivision": "DE-TH",
 *             "country": "DE",
 *             "postalCode": "48435",
 *             "addressLine1": "6677 Schlossstraße"
 *           },
 *           "_id": "b36d1a2d-9a6b-48c3-a463-c8b116303e9f",
 *           "tag": "SHIPPING"
 *         },
 *         {
 *           "address": {
 *             "formatted": "6677 Schlossstraße\n48435 Wittenberg\nGermany",
 *             "city": "Wittenberg",
 *             "subdivision": "DE-TH",
 *             "country": "DE",
 *             "postalCode": "48435",
 *             "addressLine1": "6677 Schlossstraße"
 *           },
 *           "_id": "2a3fc791-cbad-4ecd-8bf6-8072b2793e3a",
 *           "tag": "BILLING"
 *         }
 *       ],
 *       "labelKeys": [
 *         "contacts.customers"
 *       ],
 *       "extendedFields": {
 *         "contacts.displayByLastName": "Kirsten Renata",
 *         "emailSubscriptions.deliverabilityStatus": "NOT_SET",
 *         "ecom.lastPurchaseDate": "2021-03-29T21:17:01.122Z",
 *         "ecom.numOfPurchases": 1,
 *         "emailSubscriptions.subscriptionStatus": "NOT_SET",
 *         "ecom.totalSpentAmount": 120,
 *         "emailSubscriptions.effectiveEmail": "renata.kirsten@example.com",
 *         "contacts.displayByFirstName": "Renata Kirsten",
 *         "ecom.totalSpentCurrency": "ILS"
 *       }
 *     },
 *     "lastActivity": {
 *       "activityDate": "2021-03-29T21:17:01.122Z",
 *       "activityType": "ECOM_PURCHASE"
 *     },
 *     "source": {
 *       "appId": "1380b703-ce81-ff05-f115-39571d94dfcd",
 *       "sourceType": "WIX_STORES"
 *     }
 *   },
 *   {
 *     "_id": "67bcea88-b748-4cc8-a584-bb991b6e5d82",
 *     "_createdDate": "2021-03-29T21:06:53.976Z",
 *     "_updatedDate": "2021-03-29T21:06:53.976Z",
 *     "revision": 0,
 *     "primaryInfo": {
 *       "email": "ljiljana.francois@example.com"
 *     },
 *     "info": {
 *       "name": {
 *         "first": "Ljiljana",
 *         "last": "Francois"
 *       },
 *       "birthdate": "1981-09-13",
 *       "jobTitle": "Creative Director",
 *       "company": "Happy Mouse Productions",
 *       "locale": "en-us",
 *       "picture": {},
 *       "emails": [
 *         {
 *           "_id": "c030ed4c-e127-4f02-8256-8984415e0321",
 *           "tag": "MAIN",
 *           "email": "ljiljana.francois@example.com",
 *           "primary": true
 *         }
 *       ],
 *       "extendedFields": {
 *         "contacts.displayByLastName": "Francois Ljiljana",
 *         "emailSubscriptions.deliverabilityStatus": "NOT_SET",
 *         "emailSubscriptions.subscriptionStatus": "NOT_SET",
 *         "emailSubscriptions.effectiveEmail": "ljiljana.francois@example.com",
 *         "contacts.displayByFirstName": "Ljiljana Francois"
 *       }
 *     },
 *     "lastActivity": {
 *       "activityDate": "2021-03-29T21:06:53.975Z",
 *       "activityType": "CONTACT_CREATED"
 *     },
 *     "source": {
 *       "sourceType": "OTHER"
 *     }
 *   },
 *   {
 *     "_id": "1626081c-3b3c-4b44-855b-1acb1122e080",
 *     "_createdDate": "2021-03-29T20:51:21.216Z",
 *     "_updatedDate": "2021-03-30T11:50:42.040Z",
 *     "revision": 6,
 *     "primaryInfo": {
 *       "email": "celine.rousseau@example.com",
 *       "phone": "0177-7912572"
 *     },
 *     "info": {
 *       "name": {
 *         "first": "Celine",
 *         "last": "Rousseau"
 *       },
 *       "locale": "en",
 *       "picture": {},
 *       "emails": [
 *         {
 *           "tag": "UNTAGGED",
 *           "email": "celine.rousseau@example.com",
 *           "primary": true
 *         }
 *       ],
 *       "phones": [
 *         {
 *           "tag": "UNTAGGED",
 *           "phone": "0177-7912572",
 *           "primary": true
 *         }
 *       ],
 *       "addresses": [
 *         {
 *           "address": {
 *             "formatted": "2451Rue des Cuirassiers\n9502 Grosshöchstetten\nSwitzerland",
 *             "city": "Grosshöchstetten",
 *             "subdivision": "CH-VD",
 *             "country": "CH",
 *             "postalCode": "9502",
 *             "addressLine1": "2451Rue des Cuirassiers"
 *           },
 *           "tag": "SHIPPING"
 *         },
 *         {
 *           "address": {
 *             "formatted": "2451Rue des Cuirassiers\n9502 Grosshöchstetten\nSwitzerland",
 *             "city": "Grosshöchstetten",
 *             "subdivision": "CH-VD",
 *             "country": "CH",
 *             "postalCode": "9502",
 *             "addressLine1": "2451Rue des Cuirassiers"
 *           },
 *           "tag": "BILLING"
 *         },
 *         {
 *           "address": {
 *             "formatted": "Israel",
 *             "country": "IL"
 *           },
 *           "tag": "UNTAGGED"
 *         }
 *       ],
 *       "labelKeys": [
 *         "contacts.customers"
 *       ],
 *       "extendedFields": {
 *         "contacts.displayByLastName": "Rousseau Celine",
 *         "emailSubscriptions.deliverabilityStatus": "BOUNCED",
 *         "ecom.lastPurchaseDate": "2021-03-29T21:00:35.835Z",
 *         "members.membershipStatus": "APPROVED",
 *         "ecom.numOfPurchases": 2,
 *         "emailSubscriptions.subscriptionStatus": "NOT_SET",
 *         "ecom.totalSpentAmount": 27.5,
 *         "members.mobile": false,
 *         "contacts.displayByFirstName": "Celine Rousseau",
 *         "ecom.totalSpentCurrency": "ILS"
 *       }
 *     },
 *     "lastActivity": {
 *       "activityDate": "2021-03-29T20:58:47.548Z",
 *       "activityType": "MEMBER_STATUS_CHANGED"
 *     },
 *     "source": {
 *       "appId": "1380b703-ce81-ff05-f115-39571d94dfcd",
 *       "sourceType": "WIX_STORES"
 *     }
 *   },
 *   {
 *     "_id": "b508466c-dcd3-4284-917f-3ff678762940",
 *     "_createdDate": "2021-03-29T17:19:43.786Z",
 *     "_updatedDate": "2021-03-29T18:04:02.082Z",
 *     "revision": 3,
 *     "primaryInfo": {
 *       "email": "zackary.sirko@example.com",
 *       "phone": "796-685-0846"
 *     },
 *     "info": {
 *       "name": {
 *         "first": "Zackary",
 *         "last": "Sirko"
 *       },
 *       "picture": {},
 *       "emails": [
 *         {
 *           "_id": "00a88829-c21c-46b9-ab28-aaaae7f2f057",
 *           "tag": "UNTAGGED",
 *           "email": "zackary.sirko@example.com",
 *           "primary": true
 *         }
 *       ],
 *       "phones": [
 *         {
 *           "_id": "2f68e6c0-10b5-4c4c-b117-f2d7f8663475",
 *           "tag": "UNTAGGED",
 *           "phone": "796-685-0846",
 *           "primary": true
 *         }
 *       ],
 *       "addresses": [
 *         {
 *           "address": {
 *             "formatted": "8768 King St\nCumberland,  Z1D 6P8\nCanada",
 *             "city": "Cumberland",
 *             "country": "CA",
 *             "postalCode": "Z1D 6P8",
 *             "addressLine1": "8768 King St"
 *           },
 *           "_id": "816f720d-f329-4774-90f7-1d5c75936e47",
 *           "tag": "UNTAGGED"
 *         }
 *       ],
 *       "extendedFields": {
 *         "contacts.displayByLastName": "Sirko Zackary",
 *         "emailSubscriptions.deliverabilityStatus": "NOT_SET",
 *         "members.membershipStatus": "APPROVED",
 *         "emailSubscriptions.subscriptionStatus": "NOT_SET",
 *         "members.mobile": false,
 *         "emailSubscriptions.effectiveEmail": "zackary.sirko@example.com",
 *         "contacts.displayByFirstName": "Zackary Sirko"
 *       }
 *     },
 *     "lastActivity": {
 *       "activityDate": "2021-03-29T17:19:44.747Z",
 *       "activityType": "MEMBER_REGISTER"
 *     },
 *     "source": {
 *       "sourceType": "ADMIN"
 *     }
 *   },
 *   {
 *     "_id": "73904dbd-94ca-4ac1-a593-ef0627673e59",
 *     "_createdDate": "2021-03-29T13:17:19.169Z",
 *     "_updatedDate": "2021-03-29T15:16:40.971Z",
 *     "revision": 5,
 *     "primaryInfo": {
 *       "email": "ines.brunet@example.com",
 *       "phone": "01-27-29-38-74"
 *     },
 *     "info": {
 *       "name": {
 *         "first": "Inès",
 *         "last": "Brunet"
 *       },
 *       "picture": {
 *         "image": "https://www.wix.com/_api/contacts/v4/media-gateway/redirect/JWE.eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2Iiwia2lkIjoiUTBub2RfZ1gifQ.44GkOpjoCNjHRGpKesfyoDZEPxnmEGaqBw-6Vl_YZum8VLFKf274lQ.3K4URkUMNfHgdLs56Ub1Dg.bu3tcHR1VDqaRvcVU3dxlYIL5u0K2TDWYE9XVasxOq02r5FOeBzw1mZ_TGlOmYv0jIhffFXU7IhTUWzZIfGholGsjCVe5KRYzUyx4D2jQPh4sERYxLKluD6f3J6-yHEuhH_UWu9GiZynqRHD3SCsjpLbewnQDM0BxJdXnze0qGakJl44KhCdvRpEtUz9aboemu1WwEHc3sj5UQVHA78LDw.91QdN1ZuB6L7PyLppMCrcg",
 *         "imageProvider": "WIX_MEDIA"
 *       },
 *       "emails": [
 *         {
 *           "_id": "114a1f7f-18a6-4a90-b5a7-972e763337fb",
 *           "tag": "WORK",
 *           "email": "ines.brunet@example.com",
 *           "primary": true
 *         }
 *       ],
 *       "phones": [
 *         {
 *           "_id": "6268e2b9-1cbf-486d-b986-10a08af53a8a",
 *           "tag": "HOME",
 *           "phone": "01-27-29-38-74",
 *           "primary": true
 *         },
 *         {
 *           "_id": "f8da8843-7e52-4010-9e40-d21821a1745f",
 *           "tag": "MOBILE",
 *           "phone": "06-48-73-26-70",
 *           "primary": false
 *         }
 *       ],
 *       "addresses": [
 *         {
 *           "address": {
 *             "formatted": "8416 E Sandy Lake Rd\n69922, Ardennes\nFrance",
 *             "city": "Ardennes",
 *             "country": "FR",
 *             "postalCode": "69922",
 *             "addressLine1": "8416 E Sandy Lake Rd"
 *           },
 *           "_id": "4fa3e416-8924-4125-8922-0db7fe960666",
 *           "tag": "UNTAGGED"
 *         }
 *       ],
 *       "labelKeys": [
 *         "custom.marketing-your-business-on-social-media",
 *         "contacts.contacted-me"
 *       ],
 *       "extendedFields": {
 *         "contacts.displayByLastName": "Brunet Inès",
 *         "emailSubscriptions.deliverabilityStatus": "NOT_SET",
 *         "emailSubscriptions.subscriptionStatus": "SUBSCRIBED",
 *         "emailSubscriptions.effectiveEmail": "ines.brunet@example.com",
 *         "contacts.displayByFirstName": "Inès Brunet"
 *       }
 *     },
 *     "lastActivity": {
 *       "activityDate": "2021-03-29T13:17:19.166Z",
 *       "activityType": "CONTACT_CREATED"
 *     },
 *     "source": {
 *       "sourceType": "ADMIN"
 *     }
 *   }
 * ]
 */