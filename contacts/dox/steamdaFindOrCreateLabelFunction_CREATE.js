let notesBoth = [
    "'steamdaFindOrCreateLabelFunction_FIND' _started_ identical to 'steamdaFindOrCreateLabelFunction_CREATE'",
    "'CREATE' is pretty universal, if it exists it is just Found, otherwise the intent, Created"
];
let notesCreate = ["hyper rigorous would check '_createdDate' to see that it is proximate to now"];
let notesFind = [
    "run steamdaQueryLabelsFunction() collect a displayNameArray and check for existing, let CREATE by accident",
    "Ineed, better to abandon this logic and then 'forEach()' through them and returning by Matching displayName",
    "In fact, the 'filter' gizmo I've already written can be enhanced to find a single labelKey or displayName"
];

import { contacts } from 'wix-crm-backend';

export function steamdaFindOrCreateLabelFunction() {
    const displayName = "Active Customer";
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

/*
 * Promise resolves to:
 *
 * {
 *   "label": {
 *     "_createdDate": "2021-01-20T00:31:41.452Z",
 *     "_updatedDate": "2021-01-20T00:31:41.452Z"
 *     "namespace": "custom",
 *     "key": "custom.active-customer",
 *     "displayName": "Active Customer",
 *     "labelType": "USER_DEFINED"
 *   },
 *   "newLabel": true
 * }
 */