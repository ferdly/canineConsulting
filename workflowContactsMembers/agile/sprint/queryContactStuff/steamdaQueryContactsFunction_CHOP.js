export function steamdaQueryContactsFunction(paramObject) {
    let finalQuery = contacts.queryContacts();
    let isAnd = false;
    
    let labelKeysHasAll = Array.isArray(paramOject.labelKeys.hasAll) && (paramOject.labelKeys.hasAll).length > 0;
    if(labelKeysHasAll){
        const hasAllQuery = contacts.queryContacts()
        .hasAll("info.labelKeys", paramOject.labelKeys.hasAll);
        if(isAnd){
            finalQuery = finalQuery.and(hasAllQuery);
          }else{
            finalQuery = finalQuery.or(hasAllQuery);
            isAnd = true;
          }}
    
    let labelKeysHasSome = Array.isArray(paramOject.labelKeys.hasSome) && (paramOject.labelKeys.hasSome).length > 0;
    if(labelKeysHasSome){
        const hasSomeQuery = contacts.queryContacts()
        .hasSome("info.labelKeys", paramOject.labelKeys.hasSome);
        if(isAnd){
          finalQuery = finalQuery.and(hasSomeQuery);
        }else{
          finalQuery = finalQuery.or(hasSomeQuery);
          isAnd = true;
        }

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
