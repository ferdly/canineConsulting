/*20210505200700*/let flatSkinnyJSON = "{\"attributeArray\":[{\"name\":\"KEY.name\",\"path\":\"KEY.path\",\"index\":\"KEY.index\",\"ruMePath\":\"KEY.ruMePath\",\"ruMeCode\":\"KEY.ruMeCode\",\"uiKey\":\"KEY.uiKey\"},{\"name\":\"INSTANTIATE_ARRAY\",\"path\":\"labelKeys\",\"index\":\"NNULL\",\"ruMePath\":\"ZXZruMePath\",\"ruMeCode\":\"eval('[]')\",\"uiKey\":\"labelKeys\"},{\"name\":\"labelKeys-Seed\",\"path\":\"labelKeys.i\",\"index\":0,\"ruMePath\":\"seed\",\"ruMeCode\":\"eval('seed-' + this)\",\"uiKey\":\"labelKeys\"},{\"name\":\"labelKeys-Username\",\"path\":\"labelKeys.i\",\"index\":1,\"ruMePath\":\"login.username\",\"ruMeCode\":\"eval('username-' + this)\",\"uiKey\":\"labelKeys\"},{\"name\":\"email\",\"path\":\"primaryInfo.email\",\"index\":\"NNULL\",\"ruMePath\":\"NNULL\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"NNULL\"},{\"name\":\"phone\",\"path\":\"primaryInfo.phone\",\"index\":\"NNULL\",\"ruMePath\":\"NNULL\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"NNULL\"},{\"name\":\"INSTANTIATE_OBJECT\",\"path\":\"info\",\"index\":\"NNULL\",\"ruMePath\":\"NULL\",\"ruMeCode\":\"eval('{}')\",\"uiKey\":\"NNULL\"},{\"name\":\"INSTANTIATE_OBJECT\",\"path\":\"info.name\",\"index\":\"NNULL\",\"ruMePath\":\"name.first\",\"ruMeCode\":\"eval('{}')\",\"uiKey\":\"NNULL\"},{\"name\":\"first\",\"path\":\"info.name.first\",\"index\":\"NNULL\",\"ruMePath\":\"name.first\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"first\"},{\"name\":\"last\",\"path\":\"info.name.last\",\"index\":\"NNULL\",\"ruMePath\":\"name.last\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"last\"},{\"name\":\"company\",\"path\":\"info.company\",\"index\":\"NNULL\",\"ruMePath\":\"company\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"company\"},{\"name\":\"jobTitle\",\"path\":\"info.jobTitle\",\"index\":\"NNULL\",\"ruMePath\":\"jobTitle\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"jobTitle\"},{\"name\":\"locale\",\"path\":\"info.locale\",\"index\":\"NNULL\",\"ruMePath\":\"locale\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"locale\"},{\"name\":\"birthdate\",\"path\":\"info.birthdate\",\"index\":\"NNULL\",\"ruMePath\":\"birthdate\",\"ruMeCode\":\"NNULL\",\"uiKey\":\"birthdate\"},{\"name\":\"INSTANTIATE_ARRAY\",\"path\":\"info.emails\",\"index\":\"NNULL\",\"ruMePath\":\"NNULL\",\"ruMeCode\":\"eval('[]')\",\"uiKey\":\"emails\"}]}";
let flatSkinny = JSON.parse(flatSkinnyJSON);

let which = "ZXZ"
which = "2dArray";
// which = "super_skinny";

if (which === "2dArray") {
    
    let result2dArray = [];
    flatSkinny.attributeArray.forEach(element => {
        let elementArray = [];
        elementArray.push(element.name);
        elementArray.push(element.path);
        elementArray.push(element.index);
        elementArray.push(element.ruMePath);
        elementArray.push(element.ruMeCode);
        elementArray.push(element.uiKey);
        result2dArray.push(elementArray);
    });
    
    console.log(JSON.stringify(result2dArray));
    // console.log(result2dArray);
}
if (which === "super_skinny") {
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
    let resultSuperSkinny = {attributeArray:[]};
    resultSuperSkinny.attributeArray = resultObjectArray;
    
    // console.log(JSON.stringify(resultSuperSkinny));
    console.log(JSON.stringify(resultSuperSkinny,undefined,4));
    // console.log(resultSuperSkinny);
}