// $w("#myDropdown").options = [
//     {"label": "Who's on first!", "value": "first"},
//     {"label": "What's on second", "value": "second"},
//     {"label": "I Don't Know is on third", "value": "third"}
//   ];

let indexThis = 16;
let indexString = '100';
let optionsByIndex = [];
let word = 'one hundred';
let element = {};
for (let index = 0; index < indexThis; index++) {
    word = populateCurrentArrayByKind(index);
    indexString = index.toString();
    element = {};
    element.label = word;
    element.value = indexString;
    optionsByIndex.push(element);
}
console.warn('optionsByIndex: ');
console.warn(optionsByIndex);

// let indexArray = [0,1,7,4,49]
// let kindThis = 'cardinality';
// let index = Math.floor(Math.random() * indexArray.length);
// let indexThis = indexArray[index];

// // console.warn('kindThis: ' + kindThis);
// console.warn('indexThis: ' + indexThis);

// let word = populateCurrentArrayByKind(indexThis);

// console.warn('word: ' + word);

export function populateCurrentArrayByKind(index,kind = 'cardinality'){
	let wordsByIndexObjectJSON = "{\"wordsByIndex\":[{\"en\":\"zero\",\"es\":\"cero\"},{\"en\":\"one\",\"es\":\"uno\"},{\"en\":\"two\",\"es\":\"dos\"},{\"en\":\"three\",\"es\":\"tres\"},{\"en\":\"four\",\"es\":\"cuatro\"},{\"en\":\"five\",\"es\":\"cinco\"},{\"en\":\"six\",\"es\":\"seis\"},{\"en\":\"seven\",\"es\":\"siete\"},{\"en\":\"eight\",\"es\":\"ocho\"},{\"en\":\"nine\",\"es\":\"nueve\"},{\"en\":\"ten\",\"es\":\"diez\"},{\"en\":\"eleven\",\"es\":\"once\"},{\"en\":\"twelve\",\"es\":\"doce\"},{\"en\":\"thirteen\",\"es\":\"trece\"},{\"en\":\"fourteen\",\"es\":\"catorce\"},{\"en\":\"fifteen\",\"es\":\"quince\"},{\"en\":\"sixteen\",\"es\":\"dieciséis\"},{\"en\":\"seventeen\",\"es\":\"diecisiete\"},{\"en\":\"eighteen\",\"es\":\"dieciocho\"},{\"en\":\"nineteen\",\"es\":\"diecinueve\"},{\"en\":\"twenty\",\"es\":\"veinte\"},{\"en\":\"twenty-one\",\"es\":\"veintiuno\"},{\"en\":\"twenty-two\",\"es\":\"veintidós\"},{\"en\":\"twenty-three\",\"es\":\"veintitrés\"},{\"en\":\"twenty-four\",\"es\":\"veinticuatro\"},{\"en\":\"twenty-five\",\"es\":\"veinticinco\"},{\"en\":\"twenty-six\",\"es\":\"veintiséis\"},{\"en\":\"twenty-seven\",\"es\":\"veintisiete\"},{\"en\":\"twenty-eight\",\"es\":\"veintiocho\"},{\"en\":\"twenty-nine\",\"es\":\"veintinueve\"},{\"en\":\"thirty\",\"es\":\"treinta\"},{\"en\":\"thirty-one\",\"es\":\"treinta y uno\"},{\"en\":\"thirty-two\",\"es\":\"treinta y dos\"},{\"en\":\"thirty-three\",\"es\":\"treinta y tres\"},{\"en\":\"thirty-four\",\"es\":\"treinta y cuatro\"},{\"en\":\"thirty-five\",\"es\":\"treinta y cinco\"},{\"en\":\"thirty-six\",\"es\":\"treinta y seis\"},{\"en\":\"thirty-seven\",\"es\":\"treinta y siete\"},{\"en\":\"thirty-eight\",\"es\":\"treinta y ocho\"},{\"en\":\"thirty-nine\",\"es\":\"treinta y nueve\"},{\"en\":\"forty\",\"es\":\"cuarenta\"},{\"en\":\"forty-one\",\"es\":\"cuarenta y uno\"},{\"en\":\"forty-two\",\"es\":\"cuarenta y dos\"},{\"en\":\"forty-three\",\"es\":\"cuarenta y tres\"},{\"en\":\"forty-four\",\"es\":\"cuarenta y cuatro\"},{\"en\":\"forty-five\",\"es\":\"cuarenta y cinco\"},{\"en\":\"forty-six\",\"es\":\"cuarenta y seis\"},{\"en\":\"forty-seven\",\"es\":\"cuarenta y siete\"},{\"en\":\"forty-eight\",\"es\":\"cuarenta y ocho\"},{\"en\":\"forty-nine\",\"es\":\"cuarenta y nueve\"},{\"en\":\"fifty\",\"es\":\"cincuenta\"}]}";
	let wordsByIndexObject = JSON.parse(wordsByIndexObjectJSON);
	if(kind === 'cardinality'){
		index++;
	}
	let element = wordsByIndexObject.wordsByIndex[index];
	let word = element.en;
    return word;
}


  