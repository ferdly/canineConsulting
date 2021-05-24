// ø <----------- <doDeleteExtFld Front-End>  ----------->
export async function doDeleteExtFld() {
	let paramObjectThis = {};
	paramObjectThis.extFldKey = $w("#inputDeleteExtFld").value;
	console.log("[~LINE ZZ] paramObjectThis: ");
	console.log(paramObjectThis);
	let responeDeleteExtFldItem = await steamdaDeleteExtendedFieldFunction(paramObjectThis);
	console.log('responeDeleteExtFldItem: ');
	console.log(responeDeleteExtFldItem);
	// $w('#iportExtFldsReturn').value = JSON.stringify(responeDeleteExtFldItem,undefined,4);
	$w('#iportExtFldsReturn').value = "END of doDeleteExtFld(" + paramObjectThis.extFldKey + ") was reached";
}
// ø <----------- </doDeleteExtFld Front-End> ----------->
