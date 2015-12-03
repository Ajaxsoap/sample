Template.claimsCreate.onCreated(function() {
  this.subscribe('enrollments');
});

Template.claimsCreate.events({
  'click .create-btn': function () {
    $('#orionBootstrapCollectionsCreateForm').submit();
  },
  'change select[name=enrollmentId]': function(event, template) {
    var enrollmentId = $(event.target).val();
    console.log(enrollmentId);
    template.$('select[name=childrenId]').val(enrollmentId.selected);
  },
});
