import { contacts } from 'wix-crm-backend';

export function myQueryContactsFunction() {
  const subscriptionStatusQuery = contacts.queryContacts()
    .eq("info.extendedFields.emailSubscriptions.subscriptionStatus", "NOT_SET")
    .or(
      contacts.queryContacts()
        .eq("info.extendedFields.emailSubscriptions.subscriptionStatus", "PENDING")
    );

  const freshnessQuery = contacts.queryContacts()
    .lt("_updatedDate", "2021-03-01T00:00:00.000Z")
    .or(
      contacts.queryContacts()
      .hasSome("info.labelKeys", ["custom.stale-lead"])
    );

  const statusAndFreshnessQuery = subscriptionStatusQuery.and(freshnessQuery);

  return statusAndFreshnessQuery.find()
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
