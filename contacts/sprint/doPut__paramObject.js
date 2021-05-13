export function doPut(paramObject = {}){
	
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
        if($w('#phemPrimary').checked){
            currentArray.forEach(element => {
                delete element.primary;
            });
        }
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
                if($w('#phemPrimary').checked){
                    paramObject.new_updatedElement.primary = true;
                }
                break;
    
            case 'phones':
                console.log("Do: phones: " + kind)
                // $w('#devNotes').value = 'going to edit a ' + objectCurrentNew + ' object element;\n'
                // stateById("kindEmailPhone");
                paramObject.new_updatedElement.phone = $w('#phemValue').value;
                paramObject.new_updatedElement.tag = $w('#phemTag').value;
                if($w('#phemPrimary').checked){
                    paramObject.new_updatedElement.primary = true;
                }
                break;
    
            case 'addresses':
                console.log("Do: addresses: " + kind)
                // $w('#devNotes').value = 'going to edit a ' + objectCurrentNew + ' object element;\n'
                // stateById("kindAddress");
                paramObject.new_updatedElement.address = {};
                paramObject.new_updatedElement.address.streetAddress = {};

                let lat = Number($w('#addrssLocationLatitude').value);
                let long = Number($w('#addrssLocationLongitude').value);
                let latlongValid = !isNaN(parseFloat(lat)) && isFinite(lat) != null ? true : false;
                latlongValid = !isNaN(parseFloat(long)) && isFinite(long) != null ? latlongValid : false;
                if(latlongValid){
                    paramObject.new_updatedElement.address.location = {};
                    paramObject.new_updatedElement.address.location.latitude = lat;
                    paramObject.new_updatedElement.address.location.longitude = long;
                }
                
                paramObject.new_updatedElement.tag = $w('#addrssTag').value;

                let streetRaw = $w('#addrssStreetAddress').value;
                let streetSplit = streetRaw.split(' ');
                let streetNumber = streetSplit.shift();
                let streetAptMaybe = streetSplit[streetSplit.length - 1];
                let streetApt = '';
                if(/^\d+$/.test(streetAptMaybe)){
                    streetApt = streetSplit.pop();
                }
                let streetName = streetSplit.join(' ');
                // console.warn('streetNumber: ' + streetNumber);
                // console.warn('streetName: ' + streetName);
                // console.warn('streetApt: ' + streetApt);
                
    
                paramObject.new_updatedElement.address.streetAddress.number = streetNumber
                paramObject.new_updatedElement.address.streetAddress.name = streetName;
                paramObject.new_updatedElement.address.streetAddress.apt = streetApt;
                if($w('#addrssAddressLine2').value.trim().length > 0){
                    paramObject.new_updatedElement.addressLine2 = $w('#addrssAddressLine2').value;
                }
                paramObject.new_updatedElement.address.city = $w('#addrssCity').value;
                paramObject.new_updatedElement.address.subdivision = $w('#addrssSubdivision').value;
                paramObject.new_updatedElement.address.postalCode = $w('#addrssPostalCode').value;
                // paramObject.new_updatedElement.location.latitude = $w('#addrssLocationLatitude').value;
                // paramObject.new_updatedElement.location.longitude = $w('#addrssLocationLongitude').value;
                paramObject.new_updatedElement.address.formatted = "PPENDING";
                break;
    
            case 'labelKeys':
                paramObject.new_updatedElement.labelKey = $w('#inputValueLabel').value;
                console.log("Do: labelKeys: " + kind)
                // $w('#devNotes').value = 'going to edit a ' + objectCurrentNew + ' object element;\n'
                currentArray[indexObjectArray] = paramObject.new_updatedElement.labelKey;
                break;
    
            default:
                console.log("Do: NNOTHING: " + kind + ' – is not supported in Switch')
                // $w('#devNotes').value = "unsupported Kind: " + $w('#recievedKind').value
                console.log("unsupported Kind: " + $w('#recievedKind').value);
                break;
        }
        // let indexObjectArray = $w('#selectIndexEmailPhone').value;
        paramObject.indexObjectArray = indexObjectArray;
        $w('#devNotes').value = JSON.stringify(paramObject, undefined, 4);
        // let currentArray = JSON.parse($w('#selectListData').value);
        console.log('BEFORE currentArray: ');
        console.log(currentArray);
        if(kind !== 'labelKeys'){
            currentArray[indexObjectArray] = paramObject.new_updatedElement;
        }
        console.log('AFTER currentArray: ');
        console.log(currentArray);
        $w('#selectListData').value = JSON.stringify(currentArray,undefined,4);
        stateById("selectList");;
    }
    //END export function doPut(paramObject = {})
    