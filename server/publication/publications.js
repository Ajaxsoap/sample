var getQuery = function ( user ) {
  var userProfile = Meteor.users.findOne( {
    "_id": user._id
  }, {
    fields: {
      "profile": 1
    }
  } );
  var products = userProfile.profile.products;
  if ( Roles.userHasRole( user._id, 'admin' ) ) {
    return {};
  } else if ( Roles.userHasRole( user._id, 'HQ' ) ) {
    return {
      company: userProfile.profile.company
    };
  } else if ( Roles.userHasRole( user._id, 'Branch' ) ) {
    return {
      createdBy: user._id
    };
  } else if ( Roles.userHasRole( user._id, 'insurer' ) ) {
    return {
      insurer: userProfile.profile.insurer[ 0 ]
    };
  } else
    throw new Error( 'getQuery:  unknown role for user (' + user._id + ')' );
};

Meteor.publish( "userStatus", function () {
  return Meteor.users.find( {
    "status.online": true
  }, {
    fields: {
      _id: 1
    }
  } );
} );

Meteor.publish( "KMBIEnrollment", function () {
  return Enrollments.find( {
    company: "bQzkwdh2nHxkneAHs"
  });
} );

Meteor.publish( "KMBIEnrollmentPremiums", function () {
  return Enrollments.find({
    company: "bQzkwdh2nHxkneAHs"
  },{
    fields: {
      dateEnrolled: 1,
      totalPremium: 1,
      insuredName: 1,
      productOffering: 1,
      insuredName1: 1,
      productOffering1: 1,
      computedPremium: 1,
      insuredName2: 1,
      productOffering2: 1,
      computedPremium2: 1,
      insuredName3: 1,
      productOffering3: 1,
      computedPremium3: 1,
      insuredName4: 1,
      productOffering4: 1,
      computedPremium4: 1,
      insuredName5: 1,
      productOffering5: 1,
      computedPremium5: 1,
      insuredName6: 1,
      productOffering6: 1,
      computedPremium6: 1,
      insuredName7: 1,
      productOffering7: 1,
      computedPremium7: 1,
      insuredName8: 1,
      productOffering8: 1,
      computedPremium8: 1,
      insuredName9: 1,
      productOffering9: 1,
      computedPremium9: 1
       
    }
  });
} );

Meteor.publish( "getProducts", function () {
  return Products.find();
} );

// Meteor.publish( "getCompanies", function () {
//   return Companies.find();
// } );

Meteor.publish( "enrollments", function ( limit ) {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var query = getQuery( user );
  Counts.publish( self, 'enrollmentsCount', Enrollments.find( query ), {
    noReady: true
  } );
  initializing = false;
  if ( limit ) {
    return this.ready();
  } else {
    return Enrollments.find( query, {
      fields: {
        _id: 1,
        dateEnrolled: 1,
        createdAt: 1,
        centerNumber: 1,
        fullName: 1,
        birthDate: 1,
        ageOfEnrollee: 1,
        maritalStatus: 1,
        gender: 1,
        maturityDate: 1,
        company: 1,
        branch: 1,
        totalPremium: 1,
        productRange: 1,
        productOffering: 1,
        productOffering1: 1,
        productOffering2: 1,
        productOffering3: 1,
        productOffering4: 1,
        productOffering5: 1,
        productOffering6: 1,
        productOffering7: 1,
        productOffering8: 1,
        productOffering9: 1,
        productName: 1,
        productsAvailed: 1,
        productsAvailed1: 1,
        productsAvailed2: 1,
        productsAvailed3: 1,
        productsAvailed4: 1,
        productsAvailed5: 1,
        productsAvailed6: 1,
        productsAvailed7: 1,
        productsAvailed8: 1,
        productsAvailed9: 1,
        spouseName: 1,
        spouseBirthdate: 1,
        spouseAge: 1,
        spouseMaritalStatus: 1,
        spouseGender: 1,
        childrenName: 1,
        childrenBirthdate: 1,
        childrenAge: 1,
        childrenMaritalStatus: 1,
        childrenGender: 1,
        children2Name: 1,
        children3Name: 1,
        children4Name: 1,
        children5Name: 1,
        children6Name: 1,
        children7Name: 1,
        children8Name: 1,
        children9Name: 1,
        children10Name: 1,
        parentName: 1,
        parent2Name: 1,
        siblingName: 1,
        sibling2Name: 1,
        sibling3Name: 1,
        sibling4Name: 1,
        sibling5Name: 1,
        sibling6Name: 1,
        sibling7Name: 1,
        sibling8Name: 1,
        sibling9Name: 1,
        sibling10Name: 1,
        effectivityDate: 1,
        effectivityDate1: 1,
        effectivityDate2: 1,
        effectivityDate3: 1,
        effectivityDate4: 1,
        effectivityDate5: 1,
        effectivityDate6: 1,
        effectivityDate7: 1,
        effectivityDate8: 1,
        effectivityDate9: 1
      }
    } );
  }
} );

Meteor.publish( "claims", function ( limit ) {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var query = getQuery( user );
  Counts.publish( self, 'claimsCount', Claim.find( query ), {
    noReady: true
  } );
  initializing = false;
  var insurer = user.profile.insurer;
  var insurerRole = Roles.userHasRole( self.userId, 'insurer' );
  if ( limit ) {
    return Claim.find( query, {
      sort: {
        'dateFiled': 1
      },
      fields: {
        dateFiled: 1,
        claimNumber: 1,
        enrollmentId: 1,
        status: 1,
        clientType: 1,
        children: 1,
        parentName: 1,
        spouseName: 1,
        siblingName: 1,
        amountPaid: 1,
        partialPayment: 1,
        causeOfDeath: 1,
        medical: 1
      }
    } );
  } else {
    return Claim.find( query, {
      sort: {
        'dateFiled': 1
      },
      fields: {
        dateFiled: 1,
        claimNumber: 1,
        enrollmentId: 1,
        status: 1,
        clientType: 1,
        children: 1,
        parentName: 1,
        spouseName: 1,
        siblingName: 1,
        amountPaid: 1,
        partialPayment: 1,
        causeOfDeath: 1,
        medical: 1
      }
    } );
  }
} );

Meteor.publish( 'userProfile', function ( userId ) {
  return Meteor.users.find( {
    "_id": this.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
} );

Meteor.publish( "companies", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var userCompany = user.profile.company;
  var admin = Roles.userHasRole( self.userId, 'admin' );
  var insurer = Roles.userHasRole( self.userId, 'insurer' );
  if ( admin ) {
    return Companies.find();
  } else if ( insurer ) {
    return Companies.find();
  } else {
    return Companies.find( userCompany );
  }
} );

Meteor.publish( "branches", function () {
  var user = Meteor.users.findOne( {
    "_id": this.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var userBranch = user.profile.branch;
  var userCompany = user.profile.company;
  var admin = Roles.userHasRole( this.userId, 'admin' );
  var hq = Roles.userHasRole( this.userId, 'HQ' );
  var insurer = Roles.userHasRole( this.userId, 'insurer' );
  if ( hq ) {
    return Branches.find();
  } else if ( admin ) {
    return Branches.find();
  } else if ( insurer ) {
    return Branches.find();
  } else {
    return Branches.find( userBranch );
  }

} );

Meteor.publish( "products", function ( limit ) {
  var user = Meteor.users.findOne( {
    "_id": this.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var query = user.profile.products;
  var admin = Roles.userHasRole( this.userId, 'admin' );
  if ( admin ) {
    return Products.find();
  } else if ( limit ) {
    return Products.find( {
      _id: {
        $in: query
      }
    }, {
      fields: {
        "name": 1,
        "productOffering": 1,
        "productRange": 1,
        "premium": 1
      }
    } );
  } else {
    return Products.find( {
      _id: {
        $in: query
      }
    }, {
      fields: {
        "name": 1,
        "productOffering": 1,
        "productRange": 1,
        "premium": 1
      }
    }, {
      limit: 5
    } );
  }
} );

// Aggregate publication

Meteor.publish( "totalEnrollments", function () {
  ReactiveAggregate( this, Enrollments, [ {
    $group: {
      '_id': 'createdAt',
      count: {
        $sum: 1
      }
    }
  } ], {
    clientCollection: "TotalEnrollments"
  } );
} );

Meteor.publish( "totalClaims", function () {
  ReactiveAggregate( this, Claim, [ {
    $group: {
      '_id': 'dateFiled',
      count: {
        $sum: 1
      }
    }
  } ], {
    clientCollection: "TotalClaims"
  } );
} );

Meteor.publish( "totalProductsAvailed", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
    }
  }, {
    $unwind: "$products"
  }, {
    $group: {
      '_id': "$products",
      'totalPremium': {
        $sum: '$totalPremium'
      }
    }
  }, {
    $project: {
      totalPremium: '$totalPremium'
    }
  } ], {
    clientCollection: "EnrollmentProducts"
  } );
} );

Meteor.publish( "productClaim", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Claim, [ {
    $match: {
      'company': company,
      $or: [ {
        'status': "ApprovedRB"
      }, {
        'status': "Approved"
      } ]
    }
  }, {
    $group: {
      '_id': '$products',
      'amountPaid': {
        $sum: '$amountPaid'
      }
    }
  }, {
    $project: {
      amountPaid: '$amountPaid'
    }
  } ], {
    clientCollection: "EnrollmentProducts"
  } );
} );

// Meteor.publish( "lossRatio", function () {
//   ReactiveAggregate( this, EnrollmentProducts, [ {
//     $group: {
//       '_id': "$products"
//     },
//     'amountPaid': {
//       $sum: '$amountPaid'
//     },
//     'premium': {
//       $sum: '$premium'
//     },
//   }, {
//     $project: {
//       amountPaid: '$amountPaid',
//       premium: '$premium',
//       retained: {
//         $multiply: [ {
//           $divide: [ '$totalPremium', '$amountPaid' ],
//         }, 100 ]
//       }
//
//     },
//   } ], {
//     clientCollection: "EnrollmentProducts"
//   } );
// } );

Meteor.publish( "BranchEnrollmentCount", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  var branch = user.profile.branch;
  var insurer = user.profile.insurer;
  var branchRole = Roles.userHasRole( user._id, 'Branch' );
  var HQRole = Roles.userHasRole( user._id, 'HQ' );
  var insurerRole = Roles.userHasRole( user._id, 'insurer' );
  if ( branchRole ) {
    ReactiveAggregate( this, Enrollments, [ {
      $match: {
        'createdBy': this.userId
      }
    }, {
      $group: {
        '_id': "$branch",
        count: {
          $sum: 1
        }
      }
    } ], {
      clientCollection: "BranchEnrollmentCount"
    } );
  } else if ( HQRole ) {
    ReactiveAggregate( this, Enrollments, [ {
      $match: {
        'company': company
      }
    }, {
      $group: {
        '_id': "$branch",
        count: {
          $sum: 1
        }
      }
    } ], {
      clientCollection: "BranchEnrollmentCount"
    } );
  } else if ( insurerRole ) {
    ReactiveAggregate( this, Enrollments, [ {
      $match: {
        'insurer': {
          $in: insurer
        }
      }
    }, {
      $group: {
        '_id': "$branch",
        count: {
          $sum: 1
        }
      }
    } ], {
      clientCollection: "BranchEnrollmentCount"
    } );
  }

} );

Meteor.publish( "BranchClaimCount", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  var branch = user.profile.branch;
  var insurer = user.profile.insurer;
  var branchRole = Roles.userHasRole( user._id, 'Branch' );
  var HQRole = Roles.userHasRole( user._id, 'HQ' );
  var insurerRole = Roles.userHasRole( user._id, 'insurer' );
  if ( branchRole ) {
    ReactiveAggregate( this, Claim, [ {
      $match: {
        'createdBy': this.userId
      }
    }, {
      $group: {
        '_id': "$branch",
        total: {
          $sum: 1
        }
      }
    } ], {
      clientCollection: "BranchClaimCount"
    } );
  } else if ( HQRole ) {
    ReactiveAggregate( this, Claim, [ {
      $match: {
        'company': company
      }
    }, {
      $group: {
        '_id': "$branch",
        total: {
          $sum: 1
        }
      }
    } ], {
      clientCollection: "BranchClaimCount"
    } );
  } else if ( insurerRole ) {
    ReactiveAggregate( this, Claim, [ {
      $match: {
        'insurer': {
          $in: insurer
        }
      }
    }, {
      $group: {
        '_id': "$branch",
        total: {
          $sum: 1
        }
      }
    } ], {
      clientCollection: "BranchClaimCount"
    } );
  }

} );

Meteor.publish( "BranchClaimApprovedCount", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  var branch = user.profile.branch;
  var insurer = user.profile.insurer;
  var branchRole = Roles.userHasRole( user._id, 'Branch' );
  var HQRole = Roles.userHasRole( user._id, 'HQ' );
  var insurerRole = Roles.userHasRole( user._id, 'insurer' );
  if ( branchRole ) {
    ReactiveAggregate( this, Claim, [ {
      $match: {
        'createdBy': this.userId,
        $or: [ {
          'status': "ApprovedRB"
        }, {
          'status': "Approved"
        } ]
      }
    }, {
      $group: {
        '_id': "$branch",
        totalApproved: {
          $sum: 1
        }
      }
    } ], {
      clientCollection: "BranchClaimCount"
    } );
  } else if ( HQRole ) {
    ReactiveAggregate( this, Claim, [ {
      $match: {
        'company': company,
        $or: [ {
          'status': "ApprovedRB"
        }, {
          'status': "Approved"
        } ]
      }
    }, {
      $group: {
        '_id': "$branch",
        totalApproved: {
          $sum: 1
        }
      }
    } ], {
      clientCollection: "BranchClaimCount"
    } );
  } else if ( insurerRole ) {
    ReactiveAggregate( this, Claim, [ {
      $match: {
        'insurer': {
          $in: insurer
        },
        $or: [ {
          'status': "ApprovedRB"
        }, {
          'status': "Approved"
        } ]
      }
    }, {
      $group: {
        '_id': "$branch",
        totalApproved: {
          $sum: 1
        }
      }
    } ], {
      clientCollection: "BranchClaimCount"
    } );
  }

} );

Meteor.publish( "BranchClaimPendingCount", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  var branch = user.profile.branch;
  var insurer = user.profile.insurer;
  var branchRole = Roles.userHasRole( user._id, 'Branch' );
  var HQRole = Roles.userHasRole( user._id, 'HQ' );
  var insurerRole = Roles.userHasRole( user._id, 'insurer' );
  if ( branchRole ) {
    ReactiveAggregate( this, Claim, [ {
      $match: {
        'createdBy': this.userId,
        'status': "Pending"
      }
    }, {
      $group: {
        '_id': "$branch",
        totalPending: {
          $sum: 1
        }
      }
    } ], {
      clientCollection: "BranchClaimCount"
    } );
  } else if ( HQRole ) {
    ReactiveAggregate( this, Claim, [ {
      $match: {
        'company': company,
        'status': "Pending"
      }
    }, {
      $group: {
        '_id': "$branch",
        totalPending: {
          $sum: 1
        }
      }
    } ], {
      clientCollection: "BranchClaimCount"
    } );
  } else if ( insurerRole ) {
    ReactiveAggregate( this, Claim, [ {
      $match: {
        'insurer': {
          $in: insurer
        },
        'status': "Pending"
      }
    }, {
      $group: {
        '_id': "$branch",
        totalPending: {
          $sum: 1
        }
      }
    } ], {
      clientCollection: "BranchClaimCount"
    } );
  }

} );

Meteor.publish( "BranchClaimDeniedCount", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  var branch = user.profile.branch;
  var insurer = user.profile.insurer;
  var branchRole = Roles.userHasRole( user._id, 'Branch' );
  var HQRole = Roles.userHasRole( user._id, 'HQ' );
  var insurerRole = Roles.userHasRole( user._id, 'insurer' );
  if ( branchRole ) {
    ReactiveAggregate( this, Claim, [ {
      $match: {
        'createdBy': this.userId,
        $or: [ {
          'status': "Denied"
        }, {
          'status': "DeniedRB"
        } ]
      }
    }, {
      $group: {
        '_id': "$branch",
        totalDenied: {
          $sum: 1
        }
      }
    } ], {
      clientCollection: "BranchClaimCount"
    } );
  } else if ( HQRole ) {
    ReactiveAggregate( this, Claim, [ {
      $match: {
        'company': company,
        $or: [ {
          'status': "Denied"
        }, {
          'status': "DeniedRB"
        } ]
      }
    }, {
      $group: {
        '_id': "$branch",
        totalDenied: {
          $sum: 1
        }
      }
    } ], {
      clientCollection: "BranchClaimCount"
    } );
  } else if ( insurerRole ) {
    ReactiveAggregate( this, Claim, [ {
      $match: {
        'insurer': {
          $in: insurer
        },
        $or: [ {
          'status': "Denied"
        }, {
          'status': "DeniedRB"
        } ]
      }
    }, {
      $group: {
        '_id': "$branch",
        totalDenied: {
          $sum: 1
        }
      }
    } ], {
      clientCollection: "BranchClaimCount"
    } );
  }

} );

Meteor.publish( "MedicalClaimCount", function () {
  ReactiveAggregate( this, Claim, [ {
    $match: {
      $or: [ {
        'status': "ApprovedRB"
      }, {
        'status': "Approved"
      } ],
      "medical": {
        "$exists": true,
        "$ne": null
      },
      "dateFiled": {
        "$exists": true
      }
    }

  }, {
    $project: {
      medical: "$medical",
      month: {
        $month: "$dateFiled"
      },
      year: {
        $year: "$dateFiled"
      }
    }
  }, {
    $group: {
      '_id': "$medical",
      monthFiled: {
        $max: "$month"
      },
      yearFiled: {
        $max: "$year"
      },
      count: {
        $sum: 1
      }
    }
  }, {
    $project: {
      monthFiled: 1,
      yearFiled: 1,
      count: 1
    }
  } ], {
    clientCollection: "MedicalClaimCount"
  } );
} );

Meteor.publish( "DeathClaimCount", function () {
  ReactiveAggregate( this, Claim, [ {
    $match: {
      $or: [ {
        'status': "ApprovedRB"
      }, {
        'status': "Approved"
      } ],
      "causeOfDeath": {
        "$exists": true,
        "$ne": null
      },
      "dateFiled": {
        "$exists": true
      }
    }

  }, {
    $project: {
      causeOfDeath: "$causeOfDeath",
      month: {
        $month: "$dateFiled"
      },
      year: {
        $year: "$dateFiled"
      }
    }
  }, {
    $group: {
      '_id': "$causeOfDeath",
      monthFiled: {
        $max: "$month"
      },
      yearFiled: {
        $max: "$year"
      },
      count: {
        $sum: 1
      }
    }
  }, {
    $project: {
      monthFiled: 1,
      yearFiled: 1,
      count: 1
    }
  } ], {
    clientCollection: "DeathClaimCount"
  } );
} );

Meteor.publish( "TotalPrincipalPremiumTest", function () {
  return TotalPrincipalPremium.find();
} );

Meteor.publish( "TotalPrincipalPremium", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering': "Principal"
      } ],
      'effectivityDate': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate"
      },
      year: {
        $year: "$effectivityDate"
      },
      premium: "$computedPremium",
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalPrincipalPremium"
  } );
} );
Meteor.publish( "TotalPrincipalPremium1", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering1': "Principal"
      } ],
      'effectivityDate1': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate1"
      },
      year: {
        $year: "$effectivityDate1"
      },
      premium: "$computedPremium1"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalPrincipalPremium"
  } );
} );
Meteor.publish( "TotalPrincipalPremium2", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering': "Principal"
      } ],
      'effectivityDate2': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate2"
      },
      year: {
        $year: "$effectivityDate2"
      },
      premium: "$computedPremium2"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalPrincipalPremium"
  } );
} );
Meteor.publish( "TotalPrincipalPremium3", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering3': "Principal"
      } ],
      'effectivityDate3': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate3"
      },
      year: {
        $year: "$effectivityDate3"
      },
      premium: "$computedPremium3"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalPrincipalPremium"
  } );
} );
Meteor.publish( "TotalPrincipalPremium4", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering4': "Principal"
      } ],
      'effectivityDate': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate4"
      },
      year: {
        $year: "$effectivityDate4"
      },
      premium: "$computedPremium4"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalPrincipalPremium"
  } );
} );
Meteor.publish( "TotalPrincipalPremium5", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering5': "Principal"
      } ],
      'effectivityDate5': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate5"
      },
      year: {
        $year: "$effectivityDate5"
      },
      premium: "$computedPremium5"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalPrincipalPremium"
  } );
} );
Meteor.publish( "TotalPrincipalPremium6", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering6': "Principal"
      } ],
      'effectivityDate6': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate6"
      },
      year: {
        $year: "$effectivityDate6"
      },
      premium: "$computedPremium6"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalPrincipalPremium"
  } );
} );
Meteor.publish( "TotalPrincipalPremium7", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering7': "Principal"
      } ],
      'effectivityDate7': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate7"
      },
      year: {
        $year: "$effectivityDate7"
      },
      premium: "$computedPremium7"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalPrincipalPremium"
  } );
} );
Meteor.publish( "TotalPrincipalPremium8", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering8': "Principal"
      } ],
      'effectivityDate8': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate8"
      },
      year: {
        $year: "$effectivityDate8"
      },
      premium: "$computedPremium8"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalPrincipalPremium"
  } );
} );
Meteor.publish( "TotalPrincipalPremium9", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering9': "Principal"
      } ],
      'effectivityDate9': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate9"
      },
      year: {
        $year: "$effectivityDate9"
      },
      premium: "$computedPremium9"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalPrincipalPremium"
  } );
} );

// Meteor.publish( "TotalPrincipal", function () {
//   var self = this;
//   var user = Meteor.users.findOne( {
//     "_id": self.userId
//   }, {
//     fields: {
//       "profile": 1
//     }
//   } );
//   var company = user.profile.company;
//   ReactiveAggregate( this, TotalPrincipalPremium, [ {
//     $project: {
//       month: 1,
//       premium: 1
//     }
//   }, {
//     $group: {
//       _id: "$month",
//       totalPremium: {
//         $sum: "$premium"
//       }
//     }
//   }, {
//     $project: {
//       year: 1,
//       company: 1,
//       branch: 1,
//       totalPremium: "$totalPremium"
//     }
//   } ], {
//     clientCollection: "TotalTotalPrincipalPremium"
//   } );
// } );

Meteor.publish( "TotalChildrenPremium", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering': "Dependent-Children"
      } ],
      'effectivityDate': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate"
      },
      year: {
        $year: "$effectivityDate"
      },
      premium: "$computedPremium"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalChildrenPremium"
  } );
} );
Meteor.publish( "TotalChildrenPremium1", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering1': "Dependent-Children"
      } ],
      'effectivityDate1': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate1"
      },
      year: {
        $year: "$effectivityDate1"
      },
      premium: "$computedPremium1"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalChildrenPremium"
  } );
} );
Meteor.publish( "TotalChildrenPremium2", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering2': "Dependent-Children"
      } ],
      'effectivityDate2': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate2"
      },
      year: {
        $year: "$effectivityDate2"
      },
      premium: "$computedPremium2"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalChildrenPremium"
  } );
} );
Meteor.publish( "TotalChildrenPremium3", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering3': "Dependent-Children"
      } ],
      'effectivityDate3': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate3"
      },
      year: {
        $year: "$effectivityDate3"
      },
      premium: "$computedPremium3"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalChildrenPremium"
  } );
} );
Meteor.publish( "TotalChildrenPremium4", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering4': "Dependent-Children"
      } ],
      'effectivityDate4': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate4"
      },
      year: {
        $year: "$effectivityDate4"
      },
      premium: "$computedPremium4"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalChildrenPremium"
  } );
} );
Meteor.publish( "TotalChildrenPremium5", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering5': "Dependent-Children"
      } ],
      'effectivityDate5': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate5"
      },
      year: {
        $year: "$effectivityDate5"
      },
      premium: "$computedPremium5"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalChildrenPremium"
  } );
} );
Meteor.publish( "TotalChildrenPremium6", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering6': "Dependent-Children"
      } ],
      'effectivityDate6': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate6"
      },
      year: {
        $year: "$effectivityDate6"
      },
      premium: "$computedPremium6"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalChildrenPremium"
  } );
} );
Meteor.publish( "TotalChildrenPremium7", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering7': "Dependent-Children"
      } ],
      'effectivityDate7': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate7"
      },
      year: {
        $year: "$effectivityDate7"
      },
      premium: "$computedPremium7"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalChildrenPremium"
  } );
} );
Meteor.publish( "TotalChildrenPremium8", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering8': "Dependent-Children"
      } ],
      'effectivityDate8': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate8"
      },
      year: {
        $year: "$effectivityDate8"
      },
      premium: "$computedPremium8"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalChildrenPremium"
  } );
} );
Meteor.publish( "TotalChildrenPremium9", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering9': "Dependent-Children"
      } ],
      'effectivityDate9': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate9"
      },
      year: {
        $year: "$effectivityDate9"
      },
      premium: "$computedPremium9"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalChildrenPremium"
  } );
} );

Meteor.publish( "TotalSpousePremium", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering': "Dependent-Spouse"
      } ],
      'effectivityDate': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate"
      },
      year: {
        $year: "$effectivityDate"
      },
      premium: "$computedPremium"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalSpousePremium"
  } );
} );
Meteor.publish( "TotalSpousePremium1", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering1': "Dependent-Spouse"
      } ],
      'effectivityDate1': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate1"
      },
      year: {
        $year: "$effectivityDate1"
      },
      premium: "$computedPremium1"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalSpousePremium"
  } );
} );
Meteor.publish( "TotalSpousePremium2", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering2': "Dependent-Spouse"
      } ],
      'effectivityDate2': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate2"
      },
      year: {
        $year: "$effectivityDate2"
      },
      premium: "$computedPremium2"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalSpousePremium"
  } );
} );
Meteor.publish( "TotalSpousePremium3", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering3': "Dependent-Spouse"
      } ],
      'effectivityDate3': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate3"
      },
      year: {
        $year: "$effectivityDate3"
      },
      premium: "$computedPremium3"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalSpousePremium"
  } );
} );
Meteor.publish( "TotalSpousePremium4", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering4': "Dependent-Spouse"
      } ],
      'effectivityDate4': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate4"
      },
      year: {
        $year: "$effectivityDate4"
      },
      premium: "$computedPremium4"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalSpousePremium"
  } );
} );
Meteor.publish( "TotalSpousePremium5", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering5': "Dependent-Spouse"
      } ],
      'effectivityDate5': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate5"
      },
      year: {
        $year: "$effectivityDate5"
      },
      premium: "$computedPremium5"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalSpousePremium"
  } );
} );
Meteor.publish( "TotalSpousePremium6", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering6': "Dependent-Spouse"
      } ],
      'effectivityDate6': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate6"
      },
      year: {
        $year: "$effectivityDate6"
      },
      premium: "$computedPremium6"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalSpousePremium"
  } );
} );
Meteor.publish( "TotalSpousePremium7", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering7': "Dependent-Spouse"
      } ],
      'effectivityDate7': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate7"
      },
      year: {
        $year: "$effectivityDate7"
      },
      premium: "$computedPremium7"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalSpousePremium"
  } );
} );
Meteor.publish( "TotalSpousePremium8", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering8': "Dependent-Spouse"
      } ],
      'effectivityDate8': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate8"
      },
      year: {
        $year: "$effectivityDate8"
      },
      premium: "$computedPremium8"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalSpousePremium"
  } );
} );
Meteor.publish( "TotalSpousePremium9", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering9': "Dependent-Spouse"
      } ],
      'effectivityDate9': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate9"
      },
      year: {
        $year: "$effectivityDate9"
      },
      premium: "$computedPremium9"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalSpousePremium"
  } );
} );

Meteor.publish( "TotalSiblingsPremium", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering': "Dependent-Sibling"
      } ],
      'effectivityDate': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate"
      },
      year: {
        $year: "$effectivityDate"
      },
      premium: "$computedPremium"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalSiblingsPremium"
  } );
} );
Meteor.publish( "TotalSiblingsPremium1", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering1': "Dependent-Sibling"
      } ],
      'effectivityDate1': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate1"
      },
      year: {
        $year: "$effectivityDate1"
      },
      premium: "$computedPremium1"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalSiblingsPremium"
  } );
} );
Meteor.publish( "TotalSiblingsPremium2", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering2': "Dependent-Sibling"
      } ],
      'effectivityDate2': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate2"
      },
      year: {
        $year: "$effectivityDate2"
      },
      premium: "$computedPremium2"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalSiblingsPremium"
  } );
} );
Meteor.publish( "TotalSiblingsPremium3", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering3': "Dependent-Sibling"
      } ],
      'effectivityDate3': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate3"
      },
      year: {
        $year: "$effectivityDate3"
      },
      premium: "$computedPremium3"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalSiblingsPremium"
  } );
} );
Meteor.publish( "TotalSiblingsPremium4", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering4': "Dependent-Sibling"
      } ],
      'effectivityDate4': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate4"
      },
      year: {
        $year: "$effectivityDate4"
      },
      premium: "$computedPremium4"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalSiblingsPremium"
  } );
} );
Meteor.publish( "TotalSiblingsPremium5", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering5': "Dependent-Sibling"
      } ],
      'effectivityDate5': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate5"
      },
      year: {
        $year: "$effectivityDate5"
      },
      premium: "$computedPremium5"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalSiblingsPremium"
  } );
} );
Meteor.publish( "TotalSiblingsPremium6", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering6': "Dependent-Sibling"
      } ],
      'effectivityDate6': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate6"
      },
      year: {
        $year: "$effectivityDate6"
      },
      premium: "$computedPremium6"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalSiblingsPremium"
  } );
} );
Meteor.publish( "TotalSiblingsPremium7", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering7': "Dependent-Sibling"
      } ],
      'effectivityDate7': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate7"
      },
      year: {
        $year: "$effectivityDate7"
      },
      premium: "$computedPremium7"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalSiblingsPremium"
  } );
} );
Meteor.publish( "TotalSiblingsPremium8", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering8': "Dependent-Sibling"
      } ],
      'effectivityDate8': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate8"
      },
      year: {
        $year: "$effectivityDate8"
      },
      premium: "$computedPremium8"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalSiblingsPremium"
  } );
} );
Meteor.publish( "TotalSiblingsPremium9", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering9': "Dependent-Sibling"
      } ],
      'effectivityDate9': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate9"
      },
      year: {
        $year: "$effectivityDate9"
      },
      premium: "$computedPremium9"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalSiblingsPremium"
  } );
} );

Meteor.publish( "TotalParentsPremium", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering': "Dependent-Parent"
      } ],
      'effectivityDate': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate"
      },
      year: {
        $year: "$effectivityDate"
      },
      premium: "$computedPremium"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalParentsPremium"
  } );
} );
Meteor.publish( "TotalParentsPremium1", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering1': "Dependent-Parent"
      } ],
      'effectivityDate1': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate1"
      },
      year: {
        $year: "$effectivityDate1"
      },
      premium: "$computedPremium1"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalParentsPremium"
  } );
} );
Meteor.publish( "TotalParentsPremium2", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering2': "Dependent-Parent"
      } ],
      'effectivityDate2': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate2"
      },
      year: {
        $year: "$effectivityDate2"
      },
      premium: "$computedPremium2"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalParentsPremium"
  } );
} );
Meteor.publish( "TotalParentsPremium3", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering3': "Dependent-Parent"
      } ],
      'effectivityDate3': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate3"
      },
      year: {
        $year: "$effectivityDate3"
      },
      premium: "$computedPremium3"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalParentsPremium"
  } );
} );
Meteor.publish( "TotalParentsPremium4", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering4': "Dependent-Parent"
      } ],
      'effectivityDate4': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate4"
      },
      year: {
        $year: "$effectivityDate4"
      },
      premium: "$computedPremium4"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalParentsPremium"
  } );
} );
Meteor.publish( "TotalParentsPremium5", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering5': "Dependent-Parent"
      } ],
      'effectivityDate5': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate5"
      },
      year: {
        $year: "$effectivityDate5"
      },
      premium: "$computedPremium5"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalParentsPremium"
  } );
} );
Meteor.publish( "TotalParentsPremium6", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering6': "Dependent-Parent"
      } ],
      'effectivityDate6': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate6"
      },
      year: {
        $year: "$effectivityDate6"
      },
      premium: "$computedPremium6"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalParentsPremium"
  } );
} );
Meteor.publish( "TotalParentsPremium7", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering7': "Dependent-Parent"
      } ],
      'effectivityDate7': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate7"
      },
      year: {
        $year: "$effectivityDate7"
      },
      premium: "$computedPremium7"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalParentsPremium"
  } );
} );
Meteor.publish( "TotalParentsPremium8", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering8': "Dependent-Parent"
      } ],
      'effectivityDate8': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate8"
      },
      year: {
        $year: "$effectivityDate8"
      },
      premium: "$computedPremium8"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalParentsPremium"
  } );
} );
Meteor.publish( "TotalParentsPremium9", function () {
  var self = this;
  var user = Meteor.users.findOne( {
    "_id": self.userId
  }, {
    fields: {
      "profile": 1
    }
  } );
  var company = user.profile.company;
  ReactiveAggregate( this, Enrollments, [ {
    $match: {
      'company': company,
      $or: [ {
        'productOffering9': "Dependent-Parent"
      } ],
      'effectivityDate9': {
        "$exists": true
      }
    }
  }, {
    $project: {
      company: "$company",
      branch: "$branch",
      month: {
        $month: "$effectivityDate9"
      },
      year: {
        $year: "$effectivityDate9"
      },
      premium: "$computedPremium9"
    }
  }, {
    $group: {
      _id: "$month",
      totalPremium: {
        $sum: "$premium"
      },
      branch: {
        $max: "$branch"
      },
      company: {
        $max: "$company"
      },
      year: {
        $max: "$year"
      }
    }
  }, {
    $project: {
      year: 1,
      company: 1,
      branch: 1,
      totalPremium: 1
    }
  } ], {
    clientCollection: "TotalParentsPremium"
  } );
} );
