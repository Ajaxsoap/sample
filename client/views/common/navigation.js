Template.navigation.onRendered( function () {
  // Initialize metisMenu
  $( '#side-menu' ).metisMenu();
  Tracker.autorun( function () {
    orion.links.add( {
      index: 0,
      identifier: 'pais-dashboard',
      title: 'Dashboard',
      routeName: 'Dashboard',
      activeRouteRegex: 'Dashboard'
    } );
    // remove the collection from the sidebar
    orion.links.add( {
      index: "",
      identifier: 'collections-TotalClaims',
      title: "TotalClaims"
    } );
    orion.links.add( {
      index: "",
      identifier: 'collections-TotalPremium',
      title: "Total Premium"
    } );
    orion.links.add( {
      index: "",
      identifier: 'collections-TotalPrincipalPremium',
      title: "TotalPrincipalPremium"
    } );
    orion.links.add( {
      index: "",
      identifier: 'collections-TotalTotalPrincipalPremium',
      title: "TotalTotalPrincipalPremium"
    } );
    orion.links.add( {
      index: "",
      identifier: 'collections-TotalChildrenPremium',
      title: "Total Children Premium"
    } );
    orion.links.add( {
      index: "",
      identifier: 'collections-TotalSpousePremium',
      title: "Total Spouse Premium"
    } );
    orion.links.add( {
      index: "",
      identifier: 'collections-TotalSiblingsPremium',
      title: "Total Siblings Premium"
    } );
    orion.links.add( {
      index: "",
      identifier: 'collections-TotalParentsPremium',
      title: "Total Parents Premium"
    } );
    orion.links.add( {
      index: "",
      identifier: 'collections-TotalEnrollments',
      title: "Total Enrollments"
    } );
    orion.links.add( {
      index: "",
      identifier: 'collections-TotalEnrollmentProducts',
      title: "Total Enrollment Products"
    } );
    orion.links.add( {
      index: "",
      identifier: 'collections-EnrollmentProducts',
      title: "Enrollment Products"
    } );
    orion.links.add( {
      index: "",
      identifier: 'collections-LossRatioTotal',
      title: "Loss Ratio Total"
    } );
    orion.links.add( {
      index: "",
      identifier: 'collections-LossRatio',
      title: "Loss Ratio"
    } );
    orion.links.add( {
      index: "",
      identifier: 'collections-BranchClaimCount',
      title: "BranchClaimCount"
    } );
    orion.links.add( {
      index: "",
      identifier: 'collections-BranchEnrollmentCount',
      title: "BranchEnrollementCount"
    } );
    orion.links.add( {
      index: "",
      identifier: 'collections-TotalPremium',
      title: "TotalPremium"
    } );
    orion.links.add( {
      index: "",
      identifier: 'collections-MedicalClaimCount',
      title: "Medical Claim Count"
    } );
    orion.links.add( {
      index: "",
      identifier: 'collections-DeathClaimCount',
      title: "Death Claim Count"
    } );
    orion.links._collection.update( {
      index: 6,
      identifier: 'collections-Meteor.users',
      title: "Users"
    } );
  } );

  orion.links._collection.update( {
    identifier: 'collections-companies'
  }, {
    $set: {
      index: 1
    }
  } );
  orion.links._collection.update( {
    identifier: 'collections-branches'
  }, {
    $set: {
      index: 2
    }
  } );
  orion.links._collection.update( {
    identifier: 'collections-products'
  }, {
    $set: {
      index: 3
    }
  } );
  orion.links._collection.update( {
    identifier: 'collections-enrollments'
  }, {
    $set: {
      index: 4
    }
  } );
  orion.links._collection.update( {
    identifier: 'collections-claims'
  }, {
    $set: {
      index: 5
    }
  } );
  orion.links._collection.update( {
    identifier: 'collections-Meteor.users'
  }, {
    $set: {
      title: "Users",
      index: 6
    }
  } );
} );

Template.navigation.events( {
  'click .logout': function () {
    Meteor.logout();
  },
  // Used only on OffCanvas layout
  // 'click .close-canvas-menu': function () {
  //   $( 'body' ).toggleClass( "mini-navbar" );
  // }
} );
