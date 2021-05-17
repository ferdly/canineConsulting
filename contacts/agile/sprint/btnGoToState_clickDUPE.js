export function btnGoToState_click(event) {
	let kind = "EDIT";
	kind = "got to the proper form multi-state box state";
	let objectIndex = Number($w('#selectIndexEmailPhone').value);
	let objectCurrentNew = $w('#selectIndexEmailPhone').value > $w('#recievedCount').value ? 'new' : 'current';
	switch ($w('#recievedKind').value) {
		case 'emails':
			$w('#devNotes').value = 'going to edit a ' + objectCurrentNew + ' object element;\n'
			stateById("kindEmailPhone");
			break;

		case 'phones':
			$w('#devNotes').value = 'going to edit a ' + objectCurrentNew + ' object element;\n'
			stateById("kindEmailPhone");
			break;

		case 'addresses':
			$w('#devNotes').value = 'going to edit a ' + objectCurrentNew + ' object element;\n'
			stateById("kindAddress");
			break;
	
		case 'labelKeys':
			$w('#devNotes').value = 'going to edit a ' + objectCurrentNew + ' object element;\n'
			stateById("kindLabel");
			break;
	
		default:
			$w('#devNotes').value = "unsupported Kind: " + $w('#recievedKind').value
			console.log("unsupported Kind: " + $w('#recievedKind').value);
			break;
	}
}