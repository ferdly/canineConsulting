// ø <----- <prePutValidation>  ----->
export function prePutValidation(paramObject = {}) {
    /**
     * ø Validations
     * ø     - with incidental cleanup, primarily trim()
     * ø return: whole paramObject, primarily
     * ø    - isValidNOTlog, an array of error codes
     * ø      • where there is a single validation just the element id
     * ø      • otherwise an array [0] as id, [1] as 2ndary key
     */
    // let kind = $w('#recievedKind').value;
    let messageThis = '';
    let kind = paramObject.state.kind;
    let action = paramObject.state.action;
    let isValid = true;
    let isValidNOTlog = [];
    let tempString = '';
    switch (kind) {
        case 'emails':
            messageThis = action + ' | ' + kind
            paramObject.logs.push(messageThis);
            // let email = $w('#phemValue').value;
            let email = paramObject.formData.email;//paramObject.testingData.email;
            email = email.trim();
            // $w('#phemValue').value = email;
            paramObject.formData.email = email;//paramObject.testingData.email = email;
            let locationAT = email.indexOf('@');
            let locationDOT = email.indexOf('.', locationAT);
            let errNoAT = locationAT < 0 ? true : false;
            let errATzero = locationAT === 0 ? true : false;
            let errNoDOT = locationDOT < 0 ? true : false;
            isValid = errNoAT ? false : isValid;
            if (errNoAT) { isValidNOTlog.push([['phemValueEM'], ['NO_AT']]) };
            isValid = errATzero ? false : isValid;
            if (errATzero) { isValidNOTlog.push([['phemValueEM'], ['AT_ZERO']]) };
            isValid = errNoDOT ? false : isValid;
            if (errNoDOT) { isValidNOTlog.push([['phemValueEM'], ['NO_DOT']]) };
            break;

        case 'phones':
            // let phone = $w('#phemValue').value;
            let phone = paramObject.formData.phone;//paramObject.testingData.phone;
            // $w('#phemValue').value = phone;
            phone = phone.trim();
            messageThis = action + ' | ' + kind
            paramObject.logs.push(messageThis);
            phone = phone.replace(/[^0-9]/g, '');
            // ! <arguably _here_> but want to test whether WiX does
            // $w('#phemValue').value = phone;
            // ! </arguably _here_>
            isValid = phone.length === 10 ? true : false;
            if (!isValid) { isValidNOTlog.push('phemValuePH') };
            break;

        case 'addresses':
            messageThis = action + ' | ' + kind
            tempString = paramObject.formData.addrssStreetAddress;//paramObject.testingData.addrssStreetAddress;
            // tempString = $w('#addrssStreetAddress').value;
            tempString = tempString.trim();
            let addressLength = tempString.length;
            // $w('#addrssStreetAddress').value = tempString;
            paramObject.formData.addrssStreetAddress = tempString;//paramObject.testingData.addrssStreetAddress = tempString;
            // ø \_ streetAddress
            tempString = paramObject.formData.city;//paramObject.testingData.city;
            // tempString = $w('#addrssCity').value;
            tempString = tempString.trim();
            let cityLength = tempString.length;
            // $w('#addrssCity').value = tempString;
            paramObject.formData.city = tempString;//paramObject.testingData.city = tempString;
            // ø \_ city
            tempString = paramObject.formData.postalCode;//paramObject.testingData.postalCode;
            // tempString = $w('#addrssPostalCode').value;
            tempString = tempString.trim();
            let zipLength = tempString.length;
            // $w('#addrssPostalCode').value = tempString;
            paramObject.formData.postalCode = tempString;//paramObject.testingData.postalCode = tempString;
            tempString = tempString.replace(/[^0-9]/g, '');
            let zipLengthDigits = tempString.length
            // ø \_ zip
            let isValidTemp = true;
            // ø validation
            isValidTemp = addressLength < 1 ? false : true;
            if (!isValidTemp) { isValidNOTlog.push('addrssStreetAddress') };
            isValid = !isValidTemp ? false : isValid;
            // ø \_ streetAddress
            isValidTemp = cityLength < 1 ? false : true;
            if (!isValidTemp) { isValidNOTlog.push('addrssCity') };
            isValid = !isValidTemp ? false : isValid;
            // ø \_ city
            isValidTemp = zipLengthDigits !== 5 ? false : true;
            if (!isValidTemp) { isValidNOTlog.push([['addrssPostalCode'], ['LENGTH']]) };
            isValid = !isValidTemp ? false : isValid;
            // ø \_ zipLengthDigits
            isValidTemp = zipLengthDigits !== zipLength ? false : true;
            if (!isValidTemp) { isValidNOTlog.push([['addrssPostalCode'], ['NON_DIGITS']]) };
            isValid = !isValidTemp ? false : isValid;
            // ø \_ zipLengthDigits


            paramObject.logs.push(messageThis);
            break;

        case 'labelKeys':
            messageThis = action + ' | ' + kind
            // tempString = $w('#labelKey').value;
            tempString = paramObject.formData.labelKey;//paramObject.testingData.labelKey;
            tempString = tempString.trim();
            // $w('#labelKey').value = tempString;
            paramObject.formData.labelKey = tempString;//paramObject.testingData.labelKey = tempString;
            // console.log('tempString.length: ' + tempString.length);
            isValid = tempString.length < 1 ? false : true;
            if (!isValid) { isValidNOTlog.push('labelKey') };
            paramObject.logs.push(messageThis);
            // isValid = !isValidTemp ? false : isValid;
            break;

        default:
            messageThis = action + ' | ' + kind + ' – is not supported in Switch';
            paramObject.logs.push(messageThis);
            break;
    }

    paramObject.formData.isValid = isValid;//paramObject.testingData.isValid = isValid;
    //formData
    paramObject.isValid = isValid;
    Array.prototype.push.apply(paramObject.errors, isValidNOTlog);

}//END prePutValidation(paramObject = {})
// ø <----- </prePutValidation> ----->
