import { contacts } from 'wix-crm-backend';
/*...*/
// ø <------------ <steamdaQueryLabelsFunction>  ------------>
export function steamdaQueryLabelsFunction() {
  return contacts.queryLabels()
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
// ø <------------ </steamdaQueryLabelsFunction> ------------>
/* Returns items:
 * [
 *   {
 *     "_createdDate": "2021-03-30T12:42:06.000Z",
 *     "_updatedDate": "2021-03-30T12:42:06.000Z",
 *     "displayName": "New Lead",
 *     "key": "custom.new-lead",
 *     "namespace": "custom",
 *     "labelType": "USER_DEFINED"
 *   },
 *   {
 *     "_createdDate": "2021-03-29T13:17:29.000Z",
 *     "_updatedDate": "2021-03-29T13:17:29.000Z",
 *     "displayName": "Marketing Your Business on Social Media",
 *     "key": "custom.marketing-your-business-on-social-media",
 *     "namespace": "custom",
 *     "labelType": "USER_DEFINED"
 *   },
 *   {
 *     "_createdDate": "2021-01-20T12:49:09.000Z",
 *     "_updatedDate": "2021-01-20T12:49:09.000Z",
 *     "displayName": "Quick Win",
 *     "key": "custom.quick-win",
 *     "namespace": "custom",
 *     "labelType": "USER_DEFINED"
 *   },
 *   {
 *     "_createdDate": "2021-01-20T12:48:46.000Z",
 *     "_updatedDate": "2021-01-20T12:48:46.000Z",
 *     "displayName": "Stale Lead",
 *     "key": "custom.stale-lead",
 *     "namespace": "custom",
 *     "labelType": "USER_DEFINED"
 *   },
 *   {
 *     "_createdDate": "2021-01-20T06:55:58.000Z",
 *     "_updatedDate": "2021-01-20T06:55:58.000Z",
 *     "displayName": "White Glove Treatment",
 *     "key": "custom.white-glove-treatment",
 *     "namespace": "custom",
 *     "labelType": "USER_DEFINED"
 *   },
 *   {
 *     "_createdDate": "2021-01-20T06:55:47.000Z",
 *     "_updatedDate": "2021-01-20T06:55:47.000Z",
 *     "displayName": "At Risk",
 *     "key": "custom.at-risk",
 *     "namespace": "custom",
 *     "labelType": "USER_DEFINED"
 *   },
 *   {
 *     "_createdDate": "2021-01-20T00:31:41.000Z",
 *     "_updatedDate": "2021-01-20T00:31:41.000Z",
 *     "displayName": "Active Customer",
 *     "key": "custom.active-customer",
 *     "namespace": "custom",
 *     "labelType": "USER_DEFINED"
 *   },
 *   {
 *     "_createdDate": "2021-01-19T21:38:49.000Z",
 *     "_updatedDate": "2021-01-20T19:07:54.000Z",
 *     "displayName": "Incoming",
 *     "key": "custom.incoming-leads",
 *     "namespace": "custom",
 *     "labelType": "USER_DEFINED"
 *   },
 *   {
 *     "displayName": "Customers",
 *     "key": "contacts.customers",
 *     "namespace": "contacts",
 *     "labelType": "SYSTEM"
 *   },
 *   {
 *     "displayName": "Contacted Me",
 *     "key": "contacts.contacted-me",
 *     "namespace": "contacts",
 *     "labelType": "SYSTEM"
 *   }
 * ]
 */