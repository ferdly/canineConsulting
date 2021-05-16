// ø <---------- <Simple Test>  ---------->
let wixBoolean = false;
let testFormDataObject = {};
// ! <---------- <all attributes>  ---------->
// ! <---------- <YIKES: match WiX object element>  ---------->
// ø email attributes and phone attributes prefixed because of overlap
// ! <---------- <kind-count>  ---------->
testFormDataObject.StateKind = "emails";
// testFormDataObject.StateKind = "phones";
// testFormDataObject.StateKind = "labelKeys";
// testFormDataObject.StateKind = "addresses";
let realCurrentData = true;
let currentObectArrayJSON = [];
if(realCurrentData){
    if(wixBoolean){
        currentObectArrayJSON = $w('#selectListData');
    }else{
        currentObectArrayJSON = [
            {
                "tag": "othER",
                "email": "floyd.holt@example.com"
            },
            {
                "tag": "Login",
                "email": "qiqgroup+floyd@gmail.com",
                "primary": "true"
            }
        ];
    }
    testFormDataObject.StateCurrentObectArray = currentObectArrayJSON;
    let liveCount = testFormDataObject.StateCurrentObectArray.length;
    testFormDataObject.StateCount = liveCount - 1;
}else{
    testFormDataObject.StateCount = 2;
}
testFormDataObject.StateIndexSelected = 0;
// ! <---------- </kind-count> ---------->
switch (testFormDataObject.StateKind) {
    case "emails":
        testFormDataObject.emails = {};
        // ! <---------- <test Emails>  ---------->
        testFormDataObject.emails.email = "bradlowry@gmail.com";
        testFormDataObject.emails.tag = "UNTAGGED";
        testFormDataObject.emails.primary = true;
        // ! <-----\_  one _/ ----->
        // testFormDataObject.emails.email = "bradlowry@gmailcom";
        // testFormDataObject.emails.tag = "UNTAGGED";
        // testFormDataObject.emails.primary = true;
        // ! <-----\_  two _/ ----->
        // ! <---------- </test Emails> ---------->
        break;

    case "phones":
        testFormDataObject.phones = {};
        // ! <---------- <test Phones>  ---------->
        testFormDataObject.phones.phone = "218-310-5153";
        testFormDataObject.phones.tag = "UNTAGGED";
        testFormDataObject.phones.primary = true;
        // ! <-----\_  one _/ ----->
        testFormDataObject.phones.phone = "218-310-515";
        testFormDataObject.phones.tag = "UNTAGGED";
        testFormDataObject.phones.primary = true;
        // ! <-----\_  two _/ ----->
        // ! <---------- </test Phones> ---------->
        break;

    case "labelKeys":
        // ! <---------- <test labelKeys>  ---------->
        testFormDataObject.labelKey = "HAPPY";
        // ! <-----\_  one _/ ----->
        testFormDataObject.labelKey = "     ";
        // ! <-----\_  two _/ ----->
        // ! <---------- </test labelKeys> ---------->
        break;

    case "addresses":
        // ! <---------- <test Addresses>  ---------->
        testFormDataObject.tag = "UNTAGGED";
        testFormDataObject.addrssStreetAddress = "315 N 3rd Ave E #101";
        // testFormDataObject.address = {};
        // testFormDataObject.address.streetAddress = {};
        // testFormDataObject.address.streetAddress.number = "315";
        // testFormDataObject.address.streetAddress.name = "N 3rd Ave E # 101";
        testFormDataObject.addressLine2 = "Apt 101";
        testFormDataObject.city = "Duluth";
        testFormDataObject.subdivision = "MN";
        testFormDataObject.postalCode = "55805";
        testFormDataObject.country = "US";
        testFormDataObject.location = {};
        testFormDataObject.location.latitude = "46.786671";
        testFormDataObject.location.longitude = "-92.100487";
        testFormDataObject.formatted = "PPENDING";
        // ! <-----\_  one _/ ----->
        testFormDataObject.tag = "UNTAGGED";
        testFormDataObject.addrssStreetAddress = "    315 N 3rd Ave E #101";
        // testFormDataObject.address = {};
        // testFormDataObject.address.streetAddress = {};
        // testFormDataObject.address.streetAddress.number = "315";
        // testFormDataObject.address.streetAddress.name = "N 3rd Ave E # 101";
        testFormDataObject.addressLine2 = "   Apt 101   ";
        testFormDataObject.city = "   Duluth   ";
        testFormDataObject.subdivision = "MN";
        testFormDataObject.postalCode = "5580O";
        testFormDataObject.country = "US";
        testFormDataObject.location = {};
        testFormDataObject.location.latitude = "46.786671";
        testFormDataObject.location.longitude = "-92.100487";
        testFormDataObject.formatted = "PPENDING";
        // ! <-----\_  two _/ ----->
        // ! <---------- </test Addresses> ---------->
        break;

    default:
        break;
}
// ! <---------- </YIKES: match WiX object element> ---------->
// ! <---------- </all attributes> ---------->
// ø <---------- </Simple Test> ---------->

// ø <---------- <Core Implementation>  ---------->
let kind = "PUT";
let paramObjectThis = {};
paramObjectThis.state = {};
paramObjectThis.state.wix = wixBoolean === true ? true : false;
paramObjectThis.state.action = "PUT";
paramObjectThis.state.kind = paramObjectThis.state.wix === true ? $w('#recievedKind').value : testFormDataObject.StateKind;
paramObjectThis.state.count = paramObjectThis.state.wix === true ? $w('#recievedCount').value : testFormDataObject.StateCount;
paramObjectThis.state.selectedIndex = paramObjectThis.state.wix === true ? $w('#selectIndexEmailPhone').value : testFormDataObject.StateIndexSelected;
paramObjectThis.state.maxIndex = paramObjectThis.state.count;
paramObjectThis.state.nextIndex = paramObjectThis.state.count + 1;
paramObjectThis.state.currentObectArray = paramObjectThis.state.wix === true ? JSON.parse($w('#selectListData').value) : testFormDataObject.StateCurrentObectArray;
paramObjectThis.testFormDataObject = wixBoolean === true ? {} : testFormDataObject;
paramObjectThis.formData = {};
paramObjectThis.logs = [];
paramObjectThis.warnings = [];
paramObjectThis.errors = [];
paramObjectThis.errorMessages = [];
paramObjectThis.overallResultMessages = [];
// ø <---------- </Core Implementation> ---------->






console.warn('paramObjectThis.state: ');
console.warn(paramObjectThis.state);
console.warn('paramObjectThis.testFormDataObject: ');
console.warn(paramObjectThis.testFormDataObject);
// ! <---------- <Actual Code>  ---------->
// ! <----- <¿Button Click Create-Update?>  ----->
prePopulateByIndexSelected(paramObjectThis);
// ! <----- </¿Button Click Create-Update?> ----->
// ! <----- <¿Button Click doPut?>  ----->
preBuildFormDataObject(paramObjectThis);
// console.warn('paramObjectThis.formData: ');
// console.warn(paramObjectThis.formData);
console.warn('Before Validation: paramObjectThis.formData: ');
console.warn(paramObjectThis.formData);
prePutValidation(paramObjectThis);
if(paramObjectThis.errors.length > 0){
    gatherErrorMessage(paramObjectThis);
    console.warn('After Validation: paramObjectThis.formData: ');
    console.warn(paramObjectThis.formData);
    console.warn("No More: display Error Messages and ")
}else{
    console.warn('After Validation: paramObjectThis.formData: ');
    console.warn(paramObjectThis.formData);
    console.warn("Finish Put: return to List");
}
// ! <----- </¿Button Click doPut?> ----->
// ! <---------- </Actual Code> ---------->








// ø <----- <prePopulate from Index>  ----->
export function prePopulateByIndexSelected(paramObject){
    if(paramObject.state.selectedIndex < paramObject.state.nextIndex){
        console.warn("prePopulate: with Element [" + paramObject.state.selectedIndex + "]");
        paramObject.state.prepopulateElementObject = paramObject.state.currentObectArray[paramObject.state.selectedIndex];
        console.warn('paramObject.state.prepopulateElementObject: ');
        console.warn(paramObject.state.prepopulateElementObject);
    }else{
        console.warn("prePopulate NOT: Element [" + paramObject.state.selectedIndex + "] is the Next Index");
        paramObject.state.prepopulateElementObject = {};

    }
}
// ø <----- </prePopulate from Index> ----->
// ø <----- <preBuildParamObject>  ----->
export function preBuildFormDataObject(paramObject) {
    let tempSplit = []
    switch (paramObject.state.kind) {
        case 'emails':
            if (paramObject.state.wix) {
                paramObjectThis.formData.email = $w('#phemValue').value;
                paramObjectThis.formData.tag = $w('#phemTag').value;
                paramObjectThis.formData.primary = $w('#phemPrimary').isChecked();
            } else {
                paramObjectThis.formData.email = testFormDataObject.emails.email;
                paramObjectThis.formData.tag = testFormDataObject.emails.tag;
                paramObjectThis.formData.primary = testFormDataObject.emails.primary;
            }
            break;

        case 'phones':
            if (paramObject.state.wix) {
                paramObjectThis.formData.phone = $w('#phemValue').value;
                paramObjectThis.formData.tag = $w('#phemTag').value;
                paramObjectThis.formData.primary = $w('#phemPrimary').isChecked();
            } else {
                paramObjectThis.formData.phone = testFormDataObject.phones.phone;
                paramObjectThis.formData.tag = testFormDataObject.phones.tag;
                paramObjectThis.formData.primary = testFormDataObject.phones.primary;
            }
            break;

        case 'labelKeys':
            if (paramObject.state.wix) {
                paramObjectThis.formData.labelKey = $w('#labelKey').value;
            } else {
                paramObjectThis.formData.labelKey = testFormDataObject.labelKey;
            }
            break;

        case 'addresses':
            paramObjectThis.formData.address = {};
            if (paramObject.state.wix) {
                paramObjectThis.formData.tag = $w('#addrssTag').value;
                paramObjectThis.formData.address.addrssStreetAddress = $w('#addrssStreetAddress').value;
                paramObjectThis.formData.address.addressLine2 = $w('#addrssAddressLine2').value;
                paramObjectThis.formData.address.city = $w('#addrssCity').value;
                paramObjectThis.formData.address.subdivision = $w('#addrssSubdivision').value;
                paramObjectThis.formData.address.postalCode = $w('#addrssPostalCode').value;
                paramObjectThis.formData.address.country = "US";
                paramObjectThis.formData.address.location.latitude = $w('#addrssLocationLatitude').value;
                paramObjectThis.formData.address.location.longitude = $w('#addrssLocationLongitude').value;
                paramObjectThis.formData.address.formatted = "PPENDING";
            } else {
                paramObjectThis.formData.tag = testFormDataObject.tag;
                paramObjectThis.formData.address.addrssStreetAddress = testFormDataObject.addrssStreetAddress;
                paramObjectThis.formData.address.addressLine2 = testFormDataObject.addressLine2;
                paramObjectThis.formData.address.city = testFormDataObject.city;
                paramObjectThis.formData.address.subdivision = testFormDataObject.subdivision;
                paramObjectThis.formData.address.postalCode = testFormDataObject.postalCode;
                paramObjectThis.formData.address.country = "US";
                paramObjectThis.formData.address.location = {};
                paramObjectThis.formData.address.location.latitude = testFormDataObject.location.latitude;
                paramObjectThis.formData.address.location.longitude = testFormDataObject.location.longitude;
                paramObjectThis.formData.address.formatted = "PPENDING";
            }
            tempSplit = (paramObjectThis.formData.address.addrssStreetAddress).split(' ');
            paramObjectThis.formData.address.streetAddress = {};
            paramObjectThis.formData.address.streetAddress.number = tempSplit.shift();
            paramObjectThis.formData.address.streetAddress.name = tempSplit.join(' ');
            break;

        default:
            paramObjectThis.overallResultMessages.push(paramObject.state.kind + ' is Not Supported for this SWITCH');
            break;
    }
}//END preBuildFormDataObject(paramObject)

// ø <----- </preBuildParamObject> ----->
// throw error('Force Halt');

// testParamObjectArray.forEach(testingDataObject => {
//     testParamObject.testingData = testingDataObject;

//     // ! <-------------------- <do Call>  -------------------->
//     prePutValidation(testParamObject);
//     // ! <-------------------- </do Call> -------------------->
// });

export function gatherErrorMessage(paramObject) {

    // ! <errorMessageLibrary>
    let errorMessageLibrary = { messages: { phemValueEM: { NO_AT: { message: "an Email must have an '@' symbol" }, AT_ZERO: { message: "an Email cannot have the '@' symbol as the first character" }, NO_DOT: { message: "an Email must have at least one '.' (dot) after the '@' symbol" }, comments: "multiple '@'s could be added, but lack of 'patternCount()' is limiting" }, phemValuePH: { message: "a phone must contain at least 10 numeric characters (digits)", comments: "only validation is too short, because of extensions, this could be more than 10" }, labelKey: { message: "a label must not be an empty string" }, addrssStreetAddress: { message: "Stret Address must not be an empty string" }, addrssCity: { message: "City must not be an empty string" }, addrssPostalCode: { LENGTH: { message: "the Zip Code must be 5 characters in length" }, NON_DIGITS: { message: "the Zip Code must be entirely numeric characters (digits)" } } } };
    // ! </errorMessageLibrary>
    let keyOne = "";
    let keyTwo = "";
    let messageThis = "";

    paramObject.errors.forEach(elementThis => {
        if (typeof elementThis === 'string' && elementThis.length > 0) {
            keyOne = elementThis;
            messageThis = errorMessageLibrary.messages[keyOne].message;
        } else {
            keyOne = elementThis[0];
            keyTwo = elementThis[1];
            messageThis = errorMessageLibrary.messages[keyOne][keyTwo].message;
        }
        paramObject.errorMessages.push(messageThis);
        // console.log(messageThis);
    });
}//END gatherErrorMessage(paramObject)

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
// console.warn('testParamObject.errorMessages: that is rendered message array ');
// console.warn(testParamObject.errorMessages);
// ! <---------- \_ display message array to be rendered _/ ---------->
// console.warn('testParamObject.errors: that is, rendered messages pending:');
// console.warn(testParamObject.errors);
// ! <---------- \_ display message action required _/ ---------->
// console.warn('testParamObject.UnExpectedResultArray: ');
// console.warn(testParamObject.UnExpectedResultArray);
// ! <---------- \_ critical testing errors _/ ---------->
// console.warn('testParamObject.ExpectedHypothesisFalseResultArray: ');
// console.warn(testParamObject.ExpectedHypothesisFalseResultArray);
// ! <---------- \_ critical validation results _/ ---------->
// console.warn('testParamObject.ExpectedHypothesisTrueResultArray: ');
// console.warn(testParamObject.ExpectedHypothesisTrueResultArray);
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

}//END lightboxCoreSwitchSkeleton(paramObject = {})

export function getCurrentByIndex(paramObject){

}
