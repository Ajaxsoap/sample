// Meteor.methods({
//   dataEnrolled:function(doc){
//     check(doc, DateRangeSchema);
//     var start = Enrollments.findOne({},{"effectivityDate": 1});
//     console.log(start);
//     this.unblock();
//     DateRangeSchema({
//       startDate: start
//     });
//   }
// });
//
// Meteor.methods({
//   dataClaimed:function(doc){
//     check(doc, DateRangeSchema);
//     var start = Claim.find("dateFiled": 1);
//     this.unblock();
//     DateRangeSchema({
//       startDate: start
//     });
//   }
// });
