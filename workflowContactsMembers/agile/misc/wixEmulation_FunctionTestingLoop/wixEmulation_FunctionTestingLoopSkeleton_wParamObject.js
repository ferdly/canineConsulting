let live = null;
live = true;
live = false;
if ("environment" === "live") {
    // let $w('#phemValue') = {};
    // let $w('#phemValue') = {};
    // $w('#phemValue').value = "bradlowry@gmail.com";
    // let $w('#recievedKind').value = {};
    // $w('#recievedKind').value = 'emails';
}else{
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
// ø <----- <Scenario>  ----->
// testParamObject.testingData.email = "bradlowry@gmail.com";
// testParamObject.testingData.email = "brad.lowry@gmail.com";
// testParamObject.testingData.email = "tim.walz@governor.us.mn.gov";
// testParamObject.testingData.isValidHypothesis = true;
// testParamObject.testingData.scenarioDescr = "Gov. Walz with multiple DOTs";
// testParamObject.testingData.scenarioDescr = "my email with multiple DOTs for atDOT";
// console.warn(testParamObject.testingData);
// ø <----- </Scenario> ----->
// ø <----- <Scenario>  ----->
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
// ø <----- </Scenario> ----->
// ø <---------- </Email> ---------->
// ø <-------------------- </Test Scenarios> -------------------->
// ! ============================================================
// ø <---------- <Core Implementation>  ---------->
let testParamObject = {};
testParamObject.testingData = {};
testParamObject.logs = [];
testParamObject.warnings = [];
testParamObject.errors = [];
// ø <---------- </Core Implementation> ---------->
// ø <-------------------- <LoadPreBuilt Scenarios>  -------------------->
let testParamObjectArray = [];
// ø <---------- <Email>  ---------->
testParamObjectArray.push({action:"preDo Validate",kind:"emails",email:"bradlowry@gmail.com",isValidHypothesis:!0,scenarioDescr:"my email"});
testParamObjectArray.push({action:"preDo Validate",kind:"emails",email:"brad.lowry@gmail.com",isValidHypothesis:!0,scenarioDescr:"my email with early DOT"});
testParamObjectArray.push({action:"preDo Validate",kind:"emails",email:"tim.walz@governor.us.mn.gov",isValidHypothesis:!0,scenarioDescr:"Gov. Walz with multiple DOTs"});
testParamObjectArray.push({action:"preDo Validate",kind:"emails",email:"richard.feynmansteamda.com",isValidHypothesis:!1,scenarioDescr:"No AT (@)"});
testParamObjectArray.push({action:"preDo Validate",kind:"emails",email:"@steamda.com",isValidHypothesis:!1,scenarioDescr:"AT (@) at beginning"});
testParamObjectArray.push({action:"preDo Validate",kind:"emails",email:"richard.feynman@steamdacom",isValidHypothesis:!1,scenarioDescr:"No DOT (.) after AT"});
testParamObjectArray.push({action:"preDo Validate",kind:"emails",email:"richard@feynman@steamda.com",isValidHypothesis:!1,scenarioDescr:"multiple ATs"});
// ø <---------- </Email> ---------->
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
    if(testParamObject.testingData.isValid === testParamObject.testingData.isValidHypothesis){
        testParamObject.testingData.result = true;
        testParamObject.testingData.resultDescr = 'Hypothesis succeeded: Expected \'isValid\' Result: ' + testParamObject.testingData.isValidHypothesis.toString();
        let errorObject = testParamObject.testingData;
        testParamObject.ExpectedResultArray.push(errorObject);
    }else{
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
        switch (kind) {
            case 'emails':
                messageThis = action + ' | ' + kind
                paramObject.logs.push(messageThis);
                // let email = $w('#phemValue').value;
                let email = paramObject.testingData.email;
                let locationAT = email.indexOf('@');
                let locationDOT = email.indexOf('.',locationAT);
                let errNoAT = locationAT < 0 ? true : false;
                let errATzero = locationAT === 0 ? true : false;
                let errNoDOT = locationDOT < 0 ? true : false;
                isValid = errNoAT ? false : isValid;
                if(errNoAT){isValidNOTlog.push('errNoAT')};
                isValid = errATzero ? false : isValid;
                if(errATzero){isValidNOTlog.push('errATzero')};
                isValid = errNoDOT ? false : isValid;
                if(errNoDOT){isValidNOTlog.push('errNoDOT')};
                break;
        
            case 'phones':
                messageThis = action + ' | ' + kind
                paramObject.logs.push(messageThis);
                break;
        
            case 'addresses':
                messageThis = action + ' | ' + kind
                paramObject.logs.push(messageThis);
                break;
        
            case 'labelKeys':
                messageThis = action + ' | ' + kind
                paramObject.logs.push(messageThis);
                break;
        
            default:
                messageThis = action + ' | ' + kind + ' – is not supported in Switch';
                paramObject.logs.push(messageThis);
                break;
    }
    paramObject.testingData.isValid = isValid;
    paramObject.isValid = isValid;
    paramObject.errors = isValidNOTlog;
}//END lightboxCoreSwitchSkeleton(paramObject = {})
