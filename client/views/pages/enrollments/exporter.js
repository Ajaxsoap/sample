paisEnrollmentExporter = {
	exportEnrollments: function() {
		var self = this;
		Meteor.call("exportEnrollments", function(error, data) {
 
			if ( error ) {
				alert(error); 
				return false;
			}
			
			var csv = Papa.unparse(data);
			self._downloadCSV(csv);
		});
	},
 
	exportEnrollee: function(id) {
		var self = this;
		Meteor.call("exportEnrollee", id, function(error, data) {
 
			if ( error ) {
				alert(error); 
				return false;
			}
			
			var csv = Papa.unparse(data);
			self._downloadCSV(csv);
		});
	},
 
	_downloadCSV: function(csv) {
		var blob = new Blob([csv]);
		var a = window.document.createElement("a");
	    a.href = window.URL.createObjectURL(blob, {type: "text/plain"});
	    a.download = "enrollments.csv";
	    document.body.appendChild(a);
	    a.click();
	    document.body.removeChild(a);
	}
}