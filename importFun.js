// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world
// import wixCrmBackend from 'wix-crm-backend';
// import { contacts } from 'wix-crm-backend';
import { steamdaQueryLabelsFunction } from 'backend/contactReference';
import { steamdaFindOrCreateLabelFunction } from 'backend/contactReference';
import { steamdaDeleteLabelFunction } from 'backend/contactReference';
import { steamdaRenameLabelFunction } from 'backend/contactReference';
import { steamdaQueryExtendedFieldsFunction } from 'backend/contactReference';
import { steamdaFindOrCreateExtendedFieldFunction } from 'backend/contactReference';
$w.onReady(function () {
	// Write your JavaScript here

	// To select an element by ID use: $w("#elementID")

	// Click "Preview" to run your code
});
// ø <======================================================================>
// ø <=================<         Contact Labels           >=================>
// ø <======================================================================>
// ø <----------- <getCurrentContactLables Front-End>  ----------->
export async function getCurrentContactLables_click(event) {
	let labelItems = await steamdaQueryLabelsFunction();
	// let labelItems = ['Label_01','Label_02','Label_03','Label_04'];
	// let paramObjectThis = {};
	// let labelItems = labelKeysFilterBy(paramObjectThis);
	// console.log('labelItems: ' + labelItems);
	$w('#importLabelsReturn').value = JSON.stringify(labelItems,undefined,4);
}
// ø <----------- </getCurrentContactLables Front-End> ----------->

// ø <----------- <doCreateNewLabel Front-End>  ----------->
export async function doCreateNewLabel() {
	let paramObjectThis = {};
	paramObjectThis.displayName = $w("#inputNewLabel").value;
	let newLabelItem = await steamdaFindOrCreateLabelFunction(paramObjectThis);
	// let labelItems = ['Label_01','Label_02','Label_03','Label_04'];
	// let paramObjectThis = {};
	// let labelItems = labelKeysFilterBy(paramObjectThis);
	console.log('newLabelItem: ' + newLabelItem);
	$w('#importLabelsReturn').value = JSON.stringify(newLabelItem,undefined,4);
}
// ø <----------- </doCreateNewLabel Front-End> ----------->

// ø <----------- <doDeleteLabel Front-End>  ----------->
export async function doDeleteLabel() {
	let paramObjectThis = {};
	paramObjectThis.labelKey = $w("#inputDeleteLabel").value;
	console.log("[~LINE 45] paramObjectThis: ");
	console.log(paramObjectThis);
	let newLabelItem = await steamdaDeleteLabelFunction(paramObjectThis);//steamdaDeleteLabelFunction
	// let labelItems = ['Label_01','Label_02','Label_03','Label_04'];
	// let paramObjectThis = {};
	// let labelItems = labelKeysFilterBy(paramObjectThis);
	console.log('newLabelItem: ' + newLabelItem);
	// $w('#importLabelsReturn').value = JSON.stringify(newLabelItem,undefined,4);
	$w('#importLabelsReturn').value = "END of doDeleteLabel() was reached";
}
// ø <----------- </doDeleteLabel Front-End> ----------->

// ø <----------- <doRenameLabel Front-End>  ----------->
export async function doRenameLabel() {
	let paramObjectThis = {};
	paramObjectThis.labelKey = $w("#inputRenameKey").value;
	paramObjectThis.displayName = $w("#inputRenameNewName").value;
	console.log("[~LINE 45] paramObjectThis: ");
	console.log(paramObjectThis);
	let newLabelItem = await steamdaRenameLabelFunction(paramObjectThis);//steamdaDeleteLabelFunction
	// let labelItems = ['Label_01','Label_02','Label_03','Label_04'];
	// let paramObjectThis = {};
	// let labelItems = labelKeysFilterBy(paramObjectThis);
	console.log('newLabelItem: ' + newLabelItem);
	// $w('#importLabelsReturn').value = JSON.stringify(newLabelItem,undefined,4);
	$w('#importLabelsReturn').value = JSON.stringify(newLabelItem,undefined,4);
}
// ø <----------- </doRenameLabel Front-End> ----------->

// ø <----------- <constructParamObject()>  ----------->
export function constructParamObject(){
    let paramObject = {};
	let inputFilterValue = $w('#inputFilterValue').value;
	let inputFilterMethod = $w('#ddFilterMethod').value;
    // paramObject.labelType = "USER_DEFINED";
	if(inputFilterMethod !== "NNULL"){
		paramObject[inputFilterMethod] = inputFilterValue;
	}
    // paramObject.labelType = "SYSTEM";
    // paramObject.displayNameEquals = "Barking Intensive (long weekend)";
    // paramObject.displayNameEquals = "Clever Dog";
    // paramObject.displayNameStartsWith = "Contact";
    // console.warn('paramObject: ');
    // console.warn(paramObject);
    return paramObject;
}//END constructParamObject()
// ø <----------- </constructParamObject()> ----------->
// ø <---------- <getAllLables>  ---------->
export function getAllLabels() {
    let labelKeyArray = $w('#importLabelsReturn').value;
	let labelKeyArrayIsArray = true;
	labelKeyArrayIsArray = labelKeyArray.substr(0,1) !== '[' ? false : labelKeyArrayIsArray;
	labelKeyArrayIsArray = labelKeyArray.substr(-1) !== ']' ? false : labelKeyArrayIsArray;
	if(!labelKeyArrayIsArray){
		$w('#renderJSON').text = "Invalid Label Array, please click 'Current Contact Labels' before clicking 'Execute Filter'";
		return;
	}
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
// ø <----------- </labelKeysFilterBy()> ----------->

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnIntegerWord_click(event) {
	doRenderIntegerWord();
}
export function doRenderIntegerWord(){
	$w('#renderJSON').text = 'Render the Words JSON for the integer ' + $w('#integerParam').value + ' here.';
}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnExecuteFilter_click(event) {
	let paramObjectThis = constructParamObject();
	if(typeof paramObjectThis !== 'object'){
		$w('#renderJSON').text = 'Invalid \'paramObjectThis = constructParamObject();';
		return;
	}
	let reportString = labelKeysFilterBy(paramObjectThis);
	$w('#renderJSON').text = reportString;
}

export function btnExecuteNewFilter_click(event) {
	//  \_ unfortunate ElementId, not worth changing _/
	doCreateNewLabel();
}

export function btnDeleteLabel_click(event) {
	doDeleteLabel(); 
}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnRenameLabel_click(event) {
	doRenameLabel(); 
}
// ø <======================================================================>
// ø <=================</         Contact Labels          >=================>
// ø <======================================================================>


// ø <======================================================================>
// ø <=================<          Extended Fields         >=================>
// ø <======================================================================>

// ø <----------- <getCurrentExtFlds Front-End>  ----------->
export async function getCurrentExtFlds_click(event) {
	let extFildItems = await steamdaQueryExtendedFieldsFunction();
	$w('#iportExtFldsReturn').value = JSON.stringify(extFildItems,undefined,4);
}
// ø <----------- </getCurrentExtFlds Front-End> ----------->

// ø <---------- <getAllExtFlds>  ---------->
export function getAllExtFlds() {
    let extFldKeyArray = $w('#iportExtFldsReturn').value;
	let extFldKeyArrayIsArray = true;
	extFldKeyArrayIsArray = extFldKeyArray.substr(0,1) !== '[' ? false : extFldKeyArrayIsArray;
	extFldKeyArrayIsArray = extFldKeyArray.substr(-1) !== ']' ? false : extFldKeyArrayIsArray;
	if(!extFldKeyArrayIsArray){
		$w('#renderJSONExtFlds').text = "Invalid Extended-Field Array, please click 'Current Extended Fields' before clicking 'Execute Filter'";
		return;
	}
	return extFldKeyArray;
}
// ø <---------- </getAllExtFlds> ---------->


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
    let filterByKeyEquals = paramKeyArray.includes('keyEquals');
    let keyFilterValueEquals = !filterByKeyEquals ? 'SSKIP' : paramObject.keyEquals; 
    let filterByKeyStartsWith = paramKeyArray.includes('keyStartsWith');
    let keyFilterValueStartsWith = !filterByKeyStartsWith ? 'SSKIP' : paramObject.keyStartsWith; 
    let keyFilterValueStartsWithLength = keyFilterValueStartsWith.length; 
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
        if(filterByKeyEquals){
            doAppend = element.key === keyFilterValueEquals ? true : false;
            filterHeader = "\ndisplayName [equals] '" + keyFilterValueEquals + "'";
        }
        if(filterByKeyStartsWith){
            doAppend = element.key.substr(0,keyFilterValueStartsWithLength) === keyFilterValueStartsWith ? true : false;
            filterHeader = "\ndisplayName [starts with] '" + keyFilterValueStartsWith + "'";
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

export function btnExecuteFilterExtFlds_click(event) {
	let paramObjectThis = constructParamObjectExtFlds();
	if(typeof paramObjectThis !== 'object'){
		$w('#renderJSON').text = 'Invalid \'paramObjectThis = constructParamObject();';
		return;
	}
	let reportString = extFldsFilterBy(paramObjectThis);
	$w('#renderJSONExtFlds').text = reportString;
	$w('#anchorBelowReport').scrollTo();
}

// ø <----------- <constructParamObjectExtFlds()>  ----------->
export function constructParamObjectExtFlds(){
    let paramObject = {};
	let inputFilterValue = $w('#inputFilterValueExtFlds').value;
	let inputFilterMethod = $w('#ddFilterMethodExtFlds').value;
    // paramObject.labelType = "USER_DEFINED";
	if(inputFilterMethod !== "NNULL"){
		paramObject[inputFilterMethod] = inputFilterValue;
	}
    console.warn('paramObject: ');
    console.warn(paramObject);
    return paramObject;
}//END constructParamObject()
// ø <----------- </constructParamObjectExtFlds()> ----------->

export function btnExecuteNewExtFld_click(event) {
	doCreateNewExtFld(); 
}

// ø <----------- <doCreateNewExtFld Front-End>  ----------->
export async function doCreateNewExtFld() {
	let paramObjectThis = {};
	paramObjectThis.displayName = $w("#inputNewExtFld").value;
	paramObjectThis.dataType = $w("#ddNewExtFldType").value;
	console.log('paramObjectThis: ');
	console.log(paramObjectThis);
	let newExtFldItem = await steamdaFindOrCreateExtendedFieldFunction(paramObjectThis);
	console.log('newExtFldItem: ');
	console.log(newExtFldItem);
	$w('#iportExtFldsReturn').value = JSON.stringify(newExtFldItem,undefined,4);
}
// ø <----------- </doCreateNewExtFld Front-End> ----------->

// ø <======================================================================>
// ø <=================</         Extended Fields         >=================>
// ø <======================================================================>