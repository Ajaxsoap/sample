Meteor.publish("enrollments", function() {
	return Enrollments.find();
});

// Meteor.publish('tabular_enrollments', function (tableName, ids, fields) {
//     check(tableName, String);
//     check(ids, [String]);
//     check(fields, Match.Optional(Object));
//     console.log('Publish Tabular table');
//     return Enrollments.find({_id: {$in: ids}}, {fields: fields});
// });
// 	check(enrollmentsPubCurrent, Boolean);
//
//   var userId = this.userId(),
// 		data = [
// 			Enrollments.find({"owner": userId})
// 		];
// 		if (data) {
// 			return data;
// 		}
//   return this.ready();
// });
