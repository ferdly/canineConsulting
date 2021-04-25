import wixUsers from 'wix-users';

$w.onReady(function () {
	// Write your JavaScript here
	$w("#memberInsertResult").onKeyPress( (event) => {
		if(event.metaKey){
			console.log("event.metaKey: " + event.metaKey);
			$w('#btnShowAll').show();
			$w('#btnShowRandom').show();
			$w('#btnToggleAll').show();

		}
	} );
	let arrayShowElements = ["#radioLettersAL","#radioLettersMZ","#radioLettersRandom","#btnDisplayData"];
	visibilityByArray('hide ALL');
	visibilityByArray('show',arrayShowElements);


	// Click "Preview" to run your code
});

export function btnInsertMember_click(event) {
	// $w('#memberInsertResult').value = 'PENDING: export function btnInsertMember_click(event)'
	let result = eval($w('#newMemberJSON').value);
	$w('#memberInsertResult').value = result;
}

export function btnClear_click(event) {
	// let arrayAllHidableElements = ["#radioLettersAL","#radioLettersMZ","#radioLettersRandom","#chkbxMemberElements","#chkbxContactInfoElements","#btnDisplayData","#btnComposeTemplate","#btnInsertMember","#btnClear","#btnAppendEmail","#btnAppendPhone"];
	let arrayShowElements = ["#radioLettersAL","#radioLettersMZ","#radioLettersRandom","#btnDisplayData"];
	visibilityByArray('hide ALL');
	visibilityByArray('show',arrayShowElements);
	$w('#newMemberJSON').value = ''
	$w("#chkbxMemberElements").value = [];
	$w("#chkbxMemberElements").updateValidityIndication();
	$w("#chkbxContactInfoElements").value = [];
	$w("#chkbxContactInfoElements").updateValidityIndication();
	$w("#radioLettersAL").value = '';
	$w("#radioLettersAL").updateValidityIndication();
	$w("#radioLettersMZ").value = '';
	$w("#radioLettersMZ").updateValidityIndication();
	$w("#radioLettersRandom").value = '';
	$w("#radioLettersRandom").updateValidityIndication();
	$w("#baseData").value = '';
	$w("#baseData").updateValidityIndication();
	$w("#newMemberJSON").value = '';
	$w("#newMemberJSON").updateValidityIndication();
	$w("#memberInsertResult").value = '';
	$w("#memberInsertResult").updateValidityIndication();
}

export function composeTemplateCode(step){

	let returnObject = {};
	let errorMessage = '';
	let alphabetJSON = {};
	if(step === 'data'){
		if($w('#radioLettersRandom').value === 'Random'){
			let randomIndex = Math.floor(Math.random() * 26);
			let letterArray=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
			if (randomIndex < 12) {
				$w("#radioLettersAL").value = letterArray[randomIndex];
			} else {
				$w("#radioLettersMZ").value = letterArray[randomIndex];
			}
			$w("#radioLettersRandom").value = '';
			$w("#radioLettersRandom").updateValidityIndication();
		}
		let letterSelection = $w('#radioLettersAL').value + $w('#radioLettersMZ').value;
		letterSelection = letterSelection.trim();
		if(!letterSelection){
			errorMessage = "ERROR: a Letter Selection must be made to proceed; ";
		}
		if(errorMessage.length > 0){
			returnObject.errorMessage = errorMessage;
			// return returnObject;
			return errorMessage;
		}

		alphabetJSON = JSON.parse(`{\"A\":{\"Letter\":\"A\",\"Title\":\"Alpha\",\"Notes\":\"seton\",\"email\":\"qiqgroup+angela@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Angela\",\"lastName\":\"Alpha\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+angela@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},\"B\":{\"Letter\":\"B\",\"Title\":\"Bravo\",\"Notes\":\"seton\",\"email\":\"qiqgroup+brad@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Brad\",\"lastName\":\"Bravo\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+brad@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},\"C\":{\"Letter\":\"C\",\"Title\":\"Charlie\",\"Notes\":\"seton\",\"email\":\"qiqgroup+charlie@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Charlie\",\"lastName\":\"Cooper\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+charlie@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},\"D\":{\"Letter\":\"D\",\"Title\":\"Delta\",\"Notes\":\"seton\",\"email\":\"qiqgroup+della@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Della\",\"lastName\":\"Delta\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+della@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},\"E\":{\"Letter\":\"E\",\"Title\":\"Echo\",\"Notes\":\"seton\",\"email\":\"qiqgroup+edward@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Edward\",\"lastName\":\"Echo\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+edward@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},\"F\":{\"Letter\":\"F\",\"Title\":\"Foxtrot\",\"Notes\":\"seton\",\"email\":\"qiqgroup+fiona@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Fiona\",\"lastName\":\"Foxtrot\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+fiona@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},\"G\":{\"Letter\":\"G\",\"Title\":\"Golf\",\"Notes\":\"seton\",\"email\":\"qiqgroup+george@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"George\",\"lastName\":\"Golf\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+george@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},\"H\":{\"Letter\":\"H\",\"Title\":\"Hotel\",\"Notes\":\"seton\",\"email\":\"qiqgroup+hilda@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Hilda\",\"lastName\":\"Hotel\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+hilda@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},\"I\":{\"Letter\":\"I\",\"Title\":\"India\",\"Notes\":\"seton\",\"email\":\"qiqgroup+isaac@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Isaac\",\"lastName\":\"India\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+isaac@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},\"J\":{\"Letter\":\"J\",\"Title\":\"Juliett\",\"Notes\":\"seton\",\"email\":\"qiqgroup+juliett@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Juliett\",\"lastName\":\"Jones\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+juliett@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},\"K\":{\"Letter\":\"K\",\"Title\":\"Kilo\",\"Notes\":\"seton\",\"email\":\"qiqgroup+kevin@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Kevin\",\"lastName\":\"Kilo\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+kevin@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},\"L\":{\"Letter\":\"L\",\"Title\":\"Lima\",\"Notes\":\"seton\",\"email\":\"qiqgroup+lora@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Lora\",\"lastName\":\"Lima\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+lora@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},
		\"M\":{\"Letter\":\"M\",\"Title\":\"Mike\",\"Notes\":\"seton\",\"email\":\"qiqgroup+mike@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Mike\",\"lastName\":\"Mitchell\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+mike@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},\"N\":{\"Letter\":\"N\",\"Title\":\"November\",\"Notes\":\"seton\",\"email\":\"qiqgroup+nathan@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Nathan\",\"lastName\":\"November\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+nathan@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},\"O\":{\"Letter\":\"O\",\"Title\":\"Oscar\",\"Notes\":\"seton\",\"email\":\"qiqgroup+oscar@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Oscar\",\"lastName\":\"Ortega\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+oscar@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},\"P\":{\"Letter\":\"P\",\"Title\":\"Papa\",\"Notes\":\"seton\",\"email\":\"qiqgroup+peggy@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Peggy\",\"lastName\":\"Papa\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+peggy@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},\"Q\":{\"Letter\":\"Q\",\"Title\":\"Quebec\",\"Notes\":\"seton\",\"email\":\"qiqgroup+quentin@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Quentin\",\"lastName\":\"Quebec\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+quentin@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},\"R\":{\"Letter\":\"R\",\"Title\":\"Romeo\",\"Notes\":\"seton\",\"email\":\"qiqgroup+romeo@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Romeo\",\"lastName\":\"Robinson\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+romeo@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},\"S\":{\"Letter\":\"S\",\"Title\":\"Sierra\",\"Notes\":\"seton\",\"email\":\"qiqgroup+sarah@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Sarah\",\"lastName\":\"Sierra\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+sarah@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},\"T\":{\"Letter\":\"T\",\"Title\":\"Tango\",\"Notes\":\"seton\",\"email\":\"qiqgroup+tom@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Tom\",\"lastName\":\"Tango\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+tom@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},\"U\":{\"Letter\":\"U\",\"Title\":\"Uniform\",\"Notes\":\"seton\",\"email\":\"qiqgroup+ulysses@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Ulysses\",\"lastName\":\"Uniform\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+ulysses@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},\"V\":{\"Letter\":\"V\",\"Title\":\"Victor\",\"Notes\":\"seton\",\"email\":\"qiqgroup+victor@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Victor\",\"lastName\":\"Veracruz\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+victor@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},\"W\":{\"Letter\":\"W\",\"Title\":\"Whiskey\",\"Notes\":\"seton\",\"email\":\"qiqgroup+wendy@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Wendy\",\"lastName\":\"Whiskey\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+wendy@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},\"X\":{\"Letter\":\"X\",\"Title\":\"X-ray\",\"Notes\":\"seton\",\"email\":\"qiqgroup+xavier@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Xavier\",\"lastName\":\"X-ray\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+xavier@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},\"Y\":{\"Letter\":\"Y\",\"Title\":\"Yankee\",\"Notes\":\"seton\",\"email\":\"qiqgroup+yuri@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Yuri\",\"lastName\":\"Yankee\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+yuri@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"},\"Z\":{\"Letter\":\"Z\",\"Title\":\"Zulu\",\"Notes\":\"seton\",\"email\":\"qiqgroup+zane@gmail.com\",\"password\":\"test\",\"options\":\"snoitpo\",\"contactInfo\":\"contactInfo\",\"firstName\":\"Zane\",\"lastName\":\"Zulu\",\"picture\":\"erutcip\",\"emails\":\"sliame\",\"loginEmail\":\"qiqgroup+zane@gmail.com\",\"phones\":\"senohp\",\"labels\":\"slebal\",\"language\":\"en\",\"customFields\":\"sdleifmotsuc\"}}`)[letterSelection];
		return alphabetJSON;
	}
	let checkedElements = $w('#chkbxMemberElements').value;
	let contactInfoElements = $w('#chkbxContactInfoElements').value;
	//<BREAK HERE> for Addresses


	let addressesStringified = '';
	if(contactInfoElements.includes('addresses')){
		alphabetJSON = JSON.parse($w('#baseData').value);
		let addressesArray = alphabetJSON.addresses;
		console.log('addressesArray');
		console.log(addressesArray);
		console.log('Return with Nothing');
		addressesStringified = JSON.stringify(addressesArray,null,0);
		console.log('addressesStringified: ');
		console.log(addressesStringified);
		$w('#newMemberJSON').value = addressesStringified;
		// $w('#memberInsertResult').value = addressesStringified;
		// let keyArray = ['"address"'];
		let keyArray = ['"address"','"address2"','"city"','"state"','"postalCode"'];
		// let keyArray = ['"address"'];
		let replaceElement = '';
		let	replacementRegex = '';
		keyArray.forEach(element => {
			replaceElement = element.replace('"','');
			replaceElement = replaceElement.replace('"','');
			replacementRegex = '/' + element + '/';
			console.log('element: ' + element);
			console.log('replaceElement: ' + replaceElement);
			console.log('replacementRegex: ' + replacementRegex);
			while (addressesStringified.indexOf(element) > 0) {
				addressesStringified = addressesStringified.replace(element,replaceElement);
			}
			// replaceElement = 'sserdda';
			// console.log('replaceElement: ' + replaceElement);
			// addressesStringified = addressesStringified.replace(element,replaceElement);
			// addressesStringified = addressesStringified.replace(replacementRegex,replaceElement);
			console.log('addressesStringified: ');
			console.log(addressesStringified);
		})
		$w('#memberInsertResult').value = addressesStringified;
		// return;
		// return;
	}
	
	
	//</BREAK HERE>
	 checkedElements = checkedElements.concat(contactInfoElements);
	 console.log(checkedElements);
	if(step === 'code'){
		if(!checkedElements.includes('email') && !checkedElements.includes('password')){
			errorMessage = "ERROR: both 'email' and 'password' are required to proceed; ";
		}
		if(errorMessage.length > 0){
			returnObject.errorMessage = errorMessage;
			// return returnObject;
			return errorMessage;
		}
	}
	alphabetJSON = JSON.parse($w('#baseData').value);
	let contactInfoBase = ["firstName","lastName","picture","emails","loginEmail","phones","labels","language","customFields"];
	let contactInfoArray = [];
	// checkedElements.forEach(element => {
	contactInfoElements.forEach(element => {
		contactInfoArray[contactInfoArray.length] = element;
	});
	// console.log(contactInfoArray)
	let nonScalarElementArray = ['emails','phones','labels','addresses'];
	// let arrayOfObjectElementArray = ['emails','phones','labels','addresses'];
	let arrayOfObjectElementArray = ['addresses'];
	let declarationArray = [];
	let declarationString = '';
	let contactInfoAssignmentArray = [];
	let contactInfoAssignmentString = '';
	let elementArray = [];
	let comma = '';
	let declarationTeminusString = '';
	checkedElements.forEach(element => {
		if(nonScalarElementArray.includes(element)){
			if(Array.isArray(alphabetJSON[element])) {
				contactInfoAssignmentString = '        "' + element + '": [' + element + '],';
				declarationString = "let " + element + " = [";
				declarationTeminusString = '];';
				elementArray = alphabetJSON[element];
				comma = '';
				if(arrayOfObjectElementArray.includes(element)){
					console.log('isArrayObject Element: ' + element);

					declarationTeminusString = ';';
					switch (element) {
						case 'addresses':
							declarationString = "let " + element + " = " + addressesStringified;
							break;

						default:
							declarationString = "let UNSUPPORTED ELEMENT" + element;
							break;
					}
					// declarationString += comma + '"' + JSON.stringify(element, null, 0) + '"';
					// elementArray.forEach(elementArrayElement => {
					// 	// declarationString += comma + '"' + JSON.stringify(elementArrayElement, null, 0) + '"';
					// 	declarationString += comma + '' + JSON.stringify(elementArrayElement, null, 0) + '';
					// 	// declarationString += comma + '' + elementArrayElement + '';
					// 	comma = ',';
					// })

				}else {
					console.log('isArray Element: ' + element);

					declarationTeminusString = '];';
					elementArray.forEach(elementArrayElement => {
						declarationString += comma + '"' + elementArrayElement + '"';
						comma = ',';
					})
				}
				// declarationString += alphabetJSON[element].toString();
				declarationString += declarationTeminusString;
			} else {
				console.log('nonScalar Element: ' + element);
			}
		}else{
			console.log('scalar Element: ' + element);

		declarationString = "let " + element + ` = "${alphabetJSON[element]}";`;
		}
		contactInfoAssignmentString = '        "' + element + '": ' + element + ',';
		
		// console.log(declarationString)
		if(declarationString.length > 0) {
			declarationArray.push(declarationString);
		}
		declarationString = '';
		if (contactInfoArray.includes(element))
		{
			contactInfoAssignmentArray.push(contactInfoAssignmentString);
		}
	});
	// console.log(declarationArray)
	// console.log(contactInfoAssignmentArray);
	let finalCode = '';
	let returnChar = "";
	returnChar = "\n";
	declarationArray.forEach(element => {
		finalCode += element + returnChar;
	});
	if(contactInfoAssignmentArray.length > 0){
		finalCode += 'wixUsers.register(email, password, {' + returnChar;
		//<Loop contactInfo>
		finalCode += '    contactInfo: {' + returnChar;
		contactInfoAssignmentArray.forEach(element => {
			finalCode += element + returnChar;
		});
		finalCode += '    }' + returnChar;
		//</Loop contactInfo>
		finalCode += '} )' + returnChar;
	} else {
		finalCode += 'wixUsers.register(email, password)' + returnChar;
	}
	finalCode += '.then( (result) => {' + returnChar;
	finalCode += '  console.log(result.status);' + returnChar;
	finalCode += '  console.log(result.approvalToken);' + returnChar;
	finalCode += '  console.log(result.user);' + returnChar;
	finalCode += '  let resultStatus = result.status;' + returnChar;
	finalCode += '  $w("#memberInsertResult").value = JSON.stringify(result,undefined, 4);' + returnChar;
	finalCode += '} );'



	returnObject.checkedElements = checkedElements;
	returnObject.letterSelection = alphabetJSON;
	// return returnObject;
	let finalCodeEMPTY = '';
	return finalCode;
}

export function btnComposeTemplate_click(event) {
	let step = 'code';
	console.log(step);
	let codeString = composeTemplateCode(step);
	$w('#newMemberJSON').value = codeString;
	step = $w('#newMemberJSON').value.substr(0,7).toUpperCase().replace(/\W/g, '');
	step = step === 'ERROR' ? step : 'next';
	console.log(step);
	if(step === 'next'){
		// let arrayAllHidableElements = ["#radioLettersAL","#radioLettersMZ","#radioLettersRandom","#chkbxMemberElements","#chkbxContactInfoElements","#btnDisplayData","#btnComposeTemplate","#btnInsertMember","#btnClear","#btnAppendEmail","#btnAppendPhone"];
		let arrayShowElements = ["#btnInsertMember","#btnScriptDirect","#btnClear"];
		visibilityByArray('hide ALL');
		visibilityByArray('show',arrayShowElements);
	}
}

export function toggleRadioLetters (unchanged){
	let radioLettersArray = ['#radioLettersAL','#radioLettersMZ','#radioLettersRandom'];
	radioLettersArray.forEach(element => {
		if(element !== unchanged){
			$w(element).value = '';
			$w(element).updateValidityIndication();
		}
	})
}

export function visibilityByArray(kind = 'hide',elementIdArray = []){
	let arrayAllHidableElements = ["#radioLettersAL","#radioLettersMZ","#radioLettersRandom","#chkbxMemberElements","#chkbxContactInfoElements","#btnDisplayData","#btnComposeTemplate","#btnInsertMember","#btnScriptDirect","#btnClear","#btnAppendEmail","#btnAppendPhone","#btnAppendAddress"];
	kind = kind.toLocaleLowerCase().replace(/\W/g, '');
	let thisKind = '';
	let thisElementArray = [];
	// console.log('kind: ');
	// console.log(kind);
	if (kind.substr(-6) === 'random' && elementIdArray.length === 0 ){
		let count = Math.floor(arrayAllHidableElements.length / 2);
		let elementThis = '';
		let develCounter = 0;
		while (elementIdArray.length < count) {
			elementThis = arrayAllHidableElements[Math.floor(Math.random() * arrayAllHidableElements.length)];
			if(!elementIdArray.includes(elementThis)){
				elementIdArray.push(elementThis);
			}
		develCounter++;
    
		}
		console.log('develCounter: ');
		console.log(develCounter);
	}
	switch (kind) {
		case 'showall':
			thisKind = 'show';
			thisElementArray = arrayAllHidableElements;
			break;
		case 'hideall':
			thisKind = 'hide';
			thisElementArray = arrayAllHidableElements;
			break;
		case 'toggleall':
			thisKind = 'toggle';
			thisElementArray = arrayAllHidableElements;
			break;

		default:
			if (kind.substr(0,4) === 'hide' || kind.substr(0,4) === 'show'){
				thisKind = kind.substr(0,4);
				thisElementArray = elementIdArray;
			}
			break;
	}
	// console.log('thisKind & thisElementArray: ');
	// console.log(thisKind);
	// console.log(thisElementArray);
	thisElementArray.forEach(element => {
		if(thisKind === 'show'){
			$w(element).show();
			// console.log('SHOW:' + element);
		} else if(thisKind === 'hide'){
			$w(element).hide();
			// console.log('HIDE:' + element);
		} else if(thisKind === 'toggle'){
			if($w(element).isVisible){
				$w(element).hide();
				// console.log('TOGGLEtoHIDE:' + element);
			} else {
				$w(element).show();
				// console.log('TOGGLEtoSHOW:' + element);
			}
		}
		});
}

export function radioLettersAL_change(event) {
	toggleRadioLetters ('#radioLettersAL')
}

export function radioLettersMZ_change(event) {
	toggleRadioLetters ('#radioLettersMZ')
}

export function radioLettersRandom_change(event) {
	toggleRadioLetters ('#radioLettersRandom')
}

export function btnDisplayData_click(event) {
	let step = 'data';
	let codeString = composeTemplateCode(step);
	$w('#baseData').value = JSON.stringify(codeString,undefined,4);
	step = $w('#baseData').value.substr(0,7).toUpperCase().replace(/\W/g, '');
	step = step === 'ERROR' ? step : 'next';
	console.log(step);
	if(step === 'next'){
		// let arrayAllHidableElements = ["#radioLettersAL","#radioLettersMZ","#radioLettersRandom","#chkbxMemberElements","#chkbxContactInfoElements","#btnDisplayData","#btnComposeTemplate","#btnInsertMember","#btnClear","#btnAppendEmail","#btnAppendPhone"];
		let arrayShowElements = ["#radioLettersAL","#radioLettersMZ","#radioLettersRandom","#btnDisplayData","#btnInsertMember","#btnScriptDirect"];
		visibilityByArray('show ALL');
		visibilityByArray('hide',arrayShowElements);
	}
}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnShowAll_click(event) {
	visibilityByArray('sHoW ALL');
}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnShowRandom_click(event) {
	visibilityByArray('hIDE ALL');
	visibilityByArray('ShOw    ranDOM');
}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnToggleAll_click(event) {
	visibilityByArray('togGLEalL');
}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnScriptDirect_click(event) {
	// <just PASTE from Output>
    let email = "qiqgroup+victor@gmail.com";
    let password = "test";
    let firstName = "Victor";
    let lastName = "Veracruz";
    let emails = ["qiqgroup+victor102@gmail.com","qiqgroup+victor900@gmail.com"];
    let loginEmail = "qiqgroup+victor@gmail.com";
    let phones = ["(213) 926-1853","(317) 463-8707"];
    let addresses = [{address:"587 Victor Avenue",address2:"#85",city:"Virginia",state:"MN",postalCode:"55792"},{address:"939 Victor Street",address2:"#156",city:"Virginia",state:"MN",postalCode:"55792"}];
    wixUsers.register(email, password, {
        contactInfo: {
            "firstName": firstName,
            "lastName": lastName,
            "emails": emails,
            "loginEmail": loginEmail,
            "phones": phones,
            "addresses": addresses,
        }
    } )
    .then( (result) => {
    console.log(result.status);
    console.log(result.approvalToken);
    console.log(result.user);
    let resultStatus = result.status;
    $w("#memberInsertResult").value = JSON.stringify(result,undefined, 4);
    } );
// </just PASTE from Output>
}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnAppendEmail_click(event) {
	let letterObject = JSON.parse($w('#baseData').value);
	if(typeof letterObject.emails === 'string'){
		letterObject.emails = [];
		// $w('#baseData').value = JSON.stringify(letterObject, undefined, 4);
	}
	// letterObject =letterObject[letter];
	let holderString = '';
	let newEmail = '';
	let indexOf = 777;
	let i = 0;
	do {
		holderString = Math.floor(Math.random() * 1000 + 1000).toString().substr(-3);
		newEmail = letterObject.firstName.toLowerCase() + holderString;
		// console.log(i);
		i += 1;
		indexOf = $w('#baseData').value.indexOf(newEmail)
	} while (indexOf >= 0 && i < 500);
	newEmail = `qiqgroup+${newEmail}@gmail.com`;
	letterObject.emails.push(newEmail);
	$w('#baseData').value = JSON.stringify(letterObject, undefined, 4);
	$w('#newMemberJSON').value = newEmail + ' [' + i + ']';
}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnAppendPhone_click(event) {
	let letterObject = JSON.parse($w('#baseData').value);
	if(typeof letterObject.phones === 'string'){
		letterObject.phones = [];
		// $w('#baseData').value = JSON.stringify(letterObject, undefined, 4);
	}
	// letterObject =letterObject[letter];
	let holderString = '';
	let newPhone = '';
	let indexOf = 777;
	let i = 0;
	do {
		holderString = '(';
		holderString += Math.floor(Math.random() * 9 + 1).toString();
		holderString += Math.floor(Math.random() * 2).toString();
		holderString += Math.floor(Math.random() * 9 + 1).toString();
		holderString += ') ';
		holderString += Math.floor(Math.random() * 1000 + 1000).toString().substr(-3);
		holderString += '-';
		holderString += Math.floor(Math.random() * 10000 + 10000).toString().substr(-4);
		newPhone = holderString;
		// console.log(i);
		i += 1;
		indexOf = $w('#baseData').value.indexOf(newPhone)
	} while (indexOf >= 0 && i < 500);
	letterObject.phones.push(newPhone);
	$w('#baseData').value = JSON.stringify(letterObject, undefined, 4);
	$w('#newMemberJSON').value = newPhone + ' [' + i + ']';
}

export function newAddressObject(letter) {
	let alphaArray=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	let randomAlphabet = alphaArray.indexOf(letter);
	console.log( randomAlphabet + '[' + letter + ']');
	// let currentValue = $w('#gotContact').value + 'X';
	// if (currentValue.length < 18 ) {
	// 	$w('#gotContact').value = '{"addresses": []}';
	// }
	// let arrayofAddresses = JSON.parse($w('#gotContact').value);
	let randomThousand = Math.ceil(Math.random() * 999);
	randomAlphabet = randomAlphabet < 0 ? Math.floor(Math.random() * 26) : randomAlphabet;
	let streetKindArray = ['Street','Avenue','Road','Boulevard','Lane','Place','Way'];
	let arrayNatoPhoneticAlphabetOneLine = ['Alpha','Bravo','Charlie','Delta','Echo','Foxtrot','Golf','Hotel','India','Juliet','Kilo','Lima','Mike','November','Oscar','Papa','Quebec','Romeo','Sierra','Tango','Uniform','Victor','Whiskey','Xray','Yankee','Zulu'];
	let cityStateZipAlphabeticalArrayOneLine = [['Ashville','NC', '28801'],['Burlington','VT', '05401'],['Charlottesville','VA', '22901'],['Duluth','MN', '55805'],['Evanston','IL', '60201'],['Fargo','ND', '58102'],['Grand Marais','MN', '55604'],['Hermantown','MN', '55811'],['Indianapollis','IN', '46201'],['Juneau','AK', '99801'],['Kalamazoo','MI', '49001'],['Lake Placid','NY', '12946'],['Minneapolis','MN', '55403'],['Nashville','TN', '37201'],['Ogden','UT', '84201'],['Philadelphia','PA', '19104'],['Quincy','MA', '02169'],['Rochester','NY', '14604'],['San Francisco','CA', '94102'],['Tuscon','AZ', '85701'],['Urbana','MD', '21704'],['Virginia','MN', '55792'],['Washington','DC', '20003'],['Xenia','OH', '45385'],['Ypsilanti','MI', '48197'],['Zionsville','IN', '46077']];
	let randomAddress = streetKindArray[Math.floor(Math.random() * streetKindArray.length)];
	randomAddress = randomThousand > 500 ? 'Avenue' : randomAddress;
	randomAddress = randomThousand > 750 ? 'Street' : randomAddress;
	randomAddress = randomThousand + ' ' + arrayNatoPhoneticAlphabetOneLine[randomAlphabet] + ' ' + randomAddress;
	// let randomAddress2 = Math.floor(randomThousand /10) % 10 === 7 ? '#' + Math.floor(Math.random() * 200).toString(): '';
	let randomAddress2 = '#' + Math.floor(Math.random() * 200).toString();
	// let randomAddress2 = randomThousand >= 500 ? '# 702' : 'Apt 101';
	let randomCity = cityStateZipAlphabeticalArrayOneLine[randomAlphabet][0];
	let randomState = cityStateZipAlphabeticalArrayOneLine[randomAlphabet][1];
	let randomZip = cityStateZipAlphabeticalArrayOneLine[randomAlphabet][2];
	let returnAddressObject = {};
	returnAddressObject.address = randomAddress;
	if(9 > 7 || randomAddress2.length > 0){
		returnAddressObject.address2 = randomAddress2;
	}
	returnAddressObject.city = randomCity;
	returnAddressObject.state = randomState;
	returnAddressObject.postalCode = randomZip;
	$w('#newMemberJSON').value = JSON.stringify(returnAddressObject,undefined,4);
	return returnAddressObject;
	// let paramArray = [];
	// paramArray.push(randomAddress, randomAddress2, randomCity, randomState, randomZip);
	// console.log(paramArray);
	// console.log(arrayofAddresses);
	// AddressObjectAppend(arrayofAddresses, randomAddress, randomAddress2, randomCity, randomState, randomZip)
	// .then((addressArray) => {
	// 	console.log(addressArray);
	// 	let reverseArray = addressArray.addresses.length > 1 ? addressArray.addresses.reverse() : addressArray.addresses;
	// 	let reverseObject = {};
	// 	reverseObject.addresses = reverseArray;
	// 	$w("#gotContact").value = JSON.stringify(reverseObject, undefined, 4);
	// 	return addressArray;
	// 	})
	// .catch((err) => {
	// 	console.error("custom Error: newAddress_click");
	// 	console.error(err);
	// 	$w("#gotContact").value = "Whiskey-Tango-Foxtrot! - see Console Logs"
	// 	});	
}


/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnAppendAddress_click(event) {
	let letterObject = JSON.parse($w('#baseData').value);
	console.log(typeof letterObject.addresses);
	if(typeof letterObject.addresses === 'undefined'){
		letterObject.addresses = [];
	}
	let letter =letterObject.Letter;
	console.log('letter: ' + letter);
	let holderString = '';
	let newAddressObj = newAddressObject(letter);
	letterObject.addresses.push(newAddressObj);
	$w('#baseData').value = JSON.stringify(letterObject, undefined, 4);
}