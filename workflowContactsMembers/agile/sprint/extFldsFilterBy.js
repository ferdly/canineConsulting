// ø <----------- <extFldsFilterBy()>  ----------->
export function extFldsFilterBy(paramObject = {}) {
 
    let paramKeyArray = Object.keys(paramObject);
    let filterByNameSpace = paramKeyArray.includes('namespace');
    let nameSpaceFilterValue = !filterByNameSpace ? 'SSKIP' : paramObject.namespace; 
    let filterByDisplayNameEquals = paramKeyArray.includes('displayNameEquals');
    let displayNameFilterValueEquals = !filterByDisplayNameEquals ? 'SSKIP' : paramObject.displayNameEquals; 
    let filterByDisplayNameStartsWith = paramKeyArray.includes('displayNameStartsWith');
    let displayNameFilterValueStartsWith = !filterByDisplayNameStartsWith ? 'SSKIP' : paramObject.displayNameStartsWith; 
    let displayNameFilterValueStartsWithLength = displayNameFilterValueStartsWith.length; 
    let ZXZfilterByKeyNameEquals = paramKeyArray.includes('keyEquals');
    let ZXZkeyFilterValueEquals = !ZXZfilterByKeyNameEquals ? 'SSKIP' : paramObject.ZXZkeyEquals; 
    let ZXZfilterByKeyStartsWith = paramKeyArray.includes('keyStartsWith');
    let ZXZkeyFilterValueStartsWith = !ZXZfilterByKeyStartsWith ? 'SSKIP' : paramObject.ZXZkeyStartsWith; 
    let ZXZkeyFilterValueStartsWithLength = ZXZkeyFilterValueStartsWith.length; 
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
        // console.warn(element.displayName + ' [' + element.key + ']');
        returnStringThis = element.displayName + ' [' + element.key + ']\n';
        doAppend = true;
        if(filterByNameSpace){
            doAppend = element.namespace === nameSpaceFilterValue ? true : false;
            filterHeader = '\nnameSpace = ' + nameSpaceFilterValue;
        }
        if(filterByDisplayNameEquals){
            doAppend = element.displayName === displayNameFilterValueEquals ? true : false;
            filterHeader = "\ndisplayName [equals] '" + displayNameFilterValueEquals + "'";
        }
        if(filterByDisplayNameStartsWith){
            doAppend = element.displayName.substr(0,displayNameFilterValueStartsWithLength) === displayNameFilterValueStartsWith ? true : false;
            filterHeader = "\ndisplayName [starts with] '" + displayNameFilterValueStartsWith + "'";
        }
        if(ZXZfilterByKeyNameEquals){
            doAppend = element.ZXZkey === ZXZkeyFilterValueEquals ? true : false;
            filterHeader = "\ndisplayName [equals] '" + ZXZkeyFilterValueEquals + "'";
        }
        if(ZXZfilterByKeyStartsWith){
            doAppend = element.ZXZkey.substr(0,ZXZkeyFilterValueStartsWithLength) === ZXZkeyFilterValueStartsWith ? true : false;
            filterHeader = "\ndisplayName [starts with] '" + ZXZkeyFilterValueStartsWith + "'";
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