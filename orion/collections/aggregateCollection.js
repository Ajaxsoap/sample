TotalEnrollments = new orion.collection( "TotalEnrollments", {
  singularName: 'Total Enrollment',
  pluralName: 'Total Enrollments',
  link: {
    title: 'Total Enrollments'
  },
  tabular: {
    columns: [ {

    } ]
  }
} );

TotalClaims = new orion.collection( "TotalClaims", {
  singularName: 'Total Claim',
  pluralName: 'Total Claims',
  link: {
    title: 'Total Claims'
  },
  tabular: {
    columns: [ {} ]
  }
} );

LossRatioTotal = new orion.collection( "LossRatioTotal", {
  singularName: 'LossRatio',
  pluralName: 'LossRatios',
  link: {
    title: 'LossRatioTotal'
  },
  tabular: {
    columns: [ {

    } ]
  }
} );

EnrollmentProducts = new orion.collection( "EnrollmentProducts", {
  singularName: 'Enrollment Product',
  pluralName: 'Enrollment Products',
  link: {
    title: 'Enrollment Products'
  },
  tabular: {
    columns: [ {

    } ]
  }
} );

TotalEnrollmentProducts = new orion.collection( "TotalEnrollmentProducts", {
  singularName: 'Total Enrollment Product',
  pluralName: 'Total Enrollment Products',
  link: {
    title: 'TotalEnrollmentProducts'
  },
  tabular: {
    columns: [ {

    } ]
  }
} );

EnrollmentProducts.attachSchema( new SimpleSchema( {
  _id: {
    type: String,
    autoValue: function () {
      return _.filter( Boolean );
    }
  }
} ) );

LossRatio = new orion.collection( "LossRatio", {
  singularName: 'LossRatio',
  pluralName: 'LossRatios',
  sslink: {
    title: 'LossRatio'
  },
  tabular: {
    columns: [ {

    } ]
  }
} );

TotalPremium = new orion.collection( "TotalPremium", {
  singularName: 'TotalPremium',
  pluralName: 'TotalPremium',
  sslink: {
    title: 'TotalPremium'
  },
  tabular: {
    columns: [ {

    } ]
  }
} );

TotalPrincipalPremium = new orion.collection( "TotalPrincipalPremium", {
  singularName: 'TotalPrincipalPremium',
  pluralName: 'TotalPrincipalPremium',
  sslink: {
    title: 'TotalPrincipalPremium'
  },
  tabular: {
    columns: [ {

    } ]
  }
} );

TotalTotalPrincipalPremium = new orion.collection( "TotalTotalPrincipalPremium", {
  singularName: 'TotalTotalPrincipalPremium',
  pluralName: 'TotalTotalPrincipalPremium',
  sslink: {
    title: 'TotalTotalPrincipalPremium'
  },
  tabular: {
    columns: [ {

    } ]
  }
} );

TotalChildrenPremium = new orion.collection( "TotalChildrenPremium", {
  singularName: 'TotalChildrenPremium',
  pluralName: 'TotalChildrenPremium',
  sslink: {
    title: 'TotalChildrenPremium'
  },
  tabular: {
    columns: [ {

    } ]
  }
} );

TotalSpousePremium = new orion.collection( "TotalSpousePremium", {
  singularName: 'TotalSpousePremium',
  pluralName: 'TotalSpousePremium',
  sslink: {
    title: 'TotalSpousePremium'
  },
  tabular: {
    columns: [ {

    } ]
  }
} );

TotalSiblingsPremium = new orion.collection( "TotalSiblingsPremium", {
  singularName: 'TotalSiblingsPremium',
  pluralName: 'TotalSiblingsPremium',
  sslink: {
    title: 'TotalSiblingsPremium'
  },
  tabular: {
    columns: [ {

    } ]
  }
} );

TotalParentsPremium = new orion.collection( "TotalParentsPremium", {
  singularName: 'TotalParentsPremium',
  pluralName: 'TotalParentsPremium',
  sslink: {
    title: 'TotalParentsPremium'
  },
  tabular: {
    columns: [ {

    } ]
  }
} );

MedicalClaimCount = new orion.collection( "MedicalClaimCount", {
  singularName: 'Medical Claim Count',
  pluralName: 'Medical Claim Count',
  sslink: {
    title: 'Medical Claim Count'
  },
  tabular: {
    columns: [ {

    } ]
  }
} );

DeathClaimCount = new orion.collection( "DeathClaimCount", {
  singularName: 'Death Claim Count',
  pluralName: 'Death Claim Count',
  sslink: {
    title: 'Death Claim Count'
  },
  tabular: {
    columns: [ {

    } ]
  }
} );

BranchClaimCount = new orion.collection( "BranchClaimCount", {
  singularName: 'Branch Claim Count',
  pluralName: 'Branch Claim Count',
  sslink: {
    title: 'Branch Claim Count'
  },
  tabular: {
    columns: [ {

    } ]
  }
} );

BranchEnrollmentCount = new orion.collection( "BranchEnrollmentCount", {
  singularName: 'Branch Enrollment Count',
  pluralName: 'Branch Enrollment Count',
  sslink: {
    title: 'Branch Enrollment Count'
  },
  tabular: {
    columns: [ {

    } ]
  }
} );
