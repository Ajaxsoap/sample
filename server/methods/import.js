Meteor.methods({
	'importFile':function(fileid,filename){
		// var csv = Meteor.require('CSV');
		var fs = Npm.require('fs');
		var path = Npm.require('path');
		var file = Uploads.find({_id:fileid});
		Meteor.setTimeout(function(){
			var filepath = path.join(process.env.PWD, '/imports/uploads-' + fileid + '-' + filename);
			CSV().from.stream(
				fs.createReadStream(filepath),
				{'escape':'\\'})
				.on('record',Meteor.bindEnvironment(function(row,index){
					Enrollments.insert({
						fullName: row[0],
						birthdate: new Date(row[1]),
						ageOfEnrollee: row[2],
						gender: row[3],
						address: [
							{phone: row[4]},
							{address: row[5]},
							{city: row[6]}
						],
						beneficiary: [
							{name: row[7]},
							{name: row[8]},
							{name: row[9]},
							{name: row[10]},
							{name: row[11]},
							{name: row[12]},
							{name: row[13]},
							{name: row[14]},
							{name: row[15]},
							{name: row[16]}
						],
						policyDetails: [
							{effectivityDate: new Date(row[17])},
							{maturityDate: new Date(row[18])}
						],
						civilStatus: [
							{maritalStatus: row[19]},
							{spouseName: row[20]},
							{spouseDateOfBirth: row[21]},
							{spouseAge: row[22]}
						],
						children: [
							{name: row[23]},
							{birthdate: new Date(row[24])},
							{age: row[25]},
							{name: row[26]},
							{birthdate: new Date(row[27])},
							{age: row[28]},
							{name: row[29]},
							{birthdate: new Date(row[30])},
							{age: row[31]},
							{name: row[32]},
							{birthdate: new Date(row[33])},
							{age: row[34]},
							{name: row[35]},
							{birthdate: new Date(row[36])},
							{age: row[37]},
							{name: row[38]},
							{birthdate: new Date(row[39])},
							{age: row[40]},
							{name: row[41]},
							{birthdate: new Date(row[42])},
							{age: row[43]},
							{name: row[44]},
							{birthdate: new Date(row[45])},
							{age: row[46]},
							{name: row[47]},
							{birthdate: new Date(row[48])},
							{age: row[49]},
							{name: row[50]},
							{birthdate: new Date(row[51])},
							{age: row[52]},
							{name: row[53]},
							{birthdate: new Date(row[54])},
							{age: row[55]}
						],
						parent: [
							{name: row[56]},
							{dateOfBirth: new Date(row[57])},
							{age: row[58]},
							{name: row[59]},
							{dateOfBirth: new Date(row[60])},
							{age: row[61]}
						],
						sibling: [
							{name: row[62]},
							{birthdate: new Date(row[63])},
							{age: row[64]},
							{name: row[65]},
							{birthdate: new Date(row[66])},
							{age: row[67]},
							{name: row[68]},
							{birthdate: new Date(row[69])},
							{age: row[70]},
							{name: row[71]},
							{birthdate: new Date(row[72])},
							{age: row[73]},
							{name: row[74]},
							{birthdate: new Date(row[75])},
							{age: row[76]},
							{name: row[77]},
							{birthdate: new Date(row[78])},
							{age: row[79]},
							{name: row[80]},
							{birthdate: new Date(row[81])},
							{age: row[82]},
							{name: row[83]},
							{birthdate: new Date(row[84])},
							{age: row[85]},
							{name: row[86]},
							{birthdate: new Date(row[87])},
							{age: row[88]},
							{name: row[89]},
							{birthdate: new Date(row[90])},
							{age: row[91]}
						],
						productId: row[93]
					});
				}, function(error){
					console.log(error);
				}))
				.on('error',function(err){
					console.log(err);
				})
				.on('end',function(count){
				});
		},1000);
	}
});
