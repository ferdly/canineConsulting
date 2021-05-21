console.warn('(same thing for Member Tab)');
let ContactID = "abc777";
let RevisionID = "7";
let isValidCode = true;// typeof === 'objct'
// let string = 'tommy';
// let indedOf = string.indexOf('mmy');
console.warn('indedOf: ' + indedOf);

let testArray = ['111', '110', '101', '100', '011', '010', '001', '000'];
// testArray = ['111'];

let paramObjectThis = {}
for (let index = 0; index < testArray.length; index++) {
    const test = testArray[index];
    paramObjectThis = {}
    paramObjectThis.test = test;

    switch (test) {
        case '111':
            paramObjectThis.ContactID = "abc777";
            paramObjectThis.RevisionID = "7";
            paramObjectThis.isValidCode = true;// typeof === 'objct'
            break;

        case '110':
            paramObjectThis.ContactID = "abc777";
            paramObjectThis.RevisionID = "7";
            paramObjectThis.isValidCode = false;// typeof === 'objct'
            break;

        case '101':
            paramObjectThis.ContactID = "abc777";
            paramObjectThis.RevisionID = "";
            paramObjectThis.isValidCode = true;// typeof === 'objct'
            break;

        case '100':
            paramObjectThis.ContactID = "abc777";
            paramObjectThis.RevisionID = "";
            paramObjectThis.isValidCode = false;// typeof === 'objct'
            break;

        case '011':
            paramObjectThis.ContactID = "";
            paramObjectThis.RevisionID = "7";
            paramObjectThis.isValidCode = true;// typeof === 'objct'
            break;

        case '010':
            paramObjectThis.ContactID = "";
            paramObjectThis.RevisionID = "7";
            paramObjectThis.isValidCode = false;// typeof === 'objct'
            break;

        case '001':
            paramObjectThis.ContactID = "";
            paramObjectThis.RevisionID = "";
            paramObjectThis.isValidCode = true;// typeof === 'objct'
            break;

        case '000':
            paramObjectThis.ContactID = "";
            paramObjectThis.RevisionID = "";
            paramObjectThis.isValidCode = false;// typeof === 'objct'
            break;

        default:
            break;
    }

    buttonsShowHide(paramObjectThis);
}





export function buttonsShowHide(paramObject){
    
    
    let ContactID = paramObject.ContactID;
    let RevisionID = paramObject.RevisionID;
    let isValidCode = paramObject.isValidCode;
    
    let contactStatus = "PPENDING";
    
    
    // ø <Orig>
    contactStatus = ContactID.length > 0 ? 'UPDATE' : 'NO_STATUS';
    contactStatus = RevisionID.length > 0 ? contactStatus : 'GET';
    // ø </Orig>
    // ø <Try>
    contactStatus = ContactID.length < 1 && RevisionID.length < 1 ? 'NEW' : contactStatus;
    // ø </Try>


    // ø <BadTry>
    // contactStatus = ContactID.length > 0 && RevisionID.length > 0? 'UPDATE' : contactStatus;
    // contactStatus = ContactID.length > 0 && RevisionID.length < 1 ? contactStatus : 'GET';
    // contactStatus = ContactID.length < 1 && RevisionID.length < 1 ? 'NEW' : contactStatus;
    // ø </BadTry>
    contactStatus = isValidCode ? contactStatus : 'INVALID';
    
    let btnContact_NEW = contactStatus === 'NEW' ? 'SHOW' : 'HIDE';
    let btnContact_GET = contactStatus === 'GET' ? 'SHOW' : 'HIDE';
    let btnContact_UPDATE = contactStatus === 'UPDATE' ? 'SHOW' : 'HIDE';
    console.warn('<---------- <' + paramObject.test + '>  ----------->')
    console.warn('contactStatus: ' + contactStatus)
    console.warn('ContactID: ' + ContactID + ' || ' + 'RevisionID: ' + RevisionID + ' || ' + 'isValidCode: ' + isValidCode.toString());
    console.warn('|Correct: ????? || btnContact_NEW: ' + btnContact_NEW + ' || ' + 'btnContact_GET: ' + btnContact_GET + ' || ' + 'btnContact_UPDATE: ' + btnContact_UPDATE);
    console.warn('<---------- </' + paramObject.test + '> ----------->\n\n')
}


