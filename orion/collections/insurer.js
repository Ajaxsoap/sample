// // Insurer collections
// Insurers = new orion.collection('insurers', {
//   singularName: 'insurer',
//   pluralName: 'insurers',
//   link: {
//     title: 'Insurers'
//   },
//   tabular: {
//     columns: [
//       {data:'name', title: 'Insurer Name'},
//       orion.attributeColumn('hasMany', 'productId', 'Insurance Type'),
//       orion.attributeColumn('hasMany', 'company', 'Insured Company')
//     ]
//   }
// });
//
// Insurers.attachSchema(new SimpleSchema({
//   name: {
//     type: String,
//     label: "Insurer Name",
//     autoform: {
//         afFormGroup: {
//           'formgroup-class': 'col-xs-6 col-sm-4'
//         }
//     }
//   },
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
//     additionalFields:['active'],
//     publicationName: 'insuranceProduct'
//   }
//   ),
//   company: orion.attribute('hasMany', {
//     label: "Company",
//     autoform: {
//       afFormGroup: {
//         'formgroup-class': 'col-xs-6 col-sm-4'
//       }
//     }
//   },
//   {
//     collection: Companies,
//     titleField: 'name',
//     additionalFields: ['active'],
//     publicationName: 'companyServe'
//   }
//   )
// }));
//
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
