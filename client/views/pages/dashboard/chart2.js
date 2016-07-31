Session.setDefault( 'dashboardChart', 'chart6' );

Template.chart.events( {
  'click li': function ( event ) {
    event.preventDefault();
    Session.set( 'dashboardChart', event.target.id );
  }
} );

Template.chart.helpers( {
  active: function () {
    return Session.get( 'dashboardChart' );
  }
} );

Template.updatedOn.helpers( {
  updated: function () {
    return new Date().toDateString();
  }
} );

Template.chart6.onRendered( function () {
  // Options, data for charts
  this.autorun( function () {
    var year = [ "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November",
      "December"
    ];

    // enrollments chart
    var JanClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '01/01/2016' ),
        $lt: new Date( '02/01/2016' )
      }
    } ).count() );
    var FebClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '02/01/2016' ),
        $lt: new Date( '03/01/2016' )
      }
    } ).count() );
    var MarClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '03/01/2016' ),
        $lt: new Date( '04/01/2016' )
      }
    } ).count() );
    var AprClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '04/01/2016' ),
        $lt: new Date( '05/01/2016' )
      }
    } ).count() );
    var MayClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '05/01/2016' ),
        $lt: new Date( '06/01/2016' )
      }
    } ).count() );
    var JuneClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '06/01/2016' ),
        $lt: new Date( '07/01/2016' )
      }
    } ).count() );
    var JulyClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '07/01/2016' ),
        $lt: new Date( '08/01/2016' )
      }
    } ).count() );
    var AugClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '08/01/2016' ),
        $lt: new Date( '09/01/2016' )
      }
    } ).count() );
    var SeptClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '09/01/2016' ),
        $lt: new Date( '10/01/2016' )
      }
    } ).count() );
    var OctClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '10/01/2016' ),
        $lt: new Date( '11/01/2016' )
      }
    } ).count() );
    var NovClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '11/01/2016' ),
        $lt: new Date( '12/01/2016' )
      }
    } ).count() );
    var DecClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '12/01/2016' ),
        $lt: new Date( '01/01/2017' )
      }
    } ).count() );

    // enrollments chart
    var JanEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '01/01/2016' ),
        $lt: new Date( '02/01/2016' )
      }
    } ).count() );
    var FebEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '02/01/2016' ),
        $lt: new Date( '03/01/2016' )
      }
    } ).count() );
    var MarEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '03/01/2016' ),
        $lt: new Date( '04/01/2016' )
      }
    } ).count() );
    var AprEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '04/01/2016' ),
        $lt: new Date( '05/01/2016' )
      }
    } ).count() );
    var MayEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '05/01/2016' ),
        $lt: new Date( '06/01/2016' )
      }
    } ).count() );
    var JuneEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '06/01/2016' ),
        $lt: new Date( '07/01/2016' )
      }
    } ).count() );
    var JulyEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '07/01/2016' ),
        $lt: new Date( '08/01/2016' )
      }
    } ).count() );
    var AugEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '08/01/2016' ),
        $lt: new Date( '09/01/2016' )
      }
    } ).count() );
    var SeptEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '09/01/2016' ),
        $lt: new Date( '10/01/2016' )
      }
    } ).count() );
    var OctEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '10/01/2016' ),
        $lt: new Date( '11/01/2016' )
      }
    } ).count() );
    var NovEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '11/01/2016' ),
        $lt: new Date( '12/01/2016' )
      }
    } ).count() );
    var DecEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '12/01/2016' ),
        $lt: new Date( '01/01/2017' )
      }
    } ).count() );

    var dataClaim = [ JanClaim, FebClaim, MarClaim, AprClaim, MayClaim,
      JuneClaim, JulyClaim, AugClaim, SeptClaim, OctClaim, NovClaim,
      DecClaim
    ];
    var dataEnroll = [ JanEnroll, FebEnroll, MarEnroll, AprEnroll,
      MayEnroll, JuneEnroll, JulyEnroll, AugEnroll, SeptEnroll,
      OctEnroll, NovEnroll, DecEnroll
    ];

    var enrollmentData = {
      labels: year,
      datasets: [ {
        label: "Claims",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: dataClaim
      }, {
        label: "Enrollments",
        fillColor: "rgba(26,179,148,0.5)",
        strokeColor: "rgba(26,179,148,0.7)",
        pointColor: "rgba(26,179,148,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(26,179,148,1)",
        data: dataEnroll
      } ]
    };

    var lineOptions = {
      tooltipTemplate: "<%= label %> {label}: <%= value %>",
      scaleShowGridLines: true,
      scaleGridLineColor: "rgba(0,0,0,.05)",
      scaleGridLineWidth: 1,
      bezierCurve: true,
      bezierCurveTension: 0.4,
      pointDot: true,
      pointDotRadius: 4,
      pointDotStrokeWidth: 1,
      pointHitDetectionRadius: 20,
      datasetStroke: true,
      datasetStrokeWidth: 2,
      datasetFill: true,
      responsive: true
    };
    var ctx = document.getElementById( 'enrollChart6' ).getContext(
      '2d' );
    new Chart( ctx ).Line( enrollmentData, lineOptions );
  } );
} );

Template.chart5.onRendered( function () {
  // Options, data for charts
  this.autorun( function () {

    var year = [ "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November",
      "December"
    ];

    // enrollments chart
    var JanClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '01/01/2015' ),
        $lt: new Date( '02/01/2015' )
      }
    } ).count() );
    var FebClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '02/01/2015' ),
        $lt: new Date( '03/01/2015' )
      }
    } ).count() );
    var MarClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '03/01/2015' ),
        $lt: new Date( '04/01/2015' )
      }
    } ).count() );
    var AprClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '04/01/2015' ),
        $lt: new Date( '05/01/2015' )
      }
    } ).count() );
    var MayClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '05/01/2015' ),
        $lt: new Date( '06/01/2015' )
      }
    } ).count() );
    var JuneClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '06/01/2015' ),
        $lt: new Date( '07/01/2015' )
      }
    } ).count() );
    var JulyClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '07/01/2015' ),
        $lt: new Date( '08/01/2015' )
      }
    } ).count() );
    var AugClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '08/01/2015' ),
        $lt: new Date( '09/01/2015' )
      }
    } ).count() );
    var SeptClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '09/01/2015' ),
        $lt: new Date( '10/01/2015' )
      }
    } ).count() );
    var OctClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '10/01/2015' ),
        $lt: new Date( '11/01/2015' )
      }
    } ).count() );
    var NovClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '11/01/2015' ),
        $lt: new Date( '12/01/2015' )
      }
    } ).count() );
    var DecClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '12/01/2015' ),
        $lt: new Date( '01/01/2016' )
      }
    } ).count() );

    // enrollments chart
    var JanEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '01/01/2015' ),
        $lt: new Date( '02/01/2015' )
      }
    } ).count() );
    var FebEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '02/01/2015' ),
        $lt: new Date( '03/01/2015' )
      }
    } ).count() );
    var MarEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '03/01/2015' ),
        $lt: new Date( '04/01/2015' )
      }
    } ).count() );
    var AprEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '04/01/2015' ),
        $lt: new Date( '05/01/2015' )
      }
    } ).count() );
    var MayEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '05/01/2015' ),
        $lt: new Date( '06/01/2015' )
      }
    } ).count() );
    var JuneEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '06/01/2015' ),
        $lt: new Date( '07/01/2015' )
      }
    } ).count() );
    var JulyEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '07/01/2015' ),
        $lt: new Date( '08/01/2015' )
      }
    } ).count() );
    var AugEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '08/01/2015' ),
        $lt: new Date( '09/01/2015' )
      }
    } ).count() );
    var SeptEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '09/01/2015' ),
        $lt: new Date( '10/01/2015' )
      }
    } ).count() );
    var OctEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '10/01/2015' ),
        $lt: new Date( '11/01/2015' )
      }
    } ).count() );
    var NovEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '11/01/2015' ),
        $lt: new Date( '12/01/2015' )
      }
    } ).count() );
    var DecEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '12/01/2015' ),
        $lt: new Date( '01/01/2016' )
      }
    } ).count() );

    var dataClaim = [ JanClaim, FebClaim, MarClaim, AprClaim, MayClaim,
      JuneClaim, JulyClaim, AugClaim, SeptClaim, OctClaim, NovClaim,
      DecClaim
    ];
    var dataEnroll = [ JanEnroll, FebEnroll, MarEnroll, AprEnroll,
      MayEnroll, JuneEnroll, JulyEnroll, AugEnroll, SeptEnroll,
      OctEnroll, NovEnroll, DecEnroll
    ];

    var enrollmentData = {
      labels: year,
      datasets: [ {
        label: 'Claims',
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: dataClaim
      }, {
        label: "Enrollments",
        fillColor: "rgba(26,179,148,0.5)",
        strokeColor: "rgba(26,179,148,0.7)",
        pointColor: "rgba(26,179,148,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(26,179,148,1)",
        data: dataEnroll
      } ]
    };

    var lineOptions = {
      tooltipTemplate: "<%= label %> {label}: <%= value %>",
      scaleShowGridLines: true,
      scaleGridLineColor: "rgba(0,0,0,.05)",
      scaleGridLineWidth: 1,
      bezierCurve: true,
      bezierCurveTension: 0.4,
      pointDot: true,
      pointDotRadius: 4,
      pointDotStrokeWidth: 1,
      pointHitDetectionRadius: 20,
      datasetStroke: true,
      datasetStrokeWidth: 2,
      datasetFill: true,
      responsive: true
    };
    var ctx = document.getElementById( 'enrollChart5' ).getContext(
      '2d' );
    new Chart( ctx ).Line( enrollmentData, lineOptions );
  } );
} );

Template.chart4.onRendered( function () {
  // Options, data for charts
  this.autorun( function () {
    var year = [ "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November",
      "December"
    ];

    // enrollments chart
    var JanClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '01/01/2014' ),
        $lt: new Date( '02/01/2014' )
      }
    } ).count() );
    var FebClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '02/01/2014' ),
        $lt: new Date( '03/01/2014' )
      }
    } ).count() );
    var MarClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '03/01/2014' ),
        $lt: new Date( '04/01/2014' )
      }
    } ).count() );
    var AprClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '04/01/2014' ),
        $lt: new Date( '05/01/2014' )
      }
    } ).count() );
    var MayClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '05/01/2014' ),
        $lt: new Date( '06/01/2014' )
      }
    } ).count() );
    var JuneClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '06/01/2014' ),
        $lt: new Date( '07/01/2014' )
      }
    } ).count() );
    var JulyClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '07/01/2014' ),
        $lt: new Date( '08/01/2014' )
      }
    } ).count() );
    var AugClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '08/01/2014' ),
        $lt: new Date( '09/01/2014' )
      }
    } ).count() );
    var SeptClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '09/01/2014' ),
        $lt: new Date( '10/01/2014' )
      }
    } ).count() );
    var OctClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '10/01/2014' ),
        $lt: new Date( '11/01/2014' )
      }
    } ).count() );
    var NovClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '11/01/2014' ),
        $lt: new Date( '12/01/2014' )
      }
    } ).count() );
    var DecClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '12/01/2014' ),
        $lt: new Date( '01/01/2015' )
      }
    } ).count() );

    // enrollments chart
    var JanEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '01/01/2014' ),
        $lt: new Date( '02/01/2014' )
      }
    } ).count() );
    var FebEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '02/01/2014' ),
        $lt: new Date( '03/01/2014' )
      }
    } ).count() );
    var MarEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '03/01/2014' ),
        $lt: new Date( '04/01/2014' )
      }
    } ).count() );
    var AprEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '04/01/2014' ),
        $lt: new Date( '05/01/2014' )
      }
    } ).count() );
    var MayEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '05/01/2014' ),
        $lt: new Date( '06/01/2014' )
      }
    } ).count() );
    var JuneEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '06/01/2014' ),
        $lt: new Date( '07/01/2014' )
      }
    } ).count() );
    var JulyEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '07/01/2014' ),
        $lt: new Date( '08/01/2014' )
      }
    } ).count() );
    var AugEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '08/01/2014' ),
        $lt: new Date( '09/01/2014' )
      }
    } ).count() );
    var SeptEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '09/01/2014' ),
        $lt: new Date( '10/01/2014' )
      }
    } ).count() );
    var OctEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '10/01/2014' ),
        $lt: new Date( '11/01/2014' )
      }
    } ).count() );
    var NovEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '11/01/2014' ),
        $lt: new Date( '12/01/2014' )
      }
    } ).count() );
    var DecEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '12/01/2014' ),
        $lt: new Date( '01/01/2015' )
      }
    } ).count() );

    var dataClaim = [ JanClaim, FebClaim, MarClaim, AprClaim, MayClaim,
      JuneClaim, JulyClaim, AugClaim, SeptClaim, OctClaim, NovClaim,
      DecClaim
    ];
    var dataEnroll = [ JanEnroll, FebEnroll, MarEnroll, AprEnroll,
      MayEnroll, JuneEnroll, JulyEnroll, AugEnroll, SeptEnroll,
      OctEnroll, NovEnroll, DecEnroll
    ];

    var enrollmentData = {
      labels: year,
      datasets: [ {
        label: "Claims",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: dataClaim
      }, {
        label: "Enrollments",
        fillColor: "rgba(26,179,148,0.5)",
        strokeColor: "rgba(26,179,148,0.7)",
        pointColor: "rgba(26,179,148,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(26,179,148,1)",
        data: dataEnroll
      } ]
    };

    var lineOptions = {
      tooltipTemplate: "<%= label %> {label}: <%= value %>",
      scaleShowGridLines: true,
      scaleGridLineColor: "rgba(0,0,0,.05)",
      scaleGridLineWidth: 1,
      bezierCurve: true,
      bezierCurveTension: 0.4,
      pointDot: true,
      pointDotRadius: 4,
      pointDotStrokeWidth: 1,
      pointHitDetectionRadius: 20,
      datasetStroke: true,
      datasetStrokeWidth: 2,
      datasetFill: true,
      responsive: true
    };
    var ctx = document.getElementById( 'enrollChart4' ).getContext(
      '2d' );
    new Chart( ctx ).Line( enrollmentData, lineOptions );
  } );
} );

Template.chart3.onRendered( function () {
  // Options, data for charts
  this.autorun( function () {
    var year = [ "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November",
      "December"
    ];

    // enrollments chart
    var JanClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '01/01/2013' ),
        $lt: new Date( '02/01/2013' )
      }
    } ).count() );
    var FebClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '02/01/2013' ),
        $lt: new Date( '03/01/2013' )
      }
    } ).count() );
    var MarClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '03/01/2013' ),
        $lt: new Date( '04/01/2013' )
      }
    } ).count() );
    var AprClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '04/01/2013' ),
        $lt: new Date( '05/01/2013' )
      }
    } ).count() );
    var MayClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '05/01/2013' ),
        $lt: new Date( '06/01/2013' )
      }
    } ).count() );
    var JuneClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '06/01/2013' ),
        $lt: new Date( '07/01/2013' )
      }
    } ).count() );
    var JulyClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '07/01/2013' ),
        $lt: new Date( '08/01/2013' )
      }
    } ).count() );
    var AugClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '08/01/2013' ),
        $lt: new Date( '09/01/2013' )
      }
    } ).count() );
    var SeptClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '09/01/2013' ),
        $lt: new Date( '10/01/2013' )
      }
    } ).count() );
    var OctClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '10/01/2013' ),
        $lt: new Date( '11/01/2013' )
      }
    } ).count() );
    var NovClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '11/01/2013' ),
        $lt: new Date( '12/01/2013' )
      }
    } ).count() );
    var DecClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '12/01/2013' ),
        $lt: new Date( '01/01/2014' )
      }
    } ).count() );

    // enrollments chart
    var JanEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '01/01/2013' ),
        $lt: new Date( '02/01/2013' )
      }
    } ).count() );
    var FebEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '02/01/2013' ),
        $lt: new Date( '03/01/2013' )
      }
    } ).count() );
    var MarEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '03/01/2013' ),
        $lt: new Date( '04/01/2013' )
      }
    } ).count() );
    var AprEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '04/01/2013' ),
        $lt: new Date( '05/01/2013' )
      }
    } ).count() );
    var MayEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '05/01/2013' ),
        $lt: new Date( '06/01/2013' )
      }
    } ).count() );
    var JuneEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '06/01/2013' ),
        $lt: new Date( '07/01/2013' )
      }
    } ).count() );
    var JulyEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '07/01/2013' ),
        $lt: new Date( '08/01/2013' )
      }
    } ).count() );
    var AugEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '08/01/2013' ),
        $lt: new Date( '09/01/2013' )
      }
    } ).count() );
    var SeptEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '09/01/2013' ),
        $lt: new Date( '10/01/2013' )
      }
    } ).count() );
    var OctEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '10/01/2013' ),
        $lt: new Date( '11/01/2013' )
      }
    } ).count() );
    var NovEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '11/01/2013' ),
        $lt: new Date( '12/01/2013' )
      }
    } ).count() );
    var DecEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '12/01/2013' ),
        $lt: new Date( '01/01/2014' )
      }
    } ).count() );

    var dataClaim = [ JanClaim, FebClaim, MarClaim, AprClaim, MayClaim,
      JuneClaim, JulyClaim, AugClaim, SeptClaim, OctClaim, NovClaim,
      DecClaim
    ];
    var dataEnroll = [ JanEnroll, FebEnroll, MarEnroll, AprEnroll,
      MayEnroll, JuneEnroll, JulyEnroll, AugEnroll, SeptEnroll,
      OctEnroll, NovEnroll, DecEnroll
    ];

    var enrollmentData = {
      labels: year,
      datasets: [ {
        label: "Claims",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: dataClaim
      }, {
        label: "Enrollments",
        fillColor: "rgba(26,179,148,0.5)",
        strokeColor: "rgba(26,179,148,0.7)",
        pointColor: "rgba(26,179,148,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(26,179,148,1)",
        data: dataEnroll
      } ]
    };

    var lineOptions = {
      tooltipTemplate: "<%= label %> {label}: <%= value %>",
      scaleShowGridLines: true,
      scaleGridLineColor: "rgba(0,0,0,.05)",
      scaleGridLineWidth: 1,
      bezierCurve: true,
      bezierCurveTension: 0.4,
      pointDot: true,
      pointDotRadius: 4,
      pointDotStrokeWidth: 1,
      pointHitDetectionRadius: 20,
      datasetStroke: true,
      datasetStrokeWidth: 2,
      datasetFill: true,
      responsive: true
    };
    var ctx = document.getElementById( 'enrollChart3' ).getContext(
      '2d' );
    new Chart( ctx ).Line( enrollmentData, lineOptions );
  } );
} );

Template.chart2.onRendered( function () {
  // Options, data for charts
  this.autorun( function () {
    var year = [ "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November",
      "December"
    ];

    // enrollments chart
    var JanClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '01/01/2012' ),
        $lt: new Date( '02/01/2012' )
      }
    } ).count() );
    var FebClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '02/01/2012' ),
        $lt: new Date( '03/01/2012' )
      }
    } ).count() );
    var MarClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '03/01/2012' ),
        $lt: new Date( '04/01/2012' )
      }
    } ).count() );
    var AprClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '04/01/2012' ),
        $lt: new Date( '05/01/2012' )
      }
    } ).count() );
    var MayClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '05/01/2012' ),
        $lt: new Date( '06/01/2012' )
      }
    } ).count() );
    var JuneClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '06/01/2012' ),
        $lt: new Date( '07/01/2012' )
      }
    } ).count() );
    var JulyClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '07/01/2012' ),
        $lt: new Date( '08/01/2012' )
      }
    } ).count() );
    var AugClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '08/01/2012' ),
        $lt: new Date( '09/01/2012' )
      }
    } ).count() );
    var SeptClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '09/01/2012' ),
        $lt: new Date( '10/01/2012' )
      }
    } ).count() );
    var OctClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '10/01/2012' ),
        $lt: new Date( '11/01/2012' )
      }
    } ).count() );
    var NovClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '11/01/2012' ),
        $lt: new Date( '12/01/2012' )
      }
    } ).count() );
    var DecClaim = ( Claim.find( {
      dateFiled: {
        $gt: new Date( '12/01/2012' ),
        $lt: new Date( '01/01/2013' )
      }
    } ).count() );

    // enrollments chart
    var JanEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '01/01/2012' ),
        $lt: new Date( '02/01/2012' )
      }
    } ).count() );
    var FebEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '02/01/2012' ),
        $lt: new Date( '03/01/2012' )
      }
    } ).count() );
    var MarEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '03/01/2012' ),
        $lt: new Date( '04/01/2012' )
      }
    } ).count() );
    var AprEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '04/01/2012' ),
        $lt: new Date( '05/01/2012' )
      }
    } ).count() );
    var MayEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '05/01/2012' ),
        $lt: new Date( '06/01/2012' )
      }
    } ).count() );
    var JuneEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '06/01/2012' ),
        $lt: new Date( '07/01/2012' )
      }
    } ).count() );
    var JulyEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '07/01/2012' ),
        $lt: new Date( '08/01/2012' )
      }
    } ).count() );
    var AugEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '08/01/2012' ),
        $lt: new Date( '09/01/2012' )
      }
    } ).count() );
    var SeptEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '09/01/2012' ),
        $lt: new Date( '10/01/2012' )
      }
    } ).count() );
    var OctEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '10/01/2012' ),
        $lt: new Date( '11/01/2012' )
      }
    } ).count() );
    var NovEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '11/01/2012' ),
        $lt: new Date( '12/01/2012' )
      }
    } ).count() );
    var DecEnroll = ( Enrollments.find( {
      effectivityDate: {
        $gt: new Date( '12/01/2012' ),
        $lt: new Date( '01/01/2013' )
      }
    } ).count() );

    var dataClaim = [ JanClaim, FebClaim, MarClaim, AprClaim, MayClaim,
      JuneClaim, JulyClaim, AugClaim, SeptClaim, OctClaim, NovClaim,
      DecClaim
    ];
    var dataEnroll = [ JanEnroll, FebEnroll, MarEnroll, AprEnroll,
      MayEnroll, JuneEnroll, JulyEnroll, AugEnroll, SeptEnroll,
      OctEnroll, NovEnroll, DecEnroll
    ];

    var enrollmentData = {
      labels: year,
      datasets: [ {
        label: "Claims",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: dataClaim
      }, {
        label: "Enrollments",
        fillColor: "rgba(26,179,148,0.5)",
        strokeColor: "rgba(26,179,148,0.7)",
        pointColor: "rgba(26,179,148,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(26,179,148,1)",
        data: dataEnroll
      } ]
    };

    var lineOptions = {
      tooltipTemplate: "<%= label %> {label}: <%= value %>",
      scaleShowGridLines: true,
      scaleGridLineColor: "rgba(0,0,0,.05)",
      scaleGridLineWidth: 1,
      bezierCurve: true,
      bezierCurveTension: 0.4,
      pointDot: true,
      pointDotRadius: 4,
      pointDotStrokeWidth: 1,
      pointHitDetectionRadius: 20,
      datasetStroke: true,
      datasetStrokeWidth: 2,
      datasetFill: true,
      responsive: true
    };
    var ctx = document.getElementById( 'enrollChart2' ).getContext(
      '2d' );
    new Chart( ctx ).Line( enrollmentData, lineOptions );
  } );
} );
