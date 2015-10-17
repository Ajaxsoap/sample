Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound'

});
Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('login');
  } else {
    this.next();
  }
});


Router.route("/", {
  name:"Dashboard",
  template:"dashboard",
  onBeforeAction:function(){
    this.next();
  },
  isReady: function() {
    var subs =  [
      
    ];
		var ready = true;
		_.each(subs, function(sub) {
			if(!sub.ready())
				ready = false;
		});
		return ready;
	},
  data:function(){
    return {
     params: this.params || {}
    //  enrollmentsView: Enrollments.find({},{}),
    //  claimsView: Claim.find({},{})
   };
  },

});

Router.route ('/claimApproval', {
	name: 'claimApproval'});
