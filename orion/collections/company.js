// Products collection
Products = new orion.collection( 'products', {
  singularName: 'product',
  pluralName: 'products',
  link: {
    title: 'Products'
  },
  tabular: {
    columns: [ {
      data: "name",
      title: "Insurance Type"
    }, {
      data: "productOffering",
      title: "Product Offering"
    }, {
      data: "premium",
      title: "Premium"
    }, {
      data: "productRange",
      title: "Product Range"
    } ],
    // extraFields: ['netPremium','grossProfit']
  }
} );

//Company collection
Companies = new orion.collection( 'companies', {
  singularName: 'company',
  pluralName: 'companies',
  link: {
    title: 'Companies'
  },
  tabular: {
    columns: [ {
        data: "name",
        title: "Company Name"
      },
      orion.attributeColumn( 'hasMany', 'productId', 'Product Type' ),
      // orion.attributeColumn('hasMany','insurerId','Insurer')
    ]
  }
} );

// Insurer collection
// Insurers = new orion.collection( 'insurers', {
//   singularName: 'insurer',
//   pluralName: 'insurers',
//   link: {
//     title: 'Insurers'
//   },
//   tabular: {
//     columns: [
//       orion.attributeColumn( 'hasOne', 'name', 'Insurer Name' ),
//       orion.attributeColumn( 'hasMany', 'productId', 'Insurance Type' ),
//       orion.attributeColumn( 'hasMany', 'company', 'Insured Company' )
//     ]
//   }
// } );

// Products Schema
Products.attachSchema( new SimpleSchema( {
  name: {
    type: String,
    label: "Insurance Type",
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4'
      }
    }
  },
  productOffering: {
    type: String,
    label: "Product Offering",
    optional: true,
    allowedValues: [
      'Principal',
      'Dependent-Children',
      'Dependent-Spouse',
      'Dependent-Sibling',
      'Dependent-Parent'
    ],
    autoform: {
      type: "selectize",
      firstOption: 'Select Product Offering',
      options: function () {
        return [ {
          label: 'Principal',
          value: 'Principal'
        }, {
          label: 'Dependent-Children',
          value: 'Dependent-Children'
        }, {
          label: 'Dependent-Spouse',
          value: 'Dependent-Spouse'
        }, {
          label: 'Dependent-Parent',
          value: 'Dependent-Parent'
        }, {
          label: 'Dependent-Sibling',
          value: 'Dependent-Sibling'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  productRange: {
    type: Number,
    label: "Product Range (Month)",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4'
      }
    }
  },
  netPremium: {
    type: Number,
    label: "Net",
    optional: true,
    decimal: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-2'
      }
    }
  },
  grossProfit: {
    type: Number,
    label: "Gross",
    optional: true,
    decimal: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-2'
      }
    }
  },
  premium: {
    type: Number,
    label: 'Premium',
    optional: true,
    decimal: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-2'
      }
    }
  },
  createdBy: orion.attribute( 'createdBy' )
} ) );

// Companies Schema
Companies.attachSchema( new SimpleSchema( {
  name: {
    type: String,
    label: "Company Name"
  },
  branchId: orion.attribute( 'hasMany', {
    label: "Branches",
    optional: true
  }, {
    collection: Branches,
    titleField: 'branch',
    additionalFields: [ '_id' ],
    publicationName: 'branchPub'
  } ),
  productId: orion.attribute( 'hasMany', {
    label: "Product Type"
  }, {
    collection: Products,
    titleField: 'name',
    additionalFields: [ '_id' ],
    publicationName: 'Produkto'
  } ),

  createdBy: orion.attribute( 'createdBy' )
} ) );

// Insurer Schema
// Insurers.attachSchema( new SimpleSchema( {
//   name: orion.attribute( 'hasOne', {
//     label: "Insurer Name",
//     autoform: {
//       afFormGroup: {
//         'formgroup-class': 'col-xs-6 col-sm-4'
//       }
//     }
//   }, {
//     collection: Companies,
//     titleField: 'name',
//     additionalFields: [ '_id' ],
//     publicationName: 'insurerCompany'
//   } ),
//   productId: orion.attribute( 'hasMany', {
//     label: "Product Type",
//     autoform: {
//       afFormGroup: {
//         'formgroup-class': 'col-xs-6 col-sm-4'
//       }
//     }
//   }, {
//     collection: Products,
//     titleField: 'name',
//     additionalFields: [ '_id' ],
//     publicationName: 'insuranceProduct'
//   } ),
//   company: orion.attribute( 'hasMany', {
//     label: "Company Insured",
//     autoform: {
//       afFormGroup: {
//         'formgroup-class': 'col-xs-6 col-sm-4'
//       }
//     }
//   }, {
//     collection: Companies,
//     titleField: 'name',
//     additionalFields: [ '_id' ],
//     publicationName: 'companyServe'
//   } )
// } ) );
