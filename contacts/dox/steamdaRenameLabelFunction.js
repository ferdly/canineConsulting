import { contacts } from 'wix-crm-backend';
/*...*/
export function steamdaRenameLabelFunction() {
  const labelKey = "custom.incoming-leads";
  const displayName = "Incoming";
  const options = {
    suppressAuth: false
  };

  return contacts.renameLabel(labelKey, displayName, options)
    .then((renamedLabel) => {
      return renamedLabel;
    })
    .catch((error) => {
      console.error(error);
    });
}

/* Promise resolves to:
 *
 * {
 *   "_createdDate": "2021-01-19T21:38:49Z",
 *   "_updatedDate": "2021-01-20T19:07:54Z"
 *   "namespace": "custom",
 *   "key": "custom.incoming-leads",
 *   "displayName": "Incoming",
 *   "labelType": "USER_DEFINED"
 * }
 */