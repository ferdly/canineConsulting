// ø <----------- <doRenameExtFld Front-End>  ----------->
export async function doRenameExtFld() {
	let paramObjectThis = {};
	paramObjectThis.labelKey = $w("#inputRenameExtFld").value;
	paramObjectThis.displayName = $w("#inputRenameNewNameExtFld").value;
	// console.log("[~LINE ZZ] paramObjectThis: ");
	// console.log(paramObjectThis);
	let newLabelItem = await steamdaRenameExtendedFieldFunction(paramObjectThis);//steamdaDeleteLabelFunction
	// console.log('newLabelItem: ' + newLabelItem);
	$w('#iportExtFldsReturn').value = JSON.stringify(newLabelItem,undefined,4);
}
// ø <----------- </doRenameExtFld Front-End> ----------->
