// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world
// import {fetch} from 'wix-fetch';
import {getJSON} from 'wix-fetch';
// import wixCrmBackend from 'wix-crm-backend';
// import { contacts } from 'wix-crm-backend'
import { multiply } from 'backend/crmModule.jsw'
import { steamdaGetContactFunction } from 'backend/crmModule.jsw'
// import { myBackendFunction } from 'backend/aModule.jsw'


$w.onReady(function () {
	// Write your JavaScript here

	// To select an element by ID use: $w("#elementID")

	// Click "Preview" to run your code
	$w("#topMenu").scrollTo()
});

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnClearMember_click(event) {
	$w("#memberJSON").value = " ";
	$w("#crmContactId").value = '';
	$w("#inputRevision").value = '';
	$w("#dataMembers").scrollTo();
	$w("#errorTextBox").hide();
}

export function btnGetMemberItemJSON_click(event,$w) {
	$w("#crmContactId").value = '';
	let targetItem = $w("#dsMember").getCurrentItem();
	$w("#crmContactId").value = targetItem._id;
	// console.log(targetItem);
	let stringMemberJSON = "HOLDER";
	stringMemberJSON = JSON.stringify(targetItem, undefined, 4);
	$w("#memberJSON").value = stringMemberJSON;
	$w("#contactCurrent").value = stringMemberJSON;
	$w("#anchorMemberSelected").scrollTo()
	$w("#crmContactId").focus();
	$w("#currentConstactHeader").text = 'Member Selected (see constant above)';
}

export function btnClearContact_click(event) {
	$w("#contactCurrent").value = '';
	$w("#anchorClearMember").scrollTo()
}


/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnGetContactById_click(event) {
	let currMemberId = $w('#crmContactId').value;
	console.log('currMemberId: ' + currMemberId)
	let contact = steamdaGetContactFunction(currMemberId)
		.then(contactReturned => {
			console.log(contactReturned);
			$w('#inputRevision').value = contactReturned.revision;
			$w('#contactCurrent').value = JSON.stringify(contactReturned, undefined, 4);
		})
		.catch(err => {
			$w('#contactCurrent').value = err;
		});
	// console.log(contact);
	// $w('#contactCurrent').value = JSON.stringify(contact, undefined, 4);
}


// export function myGetContactFunction() {
//   const contactId = "5448c23a-2723-44f9-9809-cd7ec099a3b5";
//   return contactId;
// // return myBackendFunction(contactId);
// //   const options = {
// //     suppressAuth: false
// //   };

// //   return contacts.getContact(contactId, options)
// //     .then((contact) => {
// //       return contact;
// //     })
// //     .catch((error) => {
// //       console.error(error);
// //     });
// }
// export function myBackendFunction(contactId) {
//   return wixCrmBackend.getContactById(contactId);
// }

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnMultiply_click(event) {
	let operand1 = $w('#operand1').value;
	let resultObject = {};
	console.log('operand1: ' + operand1 + '|' + $w('#operand1').value);
	let operand2 = $w('#operand2').value;
	console.log('operand2: ' + operand2 + '|' + $w('#operand2').value);
	let product = multiply(operand1,operand2)
		.then(result => {
		console.log(operand1 + ' * ' + operand2 + ' = ' + result);
		$w('#product').value = result;
		return result;
		});

}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnPostUpdate_click(event) {
	let result = doContactUpdatePost("post");
}

export function doContactUpdatePost(step){
	$w('#codeUpdateResult').value = "This Logic is Pending";
}

export function doContactUpdatePrep(step){
	let paramObject = {};
	console.log($w('#chkbxOptions').value);
	let optionsArray = $w('#chkbxOptions').value;
	let updateOptions = {};
	let key = 'allowDuplicates';
	let booleanValue = optionsArray.includes(key);
	updateOptions[key] = booleanValue;
	key = 'suppressAuth';
	booleanValue = optionsArray.includes(key);
	updateOptions[key] = booleanValue; 
	// let optionsJSON = JSON.stringify(updateOptions, undefined, 4);
	// console.log(optionsJSON);
	paramObject.options = updateOptions;
	let contactIdentifiers = {};
	contactIdentifiers.contactId = $w('#crmContactId').value;
	contactIdentifiers.revision = $w('#inputRevision').value;
	paramObject.contactIdentifiers = contactIdentifiers;
	let contactInfo = JSON.parse($w('#codePrepContact').value);
	paramObject.contactInfo = contactInfo.contactInfo;
	$w('#codePrepUpdate').value = JSON.stringify(paramObject, undefined, 4);
}

export function fauxFunctionForCodeHolder(){

}

export function btnPrepUpdate_click(event) {
	let result = doContactUpdatePrep("prep");
}

/**
 *	<Update Sequence Tabs>
 *	 @param {$w.MouseEvent} event
 */
export function tabContactPrep_click(event) {
	$w("#multiboxUpdateStatus").changeState("ContactPrep");
}
export function tabUpdatePrep_click(event) {
	$w("#multiboxUpdateStatus").changeState("UpdatePrep");
}
export function tabDoUpdate_click(event) {
	$w("#multiboxUpdateStatus").changeState("ExecuteUpdate");
}
// </Update Sequence Tabs>

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function appendKVPtoContactInfo_click(event) {
	let result = doAppendKVPtoContactInfo("append");
}

export function doAppendKVPtoContactInfo(step){
	$w('#errorTextBox').hide();
	let contactInfoHolder = JSON.parse($w('#codePrepContact').value);
	console.log(contactInfoHolder);
	// let contactInfo = {};
	if(typeof contactInfoHolder.contactInfo.name === 'undefined'){
		contactInfoHolder.contactInfo.name = {};
	}
	let key = $w('#inputKey').value;
	let stringValue = $w('#inputValue').value.trim();
	let supportedKeyArray = ['last','first'];
	key = typeof stringValue === 'string' ? key : 'INVALID_VALUE_TYPE';
	key = stringValue.length === 0 ? 'INVALID_VALUE_LENGTH' : key;
	key = supportedKeyArray.includes(key) === false ? 'UNSUPPORTED_KEY' : key;
	switch (key) {
		case 'last':
			//<should work>
			// but need to figure out 
			// contactInfo.name[key] =  stringValue;
			//</should work>
			contactInfoHolder.contactInfo.name.last =  stringValue;
			break;
		case 'first':
			contactInfoHolder.contactInfo.name.first =  stringValue;
			break;
		case 'INVALID_VALUE_TYPE':
			$w('#errorTextBox').show();
			$w('#errorTextBox').value =  "Error: Invalid Value Type; No action taken";
			break;
		case 'INVALID_VALUE_LENGTH':
			$w('#errorTextBox').show();
			$w('#errorTextBox').value =  "Error: Invalid Value length (probably empty); No action taken";
			break;
		case 'UNSUPPORTED_KEY':
			$w('#errorTextBox').show();
			$w('#errorTextBox').value =  "Error: unsupported Key; ['last',first']; No action taken";
			break;

		default:
			break;
	}
	$w('#codePrepContact').value = JSON.stringify(contactInfoHolder,undefined,4);
}
//<WiX API> first Copy Code	
async function doFetch(kind, paramObject){
	let resolvedResponse = {};
	switch (kind) {
		case 'randomUser':
			resolvedResponse = await doRandomUser(paramObject);//.then(result => {return result});
			console.log("TWO: case 'randomUser':");
			console.log(resolvedResponse);
			break;

		default:
			break;
	}
	console.log('return from SWITCH');
	// resultString = JSON.stringify(resultStringSwitch,undefined,4);
	return resolvedResponse;
}
async function doRandomUser(paramObject = {}){
	//https://randomuser.me/documentation
	let fetchParamObject = {};
	let getElementArray = ['results','gender','password','seed','format','nat','page','inc','exc','dl','noinfo','callback'];;
	//<instantiateEmpty>
	let stringHolder
	getElementArray.forEach(element => {
		if(typeof paramObject[element] === 'string'){
			stringHolder = paramObject[element];
			if(stringHolder.substr(0,1) === '&'){
				fetchParamObject[element] = stringHolder;
			}else{
				fetchParamObject[element] = '&' + element + '=' + stringHolder;
			}
		}else{
			fetchParamObject[element] = '';
		}
	})
	//</instantiateEmpty>
	fetchParamObject.url = 'https://randomuser.me/api';
	fetchParamObject.version = '';//'/1.3/'
	//<assign NonEmptyParameter getElementArray values>
	// fetchParamObject.results  = '';//'&results=5000';
	// fetchParamObject.gender   = '';//'&gender=female';
	// fetchParamObject.password = '';//'&password=upper,lower,1-16';
	// fetchParamObject.seed     = /*'';*/'&seed=8edfefd3e6f5ba90';
	// fetchParamObject.format   = '';//'&format=csv';
	fetchParamObject.nat      = fetchParamObject.nat === '&nat=EEMPTY' ? '' : '&nat=us';
	// fetchParamObject.page     = '';//'&page=3';
	// fetchParamObject.inc      = '';//'&inc=gender,name,nat';
	// fetchParamObject.exc      = '';//'&exc=login';
	// fetchParamObject.dl       = '';//'&dl';
	// fetchParamObject.noinfo   = '';//'&noinfo';
	// fetchParamObject.callback = '';//'&callback=randomuserdata';
	//</assign NonEmptyParameter getElementArray values>
	console.log('fetchParamObject via after Override')
	console.log(fetchParamObject)
	//<append Empty or Not>
	let requestString = '';
	getElementArray.forEach(element => {
		requestString += fetchParamObject[element];
	})
	//</append Empty or Not>
	requestString = requestString.substr(1);
	requestString = requestString.length > 0 ? '?' + requestString : '';
	requestString = fetchParamObject.url + fetchParamObject.version + requestString;
	// console.log(requestString);
	let response = await getJSON(requestString);
	console.log("ONE.a: response after 'await getJSON'");
	console.log(response);
	// let user = await response.json();//.json() is a promise
	// let resolvedResponse = await Promise.resolve(response);
	let resolvedResponse = response.results[0];
	resolvedResponse.seed = response.info.seed;
	resolvedResponse.location.country = resolvedResponse.location.country === 'United States' ? 'US' : resolvedResponse.location.country;
	// resolvedResponse.info = [];
	let transformedAttributes = [];//[['locale','literal'],['postalCode','ensure 5 and string'],[['birthdate'],['dob.date to left 10'],[['subdivision'],['2letter vesion of "state" (not removed)'],[['Company'],['Street name + random business kind'],[['jobTitle'],['random jobTitle']]
	resolvedResponse.developer = {};
	resolvedResponse.locale = 'en-US';
	transformedAttributes.push(['locale','literal en-US']);
	let postalCode = '00000' + resolvedResponse.location.postcode.toString();
	postalCode = postalCode.substr(-5);
	resolvedResponse.location.postalCode = postalCode;
	transformedAttributes.push(['postalCode','ensure 5 and string left postcode as number']);
	let birthdate = resolvedResponse.dob.date.substr(0,10);
	resolvedResponse.birthdate = birthdate;
	transformedAttributes.push(['birthdate'],['dob.date to left 10']);
	let stateAbbrvObject = {"Alabama":"AL","Alaska":"AK","American Samoa":"AS","Arizona":"AZ","Arkansas":"AR","California":"CA","Colorado":"CO","Connecticut":"CT","Delaware":"DE","District Of Columbia":"DC","Federated States Of Micronesia":"FM","Florida":"FL","Georgia":"GA","Guam":"GU","Hawaii":"HI","Idaho":"ID","Illinois":"IL","Indiana":"IN","Iowa":"IA","Kansas":"KS","Kentucky":"KY","Louisiana":"LA","Maine":"ME","Marshall Islands":"MH","Maryland":"MD","Massachusetts":"MA","Michigan":"MI","Minnesota":"MN","Mississippi":"MS","Missouri":"MO","Montana":"MT","Nebraska":"NE","Nevada":"NV","New Hampshire":"NH","New Jersey":"NJ","New Mexico":"NM","New York":"NY","North Carolina":"NC","North Dakota":"ND","Northern Mariana Islands":"MP","Ohio":"OH","Oklahoma":"OK","Oregon":"OR","Palau":"PW","Pennsylvania":"PA","Puerto Rico":"PR","Rhode Island":"RI","South Carolina":"SC","South Dakota":"SD","Tennessee":"TN","Texas":"TX","Utah":"UT","Vermont":"VT","Virgin Islands":"VI","Virginia":"VA","Washington":"WA","West Virginia":"WV","Wisconsin":"WI","Wyoming":"WY"};
	let state = resolvedResponse.location.state
	let subdivision = stateAbbrvObject[state];
	resolvedResponse.location.subdivision = subdivision;
	transformedAttributes.push(['subdivision','2letter vesion of "state" (not removed)']);
	let company = resolvedResponse.location.street.name;
	company = company.substr(0,company.indexOf(" "));//first word, how about all but last, but pretty good
	let bussnessKindArray = ['Incorporated','Limited','Corporation','University','College','Auto Parts','Associates','Restaurant','Stores'];
	company += ' ' + bussnessKindArray[Math.floor(Math.random() * bussnessKindArray.length)];
	resolvedResponse.company = company;
	transformedAttributes.push(['Company','Street name + random business kind']);
	let jobTitleArray = ['Manager','Sales','IT','Maintenance','Supervisor','Graphic Design','Accounting','Human Resources'];
	let jobTitle = jobTitleArray[Math.floor(Math.random() * jobTitleArray.length)];
	resolvedResponse.jobTitle = jobTitle;
	transformedAttributes.push(['jobTitle','random jobTitle']);
	// console.log(('transformedAttributes: '))
	// console.log((transformedAttributes))
	// let transformedAttributes = [['locale','literal'],['postalCode','ensure 5 and string'],[['birthdate'],['dob.date to left 10'],[['subdivision'],['2letter vesion of "state" (not removed)'],[['Company'],['Street name + random business kind'],[['jobTitle'],['random jobTitle']]
	resolvedResponse.developer.transformedAttributes = transformedAttributes;

	console.log("ONE.b: resolvedResponse after 'await getJSON'");
	console.log(resolvedResponse);
	return resolvedResponse;
	
}
/**
 * $.ajax({
 *   url: 'https://randomuser.me/api/',
 *  dataType: 'json',
 *  success: function(data) {
 *    console.log(data);
 *  }
 * });
 * 
 */
//</WiX API>



/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export async function btnFetchRandomPerson_click(event) {
	// let paramObject = {};
	let paramObject = JSON.parse($w('#boxParamObject').value);
	let addToCache = true;
	if(Object.keys(paramObject).includes('seed')){
		addToCache = false;
	}

	console.log('PREP: click + paramObject');
	console.log(paramObject);
	// paramObject.seed = "51c8e9b89b6955b0";
	let resolvedResponse = await doFetch("randomUser", paramObject);
	console.log('THREE: click + resolvedResponse');
	console.log(resolvedResponse);
	// let promisKey = 'justUser'
	// let justUserDoubleResult = randomUser[[PromiseResult]].results.results[0];
	// console.log(justUserDoubleResult);
	// let justUserSingleResult = randomUser[[PromiseResult]].results[0];
	// console.log(justUserSingleResult);
	if(typeof resolvedResponse === 'undefined'){
		resolvedResponse = "'randomUser' is undefined"
	}
	// console.log('click + randomUser');
	// console.log(randomUser);
	if(addToCache){
		let name = resolvedResponse.name.last + ', ' + resolvedResponse.name.first;
		let seed = resolvedResponse.seed;
		let element = {};
		element.name = name;
		element.seed = seed;
		console.log(element);
		let userCacheObject = JSON.parse($w('#randomUserCache').value);
		console.log(userCacheObject);
		userCacheObject.userCache.push(element);
		$w('#randomUserCache').value = JSON.stringify(userCacheObject,undefined,4);
	}
	$w('#randomuserDOTme').value = JSON.stringify(resolvedResponse,undefined,4);
}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function cachePrev_click(event) {
	selectSeed('previous'); 
}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function cacheNext_click(event) {
	selectSeed('next'); 
}

export function selectSeed(direction = 'next'){
	let seedIndex = Number($w('#seedWhich').value);
	let seedArray = JSON.parse($w('#randomUserCache').value).userCache;
	let seedArrayLength = seedArray.length;
	if($w('#seedWhich').value.length === 0){
		if(direction === 'next'){
			seedIndex = -1;
		}else{
			seedIndex = seedArrayLength;
		}
		
	}
	seedIndex += direction === 'next' ? 1 : -1;
	let seedIndexString = seedIndex.toString();
	if(seedIndex < 0 || seedIndex >= seedArrayLength){
		$w('#seedWhich').value = '';
		$w("#seedWhich").resetValidityIndication();
		$w('#seedSelected').value = '';
		$w("#seedSelected").resetValidityIndication();
	}else{
		$w('#seedWhich').value = seedIndexString;
		$w('#seedSelected').value = seedArray[seedIndex].name;
	}
}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnSelectSeed_click(event) {
	let paramObject = JSON.parse($w('#boxParamObject').value);
	let userCache = JSON.parse($w('#randomUserCache').value).userCache;
	let seedWhich = $w('#seedWhich').value;
	if(seedWhich.length === 0){
		// \_ this validation should be redundant
		$w('#seedWhich').value = '';
		$w('#seedSelected').value = '';//may turn red - a bonus
	}
	let seedIndex = Number(seedWhich);
	let user = userCache[seedIndex];
	paramObject.seed = user.seed;


	$w('#boxParamObject').value = JSON.stringify(paramObject,undefined,4);
}

/**
*	Adds an event handler that runs when an input element's value
 is changed.
*	 @param {$w.Event} event
*/
export function seedSelected_change(event) {
	if($w('#seedSelected').value.length === 0){
		$w('#btnSelectSeed').hide();
	}else{
		$w('#btnSelectSeed').show();
	}
}

export function doLoadTenUserCache (indexParam){
	let index = Number(indexParam) + 0;
	let kMax = 1;
	let userCacheObj = {};
	index = index % kMax;
	switch (index) {
		case 0:
			userCacheObj = {userCache:[{name:"Black, Jimmie",seed:"2b09df5fa295637d"},{name:"Tucker, Diane",seed:"fdc6f82f108d8876"},{name:"Gilbert, Jennie",seed:"8627a076736ce3ab"},{name:"Grant, Joyce",seed:"3a7115223d7b50ca"},{name:"Morales, Melanie",seed:"11e1224a47da24d0"},{name:"Ray, Armando",seed:"4473bfcd948b0007"},{name:"Ward, Christian",seed:"07e361e2ffd995da"},{name:"Ryan, Amy",seed:"9d01656202b5481d"},{name:"Armstrong, Noah",seed:"5bcd9a445221856c"},{name:"Holt, Floyd",seed:"3628bfbbd09c27aa"}]};
			break;

		default:
			userCacheObj = {error : "ERROR: Unsupported SWITCH index (probably and issue with kMax)"};
			break;
	}
	return userCacheObj;
}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnNextTenCachedUsers_click(event) {
	let kMax = 0;
	let indexParam = Math.floor(Math.random() * kMax);
	let tenJson = doLoadTenUserCache (indexParam);
	$w('#randomUserCache').value = JSON.stringify(tenJson,undefined,4);
}



/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnClearUserCache_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w('#randomUserCache').value = '{"userCache":[]}';
	$w('#randomUserCache').resetValidityIndication();
}

export function btnClearParamObject_click(event) {
	$w('#boxParamObject').value = '{}';
	$w('#boxParamObject').resetValidityIndication();
}

export function btnClearSeedUI_click(event) {
	$w('#seedSelected').value = '';
	$w('#seedSelected').resetValidityIndication();
	$w('#seedWhich').value = '';
	$w('#seedWhich').resetValidityIndication();
}

/**
*	Adds an event handler that runs when an input element's value
 is changed.
*	 @param {$w.Event} event
*/
export function swtchUSAonly_change(event) {
	let paramObject = JSON.parse($w('#boxParamObject').value);
	// let userCache = JSON.parse($w('#randomUserCache').value).userCache;
	// let seedWhich = $w('#seedWhich').value;
	// if(seedWhich.length === 0){
		// \_ this validation should be redundant
		// $w('#seedWhich').value = '';
		// $w('#seedSelected').value = '';//may turn red - a bonus
	// }
	// let seedIndex = Number(seedWhich);
	// let user = userCache[seedIndex];
	if($w("#swtchUSAonly").checked){
		delete paramObject.nat;
	}else{
		paramObject.nat = "EEMPTY";
	}


	$w('#boxParamObject').value = JSON.stringify(paramObject,undefined,4);
}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnClearFetched_click(event) {
	$w('#randomuserDOTme').value = '';
	$w('#randomuserDOTme').resetValidityIndication();
}