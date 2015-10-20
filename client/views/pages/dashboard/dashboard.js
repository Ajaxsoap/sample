Tracker.autorun(function(){
  Meteor.subscribe("enrollments");
  console.log("Enrollments count: ", Counts.get("enrollmentsCount"));
  Meteor.subscribe("claims");
  console.log("Claims count: ", Counts.get("claimsCount"));
  Meteor.subscribe('companies');
  Meteor.subscribe('branches');
  Meteor.subscribe("userProfile");
});

var Session = new ReactiveDict();

// Counts.get(companyEnrolledCount);

Session.setDefault('searchFilter', '');
Session.setDefault('searchFilter2', '');
Session.setDefault('tableLimit', 20);
Session.setDefault('tableLimit2', 20);
Session.setDefault('paginationCount', 1);
Session.setDefault('paginationCount2', 1);
Session.setDefault('selectedPagination', 0);
Session.setDefault('selectedPagination1', 0);
Session.setDefault('skipCount', 0);
Session.setDefault('skipCount2', 0);

Session.setDefault('receivedData', false);
Session.setDefault('receivedData2', false);

  function exportTableToCSV($table, filename){
    var $rows = $table.find('tr:has(td)'),
    // Temporary delimiter characters unlikely to be typed by keyboard
    // This is to avoid accidentally splitting the actual contents
    tmpColDelim = String.fromCharCode(11), // vertical tab character
    tmpRowDelim = String.fromCharCode(0), // null character

    // actual delimiter characters for CSV format
    colDelim = '","',
    rowDelim = '"\r\n"',

    // Grab text from table into CSV formatted string
    csv = '"' + $rows.map(function (i, row) {
      var $row = $(row),
      $cols = $row.find('td');
      return $cols.map(function (j, col) {
        var $col = $(col),
        text = $col.text();
        return text.replace('/"/g', '""'); // escape double quotes
      }).get().join(tmpColDelim);
    }).get().join(tmpRowDelim)
      .split(tmpRowDelim).join(rowDelim)
      .split(tmpColDelim).join(colDelim) + '"',

      // Data URI
      csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);
        $(this)
          .attr({
          'download': filename,
          'href': csvData,
          'target': '_blank'
        });
  }


Template.dashboard.rendered = function(){
  // Options, data for charts
  Tracker.autorun(function(){
    var JanClaim = (Claim.find({dateFiled: { $gt: new Date('01/01/2016'), $lt: new Date('02/01/2016')}}).count());
    var FebClaim = (Claim.find({dateFiled: { $gt: new Date('02/01/2016'), $lt: new Date('03/01/2015')}}).count());
    var MarClaim = (Claim.find({dateFiled: { $gt: new Date('03/01/2016'), $lt: new Date('04/01/2016')}}).count());
    var AprClaim = (Claim.find({dateFiled: { $gt: new Date('04/01/2016'), $lt: new Date('05/01/2015')}}).count());
    var MayClaim = (Claim.find({dateFiled: { $gt: new Date('05/01/2016'), $lt: new Date('06/01/2016')}}).count());
    var JuneClaim = (Claim.find({dateFiled: { $gt: new Date('06/01/2016'), $lt: new Date('07/01/2016')}}).count());
    var JulyClaim = (Claim.find({dateFiled: { $gt: new Date('07/01/2016'), $lt: new Date('08/01/2016')}}).count());
    var AugClaim = (Claim.find({dateFiled: { $gt: new Date('08/01/2015'), $lt: new Date('09/01/2015')}}).count());
    var SeptClaim = (Claim.find({dateFiled: { $gt: new Date('09/01/2015'), $lt: new Date('10/01/2015')}}).count());
    var OctClaim = (Claim.find({dateFiled: { $gt: new Date('10/01/2015'), $lt: new Date('11/01/2015')}}).count());
    var NovClaim = (Claim.find({dateFiled: { $gt: new Date('11/01/2015'), $lt: new Date('12/01/2015')}}).count());
    var DecClaim = (Claim.find({dateFiled: { $gt: new Date('12/01/2015'), $lt: new Date('01/01/2016')}}).count());

    var JanEnroll = (Enrollments.find({"policyDetails.effectivityDate": { $gt: new Date('01/01/2015'), $lt: new Date('02/01/2015')}}).count());
    var FebEnroll = (Enrollments.find({"policyDetails.effectivityDate": { $gt: new Date('02/01/2015'), $lt: new Date('03/01/2015')}}).count());
    var MarEnroll = (Enrollments.find({"policyDetails.effectivityDate": { $gt: new Date('03/01/2015'), $lt: new Date('04/01/2015')}}).count());
    var AprEnroll = (Enrollments.find({"policyDetails.effectivityDate": { $gt: new Date('04/01/2015'), $lt: new Date('05/01/2015')}}).count());
    var MayEnroll = (Enrollments.find({"policyDetails.effectivityDate": { $gt: new Date('05/01/2015'), $lt: new Date('06/01/2015')}}).count());
    var JuneEnroll = (Enrollments.find({"policyDetails.effectivityDate": { $gt: new Date('06/01/2015'), $lt: new Date('07/01/2015')}}).count());
    var JulyEnroll = (Enrollments.find({"policyDetails.effectivityDate": { $gt: new Date('07/01/2015'), $lt: new Date('08/01/2015')}}).count());
    var AugEnroll = (Enrollments.find({"policyDetails.effectivityDate": { $gt: new Date('08/01/2015'), $lt: new Date('09/01/2015')}}).count());
    var SeptEnroll = (Enrollments.find({"policyDetails.effectivityDate": { $gt: new Date('09/01/2015'), $lt: new Date('10/01/2015')}}).count());
    var OctEnroll = (Enrollments.find({"policyDetails.effectivityDate": { $gt: new Date('10/01/2015'), $lt: new Date('11/01/2015')}}).count());
    var NovEnroll = (Enrollments.find({"policyDetails.effectivityDate": { $gt: new Date('11/01/2015'), $lt: new Date('12/01/2015')}}).count());
    var DecEnroll = (Enrollments.find({"policyDetails.effectivityDate": { $gt: new Date('12/01/2015'), $lt: new Date('01/01/2016')}}).count());
    var lineData = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
            {
                label: "Claims",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [JanClaim, FebClaim, MarClaim, AprClaim, MayClaim, JuneClaim, JulyClaim, AugClaim, SeptClaim, OctClaim, NovClaim, DecClaim]
            },
            {
                label: "Enrollments",
                fillColor: "rgba(26,179,148,0.5)",
                strokeColor: "rgba(26,179,148,0.7)",
                pointColor: "rgba(26,179,148,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(26,179,148,1)",
                data: [JanEnroll, FebEnroll, MarEnroll, AprEnroll, MayEnroll, JuneEnroll, JulyEnroll, AugEnroll, SeptEnroll, OctEnroll, NovEnroll, DecEnroll]
            }
        ]
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
    var ctx = document.getElementById("lineChart").getContext("2d");
    new Chart(ctx).Line(lineData, lineOptions);
  });
};

 Template.dashboard.helpers({
   "enrollmentsCount": function(){
    return Enrollments.find().count();
   },
   "claimsCount": function(){
     return Claim.find().count();
   },
   "updated": function(){
     return new Date().toDateString();
   },
   "enrollmentsCompanyCount": function(){
     return Counts.get("enrollmentsCount");
   },
   "claimsCompanyCount": function(userId){
     return Counts.get("claimsCount");
   }
 });

Template.companyEnrolleesDashboard.helpers({
  branchEnrolleesList: function(branch){
    var user = Meteor.users.findOne({ "_id": this.userId }, { fields: { "profile": 1 } });
    var Branch = Branches.find();
      if ( Branch ){
        return Branch && Branch.branch;
      }
    }

  // branchName: function(branch) {
  //   var branchE = Branches.findOne( { "_id":branch } );
  //   if ( branchE ){
  //     console.log(branchE);
  //     return branchE && branchE.branch;
  //   }
  //  },
});
 Template.enolledTable.events({
   // use keyup to implement dynamic filtering
   // keyup is preferred to keypress because of end-of-line issues
   'keyup #searchInput': function() {
     Session.set('searchFilter', $('#searchInput').val());
   },
   "click #exportEnrollee": function(event) {
    exportTableToCSV([$('#data>table'), 'export.csv']);
    },
   // set the same session variable from multiple buttons
   'click #twentyButton': function() {
     Session.set('tableLimit', 20);
   },
   'click #fiftyButton': function() {
     Session.set('tableLimit', 50);
   },
   'click #hundredButton': function() {
     Session.set('tableLimit', 100);
   },
   // this.index refers to a data context defined by
   // Template.enolledTable.paginationButtonList()
   'click .pagination-btn': function() {
     var self = this;
     Session.set('selectedPagination', this.index);
     Session.set('skipCount', this.index * Session.get('tableLimit'));
   }

 });

 Template.enolledTable.helpers({
   "enrollmentsCount": function(){
    return Enrollments.find().count();
   },
   dateSchema: function(){
     return DateRangeSchema;
   },
   enrollmentsList: function() {
     // this triggers a refresh of data elsewhere in the table
     // receive some data and set our reactive data variable with a new value
     Session.set('receivedData', new Date());

     // figure out our pagination count
     Session.set('paginationCount', Math.floor(Enrollments.find().count() / Session.get('tableLimit')));

     // this is a performant local (client-side) search on the data
     // current in our Enrollments cursor, and will reactively
     // update the table
     return Enrollments.find({
       $or: [{
         fullName: {
           $regex: Session.get('searchFilter'),
           $options: 'i'
         }
       },

       {
         company: {
           $regex: Session.get('searchFilter'),
           $options: 'i'
         }
       },
       {
         branch: {
           $regex: Session.get('searchFilter'),
           $options: 'i'
         }
       }
     ]
     }, {
       limit: Session.get('tableLimit'),
       skip: Session.get('skipCount'),
     }
   );
   },
   rendered: function() {
     // step A:  initialize the table sorting functionality
     Tracker.autorun(function() {
       console.log(Session.get('receivedData'));
       setTimeout(function() {
         $("#enrollmentsTable").trigger("update");
       }, 200);
     });
   },
   getPaginationCount: function() {
     return Session.get('paginationCount');
   },
   paginationButtonList: function() {
     // array of numbers the length of the paginationCount
     // [0,1,2,3,4,5]
     var paginationArray = [];
     for (var i = 0; i < Session.get('paginationCount'); i++) {
       paginationArray[i] = {
         index: i
       };
     }
     return paginationArray;
   },
   // helper functions to style buttons correctly as a person clicks through the UI
   isTwentyActive: function() {
     if (Session.get('tableLimit') === 20) {
       return "active";
     }
   },
   isFiftyActive: function() {
     if (Session.get('tableLimit') === 50) {
       return "active";
     }
   },
   isHundredActive: function() {
     if (Session.get('tableLimit') === 100) {
       return "active";
     }
   },
   effectivityDate: function (val, type, doc) {
     if (val instanceof Date) {
       return moment(val).format('ll');
     } else {
       return "Never";
     }
   },
   maturityDate: function (val, type, doc) {
     if (val instanceof Date) {
       return moment(val).format('ll');
     } else {
       return "Never";
     }
   },
  //  companyName: function( companyId ) {
  //    var Company = Companies.findOne( { "_id":companyId } );
  //    if ( Company ){
  //      return Company && Company.name;
  //    }
  //   },
    companyName: function(company) {
      var Company = Companies.findOne(company);
      if ( Company ){
        return Company && Company.name;
      }
    },
    branchName: function(branch) {
      var Branch = Branches.findOne(branch);
      if ( Branch ){
        return Branch && Branch.branch;
      }
    },
   monthCount: function() {
     var self = this;
     var dateNow = null;
     var dateMaturity = this.policyDetails.maturityDate;
     var monthLeft = countdown(dateNow, dateMaturity, countdown.MONTHS | countdown.DAYS, 2).toString();
     return monthLeft;
   },
   loanCycle: function() {
     var self = this;
     var version = this._version;
     return version;
   }
 });

 Template.claimedTable.events({
   // use keyup to implement dynamic filtering
   // keyup is preferred to keypress because of end-of-line issues
   'keyup #searchInput2': function() {
     Session.set('searchFilter2', $('#searchInput2').val());
   },
  //  "click #exportClaims": function(e, t) {
  //    var self = this;
  //    e.preventDefault();
  //    claimsViewExport(this.claimsView, "csv");
  //  },
   // set the same session variable from multiple buttons
   'click #twentyButton2': function() {
     Session.set('tableLimit2', 20);
   },
   'click #fiftyButton2': function() {
     Session.set('tableLimit2', 50);
   },
   'click #hundredButton2': function() {
     Session.set('tableLimit2', 100);
   },
   // this.index refers to a data context defined by
   // Template.enolledTable.paginationButtonList()
   'click .pagination-btn2': function() {
     Session.set('selectedPagination2', this.index);
     Session.set('skipCount2', this.index * Session.get('tableLimit2'));
   }
 });

 Template.claimedTable.helpers({
   "claimsCount": function(){
     return Claim.find().count();
   },
   dateSchema: function(){
     return DateRangeSchema;
   },
   claimsList: function() {
     // this triggers a refresh of data elsewhere in the table
     // receive some data and set our reactive data variable with a new value
     Session.set('receivedData2', new Date());

     // figure out our pagination count
     Session.set('paginationCount2', Math.floor(Claim.find().count() / Session.get('tableLimit2')));

     // this is a performant local (client-side) search on the data
     // current in our Claims cursor, and will reactively
     // update the table
     return Claim.find({
       $or: [{
         claimNumber: {
           $regex: Session.get('searchFilter2'),
           $options: 'i'
         }
       },
       {
         enrollmentId: {
           $regex: Session.get('searchFilter2'),
           $options: 'i'
         }
       },
       {
         clientType: {
           $regex: Session.get('searchFilter2'),
           $options: 'i'
         }
       },
       {
         status: {
           $regex: Session.get('searchFilter2'),
           $options: 'i'
         }
       },
       {
         ammountPaid: {
           $regex: Session.get('searchFilter2'),
           $options: 'i'
         }
       },
       {
         causeOfDeath: {
           $regex: Session.get('searchFilter2'),
           $options: 'i'
         }
       },
       {
         medical: {
           $regex: Session.get('searchFilter2'),
           $options: 'i'
         }
       }
     ]
     }, {
       limit: Session.get('tableLimit2'),
       skip: Session.get('skipCount2')
     });
   },
   rendered: function() {
     // step A:  initialize the table sorting functionality

     Tracker.autorun(function() {
       console.log(Session.get('receivedData2'));
       setTimeout(function() {
         $("#claimantTable").trigger("update");
       }, 200);
     });
   },
   getPaginationCount2: function() {
     return Session.get('paginationCount2');
   },
   paginationButtonList2: function() {
     // array of numbers the length of the paginationCount
     // [0,1,2,3,4,5]
     var paginationArray = [];
     for (var i = 0; i < Session.get('paginationCount2'); i++) {
       paginationArray[i] = {
         index: i
       };
     }
     return paginationArray;
   },
   // helper functions to style buttons correctaly as a person clicks through the UI
   isTwentyActive2: function() {
     if (Session.get('tableLimit2') === 20) {
       return "active";
     }
   },
   isFiftyActive2: function() {
     if (Session.get('tableLimit2') === 50) {
       return "active";
     }
   },
   isHundredActive2: function() {
     if (Session.get('tableLimit2') === 100) {
       return "active";
     }
   },
  filedDate: function (dateFiled) {
      if (dateFiled instanceof Date) {
        return moment(dateFiled).format('lll');
      } else {
        return "Never";
      }
    },
   daysProcessed: function(){
     var days = null;
     var filedDate = this.dateFiled;
     var daysCount = countdown(days,filedDate, countdown.MONTHS | countdown.DAYS, 2).toString();
     //console.log(daysCount);
     return daysCount;
   },
   insuredName: function(enrollmentId) {
      var enrollee = Enrollments.findOne({"_id":enrollmentId});
      if (enrollee){
        return enrollee.fullName;
     }
   },
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

 Template.paginationButton.helpers({
   // helper functions to style buttons correctly as a person clicks through the UI

  pageActive: function() {
    var self = this;
    if (this.index === Session.get('selectedPagination')) {
     return "active";
    }
  },
  getPage: function() {
    var self = this;
   return this.index + 1;
  }
});

Template.paginationButton2.helpers({
   // helper functions to style buttons correctly as a person clicks through the UI
  pageActive2: function() {
    var self = this;
     if (this.index === Session.get('selectedPagination2')) {
       return "active";
     }
   },
   getPage2: function() {
     var self = this;
     return this.index + 1;
   }
 });
