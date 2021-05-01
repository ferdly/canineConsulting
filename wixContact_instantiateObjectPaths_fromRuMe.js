let wixContact = {};
let error = false;
let errorString = '';
// let elementKind = 'ppendingKind';

//<likely Parameterized>
// let pathArray = ['name.first', 'name.last', 'addresses.address.city']
//</likely Parameterized>

//<relatively Konstant>
let supportedObjectElementKeyArray = [[0, "info", "info", "object"], [4, "name", "info.name", "object"], [5, "primaryInfo", "primaryInfo", "object"], [6, "address", "info.addresses[0].address", "object"], [7, "streetAddress", "info.addresses[0].address.streetAddress", "object"], [8, "location", "info.addresses[0].address.location", "object"]];
let supportedArrayofObjectsElementKeyArray = [[1, "addresses", "info.addresses", "arrayOfObjects"], [2, "emails", "info.emails", "arrayOfObjects"], [3, "phones", "info.phones", "arrayOfObjects"]];
/**
 * </meticulously ordered>
 *
 */
let supportedElementKeyArray = [[0, "info", "info", "object"], [1, "addresses", "info.addresses", "arrayOfObjects"], [2, "emails", "info.emails", "arrayOfObjects"], [3, "phones", "info.phones", "arrayOfObjects"], [4, "name", "info.name", "object"], [5, "primaryInfo", "primaryInfo", "object"], [6, "address", "info.addresses[0].address", "object"], [7, "streetAddress", "info.addresses[0].address.streetAddress", "object"], [8, "location", "info.addresses[0].address.location", "object"]];
//</meticulously ordered>
//</relatively Konstant>
let name = '';
let path = '';
let kind = '';
let pathArray = [];
let evalString = '';
let breakOn = 70;
let element = [];
let index = 0
for (index = 0; index < supportedElementKeyArray.length; index++) {
    element = supportedElementKeyArray[index];
    // console.log(element);
    order = element[0];
    name = element[1];
    path = element[2];
    kind = element[3];
    pathArray = path.split(".");

    switch (kind) {
        case "object":
            // wixContact[path] = {};
            evalString = "wixContact." + path + " = {}";
            eval(evalString);
            break;
        case "arrayOfObjects":
            // wixContact[path] = [{}];
            evalString = "wixContact." + path + " = [{}]";
            eval(evalString);

            break;
        case "array":
            // wixContact[path] = [];
            evalString = "wixContact." + path + " = []";
            eval(evalString);

            break;

        default:
            error = true;
            errorString += 'Unsupported elementKind: ' + "'" + elementKind + "'";
            break;
    }
    if (order === breakOn) {
        break;
    }
}

// pathArray = [["last", "info.name.last"],["first", "info.name.first"]];
pathArray = [["first","info.name.first","testing"],["last","info.name.last","testing"],["company","info.company","testing"],["jobTitle","info.jobTitle","testing"],["locale","info.locale","testing"],["birthdate","info.birthdate","testing"],["tag","info.emails[0].tag","testing"],["email","info.emails[0].email","testing"],["primary","info.emails[0].primary","testing"],["tag","info.phones[0].tag","testing"],["phone","info.phones[0].phone","testing"],["primary","info.phones[0].primary","testing"],["tag","info.addresses[0].tag","testing"],["formatted","info.addresses[0].address.formatted","testing"],["number","info.addresses[0].address.streetAddress.number","testing"],["name","info.addresses[0].address.streetAddress.name","testing"],["addressLine2","info.addresses[0].address.addressLine2","testing"],["city","info.addresses[0].address.city","testing"],["subdivision","info.addresses[0].address.subdivision","testing"],["postalCode","info.addresses[0].address.postalCode","testing"],["country","info.addresses[0].address.country","testing"],["latitude","info.addresses[0].address.location.latitude","testing"],["longitude","info.addresses[0].address.location.longitude","testing"]];
let value = '';
breakOn = 22;
for (index = 0; index < pathArray.length; index++) {
    element = pathArray[index];
    name = element[0];
    path = element[1];
    // value = element[2];
    value = "as" + name.toUpperCase();

    evalString = "wixContact." + path + " = \"" + value + "\"";
    eval(evalString);
    if (index === breakOn) {
        console.log(index);
        console.log(element);
        break;
    }
}


// elementKind = supportedObjectElementKeyArray.includes(elementKey) ? 'object' : elementKind;
// elementKind = supportedArrayElementKeyArray.includes(elementKey) ? 'array' : elementKind; //tertiary sugar is more extensible
// elementKind = supportedArrayofObjectsElementKeyArray.includes(elementKey) ? 'arrayOfObjects' : elementKind; //tertiary sugar is more extensible
console.log(JSON.stringify(wixContact, undefined, 4));
console.log('error: ' + error);
console.log('errorString: "' + errorString + '"');

