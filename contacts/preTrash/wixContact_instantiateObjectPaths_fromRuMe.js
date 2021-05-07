let wixContact = {};
let error = false;
let errorString = '';
// let elementKind = 'ppendingKind';
//<Single for Testing>
// ruMeUserJSON = "{\"gender\":\"female\",\"name\":{\"title\":\"Ms\",\"first\":\"Valerie\",\"last\":\"Steeves \"},\"location\":{\"street\":{\"number\":7298,\"name\":\"Cackson St\"},\"city\":\"Everett\",\"state\":\"Minnesota\",\"country\":\"US\",\"postcode\":21730,\"coordinates\":{\"latitude\":\"72.8313\",\"longitude\":\"88.7922\"},\"timezone\":{\"offset\":\"+9:30\",\"description\":\"Adelaide, Darwin\"},\"postalCode\":\"21730\",\"subdivision\":\"MN\"},\"email\":\"valerie.steeves@example.com\",\"login\":{\"uuid\":\"fdfeb147-2664-41da-be4d-c288cd41a607\",\"username\":\"tinyrabbit249\",\"password\":\"desiree\",\"salt\":\"zxre1N03\",\"md5\":\"927b51f40b779d85e934af89bb0b7138\",\"sha1\":\"aa5cce067b10d88f6fce407f0f023b3381636f76\",\"sha256\":\"071b0a9928c8a27a1e6bb3d5a96b1aa5591ad75cd677534b27ac993a40a157db\"},\"dob\":{\"date\":\"1974-07-12T21:56:46.101Z\",\"age\":47},\"registered\":{\"date\":\"2011-12-28T23:57:15.997Z\",\"age\":10},\"phone\":\"(820)-630-4825\",\"cell\":\"(773)-727-8548\",\"id\":{\"name\":\"SSN\",\"value\":\"459-06-3203\"},\"picture\":{\"large\":\"https://randomuser.me/api/portraits/women/76.jpg\",\"medium\":\"https://randomuser.me/api/portraits/med/women/76.jpg\",\"thumbnail\":\"https://randomuser.me/api/portraits/thumb/women/76.jpg\"},\"nat\":\"US\",\"seed\":\"67e360b44a4523de\",\"info\":[],\"birthdate\":\"1974-07-12\"}";
// ruMeUser = JSON.parse(ruMeUserJSON);
ruMeUser = { gender: "male", name: { title: "Mr", first: "Floyd", last: "Holt" }, location: { street: { number: 5365, name: "Woodland St", apt: "371" }, city: "Elko", state: "California", country: "US", postcode: 13195, coordinates: { latitude: "-32.1370", longitude: "-38.8458" }, timezone: { offset: "-5:00", description: "Eastern Time (US & Canada), Bogota, Lima" }, postalCode: "13195", subdivision: "CA", addressLine2: "Box 122" }, email: "floyd.holt@example.com", login: { uuid: "5638f410-b574-4551-b262-ff4bf4ebfb87", username: "happycat971", password: "buster1", salt: "RwDqvtgU", md5: "9584ff21a6d448905719e2216eb9b976", sha1: "f684942cda707ba52d78af9c104b290d70fc392f", sha256: "fa1c0cd4a1c8927cb9a3a5d2d6b7c6004641a8174faec28643938fdf0921660a" }, dob: { date: "1996-01-15T05:11:36.209Z", age: 25 }, registered: { date: "2006-11-05T22:27:23.562Z", age: 15 }, phone: "(938)-796-5414", cell: "(315)-781-5760", id: { name: "SSN", value: "364-38-2775" }, picture: { large: "https://randomuser.me/api/portraits/men/71.jpg", medium: "https://randomuser.me/api/portraits/med/men/71.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/71.jpg" }, nat: "US", seed: "3628bfbbd09c27aa", locale: "en-US", birthdate: "1996-01-15", company: "Woodland College", jobTitle: "Supervisor", emailPrimary: "qiqgroup+floyd@gmail.com" };
// console.log(ruMeUser);
//</Single for Testing>

//<likely Parameterized>
let assinmentPathArray = [["KEY.name", "KEY.path", "KEY.index", "KEY.ruMePath", "KEY.ruMeCode"], ["email", "primaryInfo.email", "", "NNULL", ""], ["phone", "primaryInfo.phone", "", "NNULL", ""], ["INSTANTIATE_OBJECT", "info", "", "NULL", "eval('{}')"], ["INSTANTIATE_OBJECT", "info.name", "", "name.first", "eval('{}')"], ["first", "info.name.first", "", "name.first", ""], ["last", "info.name.last", "", "name.last", ""], ["company", "info.company", "", "company", ""], ["jobTitle", "info.jobTitle", "", "jobTitle", ""], ["locale", "info.locale", "", "locale", ""], ["birthdate", "info.birthdate", "", "birthdate", ""], ["INSTANTIATE_ARRAY", "info.emails", "", "NNULL", "eval('[]')"], ["INSTANTIATE_ELEMENT_OBJECT", "info.emails[i]", "i", "NNULL", "eval('{}')"], ["_id", "info.emails._id", "i", "NNULL", ""], ["tag", "info.emails.tag", "i", "i-TBD", ""], ["email", "info.emails.email", "i", "i-TBD", ""], ["primary", "info.emails.primary", "i", "i-TBD", ""], ["INSTANTIATE_ELEMENT_OBJECT", "info.emails[i]", 0, "NNULL", "eval('{}')"], ["_id", "info.emails._id", 0, "NNULL", ""], ["tag", "info.emails.tag", 0, "NNULL", "eval('othER')"], ["email", "info.emails.email", 0, "email", ""], ["primary", "info.emails.primary", 0, "NNULL", ""], ["INSTANTIATE_ELEMENT_OBJECT", "info.emails[i]", 1, "NNULL", "eval('{}')"], ["_id", "info.emails._id", 1, "NNULL", ""], ["tag", "info.emails.tag", 1, "NNULL", "eval('Login')"], ["email", "info.emails.email", 1, "emailPrimary", ""], ["primary", "info.emails.primary", 1, "NNULL", "eval(true)"], ["INSTANTIATE_ARRAY", "info.phones", "", "NNULL", "eval('[]')"], ["INSTANTIATE_ELEMENT_OBJECT", "info.phones[i]", "i", "NNULL", "eval('{}')"], ["_id", "info.phones._id", "i", "NNULL", ""], ["tag", "info.phones.tag", "i", "i-TBD", ""], ["phone", "info.phones.phone", "i", "i-TBD", ""], ["primary", "info.phones.primary", "i", "i-TBD", ""], ["INSTANTIATE_ELEMENT_OBJECT", "info.phones[i]", 0, "NNULL", "eval('{}')"], ["_id", "info.phones._id", 0, "NNULL", ""], ["tag", "info.phones.tag", 0, "NNULL", "eval('cell')"], ["phone", "info.phones.phone", 0, "cell", ""], ["primary", "info.phones.primary", 0, "NNULL", "eval(true)"], ["INSTANTIATE_ELEMENT_OBJECT", "info.phones[i]", 1, "NNULL", "eval('{}')"], ["_id", "info.phones._id", 1, "NNULL", ""], ["tag", "info.phones.tag", 1, "NNULL", "eval('home')"], ["phone", "info.phones.phone", 1, "phone", ""], ["primary", "info.phones.primary", 1, "NNULL", "eval(true)"], ["INSTANTIATE_ARRAY", "info.addresses", "i", "NNULL", "eval('[]')"], ["INSTANTIATE_ELEMENT_OBJECT", "info.addresses[i]", "i", "NNULL", ""], ["_id", "info.addresses._id", "i", "NNULL", ""], ["tag", "info.addresses.tag", "i", "i-TBD", ""], ["INSTANTIATE_OBJECT", "info.addresses.address", "i", "NNULL", "eval('{}')"], ["formatted", "info.addresses.address.formatted", "i", "i-TBD", ""], ["streetAddress", "info.addresses.address.streetAddress", "i", "NULL", "eval('{}')"], ["number", "info.addresses.address.streetAddress.number", "i", "location.street.number", ""], ["name", "info.addresses.address.streetAddress.name", "i", "location.street.name", ""], ["apt", "info.addresses.address.streetAddress.apt", "i", "location.street.apt", ""], ["addressLine2", "info.addresses.address.addressLine2", "i", "NA", ""], ["city", "info.addresses.address.city", "i", "location.city", ""], ["subdivision", "info.addresses.address.subdivision", "i", "location.subdivision", ""], ["postalCode", "info.addresses.address.postalCode", "i", "location.postalCode", ""], ["country", "info.addresses.address.country", "i", "location.country", ""], ["location", "info.addresses.address", "i", "NNULL", "eval('{}')"], ["latitude", "info.addresses.address.location.latitude", "i", "coordinates.latitude", ""], ["longitude", "info.addresses.address.location.longitude", "i", "coordinates.longitude", ""], ["INSTANTIATE_ELEMENT_OBJECT", "info.addresses[i]", 0, "NNULL", ""], ["_id", "info.addresses._id", 0, "NNULL", ""], ["tag", "info.addresses.tag", 0, "NNULL", "eval('home')"], ["INSTANTIATE_OBJECT", "info.addresses.address", 0, "NNULL", "eval('{}')"], ["formatted", "info.addresses.address.formatted", 0, "NNULL", ""], ["INSTANTIATE_OBJECT", "info.addresses.address.streetAddress", 0, "NULL", "eval('{}')"], ["number", "info.addresses.address.streetAddress.number", 0, "location.street.number", ""], ["name", "info.addresses.address.streetAddress.name", 0, "location.street.name", ""], ["apt", "info.addresses.address.streetAddress.apt", 0, "location.street.apt", ""], ["addressLine2", "info.addresses.address.addressLine2", 0, "location.addressLine2", ""], ["city", "info.addresses.address.city", 0, "location.city", ""], ["subdivision", "info.addresses.address.subdivision", 0, "location.subdivision", ""], ["postalCode", "info.addresses.address.postalCode", 0, "location.postalCode", ""], ["country", "info.addresses.address.country", 0, "location.country", ""], ["INSTANTIATE_OBJECT", "info.addresses.address.location", 0, "NNULL", "eval('{}')"], ["latitude", "info.addresses.address.location.latitude", 0, "coordinates.latitude", ""], ["longitude", "info.addresses.address.location.longitude", 0, "coordinates.longitude", ""]];
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
for (index = 777; index < supportedElementKeyArray.length; index++) {
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
if(index === 777){
    wixContact = {};
}

// assinmentPathArray = [["last", "info.name.last"],["first", "info.name.first"]];
// assinmentPathArray = [["first","info.name.first","testing"],["last","info.name.last","testing"],["company","info.company","testing"],["jobTitle","info.jobTitle","testing"],["locale","info.locale","testing"],["birthdate","info.birthdate","testing"],["tag","info.emails[0].tag","testing"],["email","info.emails[0].email","testing"],["primary","info.emails[0].primary","testing"],["tag","info.phones[0].tag","testing"],["phone","info.phones[0].phone","testing"],["primary","info.phones[0].primary","testing"],["tag","info.addresses[0].tag","testing"],["formatted","info.addresses[0].address.formatted","testing"],["number","info.addresses[0].address.streetAddress.number","testing"],["name","info.addresses[0].address.streetAddress.name","testing"],["addressLine2","info.addresses[0].address.addressLine2","testing"],["city","info.addresses[0].address.city","testing"],["subdivision","info.addresses[0].address.subdivision","testing"],["postalCode","info.addresses[0].address.postalCode","testing"],["country","info.addresses[0].address.country","testing"],["latitude","info.addresses[0].address.location.latitude","testing"],["longitude","info.addresses[0].address.location.longitude","testing"]];

let doxKeyElement = assinmentPathArray[0];
if (doxKeyElement.toString() === "KEY.name,KEY.path,KEY.index,KEY.ruMePath,KEY.ruMeCode") {
    doxKeyElement = assinmentPathArray.shift();
    // console.log(doxKeyElement.toString());
}
let value = '';
nnullPathArray = [];
breakOn = 1;

for (index = 0; index < assinmentPathArray.length; index++) {
    element = assinmentPathArray[index];
    if (index === breakOn) {
        console.log(index - 1);
        console.log(assinmentPathArray[index - 1]);
        break;
    }
    name = element[0];
    path = element[1];
    index = element[2];
    ruMePath = element[3];
    ruMeCode = element[4];
    value = "as" + name.toUpperCase();

    if (false) {
        break;
    }
    
    switch (true) {
        case ruMePath === 'NNULL':
            console.log(element.toString());
            nnullPathArray.push(element);
            break;
        case ruMePathlength === 0:
            console.warn("'path' must he 'NNULL' or a valid path.")
            console.log(element.toString());
            nnullPathArray.push(element);
            break;
            
        default:
            console.log(element.toString());
            evalString = "wixContact." + path + " = \"" + value + "\"";
            eval(evalString);
            break;
    }

}


// elementKind = supportedObjectElementKeyArray.includes(elementKey) ? 'object' : elementKind;
// elementKind = supportedArrayElementKeyArray.includes(elementKey) ? 'array' : elementKind; //tertiary sugar is more extensible
// elementKind = supportedArrayofObjectsElementKeyArray.includes(elementKey) ? 'arrayOfObjects' : elementKind; //tertiary sugar is more extensible
let insertWixContactJSON = JSON.stringify(wixContact, undefined, 4)
console.log("<insertWixContactObject>\n" + insertWixContactJSON + "</insertWixContactObject>");
console.log(nnullPathArray);
console.log('error: ' + error);
console.log('errorString: "' + errorString + '"');

