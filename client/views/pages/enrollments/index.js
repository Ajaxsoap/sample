Template.enrollmentsIndex.onCreated( function () {
  this.subscribe( "enrollments" );
  this.subscribe( "companies" );
  this.subscribe( "branches" );
  btnClass = new ReactiveVar();

  Template.instance().uploading = new ReactiveVar( false );
} );

var startDate = new ReactiveVar( moment( new Date() ) );
var endDate = new ReactiveVar( moment( new Date()).add(30, "days") );

Template.enrollmentsIndex.onRendered( function() {
  $('input[name="daterange"]').daterangepicker({
    startDate: startDate.set(),
    endDate: endDate.set(),
    dateLimit: {
      "days": 30
    }, function( start, end, label ){
      this.startDate(start);
      this.endDate(end)
    }
  })
  // this.autorun( function() {
  //   var dateEnrollee = Enrollments.find({
  //     "effectivityDate": {
  //       $gte: new Date(this.startDate),
  //       $lte: new Date(this.endDate)
  //   }
  //   });
    // console.log('Dates:', dateEnrollee);
  // })
});

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
      dom: "<l><f><rtip>"
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
  },
  'change input[name=daterange]': function( event ) {
    var target = $(event.target).value();
    var start = startDate.get();
    var end = endDate.get();
    console.log(start);

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
      return moment(val).format( 'll' );
    } else {
      return "No Date";
    }
  },
  datelll: function ( val, type, doc ) {
    if ( val instanceof Date ) {
      return moment(val).format( 'lll' );
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
  spouseDisplayName: function (){
    var self = this;
    var enrolledSpouse = Enrollments.findOne( {
      _id: self._id
    }, {
      fields: {
       "spouseName": 1
      }
    } );

    if ( enrolledSpouse ) {
      return enrolledSpouse.spouseName;
    } else if ( enrolledSpouse === undefined )
      return "No Enrolled Spouse";
  }
  // premium: function () {
  //   var sumOfPrem = 0;
  //   var prem = this.premiums;
  //   sumOfPrem += parseInt( prem, 0 );
  //   return sumOfPrem;
  // }
} );


Template.enrollmentsIndex.events( {
  'click #export': function(){ 
    paisEnrollmentExporter.exportEnrollments();
  },
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
