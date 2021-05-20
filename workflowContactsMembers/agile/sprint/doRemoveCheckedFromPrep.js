// ø <----------- <doRemoveCheckedFromPrep>  ----------->
export function doRemoveCheckedFromPrep() {
    let removeByAction = $w('#radioEmptyOrDelete').value;
    let currentContact = JSON.parse($w('#codePrepContact').value);
    let checkboxArray = $w('#chkbxRemoveChecked').value;
    for (let index = 0; index < checkboxArray.length; index++) {
        const element = checkboxArray[index];

        // checkboxArray.forEach(element => {
        console.log('Overall: ' + removeByAction + ': ' + element);
        switch (element) {
            case 'name':
                if (removeByAction === 'DELETE') {
                    console.log(removeByAction + '[testing]: ' + element);
                } else if (removeByAction === 'EMPTY') {
                    console.log(removeByAction + ': ' + element);
                } else {
                    console.log(removeByAction + ': ' + element);
                    console.log('DEFAULT: Switch does NOT support the action for the element: element & action: [' + element + ' & ' + removeByAction + ']');
                }
                break;

            case 'nonname':
                if (removeByAction === 'DELETE') {
                    console.log(removeByAction + '[testing]: ' + element);
                } else if (removeByAction === 'EMPTY') {
                    console.log(removeByAction + ': ' + element);
                } else {
                    console.log(removeByAction + ': ' + element);
                    console.log('DEFAULT: Switch does NOT support the action for the element: element & action: [' + element + ' & ' + removeByAction + ']');
                }
                break;

            case 'emails':
                if (removeByAction === 'DELETE') {
                    console.log(removeByAction + '[testing]: ' + element);
                } else if (removeByAction === 'EMPTY') {
                    console.log(removeByAction + ': ' + element);
                } else {
                    console.log(removeByAction + ': ' + element);
                    console.log('DEFAULT: Switch does NOT support the action for the element: element & action: [' + element + ' & ' + removeByAction + ']');
                }
                break;
				
            case 'phones':
                if (removeByAction === 'DELETE') {
                    console.log(removeByAction + '[testing]: ' + element);
                } else if (removeByAction === 'EMPTY') {
                    console.log(removeByAction + ': ' + element);
                } else {
                    console.log(removeByAction + ': ' + element);
                    console.log('DEFAULT: Switch does NOT support the action for the element: element & action: [' + element + ' & ' + removeByAction + ']');
                }
                break;
            case 'addresses':
                if (removeByAction === 'DELETE') {
                    console.log(removeByAction + '[testing]: ' + element);
                    delete currentContact.contactInfo.addresses;
                } else if (removeByAction === 'EMPTY') {
                    console.log(removeByAction + ': ' + element);
                } else {
                    console.log(removeByAction + ': ' + element);
                    console.log('DEFAULT: Switch does NOT support the action for the element: element & action: [' + element + ' & ' + removeByAction + ']');
                }
                break;

            default:
                console.log('DEFAULT: Switch does NOT support the element, regardless of action: element & action: [' + element + ' & ' + removeByAction + ']');
                break;
        }
    }//END for (let index = 0; index < checkboxArray.length; index++)
    $w('#codePrepContact').value = JSON.stringify(currentContact, undefined, 4);
	let dox = [
		['Name','name','EMPTY_OBJECT','DELETE_ELEMENT'],
		['non-Name','nonname','EMPTY_STRING','DELETE_ELEMENT'],
		['Emails','emails','EMPTY_ARRAY','DELETE_ELEMENT'],
		['Phones','phones','EMPTY_ARRAY','DELETE_ELEMENT'],
		['Addresses','addresses','EMPTY_ARRAY','DELETE_ELEMENT']
	];

}//END doRemoveCheckedFromPrep
// ø <----------- </doRemoveCheckedFromPrep> ----------->
