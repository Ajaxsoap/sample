Template.enrollmentsIndex.onCreated( function () {
  this.subscribe( "enrollments" );
  this.subscribe( "companies" );
  this.subscribe( "branches" );
  btnClass = new ReactiveVar();
  Template.instance().uploading = new ReactiveVar( false );
} );

Template.enrollmentsTable.onRendered( function () {
  this.autorun( function () {
    $( '#enrolleeTable tfoot th' ).each( function () {
      var title = $( this ).text();
      $( this ).html( '<input type="text" placeholder="Search ' +
        title + '" />' );
    } );

    table = $( '#enrolleeTable' ).DataTable( {
      "scrollX": true,
      "language": {
        "lengthMenu": 'Display <select class="form-control m-b">' +
          '<option value="10">10</option>' +
          '<option value="100">100</option>' +
          '<option value="500">500</option>' +
          '<option value="1000">1000</option>' +
          '<option value="-1">All</option>' +
          '</select> enrollments'
      },
      dom: "<lB><f><rtip>",
      buttons: [ {
        extend: 'excel',
        text: 'Excel'
      }, {
        extend: 'print',
        text: 'Print'
      }, {
        extend: 'pdf',
        text: 'PDF'
      } ]
    } );

    table.columns().every( function () {
      var that = this;
      $( 'input', this.footer() ).on( 'keyup focus', function () {
        if ( that.search() !== this.value ) {
          that
            .search( this.value )
            .draw();
        }
      } );
    } );
  } );

} );

Template.enrollmentsTable.events( {
  'click tbody tr': function ( event ) {
    Router.go( 'collections.enrollments.update', {
      _id: this._id
    } );
  }
} );

Template.enrollmentsIndex.helpers( {
  showTable: function () {
    return Session.get( 'orionBootstrapCollectionsIndex_showTable' );
  },
  uploading: function () {
    return Template.instance().uploading.get();
  }
} );

function add( a, b ) {
  return a + b;
}

Template.enrollmentsTable.helpers( {
  enrollmentsList: function () {
    return Enrollments.find();
  },
  datell: function ( val, type, doc ) {
    if ( val instanceof Date ) {
      return moment( val ).format( 'll' );
    } else {
      return "No Date";
    }
  },
  datelll: function ( val, type, doc ) {
    if ( val instanceof Date ) {
      return moment( val ).format( 'lll' );
    } else {
      return "No Date";
    }
  },
  companyName: function ( company ) {
    var Company = Companies.findOne( company );
    if ( Company ) {
      return Company.name;
    }
  },
  branchName: function ( branch ) {
    var Branch = Branches.findOne( branch );
    if ( Branch ) {
      return Branch.branch;
    }
  },
  // premium: function () {
  //   var sumOfPrem = 0;
  //   var prem = this.premiums;
  //   sumOfPrem += parseInt( prem, 0 );
  //   return sumOfPrem;
  // }
} );


Template.enrollmentsIndex.events( {
  'change [name=importCSV]': function ( event, template ) {
    template.uploading.set( true );
    Papa.parse( event.target.files[ 0 ], {
      header: true,
      complete: function ( results, file ) {
        Meteor.call( 'parseUpload', results.data, function ( error,
          response ) {
          if ( error ) {
            setTimeout( function () {
              toastr.options = {
                closeButton: true,
                progressBar: true,
                showMethod: 'slideDown',
                timeOut: 2000
              };
              toastr.error( error.reason );
            }, 1300 );
          } else {
            template.uploading.set( false );
            setTimeout( function () {
              toastr.options = {
                closeButton: true,
                progressBar: true,
                showMethod: 'slideDown',
                timeOut: 2000
              };
              toastr.success( 'Import Successfull' );
            }, 1300 );
          }
        } );
      }
    } );
  }
} );

Template.enrollmentsIndex.onRendered( function () {
  this.autorun( function () {
    RouterLayer.isActiveRoute( '' );
    Session.set( 'orionBootstrapCollectionsIndex_showTable', false );
    Meteor.defer( function () {
      Session.set( 'orionBootstrapCollectionsIndex_showTable',
        true );
    } );
  } );
} );

Template.countdown.helpers( {
  monthCount: function () {
    var dateNow = null;
    var dateMaturity = this.maturityDate;
    console.log( dateMaturity );
    var timespan = countdown( dateNow, dateMaturity, countdown.MONTHS |
      countdown.DAYS, 2 );
    if ( timespan.months > 1 ) {
      return timespan.toString();
    } else {
      return timespan.toString() + " " + "exceeded " + " " +
        this.productRange + " " + "months";
    }
  },
  buttonClass: function () {
    var dateNow = null;
    var dateMaturity = this.maturityDate;
    var timespan = countdown( dateNow, dateMaturity, countdown.MONTHS |
      countdown.DAYS, 2 );
    if ( timespan.months > 1 ) {
      return "btn-primary";
    } else
      clearInterval( timespan );
    return "btn-danger";
  }
} );
