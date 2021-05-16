// ø <----- <gatherErrorMessage>  ----->
export function gatherErrorMessage(paramObject) {

    // ! <errorMessageLibrary>
    let errorMessageLibrary = { messages: { phemValueEM: { NO_AT: { message: "an Email must have an '@' symbol" }, AT_ZERO: { message: "an Email cannot have the '@' symbol as the first character" }, NO_DOT: { message: "an Email must have at least one '.' (dot) after the '@' symbol" }, comments: "multiple '@'s could be added, but lack of 'patternCount()' is limiting" }, phemValuePH: { message: "a phone must contain at least 10 numeric characters (digits)", comments: "only validation is too short, because of extensions, this could be more than 10" }, labelKey: { message: "a label must not be an empty string" }, addrssStreetAddress: { message: "Stret Address must not be an empty string" }, addrssCity: { message: "City must not be an empty string" }, addrssPostalCode: { LENGTH: { message: "the Zip Code must be 5 characters in length" }, NON_DIGITS: { message: "the Zip Code must be entirely numeric characters (digits)" } } } };
    // ! </errorMessageLibrary>
    let keyOne = "";
    let keyTwo = "";
    let messageThis = "";

    paramObject.errors.forEach(elementThis => {
        if (typeof elementThis === 'string' && elementThis.length > 0) {
            keyOne = elementThis;
            messageThis = errorMessageLibrary.messages[keyOne].message;
        } else {
            keyOne = elementThis[0];
            keyTwo = elementThis[1];
            messageThis = errorMessageLibrary.messages[keyOne][keyTwo].message;
        }
        paramObject.errorMessages.push(messageThis);
        // console.log(messageThis);
    });
}//END gatherErrorMessage(paramObject)
// ø <----- </gatherErrorMessage> ----->
