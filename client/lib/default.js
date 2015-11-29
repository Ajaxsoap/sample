// Run this when the meteor app is started
Meteor.startup(function () {
  orion.links._collection.update({ identifier: 'collections-companies' }, { $set: { index: 0 } });
  orion.links._collection.update({ identifier: 'collections-branches' }, { $set: { index: 1 } });
  orion.links._collection.update({ identifier: 'collections-products' }, { $set: { index: 2 } });
  orion.links._collection.update({ identifier: 'collections-enrollments' }, { $set: { index: 3 } });
  orion.links._collection.update({ identifier: 'collections-claims' }, { $set: { index: 4 } });
  orion.links._collection.update({ identifier: 'collections-accounts' }, { $set: { index: 5 } });

  Tracker.autorun(function(){
    var status = Meteor.status().status;
    if (status === "connected") {
      console.log("Connected to server");
      setTimeout(function() {
        toastr.options = {
        closeButton: true,
        progressBar: true,
        showMethod: 'slideDown',
        timeOut: 2000
      };
      toastr.success('Connected to server');
    }, 1300);
    } else if (status === "connecting") {
        console.log("Reconnecting to server");
        setTimeout(function() {
          toastr.options = {
          closeButton: true,
          progressBar: true,
          preventDuplicates: true,
          showMethod: 'slideDown',
          timeOut: 3000
        };
        toastr.warning('Reconnecting to server');
      }, 1300);
      } else {
          console.log("Disconnected from the server");
          setTimeout(function() {
            toastr.options = {
            closeButton: true,
            progressBar: true,
            preventDuplicates: true,
            showMethod: 'slideDown',
            timeOut: 2000
          };
          toastr.error('Disconnected from the server');
        }, 1300);
      }
    });
});
