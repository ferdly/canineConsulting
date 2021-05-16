let testFormDataObjectThis = {};
testFormDataObjectThis.wixBoolean = false;
// testFormDataObjectThis.wixBoolean = true;
testFormDataObjectThis.StateKind = 'addresses';
testFormDataObjectThis.StateCount = 1;
testFormDataObjectThis.StateIndexSelected = 0;
testFormDataObjectThis.StateCurrentObectArray = [];

let paramObjectThis = {};
paramObjectThis.state = {};
paramObjectThis.state.action = 'go';
coreImplementation(paramObjectThis,testFormDataObjectThis);
console.warn('paramObjectThis: ');
console.warn(paramObjectThis);


// ø <---------- <Core Implementation>  ---------->
export function coreImplementation(paramObject = {}, testFormDataObject = {}) {
    let wixBoolean = typeof testFormDataObject.wixBoolean === 'boolean' ? testFormDataObject.wixBoolean : true;
    console.warn('wixBoolean: ' + wixBoolean);
    console.log(typeof paramObject.state.action === 'string');
    if(typeof paramObject.state !== 'object'){
        paramObject.state = {};
    }
    paramObject.state.wix = wixBoolean === true ? true : false;
    paramObject.state.action = typeof paramObject.state.action === 'string' ? paramObject.state.action : "UUNKNOWN";
    paramObject.state.kind = paramObject.state.wix === true ? $w('#recievedKind').value : testFormDataObject.StateKind;
    paramObject.state.kindSingular = paramObject.state.kind === "addresses" ? "address" : paramObject.state.kind.substr(0, (paramObject.state.kind.length - 1));
    paramObject.state.kindSingularTitle = paramObject.state.kindSingular.substr(0,1).toUpperCase() + paramObject.state.kindSingular.substr(1);
    paramObject.state.boxState = paramObject.state.kindSingular === 'email' || paramObject.state.kindSingular === 'phone' ? 'EmailPhone' : paramObject.state.kindSingular;
    paramObject.state.boxState = paramObject.state.kindSingular === 'labelKey' ? 'Label' : paramObject.state.boxState;
    paramObject.state.boxState = 'kind' + paramObject.state.boxState;
    paramObject.state.count = paramObject.state.wix === true ? Number($w('#recievedCount').value) : testFormDataObject.StateCount;
    paramObject.state.selectedIndex = paramObject.state.wix === true ? Number($w('#selectIndexEmailPhone').value) : testFormDataObject.StateIndexSelected;
    paramObject.state.maxIndex = paramObject.state.count;
    paramObject.state.nextIndex = paramObject.state.count + 1;
    paramObject.state.btnNewUpdateLabel = paramObject.state.selectedIndex < paramObject.state.nextIndex ? 'Update ' : 'New ';
    paramObject.state.btnNewUpdateLabel += paramObject.state.kindSingularTitle;
    paramObject.state.currentObectArray = paramObject.state.wix === true ? JSON.parse($w('#selectListData').value) : testFormDataObject.StateCurrentObectArray;
    paramObject.testFormDataObject = paramObject.state.wix === true ? {} : testFormDataObject;
    paramObject.formData = {};
    paramObject.logs = [];
    paramObject.warnings = [];
    paramObject.errors = [];
    paramObject.errorMessages = [];
    paramObject.overallResultMessages = [];
}//END coreImplementation()
// ø <---------- </Core Implementation> ---------->