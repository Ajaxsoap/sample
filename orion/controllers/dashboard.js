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
