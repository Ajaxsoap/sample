Template.Dashboard.onRendered(function() {
// Options, data for charts
  this.autorun(function() {
    var life = Claim.find({},{dateFiled: 1, causeOfDeath: 1});
    var nonLife = Claim.find({},{dateFiled: 1, medical: 1});
    var year2016 = Enrollments.find({effectivityDate: new Date('2016')});
    
    // enrollments chart
    var JanClaim = (Claim.find({
      dateFiled: {
        $gt: new Date('01/01/2016'),
        $lt: new Date('02/01/2016')
      }
    }).count());
    var FebClaim = (Claim.find({
      dateFiled: {
        $gt: new Date('02/01/2016'),
        $lt: new Date('03/01/2016')
      }
    }).count());
    var MarClaim = (Claim.find({
      dateFiled: {
        $gt: new Date('03/01/2016'),
        $lt: new Date('04/01/2016')
      }
    }).count());
    var AprClaim = (Claim.find({
      dateFiled: {
        $gt: new Date('04/01/2016'),
        $lt: new Date('05/01/2016')
      }
    }).count());
    var MayClaim = (Claim.find({
      dateFiled: {
        $gt: new Date('05/01/2016'),
        $lt: new Date('06/01/2016')
      }
    }).count());
    var JuneClaim = (Claim.find({
      dateFiled: {
        $gt: new Date('06/01/2016'),
        $lt: new Date('07/01/2016')
      }
    }).count());
    var JulyClaim = (Claim.find({
      dateFiled: {
        $gt: new Date('07/01/2016'),
        $lt: new Date('08/01/2016')
      }
    }).count());
    var AugClaim = (Claim.find({
      dateFiled: {
        $gt: new Date('08/01/2015'),
        $lt: new Date('09/01/2015')
      }
    }).count());
    var SeptClaim = (Claim.find({
      dateFiled: {
        $gt: new Date('09/01/2015'),
        $lt: new Date('10/01/2015')
      }
    }).count());
    var OctClaim = (Claim.find({
      dateFiled: {
        $gt: new Date('10/01/2015'),
        $lt: new Date('11/01/2015')
      }
    }).count());
    var NovClaim = (Claim.find({
      dateFiled: {
        $gt: new Date('11/01/2015'),
        $lt: new Date('12/01/2015')
      }
    }).count());
    var DecClaim = (Claim.find({
      dateFiled: {
        $gt: new Date('12/01/2015'),
        $lt: new Date('01/01/2016')
      }
    }).count());

// enrollments chart
    var JanEnroll = (Enrollments.find({
      effectivityDate: {
        $gt: new Date('01/01/2016'),
        $lt: new Date('02/01/2016')
      }
    }).count());
    var FebEnroll = (Enrollments.find({
      effectivityDate: {
        $gt: new Date('02/01/2016'),
        $lt: new Date('03/01/2016')
      }
    }).count());
    var MarEnroll = (Enrollments.find({
      effectivityDate: {
        $gt: new Date('03/01/2016'),
        $lt: new Date('04/01/2016')
      }
    }).count());
    var AprEnroll = (Enrollments.find({
      effectivityDate: {
        $gt: new Date('04/01/2016'),
        $lt: new Date('05/01/2016')
      }
    }).count());
    var MayEnroll = (Enrollments.find({
      effectivityDate: {
        $gt: new Date('05/01/2016'),
        $lt: new Date('06/01/2016')
      }
    }).count());
    var JuneEnroll = (Enrollments.find({
      effectivityDate: {
        $gt: new Date('06/01/2015'),
        $lt: new Date('07/01/2015')
      }
    }).count());
    var JulyEnroll = (Enrollments.find({
      effectivityDate: {
        $gt: new Date('07/01/2015'),
        $lt: new Date('08/01/2015')
      }
    }).count());
    var AugEnroll = (Enrollments.find({
      effectivityDate: {
        $gt: new Date('08/01/2015'),
        $lt: new Date('09/01/2015')
      }
    }).count());
    var SeptEnroll = (Enrollments.find({
      effectivityDate: {
        $gt: new Date('09/01/2015'),
        $lt: new Date('10/01/2015')
      }
    }).count());
    var OctEnroll = (Enrollments.find({
      effectivityDate: {
        $gt: new Date('10/01/2015'),
        $lt: new Date('11/01/2015')
      }
    }).count());
    var NovEnroll = (Enrollments.find({
      effectivityDate: {
        $gt: new Date('11/01/2015'),
        $lt: new Date('12/01/2015')
      }
    }).count());
    var DecEnroll = (Enrollments.find({
      effectivityDate: {
        $gt: new Date('12/01/2015'),
        $lt: new Date('01/01/2016')
      }
    }).count());
    var lineData = {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [{
        label: "Claims",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [JanClaim, FebClaim, MarClaim, AprClaim, MayClaim, JuneClaim, JulyClaim, AugClaim, SeptClaim, OctClaim, NovClaim, DecClaim]
      }, {
        label: "Enrollments",
        fillColor: "rgba(26,179,148,0.5)",
        strokeColor: "rgba(26,179,148,0.7)",
        pointColor: "rgba(26,179,148,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(26,179,148,1)",
        data: [JanEnroll, FebEnroll, MarEnroll, AprEnroll, MayEnroll, JuneEnroll, JulyEnroll, AugEnroll, SeptEnroll, OctEnroll, NovEnroll, DecEnroll]
      }]
    };

    var lineOptions = {
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
    var ctx = document.getElementById('lineChart').getContext('2d');
    new Chart(ctx).Line(lineData, lineOptions);
  });
});

Template.Dashboard.helpers({
  // enrollmentsCount: function() {
  //   return Enrollments.find().count();
  // },
  // claimsCount: function() {
  //   return Claim.find().count();
  // },
  // lifePremium: function() {
  //   var products = Products.find({name: "Life"});
  //   var net = products.netPremium.value();
  //   var gross = products.grossProfit.value();
  //   console.log(net + gross);
  //   var premium = this.net + this.gross;
  //   return premium;
  // },
  updated: function() {
    return new Date().toDateString();
  }
});

Template.enolledTable.onRendered(function() {
  this.autorun(function() {
    $('#enrollmentsTable tfoot th').each(function() {
      var title = $(this).text();
      $(this).html('<input type="text" placeholder="Search ' + title + '" />');
    });

    $('#enrollmentsTable').DataTable({
      "scrollX": true,
      dom: "<'row'<'col-sm-12'B><'clear'>>" + "lfrtip",
      buttons: [{
        extend: 'excel',
        text: 'Export in Excel'
      }, {
        extend: 'print',
        text: 'Print'
      }, {
        extend: 'pdf',
        text: 'PDF'
      }]
    });

    var table = $('#enrollmentsTable').DataTable();

    table.columns().every(function() {
      var that = this;
      $('input', this.footer()).on('keyup change', function() {
        if (that.search() !== this.value) {
          that
            .search(this.value)
            .draw();
        }
      });
    });
  });

});

Template.claimedTable.onRendered(function() {
  // Options, data for charts
  Tracker.autorun(function() {
    // var productCount = ReactiveMethod.call('productsCount', function(result){
    //   return result;
    // });
    // var count = productCount(_id, count);
    var JanClaim = (Claim.find({"causeOfDeath": "Cancer"},{
      dateFiled: {
        $gt: new Date('01/01/2016'),
        $lt: new Date('02/01/2016')
      }
    }).count());
    var FebClaim = (Claim.find({
      dateFiled: {
        $gt: new Date('02/01/2016'),
        $lt: new Date('03/01/2016')
      }
    }).count());
    var MarClaim = (Claim.find({
      dateFiled: {
        $gt: new Date('03/01/2016'),
        $lt: new Date('04/01/2016')
      }
    }).count());
    var AprClaim = (Claim.find({
      dateFiled: {
        $gt: new Date('04/01/2016'),
        $lt: new Date('05/01/2016')
      }
    }).count());
    var MayClaim = (Claim.find({
      dateFiled: {
        $gt: new Date('05/01/2016'),
        $lt: new Date('06/01/2016')
      }
    }).count());
    var JuneClaim = (Claim.find({
      dateFiled: {
        $gt: new Date('06/01/2016'),
        $lt: new Date('07/01/2016')
      }
    }).count());
    var JulyClaim = (Claim.find({
      dateFiled: {
        $gt: new Date('07/01/2016'),
        $lt: new Date('08/01/2016')
      }
    }).count());
    var AugClaim = (Claim.find({
      dateFiled: {
        $gt: new Date('08/01/2015'),
        $lt: new Date('09/01/2015')
      }
    }).count());
    var SeptClaim = (Claim.find({
      dateFiled: {
        $gt: new Date('09/01/2015'),
        $lt: new Date('10/01/2015')
      }
    }).count());
    var OctClaim = (Claim.find({
      dateFiled: {
        $gt: new Date('10/01/2015'),
        $lt: new Date('11/01/2015')
      }
    }).count());
    var NovClaim = (Claim.find({"causeOfDeath": "Respiratory"},{
      dateFiled: {
        $gt: new Date('11/01/2015'),
        $lt: new Date('12/01/2015')
      }
    }).count());
    var DecClaim = (Claim.find({
      dateFiled: {
        $gt: new Date('12/01/2015'),
        $lt: new Date('01/01/2016')
      }
    }).count());

    var JanEnroll = (Enrollments.find({
      effectivityDate: {
        $gt: new Date('01/01/2016'),
        $lt: new Date('02/01/2016')
      }
    }).count());
    var FebEnroll = (Enrollments.find({
      effectivityDate: {
        $gt: new Date('02/01/2016'),
        $lt: new Date('03/01/2016')
      }
    }).count());
    var MarEnroll = (Enrollments.find({
      effectivityDate: {
        $gt: new Date('03/01/2016'),
        $lt: new Date('04/01/2016')
      }
    }).count());
    var AprEnroll = (Enrollments.find({
      effectivityDate: {
        $gt: new Date('04/01/2016'),
        $lt: new Date('05/01/2016')
      }
    }).count());
    var MayEnroll = (Enrollments.find({
      effectivityDate: {
        $gt: new Date('05/01/2016'),
        $lt: new Date('06/01/2016')
      }
    }).count());
    var JuneEnroll = (Enrollments.find({
      effectivityDate: {
        $gt: new Date('06/01/2015'),
        $lt: new Date('07/01/2015')
      }
    }).count());
    var JulyEnroll = (Enrollments.find({
      effectivityDate: {
        $gt: new Date('07/01/2015'),
        $lt: new Date('08/01/2015')
      }
    }).count());
    var AugEnroll = (Enrollments.find({
      effectivityDate: {
        $gt: new Date('08/01/2015'),
        $lt: new Date('09/01/2015')
      }
    }).count());
    var SeptEnroll = (Enrollments.find({
      effectivityDate: {
        $gt: new Date('09/01/2015'),
        $lt: new Date('10/01/2015')
      }
    }).count());
    var OctEnroll = (Enrollments.find({
      effectivityDate: {
        $gt: new Date('10/01/2015'),
        $lt: new Date('11/01/2015')
      }
    }).count());
    var NovEnroll = (Enrollments.find({
      effectivityDate: {
        $gt: new Date('11/01/2015'),
        $lt: new Date('12/01/2015')
      }
    }).count());
    var DecEnroll = (Enrollments.find({
      effectivityDate: {
        $gt: new Date('12/01/2015'),
        $lt: new Date('01/01/2016')
      }
    }).count());
    var lineData = {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [{
        label: "Claims",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [JanClaim, FebClaim, MarClaim, AprClaim, MayClaim, JuneClaim, JulyClaim, AugClaim, SeptClaim, OctClaim, NovClaim, DecClaim]
      }, {
        label: "Enrollments",
        fillColor: "rgba(26,179,148,0.5)",
        strokeColor: "rgba(26,179,148,0.7)",
        pointColor: "rgba(26,179,148,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(26,179,148,1)",
        data: [JanEnroll, FebEnroll, MarEnroll, AprEnroll, MayEnroll, JuneEnroll, JulyEnroll, AugEnroll, SeptEnroll, OctEnroll, NovEnroll, DecEnroll]
      },
      {
        label: "Claim2",
        fillColor: "rgba(26,179,148,0.5)",
        strokeColor: "rgba(26,179,148,0.7)",
        pointColor: "rgba(26,179,148,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(26,179,148,1)",
        data: [10, 20, 50, 42, 5, 30, 50, 40, 10, 120, 30, 2]
      },
      {
        label: "Claim3",
        fillColor: "rgba(26,179,148,0.5)",
        strokeColor: "rgba(26,179,148,0.7)",
        pointColor: "rgba(26,179,148,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(26,179,148,1)",
        data: [5, 3, 6, 2, 7, 8, 9, 10, 11, 20, 50, 55]
      },
      {
        label: "Claim3",
        fillColor: "rgba(26,179,148,0.5)",
        strokeColor: "rgba(26,179,148,0.7)",
        pointColor: "rgba(26,179,148,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(26,179,148,1)",
        data: [15, 13, 16, 12, 17, 18, 19, 20, 21, 30, 60, 35]
      },
      {
        label: "Claim3",
        fillColor: "rgba(26,179,148,0.5)",
        strokeColor: "rgba(26,179,148,0.7)",
        pointColor: "rgba(26,179,148,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(26,179,148,1)",
        data: [51, 31, 61, 21, 71, 81, 91, 31, 11, 20, 50, 55]
      },
      {
        label: "Claim3",
        fillColor: "rgba(26,179,148,0.5)",
        strokeColor: "rgba(26,179,148,0.7)",
        pointColor: "rgba(26,179,148,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(26,179,148,1)",
        data: [150, 35, 61, 62, 65, 68, 69, 70, 81, 50, 90, 105]
      },
      {
        label: "Claim3",
        fillColor: "rgba(26,179,148,0.5)",
        strokeColor: "rgba(26,179,148,0.7)",
        pointColor: "rgba(26,179,148,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(26,179,148,1)",
        data: [55, 35, 65, 25, 75, 85, 95, 105, 115, 205, 505, 20]
      },
      {
        label: "Claim3",
        fillColor: "rgba(26,179,148,0.5)",
        strokeColor: "rgba(26,179,148,0.7)",
        pointColor: "rgba(26,179,148,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(26,179,148,1)",
        data: [58, 38, 68, 28, 78, 88, 98, 108, 118, 208, 58, 25]
      },
      {
        label: "Claim3",
        fillColor: "rgba(26,179,148,0.5)",
        strokeColor: "rgba(26,179,148,0.7)",
        pointColor: "rgba(26,179,148,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(26,179,148,1)",
        data: [5, 3, 6, 2, 7, 8, 9, 10, 11, 20, 50, 55]
      }
    ]
    };

    var lineOptions = {
      scaleShowGridLines: true,
      scaleGridLineColor: "rgba(0,0,0,.05)",
      scaleGridLineWidth: 1,
      tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= label %>",
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
    var ctx = document.getElementById("lineClaimChart").getContext("2d");
    new Chart(ctx).Line(lineData, lineOptions);
  });

  Tracker.autorun(function() {
    $('#claimantTable tfoot th').each(function() {
      var title = $(this).text();
      $(this).html('<input type="text" placeholder="Search ' + title + '" />');
    });

    $('#claimantTable').DataTable({
      "scrollX": true,
      dom: "<'row'<'col-sm-12'B><'clear'>>" + "lfrtip",
      buttons: [{
        extend: 'excel',
        text: 'Export in Excel'
      }, {
        extend: 'print',
        text: 'Print'
      }, {
        extend: 'pdf',
        text: 'PDF'
      }]
    });

    var table = $('#claimantTable').DataTable();

    table.columns().every(function() {
      var that = this;
      $('input', this.footer()).on('keyup change', function() {
        if (that.search() !== this.value) {
          that
            .search(this.value)
            .draw();
        }
      });
    });
  });

});

Template.branchList.helpers({
  branchName: function(branch) {
    var Branch = Branches.findOne(branch);
    if (Branch) {
      return Branch.branch;
    }
  },
  branchesEnrolleeCount: function() {
    var user = Meteor.users.findOne({"_id": this.userId}, {fields: {profile: 1}});
    return ReactiveMethod.call("branchEnrolleeCounts", function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){
        console.log("results value: "+ JSON.stringify(result));
        return { result: user.profile.company };
      }
    });
  }
});

Template.companyClaimsDashboard.helpers({
  branchClaimsList: function() {
    var branchClaim = Claim.find({}, {
      createdBy: 1
    });
    return branchClaim;
  },
});

Template.enolledTable.helpers({
  //  dateSchema: function(){
  //    return DateRangeSchema;
  //  },
  enrollmentsList: function() {
    return Enrollments.find();
  },
  datell: function(val, type, doc) {
    if (val instanceof Date) {
      return moment(val).format('ll');
    } else {
      return "Never";
    }
  },

  datelll: function(val, type, doc) {
    if (val instanceof Date) {
      return moment(val).format('lll');
    } else {
      return "Never";
    }
  },
  companyName: function(company) {
    var Company = Companies.findOne(company);
    if (Company) {
      return Company.name;
    }
  },
  branchName: function(branch) {
    var Branch = Branches.findOne(branch);
    if (Branch) {
      return Branch.branch;
    }
  },
  monthCount: function() {
    var self = this;
    var dateNow = null;
    var dateMaturity = this.maturityDate;
    var monthLeft = countdown(dateNow, dateMaturity, countdown.MONTHS | countdown.DAYS, 2).toString();
    return monthLeft;
  },
  loanCycle: function() {
    var self = this;
    var version = this._version;
    return version;
  }
});

Template.claimedTable.helpers({
  //  dateSchema: function(){
  //    var session = Session.get('searchFilter2');
  //    return session.DateRangeSchema;
  //  },
  claimsList: function() {
    return Claim.find();
  },
  filedDate: function(dateFiled) {
    if (dateFiled instanceof Date) {
      return moment(dateFiled).format('lll');
    } else {
      return "Never";
    }
  },
  daysProcessed: function() {
    var days = null;
    var filedDate = this.dateFiled;
    var daysCount = countdown(days, filedDate, countdown.MONTHS | countdown.DAYS, 2).toString();
    return daysCount;
  },
  insuredName: function(enrollmentId) {
    var enrollee = Enrollments.findOne({
      "_id": enrollmentId
    });
    if (enrollee) {
      return enrollee.fullName;
    }
  },
  updated: function() {
    return new Date().toDateString();
  },

});

Template.claimList.helpers({
  branchName: function(branch) {
    var Branch = Branches.findOne(branch);
    if (Branch) {
      return Branch && Branch.branch;
    }
  },
  branchClaimsCounts: function() {
    var user = Meteor.users.findOne({"_id": this.userId}, {fields: {profile: 1}});
    return ReactiveMethod.call("branchClaimsCounts", function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){
        console.log("results value: "+ JSON.stringify(result));
        return { result: user.profile.company };
      }
    });
  }
});

Template.claimedStatus.helpers({
  statusPending: function() {
    var self = this;
    if (this.status === 'Pending')
      return true;
    else
      return false;
  },
  statusApproved: function() {
    var self = this;
    if (this.status === 'Approved')
      return true;
    else
      return false;
  },
  statusDenied: function() {
    var self = this;
    if (this.status === 'Denied')
      return true;
    else
      return false;
  }
});
