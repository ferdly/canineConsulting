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
let testParamObjectArray = [];
let testParamObject = {};
testParamObject.testingData = {};
// ! </enable for Scenario Building>
// ø <---------- <Email>  ---------->
// testParamObject.testingData.action = 'preDo Validate';
// testParamObject.testingData.kind = 'emails';
// ø <----- <Scenarios Succeed>  ----->
// testParamObject.testingData.email = "bradlowry@gmail.com";
// testParamObject.testingData.email = "brad.lowry@gmail.com";
// testParamObject.testingData.email = "tim.walz@governor.us.mn.gov";
// testParamObject.testingData.isValidHypothesis = true;
// testParamObject.testingData.scenarioDescr = "Gov. Walz with multiple DOTs";
// console.warn(testParamObject.testingData);
// ø <----- </Scenarios Succeed> ----->
// ø <----- <Scenarios Fail>  ----->
// testParamObject.testingData.email = "ZZZZ_BASE_ZZZZrichard.feynman@steamda.com";
// testParamObject.testingData.email = "richard.feynmansteamda.com";
// testParamObject.testingData.email = "@steamda.com";
// testParamObject.testingData.email = "richard.feynman@steamdacom";
// testParamObject.testingData.email = "richard@feynman@steamda.com";
// testParamObject.testingData.isValidHypothesis = false;
// testParamObject.testingData.scenarioDescr = "multiple ATs";
// console.warn('testParamObjectArray: ');
// console.warn(testParamObject.testingData);
// console.warn(testParamObjectArray);
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
// testParamObject.testingData.kind = 'lableKeys';
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
testParamObject.testingData.action = 'preDo Validate';
testParamObject.testingData.kind = 'addresses';
// ø <----- <Scenarios Succeed>  ----->
// ø <---------- <address Attributes>  ---------->
// testParamObject.testingData.addrssStreetAddress = "315 N 3rd Ave E #101";
// testParamObject.testingData.city = "Duluth";
// testParamObject.testingData.postalCode = "55805";
// ø <---------- </address Attributes> ---------->
// testParamObject.testingData.isValidHypothesis = true;
// testParamObject.testingData.scenarioDescr = "My Addres (just validated data)";
// ø <----- </Scenarios Succeed> ----->
// ø <----- <Scenarios Fail>  ----->
// ø <---------- <address Attributes>  ---------->
testParamObject.testingData.addrssStreetAddress = "";
testParamObject.testingData.city = "Duluth";
testParamObject.testingData.postalCode = "55805";
// ø <---------- </address Attributes> ---------->
testParamObject.testingData.isValidHypothesis = false;
testParamObject.testingData.scenarioDescr = "streetAddress is empty";
// ø <----- </Scenarios Fail> ----->
// testParamObjectArray.push({action:"preDo Validate",kind:"addresses",addrssStreetAddress:"315 N 3rd Ave E #101",city:"Duluth",postalCode:"55805",isValidHypothesis:!0,scenarioDescr:"My Addres (just validated data)"});
// testParamObjectArray.push({action:"preDo Validate",kind:"addresses",addrssStreetAddress:"",city:"Duluth",postalCode:"55805",isValidHypothesis:!1,scenarioDescr:"streetAddress is empty"});
// ø <---------- </Address> ---------->
// ø <-------------------- </Test Scenarios> -------------------->
console.warn('testParamObject.testingData: ');
console.warn(testParamObject.testingData);
console.warn('testParamObjectArray: ');
console.warn(testParamObjectArray);
throw new Error("Force Halt: ...because");
// ! ============================================================
// ø <---------- <Core Implementation>  ---------->
// let testParamObject = {};
// testParamObject.testingData = {};
// testParamObject.logs = [];
// testParamObject.warnings = [];
// testParamObject.errors = [];
// ø <---------- </Core Implementation> ---------->
// ø <-------------------- <LoadPreBuilt Scenarios>  -------------------->
// let testParamObjectArray = [];
// ø <---------- <Email>  ---------->
// testParamObjectArray.push({action:"preDo Validate",kind:"emails",email:"bradlowry@gmail.com",isValidHypothesis:!0,scenarioDescr:"my email"});
// testParamObjectArray.push({action:"preDo Validate",kind:"emails",email:"brad.lowry@gmail.com",isValidHypothesis:!0,scenarioDescr:"my email with early DOT"});
// testParamObjectArray.push({action:"preDo Validate",kind:"emails",email:"tim.walz@governor.us.mn.gov",isValidHypothesis:!0,scenarioDescr:"Gov. Walz with multiple DOTs"});
// testParamObjectArray.push({action:"preDo Validate",kind:"emails",email:"richard.feynmansteamda.com",isValidHypothesis:!1,scenarioDescr:"No AT (@)"});
// testParamObjectArray.push({action:"preDo Validate",kind:"emails",email:"@steamda.com",isValidHypothesis:!1,scenarioDescr:"AT (@) at beginning"});
// testParamObjectArray.push({action:"preDo Validate",kind:"emails",email:"richard.feynman@steamdacom",isValidHypothesis:!1,scenarioDescr:"No DOT (.) after AT"});
// testParamObjectArray.push({action:"preDo Validate",kind:"emails",email:"richard@feynman@steamda.com",isValidHypothesis:!1,scenarioDescr:"multiple ATs"});
// ø <---------- </Email> ---------->
// ø <---------- <Phone>  ---------->
// testParamObjectArray.push({ action: "preDo Validate", kind: "phones", phone: "3152872578", isValidHypothesis: !0, scenarioDescr: "just ten digits" });
// testParamObjectArray.push({action:"preDo Validate",kind:"phones",phone:"315-287-2578",isValidHypothesis:!0,scenarioDescr:"simple common formatting"});
// testParamObjectArray.push({action:"preDo Validate",kind:"phones",phone:"(315) 287-2578",isValidHypothesis:!0,scenarioDescr:"more formal common formatting"});
// testParamObjectArray.push({action:"preDo Validate",kind:"phones",phone:"3# 1! 5% 2@ 8* 7& 2@ 5% 7& 8*",isValidHypothesis:!0,scenarioDescr:"crazy extra characters"});
// testParamObjectArray.push({action:"preDo Validate",kind:"phones",phone:"(315) 287-2578 ext 544",isValidHypothesis:!0,scenarioDescr:"extension example"});
// testParamObjectArray.push({ action: "preDo Validate", kind: "phones", phone: "315-287-257", isValidHypothesis: !1, scenarioDescr: "too few characters (oops! keystroke for last digit fails)" });
// ø <---------- </Phone> ---------->
// ø <---------- <Label>  ---------->
// testParamObjectArray.push({action:"preDo Validate",kind:"lableKeys",labelKey:"HAPPY",isValidHypothesis:!0,scenarioDescr:"just a word"});
// testParamObjectArray.push({action:"preDo Validate",kind:"lableKeys",labelKey:"",isValidHypothesis:!1,scenarioDescr:"just an empty string"});
// ø <---------- </Label> ---------->
// ø <---------- <Address>  ---------->
// ø <---------- </Address> ---------->
// testParamObject.UnExpectedResultArray = [];
testParamObject.ExpectedResultArray = [];
testParamObject.UnExpectedResultArray = [];
// testParamObject.testingData = testParamObjectArray[0];
// console.warn(testParamObjectArray);
// console.warn(testParamObject);
// ø <-------------------- </LoadPreBuilt Scenarios> -------------------->
testParamObjectArray.forEach(testingDataObject => {
    testParamObject.testingData = testingDataObject;

    // ! <-------------------- <do Call>  -------------------->
    prePutValidation(testParamObject);
    // ! COULD BE an object method:
    if (testParamObject.testingData.isValid === testParamObject.testingData.isValidHypothesis) {
        testParamObject.testingData.result = true;
        testParamObject.testingData.resultDescr = 'Hypothesis succeeded: Expected \'isValid\' Result: ' + testParamObject.testingData.isValidHypothesis.toString();
        let errorObject = testParamObject.testingData;
        testParamObject.ExpectedResultArray.push(errorObject);
    } else {
        testParamObject.testingData.result = true;
        testParamObject.testingData.resultDescr = 'Hypothesis failed: UnExpected \'isValid\' Result: '
            + testParamObject.isValid.toString();
        let errorObject = testParamObject.testingData;
        testParamObject.UnExpectedResultArray.push(errorObject);
        // console.warn('errorObject: ');
        // console.warn(errorObject);
        // console.warn('testParamObjectArray.UnExpectedResultArray: ');
        // console.warn(testParamObjectArray.UnExpectedResultArray);
    }
    // ! <-------------------- </do Call> -------------------->
});

console.warn(testParamObject.testingData.resultDescr);
// console.warn(testParamObject.testingData.resultDescr);
testParamObject.testingData = {};
// testParamObject.
console.warn('testParamObject: ');
console.warn(testParamObject);



export function prePutValidation(paramObject = {}) {
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
            let locationAT = email.indexOf('@');
            let locationDOT = email.indexOf('.', locationAT);
            let errNoAT = locationAT < 0 ? true : false;
            let errATzero = locationAT === 0 ? true : false;
            let errNoDOT = locationDOT < 0 ? true : false;
            isValid = errNoAT ? false : isValid;
            if (errNoAT) { isValidNOTlog.push([['#phemValueEM'], ['NO_AT']]) };
            isValid = errATzero ? false : isValid;
            if (errATzero) { isValidNOTlog.push([['#phemValueEM'], ['AT_ZERO']]) };
            isValid = errNoDOT ? false : isValid;
            if (errNoDOT) { isValidNOTlog.push([['#phemValueEM'], ['NO_DOT']]) };
            break;

        case 'phones':
            // let phone = $w('#phemValue').value;
            let phone = paramObject.testingData.phone;
            messageThis = action + ' | ' + kind
            paramObject.logs.push(messageThis);
            phone = phone.replace(/[^0-9]/g, '');
            isValid = phone.length === 10 ? true : false;
            if (!isValid) { isValidNOTlog.push('#phemValuePH') };
            break;

        case 'addresses':
            messageThis = action + ' | ' + kind
            tempString = paramObject.testingData.addrssStreetAddress;
            // tempString = $w('#addrssStreetAddress').value;
            tempString = tempString.trim();
            let addressLength = tempString.length;
            // $w('#addrssStreetAddress').value = tempString;
            // ø \_ streetAddress
            tempString = paramObject.testingData.city;
            // tempString = $w('#addrssCity').value;
            tempString = tempString.trim();
            let cityLength = tempString.length;
            // $w('#addrssCity').value = tempString;
            // ø \_ city
            tempString = paramObject.testingData.postalCode;
            // tempString = $w('#addrssPostalCode').value;
            tempString = tempString.trim();
            let zipLength = tempString.length;
            tempString = tempString.replace(/[^0-9]/g, '');
            let zipLengthDigits = tempString.length
            // $w('#addrssPostalCode').value = tempString;
            // ø \_ zip
            let isValidTemp = true;
            // ø validation
            isValidTemp = addressLength < 1 ? false : true;
            if (!isValidTemp) { isValidNOTlog.push('#addrssStreetAddress') };
            isValid = !isValidTemp ? false : isValid;
            // ø \_ streetAddress
            isValidTemp = cityLength < 1 ? false : true;
            if (!isValidTemp) { isValidNOTlog.push('#addrssCity') };
            isValid = !isValidTemp ? false : isValid;
            // ø \_ city
            isValidTemp = zipLengthDigits !== 5 ? false : true;
            if (!isValidTemp) { isValidNOTlog.push([['#addrssPostalCode'], ['LENGTH']]) };
            isValid = !isValidTemp ? false : isValid;
            // ø \_ zipLengthDigits
            isValidTemp = zipLengthDigits !== zipLenth ? false : true;
            if (!isValidTemp) { isValidNOTlog.push([['#addrssPostalCode'], ['NON_DIGITS']]) };
            isValid = !isValidTemp ? false : isValid;
            // ø \_ zipLengthDigits


            paramObject.logs.push(messageThis);
            break;

        case 'labelKeys':
            messageThis = action + ' | ' + kind
            tempString = paramObject.testingData.labelKey;
            isValidTemp = tempString.length < 1 ? false : true;
            // let tempString = $w('#inputValueLabel').value;
            tempString = tempString.trim();
            if (!isValidTemp) { isValidNOTlog.push('#inputValueLabel') };
            paramObject.logs.push(messageThis);
            break;

        default:
            messageThis = action + ' | ' + kind + ' – is not supported in Switch';
            paramObject.logs.push(messageThis);
            break;
    }
    //<render >
    let renderErrorMessageArray = [];
    let errorMessagesFromKeysArray = [];
    // isValidNOTlog.forEach(element => {
    //     //GET = message by Element
    //     //APPEND to renderErrorMessageArray
    // });;
    //<render >

    paramObject.testingData.isValid = isValid;
    paramObject.isValid = isValid;
    paramObject.errors = isValidNOTlog;
}//END lightboxCoreSwitchSkeleton(paramObject = {})
