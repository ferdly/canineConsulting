export function switchIsPrimary_change(event) {
    let warnTxt = "When marking an email as 'primary' \nother emails become unmarked...";
    warnTxt = $w('#recievedKind').value === 'phones' ? "When marking a phone as 'primary' \nother phones become unmarked..." : warnTxt;
	if($w("#switchIsPrimary").checked){
        $w('#primaryWarnTxt').text = warnTxt;
        $w('#primaryWarnTxt').show();
    }else{
        $w('#primaryWarnTxt').hide();
    }
}