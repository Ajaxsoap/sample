// this.EnrollmentsController = RouteController.extend({
// 	template: "enrollmentsIndex",
//
//
// 	yieldTemplates: {
// 		/*YIELD_TEMPLATES*/
// 	},
//
// 	onBeforeAction: function() {
// 		/*BEFORE_FUNCTION*/
// 		this.next();
// 	},
//
// 	action: function() {
// 		if(this.isReady()) { this.render(); } else { this.render(""); }
// 		/*ACTION_FUNCTION*/
// 	},
//
// 	isReady: function() {
//
// 		var subs = [
// 			Meteor.subscribe("enrollments")
// 		];
// 		var ready = true;
// 		_.each(subs, function(sub) {
// 			if(!sub.ready())
// 				ready = false;
// 		});
// 		return ready;
// 	},
//
// 	data: function() {
//
// 		return {
// 			params: this.params || {},
// 			enrollments: Enrollments.find({}, {})
// 		};
// 		/*DATA_FUNCTION*/
// 	},
//
// 	onAfterAction: function() {
// 		Meta.setTitle('Enrollments');
// 	}
// });
