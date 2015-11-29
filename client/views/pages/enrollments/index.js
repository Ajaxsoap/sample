Template.enrollmentsIndex.onCreated( function() {
  this.subscribe("companies");
  this.subscribe("branches");
});

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

  // "change .myFileInput": function(evt, tmpl){
	// 	FS.Utility.eachFile(evt,function(file){
	// 		var theFile = new FS.File(file);
	// 		Uploads.insert(theFile,function(err,fileObj){
	// 			if(!err){
	// 				Meteor.call('importFile',fileObj._id,file.name);
	// 			}
	// 		});
	// 	});
	// }
});

Template.enrollmentsIndex.onRendered(function() {
  this.autorun(function () {
    // RouterLayer.isActiveRoute('');
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
});


// this.TabularSelectorInit = function(template) {
//   var sel;
//   if (isUndefined(window.TabularSelector)) {
//     window.TabularSelector = new ReactiveVar({});
//   }
//   sel = window.TabularSelector.get();
//   sel[template] = {};
//   sel[template].titles = [];
//   return window.TabularSelector.set(sel);
// };
//
// this.TabularSelectorMain = function(template) {
//   var SelectedTable;
//   SelectedTable = '#' + template + ' thead th';
//   return $(SelectedTable).each(function() {
//     var $input, ThisClass, sel, title;
//     title = $(SelectedTable).eq($(this).index()).text();
//     sel = window.TabularSelector.get();
//     sel = sel[template];
//     if (isUndefined(_.findWhere(sel, title))) {
//       sel.titles.push(title);
//     }
//     ThisClass = $(SelectedTable).eq($(this).index()).attr('class');
//     ThisClass = ThisClass.replace(/(sortin)\w+/gi, '').trim();
//     if (!(isUndefined(ThisClass) || ThisClass === '')) {
//       $input = $('<input type="text" placeholder="Search ' + title + '"' + 'class="' + ThisClass + '"/>');
//       $(this).html($input);
//       $input.on('click', function(e) {
//         return e.stopPropagation();
//       });
//       return $input.on('keyup', function(e) {
//         var overall;
//         console.log('searching: ' + title + ' and ThisClass: ' + ThisClass);
//         sel = window.TabularSelector.get();
//         sel = sel[template];
//         sel[title] = {};
//         sel[title].search = ThisClass;
//         if (this.value) {
//           sel[title].value = {
//             $regex: this.value,
//             $options: 'i'
//           };
//         } else {
//           delete sel[title];
//         }
//         overall = window.TabularSelector.get();
//         overall[template] = sel;
//         return window.TabularSelector.set(overall);
//       });
//     }
//   });
// };
//
// this.TabularSelectorHelper = function(template) {
//   var ReactiveTest, sel;
//   sel = window.TabularSelector.get();
//   sel = sel[template];
//   ReactiveTest = {};
//   _.each(sel.titles, function(title) {
//     if (!isUndefined(sel[title])) {
//       return ReactiveTest[sel[title].search] = sel[title].value;
//     }
//   });
//   return ReactiveTest;
// };
