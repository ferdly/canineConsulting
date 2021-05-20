/*************
 * Page Code *
 *************/

 import wixWindow from 'wix-window';

 export function openButton_click(event) {
wixWindow.openLightbox("manageContactArrays", {
     "path": $w('#ddInputKey').value,
     "currentContactObjectJSON": $w('#codePrepContact').value
   })
   .then( (data) => {
     $w('#objectOnDeck').value = "RETURNED";//data.arrayElement;
    //  $w('#ddOnDeckIndex').value = data.arrayElementIndex;
    //  $w('#objectOnDeckTitle').text = data.arrayElementStatus;
   } );
 }
 
 /*****************
  * Lightbox Code *
  *****************/
 
 import wixWindow from 'wix-window';
 
 $w.onReady( function () {
   let received = wixWindow.lightbox.getContext();
   $w('#recievedObjectJSON').value = JSON.stringify(received,undefined,4);
   $w('#recievedPath').value = received.currentContactObjectJSON;
 } );
 
 export function closeButton_click(event) {
   wixWindow.lightbox.close( {
     "lightBoxSend1": $w('#lightBoxSend1').value,
     "lightBoxSend2": $w('#lightBoxSend2').value
   } );
 }
 