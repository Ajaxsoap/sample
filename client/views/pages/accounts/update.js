Template.AccountsUpdate.onCreated( function () {
  this.subscribe( 'companies' );
  this.subscribe( 'branches' );
} );

AutoForm.addHooks( 'accountsUpdateProfileForm', {
  onSuccess: function () {
    setTimeout( function () {
      toastr.options = {
        closeButton: true,
        progressBar: true,
        showMethod: 'slideDown',
        timeOut: 2000
      };
      toastr.success( 'Profile Updated Successfully ' );
    }, 1000 );
    RouterLayer.go( this.collection.indexPath() );
  }
} );
