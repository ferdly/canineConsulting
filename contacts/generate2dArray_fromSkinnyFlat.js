// /*20210505200700*/let flatSkinnyJSON = "{\"attributeArray\":[{\"name\":\"KEY.name\",\"path\":\"KEY.path\",\"index\":\"KEY.index\",\"ruMePath\":\"KEY.ruMePath\",\"ruMeCode\":\"KEY.ruMeCode\",\"uiKey\":\"KEY.uiKey\",\"ruMeNotes\":[\"KEY.ruMeNotes\"]},{\"name\":\"KEY.name\",\"path\":\"KEY.path\",\"index\":\"i\",\"ruMePath\":\"KEY.ruMePath\",\"ruMeCode\":\"KEY.ruMeCode\",\"uiKey\":\"KEY.uiKey\",\"ruMeNotes\":[\"KEY.ruMeNotes\"]}]}";
// let flatSkinny = JSON.parse(flatSkinnyJSON);
// /*20210505200700*/let partOneFlatSkinnyJSON = "{\"attributeArray\":[{\"name\":\"KEY.name\",\"path\":\"KEY.path\",\"index\":\"KEY.index\",\"ruMePath\":\"KEY.ruMePath\",\"ruMeCode\":\"KEY.ruMeCode\",\"uiKey\":\"KEY.uiKey\",\"ruMeNotes\":[\"KEY.ruMeNotes\"]},{\"na";
// /*20210505200700*/let partTwoFlatSkinnyJSON = "me\":\"KEY.name\",\"path\":\"KEY.path\",\"index\":\"i\",\"ruMePath\":\"KEY.ruMePath\",\"ruMeCode\":\"KEY.ruMeCode\",\"uiKey\":\"KEY.uiKey\",\"ruMeNotes\":[\"KEY.ruMeNotes\"]}]}";
// let flatSkinny = JSON.parse(partOneFlatSkinnyJSON + partTwoFlatSkinnyJSON);
let keysInfoFlatSkinnyJSON = "{\"attributeArray\":[{\"name\":\"KEY.name\",\"path\":\"KEY.path\",\"index\":\"KEY.index\",\"ruMePath\":\"KEY.ruMePath\",\"ruMeCode\":\"KEY.ruMeCode\",\"uiKey\":\"KEY.uiKey\",\"ruMeNotes\":[\"KEY.ruMeNotes\"]}]}";
let mainInfoFlatSkinnyJSON = "{\"attributeArray\":[{\"name\":\"email\",\"path\":\"primaryInfo.email\",\"index\":\"NNULL\",\"ruMePath\":\"NNULL\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"primaryInfo\",\"ruMeNotes\":[\"expectation is that this will automate based on emails[i].primay = true\",\"am ready to instantiate 'primaryInfo' (above) and set primary Email here if wrong\"]},{\"name\":\"phone\",\"path\":\"primaryInfo.phone\",\"index\":\"NNULL\",\"ruMePath\":\"NNULL\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"primaryInfo\",\"ruMeNotes\":[\"expectation is that this will automate based on emails[i].primay = true\",\"am ready to instantiate 'primaryInfoß' (above) and set primary Email here if wrong\"]},{\"name\":\"INSTANTIATE_OBJECT\",\"path\":\"info\",\"index\":\"NNULL\",\"ruMePath\":\"NULL\",\"ruMeCode\":\"eval('{}')\",\"uiKey\":\"info\",\"ruMeNotes\":[]},{\"name\":\"INSTANTIATE_OBJECT\",\"path\":\"info.name\",\"index\":\"NNULL\",\"ruMePath\":\"name.first\",\"ruMeCode\":\"eval('{}')\",\"uiKey\":\"name\",\"ruMeNotes\":[]},{\"name\":\"first\",\"path\":\"info.name.first\",\"index\":\"NNULL\",\"ruMePath\":\"name.first\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"first\",\"ruMeNotes\":[]},{\"name\":\"last\",\"path\":\"info.name.last\",\"index\":\"NNULL\",\"ruMePath\":\"name.last\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"last\",\"ruMeNotes\":[]},{\"name\":\"company\",\"path\":\"info.company\",\"index\":\"NNULL\",\"ruMePath\":\"company\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"company\",\"ruMeNotes\":[]},{\"name\":\"jobTitle\",\"path\":\"info.jobTitle\",\"index\":\"NNULL\",\"ruMePath\":\"jobTitle\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"jobTitle\",\"ruMeNotes\":[]},{\"name\":\"locale\",\"path\":\"info.locale\",\"index\":\"NNULL\",\"ruMePath\":\"locale\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"locale\",\"ruMeNotes\":[]},{\"name\":\"birthdate\",\"path\":\"info.birthdate\",\"index\":\"NNULL\",\"ruMePath\":\"birthdate\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"birthdate\",\"ruMeNotes\":[]}]}";
let simpleArraysFlatSkinnyJSON = "{\"attributeArray\":[{\"name\":\"INSTANTIATE_ARRAY\",\"path\":\"labelKeys\",\"index\":\"NNULL\",\"ruMePath\":\"ZXZruMePath\",\"ruMeCode\":\"eval('[]')\",\"uiKey\":\"labelKeys\",\"ruMeNotes\":[\"critical for WiX\"]},{\"name\":\"labelKeys-Seed\",\"path\":\"labelKeys.i\",\"index\":0,\"ruMePath\":\"seed\",\"ruMeCode\":\"eval('seed-' + this)\",\"uiKey\":\"labelKeys\",\"ruMeNotes\":[\"for repeatable ruMe calls\"]},{\"name\":\"labelKeys-Username\",\"path\":\"labelKeys.i\",\"index\":1,\"ruMePath\":\"login.username\",\"ruMeCode\":\"eval('username-' + this)\",\"uiKey\":\"labelKeys\",\"ruMeNotes\":[\"for another label\"]},{\"name\":\"INSTANTIATE_ARRAY\",\"path\":\"info.emails\",\"index\":\"NNULL\",\"ruMePath\":\"NNULL\",\"ruMeCode\":\"eval('[]')\",\"uiKey\":\"emails\",\"ruMeNotes\":[]},{\"name\":\"INSTANTIATE_OBJECT\",\"path\":\"info.emails[i]\",\"index\":\"i\",\"ruMePath\":\"NNULL\",\"ruMeCode\":\"eval('{}')\",\"uiKey\":\"NNULL\",\"ruMeNotes\":[\"was 'INSTANTIATE_ELEMENT_OBJECT'on 5/4/21\",\"changed to 'INSTANTIATE_OBJECT' at 11:50am\",\"this and 8 other places\",\"resulted in 2d_v3_20210504115000\"]},{\"name\":\"_id\",\"path\":\"info.emails._id\",\"index\":\"i\",\"ruMePath\":\"NNULL\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"NNULL|NEVER\",\"ruMeNotes\":[\"expected, and certainly at first this value is never pos by a user\",\"so the uiKey is same as group, with '|NEVER' appended\",\"same for other _id's (phone, address)\"]},{\"name\":\"tag\",\"path\":\"info.emails.tag\",\"index\":\"i\",\"ruMePath\":\"i-TBD\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"NNULL\",\"ruMeNotes\":[]},{\"name\":\"email\",\"path\":\"info.emails.email\",\"index\":\"i\",\"ruMePath\":\"i-TBD\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"NNULL\",\"ruMeNotes\":[]},{\"name\":\"primary\",\"path\":\"info.emails.primary\",\"index\":\"i\",\"ruMePath\":\"i-TBD\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"NNULL\",\"ruMeNotes\":[]},{\"name\":\"INSTANTIATE_OBJECT\",\"path\":\"info.emails[i]\",\"index\":0,\"ruMePath\":\"NNULL\",\"ruMeCode\":\"eval('{}')\",\"uiKey\":\"email\",\"ruMeNotes\":[]},{\"name\":\"_id\",\"path\":\"info.emails.i._id\",\"index\":0,\"ruMePath\":\"NNULL\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"email|NEVER\",\"ruMeNotes\":[]},{\"name\":\"tag\",\"path\":\"info.emails.i.tag\",\"index\":0,\"ruMePath\":\"NNULL\",\"ruMeCode\":\"new String('othER')\",\"uiKey\":\"email\",\"ruMeNotes\":[\"test of weird case for normal word\",\"new Sting('othER') from MDN, 4 other below\"]},{\"name\":\"email\",\"path\":\"info.emails.i.email\",\"index\":0,\"ruMePath\":\"email\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"email\",\"ruMeNotes\":[]},{\"name\":\"primary\",\"path\":\"info.emails.i.primary\",\"index\":0,\"ruMePath\":\"NNULL\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"email\",\"ruMeNotes\":[\"first, fake not primary\",\"test not set at first, to see if primary:true makes this false, if not eval(false)\"]},{\"name\":\"INSTANTIATE_OBJECT\",\"path\":\"info.emails[i]\",\"index\":1,\"ruMePath\":\"NNULL\",\"ruMeCode\":\"eval('{}')\",\"uiKey\":\"emailP\",\"ruMeNotes\":[]},{\"name\":\"_id\",\"path\":\"info.emails.i._id\",\"index\":1,\"ruMePath\":\"NNULL\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"emailP|NEVER\",\"ruMeNotes\":[]},{\"name\":\"tag\",\"path\":\"info.emails.i.tag\",\"index\":1,\"ruMePath\":\"NNULL\",\"ruMeCode\":\"new String('Login')\",\"uiKey\":\"emailP\",\"ruMeNotes\":[]},{\"name\":\"email\",\"path\":\"info.emails.i.email\",\"index\":1,\"ruMePath\":\"emailPrimary\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"emailP\",\"ruMeNotes\":[]},{\"name\":\"primary\",\"path\":\"info.emails.i.primary\",\"index\":1,\"ruMePath\":\"NNULL\",\"ruMeCode\":\"eval(true)\",\"uiKey\":\"emailP\",\"ruMeNotes\":[\"second, qiqgroup is primary\"]},{\"name\":\"INSTANTIATE_ARRAY\",\"path\":\"info.phones\",\"index\":\"NNULL\",\"ruMePath\":\"NNULL\",\"ruMeCode\":\"eval('[]')\",\"uiKey\":\"phones\",\"ruMeNotes\":[]},{\"name\":\"INSTANTIATE_OBJECT\",\"path\":\"info.phones[i]\",\"index\":\"i\",\"ruMePath\":\"NNULL\",\"ruMeCode\":\"eval('{}')\",\"uiKey\":\"NNULL\",\"ruMeNotes\":[]},{\"name\":\"_id\",\"path\":\"info.phones._id\",\"index\":\"i\",\"ruMePath\":\"NNULL\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"NNULL|NEVER\",\"ruMeNotes\":[]},{\"name\":\"tag\",\"path\":\"info.phones.tag\",\"index\":\"i\",\"ruMePath\":\"i-TBD\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"NNULL\",\"ruMeNotes\":[]},{\"name\":\"phone\",\"path\":\"info.phones.phone\",\"index\":\"i\",\"ruMePath\":\"i-TBD\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"NNULL\",\"ruMeNotes\":[]},{\"name\":\"primary\",\"path\":\"info.phones.primary\",\"index\":\"i\",\"ruMePath\":\"i-TBD\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"NNULL\",\"ruMeNotes\":[]},{\"name\":\"INSTANTIATE_OBJECT\",\"path\":\"info.phones[i]\",\"index\":0,\"ruMePath\":\"NNULL\",\"ruMeCode\":\"eval('{}')\",\"uiKey\":\"phoneP\",\"ruMeNotes\":[]},{\"name\":\"_id\",\"path\":\"info.phones.i._id\",\"index\":0,\"ruMePath\":\"NNULL\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"phoneP|NEVER\",\"ruMeNotes\":[]},{\"name\":\"tag\",\"path\":\"info.phones.i.tag\",\"index\":0,\"ruMePath\":\"NNULL\",\"ruMeCode\":\"new String('cell')\",\"uiKey\":\"phoneP\",\"ruMeNotes\":[]},{\"name\":\"phone\",\"path\":\"info.phones.i.phone\",\"index\":0,\"ruMePath\":\"cell\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"phoneP\",\"ruMeNotes\":[]},{\"name\":\"primary\",\"path\":\"info.phones.i.primary\",\"index\":0,\"ruMePath\":\"NNULL\",\"ruMeCode\":\"eval(true)\",\"uiKey\":\"phoneP\",\"ruMeNotes\":[]},{\"name\":\"INSTANTIATE_OBJECT\",\"path\":\"info.phones[i]\",\"index\":1,\"ruMePath\":\"NNULL\",\"ruMeCode\":\"eval('{}')\",\"uiKey\":\"phone\",\"ruMeNotes\":[]},{\"name\":\"_id\",\"path\":\"info.phones._id\",\"index\":1,\"ruMePath\":\"NNULL\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"phone|NEVER\",\"ruMeNotes\":[]},{\"name\":\"tag\",\"path\":\"info.phones.i.tag\",\"index\":1,\"ruMePath\":\"NNULL\",\"ruMeCode\":\"new String('home')\",\"uiKey\":\"phone\",\"ruMeNotes\":[]},{\"name\":\"phone\",\"path\":\"info.phones.i.phone\",\"index\":1,\"ruMePath\":\"phone\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"phone\",\"ruMeNotes\":[]},{\"name\":\"primary\",\"path\":\"info.phones.i.primary\",\"index\":1,\"ruMePath\":\"NNULL\",\"ruMeCode\":\"eval(true)\",\"uiKey\":\"phone\",\"ruMeNotes\":[]}]}";
let addressesArrayFlatSkinnyJSON = "{\"attributeArray\":[{\"name\":\"INSTANTIATE_ARRAY\",\"path\":\"info.addresses\",\"index\":\"NNA\",\"ruMePath\":\"NNA\",\"ruMeCode\":\"eval('[]')\",\"uiKey\":\"addresses\",\"ruMeNotes\":[]},{\"name\":\"INSTANTIATE_OBJECT\",\"path\":\"info.addresses[i]\",\"index\":\"i\",\"ruMePath\":\"NNA\",\"ruMeCode\":\"NNA\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"_id\",\"path\":\"info.addresses._id\",\"index\":\"i\",\"ruMePath\":\"NNA\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"tag\",\"path\":\"info.addresses.tag\",\"index\":\"i\",\"ruMePath\":\"i-NNA\",\"ruMeCode\":\"i-TBD\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"INSTANTIATE_OBJECT\",\"path\":\"info.addresses.address\",\"index\":\"i\",\"ruMePath\":\"NNA\",\"ruMeCode\":\"eval('{}')\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"formatted\",\"path\":\"info.addresses.address.formatted\",\"index\":\"i\",\"ruMePath\":\"i-TBD\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"address\",\"ruMeNotes\":[\"not even a holder, this is done outside of this paradigm\"]},{\"name\":\"streetAddress\",\"path\":\"info.addresses.address.streetAddress\",\"index\":\"i\",\"ruMePath\":\"NNA\",\"ruMeCode\":\"eval('{}')\",\"uiKey\":\"address\",\"ruMeNotes\":[\"¿maybe not correct eval()?\"]},{\"name\":\"number\",\"path\":\"info.addresses.address.streetAddress.number\",\"index\":\"i\",\"ruMePath\":\"location.street.number\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"name\",\"path\":\"info.addresses.address.streetAddress.name\",\"index\":\"i\",\"ruMePath\":\"location.street.name\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"apt\",\"path\":\"info.addresses.address.streetAddress.apt\",\"index\":\"i\",\"ruMePath\":\"location.street.apt\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"addressLine2\",\"path\":\"info.addresses.address.addressLine2\",\"index\":\"i\",\"ruMePath\":\"location.addressLine2\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"city\",\"path\":\"info.addresses.address.city\",\"index\":\"i\",\"ruMePath\":\"location.city\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"subdivision\",\"path\":\"info.addresses.address.subdivision\",\"index\":\"i\",\"ruMePath\":\"location.subdivision\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"postalCode\",\"path\":\"info.addresses.address.postalCode\",\"index\":\"i\",\"ruMePath\":\"location.postalCode\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"country\",\"path\":\"info.addresses.address.country\",\"index\":\"i\",\"ruMePath\":\"location.country\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"location\",\"path\":\"info.addresses.address\",\"index\":\"i\",\"ruMePath\":\"NNULL\",\"ruMeCode\":\"eval('{}')\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"latitude\",\"path\":\"info.addresses.address.location.latitude\",\"index\":\"i\",\"ruMePath\":\"coordinates.latitude\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"longitude\",\"path\":\"info.addresses.address.location.longitude\",\"index\":\"i\",\"ruMePath\":\"coordinates.longitude\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"INSTANTIATE_OBJECT\",\"path\":\"info.addresses[i]\",\"index\":0,\"ruMePath\":\"NNULL\",\"ruMeCode\":\"eval('{}')\",\"uiKey\":\"address\",\"ruMeNotes\":[\"uiKey is 'address'\",\"↪ regardless of the fact that 'tag' is outside the 'address' object\",\"↪ which is part of the overall 'addresses element object'\"]},{\"name\":\"_id\",\"path\":\"info.addresses.i._id\",\"index\":0,\"ruMePath\":\"NNULL\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"address|NEVER\",\"ruMeNotes\":[]},{\"name\":\"tag\",\"path\":\"info.addresses.i.tag\",\"index\":0,\"ruMePath\":\"NNULL\",\"ruMeCode\":\"new String('home')\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"INSTANTIATE_OBJECT\",\"path\":\"info.addresses.i.address\",\"index\":0,\"ruMePath\":\"NNULL\",\"ruMeCode\":\"eval('{}')\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"formatted\",\"path\":\"info.addresses.i.address.formatted\",\"index\":\"i\",\"ruMePath\":\"NNULL\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"INSTANTIATE_OBJECT\",\"path\":\"info.addresses.i.address.streetAddress\",\"index\":0,\"ruMePath\":\"NULL\",\"ruMeCode\":\"eval('{}')\",\"uiKey\":\"address\",\"ruMeNotes\":[\"¿maybe not correct eval()?\"]},{\"name\":\"number\",\"path\":\"info.addresses.i.address.streetAddress.number\",\"index\":0,\"ruMePath\":\"location.street.number\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"name\",\"path\":\"info.addresses.i.address.streetAddress.name\",\"index\":0,\"ruMePath\":\"location.street.name\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"apt\",\"path\":\"info.addresses.i.address.streetAddress.apt\",\"index\":0,\"ruMePath\":\"location.street.apt\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"addressLine2\",\"path\":\"info.addresses.i.address.addressLine2\",\"index\":0,\"ruMePath\":\"location.addressLine2\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"city\",\"path\":\"info.addresses.i.address.city\",\"index\":0,\"ruMePath\":\"location.city\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"subdivision\",\"path\":\"info.addresses.i.address.subdivision\",\"index\":0,\"ruMePath\":\"location.subdivision\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"postalCode\",\"path\":\"info.addresses.i.address.postalCode\",\"index\":0,\"ruMePath\":\"location.postalCode\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"country\",\"path\":\"info.addresses.i.address.country\",\"index\":0,\"ruMePath\":\"location.country\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"INSTANTIATE_OBJECT\",\"path\":\"info.addresses.i.address.location\",\"index\":0,\"ruMePath\":\"NNULL\",\"ruMeCode\":\"eval('{}')\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"latitude\",\"path\":\"info.addresses.i.address.location.latitude\",\"index\":0,\"ruMePath\":\"location.coordinates.latitude\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"address\",\"ruMeNotes\":[]},{\"name\":\"longitude\",\"path\":\"info.addresses.i.address.location.longitude\",\"index\":0,\"ruMePath\":\"location.coordinates.longitude\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"address\",\"ruMeNotes\":[]}]}";
let flatSkinny = {"attributeArray":[]};
let objectOne = JSON.parse(keysInfoFlatSkinnyJSON);
let objectTwo = JSON.parse(mainInfoFlatSkinnyJSON);
let objectThree = JSON.parse(simpleArraysFlatSkinnyJSON);
let objectFour = JSON.parse(addressesArrayFlatSkinnyJSON);
flatSkinny.attributeArray = objectOne.attributeArray;
// flatSkinny.attributeArray = objectOne.attributeArray.concat(objectTwo.attributeArray);
// flatSkinny.attributeArray = objectOne.attributeArray.concat(objectTwo.attributeArray,objectThree.attributeArray);
flatSkinny.attributeArray = objectOne.attributeArray.concat(objectTwo.attributeArray,objectThree.attributeArray,objectFour.attributeArray);

let which = [];
//<toggle code>
which.push("super_skinny")
which.push("2dArray");
//</toggle code>
let renderSuper_skinny = which.includes('super_skinny') ? true : false;
let render2dArray = which.includes('2dArray') ? true : false;
//<toggle overload render>
renderSuper_skinny = false;
// render2dArray = false;
//</toggle overload render>

let resultSuperSkinny = {attributeArray:[]};
// console.log(resultSuperSkinny);
if (which.includes('super_skinny')) {
    
    let resultObjectArray = [];
    flatSkinny.attributeArray.forEach(element => {
        let elementObject = {};
        elementObject.name = element.name;
        elementObject.path = element.path;
        elementObject.index = element.index;
        elementObject.ruMePath = element.ruMePath;
        elementObject.ruMeCode = element.ruMeCode;
        elementObject.uiKey = element.uiKey;
        if (element.index !== 'i') {
            resultObjectArray.push(elementObject);
        }
    });
    resultSuperSkinny.attributeArray = resultObjectArray;
    
    if (renderSuper_skinny) {
        // console.log(JSON.stringify(resultSuperSkinny));
        console.log(JSON.stringify(resultSuperSkinny,undefined,4));
        // console.log(resultSuperSkinny);
    }
}
if (which.includes('2dArray')) {
    let attributeArray = [];
    if (resultSuperSkinny.attributeArray.length === 0) {
        attributeArray = flatSkinny.attributeArray;
    } else {
        attributeArray = resultSuperSkinny.attributeArray;
        // attributeArray = [];
    }
    let result2dArray = [];
    attributeArray.forEach(element => {
        let elementArray = [];
        elementArray.push(element.name);
        elementArray.push(element.path);
        elementArray.push(element.index);
        elementArray.push(element.ruMePath);
        elementArray.push(element.ruMeCode);
        elementArray.push(element.uiKey);
        result2dArray.push(elementArray);
    });
    
    if (render2dArray) {
        console.log(JSON.stringify(result2dArray));
        // console.log(result2dArray);
    }
}