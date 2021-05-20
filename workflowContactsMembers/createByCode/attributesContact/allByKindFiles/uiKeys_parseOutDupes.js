let uiKeyValueEveryArray = ["NNULL","NNULL","NNULL","NNULL","NNULL","first","last","company","jobTitle","locale","birthdate","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","email","email","email","NNULL","NNULL","emailP","emailP","emailP","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","phoneP","phoneP","phoneP","NNULL","NNULL","phone","phone","phone","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","address","address","address","address","address","address","address","address","address","address","address","address","address","address","address"];
// let uiKeyValueEveryArray = ["NNULL","NNULL","NNULL","NNULL","NNULL","first","last"];//,"company","jobTitle","locale","birthdate","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","email","email","email","NNULL","NNULL","emailP","emailP","emailP","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","phoneP","phoneP","phoneP","NNULL","NNULL","phone","phone","phone","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","NNULL","address","address","address","address","address","address","address","address","address","address","address","address","address","address","address"];
let uiKeyValueUniqueArray = [];
let dog = "Marcy";
let counterEvery = 0;
let counterUnique = 0;
let clNext = false;
uiKeyValueEveryArray.forEach(element => {
    if (counterEvery % 5 === 0) {
        clNext = true;
    }
    counterEvery++;
    if (!uiKeyValueUniqueArray.includes(element)) {
        counterUnique++;
        uiKeyValueUniqueArray.push(element);
        // if (clNext) {
        //     console.log(uiKeyValueUniqueArray);
        //     clNext = false;
        //     dog = "Chester"
        // }
    };
    if (clNext) {
        console.log(uiKeyValueUniqueArray);
        clNext = false;
        dog = "Chester"
    }
    if ("STEP" ===  "into") {
        throw new Error('just get out of here!');
    }
});
dog = "Marais"

let chkbxKeyArray = ['NNULL', 'first', 'last', 'company', 'jobTitle', 'locale', 'birthdate', 'email', 'emailP', 'phoneP', 'phone', 'address'];


