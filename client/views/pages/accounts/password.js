AutoForm.addHooks('AccountPassword', {
  onSuccess: function() {
    setTimeout(function() {
      toastr.options = {
        closeButton: true,
        progressBar: true,
        showMethod: 'slideDown',
        timeOut: 2000
      };
    toastr.success('Successfully Changed Password');
  }, 1000);
  RouterLayer.go('myAccountsIndex');
  }
});
