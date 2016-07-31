// Run this when the meteor app is started
Meteor.startup( function () {

  Tracker.autorun( function () {
    var status = Meteor.status().status;
    if ( status === "connected" ) {
      console.log( "Connected to server" );
      setTimeout( function () {
        toastr.options = {
          closeButton: true,
          progressBar: true,
          showMethod: 'slideDown',
          timeOut: 3000
        };
        toastr.success( 'Connected to server' );
      }, 1300 );
    } else if ( status === "connecting" ) {
      console.log( "Reconnecting to server" );
      setTimeout( function () {
        toastr.options = {
          closeButton: true,
          progressBar: true,
          preventDuplicates: true,
          showMethod: 'slideDown',
          timeOut: 3000
        };
        toastr.warning( 'Reconnecting to server' );
      }, 3000 );
    } else {
      console.log( "Disconnected from the server" );
      setTimeout( function () {
        toastr.options = {
          closeButton: true,
          progressBar: true,
          preventDuplicates: true,
          showMethod: 'slideDown',
          timeOut: 3000
        };
        toastr.error(
          'Disconnected from the server' );
      }, 3000 );

    }
  } );
  $.fn.datepicker.dates = {
    format: "MM-DD-YYYY"
  };
} );
