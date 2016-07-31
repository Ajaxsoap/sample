// Meteor.methods( {
//   branchEnrolleeCounts: function () {
//     var user = Meteor.users.findOne( {
//       "_id": this.userId
//     }, {
//       fields: {
//         profile: 1
//       }
//     } );
//     var dateEnrolled = Enrollments.find( {}, {
//       fields: {
//         createdAt: 1
//       }
//     } );
//     var pipeline = [ {
//       $project: {
//         branch: 1,
//         company: 1,
//         createdAt: {
//           $month: "$createdAt"
//         }
//       }
//     }, {
//       $match: {
//         company: user.profile.company
//       }
//     }, {
//       $group: {
//         _id: "$branch",
//         count: {
//           $sum: 1
//         }
//       }
//     } ];
//     var result = Enrollments.aggregate( pipeline );
//     console.log( "Aggregated from branch enrollees:", JSON.stringify(
//       result ) );
//     return result;
//   },
//   branchClaimsCounts: function () {
//     var user = Meteor.users.findOne( {
//       "_id": this.userId
//     }, {
//       fields: {
//         profile: 1
//       }
//     } );
//     var pipeline = [ {
//       $project: {
//         branch: 1,
//         company: 1
//       }
//     }, {
//       $match: {
//         company: user.profile.company
//       }
//     }, {
//       $group: {
//         _id: "$branch",
//         count: {
//           $sum: 1
//         }
//       }
//     } ];
//     var result = Claim.aggregate( pipeline );
//     // console.log("Explain Report:", JSON.stringify(result));
//     return result;
//   },
//
//   deathClaims: function () {
//     var pipeline = [ {
//       $project: {
//         dateFiled: 1,
//         causeOfDeath: 1,
//       }
//     }, {
//       $group: {
//         _id: {
//           dateFiled: "$fileDate",
//           life: "$causeOfDeath",
//         },
//         count: {
//           $sum: 1
//         }
//       }
//     } ];
//     var result = Claim.aggregate( pipeline );
//     console.log( "Death Claims:", JSON.stringify( result ) );
//     return result;
//   },
//
//   medicalClaims: function () {
//     var pipeline = [ {
//       $project: {
//         dateFiled: 1,
//         medical: 1
//       }
//     }, {
//       $group: {
//         _id: {
//           dateFiled: "$fileDate",
//           nonLife: "$medical"
//         },
//         count: {
//           $sum: 1
//         }
//       }
//     } ];
//     var result = Claim.aggregate( pipeline );
//     console.log( "Medical Claims:", JSON.stringify( result ) );
//     return result;
//   }
// } );
