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
						'firstName':row[0],
						'lastName':row[1],
						'middleName':row[2],
						'birthdate':row[3],
						'ageOfEnrollee':row[4],
						'gender':row[5],
						'address.phone':row[6],
						'address.address':row[7],
						'address.city':row[8],
						'beneficiary.$.name':row[9],
						// 'beneficiary.1.name':row[10],
						// 'beneficiary.2.name':row[11],
						// 'beneficiary.3.name':row[12],
						// 'beneficiary.4.name':row[13],
						// 'beneficiary.5.name':row[14],
						// 'beneficiary.6.name':row[15],
						// 'beneficiary.7.name':row[16],
						// 'beneficiary.8.name':row[17],
						// 'beneficiary.9.name':row[18],
						'policyDetails.effectivityDate':row[19],
						'policyDetails.maturityDate':row[20],
						'civilStatus.maritalStatus':row[21],
						'civilStatus.spouseName':row[22],
						'civilStatus.spouseDateOfBirth':row[23],
						'civilStatus.spouseAge':row[24],
						'children.$.name':row[25],
						'children.$.birthdate':row[26],
						'children.$.age':row[27],
						// 'children.1.name':row[28],
						// 'children.1.birthdate':row[29],
						// 'children.1.age':row[30],
						// 'children.2.name':row[31],
						// 'children.2.birthdate':row[32],
						// 'children.2.age':row[33],
						// 'children.3.name':row[34],
						// 'children.3.birthdate':row[35],
						// 'children.3.age':row[36],
						// 'children.4.name':row[37],
						// 'children.4.birthdate':row[38],
						// 'children.4.age':row[39],
						// 'children.5.name':row[40],
						// 'children.5.birthdate':row[41],
						// 'children.5.age':row[42],
						// 'children.6.name':row[43],
						// 'children.6.birthdate':row[44],
						// 'children.6.age':row[45],
						// 'children.7.name':row[46],
						// 'children.7.birthdate':row[47],
						// 'children.7.age':row[48],
						// 'children.8.name':row[49],
						// 'children.8.birthdate':row[50],
						// 'children.8.age':row[51],
						// 'children.9.name':row[52],
						// 'children.9.birthdate':row[53],
						// 'children.9.age':row[54],
						'parent.$.name':row[55],
						'parent.$.dateOfBirth':row[56],
						'parent.$.age':row[57],
						// 'parent.1.name':row[58],
						// 'parent.1.dateOfBirth':row[59],
						// 'parent.1.age':row[60],
						'sibling.$.name':row[61],
						'sibling.$.birthdate':row[62],
						'sibling.$.age':row[63],
						// 'sibling.1.name':row[64],
						// 'sibling.1.birthdate':row[65],
						// 'sibling.1.age':row[66],
						// 'sibling.2.name':row[67],
						// 'sibling.2.birthdate':row[68],
						// 'sibling.2.age':row[69],
						// 'sibling.3.name':row[70],
						// 'sibling.3.birthdate':row[71],
						// 'sibling.3.age':row[72],
						// 'sibling.4.name':row[73],
						// 'sibling.4.birthdate':row[74],
						// 'sibling.4.age':row[75],
						// 'sibling.5.name':row[76],
						// 'sibling.5.birthdate':row[77],
						// 'sibling.5.age':row[78],
						// 'sibling.6.name':row[79],
						// 'sibling.6.birthdate':row[80],
						// 'sibling.6.age':row[81],
						// 'sibling.7.name':row[82],
						// 'sibling.7.birthdate':row[83],
						// 'sibling.7.age':row[84],
						// 'sibling.8.name':row[85],
						// 'sibling.8.birthdate':row[86],
						// 'sibling.8.age':row[87],
						// 'sibling.9.name':row[88],
						// 'sibling.9.birthdate':row[89],
						// 'sibling.9.age':row[90],
						'companyId':row[91],
						'branchId':row[92],
						'productId':row[93]
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
