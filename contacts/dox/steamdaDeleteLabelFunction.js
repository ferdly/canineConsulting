import { contacts } from 'wix-crm-backend';
// ø <---------- <steamdaDeleteLabelFunction>  ---------->
export function steamdaDeleteLabelFunction(paramObject) {
  const labelKey = paramObject.labelKey;
  const options = {
    suppressAuth: false
  };

  return contacts.deleteLabel(labelKey, options)
    .then(() => {
      console.log("Label deleted");
    })
    .catch((error) => {
      console.error(error);
    });
}
// ø <---------- </steamdaDeleteLabelFunction> ---------->
