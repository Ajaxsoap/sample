// Template.registerHelper("log", function(opt){
//   console.log(opt);
// });
//
// Template.enrollmentsIndex.rendered = function(){
//     Session.set("schema", "Enrollments");
// };
//
// Meteor.subscribe("enrollments");
// // Meteor.subscribe("enrolleesVersions", this.params._id);

Template.enrollmentsIndex.events({
  'click tr': function(event) {
    if (!$(event.target).is('td')) return;
    var dataTable = $(event.target).closest('table').DataTable();
    var rowData = dataTable.row(event.currentTarget).data();
    var collection = rowData._collection();
    if (rowData) {
      if (rowData.canShowUpdate()) {
        var path = collection.updatePath(rowData);
        RouterLayer.go(path);
      }
    }
  },
  "change .myFileInput": function(evt, tmpl){
		FS.Utility.eachFile(evt,function(file){
			var theFile = new FS.File(file);
			Uploads.insert(theFile,function(err,fileObj){
				if(!err){
					Meteor.call('importFile',fileObj._id,file.name);
				}
			});
		});
	}
});

Template.enrollmentsIndex.onRendered(function() {
  this.autorun(function () {
    RouterLayer.isActiveRoute('');
    Session.set('orionBootstrapCollectionsIndex_showTable', false);
    Meteor.defer(function () {
      Session.set('orionBootstrapCollectionsIndex_showTable', true);
    });
  });
});

Template.enrollmentsIndex.helpers({
  showTable: function() {
    return Session.get('orionBootstrapCollectionsIndex_showTable');
  }
  // selector: function (){
  //   var select = Session.get("filter_selector");
  //   console.log(select);
  //   return select ? select : null;
  // }
});
