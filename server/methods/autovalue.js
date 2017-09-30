Meteor.methods({
	companyValue: function(string) {
  	var userProfile = Meteor.users.findOne({
  		"_id": this.userId
  	}, {
  		fields: {
            "profile": 1
          }
  	});
  	if ( userProfile ) {
  		return userProfile && userProfile.profile.company;
  	}
  },
  branchValue: function(string) {
  	var userProfile = Meteor.users.findOne({
  		"_id": this.userId
  	}, {
  		fields: {
            "profile": 1
          }
  	});
  	if ( userProfile ) {
  		return userProfile && userProfile.profile.branch;
  	}
  },
  insurerValue: function(string) {
  	var userProfile = Meteor.users.findOne({
  		"_id": this.userId
  	}, {
  		fields: {
            "profile": 1
          }
  	});
  	if ( userProfile ) {
  		return userProfile && userProfile.profile.insurer;
  	}
  },
});
