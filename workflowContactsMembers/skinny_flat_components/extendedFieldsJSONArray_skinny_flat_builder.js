let extendedFieldArrayAsReturnedByWixJSON = `[
    {
        "_createdDate": "2021-05-22T16:26:09.000Z",
        "dataType": "TEXT",
        "displayName": "current-region",
        "fieldType": "USER_DEFINED",
        "key": "custom.current-region",
        "namespace": "custom",
        "_updatedDate": "2021-05-22T16:26:09.000Z"
    },
    {
        "_createdDate": "2021-05-22T16:17:17.000Z",
        "dataType": "TEXT",
        "displayName": "timezone-offset",
        "fieldType": "USER_DEFINED",
        "key": "custom.timezone-offset",
        "namespace": "custom",
        "_updatedDate": "2021-05-22T16:17:17.000Z"
    },
    {
        "_createdDate": "2021-05-22T16:07:16.000Z",
        "dataType": "TEXT",
        "displayName": "grade-level",
        "fieldType": "USER_DEFINED",
        "key": "custom.grade-level",
        "namespace": "custom",
        "_updatedDate": "2021-05-22T16:07:16.000Z"
    },
    {
        "_createdDate": "2021-05-22T16:00:21.000Z",
        "dataType": "TEXT",
        "displayName": "legal-first",
        "fieldType": "USER_DEFINED",
        "key": "custom.legal-first",
        "namespace": "custom",
        "_updatedDate": "2021-05-22T16:00:21.000Z"
    },
    {
        "_createdDate": "2021-05-22T15:38:13.000Z",
        "dataType": "TEXT",
        "displayName": "seed",
        "fieldType": "USER_DEFINED",
        "key": "custom.seed",
        "namespace": "custom",
        "_updatedDate": "2021-05-22T15:38:13.000Z"
    },
    {
        "dataType": "TEXT",
        "description": "Display name starting with first name (read only)",
        "displayName": "Display Name (start with first)",
        "fieldType": "SYSTEM",
        "key": "contacts.displayByFirstName",
        "namespace": "contacts"
    },
    {
        "dataType": "TEXT",
        "description": "Display name starting with last name (read only)",
        "displayName": "Display Name (start with last)",
        "fieldType": "SYSTEM",
        "key": "contacts.displayByLastName",
        "namespace": "contacts"
    },
    {
        "dataType": "TEXT",
        "description": "Vat ID for Wix Invoices",
        "displayName": "VAT ID",
        "fieldType": "SYSTEM",
        "key": "invoices.vatId",
        "namespace": "invoices"
    },
    {
        "dataType": "TEXT",
        "description": "APPROVED/DENIED/PENDING/INACTIVE (read only)",
        "displayName": "Membership Status",
        "fieldType": "SYSTEM",
        "key": "members.membershipStatus",
        "namespace": "members"
    },
    {
        "dataType": "TEXT",
        "description": "true/false",
        "displayName": "Mobile flag",
        "fieldType": "SYSTEM",
        "key": "members.mobile",
        "namespace": "members"
    },
    {
        "dataType": "NUMBER",
        "description": "Wix Stores purchase count (read only)",
        "displayName": "# of Purchases",
        "fieldType": "SYSTEM",
        "key": "ecom.numOfPurchases",
        "namespace": "ecom"
    },
    {
        "dataType": "NUMBER",
        "description": "Wix Stores aggregated spent amount (read only)",
        "displayName": "Total Spent Amount",
        "fieldType": "SYSTEM",
        "key": "ecom.totalSpentAmount",
        "namespace": "ecom"
    },
    {
        "dataType": "TEXT",
        "description": "Wix Stores currency code (read only)",
        "displayName": "Total Spent Currency",
        "fieldType": "SYSTEM",
        "key": "ecom.totalSpentCurrency",
        "namespace": "ecom"
    },
    {
        "dataType": "DATE",
        "description": "Wix Stores last purchase date (read only)",
        "displayName": "Last Purchase Date",
        "fieldType": "SYSTEM",
        "key": "ecom.lastPurchaseDate",
        "namespace": "ecom"
    },
    {
        "dataType": "TEXT",
        "description": "SUBSCRIBED/UNSUBSCRIBED/NOT_SET/PENDING (read only)",
        "displayName": "Effective Subscription Status",
        "fieldType": "SYSTEM",
        "key": "emailSubscriptions.subscriptionStatus",
        "namespace": "emailSubscriptions"
    },
    {
        "dataType": "TEXT",
        "description": "VALID/BOUNCED/SPAM_COMPLAINT/INACTIVE (read only)",
        "displayName": "Effective Deliverability Status",
        "fieldType": "SYSTEM",
        "key": "emailSubscriptions.deliverabilityStatus",
        "namespace": "emailSubscriptions"
    },
    {
        "dataType": "TEXT",
        "description": "Effective Email for subscription purposes (read only)",
        "displayName": "Effective Email",
        "fieldType": "SYSTEM",
        "key": "emailSubscriptions.effectiveEmail",
        "namespace": "emailSubscriptions"
    }
]`;
let allExtendedFieldArray = JSON.parse(extendedFieldArrayAsReturnedByWixJSON);
let extendedFieldArray = [];
allExtendedFieldArray.forEach(element => {
    // console.log(element);
    if (element.fieldType === "USER_DEFINED") {
        extendedFieldArray.push(element);
    }
});
// console.warn('extendedFieldArray: ');
// console.warn(extendedFieldArray);
// ø <UNCOMMENT: if you need to re-build the 'consumable code' array>
let consumableCodeArray = [];
let ccElement = {};
extendedFieldArray.forEach(element => {
    // console.log(element);
    ccElement = {};
    ccElement.dataType = element.dataType;
    ccElement.key = element.key;
    ccElement.action = "BUILD";//as default
    ccElement.konstant = "if Applicable";
    ccElement.ruMePath = "if Applicable";
    ccElement.transformation = "if Applicable";
    ccElement.notes = [];
    consumableCodeArray.push(ccElement);
});
// console.warn('consumableCodeArray: ');
// console.warn(consumableCodeArray);
let consumableCodeArrayJSON = JSON.stringify(consumableCodeArray);
console.warn('consumableCodeArrayJSON: ');
console.warn(consumableCodeArrayJSON);
// ø </UNCOMMENT: if you need to re-build the 'consumable code' array>
// consumableLiteralCodeArray = [{"dataType":"TEXT","key":"custom.seed","action":"BUILD","konstant":"if Applicable","ruMePath":"if Applicable"},{"dataType":"TEXT","key":"custom.seed","action":"BUILD","konstant":"if Applicable","ruMePath":"if Applicable"},{"dataType":"TEXT","key":"custom.seed","action":"BUILD","konstant":"if Applicable","ruMePath":"if Applicable"},{"dataType":"TEXT","key":"custom.seed","action":"BUILD","konstant":"if Applicable","ruMePath":"if Applicable"},{"dataType":"TEXT","key":"custom.seed","action":"BUILD","konstant":"if Applicable","ruMePath":"if Applicable"}];


