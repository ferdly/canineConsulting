export function doAllClearShowExpandHideCollapse(paramObject) {
    if ( typeof paramObject.clearObjectIdArray === 'object' && Array.isArray(paramObject.clearObjectIdArray) ) {
        doAllClear(paramObject.clearObjectIdArray)
    }
    if ( typeof paramObject.showObjectIdArray === 'object' && Array.isArray(paramObject.showObjectIdArray) ) {
        doAllClear(paramObject.showObjectIdArray)
    }
    if ( typeof paramObject.hideObjectIdArray === 'object' && Array.isArray(paramObject.hideObjectIdArray) ) {
        doAllClear(paramObject.hideObjectIdArray)
    }
    if ( typeof paramObject.expandObjectIdArray === 'object' && Array.isArray(paramObject.expandObjectIdArray) ) {
        doAllClear(paramObject.expandObjectIdArray)
    }
    if ( typeof paramObject.collapseObjectIdArray === 'object' && Array.isArray(paramObject.collapseObjectIdArray) ) {
        doAllClear(paramObject.collapseObjectIdArray)
    }
}//END doAllClearShowExpandHideCollapse()
export function doAllClear(clearObjectIdArrayParam = []) {

    //<clear>
    let clearObjectIdArray = [];
    if (typeof clearObjectIdArrayParam === 'string') {
        clearObjectIdArray.push(clearObjectIdArrayParam);
    } else {
        clearObjectIdArray = clearObjectIdArrayParam;
    }
    // wixSupportedTypeValueArray = /*veloAPI*/['$w.TextInput','$w.TextBox','$w.RichTextBox','$w.RadioButtonGroup','$w.CheckboxGroup','$w.Dropdown','$w.SelectionTags','$w.Slider','$w.DatePicker','$w.UploadButton','$w.RatingsInput','$w.AddressInput','$w.Switch','$w.SignatureInput','$w.Captcha'];
    // wixSupportedTypeValueArray.push('$w.Button');// by personal testing
    clearObjectIdArray.forEach(element => {
        element = element.substr(0, 1) === "#" ? element : "#" + element;
        let myType = $w(element).type; // "$w.Type"
        if (myType === '$w.Text') {
            // $w(element).text = 'EEMPTY';
            $w(element).text = '';
            //console.log('Text ' + myType);
        } else if (myType === '$w.Button') {
            $w(element).label = '';
        } else {
            //console.log('Other ' + myType);
            $w(element).value = '';
            $w(element).resetValidityIndication();
        }
    })
    //</clear>
}//END doAllClear()

export function doAllShow(showObjectIdArrayParam = []) {

    //<show>
    let showObjectIdArray = [];
    if (typeof showObjectIdArrayParam === 'string') {
        showObjectIdArray.push(showObjectIdArrayParam);
    } else {
        showObjectIdArray = showObjectIdArrayParam;
    }
    showObjectIdArray.forEach(element => {
        element = element.substr(0, 1) === "#" ? element : "#" + element;
        $w(element).show();
    })
    //</show>
}//END doAllShow()


export function doAllHide(hideObjectIdArrayParam = []) {
    //<hide>
    let hideObjectIdArray = [];
    if (typeof hideObjectIdArrayParam === 'string') {
        hideObjectIdArray.push(hideObjectIdArrayParam);
    } else {
        hideObjectIdArray = hideObjectIdArrayParam;
    }
    hideObjectIdArray.forEach(element => {
        element = element.substr(0, 1) === "#" ? element : "#" + element;
        $w(element).hide();
    })
    //</hide>

}//END doAllHide()
export function doAllExpand(expandObjectIdArrayParam = []) {
    //<expand>
    let expandObjectIdArray = [];
    if (typeof expandObjectIdArrayParam === 'string') {
        expandObjectIdArray.push(expandObjectIdArrayParam);
    } else {
        expandObjectIdArray = expandObjectIdArrayParam;
    }
    expandObjectIdArray.forEach(element => {
        element = element.substr(0, 1) === "#" ? element : "#" + element;
        $w(element).expand();
    })
    //</expand>

}//END doAllExpand()
export function doAllCollapse(collapseObjectIdArrayParam = []) {
    //<collapse>
    let collapseObjectIdArray = [];
    if (typeof collapseObjectIdArrayParam === 'string') {
        collapseObjectIdArray.push(collapseObjectIdArrayParam);
    } else {
        collapseObjectIdArray = collapseObjectIdArrayParam;
    }
    collapseObjectIdArray.forEach(element => {
        element = element.substr(0, 1) === "#" ? element : "#" + element;
        $w(element).collapse();
    })
    //</collapse>

}//END doAllCollapse()
