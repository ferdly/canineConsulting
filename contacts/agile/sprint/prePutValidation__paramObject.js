// ø <---------- <Core Implementation>  ---------->
let testParamObject = {};
testParamObject.formData = {};
// testParamObject.testingData = {};
testParamObject.logs = [];
testParamObject.warnings = [];
testParamObject.errors = [];
testParamObject.errorMessages = [];
// ø <---------- </Core Implementation> ---------->

testParamObjectArray.forEach(testingDataObject => {
    testParamObject.testingData = testingDataObject;

    // ! <-------------------- <do Call>  -------------------->
    prePutValidation(testParamObject);
    // ! COULD BE an object method:
    // if (testParamObject.testingData.isValid === testParamObject.testingData.isValidHypothesis) {
    //     testParamObject.testingData.testHypothesisResult = true;
    //     testParamObject.testingData.resultDescr = 'Hypothesis succeeded: Expected \'isValid\' testResult: ' + testParamObject.testingData.isValidHypothesis.toString();
    //     let errorObject = testParamObject.testingData;
    //     let hypothesistTrue = testParamObject.testingData.isValidHypothesis;
    //     if (hypothesistTrue) {
    //         testParamObject.ExpectedHypothesisTrueResultArray.push(errorObject);
    //     } else {
    //         testParamObject.ExpectedHypothesisFalseResultArray.push(errorObject);
    //     }
    // } else {
    //     testParamObject.testingData.testHypothesisResult = true;
    //     testParamObject.testingData.resultDescr = 'Hypothesis failed: UnExpected \'isValid\' testResult: '
    //         + testParamObject.isValid.toString();
    //     let errorObject = testParamObject.testingData;
    //     testParamObject.UnExpectedResultArray.push(errorObject);
    //     // console.warn('errorObject: ');
    //     // console.warn(errorObject);
    //     // console.warn('testParamObjectArray.UnExpectedResultArray: ');
    //     // console.warn(testParamObjectArray.UnExpectedResultArray);
    // }
    // ! <-------------------- </do Call> -------------------->
});
    // ! <errorMessageLibrary>
    let errorMessageLibrary={messages:{phemValueEM:{NO_AT:{message:"an Email must have an '@' symbol"},AT_ZERO:{message:"an Email cannot have the '@' symbol as the first character"},NO_DOT:{message:"an Email must have at least one '.' (dot) after the '@' symbol"},comments:"multiple '@'s could be added, but lack of 'patternCount()' is limiting"},phemValuePH:{message:"a phone must contain at least 10 numeric characters (digits)",comments:"only validation is too short, because of extensions, this could be more than 10"},labelKey:{message:"a label must not be an empty string"},addrssStreetAddress:{message:"Stret Address must not be an empty string"},addrssCity:{message:"City must not be an empty string"},addrssPostalCode:{LENGTH:{message:"the Zip Code must be 5 characters in length"},NON_DIGITS:{message:"the Zip Code must be entirely numeric characters (digits)"}}}};
    // ! </errorMessageLibrary>
    let keyOne = "";
    let keyTwo = "";
    let messageThis = "";
    
    testParamObject.errors.forEach(elementThis => {
        if (typeof elementThis === 'string' && elementThis.length > 0) {
            keyOne = elementThis;
            messageThis = errorMessageLibrary.messages[keyOne].message;
        }else{
            keyOne = elementThis[0];
            keyTwo = elementThis[1];
            messageThis = errorMessageLibrary.messages[keyOne][keyTwo].message;
        }
        testParamObject.errorMessages.push(messageThis);
        // console.log(messageThis);
    });
    
    // console.warn(testParamObject.testingData.resultDescr);
    // testParamObject.testingData = {};//WHY
    // testParamObject.
    // console.warn('testParamObject: ');
    // console.warn(testParamObject);
    // ø <the Whole Banana>
    // console.warn('testParamObject: ');
    // console.warn(testParamObject);
    // ø </the Whole Banana>
    // ø <the Critical Components> do pick & choose though
    // console.warn(testParamObject.testingData.resultDescr);
    // ! <---------- \_ single string for last, not useful _/ ---------->
    // console.warn('testParamObject.errors: that is, rendered messages pending:');
    // console.warn(testParamObject.errors);
    console.warn('testParamObject.errorMessages: that is rendered message array ');
    console.warn(testParamObject.errorMessages);
// ! <---------- \_ display message array to be rendered _/ ---------->
console.warn('testParamObject.errors: that is, rendered messages pending:');
console.warn(testParamObject.errors);
// ! <---------- \_ display message action required _/ ---------->
console.warn('testParamObject.UnExpectedResultArray: ');
console.warn(testParamObject.UnExpectedResultArray);
// ! <---------- \_ critical testing errors _/ ---------->
console.warn('testParamObject.ExpectedHypothesisFalseResultArray: ');
console.warn(testParamObject.ExpectedHypothesisFalseResultArray);
// ! <---------- \_ critical validation results _/ ---------->
console.warn('testParamObject.ExpectedHypothesisTrueResultArray: ');
console.warn(testParamObject.ExpectedHypothesisTrueResultArray);
// ø </the Critical Components>



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
    let kind = paramObject.testingData.kind;
    let action = paramObject.testingData.action;
    let isValid = true;
    let isValidNOTlog = [];
    let tempString = '';
    switch (kind) {
        case 'emails':
            messageThis = action + ' | ' + kind
            paramObject.logs.push(messageThis);
            // let email = $w('#phemValue').value;
            let email = paramObject.testingData.email;
            email = email.trim();
            // $w('#phemValue').value = email;
            paramObject.testingData.email = email;
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
            let phone = paramObject.testingData.phone;
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
            tempString = paramObject.testingData.addrssStreetAddress;
            // tempString = $w('#addrssStreetAddress').value;
            tempString = tempString.trim();
            let addressLength = tempString.length;
            // $w('#addrssStreetAddress').value = tempString;
            paramObject.testingData.addrssStreetAddress = tempString;
            // ø \_ streetAddress
            tempString = paramObject.testingData.city;
            // tempString = $w('#addrssCity').value;
            tempString = tempString.trim();
            let cityLength = tempString.length;
            // $w('#addrssCity').value = tempString;
            paramObject.testingData.city = tempString;
            // ø \_ city
            tempString = paramObject.testingData.postalCode;
            // tempString = $w('#addrssPostalCode').value;
            tempString = tempString.trim();
            let zipLength = tempString.length;
            // $w('#addrssPostalCode').value = tempString;
            paramObject.testingData.postalCode = tempString;
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
            tempString = paramObject.testingData.labelKey;
            tempString = tempString.trim();
            // $w('#labelKey').value = tempString;
            paramObject.testingData.labelKey = tempString;
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

    paramObject.testingData.isValid = isValid;
    paramObject.isValid = isValid;
    Array.prototype.push.apply(paramObject.errors, isValidNOTlog);

}//END lightboxCoreSwitchSkeleton(paramObject = {})
