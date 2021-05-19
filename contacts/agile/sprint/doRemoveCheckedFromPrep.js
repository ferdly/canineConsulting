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
            case 'value':
                if (removeByAction === 'DELETE') {
                    console.log(removeByAction + ': ' + element);
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

}//END doRemoveCheckedFromPrep
// ø <----------- </doRemoveCheckedFromPrep> ----------->
