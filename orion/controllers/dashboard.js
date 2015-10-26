this.DashboardController = RouteController.extend({
		layoutTemplate: "mainLayout",

	yieldTemplates: {
		/*YIELD_TEMPLATES*/
	},

	onBeforeAction: function(){
    if (!Meteor.userId()){
      this.render("login");
    } else {
      this.next();
    }
	},
	action: function() {
	if(this.isReady()) { this.render(); } else { this.render(""); }
	/*ACTION_FUNCTION*/
	},
	isReady: function() {

      var subs = [
				Meteor.subscribe("enrollments",function () {
					console.log('enrollments count: ', Counts.get('enrollmentsCount'));
				}),
				Meteor.subscribe("claims", function(){
					console.log("Claims count: ", Counts.get("claimsCount"));
				}),
				Meteor.subscribe("companies", function() {
					console.log("Branches count: ", Counts.get("branchCount"));
				}),
				Meteor.subscribe("branches"),
				Meteor.subscribe("userProfile")
		];
		var ready = true;
		_.each(subs, function(sub) {
			if(!sub.ready())
				ready = false;
		});
		return ready;
	},
	data: function() {
		return {
			params: this.params || {}
		};
		/*DATA_FUNCTION*/
	},

	onAfterAction: function() {
		// Meta.setTitle('Dashboard');
	}
});
