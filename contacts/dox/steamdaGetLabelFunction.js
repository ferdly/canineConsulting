import { contacts } from 'wix-crm-backend';

export function steamdaGetLabelFunction() {
  const labelKey = "custom.active-customer";
  const options = {
    suppressAuth: false
  };

  return contacts.getLabel(labelKey, options)
    .then((label) => {
      return label;
    })
    .catch((error) => {
      console.error(error);
    });
}

/*
 * Promise resolves to:
 *
 * {
 *   "_createdDate": "2021-01-20T00:31:41Z",
 *   "_updatedDate": "2021-01-20T00:31:41Z"
 *   "namespace": "custom",
 *   "key": "custom.active-customer",
 *   "displayName": "Active Customer",
 *   "labelType": "USER_DEFINED"
 * }
 */