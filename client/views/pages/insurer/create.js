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
  }
});
