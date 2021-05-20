export function lightboxCoreSwitchSkeleton(paramObject = {}) {

    let action = 'READ';
    let kind = $w('#recievedKind').value;
    switch (kind) {
        case 'emails':
            console.log(action + ' | ' + kind);
            break;

        case 'phones':
            console.log(action + ' | ' + kind);
            break;

        case 'addresses':
            console.log(action + ' | ' + kind);
            break;

        case 'labelKeys':
            console.log(action + ' | ' + kind);
            break;

        default:
            console.log(action + ' | ' + kind + ' – is not supported in Switch');
            break;
    }

}
