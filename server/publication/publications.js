var getQuery = function(user) {
  var userProfile  = Meteor.users.findOne({"_id": user._id}, {fields:{profile: 1}});
  if ( Roles.userHasRole( user._id, 'admin' ) ) {
    return {};
  }  else if ( Roles.userHasRole( user._id, 'HQ' ) ) {
    return { company: userProfile.profile.company };
  } else if ( Roles.userHasRole( user._id, 'Branch' ) ) {
    return { createdBy: user._id };
  } else if ( Roles.userHasRole( user._id, 'insurer' ) ) {
    return { insurer: userProfile.profile.insurer[0] };
  } else
    throw new Error('getQuery:  unknown role for user (' + user._id + ')');
  };

Meteor.publish("enrollments", function (limit) {
  var user  = Meteor.users.findOne({"_id": this.userId}, {fields:{profile: 1}});
  var query = getQuery(user);
  Counts.publish(this, 'enrollmentsCount', Enrollments.find(query), {noReady: true});
  this.ready();
  if (limit) {
    return Enrollments.find(query);
  } else {
    return Enrollments.find(query, {limit: limit}) ;
  }
});

Meteor.publish("claims", function (limit) {
  var user  = Meteor.users.findOne({"_id": this.userId}, {fields:{profile: 1}});
  var query = getQuery(user);

  Counts.publish(this, 'claimsCount', Claim.find(query), {noReady: true});
  if (limit) {
    return Claim.find(query);
  } else {
    return Claim.find(query, {limit: limit}) ;
  }
});

Meteor.publish('userProfile', function(userId) {
  return Meteor.users.find({ "_id": this.userId }, { fields: { "profile": 1 } });
});

Meteor.publish("versions", function(){
	return enrolleeVersion.find();
});

Meteor.publish("companies", function(){
  return Companies.find();
});

Meteor.publish("branches", function(){
	return Branches.find();
});
