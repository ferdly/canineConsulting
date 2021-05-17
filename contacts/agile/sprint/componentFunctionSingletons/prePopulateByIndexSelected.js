// ø <----- <prePopulate from Index>  ----->
export function prePopulateByIndexSelected(paramObject) {
    let action = 'prepopulate';
    let prePopulateKind = paramObject.state.kind
    let prePopulateIndex = Number(paramObject.state.selectedIndex);
    prePopulateKind = paramObject.state.selectedIndex < paramObject.state.nextIndex ? prePopulateKind : "NNEW";
    prePopulateKind = paramObject.state.wix === true ? prePopulateKind : "WWIX";
    let overallMessage = [];
    overallMessage.push(action);
    switch (prePopulateKind) {
        case "NNEW":
            overallMessage.push("new array element object, no prepoulate indicated");
            paramObject.overallResultMessages.push(overallMessage);
            break;

        case "WWIX":
            overallMessage.push("wix boolean is false, no prepoulate indicated");
            paramObject.overallResultMessages.push(overallMessage);
            break;

        case "emails":
            $w('#phemValue').value = paramObject.state.currentObectArray[prePopulateIndex].email;
            $w('#phemTag').value = paramObject.state.currentObectArray[prePopulateIndex].tag;
            if (typeof paramObject.state.currentObectArray[prePopulateIndex].primary === 'boolean') {
                $w('#phemPrimary').checked = paramObject.state.currentObectArray[prePopulateIndex].primary === true ? true : false;
            }
            break;

        case "phones":
            $w('#phemValue').value = paramObject.state.currentObectArray[prePopulateIndex].phone;
            $w('#phemTag').value = paramObject.state.currentObectArray[prePopulateIndex].tag;
            if (typeof paramObject.state.currentObectArray[prePopulateIndex].primary === 'boolean') {
                $w('#phemPrimary').checked = paramObject.state.currentObectArray[prePopulateIndex].primary === true ? true : false;
            }

            break;

        case "labelKeys":
            $w('#labelKey').value = paramObject.state.currentObectArray[prePopulateIndex]
            break;

        case "addresses":
            $w('#addrssTag').value = paramObject.state.currentObectArray[prePopulateIndex].tag;
            let addrssStreetAddress = paramObject.state.currentObectArray[prePopulateIndex].address.streetAddress.number + ' ';
            addrssStreetAddress += paramObject.state.currentObectArray[prePopulateIndex].address.streetAddress.name;
            $w('#addrssStreetAddress').value = addrssStreetAddress;
            $w('#addrssAddressLine2').value = paramObject.state.currentObectArray[prePopulateIndex].address.addressLine2;
            $w('#addrssCity').value = paramObject.state.currentObectArray[prePopulateIndex].address.city;
            $w('#addrssSubdivision').value = paramObject.state.currentObectArray[prePopulateIndex].address.subdivision;
            $w('#addrssPostalCode').value = paramObject.state.currentObectArray[prePopulateIndex].address.postalCode;
            $w('#addrssLocationLatitude').value = paramObject.state.currentObectArray[prePopulateIndex].address.location.latitude;
            $w('#addrssLocationLongitude').value = paramObject.state.currentObectArray[prePopulateIndex].address.location.longitude;
            break;

        default:
            overallMessage.push(paramObject.state.kind + ' is Not Supported for this SWITCH');
            paramObject.overallResultMessages.push(overallMessage);
            break;
    }
}//END prePopulateByIndexSelected(paramObject)
// ø <----- </prePopulate from Index> ----->