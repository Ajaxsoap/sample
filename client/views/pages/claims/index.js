Template.claimsIndex.onCreated( function () {
  this.subscribe( "enrollments" );
  this.subscribe( "claims" );
  this.subscribe( "companies" );
  this.subscribe( "branches" );
} );

var processing = new ReactiveVar();

Template.claimsIndex.onRendered( function () {
  this.autorun( function () {
    RouterLayer.isActiveRoute( '' );
    Session.set( 'orionBootstrapCollectionsIndex_showTable', false );
    Meteor.defer( function () {
      Session.set( 'orionBootstrapCollectionsIndex_showTable', true );
    } );
  } );
} );

Template.claimsTable.onRendered( function () {
  this.autorun( function () {
    $( '#tableClaim tfoot th' ).each( function () {
      var title = $( this ).text();
      $( this ).html( '<input type="text" placeholder="Search ' +
        title + '" />' );
    } );

    var table = $( '#tableClaim' ).DataTable( {
      "scrollX": true,
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

Template.claimsTable.events( {
  'click tbody > tr': function ( event ) {
    Router.go( 'collections.claims.update', {
      _id: this._id
    } );
  }
} );

function addWeekdays( date, days ) {
  date = moment( date ); // use a clone
  while ( days > 0 ) {
    date = date.add( 1, 'days' );
    // decrease "days" only if it's a weekday.
    if ( date.isoWeekday() !== 6 && date.isoWeekday() !== 7 ) {
      days -= 1;
    }
  }
  return date;
}

Template.claimsTable.helpers( {
  //  dateSchema: function(){
  //    var session = Session.get('searchFilter2');
  //    return session.DateRangeSchema;
  //  },
  claimsList: function () {
    return Claim.find();
  },
  filedDate: function ( dateFiled ) {
    if ( dateFiled instanceof Date ) {
      return moment( dateFiled ).format( 'lll' );
    } else {
      return "Never";
    }
  },
  insuredName: function ( enrollmentId ) {
    var enrollee = Enrollments.findOne( {
      "_id": enrollmentId
    } );
    if ( enrollee ) {
      return enrollee.fullName;
    }
  },
  dependent: function () {
    var self = this;
    var dependent = Claim.findOne( {
      _id: self._id
    }, {
      fields: {
        "children": 1,
        "parentName": 1,
        "spouseName": 1,
        "siblingName": 1
      }
    } );

    if ( dependent ) {
      return dependent.children || dependent.parentName || dependent.spouseName || dependent.siblingName;
    } else
      return "Insured Principal";

  },
  updated: function () {
    return new Date().toDateString();
  }

} );

Template.claimsIndex.helpers( {
  showTable: function () {
    return Session.get( 'orionBootstrapCollectionsIndex_showTable' );
  },
} );

Template.claimedStatus.helpers( {
  statusPending: function () {
    if ( this.status === 'Pending' ) {
      return true;
    } else
      return false;
  },
  statusApproved: function () {
    if ( this.status === 'Approved' ) {
      return true;
    } else
      return false;
  },
  statusApprovedRB: function () {
    if ( this.status === 'ApprovedRB' )
      return true;
    else
      return false;
  },
  statusDenied: function () {
    if ( this.status === 'Denied' ) {
      return true;
    } else
      return false;
  },
  statusDeniedRB: function () {
    if ( this.status === 'DeniedRB' ) {
      return true;
    } else
      return false;
  }
} );

function claimStatus() {
  var statusClaim = Claim.findOne( {}, {
    fields: {
      "status": 1
    }
  } );
  if ( statusClaim ) {
    return statusClaim && statusClaim.status;
  }

}

Template.daysCountdown.helpers( {
  daysProcessed: function () {
    var days = null;
    var filedDate = this.dateFiled;
    var timespan = countdown( days, filedDate, countdown.MONTHS |
      countdown.DAYS, 2 );
    var daysCount = timespan.toString();
    if ( ( this.status === 'Approved' ) || ( this.status === 'ApprovedRB' ) || ( this.status === 'Denied' ) || ( this.status ===
        'DeniedRB' ) ) {
      clearInterval( timespan );
      // console.log( "Already Claimed" );
      return this.status;
    } else {
      return daysCount;
    }
  },
  buttonClass: function () {
    // console.log( [ claimStat.status ] );
    var days = null;
    var filedDate = this.dateFiled;
    var timespan = countdown( days, filedDate, countdown.MONTHS |
      countdown.DAYS, 2 );

    if ( timespan.days >= 10 ) {
      if ( ( this.status === 'Approved' ) || ( this.status === 'ApprovedRB' ) || ( this.status === 'Denied' ) || ( this.status ===
          'DeniedRB' ) ) {
        return "label-default";
      } else {
        return "label-danger";
      }
    } else if ( timespan.days < 10 ) {
      if ( ( this.status === 'Approved' ) || ( this.status === 'ApprovedRB' ) || ( this.status === 'Denied' ) || ( this.status ===
          'DeniedRB' ) ) {
        return "label-default";
      } else {
        return "label-primary";
      }

    } else if ( this.status === 'Approved' ) {
      // console.log( "Status: Pending" );
      return "label-default";
    }
  }
} );
