Tracker.autorun(function(){
  Meteor.subscribe("enrollments");
  Meteor.subscribe("claims");
});

Template.claimsIndex.events({
  'click tr': function(event) {
    if (!$(event.target).is('td')) return;
    var dataTable = $(event.target).closest('table').DataTable();
    var rowData = dataTable.row(event.currentTarget).data();
    var collection = rowData._collection();
    if (rowData) {
      if (rowData.canShowUpdate()) {
        var path = collection.updatePath(rowData);
        RouterLayer.go(path);
      }
    }
  }
});

Template.claimsIndex.onRendered(function() {
  this.autorun(function () {
    RouterLayer.isActiveRoute('');
    Session.set('orionBootstrapCollectionsIndex_showTable', false);
    Meteor.defer(function () {
      Session.set('orionBootstrapCollectionsIndex_showTable', true);
    });
  });
});

Template.claimsIndex.helpers({
  showTable: function () {
    return Session.get('orionBootstrapCollectionsIndex_showTable');
  }
});

Template.status.helpers({
  statusPending: function() {
    if (this.status === 'Pending')
      return true;
    else
      return false;
  },
  statusApproved: function() {
    if (this.status === 'Approved')
      return true;
    else
      return false;
  },
  statusDenied: function() {
    if (this.status === 'Denied')
      return true;
    else
      return false;
  }
});
