// ! <------------ <DEMO>  ------------>
let testTypeTwo = 'Inner address element';
let testAddressObjectTwo = {
    "streetAddress": {
        "number": "7469",
        "name": "W Gray St",
        "apt": "506"
    },
    "addressLine2": "Box 868",
    "city": "Woodbridge",
    "subdivision": "OR",
    "postalCode": "56853",
    "country": "US",
    "location": {
        "latitude": "20.0934",
        "longitude": "40.6247"
    },
    "prematted": "7469 W Gray St 506, Box 868, Woodbridge, OR 56853, USA"
};
let testTypeOne = 'Full addresses element';
let testAddressObjectOne = {
    "tag": "home",
    "address": {
        "streetAddress": {
            "number": "5711",
            "name": "White Oak Dr",
            "apt": "988"
        },
        "addressLine2": "Suite 251",
        "city": "Rochester",
        "subdivision": "IA",
        "postalCode": "38791",
        "country": "US",
        "location": {
            "latitude": "7.3423",
            "longitude": "103.1508"
        },
        "prematted": "5711 White Oak Dr 988, Suite 251, Rochester, IA 38791, USA"
    }
};
let testType = testTypeTwo;
let testAddressObject = testAddressObjectTwo;
let formattedAddressStringThis = formattedAddressString(testAddressObject);
// let formattedAddressStringThis = formattedAddressString(testAddressObject);
if(testType === 'Full addresses element'){
    testAddressObject.address.formatted = formattedAddressStringThis;
}else{
    testAddressObject.formatted = formattedAddressStringThis;
}
console.warn('testAddressObject: ');
console.warn(testAddressObject);
// console.warn('formattedAddressStringThis: ');
// console.warn(formattedAddressStringThis);
// ! <------------ </DEMO> ------------>
/**
 * ø NOTES:
 * ø • could be _universal_ 
 * ø   ↪ but WiX Contacts is the engendering area
 * @param {*} addressObject 
 * @returns formattedAddressString
 */
// ø <------------ <formattedAddressString>  ------------>
export function formattedAddressString(addressObject){
    let addressThis = {};
    if(Object.keys(addressObject).includes('address')){
        // ø \_ if parameter is entire wix contact addresses element object
        addressThis = addressObject.address;
    }else{
        // ø \_ if parameter is only address portion of wix contact addresses element object
        addressThis = addressObject;
    }
    let formattedAddressString = '';
    //<formatted>
    formattedAddressString = addressThis.streetAddress.number;
    formattedAddressString += ' ';
    // formattedAddressString += '';//ABANDONED for Now: addressThis.streetAddress.apt;
    formattedAddressString += ', ';
    if(typeof addressThis.addressLine2 === 'string' && addressThis.addressLine2.length > 0){
        formattedAddressString += addressThis.addressLine2 + ', ';
    }
    formattedAddressString += addressThis.city;
    formattedAddressString += ', ';
    formattedAddressString += addressThis.subdivision;
    formattedAddressString += ' ';
    formattedAddressString += addressThis.postalCode;
    formattedAddressString += ', ';
    formattedAddressString += addressThis.country === 'US' ? 'USA' : addressThis.country;
    //</formatted>
    return formattedAddressString;
}
// ø <------------ </formattedAddressString> ------------>