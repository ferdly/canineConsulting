// ø <---------- <contactsQueryWorksButIsInadequate>  ---------->
export function contactsQueryWorksButIsInadequate(paramOject = {}) {
    // return paramOject;
     let testDevOrWorking = "WORKING";
   
   
   
   if (testDevOrWorking === "WORKING"){
   
   
   
   
   
   //   const queryThis = contacts.queryContacts()
   //   .hasSome("info.labelKeys", ["custom.t202106"])
   let labelKeysHasAll = Array.isArray(paramOject.labelKeys.hasAll) && (paramOject.labelKeys.hasAll).length > 0;
   let labelKeysHasSome = Array.isArray(paramOject.labelKeys.hasSome) && (paramOject.labelKeys.hasSome).length > 0;
   if(labelKeysHasSome){
     return contacts.queryContacts()
       .hasSome("info.labelKeys", paramOject.labelKeys.hasSome)
       .find()
       .then((queryResults) => {
         return queryResults;
       })
       .catch((error) => {
         console.error(error);
       });
   }
   if(labelKeysHasAll){
     return contacts.queryContacts()
     .hasAll("info.labelKeys", paramOject.labelKeys.hasAll)
       .find()
       .then((queryResults) => {
         return queryResults;
       })
       .catch((error) => {
         console.error(error);
       });
   }
   
   
   
   
   }
   }
   // ø <---------- </contactsQueryWorksButIsInadequate> ---------->