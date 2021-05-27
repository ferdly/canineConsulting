let extendedFieldArrayAsReturnedByWixJSON = `[
    {
        "_createdDate": "2021-05-25T13:43:16.000Z",
        "dataType": "DATE",
        "displayName": "SteamDA Last Update",
        "fieldType": "USER_DEFINED",
        "key": "custom.lastupdate",
        "namespace": "custom",
        "_updatedDate": "2021-05-25T13:44:32.000Z"
    },
    {
        "_createdDate": "2021-05-22T18:28:27.000Z",
        "dataType": "TEXT",
        "displayName": "DELETEME rregion",
        "fieldType": "USER_DEFINED",
        "key": "custom.rregion",
        "namespace": "custom",
        "_updatedDate": "2021-05-23T12:04:36.000Z"
    },
    {
        "_createdDate": "2021-05-22T18:27:35.000Z",
        "dataType": "TEXT",
        "displayName": "red-bicycle",
        "fieldType": "USER_DEFINED",
        "key": "custom.red-bicycle",
        "namespace": "custom",
        "_updatedDate": "2021-05-22T18:27:35.000Z"
    },
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
// let consumableCodeArray = [];
// let ccElement = {};
// extendedFieldArray.forEach(element => {
//     // console.log(element);
//     ccElement = {};
//     ccElement.name = element.displayName;
//     ccElement.path = 'info.extendedFields["' + (element.key).replaceAll('.', 'ZdotZ').replaceAll('-', 'ZdashZ') + '"]';
//     ccElement.index = "NNA";
//     ccElement.ruMeCode = "ifKonstant";
//     ccElement.uiKey = "hholder";
//     ccElement.ruMeNotes = [];
//     ccElement.dataType = element.dataType;
//     ccElement.key = element.key;
//     ccElement.action = "BUILD";//as default
//     ccElement.konstant = "ifApplicable";
//     ccElement.ruMePath = "ifApplicable";
//     ccElement.transformation = "ifApplicable";
//     ccElement.notes = [];
//     consumableCodeArray.push(ccElement);
// });
// // console.warn('consumableCodeArray: ');
// // console.warn(consumableCodeArray);
// let consumableCodeArrayJSON_AUTO = JSON.stringify(consumableCodeArray);
// console.warn('consumableCodeArrayJSON_AUTO: ');
// console.warn(consumableCodeArrayJSON_AUTO);
// return;
// ø </UNCOMMENT: if you need to re-build the 'consumable code' array>
// consumableLiteralCodeArray = [{"dataType":"TEXT","key":"custom.seed","action":"BUILD","konstant":"if Applicable","ruMePath":"if Applicable"},{"dataType":"TEXT","key":"custom.seed","action":"BUILD","konstant":"if Applicable","ruMePath":"if Applicable"},{"dataType":"TEXT","key":"custom.seed","action":"BUILD","konstant":"if Applicable","ruMePath":"if Applicable"},{"dataType":"TEXT","key":"custom.seed","action":"BUILD","konstant":"if Applicable","ruMePath":"if Applicable"},{"dataType":"TEXT","key":"custom.seed","action":"BUILD","konstant":"if Applicable","ruMePath":"if Applicable"}];
let consumableCodeArrayJSON = `[{"path":"info.extendedFields['customZdotZlastupdate']","index":"NNA","ruMeCode":"ifKonstant","uiKey":"hholder","ruMeNotes":[],"dataType":"DATE","key":"custom.lastupdate","action":"BUILD","konstant":"ifApplicable","ruMePath":"custom.lastupdate","transformation":"ifApplicable","notes":[]},{"path":"info.extendedFields['customZdotZrregion']","index":"NNA","ruMeCode":"ifKonstant","uiKey":"hholder","ruMeNotes":[],"dataType":"TEXT","key":"custom.rregion","action":"SSKIP","konstant":"ifApplicable","ruMePath":"ifApplicable","transformation":"ifApplicable","notes":[]},{"path":"info.extendedFields['customZdotZredZdashZbicycle']","index":"NNA","ruMeCode":"ifKonstant","uiKey":"hholder","ruMeNotes":[],"dataType":"TEXT","key":"custom.red-bicycle","action":"SSKIP","konstant":"ifApplicable","ruMePath":"ifApplicable","transformation":"ifApplicable","notes":[]},{"path":"info.extendedFields['customZdotZcurrentZdashZregion']","index":"NNA","ruMeCode":"ifKonstant","uiKey":"hholder","ruMeNotes":[],"dataType":"TEXT","key":"custom.current-region","action":"BUILD","konstant":"ifApplicable","ruMePath":"custom.currentZdashZregion","transformation":"ifApplicable","notes":[]},{"path":"info.extendedFields['customZdotZtimezoneZdashZoffset']","index":"NNA","ruMeCode":"ifKonstant","uiKey":"hholder","ruMeNotes":[],"dataType":"TEXT","key":"custom.timezone-offset","action":"BUILD","konstant":"ifApplicable","ruMePath":"location.timezone.offset","transformation":"ifApplicable","notes":[]},{"path":"info.extendedFields['customZdotZgradeZdashZlevel']","index":"NNA","ruMeCode":"ifKonstant","uiKey":"hholder","ruMeNotes":[],"dataType":"TEXT","key":"custom.grade-level","action":"SSKIP","konstant":"ifApplicable","ruMePath":"ifApplicable","transformation":"ifApplicable","notes":[]},{"path":"info.extendedFields['customZdotZlegalZdashZfirst']","index":"NNA","ruMeCode":"ifKonstant","uiKey":"hholder","ruMeNotes":[],"dataType":"TEXT","key":"custom.legal-first","action":"BUILD","konstant":"ifApplicable","ruMePath":"name.first","transformation":"ifApplicable","notes":["use Custom Update for legal-first/preferred"]},{"path":"info.extendedFields['customZdotZseed']","index":"NNA","ruMeCode":"ifKonstant","uiKey":"hholder","ruMeNotes":[],"dataType":"TEXT","key":"custom.seed","action":"BUILD","konstant":"ifApplicable","ruMePath":"seed","transformation":"ifApplicable","notes":[]}]`;
let skinnyFlatObject = {};
skinnyFlatObject.attributeArray = [];
let skinnyFlatElementObject = {};
let consumableCodeArray = JSON.parse(consumableCodeArrayJSON);

consumableCodeArray.forEach(elementObject => {
    // console.log(elementObject);
    if(elementObject.action === 'BUILD'){
        skinnyFlatElementObject = {};
        skinnyFlatElementObject.name = elementObject.name;
        skinnyFlatElementObject.path = elementObject.path;
        skinnyFlatElementObject.index = elementObject.index;
        skinnyFlatElementObject.ruMePath = elementObject.ruMePath;
        skinnyFlatElementObject.ruMeCode = elementObject.ruMeCode;
        skinnyFlatElementObject.uiKey = elementObject.uiKey;
        skinnyFlatElementObject.ruMeNotes = elementObject.ruMeNotes;
        // "name": "SOMETHING",
        // "path": "info.extendedFields",
        // "index": "NNULL",
        // "ruMePath": "NNULL",
        // "ruMeCode": "eval('[]')",
        // "uiKey": "phones",
        // "ruMeNotes": []
        skinnyFlatObject.attributeArray.push(skinnyFlatElementObject) 
    }
});
console.warn('skinnyFlatObject.attributeArray: ');
console.warn(JSON.stringify(skinnyFlatObject.attributeArray,undefined,4));
