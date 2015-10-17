Tracker.autorun(function(){
   Meteor.subscribe("versions");
});

Template.enrollmentsUpdate.events({
  'click .save-btn': function () {
    $('#orionBootstrapCollectionsUpdateForm').submit();
  }
});

AutoForm.addHooks('orionBootstrapCollectionsUpdateForm', {
  onSuccess: function() {
    setTimeout(function() {
      toastr.options = {
        closeButton: true,
        progressBar: true,
        showMethod: 'slideDown',
        timeOut: 2000
      };
    toastr.success('Successfully Updated');
    }, 1300);
    RouterLayer.go(this.collection.indexPath());
  },
  onError: function() {
    setTimeout(function() {
      toastr.options = {
        closeButton: true,
        progressBar: false,
        showMethod: 'slideDown',
        timeOut: 10000
      };
    toastr.error('Please review the form if you have left something empty', 'Ooops! Something is missing.');
    }, 1300);
  }
});

Template.loancycle.helpers({
  versions: function(_version) {
    var docVersion = Enrollments.findOne({"_id":_version}).versions().count();
    console.log(docVersion);
    return docVersion;
  }
});
