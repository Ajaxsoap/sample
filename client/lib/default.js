// Run this when the meteor app is started
Meteor.startup(function () {
  orion.links._collection.update({ identifier: 'collections-companies' }, { $set: { index: 0 } });
  orion.links._collection.update({ identifier: 'collections-branches' }, { $set: { index: 1 } });
  orion.links._collection.update({ identifier: 'collections-products' }, { $set: { index: 2 } });
  orion.links._collection.update({ identifier: 'collections-enrollments' }, { $set: { index: 3 } });
  orion.links._collection.update({ identifier: 'collections-claims' }, { $set: { index: 4 } });
  orion.links._collection.update({ identifier: 'collections-accounts' }, { $set: { index: 5 } });
});
