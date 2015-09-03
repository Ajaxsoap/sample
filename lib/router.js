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
//
// Example pages routes
//

// Router.route('/admin/enrollments', {
//   name: ('enrollmentsIndex')
// });
//
// Router.route('/claims', {
//     name:'claims'
// });
//
RouterLayer.route ('/', {template:'dashboard', name:'Dashboard'});
// RouterLayer.route ('collections.enrollments.create', {template:'enrollmentsCreate', name:'EnrollmentsCreate'});

Router.route ('/claimApproval', {
	name: 'claimApproval'});

//
// Router.route('/', function () {
//     Router.go('dashboard');
// });
