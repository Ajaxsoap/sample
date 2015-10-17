function getQuery(user) {
    if (Roles.userHasRole(user._id, "admin"))
        return {};
    else if (Roles.userHasRole(user._id, "HQ"))
        return {company: user.profile.company};
    else if (Roles.userHasRole(user._id, "Branch"))
        return {branch: user.profile.branch};
    else
        throw new Error('getQuery:  unknown role for user (' + user._id + ')');
}

Meteor.publish("enrollments", function (limit) {
    var user  = Meteor.users.findOne({"_id": this.userId}, {fields:{profile: 1}});
    var query = getQuery(user);

    Counts.publish(this, 'enrollmentsCount', Enrollments.find(query), {noReady: true});
    if (limit) {
        return Enrollments.find(query);
    } else {
        return Enrollments.find(query, {limit: limit}) ;
    }
});

Meteor.publish("claim", function (limit) {
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
	return Companies.find({},{name: 1, branchId: 1});
});

Meteor.publish("branches", function(){
	return Branches.find();
});
