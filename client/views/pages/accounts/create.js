AutoForm.addHooks('AccountsCreate', {
  onSuccess: function() {
    setTimeout(function() {
      toastr.options = {
        closeButton: true,
        progressBar: true,
        showMethod: 'slideDown',
        timeOut: 2000
      };
    toastr.success('Successfully Created User');
  }, 1000);
  RouterLayer.go('AccountsIndex');
  }
});
