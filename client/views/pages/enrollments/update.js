Tracker.autorun(function(){
  Meteor.subscribe("versions");
});

Template.enrollmentsUpdate.events({
  'click .save-btn': function () {
    $('#orionBootstrapCollectionsUpdateForm').submit();
  },
  'change input[name=birthdate]': function(event, template){
    var birthdate = $(event.target).val();
    template.$('input[name=ageOfEnrollee]').val(moment().diff(moment(birthdate, 'MM/DD/YYYY'), 'years') || " ");
  },
  'change input[name="spouseDateOfBirth"]': function(event, template){
    var spouseDateOfBirth = $(event.target).val();
    template.$('input[name="spouseAge"]').val(moment().diff(moment(spouseDateOfBirth, 'MM/DD/YYYY'), 'years') || " ");
  },
  'change input[name="children.0.birthdate"]': function(event, template){
    var childbirthdate = $(event.target).val();
    template.$('input[name="children.0.age"]').val(moment().diff(moment(childbirthdate, 'MM/DD/YYYY'), 'years') || " ");
  },
  'change input[name="children.1.birthdate"]': function(event, template){
    var childbirthdate = $(event.target).val();
    template.$('input[name="children.1.age"]').val(moment().diff(moment(childbirthdate, 'MM/DD/YYYY'), 'years') || " ");
  },
  'change input[name="children.2.birthdate"]': function(event, template){
    var childbirthdate = $(event.target).val();
    template.$('input[name="children.2.age"]').val(moment().diff(moment(childbirthdate, 'MM/DD/YYYY'), 'years') || " ");
  },
  'change input[name="children.3.birthdate"]': function(event, template){
    var childbirthdate = $(event.target).val();
    template.$('input[name="children.3.age"]').val(moment().diff(moment(childbirthdate, 'MM/DD/YYYY'), 'years') || " ");
  },
  'change input[name="children.4.birthdate"]': function(event, template){
    var childbirthdate = $(event.target).val();
    template.$('input[name="children.4.age"]').val(moment().diff(moment(childbirthdate, 'MM/DD/YYYY'), 'years') || " ");
  },
  'change input[name="sibling.0.birthdate"]': function(event, template){
    var siblingbirthdate = $(event.target).val();
    template.$('input[name="sibling.0.age"]').val(moment().diff(moment(siblingbirthdate, 'MM/DD/YYYY'), 'years') || " ");
  },
  'change input[name="sibling.1.birthdate"]': function(event, template){
    var siblingbirthdate = $(event.target).val();
    template.$('input[name="sibling.1.age"]').val(moment().diff(moment(siblingbirthdate, 'MM/DD/YYYY'), 'years') || "");
  },
  'change input[name="sibling.2.birthdate"]': function(event, template){
    var siblingbirthdate = $(event.target).val();
    template.$('input[name="sibling.2.age"]').val(moment().diff(moment(siblingbirthdate, 'MM/DD/YYYY'), 'years') || " ");
  },
  'change input[name="sibling.3.birthdate"]': function(event, template){
    var siblingbirthdate = $(event.target).val();
    template.$('input[name="sibling.3.age"]').val(moment().diff(moment(siblingbirthdate, 'MM/DD/YYYY'), 'years') || " ");
  },
  'change input[name="sibling.4.birthdate"]': function(event, template){
    var siblingbirthdate = $(event.target).val();
    template.$('input[name="sibling.4.age"]').val(moment().diff(moment(siblingbirthdate, 'MM/DD/YYYY'), 'years') || " ");
  },
  'change input[name="parent.0.dateOfBirth"]': function(event, template){
    var parentbirthdate = $(event.target).val();
    template.$('input[name="parent.0.age"]').val(moment().diff(moment(parentbirthdate, 'MM/DD/YYYY'), 'years') || " ");
  },
  'change input[name="parent.1.dateOfBirth"]': function(event, template){
    var parentbirthdate = $(event.target).val();
    template.$('input[name="parent.1.age"]').val(moment().diff(moment(parentbirthdate, 'MM/DD/YYYY'), 'years') || " ");
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
