Template.companyUpdate.onCreated( function () {
  this.subscribe( 'products' );
} );

Template.companyUpdate.events( {
  'click .save-btn': function () {
    $( '#orionBootstrapCollectionsUpdateForm' ).submit();
  }
} );

// AutoForm.addHooks('orionBootstrapCollectionsUpdateForm', {
//   onSuccess: function() {
//     RouterLayer.go(this.collection.indexPath());
//   },
// });
