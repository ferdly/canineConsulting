import { contacts } from 'wix-crm-backend';

export function steamdaQueryContactsFunction(paramObject) {
    let versionMAJOR = 1;
    let versionMINOR = 0;
    let versionPATCH = 0;
    let versionIsValid = true;
    if(paramObject.minimumVersion === string){
        minimumVersionArray = paramObject.minimumVersion.split('.');
        minimumVersionMAJOR = Number(minimumVersionArray[0]);
        minimumVersionMINOR = Number(minimumVersionArray[1]);
        minimumVersionPATCH = Number(minimumVersionArray[2]);
        if(versionMAJOR < minimumVersionMAJOR){versionIsValid = false}
        if(versionMAJOR === minimumVersionMAJOR && versionMINOR < minimumVersionMINOR){versionIsValid = false}
        // ø <disregard PATCH> (for now, maybe support '*' etc)
        // if(versionMINOR === minimumVersionMINOR && versionPATCH < minimumVersionPATCH){versionIsValid = false}
        // ø </disregard PATCH>
    }else{versionIsValid = false}

    if(versionMAJOR !== true){
        return "something with an Error String, but it has to make sense with this PROMISE";
    }
    
    const finalQuery = contacts.queryContacts();
    let labelKeysHasAll = Array.isArray(paramOject.labelKeys.hasAll) && (paramOject.labelKeys.hasAll).length > 0;
    if(labelKeysHasAll){
        const hasAllQuery = contacts.queryContacts()
        .hasAll("info.labelKeys", paramOject.labelKeys.hasAll);
        finalQuery = finalQuery.and(hasAllQuery);
    }
    
    let labelKeysHasSome = Array.isArray(paramOject.labelKeys.hasSome) && (paramOject.labelKeys.hasSome).length > 0;
    if(labelKeysHasSome){
        const hasSomeQuery = contacts.queryContacts()
        .hasSome("info.labelKeys", paramOject.labelKeys.hasSome);
        finalQuery = finalQuery.and(hasAllQuery);
    }

  return finalQuery.find()
    .then((results) => {
      if (results.items.length > 0) {
        const items = results.items;
        const firstItem = items[0];
        const pageSize = results.pageSize;
        const hasNext = results.hasNext();
        const hasPrev = results.hasPrev();
        const length = results.length;
        const query = results.query;

        return items;
      } else {
        // Handle case where no matching items found
      }
    })
    .catch((error) => {
      console.error(error);
    })

}
