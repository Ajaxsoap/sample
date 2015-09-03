//  Headquarters role
companyHQ = new Roles.Role('HQ');
companyHQ.allow('collections.enrollments.index', true);
companyHQ.allow('collections.enrollments.insert', true);
companyHQ.allow('collections.enrollments.showCreate', true);
companyHQ.allow('collections.enrollments.showUpdate', true);
companyHQ.helper('collections.enrollments.indexFilter', function(){
  var collections = Enrollments.find({companyId:_id});
  return collections;
});

companyHQ.allow('collections.claims.index', true);
companyHQ.allow('collections.claims.insert',true);
companyHQ.allow('collections.claims.showCreate', true);
companyHQ.allow('collections.claims.showUpdate', true);
companyHQ.helper('collections.claims.indexFilter', function(){
  var collections = Enrollments.find({companyId:_id});
  return collections;
});
//  branch role
companyBranch = new Roles.Role('Branch');
companyBranch.allow('collections.enrollments.index', true);
companyBranch.allow('collections.enrollments.insert', true);
companyBranch.allow('collections.enrollments.showCreate', true);
companyBranch.deny('collections.enrollments.showUpdate', true);
companyBranch.helper('collections.enrollments.indexFilter', function() {
  return { createdBy: this.userId };
});

companyBranch.allow('collections.claims.index', true);
companyBranch.allow('collections.claims.insert', true);
companyBranch.allow('collections.claims.showCreate', true);
companyBranch.deny('collections.claims.showUpdate', true);
companyBranch.helper('collections.claims.indexFilter', function() {
  return { createdBy: this.userId };
});

// Insurer role
insurer = new Roles.Role('insurer');
insurer.allow('collections.enrollments.index', true);
insurer.helper('collections.enrollments.indexFilter', {});

insurer.allow('collections.claims.index', true);
insurer.helper('collections.claims.indexFilter', function(){
  return Collection.find({"status":"Pending"});

});
