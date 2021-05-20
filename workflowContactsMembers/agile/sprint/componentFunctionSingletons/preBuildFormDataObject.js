// ø <----- <preBuildParamObject>  ----->
export function preBuildFormDataObject(paramObject) {
    let tempSplit = []
    switch (paramObject.state.kind) {
        case 'emails':
            if (paramObject.state.wix) {
                paramObjectThis.formData.email = $w('#phemValue').value;
                paramObjectThis.formData.tag = $w('#phemTag').value;
                paramObjectThis.formData.primary = $w('#phemPrimary').isChecked();
            } else {
                paramObjectThis.formData.email = testFormDataObject.emails.email;
                paramObjectThis.formData.tag = testFormDataObject.emails.tag;
                paramObjectThis.formData.primary = testFormDataObject.emails.primary;
            }
            break;

        case 'phones':
            if (paramObject.state.wix) {
                paramObjectThis.formData.phone = $w('#phemValue').value;
                paramObjectThis.formData.tag = $w('#phemTag').value;
                paramObjectThis.formData.primary = $w('#phemPrimary').isChecked();
            } else {
                paramObjectThis.formData.phone = testFormDataObject.phones.phone;
                paramObjectThis.formData.tag = testFormDataObject.phones.tag;
                paramObjectThis.formData.primary = testFormDataObject.phones.primary;
            }
            break;

        case 'labelKeys':
            if (paramObject.state.wix) {
                paramObjectThis.formData.labelKey = $w('#labelKey').value;
            } else {
                paramObjectThis.formData.labelKey = testFormDataObject.labelKey;
            }
            break;

        case 'addresses':
            paramObjectThis.formData.address = {};
            if (paramObject.state.wix) {
                paramObjectThis.formData.tag = $w('#addrssTag').value;
                paramObjectThis.formData.address.addrssStreetAddress = $w('#addrssStreetAddress').value;
                paramObjectThis.formData.address.addressLine2 = $w('#addrssAddressLine2').value;
                paramObjectThis.formData.address.city = $w('#addrssCity').value;
                paramObjectThis.formData.address.subdivision = $w('#addrssSubdivision').value;
                paramObjectThis.formData.address.postalCode = $w('#addrssPostalCode').value;
                paramObjectThis.formData.address.country = "US";
                paramObjectThis.formData.address.location.latitude = $w('#addrssLocationLatitude').value;
                paramObjectThis.formData.address.location.longitude = $w('#addrssLocationLongitude').value;
                paramObjectThis.formData.address.formatted = "PPENDING";
            } else {
                paramObjectThis.formData.tag = testFormDataObject.tag;
                paramObjectThis.formData.address.addrssStreetAddress = testFormDataObject.addrssStreetAddress;
                paramObjectThis.formData.address.addressLine2 = testFormDataObject.addressLine2;
                paramObjectThis.formData.address.city = testFormDataObject.city;
                paramObjectThis.formData.address.subdivision = testFormDataObject.subdivision;
                paramObjectThis.formData.address.postalCode = testFormDataObject.postalCode;
                paramObjectThis.formData.address.country = "US";
                paramObjectThis.formData.address.location = {};
                paramObjectThis.formData.address.location.latitude = testFormDataObject.location.latitude;
                paramObjectThis.formData.address.location.longitude = testFormDataObject.location.longitude;
                paramObjectThis.formData.address.formatted = "PPENDING";
            }
            tempSplit = (paramObjectThis.formData.address.addrssStreetAddress).split(' ');
            paramObjectThis.formData.address.streetAddress = {};
            paramObjectThis.formData.address.streetAddress.number = tempSplit.shift();
            paramObjectThis.formData.address.streetAddress.name = tempSplit.join(' ');
            break;

        default:
            paramObjectThis.overallResultMessages.push(paramObject.state.kind + ' is Not Supported for this SWITCH');
            break;
    }
}//END preBuildFormDataObject(paramObject)
// ø <----- </preBuildParamObject> ----->
