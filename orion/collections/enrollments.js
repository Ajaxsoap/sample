// Enrollments collection
Enrollments = new orion.collection('enrollments', {
  singularName: 'enrollee',
  pluralName: 'enrollments',
  pub: 'tabular_enrollee',
  link: {
    title: 'Enrollments'
  },
  tabular: {
    columns: [
      orion.attributeColumn('createdAt','createdAt','Enrolled Date'),
      {data: "fullName", title: "Name"},
      {
        data: "policyDetails.effectivityDate",
        title:"Effectivity Date",
        render: function (val, type, doc) {
          if (val instanceof Date) {
            return moment(val).format('ll');
          } else {
            return "Never";
          }
        }
      },
      {
        data: "policyDetails.maturityDate",
        title:"Maturity Date",
        render: function (val, type, doc) {
          if (val instanceof Date) {
            return moment(val).format('ll');
          } else {
            return "Never";
          }
        }
      },
      {data:"company", title:"Company",
      render: function(val, type, doc){
        var company = val;
        var companyName = Companies.findOne(company);
        if (companyName) {
          var cmpny = companyName.name;
          return cmpny;
        }
      }
      },
      {data:'branch', title:"Branch",
      render: function(val, type, doc){
        var branch = val;
        var branchName = Branches.findOne(branch);
        if (branchName) {
          var brnch = branchName.branch;
          return brnch;
          }
        }
      },
      {data:"monthCount()", title: "Month Left"},
      {data:"loanCycle()", title: "Loan Cycle" }
  ],
  extraFields: ['company','branch','_version']
  }
}).vermongo({timestamps: true, userId: 'modifierId', ignoredFields: ['']});

enrolleeVersion = Enrollments.getVersionCollection();

Enrollments.attachSchema(new SimpleSchema({
    fullName: {
      type: String,
      max: 50,
      optional: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-12 col-sm-12'
        }
      }
    },
    company: {
      type: String,
      optional: true,
      autoform: {
        afFormGroup: {
        'formgroup-class': 'hidden col-xs-6 col-sm-4'
        }
      },
      autoValue: function() {
      if (this.isInsert) {
        var user = Meteor.users.findOne({ "_id": this.userId }, { fields: { "profile": 1 } });
        if (user) {
          return user && user.profile.company;
        }
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
    },
    branch: {
      type: String,
      optional: true,
      autoform: {
        afFormGroup: {
        'formgroup-class': 'hidden col-xs-6 col-sm-4'
        }
      },
      autoValue: function() {
      if (this.isInsert) {
        var user = Meteor.users.findOne({ "_id": this.userId }, { fields: { "profile": 1 } });
        if (user) {
          return user && user.profile.branch;
        }
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
    },
    productId: orion.attribute('hasOne', {
      label: "Insurance Type",
      optional: true,
      autoform: {
        afFormGroup: {
        'formgroup-class': 'col-xs-12 col-sm-12'
        }
      }
    },
    {
      collection: Products,
      titleField: 'name',
      additionalFields: ['active'],
      publicationName: 'prodEnrollee',

    }
    ),
    birthdate: {
      type: Date,
      label: "Birthday",
      optional: true,
      autoform: {
        type: 'bootstrap-datepicker',
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    ageOfEnrollee: {
      type: Number,
      label: "Age",
      max: 65,
      optional: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    gender: {
      type: String,
      allowedValues: ["Male","Female"],
      optional: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    phone: {
      type: Number,
      label: "Phone",
      optional: true,
      blackbox: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    address: {
      type: String,
      optional: true,
      blackbox: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    city:{
      type: String,
      optional: true,
      blackbox: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    beneficiary: {
      type: Array,
      optional: true,
      blackbox: true
    },
    'beneficiary.$': {
      type: Object,
      optional: true,
      blackbox: true,
      autoform: {
        afObjectField: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'beneficiary.$.name': {
      type: String,
      label: "Name",
      optional: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    policyDetails: {
      type:Object,
      optional: true,
      blackbox: true,
      autoform: {
        afObjectField: {
          bodyClass: 'container-fluid row'
        }
      }
    },
    'policyDetails.effectivityDate': {
      type: Date,
      label: "Effectivity Date",
      optional: true,
      blackbox: true,
      autoform: {
        type: "bootstrap-datepicker",
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'policyDetails.maturityDate': {
      type: Date,
      label: "Maturity Date",
      optional: true,
      blackbox: true,
      autoform: {
        type: "bootstrap-datepicker",
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    civilStatus :{
      type: Object,
      optional: true,
      blackbox: true,
      autoform: {
        afObjectField: {
          bodyClass: 'container-fluid row'
        }
      }
    },
    'civilStatus.maritalStatus': {
      type: String,
      label: "Marital Status",
      optional: true,
      blackbox: true,
      allowedValues:['Single','Married','Widow','Annuled'],
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-12'
        }
      }
    },
    'civilStatus.spouseName': {
      type: String,
      label: "Spouse Name",
      optional: true,
      blackbox: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'civilStatus.spouseDateOfBirth': {
      type: Date,
      label: "Spouse Birthdate",
      optional: true,
      blackbox: true,
      autoform: {
        type: "bootstrap-datepicker",
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'civilStatus.spouseAge': {
      type: Number,
      label: "Spouse Age",
      optional: true,
      blackbox: true,
      min:18,
      max:65,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    children: {
      type: Array,
      optional: true,
      blackbox: true,
      autoform: {
        afObjectField: {
          bodyClass: 'container-fluid row'
        }
      }
    },
    'children.$': {
      type: Object,
      optional: true,
      blackbox: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'children.$.name': {
      type: String,
      label: "Child Name",
      optional: true,
      blackbox: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'children.$.birthdate': {
      type: Date,
      label: "Child Birthdate",
      optional: true,
      blackbox: true,
      autoform: {
        type: "bootstrap-datepicker",
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'children.$.age': {
      type: Number,
      label: "Age of Child",
      optional: true,
      blackbox: true,
      min: 1,
      max: 22,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    parent: {
      type: Array,
      optional: true,
      blackbox: true
    },
    'parent.$': {
      type: Object,
      optional: true,
      blackbox: true,
      autoform: {
        afObjectField: {
          bodyClass: 'container-fluid row'
        }
      }
    },
    'parent.$.name': {
      type: String,
      label: "Parent Name",
      optional: true,
      blackbox: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'parent.$.dateOfBirth': {
      type: Date,
      label: "Parent Birthdate",
      optional: true,
      blackbox: true,
      autoform: {
        type: "bootstrap-datepicker",
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'parent.$.age': {
      type: Number,
      label: "Age of Parent",
      optional: true,
      blackbox: true,
      min: 18,
      max: 65,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    sibling: {
      type: Array,
      optional: true,
      blackbox: true
    },
    'sibling.$': {
      type: Object,
      optional: true,
      blackbox: true,
      autoform: {
        afObjectField: {
          bodyClass: 'container-fluid row'
        }
      }
    },
    'sibling.$.name': {
      type: String,
      label: "Sibling Name",
      optional: true,
      blackbox: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'sibling.$.birthdate': {
      type: Date,
      label: "Sibling Birthdate",
      optional: true,
      blackbox: true,
      autoform: {
        type: "bootstrap-datepicker",
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'sibling.$.age': {
      type: Number,
      label: "Sibling Age",
      optional: true,
      blackbox: true,
      min: 1,
      max: 22,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },

    createdAt: orion.attribute('createdAt'),
    createdBy: orion.attribute('createdBy'),

}));

// Claims collection
Claim = new orion.collection('claims', {
  singularName: 'claim',
  pluralName: 'claims',
  link: {
    title: 'Claims'
  },
  tabular: {
    columns: [
      {
        data: 'dateFiled',
        title:'Date Filed',
        render: function (val, type, doc) {
          if (val instanceof Date) {
            return moment(val).format('lll');
          } else {
            return "Never";
          }
        }
      },
      {data:'daysProcessed()', title: 'Days Processed'},
      {data: 'claimNumber', title: "Claim Reference Number"},
      orion.attributeColumn('hasOne', 'enrollmentId', 'Name of Insured'),
      {data: 'clientType', title: 'Client Type' },
      {data:"status", title: "Status",
        tmpl: Meteor.isClient && Template.status
      },
      {data:'ammountPaid', title:'Amount Paid'},
      {data:'causeOfDeath', title:'Cause Of Death'},
      {data:'medical', title:'Medical'}
    ],
    additionalFields:['dateFiled','causeOfDeath','medical']
  }
});

Claim.attachSchema(new SimpleSchema ({
  dateFiled: {
    type: Date,
    autoform: {
      'formgroup-class': 'hidden col-xs-6 col-sm-4'
    },
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    },

  },
  companyUser: {
    type: String,
    optional: true,
    autoform: {
      'formgroup-class': 'hidden col-xs-6 col-sm-4'
    },
    autoValue: function() {
    if (this.isInsert) {
      var user = Meteor.users.findOne({ "_id": this.userId }, { fields: { "profile": 1 } });
      if (user) {
        return user && user.profile.company;
      }
    } else {
      this.unset();  // Prevent user from supplying their own value
    }
  }
  },
  branchUser: {
    type: String,
    optional: true,
    autoform: {
      'formgroup-class': 'hidden col-xs-6 col-sm-4'
    },
    autoValue: function() {
    if (this.isInsert) {
      var user = Meteor.users.findOne({ "_id": this.userId }, { fields: { "profile": 1 } });
      if (user) {
        return user && user.profile.branch;
      }
    } else {
      this.unset();  // Prevent user from supplying their own value
    }
  }
},
  claimNumber: {
    type: String,
    label: "Claim Number",
    autoform: {
      afFieldInput: {
        //type: 'autocomplete-input',
        placeholder: 'CompanyName-ProductType-Year-XXXX',
        //var user = Roles.userHasRole('');
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-6'
      }
    }
  },
  enrollmentId: orion.attribute('hasOne', {
    label: "Insured Name",
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-6'
      }
    }
  },
  {
    collection: Enrollments,
    titleField: 'fullName',
    additionalFields:['company'],
    publicationName: 'enrolledClaim',
    filter: function(userId) {
      var user = Meteor.users.findOne({"_id": userId},{fields: {profile: 1}});
      var admin = Roles.userHasRole(userId, "admin");
      var hq = Roles.userHasRole(userId, 'HQ');
      var branch = Roles.userHasRole(userId, 'Branch');
      if ( admin ) {
        console.log( "Hello Admin" );
        return {};
      } else if ( hq ) {
        console.log( "Hello HQ" );
        return { company: user.profile.company };
      } else if ( branch ) {
        console.log( "Hello Branch" );
        return { company: user.profile.branch };
      }

      }
  }),
  clientType: {
    type: String,
    label: "Client Type",
    allowedValues: [
      'Principal',
      'Dependent-Children',
      'Dependent-Spouse',
      'Dependent-Sibling',
      'Dependent-Parent'
    ],
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  status: {
    type: String,
    allowedValues: ['Pending','Approved','Denied'],
    defaultValue: 'Pending',
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  ammountPaid: {
    type: Number,
    label: "Amount Paid",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  causeOfDeath: {
    type: String,
    label: "Life - Cause of Death",
    allowedValues: [
      'Cardiovascular',
      'Respiratory',
      'Renal failure',
      'Cancer',
      'Accident',
      'Diabetes',
      'Animal/Insect bite',
      'liver illness',
      'others'
    ],
    optional: true,
    autoform: {
      'formgroup-class': 'col-xs-6 col-sm-4',

    }
  },
  medical: {
    type: String,
    label: "Non-life - Medical",
    allowedValues: [
      'Animal/Insect bite',
      'Hypertension',
      'Diabetes',
      'CVA,Chronic Kidney disease',
      'Abration',
      'Hypersensitivity',
      'community acquired pneumonia',
      'others'
    ],
    optional: true,
    autoform: {
      'formgroup-class': 'col-xs-6 col-sm-4',

    }
  },

  remarks: {
    type: String,
    label: "Remarks",
    optional: true,
    autoform: {
      rows: 4,
      'formgroup-class': 'col-xs-8 col-sm-8'
    }
  },
  file: orion.attribute('file',{
    label: "Attachments",
    //title:"My File",
    optional: true,
    autoform: {
      'formgroup-class': 'col-xs-4 col-sm-4'
    }
  }),
  createdBy: orion.attribute('createdBy')
}));


Enrollments.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

Claim.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

// Helpers

Enrollments.helpers({
  monthCount: function() {
    var self = this;
    var dateNow = null;
    var dateMaturity = this.policyDetails.maturityDate;
    var monthLeft = countdown(dateNow, dateMaturity, countdown.MONTHS | countdown.DAYS, 2);
    var message = monthLeft.toHTML("label");
    return message;
  },
  loanCycle: function() {
    var version = (this._version);
  //console.log(version);
    return version;
  }
});

Claim.helpers({
  daysProcessed: function(){
    var days = null;
    var filedDate = this.dateFiled;
    var daysCount = countdown(days,filedDate, countdown.MONTHS | countdown.DAYS, 2).toHTML("label");
    //console.log(daysCount);
    return daysCount;
  }
});
