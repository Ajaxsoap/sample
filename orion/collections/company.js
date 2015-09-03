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
          'formgroup-class': 'col-xs-12 col-sm-12'
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
  grossPremium: {
    type: Number,
    label: "Premium",
    optional: true,
    autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
    }
  },
  createdBy: orion.attribute('createdBy')
}));


Companies = new orion.collection('companies', {
  singularName: 'company',
  pluralName: 'companies',
  link: {
    title: 'Company'
  },
  tabular: {
    columns: [
      {data: "name", title: "Company Name"},
      orion.attributeColumn('hasOne','productId.0.name','Product Type')
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
  createdBy: orion.attribute('createdBy')
}));

Products.helpers({
  premium: function(){
    var grossPremium = this.grossPremium;
    grossPremium = this.netPremium + this.grossProfit;
    return grossPremium;
  }
});
