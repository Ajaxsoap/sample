Template.productsUpdate.events( {
  'click .save-btn': function () {
    $( '#orionBootstrapCollectionsUpdateForm' ).submit();
  },
  'change input[name=grossProfit]': function (
    event, template ) {
    var grossProfit = Number( $( event.target ).val() );
    var netPremium = Number( $( 'input[name=netPremium]' ).val() );
    var premium = netPremium + grossProfit;
    // console.log( 'Total premium:', netPremium + grossProfit );
    template.$( 'input[name=premium]' ).val( premium );
  }
} );

AutoForm.addHooks( 'orionBootstrapCollectionsUpdateForm', {
  onSuccess: function () {
    setTimeout( function () {
      toastr.options = {
        closeButton: true,
        progressBar: true,
        showMethod: 'slideDown',
        timeOut: 2000
      };
      toastr.success( 'Updated Successfully ' );
    }, 1300 );
    RouterLayer.go( this.collection.indexPath() );
  },
  onError: function () {
    setTimeout( function () {
      toastr.options = {
        closeButton: true,
        progressBar: false,
        showMethod: 'slideDown',
        timeOut: 10000
      };
      toastr.error(
        'Please review the form if you have left something empty',
        'Ooops! Something is missing.' );
    }, 1300 );
  }
} );
