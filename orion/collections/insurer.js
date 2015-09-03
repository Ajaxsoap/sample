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
    publicationName: 'insuranceType'
  }
  ),
}));
