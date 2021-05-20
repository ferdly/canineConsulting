
// ! <----------- <call Filter> ----------->
let paramObjectThis = constructParamObject();
let listOfLabelKeys = labelKeysFilterBy(paramObjectThis);
console.warn('listOfLabelKeys: ');
console.warn(listOfLabelKeys);
// ! <----------- <call Filter> ----------->
// ! <---------- <getAllLables>  ---------->

// ø <----------- <constructParamObject()>  ----------->
export function constructParamObject(){
    let paramObject = {};
    paramObject.labelType = "USER_DEFINED";
    // paramObject.labelType = "SYSTEM";
    // paramObject.displayNameEquals = "Barking Intensive (long weekend)";
    // paramObject.displayNameEquals = "Clever Dog";
    // paramObject.displayNameStartsWith = "Contact";
    console.warn('paramObject: ');
    console.warn(paramObject);
    return paramObject;
}//END constructParamObject()
// ø <----------- </constructParamObject()> ----------->
// ø <---------- <getAllLables>  ---------->
export function getAllLabels() {
    
    let labelKeyArray = [
        {
            "_createdDate": "2021-05-12T11:55:53.000Z",
            "displayName": "Enter Contest",
            "key": "custom.enter-contest",
            "labelType": "USER_DEFINED",
            "namespace": "custom",
            "_updatedDate": "2021-05-12T11:55:53.000Z"
        },
        {
            "_createdDate": "2021-05-12T11:47:05.000Z",
            "displayName": "Get a Quote",
            "key": "custom.get-a-quote",
            "labelType": "USER_DEFINED",
            "namespace": "custom",
            "_updatedDate": "2021-05-12T11:47:05.000Z"
        },
        {
            "_createdDate": "2021-04-16T14:51:05.000Z",
            "displayName": "Subscribers",
            "key": "custom.subscribers",
            "labelType": "USER_DEFINED",
            "namespace": "custom",
            "_updatedDate": "2021-04-16T14:51:05.000Z"
        },
        {
            "_createdDate": "2021-03-17T15:14:05.000Z",
            "displayName": "Barking Intensive (long weekend)",
            "key": "custom.barking-intensive-long-weekend",
            "labelType": "USER_DEFINED",
            "namespace": "custom",
            "_updatedDate": "2021-03-17T15:14:05.000Z"
        },
        {
            "_createdDate": "2021-03-16T19:07:09.000Z",
            "displayName": "Puppy Training COURSE",
            "key": "custom.puppy-training-course",
            "labelType": "USER_DEFINED",
            "namespace": "custom",
            "_updatedDate": "2021-03-22T19:50:49.000Z"
        },
        {
            "_createdDate": "2021-02-09T00:56:34.000Z",
            "displayName": "Contact",
            "key": "custom.contact",
            "labelType": "USER_DEFINED",
            "namespace": "custom",
            "_updatedDate": "2021-02-09T00:56:34.000Z"
        },
        {
            "_createdDate": "2021-01-13T14:02:14.000Z",
            "displayName": "Demo Label",
            "key": "custom.demo-label",
            "labelType": "USER_DEFINED",
            "namespace": "custom",
            "_updatedDate": "2021-01-13T14:02:14.000Z"
        },
        {
            "displayName": "Customers",
            "key": "contacts.customers",
            "labelType": "SYSTEM",
            "namespace": "contacts"
        },
        {
            "displayName": "Contacted Me",
            "key": "contacts.contacted-me",
            "labelType": "SYSTEM",
            "namespace": "contacts"
        }
    ];
    return labelKeyArray;
}
// ø <---------- </getAllLables> ---------->

// ø <----------- <labelKeysFilterBy()>  ----------->
export function labelKeysFilterBy(paramObject = {}) {
 
    let paramKeyArray = Object.keys(paramObject);
    let filterByLabelType = paramKeyArray.includes('labelType');
    let labelTypeFilterValue = !filterByLabelType ? 'SSKIP' : paramObject.labelType; 
    let filterByDisplayNameEquals = paramKeyArray.includes('displayNameEquals');
    let displayNameFilterValueEquals = !filterByDisplayNameEquals ? 'SSKIP' : paramObject.displayNameEquals; 
    let filterByDisplayNameStartsWith = paramKeyArray.includes('displayNameStartsWith');
    let displayNameFilterValueStartsWith = !filterByDisplayNameStartsWith ? 'SSKIP' : paramObject.displayNameStartsWith; 
    let displayNameFilterValueStartsWithLength = displayNameFilterValueStartsWith.length; 
    let returnString = '';
    let returnStringThis = '';
    let doAppend = false;
    let keyCount = 0;
    let appendCount = 0;
    let filterHeader = '';
    let labelKeys = getAllLabels();
    labelKeys.forEach(element => {
        keyCount++;
        // console.warn(element.displayName + ' [' + element.key + ']');
        returnStringThis = element.displayName + ' [' + element.key + ']\n';
        doAppend = true;
        if(filterByLabelType){
            doAppend = element.labelType === labelTypeFilterValue ? true : false;
            filterHeader = '\nlabelType = ' + labelTypeFilterValue;
        }
        if(filterByDisplayNameEquals){
            doAppend = element.displayName === displayNameFilterValueEquals ? true : false;
            filterHeader = "\ndisplayName [equals] '" + displayNameFilterValueEquals + "'";
        }
        if(filterByDisplayNameStartsWith){
            doAppend = element.displayName.substr(0,displayNameFilterValueStartsWithLength) === displayNameFilterValueStartsWith ? true : false;
            filterHeader = "\ndisplayName [starts with] '" + displayNameFilterValueStartsWith + "'";
        }
        // ! <doAppend>
        if(doAppend){
            appendCount++;
            returnString += returnStringThis;
        }
        // ! </doAppend>
        
    });
    returnString = 'Filtered List of labelKeys: [' + appendCount + ' of ' + keyCount + ']' + filterHeader + '\n==========\n' + returnString;
    return returnString;
}//END labelKeysFilterBy()
// ø <----------- </labelKeysFilterBy()> ----------->