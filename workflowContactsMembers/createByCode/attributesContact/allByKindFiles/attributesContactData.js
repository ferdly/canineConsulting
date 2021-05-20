let attributesListContact2dArray = [["_id","_id",""],["revision","revision",""],["source","source",""],["sourceType","source.sourceType",""],["appId","source.appId",""],["_createdDate","_createdDate",""],["_updatedDate","_updatedDate",""],["lastActivity","lastActivity",""],["activityDate","lastActivity.activityDate",""],["activityType","lastActivity.activityType",""],["primaryInfo","primaryInfo",""],["email","primaryInfo.email",""],["phone","primaryInfo.phone",""],["info","info",""],["name","info.name",""],["first","info.name.first",""],["last","info.name.last",""],["company","info.company",""],["jobTitle","info.jobTitle",""],["locale","info.locale",""],["birthdate","info.birthdate",""],["picture","info.picture",""],["image","info.picture.image",""],["imageProvider","info.picture.imageProvider",""],["emails","info.emails",""],["_id","info.emails.[i]._id",""],["tag","info.emails.[i].tag",""],["email","info.emails.[i].email",""],["primary","info.emails.[i].primary",""],["phones","info.phones",""],["_id","info.phones.[i]._id",""],["tag","info.phones.[i].tag",""],["countryCode","info.phones.[i].countryCode",""],["phone","info.phones.[i].phone",""],["e164Phone","info.phones.[i].e164Phone",""],["primary","info.phones.[i].primary",""],["addresses","info.addresses",""],["_id","info.addresses.[i]._id",""],["tag","info.addresses.[i].tag",""],["address","info.addresses.[i].address",""],["address.formatted","info.addresses.[i].address.formatted",""],["address.addressLine2","info.addresses.[i].address.addressLine2",""],["address.location","info.addresses.[i].address.location",""],["address.location.latitude","info.addresses.[i].address.location.latitude",""],["address.location.longitude","info.addresses.[i].address.location.longitude",""],["address.city","info.addresses.[i].address.city",""],["address.subdivision","info.addresses.[i].address.subdivision",""],["address.country","info.addresses.[i].address.country",""],["address.postalCode","info.addresses.[i].address.postalCode",""],["oneOfNextTwo","oneOfNextTwo",""],["address.addressLine1","info.addresses.[i].address.addressLine1",""],["address.streetAddress","info.addresses.[i].address.streetAddress",""],["address.streetAddress.number","info.addresses.[i].address.streetAddress.number",""],["address.streetAddress.name","info.addresses.[i].address.streetAddress.name",""],["labelKeys","info.labelKeys",""],["extendedFields","info.extendedFields",""]];
let attributesListContact2dArray_count = attributesListContact2dArray.length;

let attributesContactObject2dArray = [["primaryInfo","primaryInfo",""],["info","info",""],["name","info.name",""],["address","info.addresses.[i].address",""],["streetAddress","info.addresses.[i].address.streetAddress",""],["location","info.addresses.[i].address.location",""]];
let attributesContactObject2dArray_count = attributesContactObject2dArray.length;

let attributesContactArrayOfObjects2dArray = [["emails","info.emails","other"],["phones","info.phones","other"],["addresses","info.addresses","other"]];
let attributesContactArrayOfObjects2dArray_count = attributesContactArrayOfObjects2dArray.length;

let attributesContactArray2dArray = [];
let attributesContactArray2dArray_count = attributesContactArray2dArray.length;

let attributeContact_optOut2dArray = [["addressLine1","info.addresses.[i].address.addressLine1","NA"],["e164Phone","info.phones.[i].e164Phone","NA"],["countryCode","info.phones.[i].countryCode","NA"]];
let attributeContact_optOut2dArray_count = attributeContact_optOut2dArray.length;

let attributeContact_postponed2dArray = [["labelKeys","info.labelKeys",""],["picture","info.picture","TBD"],["image","info.picture.image","TBD"],["imageProvider","info.picture.imageProvider","TBD"],["extendedFields","info.extendedFields",""]];
let attributeContact_postponed2dArray_count = attributeContact_postponed2dArray.length;

let attributeContact_systemPlus2dArray = [["_id","_id","NA"],["revision","revision","NA"],["source","source","NA"],["sourceType","source.sourceType","CODE"],["appId","source.appId","NA"],["_createdDate","_createdDate","NA"],["_updatedDate","_updatedDate","NA"],["lastActivity","lastActivity","NA"],["activityDate","lastActivity.activityDate","NA"],["activityType","lastActivity.activityType","NA"]];
let attributeContact_systemPlus2dArray_count = attributeContact_systemPlus2dArray.length;

let attributeContact_assignmentFieldsPaths2dArray = [["email","primaryInfo.email","NA"],["phone","primaryInfo.phone","NA"],["first","info.name.first","name.first"],["last","info.name.last","name.last"],["company","info.company","NA"],["jobTitle","info.jobTitle","NA"],["locale","info.locale","NA"],["birthdate","info.birthdate","dob.date"],["_id","info.emails.[i]._id",""],["tag","info.emails.[i].tag",""],["email","info.emails.[i].email",""],["primary","info.emails.[i].primary",""],["_id","info.phones.[i]._id",""],["tag","info.phones.[i].tag",""],["phone","info.phones.[i].phone",""],["primary","info.phones.[i].primary",""],["_id","info.addresses.[i]._id","NA"],["tag","info.addresses.[i].tag","NA"],["formatted","info.addresses.[i].address.formatted","NA"],["number","info.addresses.[i].address.streetAddress.number","location.street.number"],["name","info.addresses.[i].address.streetAddress.name","location.street.name"],["addressLine2","info.addresses.[i].address.addressLine2","NA"],["city","info.addresses.[i].address.city","location.city"],["subdivision","info.addresses.[i].address.subdivision","location.state"],["postalCode","info.addresses.[i].address.postalCode","location.postcode"],["country","info.addresses.[i].address.country","location.country"],["latitude","info.addresses.[i].address.location.latitude","coordinates.latitude"],["longitude","info.addresses.[i].address.location.longitude","coordinates.longitude"]];
let attributeContact_assignmentFieldsPaths2dArray_count = attributeContact_assignmentFieldsPaths2dArray.length;

//<----- element of 'One Of' instructions ----->
let singeElementOneOf2dArray = [["oneOfNextTwo","oneOfNextTwo",""]];
let singeElementOneOf2dArray_count = singeElementOneOf2dArray.length;
//<----- element of 'One Of' instructions ----->

//<-------------------------------------------------->
let singleFileCountTotal = attributesListContact2dArray_count
    -  singeElementOneOf2dArray_count;
let multipleFileCountTotal = attributesContactObject2dArray_count
    + attributesContactArrayOfObjects2dArray_count
    + attributesContactArray2dArray_count
    + attributeContact_optOut2dArray_count
    + attributeContact_postponed2dArray_count
    + attributeContact_systemPlus2dArray_count
    + attributeContact_assignmentFieldsPaths2dArray_count;
//<-------------------------------------------------->
console.log(singleFileCountTotal);
//<-------------------------------------------------->
console.log(attributesContactObject2dArray_count);
console.log(attributesContactArrayOfObjects2dArray_count);
console.log(attributesContactArray2dArray_count);
console.log(attributeContact_optOut2dArray_count);
console.log(attributeContact_postponed2dArray_count);
console.log(attributeContact_systemPlus2dArray_count);
console.log(attributeContact_assignmentFieldsPaths2dArray_count);
//<-------------------------------------------------->
console.log(multipleFileCountTotal);