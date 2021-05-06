/*20210505200700*/let flatSkinnyJSON = "";
let flatSkinny = JSON.parse(flatSkinnyJSON);

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
console.log(result2dArray);