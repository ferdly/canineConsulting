import { contacts } from 'wix-crm-backend';

// ø <------------ <steamdaQueryExtendedFieldsFunction>  ------------>
export function steamdaQueryExtendedFieldsFunction() {
    return contacts.queryExtendedFields()
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
// ø <------------ </steamdaQueryExtendedFieldsFunction> ------------>

/* Returns items:
 * [
 *   {
 *     "_createdDate": "2021-03-30T12:41:13.000Z",
 *     "_updatedDate": "2021-03-30T12:41:13.000Z",
 *     "displayName": "Event we met at",
 *     "key": "custom.event-we-met-at",
 *     "dataType": "TEXT",
 *     "namespace": "custom",
 *     "fieldType": "USER_DEFINED"
 *   },
 *   {
 *     "_createdDate": "2021-01-19T23:18:17.000Z",
 *     "_updatedDate": "2021-01-19T23:18:17.000Z",
 *     "displayName": "Last Contacted",
 *     "key": "custom.last-contacted",
 *     "dataType": "DATE",
 *     "namespace": "custom",
 *     "fieldType": "USER_DEFINED"
 *   },
 *   {
 *     "_createdDate": "2021-01-17T18:42:31.000Z",
 *     "_updatedDate": "2021-01-17T18:42:31.000Z",
 *     "displayName": "Patronus",
 *     "key": "custom.patronus",
 *     "dataType": "TEXT",
 *     "namespace": "custom",
 *     "fieldType": "USER_DEFINED"
 *   },
 *   {
 *     "displayName": "Display Name (start with first)",
 *     "key": "contacts.displayByFirstName",
 *     "description": "Display name starting with first name (read only)",
 *     "dataType": "TEXT",
 *     "namespace": "contacts",
 *     "fieldType": "SYSTEM"
 *   },
 *   {
 *     "displayName": "Display Name (start with last)",
 *     "key": "contacts.displayByLastName",
 *     "description": "Display name starting with last name (read only)",
 *     "dataType": "TEXT",
 *     "namespace": "contacts",
 *     "fieldType": "SYSTEM"
 *   },
 *   {
 *     "displayName": "VAT ID",
 *     "key": "invoices.vatId",
 *     "description": "Vat ID for Wix Invoices",
 *     "dataType": "TEXT",
 *     "namespace": "invoices",
 *     "fieldType": "SYSTEM"
 *   },
 *   {
 *     "displayName": "Membership Status",
 *     "key": "members.membershipStatus",
 *     "description": "APPROVED/DENIED/PENDING/INACTIVE (read only)",
 *     "dataType": "TEXT",
 *     "namespace": "members",
 *     "fieldType": "SYSTEM"
 *   },
 *   {
 *     "displayName": "Mobile flag",
 *     "key": "members.mobile",
 *     "description": "true/false",
 *     "dataType": "TEXT",
 *     "namespace": "members",
 *     "fieldType": "SYSTEM"
 *   },
 *   {
 *     "displayName": "# of Purchases",
 *     "key": "ecom.numOfPurchases",
 *     "description": "Wix Stores purchase count (read only)",
 *     "dataType": "NUMBER",
 *     "namespace": "ecom",
 *     "fieldType": "SYSTEM"
 *   },
 *   {
 *     "displayName": "Total Spent Amount",
 *     "key": "ecom.totalSpentAmount",
 *     "description": "Wix Stores aggregated spent amount (read only)",
 *     "dataType": "NUMBER",
 *     "namespace": "ecom",
 *     "fieldType": "SYSTEM"
 *   },
 *   {
 *     "displayName": "Total Spent Currency",
 *     "key": "ecom.totalSpentCurrency",
 *     "description": "Wix Stores currency code (read only)",
 *     "dataType": "TEXT",
 *     "namespace": "ecom",
 *     "fieldType": "SYSTEM"
 *   },
 *   {
 *     "displayName": "Last Purchase Date",
 *     "key": "ecom.lastPurchaseDate",
 *     "description": "Wix Stores last purchase date (read only)",
 *     "dataType": "DATE",
 *     "namespace": "ecom",
 *     "fieldType": "SYSTEM"
 *   },
 *   {
 *     "displayName": "Effective Subscription Status",
 *     "key": "emailSubscriptions.subscriptionStatus",
 *     "description": "SUBSCRIBED/UNSUBSCRIBED/NOT_SET/PENDING (read only)",
 *     "dataType": "TEXT",
 *     "namespace": "emailSubscriptions",
 *     "fieldType": "SYSTEM"
 *   },
 *   {
 *     "displayName": "Effective Deliverability Status",
 *     "key": "emailSubscriptions.deliverabilityStatus",
 *     "description": "VALID/BOUNCED/SPAM_COMPLAINT/INACTIVE (read only)",
 *     "dataType": "TEXT",
 *     "namespace": "emailSubscriptions",
 *     "fieldType": "SYSTEM"
 *   },
 *   {
 *     "displayName": "Effective Email",
 *     "key": "emailSubscriptions.effectiveEmail",
 *     "description": "Effective Email for subscription purposes (read only)",
 *     "dataType": "TEXT",
 *     "namespace": "emailSubscriptions",
 *     "fieldType": "SYSTEM"
 *   }
 * ]
 */