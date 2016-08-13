Template.Dashboard.onCreated( function () {
  this.subscribe( "companies" );
  this.subscribe( "branches" );
  this.subscribe( "enrollments" );
  this.subscribe( "claims" );
  this.subscribe( "products" );
  this.subscribe( "totalEnrollments" );
} );

Template.lossRatio.onCreated( function () {
  this.subscribe( "productEnrollments" );
  this.subscribe( "productClaim" );
  this.subscribe( "totalProductsAvailed" );
} );

Template.TotalPrincipalPremium.onCreated( function () {
  this.subscribe( "enrollments" );
  this.subscribe( "products" );
  this.subscribe( "branches" );
  this.subscribe( "TotalPrincipal" );
  this.subscribe( "TotalPrincipalPremium" );
  this.subscribe( "TotalPrincipalPremium1" );
  this.subscribe( "TotalPrincipalPremium2" );
  this.subscribe( "TotalPrincipalPremium3" );
  this.subscribe( "TotalPrincipalPremium4" );
  this.subscribe( "TotalPrincipalPremium5" );
  this.subscribe( "TotalPrincipalPremium6" );
  this.subscribe( "TotalPrincipalPremium7" );
  this.subscribe( "TotalPrincipalPremium8" );
  this.subscribe( "TotalPrincipalPremium9" );

} );

Template.TotalChildrenPremium.onCreated( function () {
  this.subscribe( "enrollments" );
  this.subscribe( "products" );
  this.subscribe( "branches" );
  this.subscribe( "TotalChildrenPremium" );
  this.subscribe( "TotalChildrenPremium1" );
  this.subscribe( "TotalChildrenPremium2" );
  this.subscribe( "TotalChildrenPremium3" );
  this.subscribe( "TotalChildrenPremium4" );
  this.subscribe( "TotalChildrenPremium5" );
  this.subscribe( "TotalChildrenPremium6" );
  this.subscribe( "TotalChildrenPremium7" );
  this.subscribe( "TotalChildrenPremium8" );
  this.subscribe( "TotalChildrenPremium9" );
} );

Template.TotalSpousePremium.onCreated( function () {
  this.subscribe( "enrollments" );
  this.subscribe( "products" );
  this.subscribe( "branches" );
  this.subscribe( "TotalSpousePremium" );
  this.subscribe( "TotalSpousePremium1" );
  this.subscribe( "TotalSpousePremium2" );
  this.subscribe( "TotalSpousePremium3" );
  this.subscribe( "TotalSpousePremium4" );
  this.subscribe( "TotalSpousePremium5" );
  this.subscribe( "TotalSpousePremium6" );
  this.subscribe( "TotalSpousePremium7" );
  this.subscribe( "TotalSpousePremium8" );
  this.subscribe( "TotalSpousePremium9" );
} );

Template.TotalSiblingsPremium.onCreated( function () {
  this.subscribe( "enrollments" );
  this.subscribe( "products" );
  this.subscribe( "branches" );
  this.subscribe( "TotalSiblingsPremium" );
  this.subscribe( "TotalSiblingsPremium1" );
  this.subscribe( "TotalSiblingsPremium2" );
  this.subscribe( "TotalSiblingsPremium3" );
  this.subscribe( "TotalSiblingsPremium4" );
  this.subscribe( "TotalSiblingsPremium5" );
  this.subscribe( "TotalSiblingsPremium6" );
  this.subscribe( "TotalSiblingsPremium7" );
  this.subscribe( "TotalSiblingsPremium8" );
  this.subscribe( "TotalSiblingsPremium9" );
} );

Template.TotalParentsPremium.onCreated( function () {
  this.subscribe( "enrollments" );
  this.subscribe( "products" );
  this.subscribe( "branches" );
  this.subscribe( "TotalParentsPremium" );
  this.subscribe( "TotalParentsPremium1" );
  this.subscribe( "TotalParentsPremium2" );
  this.subscribe( "TotalParentsPremium3" );
  this.subscribe( "TotalParentsPremium4" );
  this.subscribe( "TotalParentsPremium5" );
  this.subscribe( "TotalParentsPremium6" );
  this.subscribe( "TotalParentsPremium7" );
  this.subscribe( "TotalParentsPremium8" );
  this.subscribe( "TotalParentsPremium9" );
} );

Template.branchList.onCreated( function () {
  this.subscribe( "companies" );
  this.subscribe( "branches" );
  this.subscribe( "BranchEnrollmentCount" );
} );

Template.claimList.onCreated( function () {
  this.subscribe( "companies" );
  this.subscribe( "branches" );
  this.subscribe( "BranchClaimCount" );
  this.subscribe( "BranchClaimApprovedCount" );
  this.subscribe( "BranchClaimPendingCount" );
  this.subscribe( "BranchClaimDeniedCount" );
} );

Template.deathClaim.onCreated( function () {
  this.subscribe( "DeathClaimCount" );
} );

var approvedCount = new ReactiveVar( 0 );
var processingDashboard = new ReactiveVar();

Template.Dashboard.helpers( {
  updated: function () {
    return new Date().toDateString();
  },
  zeroCount: function () {
    return approvedCount.get();
  },
  TotalApproved: function ( totalApproved ) {
    var approved = BranchClaimCount.find( {}, {
      fields: {
        "totalApproved": 1
      }
    } );
    if ( approved ) {
      return approved && approved.totalApproved;
    }
  },
  TotalPending: function () {
    return BranchClaimCount.find( {}, {
      fields: {
        "totalPending": 1
      }
    } );
  }
} );

Template.enolledTable.onRendered( function () {
  this.autorun( function () {
    $( '#enrollmentsTable tfoot th' ).each( function () {
      var title = $( this ).text();
      $( this ).html( '<input type="text" placeholder="Search ' +
        title + '" />' );
    } );

    $( '#enrollmentsTable' ).DataTable( {
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

    var table = $( '#enrollmentsTable' ).DataTable();

    table.columns().every( function () {
      var that = this;
      $( 'input', this.footer() ).on( 'keyup change', function () {
        if ( that.search() !== this.value ) {
          that
            .search( this.value )
            .draw();
        }
      } );
    } );
  } );

} );

Template.medicalClaim.onCreated( function () {
  this.subscribe( "MedicalClaimCount" );
} );



Template.medicalClaim.onRendered( function () {
  var chart;

  function buildChart( series ) {

    chart = $( '#claimChartMedical' ).highcharts( {

      chart: {
        type: 'column'
      },

      title: {
        text: 'Monthly Total Cause of Medical Claims'
      },

      subtitle: {
        text: ''
      },

      credits: {
        enabled: false
      },

      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ]
      },

      yAxis: {
        min: 0,
        title: {
          text: ''
        }
      },

      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },

      plotOptions: {
        column: {
          pointPadding: 0,
          borderWidth: 0,
          showInLegend: false
        }
      },

      series: series
    } );
  }
  var medicalClaimsForChart = {};
  var medicalClaims = [ 'Animal/Insect bite', 'Hypertension', 'Diabetes',
    'CVA,Chronic Kidney disease', 'Abration', 'Hypersensitivity',
    'Community acquired pneumonia', 'others'
  ];

  _.each( medicalClaims, function ( medicalClaim ) {
    medicalClaimsForChart[ medicalClaim ] = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0
    };
  } );

  Tracker.autorun( function () {
    var series = [];
    _.each( medicalClaims, function ( medicalClaim ) {
      _.each( MedicalClaimCount.find( {
        _id: medicalClaim,
      } ).fetch(), function ( claim ) {
        medicalClaimsForChart[ medicalClaim ][ claim.monthFiled ]++;
      } );
      // console.log( );
      series.push( {
        name: medicalClaim,
        data: _.values( medicalClaimsForChart[ medicalClaim ] )
      } );
    } );

    // if there is no chart, built it
    if ( !chart ) {
      buildChart( series );
      return;
    }

    // Otherwise, simply update the data
    for ( var i = 0; i < medicalClaims.length; i++ ) {
      chart.highcharts().series[ i ].update( {
        data: series[ i ].data
      } );
    }

  } );

} );

Template.deathClaim.onRendered( function () {

  var deathChart = $( '#claimChartDeath' ).highcharts( {

    chart: {
      type: 'column'
    },

    title: {
      text: 'Monthly Total Cause of Death Claims'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total Numbers'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} </b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [ {
      name: 'Cardiovascular',
      data: []

    }, {
      name: 'Respiratory',
      data: []

    }, {
      name: 'Renal failure',
      data: []

    }, {
      name: 'Cancer',
      data: []

    }, {
      name: 'Accident',
      data: []

    }, {
      name: 'Diabetes',
      data: []

    }, {
      name: 'Animal/Insect bite',
      data: []

    }, {
      name: 'Liver illness',
      data: []

    }, {
      name: 'Others',
      data: []

    } ]
  } );
  // this.autorun( function () {
  //   this.subscribe( 'DeathClaimCount', function () {
  //     var deathClaim = DeathClaimCount.find().fetch().map( function () {
  //       return doc.count;
  //     } );
  //     deathChart.series[ 0 ].setData( deathClaim );
  //   } );
  // } );

} );

Template.dashboardClaimTable.onRendered( function () {
  Tracker.autorun( function () {
    $( '#claimantTable tfoot th' ).each( function () {
      var title = $( this ).text();
      $( this ).html( '<input type="text" placeholder="Search ' +
        title + '" />' );
    } );

    var table = $( '#claimantTable' ).DataTable( {
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
      $( 'input', this.footer() ).on( 'keyup change', function () {
        if ( that.search() !== this.value ) {
          that
            .search( this.value )
            .draw();
        }
      } );
    } );
  } );
} );

Template.branchList.helpers( {
  branchName: function ( branch ) {
    var Branch = Branches.findOne( branch );
    if ( Branch ) {
      return Branch.branch;
    }
  },
  branchesEnrolleeCount: function () {
    return BranchEnrollmentCount.find();
  }
} );

Template.companyClaimsDashboard.helpers( {
  branchClaimsList: function () {
    var branchClaim = Claim.find( {}, {
      createdBy: 1
    } );
    return branchClaim;
  },
} );

Template.enolledTable.helpers( {
  //  dateSchema: function(){
  //    return DateRangeSchema;
  //  },
  enrollmentsList: function () {
    return Enrollments.find();
  },
  childColumn: function () {
    var child = Enrollments.find( {}, {
      childrenName: 1,
      children2Name: 1,
      children3Name: 1,
      children4Name: 1,
      children5Name: 1,
      children6Name: 1,
      children7Name: 1,
      children8Name: 1,
      children9Name: 1,
      children10Name: 1
    } );
    var childData = this.map( function ( child ) {
      return this[ child ];
    } );
    return childData.join( ',' );
  },
  datell: function ( val, type, doc ) {
    if ( val instanceof Date ) {
      return moment( val ).format( 'll' );
    } else {
      return "No date exist.";
    }
  },

  datelll: function ( val, type, doc ) {
    if ( val instanceof Date ) {
      return moment( val ).format( 'lll' );
    } else {
      return "No date exist.";
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
  monthCount: function () {
    var self = this;
    var dateNow = null;
    var dateMaturity = this.maturityDate;
    var monthLeft = countdown( dateNow, dateMaturity, countdown.MONTHS | countdown.DAYS, 2 ).toString();
    return monthLeft;
  },
  loanCycle: function () {
    var self = this;
    var version = this._version;
    return version;
  }
} );

Template.countdownDashboard.helpers( {
  monthCount: function () {
    var self = this;
    var dateNow = null;
    var dateMaturity = this.maturityDate;
    var timespan = countdown( dateNow, dateMaturity, countdown.MONTHS |
      countdown.DAYS, 2 );
    var monthLeft = timespan.toString();
    return monthLeft;
  },
  buttonClass: function () {
    var self = this;
    var dateNow = null;
    var dateMaturity = this.maturityDate;
    var timespan = countdown( dateNow, dateMaturity, countdown.MONTHS |
      countdown.DAYS, 2 );
    var monthLeft = timespan.toString();
    if ( timespan.months > 1 ) {
      return "btn-primary";
    } else if ( timespan.months < 1 )
      clearInterval( timespan );
    return "btn-danger";
  }
} );

Template.daysCountdownDashboard.helpers( {
  daysProcessed: function () {
    var days = null;
    var filedDate = this.dateFiled;
    var timespan = countdown( days, filedDate, countdown.MONTHS |
      countdown.DAYS, 2 );
    var daysCount = timespan.toString();
    if ( ( this.status === 'Approved' ) || ( this.status === 'ApprovedRB' ) || ( this.status === 'Denied' ) || ( this.status ===
        'DeniedRB' ) ) {
      window.clearInterval( daysCount );
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
    var daysCount = timespan.toString();
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
  },
} );

Template.dashboardClaimTable.helpers( {
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

  insuredName: function ( enrollmentId ) {
    var enrollee = Enrollments.findOne( {
      "_id": enrollmentId
    } );
    if ( enrollee ) {
      return enrollee.fullName;
    }
  },
  updated: function () {
    return new Date().toDateString();
  }

} );

Template.childrenDep.helpers( {
  childColumn: function () {
    var childData = Object.key( this ).map( function ( key ) {
      return this[ key ];
    } );
    return childData.join( ',' );
  }
} );

Template.claimList.helpers( {
  branchName: function ( branch ) {
    var Branch = Branches.findOne( branch );
    if ( Branch ) {
      return Branch && Branch.branch;
    }
  },
  branchClaimsCounts: function () {
    return BranchClaimCount.find();
  }
} );

Template.status.helpers( {
  statusPending: function () {
    if ( processingDashboard.set( this.status === 'Pending' ) )
      return true;
    else
      return false;
  },
  statusApproved: function () {
    if ( processingDashboard.set( this.status === 'Approved' ) )
      return true;
    else
      return false;
  },
  statusApprovedRB: function () {
    if ( processingDashboard.set( this.status === 'ApprovedRB' ) )
      return true;
    else
      return false;
  },
  statusDenied: function () {
    if ( processingDashboard.set( this.status === 'Denied' ) )
      return true;
    else
      return false;
  },
  statusDeniedRB: function () {
    if ( processingDashboard.set( this.status === 'DeniedRB' ) )
      return true;
    else
      return false;
  }
} );

function add( a, b ) {
  return a + b;
}

Template.lossRatio.helpers( {
  retainedMoney: function ( retained ) {
    var premiums = this.premiums;
    var paidAmount = this.amountPaid;
    var moneyRetained = ( premiums / paidAmount ) * 100;
    if ( premiums === undefined ) {
      return "No data for premium";
    } else if ( paidAmount === undefined ) {
      return "No data for Amount paid";
    } else {
      return moneyRetained.toFixed( 2 );
    }
  },
  productName: function ( name ) {
    var Product = Products.findOne( name );
    if ( Product ) {
      return Product && Product.name;
    }
  },
  products: function () {
    return EnrollmentProducts.find();
  },
  premiumPerProducts: function () {
    var total = this.premiums;
    return total += total;
  }
} );

Template.registerHelper( "branchName", function ( branch ) {
  var nameOfBranch = Branches.findOne( branch );
  if ( nameOfBranch ) {
    return nameOfBranch && nameOfBranch.branch;
  }
} );

Template.registerHelper( "monthName", function ( _id ) {
  var month = this._id;
  return moment( new Date( month.toString() ) ).format( 'MMMM' );
} );

Template.TotalPrincipalPremium.helpers( {
  enrollmentsPremium: function () {
    return TotalPrincipalPremium.find( {}, {
      sort: {
        _id: 1,
        year: -1
      }
    } );
  },
  totalPrincipalPremium: function () {
    var total = this.premium;
    if ( total ) {
      console.log( total += total );
      // total++;
    }
  }


} );

Template.TotalChildrenPremium.helpers( {
  enrollmentsChildrenPremium: function () {
    return TotalChildrenPremium.find( {}, {
      sort: {
        _id: 1,
        year: -1
      }
    } );
  },
  totalChildrenPremium: function () {
    var total = this.premium;
    if ( total ) {
      console.log( total += total );
      return total += total;
    }
  }
} );

Template.TotalSpousePremium.helpers( {
  enrollmentsSpousePremium: function () {
    return TotalSpousePremium.find( {}, {
      sort: {
        _id: 1,
        year: -1
      }
    } );
  },
  totalSpousePremium: function () {
    var total = this.premium;
    console.log( total );
    var sum = 0;
    if ( total ) {
      console.log( sum += total );
      return sum += total;
    }
  }
} );

Template.TotalSiblingsPremium.helpers( {
  enrollmentsSiblingsPremium: function () {
    return TotalSiblingsPremium.find( {}, {
      sort: {
        _id: 1,
        year: -1
      }
    } );
  },
  totalSiblingPremium: function () {
    console.log( total );
    var sum = 0;
    if ( total ) {
      console.log( sum += total );
      return sum += total;
    }
  }
} );

Template.TotalParentsPremium.helpers( {
  enrollmentsParentsPremium: function () {
    return TotalParentsPremium.find( {}, {
      sort: {
        _id: 1,
        year: -1
      }
    } );
  },
  totalParentPremium: function () {
    var total = this.premium;
    if ( total ) {
      console.log( total += total );
      return total += total;
    }
  }
} );
