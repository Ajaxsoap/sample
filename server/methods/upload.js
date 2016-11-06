Meteor.methods( {
  parseUpload: function ( data ) {
    check( data, Array );

    for ( var j = 0; j < data.length; j++ ) {
      var item = data[ j ],
        exists = Enrollments.findOne( {
          fullName: item.fullName
        }, {
          tin: item.tin
        } );

      if ( !exists ) {
        Enrollments.insert( item );
      } else if ( exists ) {
        Enrollments.update( item );
      } else {
        console.warn( "The item" + " " + item + " " + "already exist" );

      }
    }
  }
} );
