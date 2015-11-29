Template.navigation.rendered = function(){
  this.autorun(function() {
    var depend = orion.links._collection.find();
    $('.orion-links a[data-toggle="collapse"]').collapse();
  });
    // Initialize metisMenu
  $('#side-menu').metisMenu();

};

Template.navigation.events({
  'click .logout': function() {
    Meteor.logout();
  }
});
