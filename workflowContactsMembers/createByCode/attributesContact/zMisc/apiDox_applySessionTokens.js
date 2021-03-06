/*******************************
 * backend code - register.jsw *
 *******************************/
 import wixUsers from 'wix-users-backend';
 import {approveBy3rdParty} from 'some-backend-module';
 
 export function doRegistration(email, password, firstName, lastName) {
   // call a 3rd party API to check if the user is approved
   return approveBy3rdParty(email, password)
     .then( (isApproved) => {
       // if approved by 3rd party
       if (isApproved) {
         // register the user
         return wixUsers.register(email, password, {
           "contactInfo": {
             "firstName": firstName,
             "lastName": lastName
           }
         } )
         // user is now registered and pending approval
         // approve the user
           .then( (result) => wixUsers.approveByToken(result.approvalToken) )
           // user is now active, but not logged in
           // return the session token to log in the user client-side
           .then( (sessionToken) => {
             return {sessionToken, "approved": true};
           } );
       }
       // if not approved by 3rd party
       else {
         return {"approved": false};
       }
     } )
 }
 
 /********************
  * client-side code *
  ********************/
 import wixUsers from 'wix-users';
 import {doRegistration} from 'backend/register';
 
 // ...
 
 let email = // the user's email addresses
 let password = // the user's password
 let firstName = // the user's first name
 let lastName = // the user's last name
 
 doRegistration(email, password, firstName, lastName)
   .then( (result) => {
     if (result.approved)
     // log the user in
       wixUsers.applySessionToken(result.sessionToken);
     else {
       console.log("Not approved!");
     }
   } );
 