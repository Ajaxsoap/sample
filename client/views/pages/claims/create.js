Tracker.autorun(function(){
  Meteor.subscribe("enrollments");
  Meteor.subscribe("claims");
});

Template.claimsCreate.events({
  'click .create-btn': function () {
    $('#orionBootstrapCollectionsCreateForm').submit();
  }
});
