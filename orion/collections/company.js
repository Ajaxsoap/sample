// Products collection
Products = new orion.collection('products', {
  singularName: 'product',
  pluralName: 'products',
  link: {
    title: 'Products'
  },
  tabular: {
    columns: [
      {data: "name", title: "Insurance Type"},
      {data: "premium()", title: "Premium"}
    ],
    extraFields: ['netPremium','grossProfit']
  }
});

//Company collection
Companies = new orion.collection('companies', {
  singularName: 'company',
  pluralName: 'companies',
  link: {
    title: 'Company'
  },
  tabular: {
    columns: [
      {data: "name", title: "Company Name"},
      orion.attributeColumn('hasMany','productId','Product Type'),
      // orion.attributeColumn('hasMany','insurerId','Insurer')
    ]
  }
});

// Insurer collection
// Insurers = new orion.collection('insurers', {
//   singularName: 'insurer',
//   pluralName: 'insurers',
//   link: {
//     title: 'Insurers'
//   },
//   tabular: {
//     columns: [
//       orion.attributeColumn('hasOne', 'name', 'Insurer Name'),
//       orion.attributeColumn('hasMany', 'productId', 'Insurance Type'),
//       orion.attributeColumn('hasMany', 'company', 'Insured Company')
//     ]
//   }
// });

// Products Schema
Products.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Insurance Type",
    autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
    }
  },
  netPremium: {
    type: Number,
    label: "Net",
    autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  grossProfit: {
    type: Number,
    label: "Gross",
    autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
    }
  },

  createdBy: orion.attribute('createdBy')
}));

Products.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

// Products Helpers
Products.helpers({
  premium: function(){
    var grossPremium = this.grossPremium;
    grossPremium = this.netPremium + this.grossProfit;
    return grossPremium;
  }
});

// Companies Schema
Companies.attachSchema(new SimpleSchema ({
  name: {
    type: String,
    label: "Company Name"
  },
  branchId: orion.attribute('hasMany', {
    label: "Branches",
    optional: true
  },
  {
    collection: Branches,
    titleField: 'branch',
    additionalFields: ['_id'],
    publicationName: 'branchPub'
  }
  ),
  productId: orion.attribute('hasMany', {
    label: "Product Type"
  },
  {
    collection: Products,
    titleField: 'name',
    additionalFields:['_id'],
    publicationName: 'Produkto'
  }
  ),
  // insurerId: orion.attribute('hasMany', {
  //   label: "Insurer",
  //   optional: true
  // },
  // {
  //   collection: Insurers,
  //   titleField: 'name',
  //   additionalFields:['_id'],
  //   publicationName: 'InsurersPub'
  // }
  // ),
  createdBy: orion.attribute('createdBy')
}));

Companies.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

// Insurer Schema
// Insurers.attachSchema(new SimpleSchema({
//   name: orion.attribute ('hasOne', {
//     label: "Insurer Name",
//     autoform: {
//         afFormGroup: {
//           'formgroup-class': 'col-xs-6 col-sm-4'
//         }
//     }
//   },
//   {
//     collection: Companies,
//     titleField: 'name',
//     additionalFields: ['_id'],
//     publicationName: 'insurerCompany'
//   }
// ),
//   productId: orion.attribute('hasMany', {
//     label: "Product Type",
//     autoform: {
//         afFormGroup: {
//           'formgroup-class': 'col-xs-6 col-sm-4'
//         }
//     }
//   },
//   {
//     collection: Products,
//     titleField: 'name',
//     additionalFields:['_id'],
//     publicationName: 'insuranceProduct'
//   }
//   ),
//   company: orion.attribute('hasMany', {
//     label: "Company Insured",
//     autoform: {
//       afFormGroup: {
//         'formgroup-class': 'col-xs-6 col-sm-4'
//       }
//     }
//   },
//   {
//     collection: Companies,
//     titleField: 'name',
//     additionalFields: ['_id'],
//     publicationName: 'companyServe'
//   }
//   )
// }));

// Insurers.allow({
//   insert: function(){
//     return true;
//   },
//   update: function(){
//     return true;
//   },
//   remove: function(){
//     return true;
//   }
// });
