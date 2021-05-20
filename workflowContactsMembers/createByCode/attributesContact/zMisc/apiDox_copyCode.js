//Register a user as a site member with manual approval
import wixUsers from 'wix-users';

// ...

let emailManApprvl = 'user@manapprvl.com';// the user's email addresses
let passwordManApprvl = 'test';// the user's password

wixUsers.register(emailManApprvl, passwordManApprvl)
  .then( (result) => {
    let status = result.status; // "Pending"
    let approvalToken = result.approvalToken;
    let user = result.user;
  } );


//Register a user as a site member with auto approval
//import wixUsers from 'wix-users';

// ...

let emailAutoApprvl = 'user@autoapprvl.com';// the user's email addresses
let passwordAutoApprvl = 'test';// the user's password

wixUsers.register(emailAutoApprvl, passwordAutoApprvl)
  .then( (result) => {
    let status = result.status; // "Active"
    let user = result.user;
  } );


// Register a user as a site member with registration options
// import wixUsers from 'wix-users';

// ...

let emailRegOptns = 'user@regoptns.com';// the user's email addresses
let passwordRegOptns = 'test';// the user's password
let firstNameRegOptns = 'Registration';// the user's first name
let lastNameRegOptns = 'Options';// the user's last name
let phoneRegOptns =  '';// the user's phone number

wixUsers.register(emailRegOptns, passwordRegOptns, {
    contactInfo: {
        "firstName": firstNameRegOptns,
        "lastName": lastNameRegOptns,
        "phones": [phoneRegOptns]
    }
  } )
  .then( (result) => {
    let resultStatus = result.status;
  } );