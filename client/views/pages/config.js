Template.config.helpers({
  getDataForTabs: function () {
    var categories = orion.config.getCategories();
    return categories.map(function (category) {
      return {
        title: category,
        onClick: function() {
          Session.set('configUpdateCurrentCategory', category);
        },
        class: function() {
          return Session.get('configUpdateCurrentCategory') == category ? 'btn-default disabled warning': 'btn-primary';
        }
      };
    });
  }
});
orion.links._collection.update({ identifier: 'collections-companies' }, { $set: { index: 1 } });
// orion.links._collection.update({ identifier: 'collections-branches' }, { $set: { index: 2 } });
// orion.links._collection.update({ identifier: 'collections-products' }, { $set: { index: 3 } });
// orion.links._collection.update({ identifier: 'collections-enrollments' }, { $set: { index: 4 } });
// orion.links._collection.update({ identifier: 'collections-claims' }, { $set: { index: 5 } });
// orion.links._collection.update({ identifier: 'collections-accounts' }, { $set: { index: 6 } });
