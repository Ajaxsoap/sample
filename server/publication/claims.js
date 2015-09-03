Meteor.publish("claims", function() {
	return Claim.find();
});

// 	check(claimsPubCurrent, Boolean);
//
//   var userId = this.userId(),
// 		data = [
// 			Claimm.find({"owner": userId})
// 		];
// 		if (data) {
// 			return data;
// 		}
//   return this.ready();
// });

// Meteor.publish("claims", function() {
//
//     var cursor = Claim.find(); // do what you normally do here
//
//     return Claim.publishJoinedCursors(cursor); // instead of simply returning resulting cursor
// });
