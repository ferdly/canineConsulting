let wixContact = {};
let error = false;
let errorString = '';
// let elementKind = 'ppendingKind';

//<likely Parameterized>
// let pathArray = ['name.first', 'name.last', 'addresses.address.city']
//</likely Parameterized>

//<relatively Konstant>
let supportedObjectElementKeyArray=[[0,"info","info","object"],[4,"name","info.name","object"],[5,"primaryInfo","primaryInfo","object"],[6,"address","info.addresses[0].address","object"],[7,"streetAddress","info.addresses[0].address.streetAddress","object"],[8,"location","info.addresses[0].address.location","object"]];
let supportedArrayofObjectsElementKeyArray=[[1,"addresses","info.addresses","arrayOfObjects"],[2,"emails","info.emails","arrayOfObjects"],[3,"phones","info.phones","arrayOfObjects"]];
/**
 * </meticulously ordered>
 *
 */
let supportedElementKeyArray=[[0,"info","info","object"],[1,"addresses","info.addresses","arrayOfObjects"],[2,"emails","info.emails","arrayOfObjects"],[3,"phones","info.phones","arrayOfObjects"],[4,"name","info.name","object"],[5,"primaryInfo","primaryInfo","object"],[6,"address","info.addresses[0].address","object"],[7,"streetAddress","info.addresses[0].address.streetAddress","object"],[8,"location","info.addresses[0].address.location","object"]];
//</meticulously ordered>
//</relatively Konstant>
let name = '';
let path = '';
let kind = '';
let pathArray = [];
let evalString = '';
let breakOn = 70;
for (let index = 0; index < supportedElementKeyArray.length; index++) {
    const element = supportedElementKeyArray[index];
    console.log(element);
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


// elementKind = supportedObjectElementKeyArray.includes(elementKey) ? 'object' : elementKind;
// elementKind = supportedArrayElementKeyArray.includes(elementKey) ? 'array' : elementKind; //tertiary sugar is more extensible
// elementKind = supportedArrayofObjectsElementKeyArray.includes(elementKey) ? 'arrayOfObjects' : elementKind; //tertiary sugar is more extensible
console.log('error: ' + error);
console.log('errorString: "' + errorString + '"');
console.log(JSON.stringify(wixContact,undefined,4));

