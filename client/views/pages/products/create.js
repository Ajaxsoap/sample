Template.productsCreate.events( {
  'click .create-btn': function () {
    $( '#orionBootstrapCollectionsCreateForm' ).submit();
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
