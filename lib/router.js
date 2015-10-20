Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound'

});

Router.route("/", {
  name: "Dashboard",
  template: "dashboard",
  controller: "DashboardController"
});

Router.route ('/claimApproval', {
	name: 'claimApproval'});
