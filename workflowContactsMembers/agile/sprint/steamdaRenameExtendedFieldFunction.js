import { contacts } from 'wix-crm-backend';
//ø <----------- <steamdaRenameExtendedFieldFunction>  ----------->
export function steamdaRenameExtendedFieldFunction(paramObject) {
  const fieldKey = paramObject.fieldKey;
  const displayName = paramObject.displayName;
  const options = {
    suppressAuth: false
  };

  return contacts.renameExtendedField(fieldKey, displayName, options)
    .then((renamedExtendedField) => {
      return renamedExtendedField;
    })
    .catch((error) => {
      console.error(error);
    });
}
//ø <----------- </steamdaRenameExtendedFieldFunction> ----------->

/* Promise resolves to:
 *
 * {
 *   "_createdDate": "2021-01-19T22:06:34Z",
 *   "_updatedDate": "2021-01-20T18:54:14Z"
 *   "namespace": "custom",
 *   "key": "custom.event-venue",
 *   "displayName": "Event Location",
 *   "dataType": "TEXT",
 *   "fieldType": "USER_DEFINED",
 * }
 */