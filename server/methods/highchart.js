// Meteor.methods( {
//   fetchChartData: function () {
//     var data = DeathClaimCount.find().map( function ( doc ) {
//       return [ new Date( +doc._id, doc.monthFiled, doc.yearFiled, -1 ).valueOf(), doc.count ];
//     } ).sort( function ( a, b ) {
//       return a[ 0 ] - b[ 0 ];
//     } );
//     console.log( data );
//     return data;
//   }
// } );
