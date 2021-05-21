import wixUsers from 'wix-users';

// ...

// Register a user as a site member with registration options
// steamdaMemberRegisterRegistrationOptions

let paramObjectThis = {};
paramObjectThis.email = "";
paramObjectThis.password = "test";
paramObjectThis.firstName = "";
paramObjectThis.lastName = "";
paramObjectThis.phone = "";
let response = steamdaMemberRegistration(paramObjectThis);

// ø <---------- <steamdaMemberRegistration>  ---------->
export async function steamdaMemberRegistration(paramObject) {

    let email = paramObject.email;// the user's email addresses
    let password = paramObject.password;// the user's password
    let firstName = paramObject.firstName;// the user's first name
    let lastName = paramObject.lastName;// the user's last name
    let phone = paramObject.phone;// the user's phone number

    await wixUsers.register(email, password, {
        contactInfo: {
            "firstName": firstName,
            "lastName": lastName,
            "phones": [phone]
        }
    })
        // .then((result) => {
        //     let resultStatus = result.status;
        // });
}
// ø <---------- </steamdaMemberRegistration> ---------->
