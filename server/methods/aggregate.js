Meteor.methods({
  branchEnrolleeCounts:function(){
    var user = Meteor.users.findOne({"_id": this.userId}, {fields: { profile: 1 }});
    var pipeline = [
      {
        $project: { branch: 1, company: 1}
      },
      {
        $match: { company: user.profile.company}
      },
      {
        $group: {
          _id:  "$branch", count: { $sum: 1 }
        }
      }
    ];
    var result = Enrollments.aggregate(pipeline);
    // console.log("Explain Report:", JSON.stringify(result));
    return result;
  },
  branchClaimsCounts:function(){
    var user = Meteor.users.findOne({"_id": this.userId}, {fields: { profile: 1 }});
    var pipeline = [
      {
        $project: { branch: 1, company: 1}
      },
      {
        $match: { company: user.profile.company }
      },
      {
        $group: {
          _id:  "$branch", count: { $sum: 1 }
        }
      }
    ];
    var result = Claim.aggregate(pipeline);
    console.log("Explain Report:", JSON.stringify(result));
    return result;
  },
  casesCount:function() {
    var pipeline = [
      {
        $project: { causeOfDeath: 1, medical: 1, dateFiled: 1}
      },
      {
        $group: {
            _id: { life: "$causeOfDeath", nonLife: "$medical"}, count: { $sum: 1 }
          }
      }
    ];
    var result = Claim.aggregate(pipeline);
    console.log("Explain Report:", JSON.stringify(result));
    return result;
  }
});
