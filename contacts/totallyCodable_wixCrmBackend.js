/**
 * @source: https://support.totallycodable.com/en/article/adding-a-request-quote-button-in-wix-stores#the-code-for-backend-function-notificationsjsw
 */
import { quoteRequest } from 'backend/notifications';
import wixCrm from 'wix-crm-backend';
import { session } from 'wix-storage';
import wixData from 'wix-data';

$w.onReady(function () {
 let product = session.getItem("product"); //This line will get the item from storage session

 $w("#dataset1").onReady(() => {
  console.log("The product dataset is ready to be filtered with the following ID:" + product);

  $w("#dataset1").setFilter(wixData.filter()
    .eq("_id", product) //This line will filter the product dataset to find the 1 matching product from storage session
   )
   .then(() => {
    console.log("The product is" + product);
    $w('#formStrip').expand(); //This line triggers the form strip to expand only if there are no errors in filtering dataset
    $w('#errorStrip').collapse(); //This line triggers the error strip to collapse only if there are no errors in filtering dataset
   })
   .catch((err) => {
    console.log(err);
    $w('#formStrip').collapse(); //This line triggers the form strip to collapse if an error occurs
    $w('#errorStrip').expand(); //This line triggers the error strip to expand only if an error occurs
   });
 });
 
 //Our dataset for our form is called #requestDataset

 $w("#requestDataset").onBeforeSave(() => {
  $w("#dataset1").onReady(() => {
   let productFound = $w("#dataset1").getCurrentItem();  //This line gets the current product from your Stores Dataset, in our example the Stores dataset is called #dataset1
   let theName = productFound.name;  //This line gets the product name
   let theImage = productFound.mainMedia; //This line gets the main image for the product 

   //The following lines will set the values for these fields in the database

   $w("#requestDataset").setFieldValues({
    "productName": theName, //Make sure to replace the field key of each line to match your database
    "productId": product, //Make sure to replace the field key of each line to match your database
    "productImage": theImage //Make sure to replace the field key of each line to match your database
   });

   let checkFirst = $w('#firstName').valid; //Make sure to replace the fields with your form elements ID names
   let checkLast = $w('#lastName').valid;
   let checkPhone = $w('#phone').valid;
   let checkEmail = $w('#email').valid;

   //This next line checks to make sure all the validations we set in the user input settings are valid

   if (checkEmail && checkPhone && checkLast && checkFirst) {
    $w('#requestDataset').save(); //This is the name of our form dataset
    $w('#errorText').hide(); //This line hides the error message if all fields are valid
   } else {
    $w('#errorText').show(); //This line shows the error message
    console.log("Canceling save");
    return false; //This line cancels the save function on the dataset
   }

  });

 });

 $w("#requestDataset").onAfterSave(() => {
  quoteRequest(); //This line triggers the notification from the backend.  In our example, the backend function is called quoteRequest .
  console.log("A new notification was sent to all contributors.");
  $w('#formStrip').collapse();
  $w('#errorStrip').collapse();
  $w('#successStrip').expand(); //This line triggers the form strip to expand after the form has been submitted.
  $w("#header1").scrollTo(); //This line scrolls the page to the top header
 });

});