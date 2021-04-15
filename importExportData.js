// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world
import wixWindow from 'wix-window';
import wixData from 'wix-data';
import wixUsers from 'wix-users';
import wixLocation from 'wix-location';
// import {sendEmail} from 'backend/sendEmail.jsw';
// \_ https://support.wix.com/en/article/velo-web-modules-calling-backend-code-from-the-frontend
//<wixCrmBackend>
// import { quoteRequest } from 'backend/notifications';
// \_ https://support.totallycodable.com/en/article/adding-a-request-quote-button-in-wix-stores
import { sdaAllBookings } from 'backend/bkgModule';
import {myBackendFunction} from 'backend/aModule.jsw';
import {renderableString} from 'backend/utility';
// import {arrayOfNotes} from 'backend/utility';
import {arrayOfNotesFactory} from 'backend/utility';
import {updateStatusForArrayOfNotes} from 'backend/utility';
import {appendNoteForArrayOfNotes} from 'backend/utility';
import {EmailObjectAppend} from 'backend/utility';
import {PhoneObjectAppend} from 'backend/utility';
import {AddressObjectAppend} from 'backend/utility';
import {markAttendanceForArrayOfNotes} from 'backend/utility';
import {multiply} from 'backend/bkgModule';
import wixBookings from 'wix-bookings';

// import wixCrmBackend from 'wix-crm-backend';
// import wixCrm from 'wix-crm-backend';
// import {notifications} from 'wix-crm-backend';
// import {tasks} from 'wix-crm-backend';
// import {workflows} from 'wix-crm-backend';
//</wixCrmBackend>

// <Constant Booking Service Data>
const testServiceName = "March 27 Barking Intensive";
const testServiceId = "d5db4861-2310-4c81-b0b0-3974a9d9b456";

// </Constant Booking Service Data>

$w.onReady(function () {
	// Write your JavaScript here
	// To select an element by ID use: $w("#elementID")
	// Click "Preview" to run your code
	wixWindow.scrollTo(10, 0);
	//<stateBoxMemberNotes>
	$w("#memberNotesNext1").onClick(() => {
   	 $w('#stateBoxMemberNotes').changeState("tableNotes");
  	} );
  	$w("#memberNotesNext2").onClick(() => {
    	$w('#stateBoxMemberNotes').changeState("mainNotes");
  	} );
	/**
	 * <wixCrmBackend>
	 * ! Really NOT working
	 * ø Learn how regular, hover, focus, error, disabled are changed for various elements
	 * $w("#getIDfromCurrentMember").disable();
	 * </wixCrmBackend>
	 */
	//<wixCrmBackend>
});







export function btnImport_click(event, $w) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here:
const items = JSON.parse($w("#codeText").value);
const collection = $w("#collectionInput").value;
 
items.forEach( (item) => {
	wixData.insert(collection, item)
		.then( (results) => {
		console.log(`Added item: ${JSON.stringify(results)}`);
		} )
		.catch( (err) => {
		console.log(err);
		} );
} );
 
  $w("#codeText").value = "";

	wixWindow.openLightbox("importLightBox"); 
}

export function btnExport_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	wixWindow.openLightbox("exportLightBox");
}

export function btnGetMemberItemJSON_click(event, $w) {
	$w("#crmContactId").value = '';
	let targetItem = $w("#dsMember").getCurrentItem();
	// console.log(targetItem);
	let stringMemberJSON = "HOLDER";
	stringMemberJSON = JSON.stringify(targetItem, undefined, 4);
	$w("#memberJSON").value = stringMemberJSON;
	$w("#memberJSON").focus();
	// $w("#memberJSON").value.select();
	// $w("#getIDfromCurrentMember").enable();//see onReady() above
}

export function btnClearMemberJSONZ_click(event, $w) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w("#memberJSON").value = " ";
	$w("#crmContactId").value = '';
}

export function btnMemberInsert_click(event) { 
	let recordThisJSON = JSON.parse($w("#recordThisJSON").value);
	if ($w("#imagePath").value.length > 0) {
		recordThisJSON.picture = $w("#imagePath").value;
		
	}
	let email = recordThisJSON.loginEmail;
	let string = 'abcdefghijklmnopqrstuvwxyz';
	string += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	string += '1234567890!@#$%^&*~_+?';
	let length = string.length;
	let password = ''; 
	let thisPosition = 0;
	let thisChar = 'a';
	let itemResult = 'Pending';
	for (var i = 0; i < 7; i++) {
		thisPosition = Math.floor(Math.random() * length );
		thisChar = string.substr(thisPosition,1);
		password += thisChar;
	}
	// $w("#dbResponse").value = email + '\n\n' + password;
	console.log(password);


//    let email = $w("#email").value;
// //    let password = $w("#password").value;
   let first = recordThisJSON.firstName;
   let last = recordThisJSON.lastName;
   let picture = recordThisJSON.picture;

   wixUsers.register(email, password, {
     contactInfo: {
      "firstName": first,
      "lastName": last,
	  "picture": picture
     }
    })
    .then((result) => {
     $w("#dsMember").save()
      .then((item) => {
    //    wixLocation.to("/account/member-home"); //Change the URL ending to the page you want to redirect the user after they successfully register
		itemResult = item;
      })
      .catch((err) => {
       let errMsg = err;
      });
    })
    .catch((err) => {
     let errorMsg = err;
     console.log(err);
    //  $w('#emailExists').show(); //This is were we prompt the message to show up again ONLY if there is an error
    });
	
	$w("#dbResponse").value = itemResult;
}


//<wixCrmBackend>
export function thisGetContactyById(contactId) {
	let contactGotten = myBackendFunction(contactId);
	console.log("contactGotten: ");
	console.log(contactGotten);
	return contactGotten;
//   return contactId;
}
//</wixCrmBackend>

export function getIDfromCurrentMember_click(event) {
	// $w("#crmContactId").value = "Testing ContactId from Above";
	$w("#crmContactId").value = JSON.parse($w("#memberJSON").value).contactId;
}

export function btnGetContact_click(event) {
	let paramContactId = $w("#crmContactId").value;
	console.log("paramContactId: " + paramContactId)
	// $w("#gotContact").value = paramContactId;
	// return paramContactId;
	let contactGotten = myBackendFunction(paramContactId)
	.then(function(contact) {
    	console.log(contact);
		// $w("#gotContact").value = JSON.stringify(contact, undefined, 4);
		// return contact;
		displayObject(contact);
	});
	// console.log("contactGotten: ");
	// console.log(contactGotten);
	// $w("#gotContact").value = JSON.stringify(contactGotten, undefined, 4);
/**
 * 
	$w("#gotContact").value = thisContact;
	return thisContact;
	var regEx = /[^0-9]/g;
	let idAsNumber = $w("#crmContactId").value.replace(regEx,'');
	console.log("RegEx: " + idAsNumber);
	idAsNumber = idAsNumber.substr(-7)
	console.log("Seven: " + idAsNumber);
	idAsNumber = parseInt(idAsNumber);
	console.log("parseInt: " + idAsNumber);
	idAsNumber = idAsNumber % 100;
	console.log("Mod100: " + idAsNumber);

	let idProduct = multiply(idAsNumber,5)
	.then(function(product) {
		console.log(product);
		let myProduct = product;
		return myProduct;
	})
	.catch(function(error){
		console.log(error);
		return error;
	});
 */
	// console.log("contactGotten: ");
	// console.log(contactGotten);
	// $w("#gotContact").value = JSON.stringify(contactGotten, undefined, 4);
	// $w("#gotContact").value = $w("#crmContactId").value;
	/** 
	 * 
	console.log(idProduct[0][0].PromiseResult);
	$w("#gotContact").value = String(idProduct);
	console.log("idProduct: ");
	*/
}
export function displayObject(object) {
	$w("#gotContact").value = JSON.stringify(object, undefined, 4);
}

export function btnMultiply_click(event) {
	multiply($w("#operand1").value, $w("#operand2").value)
	.then((product) => {
		displayProduct(product);
	})
}
export function displayProduct(product) {
	$w("#product").value = product;
}

export function displayBookingresult(bkgResult) {
	$w("#bookingsResult").value = JSON.stringify(bkgResult, undefined, 4);
}
export function btnGetAllBookings_click(event) {
	let date = "2021-01-01T01:00:00.000Z";
	let allBookings = sdaAllBookings();
	console.log(allBookings.items);
	// allBookings = ["Marcy","Chester","Marais"];
	// allBookings = [];
	displayBookingresult(allBookings.items);
}

export function uploadImage_change(event) {
	// console.log($w("#uploadImage").value[0]);
	// $w("#imagePath").value = $w("#uploadImage").value[0];	
	  if ($w("#uploadImage").value.length > 0) {  // visitor chose a file
      console.log("Uploading " + $w("#uploadImage").value[0].name + "- Please wait.");
      $w("#uploadImage").startUpload()
        .then( (uploadedFile) => {
          console.log("Upload successful. File is available here:");
          console.log(uploadedFile.url);
		  $w("#imagePath").value = uploadedFile.url;	
        } )
        .catch( (uploadError) => {
          console.log("File upload error: " + uploadError.errorCode);
          console.log(uploadError.errorDescription);
		  $w("#imagePath").value = "File upload error: " + uploadError.errorCode;
        } );
  }
  else {    // site visitor clicked button but didn't choose a file
    console.log("Please choose a file to upload.")
  }
}



export function bkgRadioButtonTests_change(event) {
	const switchArray = ["getServiceAvailability()"];
	let index = $w("#bkgRadioButtonTests").value;
	switch (index) {
		case '0':
			wixBookings.getServiceAvailability(testServiceId)
			.then( (availability) => {
		    	console.log(availability);
    			bigLemonDisplay(availability);
  			} );

			break;
		case '1':
			wixBookings.getServiceAvailability(testServiceId)
			.then( (availability) => {
		    	bigLemonDisplay(returnArrayAsObject(availability));
  			} );

			break;
		default:
			let defaultString = "Unaccounted for Switch Value: " + index;
			bigLemonDisplay(defaultString);
			break;
	}
}
export function bigLemonDisplay(renderThis) {
	if (Object.prototype.toString.call(renderThis) === '[object Object]') {
		$w("#bookingsResult").value = JSON.stringify(renderThis, undefined, 4);
	} else if (Array.isArray(renderThis)) {
		$w("#bookingsResult").value = renderThis.toString();
	} else {
		$w("#bookingsResult").value = 'NOT AN OBJECT: ' + renderThis;
	}
}
export function returnArrayAsObject(arrayParam, arrayName = 'arrayAsObjectArray') {
	// arrayParam = [];
	let arrayAsObject = {[arrayName]: arrayParam};
	// let arrayAsObject = arrayAsObject.arrayName.arrayParam;
	return arrayAsObject;
}

export function newEmail_click(event) {
	// $w("#btnFauxStatusNotes").hide();
	// // $w("#newEmail").hide();
	// $w("#newPhone").hide();
	// $w("#newAddress").hide();
	showHide('email');

	let currentValue = $w('#gotContact').value + 'X';
	if (currentValue.length < 18 ) {
		$w('#gotContact').value = '{"emails": []}';
	}
	let arrayOfEmailNames = ['Alpha','Bravo','Charlie','Delta','Echo','Foxtrot','Golf','Hotel','India','Juliet','Kilo','Lima','Mike','November','Oscar','Papa','Quebec','Romeo','Sierra','Tango','Uniform','Victor','Whiskey','Xray','Yankee','Zulu'];
	let arrayOfRoles = ['parent','child','main','family',];
	// let arrayOfKind = ['work','school','home','home','home','home','home','home','home'];
	let randomEmail = arrayOfEmailNames[Math.floor(Math.random() * arrayOfEmailNames.length)];
	let randomRole = arrayOfRoles[Math.floor(Math.random() * arrayOfRoles.length)];
	let randomWho = randomEmail;
	randomEmail = 'qiqgroup+' + randomEmail.toLowerCase() + '@gmai.com';
	let randomKind = randomRole === 'main' ? 'work' : 'home';
	let randomUsage = randomRole === 'main' ? 'Work' : 'Personal';
	let arrayOfEmails = JSON.parse($w("#gotContact").value);
	// let paramArray = [];
	// paramArray.push(randomEmail,randomRole, randomWho, randomKind, randomUsage);
	// console.log(paramArray);
	console.log(arrayOfEmails);
	EmailObjectAppend(arrayOfEmails, randomEmail, randomRole, randomWho, randomKind, randomUsage)
	.then((emailArray) => {
		console.log(emailArray);
		$w("#gotContact").value = JSON.stringify(emailArray, undefined, 4);
		return emailArray;
		})
	.catch((err) => {console.error("custom Error: newEmail_click");
		console.error(err);
		$w("#gotContact").value = "Whiskey-Tango-Foxtrot! - see Console Logs"
		});	
}

export function btnFauxStatusNotes_click(event) {
	$w("#btnFauxStatusNotes").hide();
	$w("#newEmail").hide();
	$w("#newPhone").hide();
	$w("#newAddress").hide();
	showHide('statusnote')
	// let statusStatusOne = "PARENT";
	// let statusNoteOne = "waiting for phone call"
	// let noteNoteOne = "problem with wait list"
	// let noteNoteTwo = "broken leg, holding until doctor gives go-ahead"
	// let statusStatusTwo = "RESOLVED";
	// let statusNoteTwo = "may sign up for more later"
	// let myStatusObject = new arrayOfNotes ()
	let myStatusObject = arrayOfNotesFactory ()
	.then((notesArray) => {
		console.log(notesArray);
		$w("#gotContact").value = JSON.stringify(notesArray, undefined, 4);
		$w("#btnFauxStatusChange").show();
		$w("#btnFauxAddNote").show();
		return notesArray;
		})
	.catch((err) => {
		console.error("custom Error: btnFauxStatusNotes_click");
		console.error(err);
		$w("#gotContact").value = "Whiskey-Tango-Foxtrot! - see Console Logs"
		});
}

async function tickTock(){ 
    for (let index = 0; index < 10000; index++) {
        let twindex = 2 * index;
    }
    setTimeout(function(){ console.log("Tick-Tock"); }, 10000);
}

export function btnFauxStatusChange_click(event) {
	let arrayOfStatuses = ["ONE-OFF","PENDING","ONHOLD","APPROVED","RESOLVED","REJECTED"];
	let randomStatus = arrayOfStatuses[Math.floor(Math.random() * arrayOfStatuses.length)];
	let arrayOfNotes = [
		"Always allow another apple",
		"Begin bargain basement bonanza",
		"Control corollary contributions",
		"Delete donor demographics diligently",
		"Every enumerated entity evaluated",
		"Featured fungible friends for funding",
		"Gather generated governing guidelines",
		"Hasten helpful hypotheses",
		"Introduce intriguing instantiation",
		"Join judicious journalists",
		"keep kanban katharsis",
		"learning legal logistics",
		"manage marauding monopoly",
		"negotiate non-negligible notions",
		"operationalize optimum opportunities",
		"perpetuate perrendial paradigms",
		"quell quarrelsome questions",
		"reinvigorate rational rivalries",
		"saturate sagacious situations",
		"transform trivial transgressions",
		"upload unique utilities",
		"verbalize venerated vicisitudes",
		"welcome welteshlang wisdom",
		"x-ray xanthic xylitol",
		"yawning youths yet yearn",
		"zoning zenophobic zephyrs "];
	let randomNote = arrayOfNotes[Math.floor(Math.random() * arrayOfNotes.length)];
	let arrayOfStatusNotes = JSON.parse($w("#gotContact").value);
	// console.log(arrayOfStatusNotes);
	updateStatusForArrayOfNotes(arrayOfStatusNotes,randomStatus,randomNote)
		.then((notesArray => {
			console.log(notesArray);
			$w("#gotContact").value = JSON.stringify(notesArray, undefined, 4);
			$w("#btnFauxStatusChange").show();
			$w("#btnFauxAddNote").show();
			return notesArray;
		}))
		.catch((err) => {console.error("custom Error: btnFauxStatusChange_click");
					console.error(err);
					$w("#gotContact").value = "Whiskey-Tango-Foxtrot! - see Console Logs"
						});
}

export function btnFauxAddNote_click(event) {
	let arrayOfNotes = [
		"Always allow another apple",
		"Begin bargain basement bonanza",
		"Control corollary contributions",
		"Delete donor demographics diligently",
		"Every enumerated entity evaluated",
		"Featured fungible friends for funding",
		"Gather generated governing guidelines",
		"Hasten helpful hypotheses",
		"Introduce intriguing instantiation",
		"Join judicious journalists",
		"keep kanban katharsis",
		"learning legal logistics",
		"manage marauding monopoly",
		"negotiate non-negligible notions",
		"operationalize optimum opportunities",
		"perpetuate perrendial paradigms",
		"quell quarrelsome questions",
		"reinvigorate rational rivalries",
		"saturate sagacious situations",
		"transform trivial transgressions",
		"upload unique utilities",
		"verbalize venerated vicisitudes",
		"welcome welteshlang wisdom",
		"x-ray xanthic xylitol",
		"yawning youths yet yearn",
		"zoning zenophobic zephyrs "];
	let randomNote = arrayOfNotes[Math.floor(Math.random() * arrayOfNotes.length)];
	let arrayOfStatusNotes = JSON.parse($w("#gotContact").value);
	console.log(arrayOfStatusNotes);
	appendNoteForArrayOfNotes(arrayOfStatusNotes,randomNote)
		.then((notesArray => {
			console.log(notesArray);
			$w("#gotContact").value = JSON.stringify(notesArray, undefined, 4);
			$w("#btnFauxStatusChange").show();
			$w("#btnFauxAddNote").show();
			return notesArray;
		}))
		.catch((err) => {
			console.error("custom Error: btnFauxAddNote_click");
			console.error(err);
			$w("#gotContact").value = "Whiskey-Tango-Foxtrot! - see Console Logs"
		});
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
}
export function showHide(action){
	let wKeyArrayAll = [];
	wKeyArrayAll.push("#btnFauxStatusChange","#btnFauxAddNote","#btnFauxStatusNotes");
	wKeyArrayAll.push("#newEmail","#newPhone","#newAddress");
	wKeyArrayAll.push("#dateAttendance","#statusAttendance","#noteAttendance","#btnMarkAttendance");
	let wKeyArrayShow = [];
	switch (action) {
		case "clear":
			wKeyArrayShow = ["#btnFauxStatusNotes","#newEmail","#newPhone","#newAddress"];
			break;
		case "statusnote":
			wKeyArrayShow = ["#btnFauxStatusChange","#btnFauxAddNote","#btnFauxStatusNotes"];
			wKeyArrayShow.push("#dateAttendance","#statusAttendance","#noteAttendance","#btnMarkAttendance");
			break;
		case "email":
			wKeyArrayShow = ["#newEmail"];
			break;
		case "phone":
			wKeyArrayShow = ["#newPhone"];
			break;
		case "address":
			wKeyArrayShow = ["#newAddress"];
			break;

		default:
			// wKeyArrayShow = ["#btnFauxStatusChange","#btnFauxAddNote","#btnFauxStatusNotes","#newEmail","#newPhone","#newAddress"];
			console.log("Unsupported showHide() action: " + action);
			break;
	}
	let element = '';
	for (var i = 0; i < wKeyArrayAll.length; i++) {
		element = wKeyArrayAll[i];
		if (wKeyArrayShow.indexOf(element) < 0) {
			$w(element).hide();
		} else {
			$w(element).show();
		}
	}
}
export function clearTempOpject_click(event) {
	$w("#gotContact").value = '';
	// $w("#btnFauxStatusChange").hide();
	// $w("#btnFauxAddNote").hide();
	// $w("#btnFauxStatusNotes").show();
	// $w("#newEmail").show();
	// $w("#newPhone").show();
	// $w("#newAddress").show();
	showHide('clear');
}

export function newPhone_click(event) {
	// $w("#btnFauxStatusNotes").hide();
	// $w("#newEmail").hide();
	// // $w("#newPhone").hide();
	// $w("#newAddress").hide();
	showHide('phone');

	// PhoneObjectAppend(array, phone, role, who, kind = "cell", usage = "Personal")
	let currentValue = $w('#gotContact').value + 'X';
	if (currentValue.length < 18 ) {
		$w('#gotContact').value = '{"phones": []}';
	}
	let digitsNonZeroString = '123456789';
	let digitsString = '1234567890';
	let punctString = '!@#$%^&*?><~.,+=-_[{]}|';
	let randomDigit = digitsNonZeroString.substr(Math.floor(Math.random() * digitsNonZeroString.length), 1);
	let randomPunct = punctString.substr(Math.floor(Math.random() * punctString.length), 1);
	let randomPhone = randomDigit + randomPunct;
	while (randomPhone.length < 20) {
		randomDigit = digitsString.substr(Math.floor(Math.random() * digitsString.length), 1);
		randomPunct = punctString.substr(Math.floor(Math.random() * punctString.length), 1);
		randomPhone += randomDigit + randomPunct;
	}
	// console.log('randomPhone: ' + randomPhone)
	// console.log('randomPhone.length: ' + randomPhone.length)

	let arrayOfNames = ['Alpha','Bravo','Charlie','Delta','Echo','Foxtrot','Golf','Hotel','India','Juliet','Kilo','Lima','Mike','November','Oscar','Papa','Quebec','Romeo','Sierra','Tango','Uniform','Victor','Whiskey','Xray','Yankee','Zulu'];
	let arrayOfRoles = ['parent','child','home','main','family'];
	let randomRole = arrayOfRoles[Math.floor(Math.random() * arrayOfRoles.length)];
	let randomWho = arrayOfNames[Math.floor(Math.random() * arrayOfNames.length)];
	let randomKind = randomRole === 'main' ? 'work' : 'cell';
	randomKind = randomRole === 'home' ? 'landLine' : randomKind;
	let randomUsage = randomRole === 'main' ? 'Work' : 'Personal';
	let arrayOfEmails = JSON.parse($w("#gotContact").value);
	let paramArray = [];
	paramArray.push(randomPhone,randomRole, randomWho, randomKind, randomUsage);
	console.log(paramArray);
	let arrayOfPhones = JSON.parse($w("#gotContact").value);
	console.log(arrayOfPhones);
	PhoneObjectAppend(arrayOfPhones, randomPhone, randomRole, randomWho, randomKind, randomUsage)
	.then((phoneArray) => {
		console.log(phoneArray);
		$w("#gotContact").value = JSON.stringify(phoneArray, undefined, 4);
		return phoneArray;
		})
	.catch((err) => {
		console.error("custom Error: newPhone_click");
		console.error(err);
		$w("#gotContact").value = "Whiskey-Tango-Foxtrot! - see Console Logs"
		});	
}

export function newAddress_click(event) {
	// $w("#btnFauxStatusNotes").hide();
	// $w("#newEmail").hide();
	// $w("#newPhone").hide();
	// // $w("#newAddress").hide();
	showHide('address');

	let currentValue = $w('#gotContact').value + 'X';
	if (currentValue.length < 18 ) {
		$w('#gotContact').value = '{"addresses": []}';
	}
	let arrayofAddresses = JSON.parse($w('#gotContact').value);
	let randomThousand = Math.ceil(Math.random() * 999);
	let randomAlphabet = Math.floor(Math.random() * 26);
	let streetKindArray = ['Street','Avenue','Road','Boulevard','Lane','Place','Way'];
	let arrayNatoPhoneticAlphabetOneLine = ['Alpha','Bravo','Charlie','Delta','Echo','Foxtrot','Golf','Hotel','India','Juliet','Kilo','Lima','Mike','November','Oscar','Papa','Quebec','Romeo','Sierra','Tango','Uniform','Victor','Whiskey','Xray','Yankee','Zulu'];
	let cityStateZipAlphabeticalArrayOneLine = [['Ashville','NC', '28801'],['Burlington','VT', '05401'],['Charlottesville','VA', '22901'],['Duluth','MN', '55805'],['Evanston','IL', '60201'],['Fargo','ND', '58102'],['Grand Marais','MN', '55604'],['Hermantown','MN', '55811'],['Indianapollis','IN', '46201'],['Juneau','AK', '99801'],['Kalamazoo','MI', '49001'],['Lake Placid','NY', '12946'],['Minneapolis','MN', '55403'],['Nashville','TN', '37201'],['Ogden','UT', '84201'],['Philadelphia','PA', '19104'],['Quincy','MA', '02169'],['Rochester','NY', '14604'],['San Francisco','CA', '94102'],['Tuscon','AZ', '85701'],['Urbana','MD', '21704'],['Virginia','MN', '55792'],['Washington','DC', '20003'],['Xenia','OH', '45385'],['Ypsilanti','MI', '48197'],['Zionsville','IN', '46077']];
	let randomAddress = streetKindArray[Math.floor(Math.random() * streetKindArray.length)];
	randomAddress = randomThousand > 500 ? 'Avenue' : randomAddress;
	randomAddress = randomThousand > 750 ? 'Street' : randomAddress;
	randomAddress = randomThousand + ' ' + arrayNatoPhoneticAlphabetOneLine[randomAlphabet] + ' ' + randomAddress;
	let randomAddress2 = Math.floor(randomThousand /10) % 10 === 7 ? '#' + Math.floor(Math.random() * 200).toString(): '';
	// let randomAddress2 = randomThousand >= 500 ? '# 702' : 'Apt 101';
	let randomCity = cityStateZipAlphabeticalArrayOneLine[randomAlphabet][0];
	let randomState = cityStateZipAlphabeticalArrayOneLine[randomAlphabet][1];
	let randomZip = cityStateZipAlphabeticalArrayOneLine[randomAlphabet][2];
	let paramArray = [];
	paramArray.push(randomAddress, randomAddress2, randomCity, randomState, randomZip);
	console.log(paramArray);
	console.log(arrayofAddresses);
	AddressObjectAppend(arrayofAddresses, randomAddress, randomAddress2, randomCity, randomState, randomZip)
	.then((addressArray) => {
		console.log(addressArray);
		let reverseArray = addressArray.addresses.length > 1 ? addressArray.addresses.reverse() : addressArray.addresses;
		let reverseObject = {};
		reverseObject.addresses = reverseArray;
		$w("#gotContact").value = JSON.stringify(reverseObject, undefined, 4);
		return addressArray;
		})
	.catch((err) => {
		console.error("custom Error: newAddress_click");
		console.error(err);
		$w("#gotContact").value = "Whiskey-Tango-Foxtrot! - see Console Logs"
		});	
}

export function prettifyJSON_click(event) {
	let jsonThis = $w('#gotContact').value;
	var objectFromJSON = JSON.parse(jsonThis);
	console.log(objectFromJSON);
	var prettifiedJSON = JSON.stringify(objectFromJSON, undefined, 4)
	console.log(prettifiedJSON);
	$w('#gotContact').value = prettifiedJSON;
}

export function minifyJSON_click(event) {
	let jsonThis = $w('#gotContact').value;
	var objectFromJSON = JSON.parse(jsonThis);
	console.log(objectFromJSON);
	var minifiedJSON = JSON.stringify(objectFromJSON, null, 0)
	console.log(minifiedJSON);
	$w('#gotContact').value = minifiedJSON;
}

export function btnMarkAttendance_click(event) {
	let localIdArray = [];
	localIdArray.push("#dateAttendance","#statusAttendance","#noteAttendance","#btnMarkAttendance");

	let status = $w(localIdArray[1]).value;
	console.log(status);
	let note = $w(localIdArray[2]).value;
	console.log(note);
	let date = $w(localIdArray[0]).value;
	console.log(date);
	let arrayOfStatusNotes = JSON.parse($w("#gotContact").value);
	console.log(arrayOfStatusNotes);
	markAttendanceForArrayOfNotes(arrayOfStatusNotes,status,note, date)
		.then((notesArray => {
			console.log(notesArray);
			$w("#gotContact").value = JSON.stringify(notesArray, undefined, 4);
			$w("#btnFauxStatusChange").show();
			$w("#btnFauxAddNote").show();
			return notesArray;
		}))
		.catch((err) => {console.error("custom Error: btnFauxStatusChange_click");
					console.error(err);
					$w("#gotContact").value = "Whiskey-Tango-Foxtrot! - see Console Logs"
						});
}


