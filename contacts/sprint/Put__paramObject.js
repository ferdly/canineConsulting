let paramObjectThis = {};


export function doPut(paramObject = {}) {

    /**
     * Validate the data entry
     * Construct the Element Opject
     * Assign the Element Object by Index
     * Repopulate JSON box via stringify
     */
    console.log("holder for three blocks (called functions -- maybe only Addresses)")

    switch ($w('#recievedKind').value) {
        case 'emails':
            console.log("Do: emails: " + kind)
            // $w('#devNotes').value = 'going to edit a ' + objectCurrentNew + ' object element;\n'
            // stateById("kindEmailPhone");
            paramObject.email = "holder";
            paramObject.tag = "holder";
            paramObject.primary = "holder";
            break;

        case 'phones':
            console.log("Do: phones: " + kind)
            $w('#devNotes').value = 'going to edit a ' + objectCurrentNew + ' object element;\n'
            // stateById("kindEmailPhone");
            paramObject.phone = "holder";
            paramObject.tag = "holder";
            paramObject.primary = "holder";
            break;
            
            case 'addresses':
                console.log("Do: addresses: " + kind)
                // $w('#devNotes').value = 'going to edit a ' + objectCurrentNew + ' object element;\n'
                // stateById("kindAddress");
                break;
                
                case 'labelKeys':
            paramObject.labelKey = "holder";
            console.log("Do: labelKeys: " + kind)
            // $w('#devNotes').value = 'going to edit a ' + objectCurrentNew + ' object element;\n'
            break;

        default:
            console.log("Do: NNOTHING: " + kind + ' – is not supported in Switch')
            // $w('#devNotes').value = "unsupported Kind: " + $w('#recievedKind').value
            console.log("unsupported Kind: " + $w('#recievedKind').value);
            break;
    }
    $w('#devNotes').value = JSON.stringify(paramObject, undefined, 4);
    stateById("selectList");
}