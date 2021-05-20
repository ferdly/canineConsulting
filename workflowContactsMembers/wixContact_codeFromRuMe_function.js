//<UI checkbox emulation>
// let chkbxKeyArray = ['NNULL', 'first', 'last', 'company', 'jobTitle', 'locale', 'birthdate', 'email', 'emailP', 'phoneP', 'phone', 'address'];
// let nnullElement = chkbxKeyArray.unshift();
//  <UI checkbox emulation commentOut to unCheck>
let chkbxKeyArrayParam = [];
chkbxKeyArrayParam.push('labelKeys');
chkbxKeyArrayParam.push('first');
chkbxKeyArrayParam.push('last');
// chkbxKeyArrayParam.push('company');
chkbxKeyArrayParam.push('jobTitle');
chkbxKeyArrayParam.push('locale');
chkbxKeyArrayParam.push('birthdate');
chkbxKeyArrayParam.push('email');
chkbxKeyArrayParam.push('emailP');
chkbxKeyArrayParam.push('phoneP');
chkbxKeyArrayParam.push('phone');
chkbxKeyArrayParam.push('address');
//  </UI checkbox emulation commentOut to unCheck>

// //  <instatiate arrays by checking elements>
// //  <minimum>
// chkbxKeyArrayParam.push('following-elements-inferred');
// chkbxKeyArrayParam.push('info');
// //  </minimum>
// let chkName = chkbxKeyArrayParam.includes('first') ? true : false;
// chkName = chkbxKeyArrayParam.includes('last') ? true : chkName;
// if (chkName) {
//     chkbxKeyArrayParam.push('name');
// }
// let chkEmails = chkbxKeyArrayParam.includes('email') ? true : false;
// chkEmails = chkbxKeyArrayParam.includes('emailP') ? true : chkEmails;
// if (chkEmails) {
//     chkbxKeyArrayParam.push('emails');
// }
// let chkPhones = chkbxKeyArrayParam.includes('phone') ? true : false;
// chkPhones = chkbxKeyArrayParam.includes('phoneP') ? true : chkPhones;
// if (chkPhones) {
//     chkbxKeyArrayParam.push('phones');
// }
// let chkAddresses = chkbxKeyArrayParam.includes('address') ? true : false;
// // chkAddresses = chkbxKeyArrayParam.includes('addressMoreThanOne') ? true : chkAddresses;
// if (chkAddresses) {
//     chkbxKeyArrayParam.push('addresses');
// }
// console.log(chkbxKeyArrayParam.toString());
// //  </instatiate arrays by checking elements>
//</UI checkbox emulation>

//<Single for Testing>
// let ruMeUserObject = { gender: "male", name: { title: "Mr", first: "Floyd", last: "Holt" }, location: { street: { number: 5365, name: "Woodland St", apt: "371" }, city: "Elko", state: "California", country: "US", postcode: 13195, coordinates: { latitude: "-32.1370", longitude: "-38.8458" }, timezone: { offset: "-5:00", description: "Eastern Time (US & Canada), Bogota, Lima" }, postalCode: "13195", subdivision: "CA", addressLine2: "Box 122" }, email: "floyd.holt@example.com", login: { uuid: "5638f410-b574-4551-b262-ff4bf4ebfb87", username: "happycat971", password: "buster1", salt: "RwDqvtgU", md5: "9584ff21a6d448905719e2216eb9b976", sha1: "f684942cda707ba52d78af9c104b290d70fc392f", sha256: "fa1c0cd4a1c8927cb9a3a5d2d6b7c6004641a8174faec28643938fdf0921660a" }, dob: { date: "1996-01-15T05:11:36.209Z", age: 25 }, registered: { date: "2006-11-05T22:27:23.562Z", age: 15 }, phone: "(938)-796-5414", cell: "(315)-781-5760", id: { name: "SSN", value: "364-38-2775" }, picture: { large: "https://randomuser.me/api/portraits/men/71.jpg", medium: "https://randomuser.me/api/portraits/med/men/71.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/71.jpg" }, nat: "US", seed: "3628bfbbd09c27aa", locale: "en-US", birthdate: "1996-01-15", company: "Woodland College", jobTitle: "Supervisor", emailPrimary: "qiqgroup+floyd@gmail.com" };
let ruMeUserObject = {gender:"female",name:{title:"Mrs",first:"Jamie",last:"Schmidt"},location:{street:{number:8924,name:"Saddle Dr",apt:"312"},city:"Portland",state:"Montana",country:"US",postcode:90405,coordinates:{latitude:"51.3730",longitude:"146.7068"},timezone:{offset:"+2:00",description:"Kaliningrad, South Africa"},postalCode:"90405",subdivision:"MT",addressLine2:"Suite 562"},email:"jamie.schmidt@example.com",login:{uuid:"6d68ebb8-e274-4353-8dac-565d44d55310",username:"smallgoose471",password:"pacers",salt:"iDroulVY",md5:"21afed9cf0918b156c4ec5054c63dc6d",sha1:"5faa1fee9920094a289ae00a7faaec19eed05881",sha256:"a12a5e0ca1bafe9fddf2a267301e030b71748cdc69191d96c59450ab861a1c3c"},dob:{date:"1962-07-19T11:12:44.405Z",age:59},registered:{date:"2016-12-16T18:55:25.572Z",age:5},phone:"(283)-320-0081",cell:"(408)-813-3232",id:{name:"SSN",value:"577-84-7732"},picture:{large:"https://randomuser.me/api/portraits/women/24.jpg",medium:"https://randomuser.me/api/portraits/med/women/24.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/24.jpg"},nat:"US",seed:"40be321580422404",locale:"en-US",birthdate:"1962-07-19",company:"Saddle Associates",jobTitle:"Human Resources",emailPrimary:"qiqgroup+jamie@gmail.com",developer:{transformedAttributes:[["locale: literal 'en-US'"],["postalCode: ensure 5 and string - left postcode as number"],["birthdate: dob.date to left 10. no change to original"],["subdivision: 2letter version of 'state' - original not removed"],["Company: Street name + random business kind"],["jobTitle: random jobTitle"],["emailPrimary: qiqgroup + firstName - real so that enrollment happens"],["addressLine2: random number and random type"],["street.apt: random number more useful than addressLine2"]]}};
//</Single for Testing>

let thisRandomUserDotMeJSON = JSON.stringify(ruMeUserObject);

let thisParamObject = {};
// thisParamObject.chkbxKeyArray = [];
thisParamObject.chkbxKeyArray = chkbxKeyArrayParam;

let returnedWixContact = composeWixContactCode(thisRandomUserDotMeJSON, thisParamObject)
console.log(JSON.stringify(returnedWixContact, undefined, 4))



// ! BEGIN composeWixContactCode(randomUserDotMeJSON, paramObject)





export function composeWixContactCode(randomUserDotMeJSON, paramObject) {
    //  <instatiate arrays by checking elements>
    //  <minimum>
    paramObject.chkbxKeyArray.push('following-elements-inferred');
    paramObject.chkbxKeyArray.push('info');
    //  </minimum>
    let chkName = paramObject.chkbxKeyArray.includes('first') ? true : false;
    chkName = paramObject.chkbxKeyArray.includes('last') ? true : chkName;
    if (chkName) {
        paramObject.chkbxKeyArray.push('name');
    }
    let chkEmails = paramObject.chkbxKeyArray.includes('email') ? true : false;
    chkEmails = paramObject.chkbxKeyArray.includes('emailP') ? true : chkEmails;
    if (chkEmails) {
        paramObject.chkbxKeyArray.push('emails');
    }
    let chkPhones = paramObject.chkbxKeyArray.includes('phone') ? true : false;
    chkPhones = paramObject.chkbxKeyArray.includes('phoneP') ? true : chkPhones;
    if (chkPhones) {
        paramObject.chkbxKeyArray.push('phones');
    }
    let chkAddresses = paramObject.chkbxKeyArray.includes('address') ? true : false;
    // chkAddresses = paramObject.chkbxKeyArray.includes('addressMoreThanOne') ? true : chkAddresses;
    if (chkAddresses) {
        paramObject.chkbxKeyArray.push('addresses');
    }
    console.log(paramObject.chkbxKeyArray.toString());
    //  </instatiate arrays by checking elements>
    let wixContact = {};
    //<devel Instantiate>
	let devel = true;
	let devReturnObject = {};
	devReturnObject.devMessage = 'holder';
	devReturnObject.devMessageArray = [];
	let devMessage = '~LINE 21||Instantiated';
	if(devel === true){
		devMessage = '~LINE 21||Instantiated';
		devReturnObject.devMessageArray.push(devMessage);
		devReturnObject.paramObject = paramObject;
        devReturnObject.devBoolean = false;
        // devel = false;
        // return devReturnObject;
	}
	//</devel Instantiate>

    let error = false;
    let errorString = '';
    let holderString = '';

    errorString += '';

    let ruMeUser = JSON.parse(randomUserDotMeJSON);



    //<likely Parameterized>
    // /*mainInfo generate2dArray_fromSkinnyFlat.js: 20210507130500*/ let assinmentPathArray = [["KEY.name","KEY.path","KEY.index","KEY.ruMePath","KEY.ruMeCode","KEY.uiKey"],["email","primaryInfo.email","NNULL","NNULL","NNULL","primaryInfo"],["phone","primaryInfo.phone","NNULL","NNULL","NNULL","primaryInfo"],["INSTANTIATE_OBJECT","info","NNULL","NULL","eval('{}')","info"],["INSTANTIATE_OBJECT","info.name","NNULL","name.first","eval('{}')","name"],["first","info.name.first","NNULL","name.first","NNULL","first"],["last","info.name.last","NNULL","name.last","NNULL","last"],["company","info.company","NNULL","company","NNULL","company"],["jobTitle","info.jobTitle","NNULL","jobTitle","NNULL","jobTitle"],["locale","info.locale","NNULL","locale","NNULL","locale"],["birthdate","info.birthdate","NNULL","birthdate","NNULL","birthdate"]];
    // /*mainInfo+simpleArrays generate2dArray_fromSkinnyFlat.js: 20210507130500*/ let assinmentPathArray = [["KEY.name","KEY.path","KEY.index","KEY.ruMePath","KEY.ruMeCode","KEY.uiKey"],["email","primaryInfo.email","NNULL","NNULL","NNULL","primaryInfo"],["phone","primaryInfo.phone","NNULL","NNULL","NNULL","primaryInfo"],["INSTANTIATE_OBJECT","info","NNULL","NULL","eval('{}')","info"],["INSTANTIATE_OBJECT","info.name","NNULL","name.first","eval('{}')","name"],["first","info.name.first","NNULL","name.first","NNULL","first"],["last","info.name.last","NNULL","name.last","NNULL","last"],["company","info.company","NNULL","company","NNULL","company"],["jobTitle","info.jobTitle","NNULL","jobTitle","NNULL","jobTitle"],["locale","info.locale","NNULL","locale","NNULL","locale"],["birthdate","info.birthdate","NNULL","birthdate","NNULL","birthdate"],["INSTANTIATE_ARRAY","labelKeys","NNULL","ZXZruMePath","eval('[]')","labelKeys"],["labelKeys-Seed","labelKeys.i",0,"seed","eval('seed-' + this)","labelKeys"],["labelKeys-Username","labelKeys.i",1,"login.username","eval('username-' + this)","labelKeys"],["INSTANTIATE_ARRAY","info.emails","NNULL","NNULL","eval('[]')","emails"],["INSTANTIATE_OBJECT","info.emails[i]",0,"NNULL","eval('{}')","email"],["_id","info.emails.i._id",0,"NNULL","NNULL","email|NEVER"],["tag","info.emails.i.tag",0,"NNULL","new String('othER')","email"],["email","info.emails.i.email",0,"email","NNULL","email"],["primary","info.emails.i.primary",0,"NNULL","NNULL","email"],["INSTANTIATE_OBJECT","info.emails[i]",1,"NNULL","eval('{}')","emailP"],["_id","info.emails.i._id",1,"NNULL","NNULL","emailP|NEVER"],["tag","info.emails.i.tag",1,"NNULL","new String('Login')","emailP"],["email","info.emails.i.email",1,"emailPrimary","NNULL","emailP"],["primary","info.emails.i.primary",1,"NNULL","eval(true)","emailP"],["INSTANTIATE_ARRAY","info.phones","NNULL","NNULL","eval('[]')","phones"],["INSTANTIATE_OBJECT","info.phones[i]",0,"NNULL","eval('{}')","phoneP"],["_id","info.phones.i._id",0,"NNULL","NNULL","phoneP|NEVER"],["tag","info.phones.i.tag",0,"NNULL","new String('cell')","phoneP"],["phone","info.phones.i.phone",0,"cell","NNULL","phoneP"],["primary","info.phones.i.primary",0,"NNULL","eval(true)","phoneP"],["INSTANTIATE_OBJECT","info.phones[i]",1,"NNULL","eval('{}')","phone"],["_id","info.phones._id",1,"NNULL","NNULL","phone|NEVER"],["tag","info.phones.i.tag",1,"NNULL","new String('home')","phone"],["phone","info.phones.i.phone",1,"phone","NNULL","phone"],["primary","info.phones.i.primary",1,"NNULL","eval(true)","phone"]];
    /*mainInfo+simpleArrays+addressesArray generate2dArray_fromSkinnyFlat.js: 20210507130500*/ let assinmentPathArray = [["KEY.name","KEY.path","KEY.index","KEY.ruMePath","KEY.ruMeCode","KEY.uiKey"],["email","primaryInfo.email","NNULL","NNULL","NNULL","primaryInfo"],["phone","primaryInfo.phone","NNULL","NNULL","NNULL","primaryInfo"],["INSTANTIATE_OBJECT","info","NNULL","NULL","eval('{}')","info"],["INSTANTIATE_OBJECT","info.name","NNULL","name.first","eval('{}')","name"],["first","info.name.first","NNULL","name.first","NNULL","first"],["last","info.name.last","NNULL","name.last","NNULL","last"],["company","info.company","NNULL","company","NNULL","company"],["jobTitle","info.jobTitle","NNULL","jobTitle","NNULL","jobTitle"],["locale","info.locale","NNULL","locale","NNULL","locale"],["birthdate","info.birthdate","NNULL","birthdate","NNULL","birthdate"],["INSTANTIATE_ARRAY","labelKeys","NNULL","ZXZruMePath","eval('[]')","labelKeys"],["labelKeys-Seed","labelKeys.i",0,"seed","eval('seed-' + this)","labelKeys"],["labelKeys-Username","labelKeys.i",1,"login.username","eval('username-' + this)","labelKeys"],["INSTANTIATE_ARRAY","info.emails","NNULL","NNULL","eval('[]')","emails"],["INSTANTIATE_OBJECT","info.emails[i]",0,"NNULL","eval('{}')","email"],["_id","info.emails.i._id",0,"NNULL","NNULL","email|NEVER"],["tag","info.emails.i.tag",0,"NNULL","new String('othER')","email"],["email","info.emails.i.email",0,"email","NNULL","email"],["primary","info.emails.i.primary",0,"NNULL","NNULL","email"],["INSTANTIATE_OBJECT","info.emails[i]",1,"NNULL","eval('{}')","emailP"],["_id","info.emails.i._id",1,"NNULL","NNULL","emailP|NEVER"],["tag","info.emails.i.tag",1,"NNULL","new String('Login')","emailP"],["email","info.emails.i.email",1,"emailPrimary","NNULL","emailP"],["primary","info.emails.i.primary",1,"NNULL","eval(true)","emailP"],["INSTANTIATE_ARRAY","info.phones","NNULL","NNULL","eval('[]')","phones"],["INSTANTIATE_OBJECT","info.phones[i]",0,"NNULL","eval('{}')","phoneP"],["_id","info.phones.i._id",0,"NNULL","NNULL","phoneP|NEVER"],["tag","info.phones.i.tag",0,"NNULL","new String('cell')","phoneP"],["phone","info.phones.i.phone",0,"cell","NNULL","phoneP"],["primary","info.phones.i.primary",0,"NNULL","eval(true)","phoneP"],["INSTANTIATE_OBJECT","info.phones[i]",1,"NNULL","eval('{}')","phone"],["_id","info.phones._id",1,"NNULL","NNULL","phone|NEVER"],["tag","info.phones.i.tag",1,"NNULL","new String('home')","phone"],["phone","info.phones.i.phone",1,"phone","NNULL","phone"],["primary","info.phones.i.primary",1,"NNULL","eval(true)","phone"],["INSTANTIATE_ARRAY","info.addresses","NNA","NNA","eval('[]')","addresses"],["INSTANTIATE_OBJECT","info.addresses[i]",0,"NNULL","eval('{}')","address"],["_id","info.addresses.i._id",0,"NNULL","NNULL","address|NEVER"],["tag","info.addresses.i.tag",0,"NNULL","new String('home')","address"],["INSTANTIATE_OBJECT","info.addresses.i.address",0,"NNULL","eval('{}')","address"],["INSTANTIATE_OBJECT","info.addresses.i.address.streetAddress",0,"NULL","eval('{}')","address"],["number","info.addresses.i.address.streetAddress.number",0,"location.street.number","NNULL","address"],["name","info.addresses.i.address.streetAddress.name",0,"location.street.name","NNULL","address"],["apt","info.addresses.i.address.streetAddress.apt",0,"location.street.apt","NNULL","address"],["addressLine2","info.addresses.i.address.addressLine2",0,"location.addressLine2","NNULL","address"],["city","info.addresses.i.address.city",0,"location.city","NNULL","address"],["subdivision","info.addresses.i.address.subdivision",0,"location.subdivision","NNULL","address"],["postalCode","info.addresses.i.address.postalCode",0,"location.postalCode","NNULL","address"],["country","info.addresses.i.address.country",0,"location.country","NNULL","address"],["INSTANTIATE_OBJECT","info.addresses.i.address.location",0,"NNULL","eval('{}')","address"],["latitude","info.addresses.i.address.location.latitude",0,"location.coordinates.latitude","NNULL","address"],["longitude","info.addresses.i.address.location.longitude",0,"location.coordinates.longitude","NNULL","address"]];
    //</likely Parameterized>

    let doxKeyElement = assinmentPathArray[0];
    let copystring = doxKeyElement.toString()
    if (doxKeyElement.toString() === "KEY.name,KEY.path,KEY.index,KEY.ruMePath,KEY.ruMeCode,KEY.uiKey") {
        let dropKeyElement = assinmentPathArray.shift();
		if(devel === true){
			devMessage =  "~LINE 42|| doxKeyElement)";
			devReturnObject.devMessage = devMessage;
			devReturnObject.devMessageArray.push(devMessage);
			devReturnObject.element = doxKeyElement;
            devel = false;
			// return devReturnObject;
		}
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
    let debugDefaultString = [];
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
        uiKeyUnChecked = paramObject.chkbxKeyArray.includes(uiKey) === true ? false : uiKeyUnChecked;
        if(devel === true){
			devReturnObject.devBoolean = paramObject.chkbxKeyArray.includes('company');
			devMessage =  devReturnObject.devBoolean ? 'TTRUE' : 'FFALSE';
			devMessage =  "~LINE 82|| paramObject.chkbxKeyArray 'company' " + devMessage;
			devReturnObject.devMessage = devMessage;
			devReturnObject.devMessageArray.push(devMessage);
			devReturnObject.element = element;
            devel = false;
			// return devReturnObject;
		}
        value = "as" + name.toUpperCase();//cow-catcher value
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
                if (uiKey === "addresses") {
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
                // console.log('attributeChain: ' + attributeChain)
                // indexReplaceString = '[' + index + '].';
                // path = path.replace('.i.', indexReplaceString);
                // path = path.replace('.i', indexReplaceString);
                //<ORIGINAL: before SOON>
                if (ruMePath === 'NNA') {
                    value = eval(ruMeCode);
                } else {

                    let valueEvalString = "ruMeUser.";
                    valueEvalString += ruMePath;
                    value = eval(valueEvalString);
                    //ø \_ tempted to use the 'composePathChunkString()' here, but
                    //ø    until the source is NOT ruMe...
                    // if (uiKey === 'labelKeys') {
                    //     debugDefaultString.push('path: ' + path + '; ' + 'value: ' + value + '; ' + ' == ' + element.toString());
                    // }
                }
                //</ORIGINAL: before SOON>
                evalString = attributeChain + " = \"" + value + "\"";
                eval(evalString);
                // if (uiKey === 'labelKeys') {
                //     console.log('evalString: ' + evalString);
                // }
                break;
        }

    }

    let addressFormattedParam = { "instantiated": true };
    let doFormattedAddress = false;
    doFormattedAddress = typeof wixContact.info === 'object' && wixContact.info !== null;
    if (doFormattedAddress) {
        doFormattedAddress = Array.isArray(wixContact.info.addresses);
        if (doFormattedAddress) {
            doFormattedAddress = wixContact.info.addresses.length === 0 ? false : doFormattedAddress;
        }
    }
    if (doFormattedAddress) {
        let addressesArray = wixContact.info.addresses;
        let loopEndIfIndex_GT = wixContact.info.addresses.length;
        for (let index = 0; index < loopEndIfIndex_GT; index++) {
            const element = addressesArray[index];

            addressFormattedParam = element.address;
            let addressFormattedResult = parseFormattedAddress(addressFormattedParam);
            element.address.formatted = addressFormattedResult;
            // console.log(addressFormattedParam);
        }
    }

    let originalArray = [];
    if (paramObject.chkbxKeyArray.includes("emails")) {
        originalArray = wixContact.info.emails;
        wixContact.info.emails = originalArray.filter(element => element !== null && element !== undefined);
    }
    if (paramObject.chkbxKeyArray.includes("phones")) {
        originalArray = wixContact.info.phones;
        wixContact.info.phones = originalArray.filter(element => element !== null && element !== undefined);
    }
    if (paramObject.chkbxKeyArray.includes("addresses")) {
        originalArray = wixContact.info.addresses;
        wixContact.info.addresses = originalArray.filter(element => element !== null && element !== undefined);
    }



    // console.log(debugDefaultString);
    return wixContact;
    // ! DELET THIS AND LINE ABOVE
}






// ! END composeWixContactCode(randomUserDotMeJSON, paramObject)






export function parseFormattedAddress(element) {
    //<formatted>
    let apt = element.streetAddress.apt;
    let streetAddress2 = element.addressLine2;
    streetAddress2 += streetAddress2.length > 0 ? ', ' : '';
    let formattedString = '';
    formattedString = element.streetAddress.number;
    formattedString += ' ';
    formattedString += element.streetAddress.name;
    formattedString += ' ';
    formattedString += apt;
    formattedString += ', ';
    formattedString += streetAddress2;
    formattedString += element.city;
    formattedString += ', ';
    formattedString += element.subdivision;
    formattedString += ' ';
    formattedString += element.postalCode;
    formattedString += ', ';
    formattedString += element.country === 'US' ? 'USA' : element.country;
    //</formatted>
    return formattedString;
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
    indexReplaceString = '.' + index + '';
    path = path.replace('.i', indexReplaceString);
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

// console.log(JSON.stringify(wixContact, undefined, 4))
// // console.log(wixContact)
// errorString += 'DEBUG STEPS';
// errorString = '';

