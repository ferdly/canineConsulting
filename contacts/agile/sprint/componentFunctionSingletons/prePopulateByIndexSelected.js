// ø <----- <prePopulate from Index>  ----->
export function prePopulateByIndexSelected(paramObject) {
    let action = 'prepopulate';
    let prePopulateKind = paramObject.state.kind
    prePopulateKind = paramObject.state.selectedIndex < paramObject.state.nextIndex ? prePopulateKind : "NNEW";
    prePopulateKind = paramObjectThis.state.wix === true ? prePopulateKind : "WWIX";
    let overallMessage = [];
    overallMessage.push(action);
    switch (prePopulateKind) {
        case "NNEW":
            overallMessage.push("new array element object, no prepoulate indicated");
            paramObjectThis.overallResultMessages.push(overallMessage);
            break;

        case "WWIX":
            overallMessage.push("wix boolean is false, no prepoulate indicated");
            paramObjectThis.overallResultMessages.push(overallMessage);
            break;

        case "emails":
            $w('#phemValue').value = paramObject.state.currentObectArray.emails.email;
            $w('#phemTag').value = paramObject.state.currentObectArray.emails.tag;
            $w('#phemPrimary').checked = paramObject.state.currentObectArray.emails.primary === true ? true : false;
            break;

        case "phones":
            $w('#phemValue').value = paramObject.state.currentObectArray.phones.phone;
            $w('#phemTag').value = paramObject.state.currentObectArray.phones.tag;
            $w('#phemPrimary').checked = paramObject.state.currentObectArray.phones.primary === true ? true : false;

            break;

        case "labelKeys":
            $w('#labelKey').value = paramObject.state.currentObectArray.labelKey
            break;

        case "addresses":
            $w('#addrssTag').value = paramObject.state.currentObectArray.tag;
            $w('#addrssStreetAddress').value = paramObject.state.currentObectArray.address.addrssStreetAddress;
            $w('#addrssAddressLine2').value = paramObject.state.currentObectArray.address.addressLine2;
            $w('#addrssCity').value = paramObject.state.currentObectArray.address.city;
            $w('#addrssSubdivision').value = paramObject.state.currentObectArray.address.subdivision;
            $w('#addrssPostalCode').value = paramObject.state.currentObectArray.address.postalCode;
            $w('#addrssLocationLatitude').value = paramObject.state.currentObectArray.address.location.latitude;
            $w('#addrssLocationLongitude').value = paramObject.state.currentObectArray.address.location.longitude;
            break;

        default:
            overallMessage.push(paramObject.state.kind + ' is Not Supported for this SWITCH');
            paramObjectThis.overallResultMessages.push(overallMessage);
            break;
    }
}//END prePopulateByIndexSelected(paramObject)
// ø <----- </prePopulate from Index> ----->