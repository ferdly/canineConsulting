let live = null;
live = true;
live = false;
if ("environment" === "live") {
    // let $w('#phemValue') = {};
    // let $w('#phemValue') = {};
    // $w('#phemValue').value = "bradlowry@gmail.com";
    // let $w('#recievedKind').value = {};
    // $w('#recievedKind').value = 'emails';
} else {
    let wixFaux_phemValue = "bradlowry@gmail.com";
    let wixFaux_recievedKind = 'emails';
}
// ø <-------------------- <Test Scenarios>  -------------------->
// ! <enable for Scenario Building>
// let testParamObjectArray = [];
// let testParamObject = {};
// testParamObject.testingData = {};
// ! </enable for Scenario Building>
// ø <---------- <Email>  ---------->
// testParamObject.testingData.action = 'preDo Validate';
// testParamObject.testingData.kind = 'emails';
// ø <----- <Scenarios Succeed>  ----->
// testParamObject.testingData.email = "tim.walz@governor.us.mn.gov";
// testParamObject.testingData.isValidHypothesis = true;
// testParamObject.testingData.scenarioDescr = "Gov. Walz with multiple DOTs";
// ø <----- </Scenarios Succeed> ----->
// ø <----- <Scenarios Fail>  ----->
// testParamObject.testingData.email = "richard.feynman@steamdacom";
// testParamObject.testingData.isValidHypothesis = false;
// testParamObject.testingData.scenarioDescr = "No DOTs after AT";
// ø <----- </Scenarios Fail> ----->
// ø <---------- </Email> ---------->
// ø <---------- <Phone>  ---------->
// testParamObject.testingData.action = 'preDo Validate';
// testParamObject.testingData.kind = 'phones';
// ø <----- <Scenarios Succeed>  ----->
// testParamObject.testingData.phone = "(315) 287-2578 ext 544";
// testParamObject.testingData.isValidHypothesis = true;
// testParamObject.testingData.scenarioDescr = "extension example";
// ø <----- </Scenarios Succeed> ----->
// ø <----- <Scenarios Fail>  ----->
// testParamObject.testingData.phone = "315-287-257";
// testParamObject.testingData.isValidHypothesis = false;
// testParamObject.testingData.scenarioDescr = "too few characters (oops! keystroke for last digit failes)";
// ! NO rejection where more than 10 numeric characters (see 'ext 544' above)
// ! NO RegEx removal of stray characters under the belief that WiX does this already
// ! NO removal of Leading '1', could work
// ! NO rejection where Second  Numeric is '1' or '0', could work
// ø <----- </Scenarios Fail> ----->
// ø <---------- </Phone> ---------->
// ø <---------- <Label>  ---------->
// testParamObject.testingData.action = 'preDo Validate';
// testParamObject.testingData.kind = 'labelKeys';
// ø <----- <Scenarios Succeed>  ----->
// testParamObject.testingData.labelKey = "HAPPY";
// testParamObject.testingData.isValidHypothesis = true;
// testParamObject.testingData.scenarioDescr = "just a word";
// ø <----- </Scenarios Succeed> ----->
// ø <----- <Scenarios Fail>  ----->
// testParamObject.testingData.labelKey = "";
// testParamObject.testingData.isValidHypothesis = false;
// testParamObject.testingData.scenarioDescr = "just an empty string";
// ø <----- </Scenarios Fail> ----->
// ø <---------- </Label> ---------->
// ø <---------- <Address>  ---------->
// testParamObject.testingData.action = 'preDo Validate';
// testParamObject.testingData.kind = 'addresses';
// ø <----- <Scenarios Succeed>  ----->
// ø <---------- <address Attributes>  ---------->
// testParamObject.testingData.addrssStreetAddress = "     315 N 3rd Ave E #101";
// testParamObject.testingData.city = "Duluth     ";
// testParamObject.testingData.postalCode = "    55805     ";
// ø <---------- </address Attributes> ---------->
// testParamObject.testingData.isValidHypothesis = true;
// testParamObject.testingData.scenarioDescr = "5 spaces before address, after city and either side of zip";
// ø <----- </Scenarios Succeed> ----->
// ø <----- <Scenarios Fail>  ----->
// ø <---------- <address Attributes>  ---------->
// testParamObject.testingData.addrssStreetAddress = "315 N 3rd Ave E #101";
// testParamObject.testingData.city = "Duluth";
// testParamObject.testingData.postalCode = "5580O";
// ø <---------- </address Attributes> ---------->
// testParamObject.testingData.isValidHypothesis = false;
// testParamObject.testingData.scenarioDescr = "Zip 5 characters with 1 non-digit after (capital o for fun)";
// ø <----- </Scenarios Fail> ----->
// ø <---------- </Address> ---------->
// ø <-------------------- </Test Scenarios> -------------------->
// console.warn('testParamObject.testingData: ');
// console.warn(testParamObject.testingData);
// console.warn('testParamObjectArray: ');
// console.warn(testParamObjectArray);
// throw new Error("Force Halt: ...because");
// ! ============================================================
// ø <---------- <Core Implementation>  ---------->
let testParamObject = {};
testParamObject.formData = {};
// testParamObject.testingData = {};
testParamObject.logs = [];
testParamObject.warnings = [];
testParamObject.errors = [];
// ø <---------- </Core Implementation> ---------->
// ø <-------------------- <LoadPreBuilt Scenarios>  -------------------->
let testParamObjectArray = [];
// ø <---------- <Email>  ---------->
// testParamObjectArray.push({action:"preDo Validate",kind:"emails",email:"bradlowry@gmail.com",isValidHypothesis:!0,scenarioDescr:"my email"});
// testParamObjectArray.push({action:"preDo Validate",kind:"emails",email:"brad.lowry@gmail.com",isValidHypothesis:!0,scenarioDescr:"my email with early DOT"});
// testParamObjectArray.push({ action: "preDo Validate", kind: "emails", email: "tim.walz@governor.us.mn.gov", isValidHypothesis: !0, scenarioDescr: "Gov. Walz with multiple DOTs" });
// testParamObjectArray.push({action:"preDo Validate",kind:"emails",email:"richard.feynmansteamda.com",isValidHypothesis:!1,scenarioDescr:"No AT (@)"});
// testParamObjectArray.push({action:"preDo Validate",kind:"emails",email:"@steamda.com",isValidHypothesis:!1,scenarioDescr:"AT (@) at beginning"});
// testParamObjectArray.push({action:"preDo Validate",kind:"emails",email:"richard.feynman@steamdacom",isValidHypothesis:!1,scenarioDescr:"No DOT (.) after AT"});
// testParamObjectArray.push({action:"preDo Validate",kind:"emails",email:"richard@feynman@steamda.com",isValidHypothesis:!1,scenarioDescr:"multiple ATs"});
// ø <---------- </Email> ---------->
// ø <---------- <Phone>  ---------->
// testParamObjectArray.push({ action: "preDo Validate", kind: "phones", phone: "3152872578", isValidHypothesis: !0, scenarioDescr: "just ten digits" });
// testParamObjectArray.push({action:"preDo Validate",kind:"phones",phone:"315-287-2578",isValidHypothesis:!0,scenarioDescr:"simple common formatting"});
// testParamObjectArray.push({ action: "preDo Validate", kind: "phones", phone: "(315) 287-2578", isValidHypothesis: !0, scenarioDescr: "more formal common formatting" });
// testParamObjectArray.push({action:"preDo Validate",kind:"phones",phone:"3# 1! 5% 2@ 8* 7& 2@ 5% 7& 8*",isValidHypothesis:!0,scenarioDescr:"crazy extra characters"});
// testParamObjectArray.push({action:"preDo Validate",kind:"phones",phone:"(612) 625-5000 ext 778",isValidHypothesis:!0,scenarioDescr:"extension example main: reason to NOT limit to 10"});
// testParamObjectArray.push({action:"preDoValidate",kind:"phones",phone:"625-5000 ext.728",isValidHypothesis:!1,scenarioDescr:"no area code, three digit extension: reason to NOT RegEx otherwise valid",isValid:!0,testHypothesisResult:!0,resultDescr:"Hypothesis failed: UnExpected 'isValid' testResult: true"});
// testParamObjectArray.push({ action: "preDo Validate", kind: "phones", phone: "315-287-257", isValidHypothesis: !1, scenarioDescr: "too few characters (oops! keystroke for last digit fails)" });
// ø <---------- </Phone> ---------->
// ø <---------- <Label>  ---------->
// testParamObjectArray.push({ action: "preDo Validate", kind: "labelKeys", labelKey: "HAPPY", isValidHypothesis: !0, scenarioDescr: "just a word" });
// testParamObjectArray.push({ action: "preDo Validate", kind: "labelKeys", labelKey: "", isValidHypothesis: !1, scenarioDescr: "just an empty string" });
// testParamObjectArray.push({ action: "preDo Validate", kind: "labelKeys",labelKey: "     ", isValidHypothesis: !1, scenarioDescr: "just 5 spaces as empty string"});
// ø <---------- </Label> ---------->
// ø <---------- <Address>  ---------->
// testParamObjectArray.push({action:"preDo Validate",kind:"addresses",addrssStreetAddress:"315 N 3rd Ave E #101",city:"Duluth",postalCode:"55805",isValidHypothesis:!0,scenarioDescr:"My Addres (just validated data)"});
// testParamObjectArray.push({action:"preDo Validate",kind:"addresses",addrssStreetAddress:"     315 N 3rd Ave E #101",city:"Duluth     ",postalCode:"    55805     ",isValidHypothesis:!0,scenarioDescr:"5 spaces before address, after city and either side of zip"});
// testParamObjectArray.push({action:"preDo Validate",kind:"addresses",addrssStreetAddress:"",city:"Duluth",postalCode:"55805",isValidHypothesis:!1,scenarioDescr:"streetAddress is empty"});
// testParamObjectArray.push({action:"preDo Validate",kind:"addresses",addrssStreetAddress:"315 N 3rd Ave E #101",city:"     ",postalCode:"55805",isValidHypothesis:!1,scenarioDescr:"city is 5 spaces (as empty)"});
// testParamObjectArray.push({action:"preDo Validate",kind:"addresses",addrssStreetAddress:"315 N 3rd Ave E #101",city:"     ",postalCode:"5580Z",isValidHypothesis:!1,scenarioDescr:"city empty, zip nondigits "});
// testParamObjectArray.push({action:"preDo Validate",kind:"addresses",addrssStreetAddress:"315 N 3rd Ave E #101",city:"Duluth",postalCode:"558055",isValidHypothesis:!1,scenarioDescr:"Zip too many Digits"});
// testParamObjectArray.push({action:"preDo Validate",kind:"addresses",addrssStreetAddress:"315 N 3rd Ave E #101",city:"Duluth",postalCode:"5580 5",isValidHypothesis:!1,scenarioDescr:"Zip too many characters with internal space"});
// testParamObjectArray.push({action:"preDo Validate",kind:"addresses",addrssStreetAddress:"315 N 3rd Ave E #101",city:"Duluth",postalCode:"Z55805",isValidHypothesis:!1,scenarioDescr:"Zip too many characters with non-digit before"});
// testParamObjectArray.push({action:"preDo Validate",kind:"addresses",addrssStreetAddress:"315 N 3rd Ave E #101",city:"Duluth",postalCode:"5580O",isValidHypothesis:!1,scenarioDescr:"Zip 5 characters with 1 non-digit after (capital o for fun)"});
// ø <---------- </Address> ---------->
// testParamObject.UnExpectedResultArray = [];
// testParamObject.ExpectedHypothesisFalseResultArray = [];
// testParamObject.ExpectedHypothesisTrueResultArray = [];
// testParamObject.UnExpectedResultArray = [];
// testParamObject.testingData = testParamObjectArray[0];
// console.warn(testParamObjectArray);
// console.warn(testParamObject);
// ø <-------------------- </LoadPreBuilt Scenarios> -------------------->
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
    testParamObject.errorMessages = [];
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
