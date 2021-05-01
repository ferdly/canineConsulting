let wixContact = {};
let error = false;
let errorString = '';
// let elementKind = 'ppendingKind';
//<Single for Testing>
ruMeUserJSON = "{\"gender\":\"female\",\"name\":{\"title\":\"Ms\",\"first\":\"Valerie\",\"last\":\"Steeves \"},\"location\":{\"street\":{\"number\":7298,\"name\":\"Cackson St\"},\"city\":\"Everett\",\"state\":\"Minnesota\",\"country\":\"US\",\"postcode\":21730,\"coordinates\":{\"latitude\":\"72.8313\",\"longitude\":\"88.7922\"},\"timezone\":{\"offset\":\"+9:30\",\"description\":\"Adelaide, Darwin\"},\"postalCode\":\"21730\",\"subdivision\":\"MN\"},\"email\":\"valerie.steeves@example.com\",\"login\":{\"uuid\":\"fdfeb147-2664-41da-be4d-c288cd41a607\",\"username\":\"tinyrabbit249\",\"password\":\"desiree\",\"salt\":\"zxre1N03\",\"md5\":\"927b51f40b779d85e934af89bb0b7138\",\"sha1\":\"aa5cce067b10d88f6fce407f0f023b3381636f76\",\"sha256\":\"071b0a9928c8a27a1e6bb3d5a96b1aa5591ad75cd677534b27ac993a40a157db\"},\"dob\":{\"date\":\"1974-07-12T21:56:46.101Z\",\"age\":47},\"registered\":{\"date\":\"2011-12-28T23:57:15.997Z\",\"age\":10},\"phone\":\"(820)-630-4825\",\"cell\":\"(773)-727-8548\",\"id\":{\"name\":\"SSN\",\"value\":\"459-06-3203\"},\"picture\":{\"large\":\"https://randomuser.me/api/portraits/women/76.jpg\",\"medium\":\"https://randomuser.me/api/portraits/med/women/76.jpg\",\"thumbnail\":\"https://randomuser.me/api/portraits/thumb/women/76.jpg\"},\"nat\":\"US\",\"seed\":\"67e360b44a4523de\",\"info\":[],\"birthdate\":\"1974-07-12\"}";
ruMeUser = JSON.parse(ruMeUserJSON);
// console.log(ruMeUser);
//</Single for Testing>

//<likely Parameterized>
let assinmentPathArray = [["last", "info.name.last"],["first", "info.name.first"]];
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

// assinmentPathArray = [["last", "info.name.last"],["first", "info.name.first"]];
// assinmentPathArray = [["first","info.name.first","testing"],["last","info.name.last","testing"],["company","info.company","testing"],["jobTitle","info.jobTitle","testing"],["locale","info.locale","testing"],["birthdate","info.birthdate","testing"],["tag","info.emails[0].tag","testing"],["email","info.emails[0].email","testing"],["primary","info.emails[0].primary","testing"],["tag","info.phones[0].tag","testing"],["phone","info.phones[0].phone","testing"],["primary","info.phones[0].primary","testing"],["tag","info.addresses[0].tag","testing"],["formatted","info.addresses[0].address.formatted","testing"],["number","info.addresses[0].address.streetAddress.number","testing"],["name","info.addresses[0].address.streetAddress.name","testing"],["addressLine2","info.addresses[0].address.addressLine2","testing"],["city","info.addresses[0].address.city","testing"],["subdivision","info.addresses[0].address.subdivision","testing"],["postalCode","info.addresses[0].address.postalCode","testing"],["country","info.addresses[0].address.country","testing"],["latitude","info.addresses[0].address.location.latitude","testing"],["longitude","info.addresses[0].address.location.longitude","testing"]];
let value = '';
breakOn = 0;
for (index = 0; index < assinmentPathArray.length; index++) {
    element = assinmentPathArray[index];
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

