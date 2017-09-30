var KMBIApi = new Restivus({
	apiPath: 'kmbi/',
	useDefaultAuth: true,
  prettyJson: true
});

var patch = function(collection) {
  return function() {
    var entity;
    collection.update(this.urlParams.id, {
      $set: this.bodyParams
    });
    entity = collection.findOne(this.urlParams.id);
    return {
      status: 'success',
      data: entity
    };
  };
};

var getKmbi = function(collection){
	return function() {
		var get;
		get = collection.find({company: "bQzkwdh2nHxkneAHs"});
		return {
			status: 'success',
			data: get
		}
	}
};

KMBIApi.addCollection(Enrollments, {
	excludedEndpoints: ['getAll'],
	routeOptions: {
      authRequired: true
  },
	endpoints: {
		post: {
			authRequired: false
		},
		put: {
			authRequired: false,
			action: patch(Enrollments)
		},
		patch: {
			authRequired: false,
			action: patch(Enrollments)
		},
		delete: {
			authRequired: false
		}
	}
});
