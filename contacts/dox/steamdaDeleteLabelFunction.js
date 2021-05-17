import { contacts } from 'wix-crm-backend';

export function steamdaDeleteLabelFunction() {
  const labelKey = "custom.new-lead";
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