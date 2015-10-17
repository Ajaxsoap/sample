Template.enrollmentsCreate.events({
  'click .create-btn': function () {
    $('#orionBootstrapCollectionsCreateForm').submit();
  },
  'change input[name=birthdate]': function(event, template){
    var birthdate = $(event.target).val();
    template.$('input[name=ageOfEnrollee]').val(moment().diff(moment(birthdate, 'MM/DD/YYYY'), 'years') || " ");
  },
  'change input[name="civilStatus.spouseDateOfBirth"]': function(event, template){
    var birthdate = $(event.target).val();
    template.$('input[name="civilStatus.spouseAge"]').val(moment().diff(moment(birthdate, 'MM/DD/YYYY'), 'years') || " ");
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
    var childbirthdate = $(event.target).val();
    template.$('input[name="sibling.0.age"]').val(moment().diff(moment(childbirthdate, 'MM/DD/YYYY'), 'years') || " ");
  },
  'change input[name="sibling.1.birthdate"]': function(event, template){
    var childbirthdate = $(event.target).val();
    template.$('input[name="sibling.1.age"]').val(moment().diff(moment(childbirthdate, 'MM/DD/YYYY'), 'years') || "");
  },
  'change input[name="sibling.2.birthdate"]': function(event, template){
    var childbirthdate = $(event.target).val();
    template.$('input[name="sibling.2.age"]').val(moment().diff(moment(childbirthdate, 'MM/DD/YYYY'), 'years') || " ");
  },
  'change input[name="sibling.3.birthdate"]': function(event, template){
    var childbirthdate = $(event.target).val();
    template.$('input[name="sibling.3.age"]').val(moment().diff(moment(childbirthdate, 'MM/DD/YYYY'), 'years') || " ");
  },
  'change input[name="sibling.4.birthdate"]': function(event, template){
    var childbirthdate = $(event.target).val();
    template.$('input[name="sibling.4.age"]').val(moment().diff(moment(childbirthdate, 'MM/DD/YYYY'), 'years') || " ");
  },
  'change input[name="parent.0.dateOfBirth"]': function(event, template){
    var childbirthdate = $(event.target).val();
    template.$('input[name="parent.0.age"]').val(moment().diff(moment(childbirthdate, 'MM/DD/YYYY'), 'years') || " ");
  },
  'change input[name="parent.1.dateOfBirth"]': function(event, template){
    var childbirthdate = $(event.target).val();
    template.$('input[name="parent.1.age"]').val(moment().diff(moment(childbirthdate, 'MM/DD/YYYY'), 'years') || " ");
  },
  'change input[name="parent.2.dateOfBirth"]': function(event, template){
    var childbirthdate = $(event.target).val();
    template.$('input[name="parent.2.age"]').val(moment().diff(moment(childbirthdate, 'MM/DD/YYYY'), 'years') || " ");
  },
  'change input[name="parent.3.dateOfBirth"]': function(event, template){
    var childbirthdate = $(event.target).val();
    template.$('input[name="parent.3.age"]').val(moment().diff(moment(childbirthdate, 'MM/DD/YYYY'), 'years') || " ");
  },
  'change input[name="parent.4.dateOfBirth"]': function(event, template){
    var childbirthdate = $(event.target).val();
    template.$('input[name="parent.4.age"]').val(moment().diff(moment(childbirthdate, 'MM/DD/YYYY'), 'years') || " ");
  }
});

AutoForm.addHooks('orionBootstrapCollectionsCreateForm', {
  onSuccess: function() {
    setTimeout(function() {
      toastr.options = {
        closeButton: true,
        progressBar: true,
        showMethod: 'slideDown',
        timeOut: 2000
      };
    toastr.success('Successfully Created');
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
