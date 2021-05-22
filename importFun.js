// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world
// import wixCrmBackend from 'wix-crm-backend';
// import { contacts } from 'wix-crm-backend';
import { steamdaQueryLabelsFunction } from 'backend/contactReference';
import { steamdaFindOrCreateLabelFunction } from 'backend/contactReference';
import { steamdaDeleteLabelFunction } from 'backend/contactReference';
import { steamdaRenameLabelFunction } from 'backend/contactReference';
import { steamdaQueryExtendedFieldsFunction } from 'backend/contactReference';
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
    console.warn('paramObject: ');
    console.warn(paramObject);
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
// ø <---------- <getAllExtendedFields>  ---------->
// ø <----------- <getCurrentContactLables Front-End>  ----------->



export async function getCurrentExtFlds_click(event) {
	let extFildItems = await steamdaQueryExtendedFieldsFunction();
	$w('#iportExtFldsReturn').value = JSON.stringify(extFildItems,undefined,4);
}
export async function ZZZgetCurrentContactLables_click(event) {
	// let labelItems = ['Label_01','Label_02','Label_03','Label_04'];
	// let paramObjectThis = {};
	// let labelItems = labelKeysFilterBy(paramObjectThis);
	// console.log('labelItems: ' + labelItems);
}
// ø <----------- </getCurrentContactLables Front-End> ----------->



export function getAllExtendedFields() {
    let labelKeyArray = $w('#iportExtFldsReturn').value;
	let labelKeyArrayIsArray = true;
	labelKeyArrayIsArray = labelKeyArray.substr(0,1) !== '[' ? false : labelKeyArrayIsArray;
	labelKeyArrayIsArray = labelKeyArray.substr(-1) !== ']' ? false : labelKeyArrayIsArray;
	if(!labelKeyArrayIsArray){
		$w('#renderJSON').text = "Invalid Label Array, please click 'Current Contact Labels' before clicking 'Execute Filter'";
		return;
	}
	return labelKeyArray;
}
// ø <---------- </getAllExtendedFields> ---------->




// ø <======================================================================>
// ø <=================</         Extended Fields         >=================>
// ø <======================================================================>

