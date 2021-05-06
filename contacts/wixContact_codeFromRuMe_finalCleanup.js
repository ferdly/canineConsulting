let wixContact = {};
let error = false;
let errorString = '';
let holderString = '';

//<UI checkbox emulation>
// let chkbxKeyArray = ['NNULL', 'first', 'last', 'company', 'jobTitle', 'locale', 'birthdate', 'email', 'emailP', 'phoneP', 'phone', 'address'];
// let nnullElement = chkbxKeyArray.unshift();
//  <UI checkbox emulation commentOut to unCheck>
let chkbxKeyArray = [];
chkbxKeyArray.push('first');
chkbxKeyArray.push('last');
chkbxKeyArray.push('company');
chkbxKeyArray.push('jobTitle');
chkbxKeyArray.push('locale');
chkbxKeyArray.push('birthdate');
chkbxKeyArray.push('email');
chkbxKeyArray.push('emailP');
chkbxKeyArray.push('phoneP');
chkbxKeyArray.push('phone');
chkbxKeyArray.push('address');
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
// chkAddresses = chkbxKeyArray.includes('addressMoreThanOne') ? true : chkAddresses;
if (chkAddresses) {
    chkbxKeyArray.push('addresses');
}
errorString += '';
console.log(chkbxKeyArray.toString());
//  </instatiate arrays by checking elements>
//</UI checkbox emulation>

//<Single for Testing>
let ruMeUser = { gender: "male", name: { title: "Mr", first: "Floyd", last: "Holt" }, location: { street: { number: 5365, name: "Woodland St", apt: "371" }, city: "Elko", state: "California", country: "US", postcode: 13195, coordinates: { latitude: "-32.1370", longitude: "-38.8458" }, timezone: { offset: "-5:00", description: "Eastern Time (US & Canada), Bogota, Lima" }, postalCode: "13195", subdivision: "CA", addressLine2: "Box 122" }, email: "floyd.holt@example.com", login: { uuid: "5638f410-b574-4551-b262-ff4bf4ebfb87", username: "happycat971", password: "buster1", salt: "RwDqvtgU", md5: "9584ff21a6d448905719e2216eb9b976", sha1: "f684942cda707ba52d78af9c104b290d70fc392f", sha256: "fa1c0cd4a1c8927cb9a3a5d2d6b7c6004641a8174faec28643938fdf0921660a" }, dob: { date: "1996-01-15T05:11:36.209Z", age: 25 }, registered: { date: "2006-11-05T22:27:23.562Z", age: 15 }, phone: "(938)-796-5414", cell: "(315)-781-5760", id: { name: "SSN", value: "364-38-2775" }, picture: { large: "https://randomuser.me/api/portraits/men/71.jpg", medium: "https://randomuser.me/api/portraits/med/men/71.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/71.jpg" }, nat: "US", seed: "3628bfbbd09c27aa", locale: "en-US", birthdate: "1996-01-15", company: "Woodland College", jobTitle: "Supervisor", emailPrimary: "qiqgroup+floyd@gmail.com" };
//</Single for Testing>

//<likely Parameterized>
/*VIA generate2dArray_fromSkinnyFlat.js: 20210506123800*/ let assinmentPathArray = [["KEY.name","KEY.path","KEY.index","KEY.ruMePath","KEY.ruMeCode","KEY.uiKey"],["email","primaryInfo.email","NNULL","NNULL","NNULL","NNULL"],["phone","primaryInfo.phone","NNULL","NNULL","NNULL","NNULL"],["INSTANTIATE_OBJECT","info","NNULL","NULL","eval('{}')","NNULL"],["INSTANTIATE_OBJECT","info.name","NNULL","name.first","eval('{}')","NNULL"],["first","info.name.first","NNULL","name.first","NNULL","first"],["last","info.name.last","NNULL","name.last","NNULL","last"],["company","info.company","NNULL","company","NNULL","company"],["jobTitle","info.jobTitle","NNULL","jobTitle","NNULL","jobTitle"],["locale","info.locale","NNULL","locale","NNULL","locale"],["birthdate","info.birthdate","NNULL","birthdate","NNULL","birthdate"],["INSTANTIATE_ARRAY","info.emails","NNULL","NNULL","eval('[]')","emails"],["INSTANTIATE_OBJECT","info.emails[i]","i","NNULL","eval('{}')","NNULL"],["_id","info.emails._id","i","NNULL","NNULL","NNULL|NEVER"],["tag","info.emails.tag","i","i-TBD","NNULL","NNULL"],["email","info.emails.email","i","i-TBD","NNULL","NNULL"],["primary","info.emails.primary","i","i-TBD","NNULL","NNULL"],["INSTANTIATE_OBJECT","info.emails[i]",0,"NNULL","eval('{}')","email"],["_id","info.emails.i._id",0,"NNULL","NNULL","email|NEVER"],["tag","info.emails.i.tag",0,"NNULL","new String('othER')","email"],["email","info.emails.i.email",0,"email","NNULL","email"],["primary","info.emails.i.primary",0,"NNULL","NNULL","email"],["INSTANTIATE_OBJECT","info.emails[i]",1,"NNULL","eval('{}')","emailP"],["_id","info.emails.i._id",1,"NNULL","NNULL","emailP|NEVER"],["tag","info.emails.i.tag",1,"NNULL","new String('Login')","emailP"],["email","info.emails.i.email",1,"emailPrimary","NNULL","emailP"],["primary","info.emails.i.primary",1,"NNULL","eval(true)","emailP"],["INSTANTIATE_ARRAY","info.phones","NNULL","NNULL","eval('[]')","phones"],["INSTANTIATE_OBJECT","info.phones[i]","i","NNULL","eval('{}')","NNULL"],["_id","info.phones._id","i","NNULL","NNULL","NNULL|NEVER"],["tag","info.phones.tag","i","i-TBD","NNULL","NNULL"],["phone","info.phones.phone","i","i-TBD","NNULL","NNULL"],["primary","info.phones.primary","i","i-TBD","NNULL","NNULL"],["INSTANTIATE_OBJECT","info.phones[i]",0,"NNULL","eval('{}')","phoneP"],["_id","info.phones.i._id",0,"NNULL","NNULL","phoneP|NEVER"],["tag","info.phones.i.tag",0,"NNULL","new String('cell')","phoneP"],["phone","info.phones.i.phone",0,"cell","NNULL","phoneP"],["primary","info.phones.i.primary",0,"NNULL","eval(true)","phoneP"],["INSTANTIATE_OBJECT","info.phones[i]",1,"NNULL","eval('{}')","phone"],["_id","info.phones._id",1,"NNULL","NNULL","phone|NEVER"],["tag","info.phones.i.tag",1,"NNULL","new String('home')","phone"],["phone","info.phones.i.phone",1,"phone","NNULL","phone"],["primary","info.phones.i.primary",1,"NNULL","eval(true)","phone"],["INSTANTIATE_ARRAY","info.addresses","NNULL","NNULL","eval('[]')","addresses"],["INSTANTIATE_OBJECT","info.addresses[i]","i","NNULL","NNULL","NNULL"],["_id","info.addresses._id","i","NNULL","NNULL","NNULL"],["tag","info.addresses.tag","i","i-TBD","NNULL","NNULL"],["INSTANTIATE_OBJECT","info.addresses.address","i","NNULL","eval('{}')","NNULL"],["formatted","info.addresses.address.formatted","i","i-TBD","NNULL","NNULL"],["streetAddress","info.addresses.address.streetAddress","i","NULL","eval('{}')","NNULL"],["number","info.addresses.address.streetAddress.number","i","location.street.number","NNULL","NNULL"],["name","info.addresses.address.streetAddress.name","i","location.street.name","NNULL","NNULL"],["apt","info.addresses.address.streetAddress.apt","i","location.street.apt","NNULL","NNULL"],["addressLine2","info.addresses.address.addressLine2","i","NA","NNULL","NNULL"],["city","info.addresses.address.city","i","location.city","NNULL","NNULL"],["subdivision","info.addresses.address.subdivision","i","location.subdivision","NNULL","NNULL"],["postalCode","info.addresses.address.postalCode","i","location.postalCode","NNULL","NNULL"],["country","info.addresses.address.country","i","location.country","NNULL","NNULL"],["location","info.addresses.address","i","NNULL","eval('{}')","NNULL"],["latitude","info.addresses.address.location.latitude","i","coordinates.latitude","NNULL","NNULL"],["longitude","info.addresses.address.location.longitude","i","coordinates.longitude","NNULL","NNULL"],["INSTANTIATE_OBJECT","info.addresses[i]",0,"NNULL","eval('{}')","address"],["_id","info.addresses.i._id",0,"NNULL","NNULL","address|NEVER"],["tag","info.addresses.i.tag",0,"NNULL","new String('home')","address"],["INSTANTIATE_OBJECT","info.addresses.i.address",0,"NNULL","eval('{}')","address"],["formatted","info.addresses.i.address.formatted",0,"NNULL","NNULL","address"],["INSTANTIATE_OBJECT","info.addresses.i.address.streetAddress",0,"NULL","eval('{}')","address"],["number","info.addresses.i.address.streetAddress.number",0,"location.street.number","NNULL","address"],["name","info.addresses.i.address.streetAddress.name",0,"location.street.name","NNULL","address"],["apt","info.addresses.i.address.streetAddress.apt",0,"location.street.apt","NNULL","address"],["addressLine2","info.addresses.i.address.addressLine2",0,"location.addressLine2","NNULL","address"],["city","info.addresses.i.address.city",0,"location.city","NNULL","address"],["subdivision","info.addresses.i.address.subdivision",0,"location.subdivision","NNULL","address"],["postalCode","info.addresses.i.address.postalCode",0,"location.postalCode","NNULL","address"],["country","info.addresses.i.address.country",0,"location.country","NNULL","address"],["INSTANTIATE_OBJECT","info.addresses.i.address.location",0,"NNULL","eval('{}')","address"],["latitude","info.addresses.i.address.location.latitude",0,"location.coordinates.latitude","NNULL","address"],["longitude","info.addresses.i.address.location.longitude",0,"location.coordinates.longitude","NNULL","address"]];
//</likely Parameterized>

let doxKeyElement = assinmentPathArray[0];
let copystring = doxKeyElement.toString()
if (doxKeyElement.toString() === "KEY.name,KEY.path,KEY.index,KEY.ruMePath,KEY.ruMeCode,KEY.uiKey") {
    doxKeyElement = assinmentPathArray.shift();
}
let element = assinmentPathArray[0];
let name = '';
let path = '';
let index = '-777';
let ruMePath = '';
let ruMeCode = '';
let uiKey = '';
let value = '';
let processedPathArray = [];
let evalString = '';
let pathChunkString = '';
for (let forIndex = 0; forIndex < assinmentPathArray.length; forIndex++) {
    element = assinmentPathArray[forIndex];
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
    holderString = "DEBUGGER: About to Enter SWITCH: ${swDfltAssigCount} Assigned"
    
    switch (true) {
        case ruMePath.length === 0:
            break;

        case uiKeyUnChecked:
            break;

        case index === 'i':
            break;

        case name === 'INSTANTIATE_OBJECT':
            attributeChain = 'wixContact';
            attributeChain += composePathChunkString(element);
            attributeChain += ' = {}';
            eval(attributeChain);
            break;

        case name === 'INSTANTIATE_ARRAY':
            attributeChain = 'wixContact';
            attributeChain += composePathChunkString(element);
            attributeChain += ' = []';
            if(uiKey === "addresses"){
                // console.log('attributeChain: ' + attributeChain)
            }
            // console.log('attributeChain: ' + attributeChain)
            eval(attributeChain);
            break;

        case name === 'INSTANTIATE_ELEMENT_OBJECT':
            break;

        case ruMePath === 'NNULL':
            break;

        default:
            attributeChain = 'wixContact';
            attributeChain += composePathChunkString(element);
            indexReplaceString = '[' + index + '].';
            path = path.replace('.i.', indexReplaceString);
            //<ORIGINAL: before SOON>
            if (ruMePath === 'NNA') {
                value = eval(ruMeCode);
            } else {

                let valueEvalString = "ruMeUser.";
                valueEvalString += ruMePath;
                value = eval(valueEvalString);
                //ø \_ tempted to use the 'composePathChunkString()' here, but
                //ø    until the source is NOT ruMe...
            }
            //</ORIGINAL: before SOON>
            evalString = attributeChain + " = \"" + value + "\"";
            eval(evalString);

            break;
    }

}

let addressFormattedParam = wixContact.info.addresses[0];
let addressFormattedResult = parseFormattedAddress(addressFormattedParam);
wixContact.info.addresses[0].formatted = addressFormattedResult;
// console.log(addressFormattedParam);
// console.log(addressFormattedResult);



export function parseFormattedAddress(addressObject){
    return "PPENDING";
}


export function composePathChunkString(element = []) {
    // export function composePathChunkString(element = [], whichPath = 'path') {
    if (!Array.isArray(element)) {
        return;
    }
    let path = element[1];
    // let path = whichPath === 'path' ? element[1] : 'PPENDING';
    // path = whichPath === 'ruMePath' ? element[3] : 'PPENDING';
    // if (path === 'PPENDING') {
    //     return;
    // }
    let index = element[2].toString();
    let attributeChain = "";
    let indexReplaceString = '.' + index + '';
    path = path.replace('[i]', indexReplaceString);
    indexReplaceString = '.' + index + '.';
    path = path.replace('.i.', indexReplaceString);
    let pathSplit = path.split(".");
    pathSplit.forEach(chunk => {
        if (index === chunk) {
            attributeChain += "[" + chunk + "]";
        } else {

            attributeChain += "['" + chunk + "']";
        }
    });
    return attributeChain;
}

let originalArray = [];
if (chkbxKeyArray.includes("emails")) {
    originalArray = wixContact.info.emails;
    wixContact.info.emails = originalArray.filter(element => element !== null && element !== undefined);
}
if (chkbxKeyArray.includes("phones")) {
    originalArray = wixContact.info.phones;
    wixContact.info.phones = originalArray.filter(element => element !== null && element !== undefined);
}
// if (chkbxKeyArray.includes("addresses")) {
//     originalArray = wixContact.info.addresses;
//     wixContact.info.addresses = originalArray.filter(element => element !== null && element !== undefined);
// }

console.log(JSON.stringify(wixContact, undefined, 4))
errorString += 'DEBUG STEPS';
errorString = '';

