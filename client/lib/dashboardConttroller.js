// DashboardController = RouteController.extend( {
// 	layoutTemplate: "mainLayout",
// 	template: "Dashboard",
// 	yieldTemplates: {
// 		/*YIELD_TEMPLATES*/
// 	},
//
// 	onBeforeAction: function () {
// 		if ( !Meteor.userId() ) {
// 			this.render( 'paisLogin' );
// 		} else {
// 			this.next();
// 		}
// 	},
//
// 	action: function () {
// 		if ( this.isReady() ) {
// 			this.render();
// 		} else {
// 			this.render( "loader" );
// 		}
// 		/*ACTION_FUNCTION*/
// 	},
// 	isReady: function () {
// 		var subs = [
// 			Meteor.subscribe( "enrollments", function () {
// 				// console.log('Enrollments count: ', Counts.get('enrollmentsCount'));
// 			} ),
// 			Meteor.subscribe( "claims", function () {
// 				// console.log("Claims count: ", Counts.get("claimsCount"));
// 			} ),
//
// 			Meteor.subscribe( "companies" ),
// 			Meteor.subscribe( "branches" ),
// 			Meteor.subscribe( "products" ),
// 			Meteor.subscribe( "userProfile" )
// 		];
// 		var ready = true;
// 		_.each( subs, function ( sub ) {
// 			if ( !sub.ready() )
// 				ready = false;
// 		} );
// 		return ready;
//
// 	},
// 	// fastRender: true,
// 	data: function () {
// 		return {
// 			params: this.params || {}
// 		};
// 		/*DATA_FUNCTION*/
// 	},
//
// 	onAfterAction: function () {
//
// 	}
// } );
