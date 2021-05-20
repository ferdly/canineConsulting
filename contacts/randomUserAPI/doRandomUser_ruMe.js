// ø <---------- <doRandomUser>  ---------->
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
	// fetchParamObject.gender   = '';//fetchParamObject.gender.substr(0,1).toUpperCase() + fetchParamObject.gender.substr(1).toLowerCase();//'&gender=female';
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
	//console.log('fetchParamObject via after Override')
	//console.log(fetchParamObject)
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
	//console.log("ONE.a: response after 'await getJSON'");
	//console.log(response);
	// let user = await response.json();//.json() is a promise
	// let resolvedResponse = await Promise.resolve(response);
	let resolvedResponse = response.results[0];
	resolvedResponse.seed = response.info.seed;
	resolvedResponse.location.country = resolvedResponse.location.country === 'United States' ? 'US' : resolvedResponse.location.country;
	// resolvedResponse.info = [];
	// ø <Transformations>
	let transformedAttributes = [];
	let now = new Date();
	let streetNumberBase = resolvedResponse.location.street.number;
	let tempIndex = 0;
	transformedAttributes.push(["streetNumberBase: used as a 'random' number for populating _consistent/random_ data by 'seed''"]);
	// ø <----- \_ streetNumberBase _/  ----->
	resolvedResponse.locale = 'en-US';
	transformedAttributes.push(["locale: literal 'en-US'"]);
	// ø <----- \_ locale _/  ----->
	let postalCode = '00000' + resolvedResponse.location.postcode.toString();
	postalCode = postalCode.substr(-5);
	resolvedResponse.location.postalCode = postalCode;
	transformedAttributes.push(['postalCode: ensure 5 and string - left postcode as number']);
	// ø <----- \_ postalCode _/ ----->
	let birthdate = resolvedResponse.dob.date.substr(0,10);
	resolvedResponse.birthdate = birthdate;
	transformedAttributes.push(['birthdate: dob.date to left 10. no change to original']);
	// ø <----- \_ birthdate _/ ----->
	let stateAbbrvObject = {"Alabama":"AL","Alaska":"AK","American Samoa":"AS","Arizona":"AZ","Arkansas":"AR","California":"CA","Colorado":"CO","Connecticut":"CT","Delaware":"DE","District Of Columbia":"DC","Federated States Of Micronesia":"FM","Florida":"FL","Georgia":"GA","Guam":"GU","Hawaii":"HI","Idaho":"ID","Illinois":"IL","Indiana":"IN","Iowa":"IA","Kansas":"KS","Kentucky":"KY","Louisiana":"LA","Maine":"ME","Marshall Islands":"MH","Maryland":"MD","Massachusetts":"MA","Michigan":"MI","Minnesota":"MN","Mississippi":"MS","Missouri":"MO","Montana":"MT","Nebraska":"NE","Nevada":"NV","New Hampshire":"NH","New Jersey":"NJ","New Mexico":"NM","New York":"NY","North Carolina":"NC","North Dakota":"ND","Northern Mariana Islands":"MP","Ohio":"OH","Oklahoma":"OK","Oregon":"OR","Palau":"PW","Pennsylvania":"PA","Puerto Rico":"PR","Rhode Island":"RI","South Carolina":"SC","South Dakota":"SD","Tennessee":"TN","Texas":"TX","Utah":"UT","Vermont":"VT","Virgin Islands":"VI","Virginia":"VA","Washington":"WA","West Virginia":"WV","Wisconsin":"WI","Wyoming":"WY"};
	let state = resolvedResponse.location.state
	let subdivision = stateAbbrvObject[state];
	resolvedResponse.location.subdivision = subdivision;
	transformedAttributes.push(["subdivision: 2letter version of 'state' - original not removed"]);
	// ø <----- \_ subdivison _/ ----->
	let company = resolvedResponse.location.street.name;
	company = company.substr(0,company.indexOf(" "));//first word, how about all but last, but pretty good
	let businessKindArray = ['Incorporated','Limited','Corporation','University','College','Auto Parts','Associates','Restaurant','Stores'];
	tempIndex = streetNumberBase % businessKindArray.length;
	company += ' ' + businessKindArray[tempIndex];
	resolvedResponse.company = company;
	transformedAttributes.push(['Company: Street name + random business kind']);
	// ø <----- \_ company _/ ----->
	let jobTitleArray = ['Manager','Sales','IT','Maintenance','Supervisor','Graphic Design','Accounting','Human Resources'];
	tempIndex = streetNumberBase % jobTitleArray.length;
	let jobTitle = jobTitleArray[tempIndex];
	resolvedResponse.jobTitle = jobTitle;
	transformedAttributes.push(['jobTitle: random jobTitle']);
	// ø <----- \_ jobTitle _/ ----->
	let emailPrimary = 'qiqgroup+' + resolvedResponse.name.first.toLowerCase() + '@gmail.com';
	resolvedResponse.emailPrimary = emailPrimary;
	transformedAttributes.push(['emailPrimary: qiqgroup + firstName - real so that enrollment happens']);
	// ø <----- \_ emailPrimary _/ ----->
	let addressLine2TypeArray = ['#','Suite','Box']
	tempIndex = streetNumberBase % addressLine2TypeArray.length;
	let addressLine2 = (streetNumberBase % 51) + 1;
	let addressLine2Type = addressLine2TypeArray[tempIndex];
	addressLine2 = addressLine2Type + ' ' + addressLine2;
	resolvedResponse.location.addressLine2 = addressLine2;
	transformedAttributes.push(['addressLine2: random number and random type (now consistent by seed)']);
	// ø <----- \_ addressLine2 _/ ----->
	let apt = ((streetNumberBase % 74) + 1).toString();
	resolvedResponse.location.street.apt = apt;
	transformedAttributes.push(['street.apt: random number more useful than addressLine2 (now consistent by seed)']);
	// ø <----- \_ street.apt _/ ----->
	let gender = resolvedResponse.gender;
	gender = 'custom.gender-' + gender;
	resolvedResponse.gender = gender;
	transformedAttributes.push(['gender: changed to labelKey (original overloaded because of other code, also, core data not changed)']);
	// ø <----- \_ gender _/ ----->
	let roleNumber = (streetNumberBase % 100) + 1;
	let roleLabel = "custom.student";
	roleLabel = roleNumber > 40 ? "custom.primary-parent" : roleLabel;
	roleLabel = roleNumber > 80 ? "custom.secondary-parent" : roleLabel;
	resolvedResponse.login.usernameOrig = resolvedResponse.login.username;
	resolvedResponse.login.username = roleLabel;
	transformedAttributes.push(['login.username: changed to role labelKey (orig renamed usernameOrig)']);
	// ø <----- \_ login.username _/ ----->
	let labelKey = (now.getFullYear()).toString();
	labelKey = 't' + labelKey + '06';
	resolvedResponse.dob.age = labelKey;
	transformedAttributes.push(['dob.age: changed to current summer termId tYYYY06 labelKey (age is calcuable)']);
	// ø <----- \_ dob.age _/ ----->
	resolvedResponse.developer = {};
	resolvedResponse.developer.transformedAttributes = transformedAttributes;
	// ø </Transformations>
	return resolvedResponse;
	
} //END doRandomUser()
// ø <---------- </doRandomUser> ---------->