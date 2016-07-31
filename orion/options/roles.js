//  Custom Roles action
Roles.registerAction( 'showDashboard', true );
Roles.registerAction( 'showHQDashboard' );
Roles.registerAction( 'showHQClaimsUpdate' );
Roles.registerAction( 'showBranchDashboard' );
Roles.registerAction( 'showInsurerDashboard' );
Roles.registerAction( 'AccountProfile', true );


//  Headquarters role
HQ = new Roles.Role( 'HQ' );
HQ.deny( 'showDashboard', true );
HQ.deny( 'showBranchDashboard', true );
HQ.allow( 'showHQDashboard', true );
HQ.allow( 'showHQClaimsUpdate', true );
HQ.allow( 'filesystem.upload', true );


// HQ.deny('AccountProfile', true);
HQ.allow( 'collections.enrollments.index', true );
HQ.allow( 'collections.enrollments.insert', true );
HQ.allow( 'collections.enrollments.update', true );
HQ.allow( 'collections.enrollments.remove', true );
HQ.allow( 'collections.enrollments.showCreate', true );
HQ.allow( 'collections.enrollments.showUpdate', true );
HQ.allow( 'collections.enrollments.showRemove', true );
HQ.helper( 'collections.enrollments.indexFilter', function () {
  var user = Meteor.users.findOne( {
    "_id": this.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var roles = Roles.userHasRole( this.userId, "HQ" );
  if ( roles ) {
    return {
      company: user.profile.company
    };
  } else {
    return "No data Available";
  }
} );

HQ.allow( 'collections.claims.index', true );
HQ.allow( 'collections.claims.insert', true );
HQ.allow( 'collections.claims.update', true );
HQ.allow( 'collections.claims.remove', true );
HQ.allow( 'collections.claims.showCreate', true );
HQ.allow( 'collections.claims.showUpdate', true );
HQ.allow( 'collections.claims.showRemove', true );
HQ.helper( 'collections.claims.indexFilter', function () {
  var user = Meteor.users.findOne( {
    "_id": this.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var roles = Roles.userHasRole( this.userId, "HQ" );
  if ( roles ) {
    return {
      company: user.profile.company
    };
  } else {
    return {
      branch: user.profile.branch
    };
  }
} );

//  branch role
Branch = new Roles.Role( 'Branch' );
Branch.deny( 'showDashboard', true );
Branch.allow( 'showBranchDashboard', true );
Branch.deny( 'showHQDashboard', true );
Branch.allow( 'showHQClaimsUpdate', true );
Branch.allow( 'filesystem.upload', true );

// Branch.deny('AccountProfile', true);
Branch.allow( 'collections.enrollments.index', true );
Branch.allow( 'collections.enrollments.insert', true );
Branch.allow( 'collections.enrollments.update', true );
Branch.allow( 'collections.enrollments.showCreate', true );
Branch.allow( 'collections.enrollments.showUpdate', true );
Branch.allow( 'collections.enrollments.showUpdate', function () {
  return {
    createdBy: this.userId
  };
} );
Branch.helper( 'collections.enrollments.indexFilter', function () {
  return {
    createdBy: this.userId
  };
} );

Branch.allow( 'collections.claims.index', true );
Branch.allow( 'collections.claims.insert', true );
Branch.allow( 'collections.claims.update', true );
Branch.allow( 'collections.claims.showCreate', true );
Branch.allow( 'collections.claims.showUpdate', true );
Branch.helper( 'collections.claims.indexFilter', function () {
  return {
    createdBy: this.userId
  };
} );

// Insurer role
insurer = new Roles.Role( 'insurer' );
insurer.deny( 'showDashboard', true );
insurer.deny( 'showBranchDashboard', true );
insurer.deny( 'showHQDashboard', true );
insurer.allow( 'showInsurerDashboard', true );
insurer.deny( 'showHQClaimsUpdate', true );
insurer.allow( 'filesystem.upload', true );


// insurer.deny('AccountProfile', true);
insurer.allow( 'collections.enrollments.index', true );
insurer.helper( 'collections.enrollments.indexFilter', function () {
  var user = Meteor.users.findOne( {
    "_id": this.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var insurer = user.profile.insurer;
  var roles = Roles.userHasRole( this.userId, 'insurer' );
  if ( roles ) {
    return {
      insurer: insurer[ 0 ]
    };
  } else {
    return "No data available";
  }
} );

insurer.allow( 'collections.claims.index', true );
insurer.allow( 'collections.claims.update', true );
insurer.allow( 'collections.claims.showUpdate', true );
insurer.helper( 'collections.claims.indexFilter', function () {
  var user = Meteor.users.findOne( {
    "_id": this.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var profile = user.profile.products;
  var roles = Roles.userHasRole( this.userId, 'insurer' );
  if ( roles ) {
    return {
      products: profile[ 0 ]
    };
  } else {
    return "No data available";
  }
} );
