Template.AccountProfile.onCreated( function () {
  this.subscribe( 'userProfile' );
  this.subscribe( 'company' );
  this.subscribe( 'branch' );
  this.subscribe( 'products' );
} );
