Router.configure( {
  templateNameConverter: "upperCamelCase",
  routeControllerNameConverter: "upperCamelCase",
  layoutTemplate: 'mainLayout',
  notFoundTemplate: 'notFound'
} );

Router.route( '/', {
  name: 'Dashboard',
  template: 'Dashboard'
} );
