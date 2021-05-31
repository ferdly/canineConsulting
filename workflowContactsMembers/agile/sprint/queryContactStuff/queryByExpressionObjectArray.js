let paramObject = {};
paramObject.lableKeys = {};
paramObject.lableKeys.hasSome = ['custom.gender-male','custom.t202106']

let quaryObjectArray =[];
let expressionObject = {};

expressionObject = {};
expressionObject.operator = null;
expressionObject.leftParenths = null;
expressionObject.key = 'labelKeys';
expressionObject.operator = 'hasSome';
expressionObject.value = paramObject.lableKeys.hasSome;
expressionObject.rightParenths = null;
writePseudoExpression(expressionObject);
quaryObjectArray.push(expressionObject);


// ! <Write to Quokka>
console.warn('quaryObjectArray: ');
console.warn(quaryObjectArray);
// ! </Write to Quokka>





export function writePseudoExpression(expressionObjectAsParam){
    let expressionString = '';
    let supportedOperatorArray = ['hasSome'];

    expressionString += expressionObjectAsParam.operator === 'AND' ? ` ${expressionObjectAsParam.operator} ` : '';
    expressionString += expressionObjectAsParam.operator === 'OR' ? ` ${expressionObjectAsParam.operator} ` : '';
    expressionString += expressionObjectAsParam.leftParenths === true ? ' ( ' : '';
    expressionString += ' [ ';
    expressionString += expressionObjectAsParam.key;
    expressionString += supportedOperatorArray.includes(expressionObjectAsParam.operator) ? ` ${expressionObjectAsParam.operator} ` : '';
    expressionString += expressionObjectAsParam.value === null ? '' : expressionObjectAsParam.value;
    expressionString += ' ] ';
    expressionString += expressionObjectAsParam.rightParenths === true ? ' ) ' : '';
    expressionObjectAsParam.pseudoExpression = expressionString;
    
}
