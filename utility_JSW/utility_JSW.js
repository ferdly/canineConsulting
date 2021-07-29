//utility.jsw AS utility_JSW.js
/**
 * <Utility Functions & Factories>
 * 
 */
 export function isJson(str) {
    let parsed = "let";
    try {
        parsed = JSON.parse(str);
    } catch (e) {
        return false;
    }
    return parsed;
}

export function arrayOfNotesFactory () {
    let object = {"statusNotes": []};
    let element = {};
    element.status = "INSTANTIATE";
    element.kind = 'initializing element';
    element.note = 'instantiate';
    let date = new Date();
    element.MDYdate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    element.ISOdate = date.toISOString().replace(/[^0-9]/g,'')
    // this.array = [];
    object.statusNotes.push(element);
    return object;
};
export function updateStatusForArrayOfNotes(array, status, note) {
    let element = {};
    status = status.toUpperCase();
    element.status = status;
    let standardStatusValues = ["PENDING","ONHOLD","APPROVED","RESOLVED","REJECTED"]
    // element.status = status;
    element.kind = standardStatusValues.includes(status) ? "status" : "custom status";
    if (status === "CUSTOM"){
        element.kind = status;
    }
    element.note = note;
    let date = new Date();
    element.MDYdate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    element.ISOdate = date.toISOString().replace(/[^0-9]/g,'')
    array.statusNotes.unshift(element);
    return array;
}

export function markAttendanceForArrayOfNotes(array, status, note, dateString = '') {
    let timestamp = Date.parse(dateString);
    console.log(timestamp)    
    if (isNaN(timestamp) === false) {
      var dateParamFinal = new Date(timestamp);
    } else {
        var dateParamFinal = new Date();
    }

    let element = {};
    status = status.toUpperCase();
    element.status = status;
    let standardStatusValues = ["PRESENT","EXCUSED ABSENCE","UNEXCUSED ABSENCE","TARDY","UNKNOWN"]
    // element.status = status;
    element.kind = standardStatusValues.includes(status) ? "attendance" : "custom status";
    if (status === "CUSTOM"){
        element.kind = status;
    }
    element.note = note;
    let date = new Date();
    element.MDYdate = (dateParamFinal.getMonth() + 1) + '/' + dateParamFinal.getDate() + '/' + dateParamFinal.getFullYear();
    element.ISOdate = date.toISOString().replace(/[^0-9]/g,'')
    array.statusNotes.unshift(element);
    return array;
}
export function appendNoteForArrayOfNotes (array, note) {
    let element = {};
    element.status = "NOTE";
    element.kind = "note";
    element.note = note;
    let date = new Date();
    element.MDYdate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    element.ISOdate = date.toISOString().replace(/[^0-9]/g,'')
    array.statusNotes.push(element);
    return array;
}
export function EmailObjectAppend(array, email, role, who, kind = "home", usage = "Personal"){
    let element = {};
    element.email = email;//.trim();
    element.role = role;//.trim();
    element.who = who;//.trim();
    element.kind = kind;
    element.usage = usage;
    console.log(element);
    array.emails.push(element);
    return array;
}
export function PhoneObjectAppend(array, phone, role, who, kind = "cell", usage = "Personal"){
    let element = {};
    phone = phone.replace(/[^0-9]/g,'');
    element.phone = "(" + phone.substr(0, 3) + ") "
    + phone.substr(3, 3) + "-"
    + phone.substr(-4);
    element.role = role;//.trim();
    element.who = who;//.trim();
    element.kind = kind;
    element.usage = usage;
    array.phones.push(element);
    return array;
};

// // addressThis = new AddressObject(mileyAddress, mileyAddress2, mileyCity, mileyState, mileyZip );
// const AddressObject = function(address, address2, city, state, zip){
export function AddressObjectAppend(array, address, address2, city, state, zip){
    let element = {};
    element.streetAddress = {};
    let HOLDER = '';
    HOLDER = address.replace(" ", "|");
    console.log(HOLDER)
    element.streetAddress.number = HOLDER.split('|')[0];
    console.log(element.streetAddress.number)
    element.streetAddress.name = HOLDER.split('|')[1];
    console.log(element.streetAddress.name)
    let renderableAddress2 = address2 + 'ZXZ';
    if (renderableAddress2.length > 3){
        element.streetAddress2 = address2.trim();
    }
    element.city = city.trim();
    console.log(element.city)
    element.state = state.trim();
    element.postalCode = zip.trim();
    element.country = 'US';
    element.subdivision = element.state;
    //<formatted>
    element.formatted = element.streetAddress.number;
    element.formatted += ' ';
    element.formatted += element.streetAddress.name;
    element.formatted += ', ';
    element.formatted += renderableAddress2.length > 3 ? element.streetAddress2 + ', ': '';
    element.formatted += element.city;
    element.formatted += ', ';
    element.formatted += element.subdivision;
    element.formatted += ' ';
    element.formatted += element.postalCode;
    element.formatted += ', ';
    element.formatted += element.country === 'US' ? 'USA' : element.country;
    //</formatted>
    element.location = {};
    element.location.latitude = null;
    element.location.longitue = null;
    let orderedElement = {};
    orderedElement.formatted = element.formatted;
    orderedElement.streetAddress = {};
    orderedElement.streetAddress.number = element.streetAddress.number;
    orderedElement.streetAddress.name = element.streetAddress.name;
    if (renderableAddress2.length > 3){
        orderedElement.streetAddress2 = element.streetAddress2;
    }
    orderedElement.city = element.city;
    orderedElement.state = element.state;
    orderedElement.postalCode = element.postalCode;
    orderedElement.country = element.country;
    orderedElement.subdivision = element.subdivision;
    orderedElement.location = {};
    orderedElement.location.latitude = element.location.latitude;
    orderedElement.location.longitue = element.location.longitue;

    array.addresses.push(orderedElement);
    // array.addresses.push(element);
    return array;
}

// ø <------------ <formattedAddressString>  ------------>
export function formattedAddressString(addressObject){
    // addressObject.address.city = "BBurlington";
    // addressObject.address.formatted = "PPENDING";
    // return addressObject.address.formatted;
    let addressThis = {};
    let useAddressElement = Object.keys(addressObject).includes('address');
    if(useAddressElement){
        // ø \_ if parameter is entire wix contact addresses element object
        addressThis = addressObject.address;
    }else{
        // ø \_ if parameter is only address portion of wix contact addresses element object
        addressThis = addressObject;
    }
    let formattedAddressString = '';
    //<formatted>
    // formattedAddressString = addressThis.streetAddress.number.toString();
    formattedAddressString += ' ';
    formattedAddressString += addressThis.streetAddress.name;
    // formattedAddressString += '';' ';//just spacing for BELOW
    // formattedAddressString += '';//ABANDONED for Now: addressThis.streetAddress.apt;
    formattedAddressString += ', ';
    if(typeof addressThis.addressLine2 === 'string' && addressThis.addressLine2.length > 0){
        // formattedAddressString += addressThis.addressLine2 + ', ';
    }
    formattedAddressString += addressThis.city;
    formattedAddressString += ', ';
    formattedAddressString += addressThis.subdivision;
    formattedAddressString += ' ';
    // formattedAddressString += addressThis.postalCode.toString;
    formattedAddressString += ', ';
    formattedAddressString += 'USA';//addressThis.country === 'US' ? 'USA' : addressThis.country;
    //</formatted>
    // if(useAddressElement){
    //     addressObject.address.formated = formattedAddressString.toString();
    // }else{
    //     addressObject.formated = formattedAddressString.toString();
    // }
    return formattedAddressString;
}
// ø <------------ </formattedAddressString> ------------>

export function renderableString(string) {
    let renderableStringLength = -777777;
    let thisType = typeof string;
    switch (thisType) {
        case 'number':
            renderableStringLength = -7;
            break;
        case 'object':
            renderableStringLength = -99999;
            break;
        case 'string':
            if (string.length === 0){
                renderableStringLength =  -77;
            } else {
                renderableStringLength =  string.length;
            }
            break;

        default:
            //SHOULD NOT HAPPEND
            renderableStringLength =  -999999;
            break;
    }
    return renderableStringLength;
    // return thisType;
}

//</Utility Functions & Constructors>