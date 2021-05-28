// ø <----------- <getAllContacts Front-End>  ----------->
export async function getAllContacts(paramObject = {}) {
	let contactlItems = await steamdaQueryLabelsFunction();
	// let labelItems = ['Label_01','Label_02','Label_03','Label_04'];
	// let paramObjectThis = {};
	// let labelItems = labelKeysFilterBy(paramObjectThis);
	// console.log('labelItems: ' + labelItems);
	$w('#importLabelsReturn').value = JSON.stringify(contactlItems,undefined,4);
}
// ø <----------- </getAllContacts Front-End> ----------->