let paramObjectThis = {};


export function doPut(paramObject = {}) {

    /**
     * Validate the data entry
     * Construct the Element Opject
     * Assign the Element Object by Index
     * Repopulate JSON box via stringify
     */
    console.log("holder for three blocks (called functions -- maybe only Addresses)")
    let kind = $w('#recievedKind').value;
    paramObject.new_updatedElement = {};
    let currentArray = JSON.parse($w('#selectListData').value);
    let indexObjectArray = Number($w('#selectIndexEmailPhone').value);
    console.log($w('#phemValue').value);
    console.log($w('#phemTag').value);
    console.log($w('#phemPrimary').checked);
    switch (kind) {
        case 'emails':
            console.log("Do: emails: " + kind)
            // $w('#devNotes').value = 'going to edit a ' + objectCurrentNew + ' object element;\n'
            // stateById("kindEmailPhone");
            paramObject.new_updatedElement.email = $w('#phemValue').value;
            paramObject.new_updatedElement.tag = $w('#phemTag').value;
            paramObject.new_updatedElement.primary = $w('#phemPrimary').checked;
            break;

        case 'phones':
            console.log("Do: phones: " + kind)
            $w('#devNotes').value = 'going to edit a ' + objectCurrentNew + ' object element;\n'
            // stateById("kindEmailPhone");
            paramObject.new_updatedElement.phone = $w('#phemValue').value;
            paramObject.new_updatedElement.tag = $w('#phemTag').value;
            paramObject.new_updatedElement.primary = $w('#phemPrimary').value;
            break;

        case 'addresses':
            console.log("Do: addresses: " + kind)
            // $w('#devNotes').value = 'going to edit a ' + objectCurrentNew + ' object element;\n'
            // stateById("kindAddress");
            paramObject.new_updatedElement.streetAddress = {};
            paramObject.new_updatedElement.location = {};


            paramObject.new_updatedElement.tag = $w('#addrssTag').value;
            paramObject.new_updatedElement.streetAddress.number = $w('#addrssStreetAddress').value;
            paramObject.new_updatedElement.streetAddress.name = $w('#addrssStreetAddressSPLIT').value;
            paramObject.new_updatedElement.streetAddress.apt = $w('#addrssStreetAddressSPLIT').value;
            paramObject.new_updatedElement.addressLine2 = $w('#addrssAddressLine2').value;
            paramObject.new_updatedElement.city = $w('#addrssCity').value;
            paramObject.new_updatedElement.subdivision = $w('#addrssSubdivision').value;
            paramObject.new_updatedElement.postalCode = $w('#addrssPostalCode').value;
            paramObject.new_updatedElement.location.latitude = $w('#addrssLocationLatitude').value;
            paramObject.new_updatedElement.location.longitude = $w('#addrssLocationLongitude').value;
            break;

        case 'labelKeys':
            paramObject.new_updatedElement.labelKey = $w('#inputValueLabel').value;
            console.log("Do: labelKeys: " + kind)
            // $w('#devNotes').value = 'going to edit a ' + objectCurrentNew + ' object element;\n'
            currentArray[indexObjectArray] = paramObject.new_updatedElement.labelKey;
            /**
             * {
             *     "new_updatedElement": {
             *         "labelKey": "Happy"
             *     },
             *     "indexObjectArray": "3"
             * }
             */
            break;

        default:
            console.log("Do: NNOTHING: " + kind + ' – is not supported in Switch')
            // $w('#devNotes').value = "unsupported Kind: " + $w('#recievedKind').value
            console.log("unsupported Kind: " + $w('#recievedKind').value);
            break;
    }
    paramObject.indexObjectArray = indexObjectArray;
    $w('#devNotes').value = JSON.stringify(paramObject, undefined, 4);
    console.log('BEFORE currentArray: ');
    console.log(currentArray);
    if(kind !== 'labelKeys'){
        currentArray[indexObjectArray] = paramObject.new_updatedElement;
    }
    console.log('AFTER currentArray: ');
    console.log(currentArray);
    $w('#selectListData').value = JSON.stringify(currentArray.undefined,4);
    stateById("selectList");
}