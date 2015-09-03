Template.claimsCreate.events({
  'click .create-btn': function () {
    $('#orionBootstrapCollectionsCreateForm').submit();
  }
});

// Template.claimsCreate.helpers({
//   settings: function() {
//     return {
//       position: "top",
//       limit: 5,
//       rules: [
//         {
//           //token: '',
//           collection: Companies,
//           field: "name",
//           matchAll: true,
//           template: Template.companyPill
//         }
//       ]
//     };
//   }
// });

// AutoForm.addHooks('orionBootstrapCollectionsCreateForm', {
//   onSuccess: function() {
//     setTimeout(function() {
//       toastr.options = {
//         closeButton: true,
//         progressBar: true,
//         showMethod: 'slideDown',
//         timeOut: 5000
//       };
//     toastr.success('Successfully Insured an Enrollee');
//     }, 1300);
//     RouterLayer.go(this.collection.indexPath());
//   },
//   onError: function() {
//     setTimeout(function() {
//       toastr.options = {
//         closeButton: true,
//         progressBar: false,
//         showMethod: 'slideDown',
//         timeOut: 10000
//       };
//     toastr.error('Please review the form if you have left something empty', 'Ooops! Something is missing.');
//     }, 1300);
//   }
// });
