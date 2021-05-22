// ø <----------- <extFldsFilterBy()>  ----------->
export function extFldsFilterBy(paramObject = {}) {
 
    let paramKeyArray = Object.keys(paramObject);
    let filterByNameSpace = paramKeyArray.includes('namespace');
    let nameSpaceFilterValue = !filterByNameSpace ? 'SSKIP' : paramObject.namespace; 
    let ZZfilterByDisplayNameEquals = paramKeyArray.includes('displayNameEquals');
    let ZZdisplayNameFilterValueEquals = !ZZfilterByDisplayNameEquals ? 'SSKIP' : paramObject.ZZdisplayNameEquals; 
    let ZZfilterByDisplayNameStartsWith = paramKeyArray.includes('displayNameStartsWith');
    let ZZdisplayNameFilterValueStartsWith = !ZZfilterByDisplayNameStartsWith ? 'SSKIP' : paramObject.ZZdisplayNameStartsWith; 
    let ZZdisplayNameFilterValueStartsWithLength = ZZdisplayNameFilterValueStartsWith.length; 
    let ZXZfilterByDisplayNameEquals = paramKeyArray.includes('displayNameEquals');
    let ZXZdisplayNameFilterValueEquals = !ZXZfilterByDisplayNameEquals ? 'SSKIP' : paramObject.ZXZdisplayNameEquals; 
    let ZXZfilterByDisplayNameStartsWith = paramKeyArray.includes('displayNameStartsWith');
    let ZXZdisplayNameFilterValueStartsWith = !ZXZfilterByDisplayNameStartsWith ? 'SSKIP' : paramObject.ZXZdisplayNameStartsWith; 
    let ZXZdisplayNameFilterValueStartsWithLength = ZXZdisplayNameFilterValueStartsWith.length; 
    let returnString = '';
    let returnStringThis = '';
    let doAppend = false;
    let keyCount = 0;
    let appendCount = 0;
    let filterHeader = '';
    let extFldsKeysString = getAllExtFlds();
    let extFldsKeys = JSON.parse(extFldsKeysString);
	console.log('[~LINE 256] extFldsKeys: ');
	console.log(extFldsKeys);
	console.log('[~LINE 258] extFldsKeys: isArray ');
	console.log(Array.isArray(extFldsKeys));
    extFldsKeys.forEach(element => {
        keyCount++;
        // console.warn(element.ZZdisplayName + ' [' + element.key + ']');
        returnStringThis = element.ZZdisplayName + ' [' + element.key + ']\n';
        doAppend = true;
        if(filterByNameSpace){
            doAppend = element.namespace === nameSpaceFilterValue ? true : false;
            filterHeader = '\nnameSpace = ' + nameSpaceFilterValue;
        }
        if(ZZfilterByDisplayNameEquals){
            doAppend = element.ZZdisplayName === ZZdisplayNameFilterValueEquals ? true : false;
            filterHeader = "\ndisplayName [equals] '" + ZZdisplayNameFilterValueEquals + "'";
        }
        if(ZZfilterByDisplayNameStartsWith){
            doAppend = element.ZZdisplayName.substr(0,ZZdisplayNameFilterValueStartsWithLength) === ZZdisplayNameFilterValueStartsWith ? true : false;
            filterHeader = "\ndisplayName [starts with] '" + ZZdisplayNameFilterValueStartsWith + "'";
        }
        if(ZXZfilterByDisplayNameEquals){
            doAppend = element.ZXZdisplayName === ZXZdisplayNameFilterValueEquals ? true : false;
            filterHeader = "\ndisplayName [equals] '" + ZXZdisplayNameFilterValueEquals + "'";
        }
        if(ZXZfilterByDisplayNameStartsWith){
            doAppend = element.ZXZdisplayName.substr(0,ZXZdisplayNameFilterValueStartsWithLength) === ZXZdisplayNameFilterValueStartsWith ? true : false;
            filterHeader = "\ndisplayName [starts with] '" + ZXZdisplayNameFilterValueStartsWith + "'";
        }
        // ! <doAppend>
        if(doAppend){
            appendCount++;
            returnString += returnStringThis;
        }
        // ! </doAppend>
        
    });
    returnString = 'Filtered List of extFldsKeys: [' + appendCount + ' of ' + keyCount + ']' + filterHeader + '\n==========\n' + returnString;
    return returnString;
}//END extFldsKeysFilterBy()
// ø <----------- </extFldsFilterBy()> ----------->