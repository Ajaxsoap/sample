Meteor.methods({
  dataEnrolled:function(doc){
    check(doc, DateRangeSchema);
    var start = Enrollments.find("policyDetails.effectivityDate");
    this.unblock();
    DateRangeSchema({
      startDate: start
    });
  }
});

Meteor.methods({
  dataClaimed:function(doc){
    check(doc, DateRangeSchema);
    var start = Claim.find("dateFiled");
    this.unblock();
    DateRangeSchema({
      startDate: start
    });
  }
});
