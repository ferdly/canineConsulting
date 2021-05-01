let wixContact = {};
let error = false;
let errorString = '';
let elementKind = 'ppendingKind';

//<likely Parameterized>
let pathArray = ['name.first', 'name.last', 'addresses.address.city']
//</likely Parameterized>

//<relatively Konstant>
let supportedObjectElementKeyArray = ['name'];
let supportedArrayElementKeyArray = [];
let supportedArrayofObjectsElementKeyArray = ['addresses'];
let supportedElementKeyArray = supportedObjectElementKeyArray.concat(supportedArrayElementKeyArray);
supportedElementKeyArray = supportedElementKeyArray.concat(supportedArrayofObjectsElementKeyArray);
console.log(supportedElementKeyArray);
//</relatively Konstant>

let nameInstnttd = [];
let oathStart = '';
let checkLength = -777;
supportedElementKeyArray.forEach(elementKey => {
    elementKind = supportedObjectElementKeyArray.includes(elementKey) ? 'object' : elementKind;
    elementKind = supportedArrayElementKeyArray.includes(elementKey) ? 'array' : elementKind; //tertiary sugar is more extensible
    elementKind = supportedArrayofObjectsElementKeyArray.includes(elementKey) ? 'arrayOfObjects' : elementKind; //tertiary sugar is more extensible
    // console.log(elementKind);
    // elementStart = elementKind === 'object' ? elementKey + '.' : 'ppending';
    // elementStart = elementKind === 'array' ? elementKey + '[' : elementStart;
    elementStart = elementKey + '.';
    // console.log(elementStart);
    checkLength = elementStart.length;
    pathArray.forEach(path => {
        if (path.substr(0, checkLength) === elementStart) {
            nameInstnttd = Object.keys(wixContact);
            if (!nameInstnttd.includes(elementKey)) {
                if (elementKind === 'object') {
                    wixContact[elementKey] = {};
                } else
                if (elementKind === 'array') {
                    wixContact[elementKey] = [];
                } else
                if (elementKind === 'arrayOfObjects') {
                    wixContact[elementKey] = [{}];
                } else {
                    error = true;
                    errorString += 'Unsupported elementKind: ' + "'" + elementKind + "'";
                }
            }

        }

    })//END pathArray.forEach
})//END potentialObjectElementArray.forEach
console.log('error: ' + error);
console.log('errorString: "' + errorString + '"');
console.log(wixContact);

