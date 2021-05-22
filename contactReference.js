import wixCrmBackend from 'wix-crm-backend';
import { contacts } from 'wix-crm-backend';
// .jsw files enable you to write functions that run on the server side

// Test any backend function by clicking the "Play" button on the left side of the code panel

// About testing backend functions: https://support.wix.com/en/article/velo-testing-your-backend-functions

// Sample function

export function multiply(factor1, factor2) {
    return factor1 * factor2;
}

// ø <======================================================================>
// ø <=================<         Contact Labels           >=================>
// ø <======================================================================>
// ø <----------- <getCurrentContactLables Front-End>  ----------->

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

// ø <------------ <steamdaFindOrCreateLabelFunction>  ------------>
export function steamdaFindOrCreateLabelFunction(paramObject = {}) {
    const displayName = paramObject.displayName;
	// if(displayName.length > 0){
	// 	return 'Invalid displayName parameter [better Error handling needed]';
	// }

    const options = {
        suppressAuth: false
    };

    return contacts.findOrCreateLabel(displayName, options)
        .then((label) => {
            return label;
        })
        .catch((error) => {
            console.error(error);
        });
}
// ø <------------ </steamdaFindOrCreateLabelFunction> ------------>

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

// ø <---------- <steamdaRenameLabelFunction>  ---------->
export function steamdaRenameLabelFunction(paramObject) {
  const labelKey = paramObject.labelKey;
  const displayName = paramObject.displayName;
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
// ø <---------- </steamdaRenameLabelFunction> ---------->
// ø <======================================================================>
// ø <=================</         Contact Labels          >=================>
// ø <======================================================================>


// ø <======================================================================>
// ø <=================<            Contact               >=================>
// ø <======================================================================>
// ø <----------- <getCurrentContactLables Front-End>  ----------->

// ø <----------- <steamdaCreateContactFunction()>  ----------->
export function steamdaCreateContactFunction(paramObject) {
  const contactInfo = paramObject.contactInfo;
  // const contactInfo = {
  //   name: {
  //     first: "Ari",
  //     last: "Thereyet"
  //   }
  // };

  let options = {
    allowDuplicates: false,
    suppressAuth: false
  };

  // const options = {}
  // if(typeof paramObject.options === 'object'){
  //   options = paramObject.options;
  // }else{
  //   options = {
  //     allowDuplicates: false,
  //     suppressAuth: false
  //   };
  // }

  return contacts.createContact(contactInfo, options)
    .then((contact) => {
      return contact;
    })
    .catch((error) => {
      console.error(error);
    });
}
// ø <----------- </steamdaCreateContactFunction()> ----------->

// ø <----------- <streamdaUpdateContactFunction>  ----------->
export function streamdaUpdateContactFunction(paramObject) {
  const contactIdentifiers = paramObject.contactIdentifiers;
//   const contactIdentifiers = {
//     contactId: "0677ef55-cf20-4f68-989a-f31d3649eb72",
//     revision: 6
//   };
  const contactInfo = paramObject.contactInfo;
//   const contactInfo = {
//     name: {
//       first: "Annie",
//       last: "New Name"
//     },
//     extendedFields: {
//       "custom.event-we-met-at": "Cloud Computing MegaCon"
//     }
//   };
  const options = {
    allowDuplicates: false,
    suppressAuth: false
  };

  return contacts.updateContact(contactIdentifiers, contactInfo, options)
    .then((updatedContact) => {
      return updatedContact;
    })
    .catch((error) => {
      console.error(error);
    });
}
// ø <----------- </streamdaUpdateContactFunction> ----------->
// ø <======================================================================>
// ø <=================</            Contact              >=================>
// ø <======================================================================>


// ø <======================================================================>
// ø <=================<          Extended Fields         >=================>
// ø <======================================================================>
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

// ø <------------ <steamdaFindOrCreateExtendedFieldFunction>  ------------>
export function steamdaFindOrCreateExtendedFieldFunction(paramObject) {
  const extendedFieldInfo = {}
  extendedFieldInfo.displayName = paramObject.displayName;
  extendedFieldInfo.dataType = paramObject.dataType;
//   const extendedFieldInfo = {
//     displayName: "Last Contacted",
//     dataType: "DATE"
//   };
  const options = {
    suppressAuth: false
  };

  return contacts.findOrCreateExtendedField(extendedFieldInfo, options)
    .then((extendedField) => {
      return extendedField;
    })
    .catch((error) => {
      console.error(error);
    });
}
// ø <------------ </steamdaFindOrCreateExtendedFieldFunction> ------------>

// ø <======================================================================>
// ø <=================</         Extended Fields         >=================>
// ø <======================================================================>

