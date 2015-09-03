Template.insurerCreate.events({
  'click .create-btn': function () {
    $('#orionBootstrapCollectionsCreateForm').submit();
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
