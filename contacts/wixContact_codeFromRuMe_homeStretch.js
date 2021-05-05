let wixContact = {};
let error = false;
let errorString = '';
let holderString = '';
//<evalTestString>
// let evalTestString = "wixContact['info'] = {}";
// eval(evalTestString);
// errorString += '';
//</evalTestString>

//<UI checkbox emulation>
// let chkbxKeyArray = ['NNULL', 'first', 'last', 'company', 'jobTitle', 'locale', 'birthdate', 'email', 'emailP', 'phoneP', 'phone', 'address'];
// let nnullElement = chkbxKeyArray.unshift();
//  <UI checkbox emulation commentOut to unCheck>
let chkbxKeyArray = [];
chkbxKeyArray.push('first');
chkbxKeyArray.push('last');
// chkbxKeyArray.push('company');
// chkbxKeyArray.push('jobTitle');
// chkbxKeyArray.push('locale');
// chkbxKeyArray.push('birthdate');
chkbxKeyArray.push('email');
chkbxKeyArray.push('emailP');
// chkbxKeyArray.push('phoneP');
// chkbxKeyArray.push('phone');
// chkbxKeyArray.push('address');
//  </UI checkbox emulation commentOut to unCheck>
//  <instatiate arrays by checking elements>
let chkEmails = chkbxKeyArray.includes('email') ? true : false;
chkEmails = chkbxKeyArray.includes('emailP') ? true : chkEmails;
if (chkEmails) {
    chkbxKeyArray.push('emails');
}
let chkPhones = chkbxKeyArray.includes('phone') ? true : false;
chkPhones = chkbxKeyArray.includes('phoneP') ? true : chkPhones;
if (chkPhones) {
    chkbxKeyArray.push('phones');
}
let chkAddresses = chkbxKeyArray.includes('address') ? true : false;
// chkAddresses = chkbxKeyArray.includes('phoneP') ? true : chkAddresses;
if (chkAddresses) {
    chkbxKeyArray.push('addresses');
}
errorString += '';
console.log(chkbxKeyArray);
//  </instatiate arrays by checking elements>
//</UI checkbox emulation>

//<Single for Testing>
// ruMeUserJSON = "{\"gender\":\"female\",\"name\":{\"title\":\"Ms\",\"first\":\"Valerie\",\"last\":\"Steeves \"},\"location\":{\"street\":{\"number\":7298,\"name\":\"Cackson St\"},\"city\":\"Everett\",\"state\":\"Minnesota\",\"country\":\"US\",\"postcode\":21730,\"coordinates\":{\"latitude\":\"72.8313\",\"longitude\":\"88.7922\"},\"timezone\":{\"offset\":\"+9:30\",\"description\":\"Adelaide, Darwin\"},\"postalCode\":\"21730\",\"subdivision\":\"MN\"},\"email\":\"valerie.steeves@example.com\",\"login\":{\"uuid\":\"fdfeb147-2664-41da-be4d-c288cd41a607\",\"username\":\"tinyrabbit249\",\"password\":\"desiree\",\"salt\":\"zxre1N03\",\"md5\":\"927b51f40b779d85e934af89bb0b7138\",\"sha1\":\"aa5cce067b10d88f6fce407f0f023b3381636f76\",\"sha256\":\"071b0a9928c8a27a1e6bb3d5a96b1aa5591ad75cd677534b27ac993a40a157db\"},\"dob\":{\"date\":\"1974-07-12T21:56:46.101Z\",\"age\":47},\"registered\":{\"date\":\"2011-12-28T23:57:15.997Z\",\"age\":10},\"phone\":\"(820)-630-4825\",\"cell\":\"(773)-727-8548\",\"id\":{\"name\":\"SSN\",\"value\":\"459-06-3203\"},\"picture\":{\"large\":\"https://randomuser.me/api/portraits/women/76.jpg\",\"medium\":\"https://randomuser.me/api/portraits/med/women/76.jpg\",\"thumbnail\":\"https://randomuser.me/api/portraits/thumb/women/76.jpg\"},\"nat\":\"US\",\"seed\":\"67e360b44a4523de\",\"info\":[],\"birthdate\":\"1974-07-12\"}";
// ruMeUser = JSON.parse(ruMeUserJSON);
let ruMeUser = { gender: "male", name: { title: "Mr", first: "Floyd", last: "Holt" }, location: { street: { number: 5365, name: "Woodland St", apt: "371" }, city: "Elko", state: "California", country: "US", postcode: 13195, coordinates: { latitude: "-32.1370", longitude: "-38.8458" }, timezone: { offset: "-5:00", description: "Eastern Time (US & Canada), Bogota, Lima" }, postalCode: "13195", subdivision: "CA", addressLine2: "Box 122" }, email: "floyd.holt@example.com", login: { uuid: "5638f410-b574-4551-b262-ff4bf4ebfb87", username: "happycat971", password: "buster1", salt: "RwDqvtgU", md5: "9584ff21a6d448905719e2216eb9b976", sha1: "f684942cda707ba52d78af9c104b290d70fc392f", sha256: "fa1c0cd4a1c8927cb9a3a5d2d6b7c6004641a8174faec28643938fdf0921660a" }, dob: { date: "1996-01-15T05:11:36.209Z", age: 25 }, registered: { date: "2006-11-05T22:27:23.562Z", age: 15 }, phone: "(938)-796-5414", cell: "(315)-781-5760", id: { name: "SSN", value: "364-38-2775" }, picture: { large: "https://randomuser.me/api/portraits/men/71.jpg", medium: "https://randomuser.me/api/portraits/med/men/71.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/71.jpg" }, nat: "US", seed: "3628bfbbd09c27aa", locale: "en-US", birthdate: "1996-01-15", company: "Woodland College", jobTitle: "Supervisor", emailPrimary: "qiqgroup+floyd@gmail.com" };
// let evalStringTest = "ruMeUser.name.first";
// let evalStringEvalTest = eval(evalStringTest);
// console.log(ruMeUser);
//</Single for Testing>

//<likely Parameterized>
// assinmentPathArray = [["last", "info.name.last"],["first", "info.name.first"]];
// assinmentPathArray = [["first","info.name.first","testing"],["last","info.name.last","testing"],["company","info.company","testing"],["jobTitle","info.jobTitle","testing"],["locale","info.locale","testing"],["birthdate","info.birthdate","testing"],["tag","info.emails[0].tag","testing"],["email","info.emails[0].email","testing"],["primary","info.emails[0].primary","testing"],["tag","info.phones[0].tag","testing"],["phone","info.phones[0].phone","testing"],["primary","info.phones[0].primary","testing"],["tag","info.addresses[0].tag","testing"],["formatted","info.addresses[0].address.formatted","testing"],["number","info.addresses[0].address.streetAddress.number","testing"],["name","info.addresses[0].address.streetAddress.name","testing"],["addressLine2","info.addresses[0].address.addressLine2","testing"],["city","info.addresses[0].address.city","testing"],["subdivision","info.addresses[0].address.subdivision","testing"],["postalCode","info.addresses[0].address.postalCode","testing"],["country","info.addresses[0].address.country","testing"],["latitude","info.addresses[0].address.location.latitude","testing"],["longitude","info.addresses[0].address.location.longitude","testing"]];
// let assinmentPathArray = [["KEY.name", "KEY.path", "KEY.index", "KEY.ruMePath", "KEY.ruMeCode"], ["email", "primaryInfo.email", "", "NNULL", ""], ["phone", "primaryInfo.phone", "", "NNULL", ""], ["INSTANTIATE_OBJECT", "info", "", "NULL", "eval('{}')"], ["INSTANTIATE_OBJECT", "info.name", "", "name.first", "eval('{}')"], ["first", "info.name.first", "", "name.first", ""], ["last", "info.name.last", "", "name.last", ""], ["company", "info.company", "", "company", ""], ["jobTitle", "info.jobTitle", "", "jobTitle", ""], ["locale", "info.locale", "", "locale", ""], ["birthdate", "info.birthdate", "", "birthdate", ""], ["INSTANTIATE_ARRAY", "info.emails", "", "NNULL", "eval('[]')"], ["INSTANTIATE_ELEMENT_OBJECT", "info.emails[i]", "i", "NNULL", "eval('{}')"], ["_id", "info.emails._id", "i", "NNULL", ""], ["tag", "info.emails.tag", "i", "i-TBD", ""], ["email", "info.emails.email", "i", "i-TBD", ""], ["primary", "info.emails.primary", "i", "i-TBD", ""], ["INSTANTIATE_ELEMENT_OBJECT", "info.emails[i]", 0, "NNULL", "eval('{}')"], ["_id", "info.emails._id", 0, "NNULL", ""], ["tag", "info.emails.tag", 0, "NNULL", "eval('othER')"], ["email", "info.emails.email", 0, "email", ""], ["primary", "info.emails.primary", 0, "NNULL", ""], ["INSTANTIATE_ELEMENT_OBJECT", "info.emails[i]", 1, "NNULL", "eval('{}')"], ["_id", "info.emails._id", 1, "NNULL", ""], ["tag", "info.emails.tag", 1, "NNULL", "eval('Login')"], ["email", "info.emails.email", 1, "emailPrimary", ""], ["primary", "info.emails.primary", 1, "NNULL", "eval(true)"], ["INSTANTIATE_ARRAY", "info.phones", "", "NNULL", "eval('[]')"], ["INSTANTIATE_ELEMENT_OBJECT", "info.phones[i]", "i", "NNULL", "eval('{}')"], ["_id", "info.phones._id", "i", "NNULL", ""], ["tag", "info.phones.tag", "i", "i-TBD", ""], ["phone", "info.phones.phone", "i", "i-TBD", ""], ["primary", "info.phones.primary", "i", "i-TBD", ""], ["INSTANTIATE_ELEMENT_OBJECT", "info.phones[i]", 0, "NNULL", "eval('{}')"], ["_id", "info.phones._id", 0, "NNULL", ""], ["tag", "info.phones.tag", 0, "NNULL", "eval('cell')"], ["phone", "info.phones.phone", 0, "cell", ""], ["primary", "info.phones.primary", 0, "NNULL", "eval(true)"], ["INSTANTIATE_ELEMENT_OBJECT", "info.phones[i]", 1, "NNULL", "eval('{}')"], ["_id", "info.phones._id", 1, "NNULL", ""], ["tag", "info.phones.tag", 1, "NNULL", "eval('home')"], ["phone", "info.phones.phone", 1, "phone", ""], ["primary", "info.phones.primary", 1, "NNULL", "eval(true)"], ["INSTANTIATE_ARRAY", "info.addresses", "i", "NNULL", "eval('[]')"], ["INSTANTIATE_ELEMENT_OBJECT", "info.addresses[i]", "i", "NNULL", ""], ["_id", "info.addresses._id", "i", "NNULL", ""], ["tag", "info.addresses.tag", "i", "i-TBD", ""], ["INSTANTIATE_OBJECT", "info.addresses.address", "i", "NNULL", "eval('{}')"], ["formatted", "info.addresses.address.formatted", "i", "i-TBD", ""], ["streetAddress", "info.addresses.address.streetAddress", "i", "NULL", "eval('{}')"], ["number", "info.addresses.address.streetAddress.number", "i", "location.street.number", ""], ["name", "info.addresses.address.streetAddress.name", "i", "location.street.name", ""], ["apt", "info.addresses.address.streetAddress.apt", "i", "location.street.apt", ""], ["addressLine2", "info.addresses.address.addressLine2", "i", "NA", ""], ["city", "info.addresses.address.city", "i", "location.city", ""], ["subdivision", "info.addresses.address.subdivision", "i", "location.subdivision", ""], ["postalCode", "info.addresses.address.postalCode", "i", "location.postalCode", ""], ["country", "info.addresses.address.country", "i", "location.country", ""], ["location", "info.addresses.address", "i", "NNULL", "eval('{}')"], ["latitude", "info.addresses.address.location.latitude", "i", "coordinates.latitude", ""], ["longitude", "info.addresses.address.location.longitude", "i", "coordinates.longitude", ""], ["INSTANTIATE_ELEMENT_OBJECT", "info.addresses[i]", 0, "NNULL", ""], ["_id", "info.addresses._id", 0, "NNULL", ""], ["tag", "info.addresses.tag", 0, "NNULL", "eval('home')"], ["INSTANTIATE_OBJECT", "info.addresses.address", 0, "NNULL", "eval('{}')"], ["formatted", "info.addresses.address.formatted", 0, "NNULL", ""], ["INSTANTIATE_OBJECT", "info.addresses.address.streetAddress", 0, "NULL", "eval('{}')"], ["number", "info.addresses.address.streetAddress.number", 0, "location.street.number", ""], ["name", "info.addresses.address.streetAddress.name", 0, "location.street.name", ""], ["apt", "info.addresses.address.streetAddress.apt", 0, "location.street.apt", ""], ["addressLine2", "info.addresses.address.addressLine2", 0, "location.addressLine2", ""], ["city", "info.addresses.address.city", 0, "location.city", ""], ["subdivision", "info.addresses.address.subdivision", 0, "location.subdivision", ""], ["postalCode", "info.addresses.address.postalCode", 0, "location.postalCode", ""], ["country", "info.addresses.address.country", 0, "location.country", ""], ["INSTANTIATE_OBJECT", "info.addresses.address.location", 0, "NNULL", "eval('{}')"], ["latitude", "info.addresses.address.location.latitude", 0, "coordinates.latitude", ""], ["longitude", "info.addresses.address.location.longitude", 0, "coordinates.longitude", ""]];
// let assinmentPathArray = [["KEY.name", "KEY.path", "KEY.index", "KEY.ruMePath", "KEY.ruMeCode", "KEY.uiKey"], ["email", "primaryInfo.email", "NNULL", "NNULL", "NNULL", "NNULL"], ["phone", "primaryInfo.phone", "NNULL", "NNULL", "NNULL", "NNULL"], ["INSTANTIATE_OBJECT", "info", "NNULL", "NULL", "eval('{}')", "NNULL"], ["INSTANTIATE_OBJECT", "info.name", "NNULL", "name.first", "eval('{}')", "NNULL"], ["first", "info.name.first", "NNULL", "name.first", "NNULL", "first"], ["last", "info.name.last", "NNULL", "name.last", "NNULL", "last"], ["company", "info.company", "NNULL", "company", "NNULL", "company"], ["jobTitle", "info.jobTitle", "NNULL", "jobTitle", "NNULL", "jobTitle"], ["locale", "info.locale", "NNULL", "locale", "NNULL", "locale"], ["birthdate", "info.birthdate", "NNULL", "birthdate", "NNULL", "birthdate"], ["INSTANTIATE_ARRAY", "info.emails", "NNULL", "NNULL", "eval('[]')", "NNULL"], ["INSTANTIATE_ELEMENT_OBJECT", "info.emails[i]", "i", "NNULL", "eval('{}')", "NNULL"], ["_id", "info.emails._id", "i", "NNULL", "NNULL", "NNULL"], ["tag", "info.emails.tag", "i", "i-TBD", "NNULL", "NNULL"], ["email", "info.emails.email", "i", "i-TBD", "NNULL", "NNULL"], ["primary", "info.emails.primary", "i", "i-TBD", "NNULL", "NNULL"], ["INSTANTIATE_ELEMENT_OBJECT", "info.emails[i]", 0, "NNULL", "eval('{}')", "NNULL"], ["_id", "info.emails._id", 0, "NNULL", "NNULL", "NNULL"], ["tag", "info.emails.tag", 0, "NNULL", "eval('othER')", "email"], ["email", "info.emails.email", 0, "email", "NNULL", "email"], ["primary", "info.emails.primary", 0, "NNULL", "NNULL", "email"], ["INSTANTIATE_ELEMENT_OBJECT", "info.emails[i]", 1, "NNULL", "eval('{}')", "NNULL"], ["_id", "info.emails._id", 1, "NNULL", "NNULL", "NNULL"], ["tag", "info.emails.tag", 1, "NNULL", "eval('Login')", "emailP"], ["email", "info.emails.email", 1, "emailPrimary", "NNULL", "emailP"], ["primary", "info.emails.primary", 1, "NNULL", "eval(true)", "emailP"], ["INSTANTIATE_ARRAY", "info.phones", "NNULL", "NNULL", "eval('[]')", "NNULL"], ["INSTANTIATE_ELEMENT_OBJECT", "info.phones[i]", "i", "NNULL", "eval('{}')", "NNULL"], ["_id", "info.phones._id", "i", "NNULL", "NNULL", "NNULL"], ["tag", "info.phones.tag", "i", "i-TBD", "NNULL", "NNULL"], ["phone", "info.phones.phone", "i", "i-TBD", "NNULL", "NNULL"], ["primary", "info.phones.primary", "i", "i-TBD", "NNULL", "NNULL"], ["INSTANTIATE_ELEMENT_OBJECT", "info.phones[i]", 0, "NNULL", "eval('{}')", "NNULL"], ["_id", "info.phones._id", 0, "NNULL", "NNULL", "NNULL"], ["tag", "info.phones.tag", 0, "NNULL", "eval('cell')", "phoneP"], ["phone", "info.phones.phone", 0, "cell", "NNULL", "phoneP"], ["primary", "info.phones.primary", 0, "NNULL", "eval(true)", "phoneP"], ["INSTANTIATE_ELEMENT_OBJECT", "info.phones[i]", 1, "NNULL", "eval('{}')", "NNULL"], ["_id", "info.phones._id", 1, "NNULL", "NNULL", "NNULL"], ["tag", "info.phones.tag", 1, "NNULL", "eval('home')", "phone"], ["phone", "info.phones.phone", 1, "phone", "NNULL", "phone"], ["primary", "info.phones.primary", 1, "NNULL", "eval(true)", "phone"], ["INSTANTIATE_ARRAY", "info.addresses", "i", "NNULL", "eval('[]')", "NNULL"], ["INSTANTIATE_ELEMENT_OBJECT", "info.addresses[i]", "i", "NNULL", "NNULL", "NNULL"], ["_id", "info.addresses._id", "i", "NNULL", "NNULL", "NNULL"], ["tag", "info.addresses.tag", "i", "i-TBD", "NNULL", "NNULL"], ["INSTANTIATE_OBJECT", "info.addresses.address", "i", "NNULL", "eval('{}')", "NNULL"], ["formatted", "info.addresses.address.formatted", "i", "i-TBD", "NNULL", "NNULL"], ["streetAddress", "info.addresses.address.streetAddress", "i", "NULL", "eval('{}')", "NNULL"], ["number", "info.addresses.address.streetAddress.number", "i", "location.street.number", "NNULL", "NNULL"], ["name", "info.addresses.address.streetAddress.name", "i", "location.street.name", "NNULL", "NNULL"], ["apt", "info.addresses.address.streetAddress.apt", "i", "location.street.apt", "NNULL", "NNULL"], ["addressLine2", "info.addresses.address.addressLine2", "i", "NA", "NNULL", "NNULL"], ["city", "info.addresses.address.city", "i", "location.city", "NNULL", "NNULL"], ["subdivision", "info.addresses.address.subdivision", "i", "location.subdivision", "NNULL", "NNULL"], ["postalCode", "info.addresses.address.postalCode", "i", "location.postalCode", "NNULL", "NNULL"], ["country", "info.addresses.address.country", "i", "location.country", "NNULL", "NNULL"], ["location", "info.addresses.address", "i", "NNULL", "eval('{}')", "NNULL"], ["latitude", "info.addresses.address.location.latitude", "i", "coordinates.latitude", "NNULL", "NNULL"], ["longitude", "info.addresses.address.location.longitude", "i", "coordinates.longitude", "NNULL", "NNULL"], ["INSTANTIATE_ELEMENT_OBJECT", "info.addresses[i]", 0, "NNULL", "NNULL", "NNULL"], ["_id", "info.addresses._id", 0, "NNULL", "NNULL", "NNULL"], ["tag", "info.addresses.tag", 0, "NNULL", "eval('home')", "address"], ["INSTANTIATE_OBJECT", "info.addresses.address", 0, "NNULL", "eval('{}')", "address"], ["formatted", "info.addresses.address.formatted", 0, "NNULL", "NNULL", "address"], ["INSTANTIATE_OBJECT", "info.addresses.address.streetAddress", 0, "NULL", "eval('{}')", "address"], ["number", "info.addresses.address.streetAddress.number", 0, "location.street.number", "NNULL", "address"], ["name", "info.addresses.address.streetAddress.name", 0, "location.street.name", "NNULL", "address"], ["apt", "info.addresses.address.streetAddress.apt", 0, "location.street.apt", "NNULL", "address"], ["addressLine2", "info.addresses.address.addressLine2", 0, "location.addressLine2", "NNULL", "address"], ["city", "info.addresses.address.city", 0, "location.city", "NNULL", "address"], ["subdivision", "info.addresses.address.subdivision", 0, "location.subdivision", "NNULL", "address"], ["postalCode", "info.addresses.address.postalCode", 0, "location.postalCode", "NNULL", "address"], ["country", "info.addresses.address.country", 0, "location.country", "NNULL", "address"], ["INSTANTIATE_OBJECT", "info.addresses.address.location", 0, "NNULL", "eval('{}')", "address"], ["latitude", "info.addresses.address.location.latitude", 0, "coordinates.latitude", "NNULL", "address"], ["longitude", "info.addresses.address.location.longitude", 0, "coordinates.longitude", "NNULL", "address"]];
/*20210504115000*/// let assinmentPathArray = [["KEY.name","KEY.path","KEY.index","KEY.ruMePath","KEY.ruMeCode","KEY.uiKey"],["email","primaryInfo.email","NNULL","NNULL","NNULL","NNULL"],["phone","primaryInfo.phone","NNULL","NNULL","NNULL","NNULL"],["INSTANTIATE_OBJECT","info","NNULL","NULL","eval('{}')","NNULL"],["INSTANTIATE_OBJECT","info.name","NNULL","name.first","eval('{}')","NNULL"],["first","info.name.first","NNULL","name.first","NNULL","first"],["last","info.name.last","NNULL","name.last","NNULL","last"],["company","info.company","NNULL","company","NNULL","company"],["jobTitle","info.jobTitle","NNULL","jobTitle","NNULL","jobTitle"],["locale","info.locale","NNULL","locale","NNULL","locale"],["birthdate","info.birthdate","NNULL","birthdate","NNULL","birthdate"],["INSTANTIATE_ARRAY","info.emails","NNULL","NNULL","eval('[]')","NNULL"],["INSTANTIATE_OBJECT","info.emails[i]","i","NNULL","eval('{}')","NNULL"],["_id","info.emails._id","i","NNULL","NNULL","NNULL"],["tag","info.emails.tag","i","i-TBD","NNULL","NNULL"],["email","info.emails.email","i","i-TBD","NNULL","NNULL"],["primary","info.emails.primary","i","i-TBD","NNULL","NNULL"],["INSTANTIATE_OBJECT","info.emails[i]",0,"NNULL","eval('{}')","NNULL"],["_id","info.emails._id",0,"NNULL","NNULL","NNULL"],["tag","info.emails.tag",0,"NNULL","eval('othER')","email"],["email","info.emails.email",0,"email","NNULL","email"],["primary","info.emails.primary",0,"NNULL","NNULL","email"],["INSTANTIATE_OBJECT","info.emails[i]",1,"NNULL","eval('{}')","NNULL"],["_id","info.emails._id",1,"NNULL","NNULL","NNULL"],["tag","info.emails.tag",1,"NNULL","eval('Login')","emailP"],["email","info.emails.email",1,"emailPrimary","NNULL","emailP"],["primary","info.emails.primary",1,"NNULL","eval(true)","emailP"],["INSTANTIATE_ARRAY","info.phones","NNULL","NNULL","eval('[]')","NNULL"],["INSTANTIATE_OBJECT","info.phones[i]","i","NNULL","eval('{}')","NNULL"],["_id","info.phones._id","i","NNULL","NNULL","NNULL"],["tag","info.phones.tag","i","i-TBD","NNULL","NNULL"],["phone","info.phones.phone","i","i-TBD","NNULL","NNULL"],["primary","info.phones.primary","i","i-TBD","NNULL","NNULL"],["INSTANTIATE_OBJECT","info.phones[i]",0,"NNULL","eval('{}')","NNULL"],["_id","info.phones._id",0,"NNULL","NNULL","NNULL"],["tag","info.phones.tag",0,"NNULL","eval('cell')","phoneP"],["phone","info.phones.phone",0,"cell","NNULL","phoneP"],["primary","info.phones.primary",0,"NNULL","eval(true)","phoneP"],["INSTANTIATE_OBJECT","info.phones[i]",1,"NNULL","eval('{}')","NNULL"],["_id","info.phones._id",1,"NNULL","NNULL","NNULL"],["tag","info.phones.tag",1,"NNULL","eval('home')","phone"],["phone","info.phones.phone",1,"phone","NNULL","phone"],["primary","info.phones.primary",1,"NNULL","eval(true)","phone"],["INSTANTIATE_ARRAY","info.addresses","i","NNULL","eval('[]')","NNULL"],["INSTANTIATE_OBJECT","info.addresses[i]","i","NNULL","NNULL","NNULL"],["_id","info.addresses._id","i","NNULL","NNULL","NNULL"],["tag","info.addresses.tag","i","i-TBD","NNULL","NNULL"],["INSTANTIATE_OBJECT","info.addresses.address","i","NNULL","eval('{}')","NNULL"],["formatted","info.addresses.address.formatted","i","i-TBD","NNULL","NNULL"],["streetAddress","info.addresses.address.streetAddress","i","NULL","eval('{}')","NNULL"],["number","info.addresses.address.streetAddress.number","i","location.street.number","NNULL","NNULL"],["name","info.addresses.address.streetAddress.name","i","location.street.name","NNULL","NNULL"],["apt","info.addresses.address.streetAddress.apt","i","location.street.apt","NNULL","NNULL"],["addressLine2","info.addresses.address.addressLine2","i","NA","NNULL","NNULL"],["city","info.addresses.address.city","i","location.city","NNULL","NNULL"],["subdivision","info.addresses.address.subdivision","i","location.subdivision","NNULL","NNULL"],["postalCode","info.addresses.address.postalCode","i","location.postalCode","NNULL","NNULL"],["country","info.addresses.address.country","i","location.country","NNULL","NNULL"],["location","info.addresses.address","i","NNULL","eval('{}')","NNULL"],["latitude","info.addresses.address.location.latitude","i","coordinates.latitude","NNULL","NNULL"],["longitude","info.addresses.address.location.longitude","i","coordinates.longitude","NNULL","NNULL"],["INSTANTIATE_OBJECT","info.addresses[i]",0,"NNULL","NNULL","NNULL"],["_id","info.addresses._id",0,"NNULL","NNULL","NNULL"],["tag","info.addresses.tag",0,"NNULL","eval('home')","address"],["INSTANTIATE_OBJECT","info.addresses.address",0,"NNULL","eval('{}')","address"],["formatted","info.addresses.address.formatted",0,"NNULL","NNULL","address"],["INSTANTIATE_OBJECT","info.addresses.address.streetAddress",0,"NULL","eval('{}')","address"],["number","info.addresses.address.streetAddress.number",0,"location.street.number","NNULL","address"],["name","info.addresses.address.streetAddress.name",0,"location.street.name","NNULL","address"],["apt","info.addresses.address.streetAddress.apt",0,"location.street.apt","NNULL","address"],["addressLine2","info.addresses.address.addressLine2",0,"location.addressLine2","NNULL","address"],["city","info.addresses.address.city",0,"location.city","NNULL","address"],["subdivision","info.addresses.address.subdivision",0,"location.subdivision","NNULL","address"],["postalCode","info.addresses.address.postalCode",0,"location.postalCode","NNULL","address"],["country","info.addresses.address.country",0,"location.country","NNULL","address"],["INSTANTIATE_OBJECT","info.addresses.address.location",0,"NNULL","eval('{}')","address"],["latitude","info.addresses.address.location.latitude",0,"coordinates.latitude","NNULL","address"],["longitude","info.addresses.address.location.longitude",0,"coordinates.longitude","NNULL","address"]];
// /*TESTING: 20210504125500*/ let assinmentPathArray = [["KEY.name", "KEY.path", "KEY.index", "KEY.ruMePath", "KEY.ruMeCode", "KEY.uiKey"], ["email", "primaryInfo.email", "NNULL", "NNULL", "NNULL", "NNULL"], ["phone", "primaryInfo.phone", "NNULL", "NNULL", "NNULL", "NNULL"], ["INSTANTIATE_OBJECT", "info", "NNULL", "NULL", "eval('{}')", "NNULL"], ["INSTANTIATE_OBJECT", "info.name", "NNULL", "name.first", "eval('{}')", "NNULL"], ["first", "info.name.first", "NNULL", "name.first", "NNULL", "first"], ["last", "info.name.last", "NNULL", "name.last", "NNULL", "last"], ["company", "info.company", "NNULL", "company", "NNULL", "company"], ["jobTitle", "info.jobTitle", "NNULL", "jobTitle", "NNULL", "jobTitle"], ["locale", "info.locale", "NNULL", "locale", "NNULL", "locale"], ["birthdate", "info.birthdate", "NNULL", "birthdate", "NNULL", "birthdate"], ["INSTANTIATE_ARRAY", "info.emails", "NNULL", "NNULL", "eval('[]')", "NNULL"], ["INSTANTIATE_OBJECT", "info.emails.i", "i", "NNULL", "eval('{}')", "NNULL"], ["_id", "info.emails._id", "i", "NNULL", "NNULL", "NNULL"], ["tag", "info.emails.tag", "i", "i-TBD", "NNULL", "NNULL"], ["email", "info.emails.email", "i", "i-TBD", "NNULL", "NNULL"], ["primary", "info.emails.primary", "i", "i-TBD", "NNULL", "NNULL"], ["INSTANTIATE_OBJECT", "info.emails.i", 0, "NNULL", "eval('{}')", "NNULL"], ["_id", "info.emails.i._id", 0, "NNULL", "NNULL", "NNULL"], ["tag", "info.emails.i.tag", 0, "NNULL", "eval('othER')", "email"], ["email", "info.emails.i.email", 0, "email", "NNULL", "email"], ["primary", "info.emails.i.primary", 0, "NNULL", "NNULL", "email"], ["INSTANTIATE_OBJECT", "info.emails.i", 1, "NNULL", "eval('{}')", "NNULL"], ["_id", "info.emails.i._id", 1, "NNULL", "NNULL", "NNULL"], ["tag", "info.emails.i.tag", 1, "NNULL", "eval('Login')", "emailP"], ["email", "info.emails.i.email", 1, "emailPrimary", "NNULL", "emailP"], ["primary", "info.emails.i.primary", 1, "NNULL", "eval(true)", "emailP"], ["INSTANTIATE_ARRAY", "info.phones", "NNULL", "NNULL", "eval('[]')", "NNULL"], ["INSTANTIATE_OBJECT", "info.phones[i]", "i", "NNULL", "eval('{}')", "NNULL"], ["_id", "info.phones._id", "i", "NNULL", "NNULL", "NNULL"], ["tag", "info.phones.tag", "i", "i-TBD", "NNULL", "NNULL"], ["phone", "info.phones.phone", "i", "i-TBD", "NNULL", "NNULL"], ["primary", "info.phones.primary", "i", "i-TBD", "NNULL", "NNULL"], ["INSTANTIATE_OBJECT", "info.phones[i]", 0, "NNULL", "eval('{}')", "NNULL"], ["_id", "info.phones._id", 0, "NNULL", "NNULL", "NNULL"], ["tag", "info.phones.tag", 0, "NNULL", "eval('cell')", "phoneP"], ["phone", "info.phones.phone", 0, "cell", "NNULL", "phoneP"], ["primary", "info.phones.primary", 0, "NNULL", "eval(true)", "phoneP"], ["INSTANTIATE_OBJECT", "info.phones[i]", 1, "NNULL", "eval('{}')", "NNULL"], ["_id", "info.phones._id", 1, "NNULL", "NNULL", "NNULL"], ["tag", "info.phones.tag", 1, "NNULL", "eval('home')", "phone"], ["phone", "info.phones.phone", 1, "phone", "NNULL", "phone"], ["primary", "info.phones.primary", 1, "NNULL", "eval(true)", "phone"], ["INSTANTIATE_ARRAY", "info.addresses", "i", "NNULL", "eval('[]')", "NNULL"], ["INSTANTIATE_OBJECT", "info.addresses[i]", "i", "NNULL", "NNULL", "NNULL"], ["_id", "info.addresses._id", "i", "NNULL", "NNULL", "NNULL"], ["tag", "info.addresses.tag", "i", "i-TBD", "NNULL", "NNULL"], ["INSTANTIATE_OBJECT", "info.addresses.address", "i", "NNULL", "eval('{}')", "NNULL"], ["formatted", "info.addresses.address.formatted", "i", "i-TBD", "NNULL", "NNULL"], ["streetAddress", "info.addresses.address.streetAddress", "i", "NULL", "eval('{}')", "NNULL"], ["number", "info.addresses.address.streetAddress.number", "i", "location.street.number", "NNULL", "NNULL"], ["name", "info.addresses.address.streetAddress.name", "i", "location.street.name", "NNULL", "NNULL"], ["apt", "info.addresses.address.streetAddress.apt", "i", "location.street.apt", "NNULL", "NNULL"], ["addressLine2", "info.addresses.address.addressLine2", "i", "NA", "NNULL", "NNULL"], ["city", "info.addresses.address.city", "i", "location.city", "NNULL", "NNULL"], ["subdivision", "info.addresses.address.subdivision", "i", "location.subdivision", "NNULL", "NNULL"], ["postalCode", "info.addresses.address.postalCode", "i", "location.postalCode", "NNULL", "NNULL"], ["country", "info.addresses.address.country", "i", "location.country", "NNULL", "NNULL"], ["location", "info.addresses.address", "i", "NNULL", "eval('{}')", "NNULL"], ["latitude", "info.addresses.address.location.latitude", "i", "coordinates.latitude", "NNULL", "NNULL"], ["longitude", "info.addresses.address.location.longitude", "i", "coordinates.longitude", "NNULL", "NNULL"], ["INSTANTIATE_OBJECT", "info.addresses[i]", 0, "NNULL", "NNULL", "NNULL"], ["_id", "info.addresses._id", 0, "NNULL", "NNULL", "NNULL"], ["tag", "info.addresses.tag", 0, "NNULL", "eval('home')", "address"], ["INSTANTIATE_OBJECT", "info.addresses.address", 0, "NNULL", "eval('{}')", "address"], ["formatted", "info.addresses.address.formatted", 0, "NNULL", "NNULL", "address"], ["INSTANTIATE_OBJECT", "info.addresses.address.streetAddress", 0, "NULL", "eval('{}')", "address"], ["number", "info.addresses.address.streetAddress.number", 0, "location.street.number", "NNULL", "address"], ["name", "info.addresses.address.streetAddress.name", 0, "location.street.name", "NNULL", "address"], ["apt", "info.addresses.address.streetAddress.apt", 0, "location.street.apt", "NNULL", "address"], ["addressLine2", "info.addresses.address.addressLine2", 0, "location.addressLine2", "NNULL", "address"], ["city", "info.addresses.address.city", 0, "location.city", "NNULL", "address"], ["subdivision", "info.addresses.address.subdivision", 0, "location.subdivision", "NNULL", "address"], ["postalCode", "info.addresses.address.postalCode", 0, "location.postalCode", "NNULL", "address"], ["country", "info.addresses.address.country", 0, "location.country", "NNULL", "address"], ["INSTANTIATE_OBJECT", "info.addresses.address.location", 0, "NNULL", "eval('{}')", "address"], ["latitude", "info.addresses.address.location.latitude", 0, "coordinates.latitude", "NNULL", "address"], ["longitude", "info.addresses.address.location.longitude", 0, "coordinates.longitude", "NNULL", "address"]];
///*TESTING_CHOP: 20210504125500*/ let assinmentPathArray = [["KEY.name", "KEY.path", "KEY.index", "KEY.ruMePath", "KEY.ruMeCode", "KEY.uiKey"], ["INSTANTIATE_OBJECT", "info", "NNULL", "NULL", "eval('{}')", "NNULL"], ["INSTANTIATE_ARRAY", "info.emails", "NNULL", "NNULL", "eval('[]')", "NNULL"], ["INSTANTIATE_OBJECT", "info.emails.i", "i", "NNULL", "eval('{}')", "NNULL"], ["_id", "info.emails._id", "i", "NNULL", "NNULL", "NNULL"], ["tag", "info.emails.tag", "i", "i-TBD", "NNULL", "NNULL"], ["email", "info.emails.email", "i", "i-TBD", "NNULL", "NNULL"], ["primary", "info.emails.primary", "i", "i-TBD", "NNULL", "NNULL"], ["INSTANTIATE_OBJECT", "info.emails.i", 0, "NNULL", "eval('{}')", "NNULL"], ["_id", "info.emails.i._id", 0, "NNULL", "NNULL", "NNULL"], ["tag", "info.emails.i.tag", 0, "NNULL", "eval('othER')", "email"], ["email", "info.emails.i.email", 0, "email", "NNULL", "email"], ["primary", "info.emails.i.primary", 0, "NNULL", "NNULL", "email"], ["INSTANTIATE_OBJECT", "info.emails.i", 1, "NNULL", "eval('{}')", "NNULL"], ["_id", "info.emails.i._id", 1, "NNULL", "NNULL", "NNULL"], ["tag", "info.emails.i.tag", 1, "NNULL", "new String('Login')", "emailP"], ["email", "info.emails.i.email", 1, "emailPrimary", "NNULL", "emailP"], ["primary", "info.emails.i.primary", 1, "NNULL", "eval(true)", "emailP"], ["INSTANTIATE_ARRAY", "info.phones", "NNULL", "NNULL", "eval('[]')", "NNULL"], ["INSTANTIATE_OBJECT", "info.phones[i]", "i", "NNULL", "eval('{}')", "NNULL"], ["_id", "info.phones._id", "i", "NNULL", "NNULL", "NNULL"], ["tag", "info.phones.tag", "i", "i-TBD", "NNULL", "NNULL"], ["phone", "info.phones.phone", "i", "i-TBD", "NNULL", "NNULL"], ["primary", "info.phones.primary", "i", "i-TBD", "NNULL", "NNULL"], ["INSTANTIATE_OBJECT", "info.phones[i]", 0, "NNULL", "eval('{}')", "NNULL"], ["_id", "info.phones._id", 0, "NNULL", "NNULL", "NNULL"], ["tag", "info.phones.tag", 0, "NNULL", "eval('cell')", "phoneP"], ["phone", "info.phones.phone", 0, "cell", "NNULL", "phoneP"], ["primary", "info.phones.primary", 0, "NNULL", "eval(true)", "phoneP"], ["INSTANTIATE_OBJECT", "info.phones[i]", 1, "NNULL", "eval('{}')", "NNULL"], ["_id", "info.phones._id", 1, "NNULL", "NNULL", "NNULL"], ["tag", "info.phones.tag", 1, "NNULL", "eval('home')", "phone"], ["phone", "info.phones.phone", 1, "phone", "NNULL", "phone"], ["primary", "info.phones.primary", 1, "NNULL", "eval(true)", "phone"], ["INSTANTIATE_ARRAY", "info.addresses", "i", "NNULL", "eval('[]')", "NNULL"], ["INSTANTIATE_OBJECT", "info.addresses[i]", "i", "NNULL", "NNULL", "NNULL"], ["_id", "info.addresses._id", "i", "NNULL", "NNULL", "NNULL"], ["tag", "info.addresses.tag", "i", "i-TBD", "NNULL", "NNULL"], ["INSTANTIATE_OBJECT", "info.addresses.address", "i", "NNULL", "eval('{}')", "NNULL"], ["formatted", "info.addresses.address.formatted", "i", "i-TBD", "NNULL", "NNULL"], ["streetAddress", "info.addresses.address.streetAddress", "i", "NULL", "eval('{}')", "NNULL"], ["number", "info.addresses.address.streetAddress.number", "i", "location.street.number", "NNULL", "NNULL"], ["name", "info.addresses.address.streetAddress.name", "i", "location.street.name", "NNULL", "NNULL"], ["apt", "info.addresses.address.streetAddress.apt", "i", "location.street.apt", "NNULL", "NNULL"], ["addressLine2", "info.addresses.address.addressLine2", "i", "NA", "NNULL", "NNULL"], ["city", "info.addresses.address.city", "i", "location.city", "NNULL", "NNULL"], ["subdivision", "info.addresses.address.subdivision", "i", "location.subdivision", "NNULL", "NNULL"], ["postalCode", "info.addresses.address.postalCode", "i", "location.postalCode", "NNULL", "NNULL"], ["country", "info.addresses.address.country", "i", "location.country", "NNULL", "NNULL"], ["location", "info.addresses.address", "i", "NNULL", "eval('{}')", "NNULL"], ["latitude", "info.addresses.address.location.latitude", "i", "coordinates.latitude", "NNULL", "NNULL"], ["longitude", "info.addresses.address.location.longitude", "i", "coordinates.longitude", "NNULL", "NNULL"], ["INSTANTIATE_OBJECT", "info.addresses[i]", 0, "NNULL", "NNULL", "NNULL"], ["_id", "info.addresses._id", 0, "NNULL", "NNULL", "NNULL"], ["tag", "info.addresses.tag", 0, "NNULL", "eval('home')", "address"], ["INSTANTIATE_OBJECT", "info.addresses.address", 0, "NNULL", "eval('{}')", "address"], ["formatted", "info.addresses.address.formatted", 0, "NNULL", "NNULL", "address"], ["INSTANTIATE_OBJECT", "info.addresses.address.streetAddress", 0, "NULL", "eval('{}')", "address"], ["number", "info.addresses.address.streetAddress.number", 0, "location.street.number", "NNULL", "address"], ["name", "info.addresses.address.streetAddress.name", 0, "location.street.name", "NNULL", "address"], ["apt", "info.addresses.address.streetAddress.apt", 0, "location.street.apt", "NNULL", "address"], ["addressLine2", "info.addresses.address.addressLine2", 0, "location.addressLine2", "NNULL", "address"], ["city", "info.addresses.address.city", 0, "location.city", "NNULL", "address"], ["subdivision", "info.addresses.address.subdivision", 0, "location.subdivision", "NNULL", "address"], ["postalCode", "info.addresses.address.postalCode", 0, "location.postalCode", "NNULL", "address"], ["country", "info.addresses.address.country", 0, "location.country", "NNULL", "address"], ["INSTANTIATE_OBJECT", "info.addresses.address.location", 0, "NNULL", "eval('{}')", "address"], ["latitude", "info.addresses.address.location.latitude", 0, "coordinates.latitude", "NNULL", "address"], ["longitude", "info.addresses.address.location.longitude", 0, "coordinates.longitude", "NNULL", "address"]];
// /*TESTING: 20210505132300*/ let assinmentPathArray = [["KEY.name","KEY.path","KEY.index","KEY.ruMePath","KEY.ruMeCode","KEY.uiKey"],["email","primaryInfo.email","NNULL","NNULL","NNULL","NNULL"],["phone","primaryInfo.phone","NNULL","NNULL","NNULL","NNULL"],["INSTANTIATE_OBJECT","info","NNULL","NULL","eval('{}')","NNULL"],["INSTANTIATE_OBJECT","info.name","NNULL","name.first","eval('{}')","NNULL"],["first","info.name.first","NNULL","name.first","NNULL","first"],["last","info.name.last","NNULL","name.last","NNULL","last"],["company","info.company","NNULL","company","NNULL","company"],["jobTitle","info.jobTitle","NNULL","jobTitle","NNULL","jobTitle"],["locale","info.locale","NNULL","locale","NNULL","locale"],["birthdate","info.birthdate","NNULL","birthdate","NNULL","birthdate"],["INSTANTIATE_ARRAY","info.emails","NNULL","NNULL","eval('[]')","NNULL"],["INSTANTIATE_OBJECT","info.emails[i]","i","NNULL","eval('{}')","NNULL"],["_id","info.emails._id","i","NNULL","NNULL","NNULL|NEVER"],["tag","info.emails.tag","i","i-TBD","NNULL","NNULL"],["email","info.emails.email","i","i-TBD","NNULL","NNULL"],["primary","info.emails.primary","i","i-TBD","NNULL","NNULL"],["INSTANTIATE_OBJECT","info.emails[i]",0,"NNULL","eval('{}')","email"],["_id","info.emails._id",0,"NNULL","NNULL","email|NEVER"],["tag","info.emails.tag",0,"NNULL","new String('othER')","email"],["email","info.emails.email",0,"email","NNULL","email"],["primary","info.emails.primary",0,"NNULL","NNULL","email"],["INSTANTIATE_OBJECT","info.emails[i]",1,"NNULL","eval('{}')","emailP"],["_id","info.emails._id",1,"NNULL","NNULL","emailP|NEVER"],["tag","info.emails.tag",1,"NNULL","new String('Login')","emailP"],["email","info.emails.email",1,"emailPrimary","NNULL","emailP"],["primary","info.emails.primary",1,"NNULL","eval(true)","emailP"],["INSTANTIATE_ARRAY","info.phones","NNULL","NNULL","eval('[]')","NNULL"],["INSTANTIATE_OBJECT","info.phones[i]","i","NNULL","eval('{}')","NNULL|NEVER"],["_id","info.phones._id","i","NNULL","NNULL","NNULL"],["tag","info.phones.tag","i","i-TBD","NNULL","NNULL"],["phone","info.phones.phone","i","i-TBD","NNULL","NNULL"],["primary","info.phones.primary","i","i-TBD","NNULL","NNULL"],["INSTANTIATE_OBJECT","info.phones[i]",0,"NNULL","eval('{}')","phoneP"],["_id","info.phones._id",0,"NNULL","NNULL","phoneP|NEVER"],["tag","info.phones.tag",0,"NNULL","new String('cell')","phoneP"],["phone","info.phones.phone",0,"cell","NNULL","phoneP"],["primary","info.phones.primary",0,"NNULL","eval(true)","phoneP"],["INSTANTIATE_OBJECT","info.phones[i]",1,"NNULL","eval('{}')","phone"],["_id","info.phones._id",1,"NNULL","NNULL","phone|NEVER"],["tag","info.phones.tag",1,"NNULL","new String('home')","phone"],["phone","info.phones.phone",1,"phone","NNULL","phone"],["primary","info.phones.primary",1,"NNULL","eval(true)","phone"],["INSTANTIATE_ARRAY","info.addresses","i","NNULL","eval('[]')","NNULL"],["INSTANTIATE_OBJECT","info.addresses[i]","i","NNULL","NNULL","NNULL"],["_id","info.addresses._id","i","NNULL","NNULL","NNULL"],["tag","info.addresses.tag","i","i-TBD","NNULL","NNULL"],["INSTANTIATE_OBJECT","info.addresses.address","i","NNULL","eval('{}')","NNULL"],["formatted","info.addresses.address.formatted","i","i-TBD","NNULL","NNULL"],["streetAddress","info.addresses.address.streetAddress","i","NULL","eval('{}')","NNULL"],["number","info.addresses.address.streetAddress.number","i","location.street.number","NNULL","NNULL"],["name","info.addresses.address.streetAddress.name","i","location.street.name","NNULL","NNULL"],["apt","info.addresses.address.streetAddress.apt","i","location.street.apt","NNULL","NNULL"],["addressLine2","info.addresses.address.addressLine2","i","NA","NNULL","NNULL"],["city","info.addresses.address.city","i","location.city","NNULL","NNULL"],["subdivision","info.addresses.address.subdivision","i","location.subdivision","NNULL","NNULL"],["postalCode","info.addresses.address.postalCode","i","location.postalCode","NNULL","NNULL"],["country","info.addresses.address.country","i","location.country","NNULL","NNULL"],["location","info.addresses.address","i","NNULL","eval('{}')","NNULL"],["latitude","info.addresses.address.location.latitude","i","coordinates.latitude","NNULL","NNULL"],["longitude","info.addresses.address.location.longitude","i","coordinates.longitude","NNULL","NNULL"],["INSTANTIATE_OBJECT","info.addresses[i]",0,"NNULL","NNULL","address"],["_id","info.addresses._id",0,"NNULL","NNULL","address|NEVER"],["tag","info.addresses.tag",0,"NNULL","new String('home')","address"],["INSTANTIATE_OBJECT","info.addresses.address",0,"NNULL","eval('{}')","address"],["formatted","info.addresses.address.formatted",0,"NNULL","NNULL","address"],["INSTANTIATE_OBJECT","info.addresses.address.streetAddress",0,"NULL","eval('{}')","address"],["number","info.addresses.address.streetAddress.number",0,"location.street.number","NNULL","address"],["name","info.addresses.address.streetAddress.name",0,"location.street.name","NNULL","address"],["apt","info.addresses.address.streetAddress.apt",0,"location.street.apt","NNULL","address"],["addressLine2","info.addresses.address.addressLine2",0,"location.addressLine2","NNULL","address"],["city","info.addresses.address.city",0,"location.city","NNULL","address"],["subdivision","info.addresses.address.subdivision",0,"location.subdivision","NNULL","address"],["postalCode","info.addresses.address.postalCode",0,"location.postalCode","NNULL","address"],["country","info.addresses.address.country",0,"location.country","NNULL","address"],["INSTANTIATE_OBJECT","info.addresses.address.location",0,"NNULL","eval('{}')","address"],["latitude","info.addresses.address.location.latitude",0,"coordinates.latitude","NNULL","address"],["longitude","info.addresses.address.location.longitude",0,"coordinates.longitude","NNULL","address"]];
/*TESTING_CHOP: 20210505132300*/ let assinmentPathArray = [["KEY.name", "KEY.path", "KEY.index", "KEY.ruMePath", "KEY.ruMeCode", "KEY.uiKey"], ["email", "primaryInfo.email", "NNULL", "NNULL", "NNULL", "NNULL"], ["phone", "primaryInfo.phone", "NNULL", "NNULL", "NNULL", "NNULL"], ["INSTANTIATE_OBJECT", "info", "NNULL", "NULL", "eval('{}')", "NNULL"], ["INSTANTIATE_OBJECT", "info.name", "NNULL", "name.first", "eval('{}')", "NNULL"], ["first", "info.name.first", "NNULL", "name.first", "NNULL", "first"], ["last", "info.name.last", "NNULL", "name.last", "NNULL", "last"], ["company", "info.company", "NNULL", "company", "NNULL", "company"], ["jobTitle", "info.jobTitle", "NNULL", "jobTitle", "NNULL", "jobTitle"], ["locale", "info.locale", "NNULL", "locale", "NNULL", "locale"], ["birthdate", "info.birthdate", "NNULL", "birthdate", "NNULL", "birthdate"], ["INSTANTIATE_ARRAY", "info.emails", "NNULL", "NNULL", "eval('[]')", "NNULL"], ["INSTANTIATE_OBJECT", "info.emails[i]", "i", "NNULL", "eval('{}')", "NNULL"], ["_id", "info.emails._id", "i", "NNULL", "NNULL", "NNULL|NEVER"], ["tag", "info.emails.tag", "i", "i-TBD", "NNULL", "NNULL"], ["email", "info.emails.email", "i", "i-TBD", "NNULL", "NNULL"], ["primary", "info.emails.primary", "i", "i-TBD", "NNULL", "NNULL"], ["INSTANTIATE_OBJECT", "info.emails[i]", 0, "NNULL", "eval('{}')", "email"], ["_id", "info.emails.i._id", 0, "NNULL", "NNULL", "email|NEVER"], ["tag", "info.emails.i.tag", 0, "NNULL", "new String('othER')", "email"], ["email", "info.emails.i.email", 0, "email", "NNULL", "email"], ["primary", "info.emails.i.primary", 0, "NNULL", "NNULL", "email"], ["INSTANTIATE_OBJECT", "info.emails[i]", 1, "NNULL", "eval('{}')", "emailP"], ["_id", "info.emails.i._id", 1, "NNULL", "NNULL", "emailP|NEVER"], ["tag", "info.emails.i.tag", 1, "NNULL", "new String('Login')", "emailP"], ["email", "info.emails.i.email", 1, "emailPrimary", "NNULL", "emailP"], ["primary", "info.emails.i.primary", 1, "NNULL", "eval(true)", "emailP"]];
//</likely Parameterized>

let doxKeyElement = assinmentPathArray[0];
let copystring = doxKeyElement.toString()
if (doxKeyElement.toString() === "KEY.name,KEY.path,KEY.index,KEY.ruMePath,KEY.ruMeCode,KEY.uiKey") {
    doxKeyElement = assinmentPathArray.shift();
    // console.log(doxKeyElement.toString());
}
let element = assinmentPathArray[0];
let clElement = "name:'" + element[0] + "',path:'" + element[1] + "', index:'" + element[2] + "', ruMePath:'" + element[3] + "', ruMeCode:'" + element[4] + "'";
let name = '';
let path = '';
let index = '-777';
let ruMePath = '';
let ruMeCode = '';
let uiKey = '';
let value = '';
let processedPathArray = [];
let evalString = '';
// let swEmptyPathCount = 0;
// let swUnchkdCount = 0;
// let swInstObjCount = 0;
// let swIndxICount = 0;
// let swInstArrCount = 0;
// let swInstElmtObjCount = 0;
// let swNullPathCount = 0;
// let swDfltAssigCount = 0;

let emailIndex = 0;
let isEmail = false;
let phoneIndex = 0;
let isPhone = false;
let addressIndex = 0;
let isAddress = false;
for (let forIndex = 0; forIndex < assinmentPathArray.length; forIndex++) {
    element = assinmentPathArray[forIndex];
    clElement = "name:'" + element[0] + "',path:'" + element[1] + "', index:'" + element[2] + "', ruMePath:'" + element[3] + "', ruMeCode:'" + element[4] + "'";
    let forIndexNext = forIndex + 1;
    // elementNext = assinmentPathArray[forIndexNext];
    // clElementNext = "name:'" + elementNext[0] + "',path:'" + elementNext[1] + "', index:'" + elementNext[2] + "', ruMePath:'" + elementNext[3] + "', ruMeCode:'" + elementNext[4] + "'";
    name = element[0];
    path = element[1];
    index = element[2].toString();
    ruMePath = element[3];
    ruMeCode = element[4];
    uiKey = element[5];
    let uiKeyUnChecked = true;
    uiKeyUnChecked = uiKey === 'NNULL' ? false : uiKeyUnChecked;
    uiKeyUnChecked = chkbxKeyArray.includes(uiKey) === true ? false : uiKeyUnChecked;
    value = "as" + name.toUpperCase();
    //<KLUDGEY: but double-check if not corrected in 2d Array>
    //ø    \_ I mean, it is good to have just one word for 'NNULL'
    let overloadPath = ruMePath === 'NNULL' && ruMeCode !== 'NNULL' ? true : false;
    ruMePath = overloadPath ? 'NNA' : ruMePath;
    //</KLUDGEY: but double-check if not corrected in 2d Array>

    let attributeChain = '';
    let indexReplaceString = '';
    let pathSplit = [];
    holderString = "About to Enter SWITCH: ${swDfltAssigCount} Assigned"
    //<most for 'default', but could be useful for other reasons>
    //  \_ there may be other indications, but these seem most direct
    isEmail = path === "info.emails.email" ? true : false;
    //</most for 'default', but could be useful for other reasons>
    switch (true) {
        case ruMePath.length === 0:
            // swEmptyPathCount++;
            console.warn("'path' must he 'NNULL' or a valid path.")
            console.warn(clElement);
            break;
        case uiKeyUnChecked:
            // swUnchkdCount++;
            break;

        case index === 'i':
            // swIndxICount++;
            break;

        case name === 'INSTANTIATE_OBJECT':
            // swInstObjCount++;

            attributeChain = 'wixContact';
            indexReplaceString = '.' + index + '';
            path = path.replace('[i]', indexReplaceString);
            pathSplit = path.split(".");
            pathSplit.forEach(chunk => {
                if (index === chunk) {
                    attributeChain += "[" + chunk + "]";
                } else {

                    attributeChain += "['" + chunk + "']";
                }
            });
            attributeChain += ' = {}';
            if (name === "INSTANTIATE_OBJECT" && path === "info.emails[i]") {
                console.warn("attributeChain: " + attributeChain);
            }
            eval(attributeChain);
            // element.unshift('INSTANTIATE_OBJECT');
            // element.unshift(forIndex);
            // processedPathArray.push(element.toString());
            break;

        case name === 'INSTANTIATE_ARRAY':
            // swInstArrCount++;
            attributeChain = 'wixContact';
            pathSplit = path.split(".");
            pathSplit.forEach(chunk => {
                attributeChain += "['" + chunk + "']";
            });
            attributeChain += ' = []';
            eval(attributeChain);
            // element.unshift('INSTANTIATE_OBJECT');
            // element.unshift(forIndex);
            // processedPathArray.push(element.toString());
            break;

        case name === 'INSTANTIATE_ELEMENT_OBJECT':
            // swInstElmtObjCount++;

            // console.warn("name === 'INSTANTIATE_ELEMENT_OBJECT'")
            // console.warn(clElement);
            break;

        case ruMePath === 'NNULL':
            // swNullPathCount++;
            break;

        default:
            // swDfltAssigCount++;
            // indexReplaceString = '[' + index + ']';
            // path = path.replace('[i]', indexReplaceString);
            // index = isEmail ? emailIndex : index;
            // emailIndex += isEmail ? 1 : 0;
            indexReplaceString = '[' + index + '].';
            path = path.replace('.i.', indexReplaceString);
            if (ruMePath === 'NNA') {
                value = eval(ruMeCode);
            } else {

                let valueEvalString = "ruMeUser.";
                valueEvalString += ruMePath;
                value = eval(valueEvalString);
            }
            evalString = "wixContact." + path + " = \"" + value + "\"";
            eval(evalString);

            break;
    }

}

let holderCompactArray = [];
holderCompactArray = compactArray(wixContact.info.emails);
wixContact.info.emails = [];
wixContact.info.emails = holderCompactArray;
holderCompactArray = [];
holderCompactArray = compactArray(wixContact.info.phones);
wixContact.info.phones = [];
wixContact.info.phones = holderCompactArray;
holderCompactArray = [];
holderCompactArray = compactArray(wixContact.info.addresses);
wixContact.info.addresses = [];
wixContact.info.addresses = holderCompactArray;

export function compactArray(originalArray = []) {
    if (Array.isArray(originalArray) === false) {
        return;
    }
    // let holderArray = wixContact.info.emails;
    let compactArray = [];
    for (let index = 0; index < originalArray.length; index++) {
        const element = originalArray[index];
        if (element !== null && element !== undefined) {
            compactArray.push(element);
            // console.log(element);
        }
    }
    return compactArray;
}

// let testOriginalArray = ['alpah','bravo',null,'delta',null,null,null,null,null,'juliet',null,null,'november',null,null,null,'romeo']
// let testCompactArray = compactArray(testOriginalArray);
// console.log(testCompactArray); 
// list = [null, "say", "kenglish", "co", null]
// list.filter(function(obj) { return obj });
// Or with es6
// list.filter((obj) => obj );
// list.filter((obj) => obj );
// console.log(list);
// return new array [ 'say',
// wixContact.info.emails.filter((obj) => obj );
console.log(JSON.stringify(wixContact, undefined, 4))
errorString += 'DEBUG STEPS';
errorString = '';

