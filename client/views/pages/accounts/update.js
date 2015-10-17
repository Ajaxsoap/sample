AutoForm.addHooks('AccountsUpdate', {
  onSuccess: function() {
    setTimeout(function() {
      toastr.options = {
        closeButton: true,
        progressBar: true,
        showMethod: 'slideDown',
        timeOut: 2000
      };
    toastr.success('Successfully Save');
  }, 1000);
  RouterLayer.go('AccountsIndex');
  }
});
