// ø <----------- <extFldsFilterBy()>  ----------->
export function extFldsFilterBy(paramObject = {}) {
 
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
    let labelKeysString = getAllLabels();
	// if(typeof JSON.parse(labelKeysString) !== 'object'){
	// 	$w('#renderJSON').text = "Invalid Label Array, please click 'Current Contact Labels' before clicking 'Execute Filter'";
	// 	return;
	// }
    let labelKeys = JSON.parse(labelKeysString);
	console.log('[~LINE 125] labelKeys: ');
	console.log(labelKeys);
	console.log('[~LINE 127] labelKeys: isArray ');
	console.log(Array.isArray(labelKeys));
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
// ø <----------- </extFldsFilterBy()> ----------->