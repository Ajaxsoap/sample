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


Products.helpers({
  premium: function(){
    var grossPremium = this.grossPremium;
    grossPremium = this.netPremium + this.grossProfit;
    return grossPremium;
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
      orion.attributeColumn('hasMany','productId','Product Type')
    ]
  }
});

Companies.attachSchema(new SimpleSchema ({
  name: {
    type: String,
    label: "Company Name",
    autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
    }
  },
  productId: orion.attribute('hasMany', {
    label: "Product Type",
    autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
    }
  },
  {
    collection: Products,
    titleField: 'name',
    additionalFields:['active'],
    publicationName: 'Produkto'
  }
  ),
  branchId: orion.attribute('hasMany', {
    label: "Branches",
    autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
    }
  },
  {
    collection: Branches,
    titleField: 'branch',
    additionalFields: ['active'],
    publicationName: 'branchPub'
  }
  ),
  // insurerId: orion.attribute('hasMany', {
  //   label: "Insurer",
  //   autoform: {
  //       afFormGroup: {
  //         'formgroup-class': 'col-xs-6 col-sm-4'
  //       }
  //   }
  // },
  // {
  //   collection: Insurers,
  //   titleField: 'name',
  //   additionalFields:['active'],
  //   publicationName: 'InsurersPub'
  // }
  // ),
  createdBy: orion.attribute('createdBy')
}));

// Insurer collection
Insurers = new orion.collection('insurers', {
  singularName: 'insurer',
  pluralName: 'insurers',
  link: {
    title: 'Insurers'
  },
  tabular: {
    columns: [
      {data:'name', title: 'Insurer Name'},
      orion.attributeColumn('hasMany', 'productId', 'Insurance Type'),
      orion.attributeColumn('hasMany', 'company', 'Insured Company')
    ]
  }
});


Insurers.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Insurer Name",
    autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
    }
  },
  productId: orion.attribute('hasMany', {
    label: "Product Type",
    autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
    }
  },
  {
    collection: Products,
    titleField: 'name',
    additionalFields:['active'],
    publicationName: 'insuranceProduct'
  }
  ),
  // company: orion.attribute('hasMany', {
  //   label: "Company",
  //   autoform: {
  //     afFormGroup: {
  //       'formgroup-class': 'col-xs-6 col-sm-4'
  //     }
  //   }
  // },
  // {
  //   collection: Companies,
  //   titleField: 'name',
  //   additionalFields: ['active'],
  //   publicationName: 'companyServe'
  // }
  // )
}));

Insurers.allow({
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
