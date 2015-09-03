// this.DashboardController = RouteController.extend({
// 	template: "Dashboard",
//
//
// 	yieldTemplates: {
// 		/*YIELD_TEMPLATES*/
// 	},
//
// 	onBeforeAction: function() {
// 		/*BEFORE_sFUNCTION*/
// 		this.next();
// 	},
// 	action: function() {
// 	if(this.isReady()) { this.render(); } else { this.render(""); }
// 	/*ACTION_FUNCTION*/
// 	},
// 	isReady: function() {
// 		var subs = [ Meteor.subscribe("claims"),Meteor.subscribe("enrollments")];
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
// 			params: this.params || {}
// 		};
// 		/*DATA_FUNCTION*/
// 	},
//
// 	onAfterAction: function() {
// 		Meta.setTitle('Dashboard');
// 	}
// });
