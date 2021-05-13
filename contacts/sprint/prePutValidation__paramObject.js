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
let testParamObject = {};
testParamObject.testingData = {};
testParamObject.logs = [];
testParamObject.warnings = [];
testParamObject.errors = [];
// ø <---------- <Email>  ---------->
testParamObject.testingData.action = 'preDo Validate';
testParamObject.testingData.kind = 'emails';
// ø <----- <Scenario>  ----->
// testParamObject.testingData.email = "bradlowry@gmail.com";
// testParamObject.testingData.isValidHypothesis = true;
// testParamObject.testingData.scenarioDescr = "my email";
// ø <----- </Scenario> ----->
// ø <----- <Scenario>  ----->
testParamObject.testingData.email = "bradlowrygmail.com";
// testParamObject.testingData.email = "@gmail.com";
// testParamObject.testingData.email = "bradlowry@gmailcom";
testParamObject.testingData.isValidHypothesis = false;
testParamObject.testingData.scenarioDescr = "my email with three fails";
// ø <----- </Scenario> ----->
// ø <---------- </Email> ---------->
// ø <-------------------- </Test Scenarios> -------------------->

// ! <-------------------- <do Call>  -------------------->
prePutValidation(testParamObject);
// ! COULD BE an object method:
if(testParamObject.isValid === testParamObject.testingData.isValidHypothesis){
    testParamObject.testingData.result = true;
    testParamObject.testingData.resultDescr = 'Hypothesis succeeded: email is Valid';
}else{
    testParamObject.testingData.result = true;
    testParamObject.testingData.resultDescr = 'Hypothesis failed: email is Not Valid';
}
console.warn(testParamObject.testingData.resultDescr);
console.warn('testParamObject: ');
console.warn(testParamObject);
// ! <-------------------- </do Call> -------------------->



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
            let locationDOT = email.indexOf('.',email.indexOf('@'));
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
