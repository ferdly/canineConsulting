// /*20210505200700*/let flatSkinnyJSON = "{\"attributeArray\":[{\"name\":\"KEY.name\",\"path\":\"KEY.path\",\"index\":\"KEY.index\",\"ruMePath\":\"KEY.ruMePath\",\"ruMeCode\":\"KEY.ruMeCode\",\"uiKey\":\"KEY.uiKey\",\"ruMeNotes\":[\"KEY.ruMeNotes\"]},{\"name\":\"KEY.name\",\"path\":\"KEY.path\",\"index\":\"i\",\"ruMePath\":\"KEY.ruMePath\",\"ruMeCode\":\"KEY.ruMeCode\",\"uiKey\":\"KEY.uiKey\",\"ruMeNotes\":[\"KEY.ruMeNotes\"]}]}";
// let flatSkinny = JSON.parse(flatSkinnyJSON);
// /*20210505200700*/let partOneFlatSkinnyJSON = "{\"attributeArray\":[{\"name\":\"KEY.name\",\"path\":\"KEY.path\",\"index\":\"KEY.index\",\"ruMePath\":\"KEY.ruMePath\",\"ruMeCode\":\"KEY.ruMeCode\",\"uiKey\":\"KEY.uiKey\",\"ruMeNotes\":[\"KEY.ruMeNotes\"]},{\"na";
// /*20210505200700*/let partTwoFlatSkinnyJSON = "me\":\"KEY.name\",\"path\":\"KEY.path\",\"index\":\"i\",\"ruMePath\":\"KEY.ruMePath\",\"ruMeCode\":\"KEY.ruMeCode\",\"uiKey\":\"KEY.uiKey\",\"ruMeNotes\":[\"KEY.ruMeNotes\"]}]}";
// let flatSkinny = JSON.parse(partOneFlatSkinnyJSON + partTwoFlatSkinnyJSON);
let simplArraysFlatSkinnyJSON = "me\":\"KEY.name\",\"path\":\"KEY.path\",\"index\":\"i\",\"ruMePath\":\"KEY.ruMePath\",\"ruMeCode\":\"KEY.ruMeCode\",\"uiKey\":\"KEY.uiKey\",\"ruMeNotes\":[\"KEY.ruMeNotes\"]}]}";
let simplArraysFlatSkinnyJSON = "me\":\"KEY.name\",\"path\":\"KEY.path\",\"index\":\"i\",\"ruMePath\":\"KEY.ruMePath\",\"ruMeCode\":\"KEY.ruMeCode\",\"uiKey\":\"KEY.uiKey\",\"ruMeNotes\":[\"KEY.ruMeNotes\"]}]}";
// let flatSkinny = JSON.parse(partOneFlatSkinnyJSON + partTwoFlatSkinnyJSON);

let which = [];
//<toggle code>
which.push("super_skinny")
which.push("2dArray");
//</toggle code>
let renderSuper_skinny = which.includes('super_skinny') ? true : false;
let render2dArray = which.includes('2dArray') ? true : false;
//<toggle overload render>
// renderSuper_skinny = false;
// render2dArray = false;
//</toggle overload render>

let resultSuperSkinny = {attributeArray:[]};
// console.log(resultSuperSkinny);
if (which.includes('super_skinny')) {
    
    let resultObjectArray = [];
    flatSkinny.attributeArray.forEach(element => {
        let elementObject = {};
        elementObject.name = element.name;
        elementObject.path = element.path;
        elementObject.index = element.index;
        elementObject.ruMePath = element.ruMePath;
        elementObject.ruMeCode = element.ruMeCode;
        elementObject.uiKey = element.uiKey;
        if (element.index !== 'i') {
            resultObjectArray.push(elementObject);
        }
    });
    resultSuperSkinny.attributeArray = resultObjectArray;
    
    if (renderSuper_skinny) {
        // console.log(JSON.stringify(resultSuperSkinny));
        console.log(JSON.stringify(resultSuperSkinny,undefined,4));
        // console.log(resultSuperSkinny);
    }
}
if (which.includes('2dArray')) {
    let attributeArray = [];
    if (resultSuperSkinny.attributeArray.length === 0) {
        attributeArray = flatSkinny.attributeArray;
    } else {
        attributeArray = resultSuperSkinny.attributeArray;
        // attributeArray = [];
    }
    let result2dArray = [];
    attributeArray.forEach(element => {
        let elementArray = [];
        elementArray.push(element.name);
        elementArray.push(element.path);
        elementArray.push(element.index);
        elementArray.push(element.ruMePath);
        elementArray.push(element.ruMeCode);
        elementArray.push(element.uiKey);
        result2dArray.push(elementArray);
    });
    
    if (render2dArray) {
        console.log(JSON.stringify(result2dArray));
        // console.log(result2dArray);
    }
}