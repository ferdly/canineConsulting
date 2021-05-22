import { contacts } from 'wix-crm-backend';

export function myGetExtendedFieldFunction() {
  const fieldKey = "custom.event-name";
  const options = {
    suppressAuth: false
  };

  return contacts.getExtendedField(fieldKey, options)
    .then((extendedField) => {
      return extendedField;
    })
    .catch((error) => {
      console.error(error);
    });
}


let promiseResolvesTo =

{
  "_createdDate": "2021-01-19T21:41:39Z",
  "_updatedDate": "2021-01-19T21:41:39Z",
  "namespace": "custom",
  "key": "custom.event-name",
  "displayName": "Event Name",
  "dataType": "TEXT",
  "fieldType": "USER_DEFINED",
}
