Meteor.publish("users", function(){
  return Meteor.users.find();
});

// Meteor.publishComposite("tabular_EnrollmentsCompany", function (tableName, ids, fields) {
//   check(tableName, String);
//   check(ids, Array);
//   check(fields, Match.Optional(Object));
//
//   this.unblock(); // requires meteorhacks:unblock package
//
//   return {
//     find: function () {
//       this.unblock(); // requires meteorhacks:unblock package
//       return Enrollments.find({_id: {$in: id}}, {fields: [companyId, branchId]});
//     },
//     children: [
//       {
//         find: function(companyId) {
//           this.unblock(); // requires meteorhacks:unblock package
//           // Publish the related user
//           return Meteor.users.find({_id: companyId.userId}, {limit: 2, fields: [company,branch]});
//         }
//       }
//     ]
//   };
// });
