// ø <----------- <doRemoveCheckedFromPrep>  ----------->
export function doRemoveCheckedFromPrep(){
	let removeByAction = $w('#radioEmptyOrDelete').value;
	let currentContact = JSON.parse($w('#codePrepContact').value);
	let arrayKeyAndPath2d = [];
	arrayKeyAndPath2d.push(['first','contactInfo.name.first','string']);
	arrayKeyAndPath2d.push(['last','contactInfo.name.last','string']);
	// let thisElementKeyAndPath2d = ['first','contactInfo.name.first','string'];
	let key = 'PPENDING';//default
	let path = 'PPENDING';//default
	let dataType = 'PPENDING';//default
	let removeByActionThis = 'PPENDING';//default
	let checkboxArray = $w('#chkbxRemoveChecked').value;
	checkboxArray.forEach( element => {
		key = 'PPENDING';//reset
		path = 'PPENDING';//reset
		dataType = 'PPENDING';//reset
		arrayKeyAndPath2d.forEach(thisElementKeyAndPath2d => {
			if(element === thisElementKeyAndPath2d[0]){
				key = thisElementKeyAndPath2d[0];
				path = thisElementKeyAndPath2d[1];
				dataType = thisElementKeyAndPath2d[2];
			}
		})
		removeByActionThis = removeByAction;//default
		removeByActionThis = key === 'PPENDING' ? 'IINVALID' : removeByActionThis;
		removeByActionThis = path === 'PPENDING' ? 'IINVALID' : removeByActionThis;
		removeByActionThis = dataType === 'PPENDING' ? 'IINVALID' : removeByActionThis;
		console.log('Overall: ' + removeByAction + ': ' + element);
		if(removeByAction === 'EMPTY'){
		console.log(removeByActionThis + ': ' + element);
		}
		if(removeByAction === 'DELETE'){
		console.log(removeByActionThis + ': ' + element);
		}
		if(removeByAction === 'INVALID'){
		console.log(removeByActionThis + ': ' + element);
		}
		console.log('Key and Path Element: [' + key + ',' + path + ',' + dataType + ']');


	})
	$w('#codePrepContact').value = JSON.stringify(currentContact,undefined,4);

}//END doRemoveCheckedFromPrep
// ø <----------- </doRemoveCheckedFromPrep> ----------->
