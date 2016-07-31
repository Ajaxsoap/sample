Session.setDefault( 'branchEnrolleeCount', '' );

Template.companyEnrolleesDashboard.events( {
  'select option': function () {
    event.preventDefault();
    Session.set( 'branchEnrolleeCount', event.target.value );
  }
} );

Template.companyEnrolleesDashboard.helpers( {
  active: function () {
    return Session.get( 'branchEnrolleeCount' );
  }
} );
