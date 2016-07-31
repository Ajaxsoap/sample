// Template.productsAvailed1.events( {
//   'change select[name=productOffering1]': function ( event, template ) {
//     selectedDependentId.set( $( event.target ).val() );
//     console.log( 'Product Offering ID:', selectedDependentId.get() );
//     // template.$( 'input[name=productRange]' ).val( selectedProductId.get() );
//   },
//   'change select[name=productRange1]': function ( event, template ) {
//     var currentTarget = event.currentTarget;
//     var rangeValue = currentTarget.options[ currentTarget.selectedIndex ].value;
//     selectedRange.set( rangeValue );
//     console.log( 'Product Range:', parseInt( selectedRange.get() ) );
//     // template.$( 'input[name=productRange]' ).val( selectedProduct.get() );
//   },
//   'change input[name=effectivityDate1]': function ( event, template ) {
//     var effectivity = $( event.target ).val();
//     var duration = moment.duration( {
//       'months': parseInt( selectedRange.get() )
//     } );
//     if ( effectivity ) {
//       // console.log( 'Product duration:', duration );
//       // template.$( 'input[name=effectivityDate]' ).val( moment().format( 'MM/DD/YYYY' ) );
//       template.$( 'input[name=maturityDate1]' ).val( moment( effectivity ).add( duration ).format( 'MM/DD/YYYY' ) );
//     }
//   }
// } );
//
// Handlebars.registerHelper( "productOffering", function () {
//   return Products.find().map( function ( c ) {
//     return {
//       label: c.productOffering,
//       value: c._id
//     };
//   } );
// } );
//
// Handlebars.registerHelper( "productRange", function () {
//   return Products.find().map( function ( c ) {
//     return {
//       label: c.productRange,
//       value: c.productRange
//     };
//   } );
// } );
